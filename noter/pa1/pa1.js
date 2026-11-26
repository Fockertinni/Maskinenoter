/* Fælles værktøjer for PA1-noterne: faner, enkeltvisning, ladder-tegner, quiz og forståelse. */
(function () {
  const PA = (window.PA = {});
  const NS = "http://www.w3.org/2000/svg";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  PA.esc = esc;

  /* ---------- Faner og enkeltvisning (?vis=noter|forstaa|test) ---------- */
  PA.tabs = function () {
    const btns = [...document.querySelectorAll("nav.tabs button")];
    const show = id => {
      btns.forEach(b => b.setAttribute("aria-selected", b.dataset.tab === id));
      document.querySelectorAll(".pane").forEach(p => (p.hidden = p.id !== "p-" + id));
    };
    btns.forEach(b => b.addEventListener("click", () => { show(b.dataset.tab); history.replaceState(null, "", "#" + b.dataset.tab); window.scrollTo(0, 0); }));
    const q = new URLSearchParams(location.search), v = q.get("vis");
    const h = location.hash.slice(1);
    if (v && document.getElementById("p-" + v)) {
      document.documentElement.classList.add("solo");
      show(v);
      const fra = q.get("fra") || "";
      const bar = document.createElement("div"); bar.className = "solo-bar";
      const a = document.createElement("a");
      a.href = "../../index.html" + (/^[a-z0-9-]+$/.test(fra) ? "#" + fra : "#m5-pa1");
      a.textContent = "‹ " + (q.get("navn") || "Tilbage");
      const s = document.createElement("span"); s.textContent = q.get("del") || "";
      bar.append(a, s); document.body.prepend(bar);
    } else show(document.getElementById("p-" + h) ? h : btns[0].dataset.tab);
  };

  /* ---------- Trykknap der kun er aktiv mens den holdes ---------- */
  PA.hold = function (btn, down, up) {
    let on = false;
    const d = e => { e.preventDefault(); if (on) return; on = true; btn.classList.add("pressed"); down(); };
    const u = () => { if (!on) return; on = false; btn.classList.remove("pressed"); up(); };
    btn.addEventListener("pointerdown", d);
    ["pointerup", "pointerleave", "pointercancel"].forEach(ev => btn.addEventListener(ev, u));
    btn.addEventListener("keydown", e => { if (e.key === " " || e.key === "Enter") d(e); });
    btn.addEventListener("keyup", e => { if (e.key === " " || e.key === "Enter") u(); });
  };

  /* ---------- Ladder-tegner ----------
     rung = { n: "0", c: [kontakter], b: [{from, to, c: [kontakter]}], o: [udgange] }
     kontakt = { k: "xic"|"xio", tag }    udgang = { k: "ote"|"otl"|"otu"|"res"|"ons", tag } eller { k: "box", title, lines: [] }
     bits = { tag: true/false }. Sande instruktioner og strømførende rungs tegnes grønne. */
  const truth = (el, bits) => (el.k === "xio" ? !bits[el.tag] : !!bits[el.tag]);
  PA.power = function (r, bits) {
    const c = r.c || [], br = r.b || [];
    let p = true, k = 0;
    while (k < c.length) {
      const b = br.find(x => x.from === k);
      if (b) {
        const seg = c.slice(b.from, b.to).every(e => truth(e, bits));
        const alt = b.c.every(e => truth(e, bits));
        p = p && (seg || alt); k = b.to;
      } else { p = p && truth(c[k], bits); k++; }
    }
    return p;
  };
  const L = k => 44 + k * 112, R = k => 156 + k * 112;
  PA.ladder = function (host, rungs, bits) {
    const hasBox = rungs.some(r => r.o.some(o => o.k === "box"));
    const xjMax = Math.max(...rungs.map(r => ((r.c || []).length ? R(r.c.length - 1) : 60)));
    const W = xjMax + (hasBox ? 200 : 150), xr = W - 14;
    let y = 8, out = "";
    rungs.forEach(r => {
      const c = r.c || [], br = r.b || [], o = r.o;
      const rows = Math.max(br.length ? 2 : 1, o.length);
      const rowH = o.some(x => x.k === "box") ? 66 : 56;
      const ym = y + 30, p = PA.power(r, bits), on = p ? " on" : "";
      const xj = c.length ? R(c.length - 1) : 60;
      let g = `<g class="${p ? "on" : ""}">`;
      if (r.n != null) g += `<text class="n" x="20" y="${ym + 4}" text-anchor="middle">${esc(r.n)}</text>`;
      // hovedledning
      g += `<line class="wire" x1="34" y1="${ym}" x2="${xj + 22}" y2="${ym}"/>`;
      // grene
      br.forEach(b => {
        const x1 = L(b.from) + 6, x2 = R(b.to - 1) - 6, yb = ym + rowH;
        g += `<path class="wire" d="M${x1} ${ym} V${yb} H${x2} V${ym}"/>`;
        const span = x2 - x1;
        b.c.forEach((e, i) => (g += contact(x1 + (i + 0.5) * span / b.c.length, yb, e, bits)));
      });
      c.forEach((e, i) => (g += contact(L(i) + 56, ym, e, bits)));
      // udgange
      if (o.length > 1) g += `<line class="wire" x1="${xj + 22}" y1="${ym}" x2="${xj + 22}" y2="${ym + (o.length - 1) * rowH}"/>`;
      o.forEach((e, i) => {
        const yo = ym + i * rowH;
        g += `<line class="wire" x1="${xj + 22}" y1="${yo}" x2="${xr}" y2="${yo}"/>`;
        g += output(e, xr, yo, p);
      });
      g += "</g>";
      out += g;
      y += rows * rowH + 18;
    });
    const H = y;
    host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" style="max-width:${Math.round(W * 1.2)}px;min-width:${Math.min(W, 560)}px" role="img" aria-label="Ladder-diagram">
      <line class="rail" x1="34" y1="4" x2="34" y2="${H - 6}"/><line class="rail" x1="${xr}" y1="4" x2="${xr}" y2="${H - 6}"/>${out}</svg>`;
  };
  function contact(cx, y, e, bits) {
    const t = truth(e, bits) ? " t" : "";
    let s = `<rect x="${cx - 9}" y="${y - 14}" width="18" height="28" fill="var(--scope)"/>`;
    s += `<path class="sym${t}" d="M${cx - 9} ${y - 13}V${y + 13}M${cx + 9} ${y - 13}V${y + 13}${e.k === "xio" ? `M${cx - 11} ${y + 12}L${cx + 11} ${y - 12}` : ""}"/>`;
    s += `<text class="tag" x="${cx}" y="${y - 20}" text-anchor="middle">${esc(e.tag)}</text>`;
    return s;
  }
  function output(e, xr, y, p) {
    const t = p ? " t" : "";
    if (e.k === "box") {
      const w = 150, x = xr - w - 20, h = 22 + e.lines.length * 15;
      let s = `<rect class="boxel${t}" x="${x}" y="${y - 16}" width="${w}" height="${h}" rx="3"/>`;
      s += `<text x="${x + 8}" y="${y - 1}" style="font-weight:700">${esc(e.title)}</text>`;
      e.lines.forEach((l, i) => (s += `<text x="${x + 8}" y="${y + 15 + i * 15}">${esc(l)}</text>`));
      return s;
    }
    const cx = xr - 56;
    const letter = { otl: "L", otu: "U", res: "RES", ons: "ONS" }[e.k] || "";
    let s = `<rect x="${cx - 16}" y="${y - 14}" width="32" height="28" fill="var(--scope)"/>`;
    s += `<path class="sym${t}" d="M${cx - 8} ${y - 13}Q${cx - 17} ${y} ${cx - 8} ${y + 13}M${cx + 8} ${y - 13}Q${cx + 17} ${y} ${cx + 8} ${y + 13}"/>`;
    if (letter) s += `<text x="${cx}" y="${y + 4}" text-anchor="middle" style="font-size:${letter.length > 1 ? 9 : 12}px;font-weight:700">${letter}</text>`;
    s += `<text class="tag" x="${cx}" y="${y - 20}" text-anchor="middle">${esc(e.tag)}</text>`;
    return s;
  }

  /* ---------- Forståelse: skriv selv, sammenlign med forslag ---------- */
  PA.forstaa = function (host, items) {
    host.innerHTML = items.map((it, i) => `<div class="q"><div class="qn">Spørgsmål ${i + 1}</div><div class="qt">${it.q}</div>
      <textarea aria-label="Dit svar" placeholder="Skriv dit svar her (eller på papir) før du ser forslaget."></textarea>
      <div class="ctrl"><button class="btn prim" type="button">Sammenlign med forslag</button></div>
      <div class="svar" hidden>${it.s}</div></div>`).join("");
    host.querySelectorAll(".q").forEach(q => q.querySelector("button").addEventListener("click", e => { q.querySelector(".svar").hidden = false; e.target.disabled = true; }));
  };

  /* ---------- Quiz: ét klik låser, forklaring vises altid ---------- */
  PA.quiz = function (host, orig) {
    // bland svarmulighederne, så det rigtige svar ikke altid står samme sted
    const items = orig.map(it => {
      const ord = it.a.map((_, j) => j).sort(() => Math.random() - 0.5);
      return { ...it, a: ord.map(j => it.a[j]), r: ord.indexOf(it.r) };
    });
    host.innerHTML = items.map((it, i) => `<div class="q" data-i="${i}"><div class="qn">Spørgsmål ${i + 1} af ${items.length}</div><div class="qt">${it.q}</div>
      <div class="opts">${it.a.map((a, j) => `<button type="button" data-j="${j}">${a}</button>`).join("")}</div>
      <div class="why" hidden>${it.f}</div></div>`).join("") + `<div class="score" aria-live="polite"></div><div class="wrong"></div>
      <div class="ctrl"><button class="btn" type="button" data-reset>Tag quizzen igen</button></div>`;
    const svar = {};
    const done = () => {
      const n = Object.keys(svar).length;
      if (n < items.length) return;
      const ok = items.filter((it, i) => svar[i] === it.r).length;
      host.querySelector(".score").textContent = `Du fik ${ok} af ${items.length} rigtige.`;
      const wr = items.map((it, i) => (svar[i] !== it.r ? `<li>${it.q}</li>` : "")).join("");
      host.querySelector(".wrong").innerHTML = wr ? `<p><b>Tag med i repetitionen:</b></p><ul>${wr}</ul>` : "<p>Alt rigtigt. Godt gået.</p>";
    };
    host.querySelectorAll(".q").forEach(q => {
      const i = +q.dataset.i, it = items[i];
      q.querySelectorAll(".opts button").forEach(b => b.addEventListener("click", () => {
        const j = +b.dataset.j; svar[i] = j;
        q.querySelectorAll(".opts button").forEach(x => { x.disabled = true; if (+x.dataset.j === it.r) x.classList.add("ok"); });
        if (j !== it.r) b.classList.add("bad");
        q.querySelector(".why").hidden = false; done();
      }));
    });
    host.querySelector("[data-reset]").addEventListener("click", () => { PA.quiz(host, orig); host.scrollIntoView({ behavior: "smooth" }); });
  };
})();
