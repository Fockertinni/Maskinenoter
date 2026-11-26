#!/usr/bin/env python3
"""Bygger emnesiderne i noter/<fag>/ ud fra markdown-filerne i noter/kilde/<fag>/.

Kør:  python3 noter/kilde/byg.py      (kræver: pip install markdown)

Hver kildefil har en kort top med id, navn, ikon og intro, og derefter tre dele:
  # Noter     almindelig markdown
  # Formler   markdown; kodeblokke (```) bliver formelbokse
  # Quiz      spørgsmål i det lille format herunder

Quiz-format (tom linje mellem spørgsmål):
  Q: Spørgsmålet
  A: forkert svar
  R: rigtigt svar
  A: forkert svar
  F: forklaring (vises altid efter svar)
eller som talopgave:
  Q: Spørgsmålet
  N: 1150 ; 1 ; kr.        (facit ; tolerance ; enhed)
  L: fuld udregning (vises efter to forsøg eller når man giver op)
  F: kort forklaring
"""
import json, re, sys, html
from pathlib import Path
import markdown

ROD = Path(__file__).resolve().parent          # noter/kilde
UD = ROD.parent                                # noter
FAG = {
    "drift": {"navn": "Driftsøkonomi", "farve": "#6b57c9", "farve_m": "#9a88f0", "fra": "m5-drift"},
    "forb": {"navn": "Forbrændingsmotoranlæg", "farve": "#c8501d", "farve_m": "#f08a5a", "fra": "m5-forb"},
    # js: et script ved siden af siderne, der tegner modeller skrevet som <div class="m" data-m="..."></div>
    "el2": {"navn": "Elektroteknik 2", "farve": "#8a5f00", "farve_m": "#f2bd3d", "fra": "m5-el2", "js": "modeller.js"},
}

def md(tekst):
    tekst = re.sub(r"```[a-z]*\n(.*?)```", lambda m: '<pre class="formel">' + html.escape(m.group(1).rstrip()) + "</pre>",
                   tekst, flags=re.S)
    return markdown.markdown(tekst, extensions=["tables", "md_in_html", "sane_lists", "attr_list"])

def inline(tekst):
    h = markdown.markdown(tekst, extensions=["sane_lists"]).strip()
    return re.sub(r"^<p>(.*)</p>$", r"\1", h, flags=re.S)

def laes(fil):
    raa = fil.read_text(encoding="utf-8")
    top, krop = raa.split("\n---\n", 1)
    meta = dict(l.split(":", 1) for l in top.strip().strip("-").strip().splitlines() if ":" in l)
    meta = {k.strip(): v.strip() for k, v in meta.items()}
    dele = re.split(r"^# (Noter|Formler|Quiz)\s*$", krop, flags=re.M)
    d = {dele[i]: dele[i + 1].strip() for i in range(1, len(dele), 2)}
    return meta, d

def quiz(tekst):
    qs = []
    if not tekst.strip(): return qs
    for blok in re.split(r"\n\s*\n", tekst.strip()):
        q = {"valg": [], "rigtig": None}
        for linje in blok.strip().splitlines():
            if len(linje) < 2 or linje[1] != ":":
                key = "fortsat"
            else:
                key, val = linje[0], linje[2:].strip()
            if key == "Q": q["q"] = inline(val)
            elif key in "AR":
                if key == "R": q["rigtig"] = len(q["valg"])
                q["valg"].append(inline(val))
            elif key == "N":
                facit, tol, enhed = [x.strip() for x in (val.split(";") + ["", ""])[:3]]
                q["tal"] = float(facit.replace(",", ".")); q["tol"] = float((tol or "0").replace(",", ".")); q["enhed"] = enhed
            elif key == "L": q["losning"] = inline(val)
            elif key == "F": q["f"] = inline(val)
            else: raise SystemExit(f"Ukendt quizlinje: {linje!r}")
        if "tal" not in q and (q["rigtig"] is None or len(q["valg"]) < 2):
            raise SystemExit(f"Spørgsmål uden rigtigt svar: {blok[:80]}")
        if "tal" in q: q.pop("valg"); q.pop("rigtig")
        qs.append(q)
    return qs

SIDE = (ROD / "skabelon.html").read_text(encoding="utf-8")

def side(fag, meta, noter, formler, qs, samlet=False):
    f = FAG[fag]
    erstat = {
        "{{TITEL}}": html.escape(meta["navn"]),
        "{{FAG}}": f["navn"],
        "{{FARVE}}": f["farve"], "{{FARVE_M}}": f["farve_m"],
        "{{INTRO}}": html.escape(meta.get("intro", "")),
        "{{NOTER}}": noter, "{{FORMLER}}": formler,
        "{{QUIZ}}": json.dumps(qs, ensure_ascii=False).replace("</", "<\\/"),
        "{{NOGLE}}": f"mn-{fag}-{meta['id']}",
        "{{FAGFRA}}": f["fra"],
        "{{SAMLET}}": "1" if samlet else "",
        "{{EKSTRA}}": f'\n<script src="{f["js"]}"></script>' if f.get("js") and not samlet else "",
    }
    s = SIDE
    for k, v in erstat.items(): s = s.replace(k, v)
    return s

def main():
    alle_emner = {}
    for fag in FAG:
        kilde = sorted((ROD / fag).glob("*.md"))
        (UD / fag).mkdir(exist_ok=True)
        emner, samlet = [], []
        for fil in kilde:
            meta, d = laes(fil)
            qs = quiz(d.get("Quiz", ""))
            for q in qs: q["emne"] = meta["navn"]
            (UD / fag / f"{meta['id']}.html").write_text(
                side(fag, meta, md(d.get("Noter", "")), md(d.get("Formler", "")), qs), encoding="utf-8")
            emner.append({k: meta.get(k) for k in ("id", "navn", "ikon", "intro")} | {"quiz": len(qs), "formler": bool(d.get("Formler", "").strip())})
            samlet += qs
            print(f"{fag}/{meta['id']}: {len(qs)} spørgsmål")
        # samlet quiz for hele faget: blandet rækkefølge (interleaving), fast blanding så den er ens hver gang
        blandet = sorted(samlet, key=lambda q: hash_(q["q"]))
        meta = {"id": "quiz", "navn": f"Quiz for hele {FAG[fag]['navn']}",
                "intro": f"{len(blandet)} spørgsmål fra alle emner i blandet rækkefølge."}
        (UD / fag / "quiz.html").write_text(side(fag, meta, "", "", blandet, samlet=True), encoding="utf-8")
        alle_emner[fag] = emner
    (ROD / "emner.json").write_text(json.dumps(alle_emner, ensure_ascii=False, indent=1), encoding="utf-8")

def hash_(s):
    h = 0
    for c in s: h = (h * 131 + ord(c)) % 1000003
    return h

if __name__ == "__main__":
    main()
