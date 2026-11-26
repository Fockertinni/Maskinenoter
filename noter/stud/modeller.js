/* Interaktive modeller til Studiekompetence og metode (noter/stud/*.html).
   I markdown-kilden skrives fx <div class="m" data-m="hatte"></div>, så tegnes modellen her.
   Modeller: hatte, skive, sorter (data-s="kvkl" | "indded" | "posher"), raekkefolge, belbin, instrument, wcgk.
   Ren JavaScript og SVG, ingen biblioteker. */
(function () {
"use strict";
const css = `
.m { margin: 1.4rem 0; padding: 1rem 1.1rem 1.1rem; background: var(--surface); border-radius: 16px; box-shadow: var(--shadow); border-top: 3px solid var(--accent); }
.m .mt { font-size: .78rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); margin: 0 0 .6rem; }
.m .ctl { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: .5rem 1.2rem; margin-bottom: .8rem; }
.m label { display: grid; gap: .1rem; font-size: .88rem; color: var(--muted); }
.m label b { color: var(--fg); font: 600 .9rem var(--mono); }
.m input[type=range] { width: 100%; accent-color: var(--accent); }
.m .rad { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; font-size: .88rem; }
.m .rad button { font: 600 .85rem var(--sans); padding: .4rem .7rem; border-radius: 9px; border: 1px solid var(--line); background: var(--bg); color: var(--fg); cursor: pointer; }
.m .rad button.on { background: var(--accent); color: #fff; border-color: var(--accent); }
.m .skaerm { background: #0f1713; border-radius: 12px; padding: 6px; }
.m svg { display: block; width: 100%; height: auto; }
.m .tal { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 6px; margin-top: .7rem; }
.m .tal div { background: var(--bg); border-radius: 10px; padding: .45rem .65rem; font-size: .8rem; color: var(--muted); line-height: 1.3; }
.m .tal div b { display: block; font: 600 1rem var(--mono); color: var(--fg); }
.m .regn { font: .85rem/1.6 var(--mono); background: var(--soft); border-left: 3px solid var(--accent); border-radius: 0 10px 10px 0; padding: .6rem .9rem; margin-top: .7rem; white-space: pre-wrap; overflow-x: auto; }
.m .lgd { display: flex; flex-wrap: wrap; gap: .3rem 1rem; font-size: .8rem; color: var(--muted); margin-top: .5rem; }
.m .lgd i { display: inline-block; width: 14px; height: 3px; border-radius: 2px; vertical-align: middle; margin-right: 5px; }
.m .besked { margin-top: .7rem; padding: .6rem .85rem; border-radius: 10px; font-size: .92rem; }
.m .besked.ok { background: var(--ok-bg); } .m .besked.bad { background: var(--bad-bg); }
.m .skjul { margin-top: .5rem; }
`;
const st = document.createElement("style"); st.textContent = css; document.head.append(st);

// farver på den mørke "oscilloskop"-skærm
const C = { l1: "#ff6b5e", l2: "#5aa9ff", l3: "#4fd286", gul: "#ffd25a", lilla: "#c49bff", hvid: "#e8efe9", grid: "#2a3a31", dim: "#7f9488" };
const NS = "http://www.w3.org/2000/svg";
const fmt = (x, d = 1) => (Math.round(x * 10 ** d) / 10 ** d).toLocaleString("da-DK", { minimumFractionDigits: d, maximumFractionDigits: d });
const rad = g => g * Math.PI / 180;

// komplekse tal
const K = (re, im = 0) => ({ re, im });
const pol = (r, g) => K(r * Math.cos(rad(g)), r * Math.sin(rad(g)));
const add = (a, b) => K(a.re + b.re, a.im + b.im), sub = (a, b) => K(a.re - b.re, a.im - b.im);
const mul = (a, b) => K(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
const dv = (a, b) => { const n = b.re * b.re + b.im * b.im; return K((a.re * b.re + a.im * b.im) / n, (a.im * b.re - a.re * b.im) / n); };
const abs = a => Math.hypot(a.re, a.im), ang = a => Math.atan2(a.im, a.re) * 180 / Math.PI;

// byggeklodser
function ramme(el, titel) {
  el.innerHTML = `<p class="mt">Model · ${titel}</p><div class="ctl"></div><div class="skaerm"></div><div class="lgd"></div><div class="tal"></div>`;
  return { ctl: el.querySelector(".ctl"), skaerm: el.querySelector(".skaerm"), lgd: el.querySelector(".lgd"), tal: el.querySelector(".tal"), el };
}
function skyder(r, navn, min, max, trin, start, enhed, kald, vis) {
  const l = document.createElement("label");
  l.innerHTML = `<span>${navn}: <b></b></span><input type="range" min="${min}" max="${max}" step="${trin}" value="${start}">`;
  const inp = l.querySelector("input"), b = l.querySelector("b");
  const opd = () => { b.textContent = (vis ? vis(+inp.value) : fmt(+inp.value, trin < 1 ? (trin < .1 ? 2 : 1) : 0)) + (enhed ? " " + enhed : ""); };
  inp.addEventListener("input", () => { opd(); kald(); });
  opd(); r.ctl.append(l);
  return () => +inp.value;
}
function knapper(r, navn, valg, start, kald) {
  const d = document.createElement("div"); d.className = "rad"; d.innerHTML = `<span>${navn}</span>`;
  let v = start;
  valg.forEach(([k, t]) => { const b = document.createElement("button"); b.type = "button"; b.textContent = t; if (k === v) b.className = "on";
    b.addEventListener("click", () => { v = k; d.querySelectorAll("button").forEach(x => x.className = ""); b.className = "on"; kald(); }); d.append(b); });
  r.ctl.append(d);
  return () => v;
}
function svg(r, w, h) { const s = document.createElementNS(NS, "svg"); s.setAttribute("viewBox", `0 0 ${w} ${h}`); r.skaerm.append(s); return s; }
function tegn(s, tag, a, tekst) { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); if (tekst != null) e.textContent = tekst; s.append(e); return e; }
function pil(s, x1, y1, x2, y2, farve, bred = 2.5, navn) {
  const L = Math.hypot(x2 - x1, y2 - y1);
  tegn(s, "line", { x1, y1, x2, y2, stroke: farve, "stroke-width": bred, "stroke-linecap": "round" });
  if (L > 8) { const ux = (x2 - x1) / L, uy = (y2 - y1) / L, a = 9, b = 4.5;
    tegn(s, "path", { d: `M${x2},${y2} L${x2 - a * ux + b * uy},${y2 - a * uy - b * ux} L${x2 - a * ux - b * uy},${y2 - a * uy + b * ux}Z`, fill: farve }); }
  if (navn) tegn(s, "text", { x: x2 + 6, y: y2 - 4, fill: farve, "font-size": 13, "font-family": "ui-monospace, monospace" }, navn);
}
function lgd(r, liste) { r.lgd.innerHTML = liste.map(([f, t]) => `<span><i style="background:${f}"></i>${t}</span>`).join(""); }
function tal(r, liste) { r.tal.innerHTML = liste.map(([t, v]) => `<div>${t}<b>${v}</b></div>`).join(""); }
function regn(r, tekst) { let p = r.el.querySelector(".regn"); if (!p) { p = document.createElement("div"); p.className = "regn"; r.el.append(p); } p.textContent = tekst; }
function besked(r, tekst, ok) { let p = r.el.querySelector(".besked"); if (!p) { p = document.createElement("div"); r.el.append(p); } p.className = "besked " + (ok ? "ok" : "bad"); p.innerHTML = tekst; }
// koordinatsystem til kurver
function akser(s, W, H, m, xmin, xmax, ymin, ymax, xt, yt) {
  const X = x => m.l + (x - xmin) / (xmax - xmin) * (W - m.l - m.r), Y = y => H - m.b - (y - ymin) / (ymax - ymin) * (H - m.t - m.b);
  tegn(s, "rect", { x: m.l, y: m.t, width: W - m.l - m.r, height: H - m.t - m.b, fill: "none", stroke: C.grid });
  if (ymin < 0 && ymax > 0) tegn(s, "line", { x1: m.l, x2: W - m.r, y1: Y(0), y2: Y(0), stroke: C.dim, "stroke-dasharray": "3 3" });
  tegn(s, "text", { x: W - m.r, y: H - 6, fill: C.dim, "font-size": 12, "text-anchor": "end" }, xt);
  tegn(s, "text", { x: m.l + 4, y: m.t + 13, fill: C.dim, "font-size": 12 }, yt);
  return { X, Y };
}
function kurve(s, pkt, farve, bred = 2.4, streg) { tegn(s, "polyline", { points: pkt.map(p => p.join(",")).join(" "), fill: "none", stroke: farve, "stroke-width": bred, "stroke-linejoin": "round", ...(streg ? { "stroke-dasharray": streg } : {}) }); }


/* ---------- Studiekompetence og metode ---------- */
const M = {};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function enkel(el, titel) {
  el.innerHTML = `<p class="mt">Model · ${titel}</p><div class="krop"></div>`;
  return el.querySelector(".krop");
}
const css2 = `
.m .kort { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; }
.m .kort button { font: 600 .9rem var(--sans); text-align: left; padding: .6rem .75rem; border-radius: 12px; border: 1px solid var(--line); background: var(--bg); color: var(--fg); cursor: pointer; }
.m .kort button.on { outline: 2px solid var(--accent); }
.m .kort button i { display: inline-block; width: 14px; height: 14px; border-radius: 50%; margin-right: 7px; vertical-align: -2px; border: 1px solid rgba(127,127,127,.5); }
.m .boks { margin-top: .8rem; padding: .8rem 1rem; background: var(--soft); border-left: 3px solid var(--accent); border-radius: 0 12px 12px 0; }
.m .boks h4 { margin: 0 0 .3rem; }
.m .boks p, .m .boks ul { margin: .3rem 0; }
.m .sort { display: grid; gap: 8px; }
.m .sort .udsagn { padding: .6rem .8rem; border-radius: 12px; background: var(--bg); border: 1px solid var(--line); }
.m .sort .udsagn p { margin: 0 0 .45rem; }
.m .sort .udsagn .valg { display: flex; flex-wrap: wrap; gap: 6px; }
.m .sort .udsagn .valg button { font: 600 .82rem var(--sans); padding: .35rem .65rem; border-radius: 9px; border: 1px solid var(--line); background: var(--surface); color: var(--fg); cursor: pointer; }
.m .sort .udsagn.ok { background: var(--ok-bg); } .m .sort .udsagn.bad { background: var(--bad-bg); }
.m .sort .udsagn small { display: block; margin-top: .4rem; color: var(--muted); }
.m .liste { display: grid; gap: 6px; counter-reset: n; }
.m .liste button { font: 600 .9rem var(--sans); text-align: left; padding: .55rem .75rem; border-radius: 10px; border: 1px solid var(--line); background: var(--bg); color: var(--fg); cursor: pointer; }
.m .liste button[disabled] { opacity: .45; cursor: default; }
.m .valgt { margin: .7rem 0 0; padding-left: 1.4rem; }
.m .valgt li.bad { color: var(--bad); } .m .valgt li.ok { color: var(--ok); }
.m .knap { font: 600 .85rem var(--sans); padding: .45rem .8rem; border-radius: 9px; border: 1px solid var(--accent); background: transparent; color: var(--accent); cursor: pointer; margin-top: .6rem; }
.m table.mt2 { width: 100%; border-collapse: collapse; font-size: .88rem; margin-top: .7rem; }
.m table.mt2 th, .m table.mt2 td { padding: .35rem .5rem; border-bottom: 1px solid var(--line); text-align: left; }
.m table.mt2 td.n { font-family: var(--mono); text-align: right; }
`;
{ const s2 = document.createElement("style"); s2.textContent = css2; document.head.append(s2); }

/* 1 · De Bonos tænkehatte */
M.hatte = el => {
  const k = enkel(el, "De Bonos seks tænkehatte");
  const H = [
    ["Hvid", "#f4f4f4", "Fakta og information", "Hvad ved vi? Hvad mangler vi at vide? Hvor kan vi finde data?",
      "Køleanlæg bruger en stor del af elforbruget i fødevareindustrien. Vi kan finde COP i datablade. Vi ved ikke, hvordan driften varierer over året."],
    ["Rød", "#e0453a", "Følelser og mavefornemmelse", "Hvad har vi lyst til? Hvad siger maven? (Ingen begrundelse nødvendig.)",
      "Køleanlæg virker spændende, fordi vi skal på virksomhedsbesøg. Vandbehandling føles tørt."],
    ["Sort", "#222", "Kritik og risici", "Hvad kan gå galt? Hvorfor virker det ikke? Hvad er svaghederne?",
      "Kan vi overhovedet få driftsdata online? Er SCOP for stort til 4 sider?"],
    ["Gul", "#f3c623", "Fordele og muligheder", "Hvad er det bedste ved idéen? Hvad kan vi vinde?",
      "Stort energiforbrug giver en tydelig bæredygtighedsvinkel, og vi kender 1. hovedsætning fra Term."],
    ["Grøn", "#3aa65b", "Kreativitet og nye idéer", "Hvilke andre muligheder er der? Kan vi vende det om?",
      "Varmepumpe i stedet for køleanlæg? Røggasrensning på et forbrændingsanlæg? Korrosion i et fjernvarmerør?"],
    ["Blå", "#2f6fd6", "Styring af processen", "Hvor er vi? Hvilken hat er næste? Hvad har vi besluttet?",
      "Vi bruger 5 min på hvid og blå, mindst 5 min på grøn, så rød. Står vi med flere idéer, så gul og sort og rød igen."],
  ];
  k.innerHTML = `<div class="kort">${H.map((h, i) => `<button data-i="${i}"><i style="background:${h[1]}"></i>${h[0]} hat</button>`).join("")}</div><div class="boks"></div>`;
  const boks = k.querySelector(".boks");
  function vis(i) {
    k.querySelectorAll(".kort button").forEach(b => b.classList.toggle("on", +b.dataset.i === i));
    const h = H[i];
    boks.innerHTML = `<h4>${h[0]} hat · ${h[2]}</h4><p><b>Spørg:</b> ${h[3]}</p><p><b>Eksempel (emne til obligatorisk opgave 3):</b> ${h[4]}</p>`;
  }
  k.querySelectorAll(".kort button").forEach(b => b.onclick = () => vis(+b.dataset.i));
  vis(5);
};

/* 2 · Validitet og reliabilitet som skydeskive */
M.skive = el => {
  const r = ramme(el, "Validitet og reliabilitet");
  const bias = skyder(r, "Systematisk fejl (bias)", 0, 60, 1, 0, "", t, v => v < 8 ? "lille" : v < 25 ? "mellem" : "stor");
  const spred = skyder(r, "Tilfældig spredning", 2, 40, 1, 6, "", t, v => v < 10 ? "lille" : v < 22 ? "mellem" : "stor");
  const s = svg(r, 420, 240);
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const pts = Array.from({ length: 14 }, () => { const a = rnd() * 2 * Math.PI, d = Math.sqrt(-2 * Math.log(rnd() + 1e-9)); return [Math.cos(a) * d, Math.sin(a) * d]; });
  lgd(r, [[C.gul, "Det, du ville måle (målet)"], [C.l1, "Dine målinger"]]);
  function t() {
    s.innerHTML = ""; const cx = 140, cy = 120;
    [100, 75, 50, 25].forEach((rr, i) => tegn(s, "circle", { cx, cy, r: rr, fill: i % 2 ? "#1a2a22" : "#13201a", stroke: C.grid }));
    tegn(s, "circle", { cx, cy, r: 5, fill: C.gul });
    const b = bias(), sp = spred();
    pts.forEach(([x, y]) => tegn(s, "circle", { cx: cx + b + x * sp * .6, cy: cy - b * .5 + y * sp * .6, r: 4, fill: C.l1 }));
    const val = b < 8, rel = sp < 10;
    tegn(s, "text", { x: 270, y: 70, fill: val ? C.l3 : C.l1, "font-size": 15 }, `Validitet: ${val ? "høj" : "lav"}`);
    tegn(s, "text", { x: 270, y: 100, fill: rel ? C.l3 : C.l1, "font-size": 15 }, `Reliabilitet: ${rel ? "høj" : "lav"}`);
    tegn(s, "text", { x: 270, y: 140, fill: C.dim, "font-size": 12 }, val ? "Rammer det rigtige" : "Måler noget andet");
    tegn(s, "text", { x: 270, y: 158, fill: C.dim, "font-size": 12 }, rel ? "Samme resultat igen" : "Resultater spreder");
    tal(r, [["Hvad betyder det?", val && rel ? "Gyldig og pålidelig" : !val && rel ? "Pålidelig, men forkert" : val ? "Rigtigt i snit, men upræcist" : "Hverken eller"]]);
  }
  t();
};

/* 3 · Sortér udsagn i to kasser (data-s vælger sættet) */
const SAET = {
  kvkl: { a: "Kvantitativ", b: "Kvalitativ", u: [
    ["Vi måler effekt og temperatur på 20 anlæg og beregner COP.", "a", "Tal fra mange enheder, som kan behandles statistisk."],
    ["Vi interviewer driftslederen om, hvorfor anlægget køres om natten.", "b", "Et interview giver dybde og begrundelser, ikke tal."],
    ["Spørgeskema med afkrydsning til 150 medarbejdere om energivaner.", "a", "Mange svar i faste kategorier, som kan tælles."],
    ["Vi læser tekniske beskrivelser og fortolker forskellen på COP og SCOP.", "b", "Fortolkning af tekst. Gruppens egen opgave kaldte det kvalitativt."],
    ["Vi observerer, hvordan vagten reagerer på en alarm.", "b", "Observation af adfærd i en konkret situation."],
    ["Vi trækker elforbruget pr. time ud af SRO-anlægget for et helt år.", "a", "Målbare størrelser over tid."],
  ] },
  indded: { a: "Deduktiv", b: "Induktiv", u: [
    ["Vi tager 1. hovedsætning og tester, om energibalancen passer på målingerne.", "a", "Fra teori til test på data."],
    ["Vi samler fejlrapporter fra et år og leder efter et mønster.", "b", "Fra mange enkelttilfælde til en generel påstand."],
    ["Hypotese: COP falder, når kondenseringstrykket stiger. Vi måler for at efterprøve.", "a", "Hypotese først, så data."],
    ["Efter fem interviews danner vi en forklaring på, hvorfor energiprojekter går i stå.", "b", "Teorien bygges ud fra empirien."],
  ] },
  posher: { a: "Positivistisk", b: "Hermeneutisk", u: [
    ["Vi vil forklare og måle objektivt, så andre kan gentage forsøget.", "a", "Objektiv, målbar viden og gentagelighed."],
    ["Vi vil forstå, hvordan maskinmestrene oplever det nye vedligeholdssystem.", "b", "Forståelse af mening og oplevelse."],
    ["Vi bruger vores egen forforståelse og justerer den undervejs.", "b", "Den hermeneutiske cirkel."],
    ["Vi opstiller en hypotese og afviser eller bekræfter den med data.", "a", "Hypotesetest er naturvidenskabens metode."],
  ] },
};
M.sorter = el => {
  const S = SAET[el.dataset.s] || SAET.kvkl;
  const k = enkel(el, `${S.a} eller ${S.b}?`);
  k.innerHTML = `<div class="sort">${S.u.map((u, i) => `<div class="udsagn" data-i="${i}"><p>${u[0]}</p><div class="valg"><button data-v="a">${S.a}</button><button data-v="b">${S.b}</button></div></div>`).join("")}</div><p class="score" style="margin-top:.7rem"></p>`;
  let rigtige = 0, svaret = 0;
  k.querySelectorAll(".udsagn").forEach(d => d.querySelectorAll("button").forEach(b => b.onclick = () => {
    if (d.dataset.done) return; d.dataset.done = 1;
    const u = S.u[+d.dataset.i], ok = b.dataset.v === u[1];
    d.classList.add(ok ? "ok" : "bad"); svaret++; if (ok) rigtige++;
    d.insertAdjacentHTML("beforeend", `<small>${ok ? "Rigtigt." : `Nej, ${u[1] === "a" ? S.a : S.b}.`} ${u[2]}</small>`);
    k.querySelector(".score").textContent = `${rigtige} af ${svaret} rigtige` + (svaret === S.u.length ? " · færdig" : "");
  }));
};

/* 4 · Sæt projektrapportens afsnit i rækkefølge */
M.raekkefolge = el => {
  const R = ["Abstract", "Indledning", "Problemstilling", "Problemformulering og afgrænsning", "Metode", "Empiri, teori og analyse", "Diskussion", "Konklusion", "Perspektivering", "Litteraturliste og bilag"];
  const k = enkel(el, "Den røde tråd: sæt afsnittene i rækkefølge");
  const bland = [5, 2, 8, 0, 7, 3, 9, 1, 6, 4];
  function start() {
    const valgt = [];
    k.innerHTML = `<p style="margin:.2rem 0 .6rem;color:var(--muted);font-size:.9rem">Tryk på afsnittene i den rækkefølge, de står i en projektrapport.</p><div class="liste">${bland.map(i => `<button data-i="${i}">${R[i]}</button>`).join("")}</div><ol class="valgt"></ol><div class="slut"></div>`;
    k.querySelectorAll(".liste button").forEach(b => b.onclick = () => {
      const i = +b.dataset.i; b.disabled = true;
      const ok = i === valgt.length; valgt.push(i);
      k.querySelector(".valgt").insertAdjacentHTML("beforeend", `<li class="${ok ? "ok" : "bad"}">${R[i]}${ok ? "" : ` (her skulle stå: ${R[valgt.length - 1]})`}</li>`);
      if (valgt.length === R.length) {
        const n = valgt.filter((v, j) => v === j).length;
        k.querySelector(".slut").innerHTML = `<div class="boks"><b>${n} af ${R.length} på rette plads.</b> Huskeregel: <i>problem → spørgsmål → hvordan → svar → hvor sikkert → kort svar</i>. Perspektivering er valgfri.</div><button class="knap">Prøv igen</button>`;
        k.querySelector(".slut .knap").onclick = start;
      }
    });
  }
  start();
};

/* 5 · Belbins ni teamroller */
M.belbin = el => {
  const B = [
    ["Opstarter (Plant)", "Tænkende", "Kreativ, idérig, løser svære problemer.", "Glemmer detaljer, kan være for optaget af egne idéer til at kommunikere godt."],
    ["Analysator (Monitor Evaluator)", "Tænkende", "Nøgtern, strategisk, ser alle muligheder og vurderer præcist.", "Kan mangle drivkraft og evne til at inspirere andre."],
    ["Specialist", "Tænkende", "Målrettet, leverer viden og færdigheder, der er sjældne.", "Bidrager kun på et snævert område, fortaber sig i tekniske detaljer."],
    ["Koordinator (Co-ordinator)", "Social", "Moden, tillidsvækkende, afklarer mål og fordeler opgaver.", "Kan opfattes som manipulerende og uddelegere eget arbejde."],
    ["Formidler (Teamworker)", "Social", "Samarbejdsvillig, diplomatisk, lytter og dæmper konflikter.", "Ubeslutsom i pressede situationer."],
    ["Kontaktskaber (Resource Investigator)", "Social", "Udadvendt, entusiastisk, finder muligheder og kontakter.", "Mister interessen, når begejstringen har lagt sig."],
    ["Igangsætter (Shaper)", "Handling", "Udfordrende, dynamisk, har mod til at overvinde forhindringer.", "Kan provokere og såre andres følelser."],
    ["Organisator (Implementer)", "Handling", "Disciplineret, pålidelig, omsætter idéer til praktisk handling.", "Lidt ufleksibel, langsom til at tage nye muligheder til sig."],
    ["Afslutter (Completer Finisher)", "Handling", "Omhyggelig, finder fejl og mangler, leverer til tiden.", "Bekymrer sig for meget, uddelegerer nødigt."],
  ];
  const k = enkel(el, "Belbins ni teamroller");
  const farv = { "Tænkende": "#5aa9ff", "Social": "#4fd286", "Handling": "#ff6b5e" };
  k.innerHTML = `<div class="kort">${B.map((b, i) => `<button data-i="${i}"><i style="background:${farv[b[1]]}"></i>${b[0].split(" (")[0]}</button>`).join("")}</div><div class="boks"></div>
    <div class="lgd" style="margin-top:.6rem">${Object.entries(farv).map(([n, f]) => `<span><i style="background:${f};height:10px;width:10px;border-radius:50%"></i>${n}sorienteret</span>`).join("")}</div>`;
  const boks = k.querySelector(".boks");
  function vis(i) {
    k.querySelectorAll(".kort button").forEach(b => b.classList.toggle("on", +b.dataset.i === i));
    const b = B[i];
    boks.innerHTML = `<h4>${b[0]} · ${b[1]}sorienteret</h4><p><b>Bidrag:</b> ${b[2]}</p><p><b>Tilladelig svaghed:</b> ${b[3]}</p>`;
  }
  k.querySelectorAll(".kort button").forEach(b => b.onclick = () => vis(+b.dataset.i));
  vis(0);
};

/* 6 · Instrumentets usikkerhed ud fra databladet */
M.instrument = el => {
  const r = ramme(el, "Usikkerhed fra databladet: ±(p % af aflæsning + n digits)");
  const v = skyder(r, "Aflæst værdi", 0.1, 40, 0.01, 19.44, "", t, x => fmt(x, 2));
  const p = skyder(r, "p (procent af aflæsning)", 0, 3, 0.1, 0.2, "%", t);
  const n = skyder(r, "n (antal digits)", 0, 20, 1, 3, "dg", t);
  const res = knapper(r, "Opløsning (sidste ciffer)", [["1", "1"], ["0,1", "0.1"], ["0,01", "0.01"], ["0,001", "0.001"]], "0.01", t);
  r.skaerm.remove();
  function t() {
    const opl = +res(), dS = p() / 100 * v() + n() * opl, rel = dS / v() * 100;
    tal(r, [["Absolut usikkerhed ΔS", "± " + fmt(dS, 4)], ["Relativ usikkerhed ΔS/S", fmt(rel, 2) + " %"], ["Andel fra digits", fmt(n() * opl / dS * 100 || 0, 0) + " %"]]);
    regn(r, `ΔS = ${fmt(p(), 1)} % · ${fmt(v(), 2)} + ${n()} · ${opl.toString().replace(".", ",")}\n   = ${fmt(p() / 100 * v(), 4)} + ${fmt(n() * opl, 4)} = ${fmt(dS, 4)}\nΔS/S = ${fmt(dS, 4)} / ${fmt(v(), 2)} · 100 % = ${fmt(rel, 2)} %`);
  }
  t();
};

/* 7 · Worst case mod geometrisk kombination */
M.wcgk = el => {
  const r = ramme(el, "Worst case (WC) mod geometrisk kombination (GK)");
  // standardværdier = målingerne i portfolio-opgaven
  const F = {
    R: { navn: "R_kreds = R1 + R2", a: ["R1", 22.1, 0.51, "Ω"], b: ["R2", 12.1, 0.46, "Ω"], type: "sum", enhed: "Ω" },
    U: { navn: "U_kreds = U_R1 + U_R2", a: ["U_R1", 19.44, 0.0688, "V"], b: ["U_R2", 10.16, 0.0503, "V"], type: "sum", enhed: "V" },
    UI: { navn: "P = U_R1 · I", a: ["U_R1", 19.44, 0.0688, "V"], b: ["I", 0.867, 0.0117, "A"], type: "prod", na: 1, nb: 1, enhed: "W" },
    RI2: { navn: "P = R1 · I²", a: ["R1", 22.1, 0.51, "Ω"], b: ["I", 0.867, 0.0117, "A"], type: "prod", na: 1, nb: 2, enhed: "W" },
    U2R: { navn: "P = U_R1² / R1", a: ["U_R1", 19.44, 0.0688, "V"], b: ["R1", 22.1, 0.51, "Ω"], type: "prod", na: 2, nb: -1, enhed: "W" },
  };
  const valg = knapper(r, "Formel", Object.entries(F).map(([k, f]) => [k, f.navn.split(" = ")[1].replace(/_/g, "")]), "RI2", t);
  r.skaerm.remove();
  function t() {
    const f = F[valg()], [na, a, da] = f.a, [nb, b, db] = f.b;
    let Z, wc, gk, txt;
    if (f.type === "sum") {
      Z = a + b; wc = da + db; gk = Math.hypot(da, db);
      txt = `${f.navn} = ${fmt(a, 3)} + ${fmt(b, 3)} = ${fmt(Z, 3)} ${f.enhed}\n\nWC:  ΔZ = Δ${na} + Δ${nb} = ${fmt(da, 4)} + ${fmt(db, 4)} = ${fmt(wc, 4)} ${f.enhed}\nGK:  ΔZ = √(Δ${na}² + Δ${nb}²) = √(${fmt(da, 4)}² + ${fmt(db, 4)}²) = ${fmt(gk, 4)} ${f.enhed}`;
      tal(r, [["Z", fmt(Z, 3) + " " + f.enhed], ["WC", "± " + fmt(wc, 3) + " (" + fmt(wc / Z * 100, 2) + " %)"], ["GK", "± " + fmt(gk, 3) + " (" + fmt(gk / Z * 100, 2) + " %)"]]);
    } else {
      Z = a ** f.na * b ** f.nb;
      const ra = da / a * 100, rb = db / b * 100, ka = Math.abs(f.na), kb = Math.abs(f.nb);
      const rwc = ka * ra + kb * rb, rgk = Math.hypot(ka * ra, kb * rb);
      wc = rwc / 100 * Z; gk = rgk / 100 * Z;
      const led = (k, n, rr) => (k === 1 ? "" : k + " · ") + `${fmt(rr, 3)} %`;
      txt = `${f.navn} = ${fmt(Z, 3)} ${f.enhed}\nΔ${na}/${na} = ${fmt(ra, 3)} %   Δ${nb}/${nb} = ${fmt(rb, 3)} %\n\nWC:  ΔZ/Z = ${led(ka, na, ra)} + ${led(kb, nb, rb)} = ${fmt(rwc, 2)} %  →  ΔZ = ${fmt(wc, 3)} ${f.enhed}\nGK:  ΔZ/Z = √((${led(ka, na, ra)})² + (${led(kb, nb, rb)})²) = ${fmt(rgk, 2)} %  →  ΔZ = ${fmt(gk, 3)} ${f.enhed}` +
        (ka > 1 || kb > 1 ? `\n\nBemærk: en størrelse i anden potens er ÉN måling. Dens relative usikkerhed ganges med 2 FØR kvadratet i GK. Den må ikke regnes som to uafhængige målinger.` : "") +
        (f.nb < 0 ? `\nDivision tæller som multiplikation: eksponenten −1 giver faktor 1.` : "");
      tal(r, [["Z", fmt(Z, 3) + " " + f.enhed], ["WC", "± " + fmt(wc, 3) + " (" + fmt(rwc, 2) + " %)"], ["GK", "± " + fmt(gk, 3) + " (" + fmt(rgk, 2) + " %)"]]);
    }
    regn(r, txt);
  }
  t();
};

document.querySelectorAll(".m[data-m]").forEach(el => { const f = M[el.dataset.m]; if (f) try { f(el); } catch (e) { el.textContent = "Modellen kunne ikke vises."; console.error(e); } });
})();
