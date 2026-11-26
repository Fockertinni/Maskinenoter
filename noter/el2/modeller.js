/* Interaktive modeller til Elektroteknik 2-noterne (noter/el2/*.html).
   I markdown-kilden skrives fx <div class="m" data-m="stjerne"></div>, så tegnes modellen her.
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

const M = {};

/* 1 · Usymmetrisk Y-last med og uden nul (Millman) */
M.stjerne = el => {
  const r = ramme(el, "Usymmetrisk stjernelast");
  const R1 = skyder(r, "R1", 40, 600, 10, 200, "Ω", t), R2 = skyder(r, "R2", 40, 600, 10, 160, "Ω", t), R3 = skyder(r, "R3", 40, 600, 10, 320, "Ω", t);
  const nul = knapper(r, "Nulleder", [[1, "Tilsluttet"], [0, "Fjernet"]], 1, t);
  const s = svg(r, 420, 300);
  lgd(r, [[C.l1, "L1"], [C.l2, "L2"], [C.l3, "L3"], [C.gul, "N' (lastens stjernepunkt)"]]);
  function t() {
    const U = [pol(230, 90), pol(230, -30), pol(230, 210)], R = [R1(), R2(), R3()], Y = R.map(x => K(1 / x));
    let UN = K(0);
    if (!nul()) { let t = K(0), n = K(0); for (let i = 0; i < 3; i++) { t = add(t, mul(U[i], Y[i])); n = add(n, Y[i]); } UN = dv(t, n); }
    const Uf = U.map(u => sub(u, UN)), I = Uf.map((u, i) => mul(u, Y[i])), IN = I.reduce(add, K(0));
    const P = Uf.reduce((a, u, i) => a + abs(u) ** 2 / R[i], 0);
    s.innerHTML = ""; const cx = 210, cy = 160, k = .52, Px = z => cx + z.re * k, Py = z => cy - z.im * k;
    tegn(s, "polygon", { points: U.map(u => Px(u) + "," + Py(u)).join(" "), fill: "none", stroke: C.grid, "stroke-width": 1.5 });
    tegn(s, "circle", { cx, cy, r: 3.5, fill: C.dim });
    tegn(s, "text", { x: cx + 6, y: cy + 16, fill: C.dim, "font-size": 12 }, "N");
    [C.l1, C.l2, C.l3].forEach((f, i) => { pil(s, Px(UN), Py(UN), Px(U[i]), Py(U[i]), f, 2.6, `${fmt(abs(Uf[i]), 0)} V`); });
    tegn(s, "circle", { cx: Px(UN), cy: Py(UN), r: 5, fill: C.gul });
    tal(r, [["U over R1 / R2 / R3", Uf.map(u => fmt(abs(u), 0)).join(" / ") + " V"], ["I1 / I2 / I3", I.map(i => fmt(abs(i), 2)).join(" / ") + " A"],
      [nul() ? "Nulstrøm I_N" : "Forskydning U_N'N", nul() ? fmt(abs(IN), 2) + " A" : fmt(abs(UN), 0) + " V"], ["Samlet P", fmt(P, 0) + " W"]]);
  }
  t();
};

/* 2 · Aron-kobling ved symmetrisk last */
M.aron = el => {
  const r = ramme(el, "To-wattmetermetoden (Aron)");
  const phi = skyder(r, "Fasevinkel φ", -90, 90, 1, 30, "°", t, v => `${v} (cos φ = ${fmt(Math.cos(rad(v)), 2)} ${v > 0 ? "ind." : v < 0 ? "kap." : ""})`);
  const s = svg(r, 420, 200);
  lgd(r, [[C.l1, "W_a = U·I·cos(30° + φ)"], [C.l2, "W_b = U·I·cos(30° − φ)"], [C.gul, "P = W_a + W_b"]]);
  function t() {
    const U = 400, I = 5, p = phi(), Wa = U * I * Math.cos(rad(30 + p)), Wb = U * I * Math.cos(rad(30 - p));
    s.innerHTML = ""; const y0 = 100, k = 80 / 3464;
    tegn(s, "line", { x1: 20, x2: 400, y1: y0, y2: y0, stroke: C.dim });
    [[Wa, C.l1, "W_a"], [Wb, C.l2, "W_b"], [Wa + Wb, C.gul, "P"]].forEach(([w, f, n], i) => {
      const x = 70 + i * 110, h = w * k; tegn(s, "rect", { x, y: h > 0 ? y0 - h : y0, width: 70, height: Math.abs(h) || 1, fill: f, rx: 4 });
      tegn(s, "text", { x: x + 35, y: h > 0 ? y0 - h - 6 : y0 - h + 16, fill: C.hvid, "font-size": 13, "text-anchor": "middle" }, `${n} ${fmt(w, 0)} W`); });
    tal(r, [["W_a", fmt(Wa, 0) + " W"], ["W_b", fmt(Wb, 0) + " W"], ["P = W_a + W_b", fmt(Wa + Wb, 0) + " W"], ["Q = √3 (W_b − W_a)", fmt(Math.sqrt(3) * (Wb - Wa), 0) + " var"]]);
    regn(r, `U_L = 400 V, I_L = 5 A\nP = √3 · 400 · 5 · cos ${p}° = ${fmt(Math.sqrt(3) * 2000 * Math.cos(rad(p)), 0)} W  (samme som W_a + W_b)` + (Wa < -1 || Wb < -1 ? "\nDet ene wattmeter viser negativt. Det sker, når cos φ < 0,5, og er ikke en fejl." : ""));
  }
  t();
};

/* 3 · Synkrongeneratorens vektordiagram */
M.generator = el => {
  const r = ramme(el, "Vektordiagram for synkrongeneratoren (pr. fase, pu)");
  const I = skyder(r, "Strøm I", 0, 1.2, .05, 1, "pu", t);
  const phi = skyder(r, "φ (+ = induktiv, − = kapacitiv)", -90, 90, 1, 37, "°", t);
  const Xs = skyder(r, "Synkronreaktans X_s", .3, 1.5, .05, 1, "pu", t);
  const s = svg(r, 420, 300);
  lgd(r, [[C.l2, "U (klemspænding, 1 pu)"], [C.l3, "I"], [C.lilla, "jX_s·I"], [C.gul, "E (EMK)"]]);
  function t() {
    const U = K(1), Iv = pol(I(), -phi()), E = add(U, mul(K(0, Xs()), Iv));
    s.innerHTML = ""; const ox = 60, oy = 230, k = 130, Px = z => ox + z.re * k, Py = z => oy - z.im * k;
    pil(s, ox, oy, Px(U), Py(U), C.l2, 3, "U");
    pil(s, ox, oy, ox + Iv.re * 90, oy - Iv.im * 90, C.l3, 2.4, "I");
    pil(s, Px(U), Py(U), Px(E), Py(E), C.lilla, 2.4, "jXs·I");
    pil(s, ox, oy, Px(E), Py(E), C.gul, 3);
    tegn(s, "text", { x: (ox + Px(E)) / 2 - 8, y: (oy + Py(E)) / 2 - 10, fill: C.gul, "font-size": 14, "font-family": "ui-monospace, monospace" }, "E");
    const d = ang(E); tegn(s, "path", { d: `M${ox + 50},${oy} A50,50 0 0 0 ${ox + 50 * Math.cos(rad(d))},${oy - 50 * Math.sin(rad(d))}`, fill: "none", stroke: C.hvid, "stroke-dasharray": "3 3" });
    tegn(s, "text", { x: ox + 56, y: oy - 8, fill: C.hvid, "font-size": 12 }, "δ");
    tal(r, [["E (krævet EMK)", fmt(abs(E), 2) + " pu"], ["Lastvinkel δ", fmt(d, 1) + "°"], ["P = E·U·sin δ / X_s", fmt(abs(E) * Math.sin(rad(d)) / Xs(), 2) + " pu"],
      ["Holdes I_m fast, bliver U", phi() > 20 ? "lavere (svækket felt)" : phi() < -20 ? "højere (understøttet felt)" : "lidt lavere"]]);
  }
  t();
};

/* 4 · Asynkronmotorens momentkurve */
M.moment = el => {
  const r = ramme(el, "Momentkurve M = f(n), 4-polet motor, 50 Hz");
  const U = skyder(r, "Spænding", 70, 110, 1, 100, "% af U_N", t);
  const last = knapper(r, "Last", [["k", "Konstant moment"], ["p", "Pumpe (∝ n²)"]], "k", t);
  const ML = skyder(r, "Lastmoment ved 1500 o/min", .1, 1.2, .05, .5, "× M_N", t);
  const s = svg(r, 420, 260);
  lgd(r, [[C.gul, "Motorens moment"], [C.l2, "Lastens moment"], [C.l3, "Driftspunkt"]]);
  const sk = .25; // kipslip. Kloss' formel med kipmoment 2,5 · M_N ved fuld spænding
  function t() {
    const u = U() / 100;
    const Mmot = n => { const sl = Math.max(1e-4, (1500 - n) / 1500); return u * u * 2.5 * 2 / (sl / sk + sk / sl); };
    const Mlast = n => last() === "k" ? ML() : ML() * (n / 1500) ** 2;
    s.innerHTML = ""; const a = akser(s, 420, 260, { l: 30, r: 12, t: 10, b: 26 }, 0, 1500, 0, 3, "n [o/min]", "M / M_N");
    for (let y = 1; y <= 2; y++) { tegn(s, "line", { x1: a.X(0), x2: a.X(1500), y1: a.Y(y), y2: a.Y(y), stroke: C.grid, "stroke-dasharray": "2 4" }); tegn(s, "text", { x: 24, y: a.Y(y) + 4, fill: C.dim, "font-size": 11, "text-anchor": "end" }, y); }
    [0, 500, 1000, 1500].forEach(n => tegn(s, "text", { x: a.X(n), y: 260 - 10, fill: C.dim, "font-size": 11, "text-anchor": "middle" }, n));
    const pm = [], pl = []; for (let n = 0; n <= 1500; n += 10) { pm.push([a.X(n), a.Y(Mmot(n))]); pl.push([a.X(n), a.Y(Math.min(3, Mlast(n)))]); }
    kurve(s, pm, C.gul); kurve(s, pl, C.l2);
    // driftspunkt: søg fra synkron hastighed nedad
    let dp = null; for (let n = 1499; n > 0; n--) { if (Mmot(n) >= Mlast(n)) { dp = n; break; } const sl = (1500 - n) / 1500; if (sl > sk) break; }
    const start = Mmot(0), kip = u * u * 2.5;
    if (dp) tegn(s, "circle", { cx: a.X(dp), cy: a.Y(Mlast(dp)), r: 5.5, fill: C.l3 });
    tal(r, [["Startmoment", fmt(start, 2) + " × M_N"], ["Kipmoment", fmt(kip, 2) + " × M_N"], ["Driftspunkt", dp ? `${dp} o/min, s = ${fmt((1500 - dp) / 15, 1)} %` : "ingen: motoren kipper"],
      ["Starter motoren?", start > Mlast(0) * 1.2 ? "Ja, med reserve" : start > Mlast(0) ? "Kun lige (under 20 % reserve)" : "Nej"]]);
  }
  t();
};

/* 5 · Fasekompensering */
M.kompensering = el => {
  const r = ramme(el, "Fasekompensering med kondensatorbatteri");
  const P = skyder(r, "Aktiv effekt P", .2, 10, .1, 1.2, "kW", t), c1 = skyder(r, "cos φ₁ før", .3, .95, .01, .65, "", t), c2 = skyder(r, "cos φ₂ ønsket", .8, 1, .01, .95, "", t);
  const s = svg(r, 420, 220);
  lgd(r, [[C.l3, "P"], [C.l1, "Q før"], [C.l2, "Q efter"], [C.gul, "Q_C (fra kondensatorerne)"]]);
  function t() {
    const p = P() * 1000, t1 = Math.tan(Math.acos(c1())), t2 = Math.tan(Math.acos(Math.max(c1(), c2()))), Q1 = p * t1, Q2 = p * t2, QC = Q1 - Q2, w = 2 * Math.PI * 50;
    const CY = QC / (3 * w * 230 ** 2), CD = QC / (3 * w * 400 ** 2);
    s.innerHTML = ""; const ox = 30, oy = 200, k = 180 / Math.max(p, Q1);
    pil(s, ox, oy, ox + p * k, oy, C.l3, 3, "P");
    pil(s, ox + p * k, oy, ox + p * k, oy - Q1 * k, C.l1, 2.4, "Q₁");
    pil(s, ox, oy, ox + p * k, oy - Q1 * k, C.l1, 1.6);
    pil(s, ox, oy, ox + p * k, oy - Q2 * k, C.l2, 2.4, "S₂");
    tegn(s, "line", { x1: ox + p * k + 14, x2: ox + p * k + 14, y1: oy - Q1 * k, y2: oy - Q2 * k, stroke: C.gul, "stroke-width": 4 });
    tegn(s, "text", { x: ox + p * k + 22, y: oy - (Q1 + Q2) / 2 * k, fill: C.gul, "font-size": 13 }, "Q_C");
    tal(r, [["Q_C", fmt(QC, 0) + " var"], ["C pr. fase i Y", fmt(CY * 1e6, 1) + " µF"], ["C pr. fase i Δ", fmt(CD * 1e6, 1) + " µF"], ["Strøm falder fra → til", `${fmt(p / (Math.sqrt(3) * 400 * c1()), 2)} → ${fmt(p / (Math.sqrt(3) * 400 * Math.max(c1(), c2())), 2)} A`]]);
    regn(r, `Q_C = P (tan φ₁ − tan φ₂) = ${fmt(p, 0)} · (${fmt(t1, 3)} − ${fmt(t2, 3)}) = ${fmt(QC, 0)} var\nC_Y = Q_C / (3 · ω · U_f²) = ${fmt(QC, 0)} / (3 · 314,2 · 230²) = ${fmt(CY * 1e6, 1)} µF\nC_Δ = C_Y / 3 = ${fmt(CD * 1e6, 1)} µF`);
  }
  t();
};

/* 6 · Jordmåling: hvorfor 62 % og 5 × d */
M.jord = el => {
  const r = ramme(el, "3-punktsmåling af overgangsmodstand");
  const A = skyder(r, "Afstand til strømspyd a", 1, 12, .5, 5, "× spydets dybde d", t);
  const s = svg(r, 420, 240);
  lgd(r, [[C.gul, "Målt R ved spændingsspyddets placering"], [C.l3, "Sand R_E"], [C.l1, "55 / 60 / 65 %"]]);
  function t() {
    // forenklet model: halvkugleelektroder i homogen jord, radius valgt så a = 5·d lige klarer 3 %-kravet
    const r0 = .12, a = A();  // skaleret, ρ/(2π) = 1
    const sand = 1 / r0; // R_E alene (ρ/2πr0)
    const Rmaal = x => sand - (1 / Math.max(x, r0) - 1 / Math.max(a - x, r0)) - 1 / a; // målt værdi
    s.innerHTML = ""; const ym = sand * 1.6;
    const ax = akser(s, 420, 240, { l: 30, r: 12, t: 10, b: 26 }, 0, 100, 0, ym, "spændingsspyd, % af a", "R");
    const p = []; for (let i = 1; i < 100; i++) p.push([ax.X(i), ax.Y(Math.min(ym, Math.max(0, Rmaal(i / 100 * a))))]);
    kurve(s, p, C.gul);
    tegn(s, "line", { x1: ax.X(0), x2: ax.X(100), y1: ax.Y(sand), y2: ax.Y(sand), stroke: C.l3, "stroke-dasharray": "5 4" });
    const v = [55, 60, 65].map(q => Rmaal(q / 100 * a));
    [55, 60, 65].forEach((q, i) => tegn(s, "circle", { cx: ax.X(q), cy: ax.Y(Math.min(ym, v[i])), r: 4.5, fill: C.l1 }));
    const afv = (Math.max(...v) - Math.min(...v)) / Math.min(...v) * 100;
    tal(r, [["R ved 55 / 60 / 65 %", v.map(x => fmt(x / sand * 100, 0)).join(" / ") + " % af sand R"], ["Afvigelse", fmt(afv, 1) + " %"], ["3 %-kravet", afv <= 3 ? "Opfyldt" : "Ikke opfyldt: øg a"]]);
  }
  t();
};

/* 7 · Transformerens virkningsgrad */
M.trafoeta = el => {
  const r = ramme(el, "Virkningsgrad mod belastningsgrad (S_N = 2 kVA)");
  const P0 = skyder(r, "Jerntab P₀", 10, 120, 5, 40, "W", t), Pk = skyder(r, "Kobbertab ved fuldlast P_k", 20, 200, 5, 80, "W", t), cf = skyder(r, "cos φ", .5, 1, .05, 1, "", t);
  const s = svg(r, 420, 240);
  lgd(r, [[C.gul, "η"], [C.l1, "Kobbertab x²·P_k"], [C.l2, "Jerntab P₀"]]);
  function t() {
    const SN = 2000, eta = x => { const P2 = x * SN * cf(); return P2 / (P2 + P0() + x * x * Pk()); };
    s.innerHTML = ""; const a = akser(s, 420, 240, { l: 34, r: 12, t: 10, b: 26 }, 0, 1.25, .8, 1, "x = I / I_N", "η");
    const p = [], pc = [], pf = []; const tk = y => .8 + y / 250 * .2;
    for (let x = .02; x <= 1.25; x += .01) { p.push([a.X(x), a.Y(Math.max(.8, eta(x)))]); pc.push([a.X(x), a.Y(tk(Math.min(250, x * x * Pk())))]); pf.push([a.X(x), a.Y(tk(P0()))]); }
    kurve(s, pc, C.l1, 1.6); kurve(s, pf, C.l2, 1.6); kurve(s, p, C.gul);
    const xm = Math.sqrt(P0() / Pk());
    if (xm <= 1.25) { tegn(s, "line", { x1: a.X(xm), x2: a.X(xm), y1: a.Y(.8), y2: a.Y(1), stroke: C.hvid, "stroke-dasharray": "3 3" }); tegn(s, "circle", { cx: a.X(xm), cy: a.Y(eta(xm)), r: 5, fill: C.l3 }); }
    tal(r, [["η ved fuld last", fmt(eta(1) * 100, 1) + " %"], ["η ved halv last", fmt(eta(.5) * 100, 1) + " %"], ["Maks. η ved x", fmt(xm, 2)], ["Maks. η", fmt(eta(xm) * 100, 1) + " %"]]);
    regn(r, `x_ηmax = √(P₀ / P_k) = √(${P0()} / ${Pk()}) = ${fmt(xm, 2)}  →  her er x²·P_k = P₀ (kobbertab = jerntab)\nKurverne nederst er tab i W (skala 0–250 W).`);
  }
  t();
};

/* 8 · Spændingsfald: tre metoder */
M.spfald = el => {
  const r = ramme(el, "Spændingsfald pr. fase: definition, tilnærmet formel og den forkerte metode");
  const I = skyder(r, "Strøm I", .5, 10, .5, 3, "A", t), R = skyder(r, "R", .2, 5, .1, 2.2, "Ω", t), X = skyder(r, "X", 0, 5, .1, 1, "Ω", t), phi = skyder(r, "φ (+ ind., − kap.)", -60, 80, 5, 30, "°", t);
  const s = svg(r, 420, 40); s.style.display = "none";
  function t() {
    const U2 = 230, Iv = pol(I(), -phi()), U1 = add(K(U2), mul(K(R(), X()), Iv));
    const def = abs(U1) - U2, til = I() * (R() * Math.cos(rad(phi())) + X() * Math.sin(rad(phi()))), forkert = I() * Math.hypot(R(), X());
    tal(r, [["Definition |U₁| − |U₂|", fmt(def, 2) + " V"], ["Tilnærmet I(R cos φ + X sin φ)", fmt(til, 2) + " V"], ["Forkert I · Z", fmt(forkert, 2) + " V"], ["Fejl ved I · Z", fmt(forkert - def, 2) + " V"]]);
    regn(r, `U₂ = 230 V (vandret). U₁ = U₂ + I·(R + jX) = ${fmt(abs(U1), 2)} V\nZ-vinkel = ${fmt(Math.atan2(X(), R()) * 180 / Math.PI, 0)}°, strømvinkel = ${phi()}°. Jo større forskel på de to vinkler, jo mere rammer I·Z ved siden af.` + (def < 0 ? "\nNegativt spændingsfald: kapacitiv last løfter spændingen." : ""));
  }
  t();
};

/* 9 · Koblingsciffer på urskiven */
M.ciffer = el => {
  const r = ramme(el, "Koblingsciffer på urskiven");
  const h = skyder(r, "Koblingsciffer", 0, 11, 1, 11, "", t, v => `${v} (${v * 30}° bagud)`);
  const s = svg(r, 420, 260);
  lgd(r, [[C.l1, "Primær A, B, C (HS)"], [C.gul, "Sekundær a, b, c (LS)"]]);
  function t() {
    s.innerHTML = ""; const cx = 210, cy = 130, R0 = 110;
    tegn(s, "circle", { cx, cy, r: R0, fill: "none", stroke: C.grid });
    for (let i = 0; i < 12; i++) { const g = rad(90 - i * 30); tegn(s, "text", { x: cx + (R0 + 0) * Math.cos(g) * .9, y: cy - R0 * Math.sin(g) * .9 + 4, fill: C.dim, "font-size": 11, "text-anchor": "middle" }, i === 0 ? 12 : i); }
    ["A", "B", "C"].forEach((n, i) => { const g = rad(90 - i * 120); pil(s, cx, cy, cx + 85 * Math.cos(g), cy - 85 * Math.sin(g), C.l1, 2.6, n); });
    ["a", "b", "c"].forEach((n, i) => { const g = rad(90 - i * 120 - h() * 30); pil(s, cx, cy, cx + 55 * Math.cos(g), cy - 55 * Math.sin(g), C.gul, 2.6, n); });
    const g = [[0, 4, 8, "I"], [6, 10, 2, "II"], [1, 5, "III"], [7, 11, "IV"]].find(x => x.includes(h()));
    tal(r, [["Faseforskydning", `${h() * 30}° bagud`], ["Gruppe", g[g.length - 1]], ["Kan parallelkobles med", { I: "0, 4, 8", II: "2, 6, 10", III: "1, 5 (og 7, 11 ved at bytte to faser på begge sider)", IV: "7, 11 (og 1, 5 ved at bytte to faser på begge sider)" }[g[g.length - 1]]]]);
  }
  t();
};

/* 10 · Kortslutningsstrømme bag transformeren */
M.kortslut = el => {
  const r = ramme(el, "Kortslutningsstrøm direkte på sekundærklemmerne");
  const S = skyder(r, "S_N", 2, 2500, 1, 2, "kVA", t), U = skyder(r, "U_N sekundær", 230, 690, 10, 400, "V", t), ek = skyder(r, "e_k", 2, 12, .5, 5, "%", t), kap = skyder(r, "κ (stødfaktor)", 1, 2, .05, 1.8, "", t);
  const s = svg(r, 420, 40); s.style.display = "none";
  function t() {
    const IN = S() * 1000 / (Math.sqrt(3) * U()), Ik3 = IN * 100 / ek(), Ik2 = Ik3 * Math.sqrt(3) / 2, ip = kap() * Math.sqrt(2) * Ik3;
    tal(r, [["I_N", fmt(IN, IN < 100 ? 2 : 0) + " A"], ["I_k3", fmt(Ik3, Ik3 < 100 ? 1 : 0) + " A"], ["I_k2", fmt(Ik2, Ik2 < 100 ? 1 : 0) + " A"], ["Stødstrøm i_p", fmt(ip, ip < 100 ? 1 : 0) + " A"], ["S_k", fmt(S() * 100 / ek(), 0) + " kVA"]]);
    regn(r, `I_N = S_N / (√3 · U_N) = ${S() * 1000} / (√3 · ${U()}) = ${fmt(IN, 2)} A\nI_k3 = I_N · 100 / e_k = ${fmt(IN, 2)} · 100 / ${fmt(ek(), 1)} = ${fmt(Ik3, 1)} A\nI_k2 = 0,87 · I_k3 = ${fmt(Ik2, 1)} A\ni_p = κ · √2 · I_k3 = ${fmt(kap(), 2)} · 1,414 · ${fmt(Ik3, 1)} = ${fmt(ip, 1)} A`);
  }
  t();
};

/* 11 · Synkronoskop */
M.synkronoskop = el => {
  const r = ramme(el, "Synkronoskop: kobl generatoren ind");
  const df = skyder(r, "Generatorens frekvens − nettets", -.5, .5, .02, .1, "Hz", nyt), du = skyder(r, "Generatorens spænding − nettets", -30, 30, 1, 6, "V", nyt);
  const s = svg(r, 420, 240);
  const k = document.createElement("div"); k.className = "rad"; k.innerHTML = `<button type="button" class="on">Kobl ind nu</button>`; r.el.append(k);
  let vinkel = 200, sidst = performance.now(), synlig = true;
  function nyt() { r.el.querySelector(".besked") && r.el.querySelector(".besked").remove(); }
  function frame(nu) {
    const dt = (nu - sidst) / 1000; sidst = nu; if (synlig) vinkel = (vinkel + df() * 360 * dt + 360) % 360;
    s.innerHTML = ""; const cx = 210, cy = 125, R0 = 95;
    tegn(s, "circle", { cx, cy, r: R0, fill: "none", stroke: C.grid, "stroke-width": 2 });
    for (let i = 0; i < 36; i++) { const g = rad(90 - i * 10), on = Math.abs(((i * 10 - vinkel + 540) % 360) - 180) < 6;
      tegn(s, "circle", { cx: cx + R0 * Math.cos(g), cy: cy - R0 * Math.sin(g), r: on ? 6 : 3.2, fill: on ? C.gul : (i === 0 ? C.l3 : C.grid) }); }
    const g = rad(90 - vinkel); pil(s, cx, cy, cx + 75 * Math.cos(g), cy - 75 * Math.sin(g), C.gul, 3);
    tegn(s, "text", { x: cx, y: 20, fill: C.l3, "font-size": 12, "text-anchor": "middle" }, "kl. 12");
    tegn(s, "text", { x: cx, y: 236, fill: C.dim, "font-size": 12, "text-anchor": "middle" }, df() > 0 ? "drejer med uret: generatoren er hurtigst" : df() < 0 ? "drejer mod uret: generatoren er langsomst" : "står stille");
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  new IntersectionObserver(e => { synlig = e[0].isIntersecting; }).observe(s);
  k.querySelector("button").addEventListener("click", () => {
    const fejl = Math.min(vinkel, 360 - vinkel), dfx = df(), dux = du();
    const p = [];
    if (fejl > 15) p.push(`Fasevinklen var ${fmt(fejl, 0)}° fra kl. 12. Det giver et kraftigt strøm- og momentstød på aksel og kobling.`);
    if (Math.abs(dfx) > .3) p.push(`Frekvensforskellen på ${fmt(dfx, 2)} Hz er for stor. Generatoren bliver revet i takt med et stød.`);
    else if (dfx < 0) p.push("Generatoren var langsommere end nettet. Den går straks i motordrift, og bakeffektrelæet kan udløse.");
    if (dux < 0 || dux > 12) p.push(`Spændingsforskellen på ${dux} V giver en reaktiv udligningsstrøm. Hold generatoren 5–10 V over nettet.`);
    if (!p.length) besked(r, `<b>Pæn indkobling.</b> ${fmt(fejl, 0)}° fra kl. 12, generatoren lidt hurtigere og lidt over i spænding. Den tager straks lidt P-last.`, true);
    else besked(r, "<b>Uheldig indkobling.</b> " + p.join(" "), false);
  });
};

/* 12 · Harmoniske og THD */
M.thd = el => {
  const r = ramme(el, "Strømkurve med harmoniske");
  const h5 = skyder(r, "5. harmoniske", 0, 80, 1, 40, "%", t), h7 = skyder(r, "7. harmoniske", 0, 60, 1, 20, "%", t), h11 = skyder(r, "11. harmoniske", 0, 30, 1, 8, "%", t), h13 = skyder(r, "13. harmoniske", 0, 30, 1, 5, "%", t);
  const s = svg(r, 420, 220);
  lgd(r, [[C.dim, "Grundtone (50 Hz)"], [C.gul, "Samlet strøm"]]);
  function t() {
    const H = [[1, 1, 0], [5, h5() / 100, 180], [7, h7() / 100, 0], [11, h11() / 100, 180], [13, h13() / 100, 0]];
    s.innerHTML = ""; const a = akser(s, 420, 220, { l: 12, r: 12, t: 10, b: 22 }, 0, 360, -2.2, 2.2, "en periode (20 ms)", "");
    const p = [], g = []; for (let x = 0; x <= 360; x += 2) { g.push([a.X(x), a.Y(Math.sin(rad(x)))]); p.push([a.X(x), a.Y(Math.max(-2.2, Math.min(2.2, H.reduce((sum, [n, A, f]) => sum + A * Math.sin(rad(n * x + f)), 0))))]); }
    kurve(s, g, C.dim, 1.6, "4 3"); kurve(s, p, C.gul);
    const thd = Math.sqrt(H.slice(1).reduce((q, [, A]) => q + A * A, 0)), rms = Math.sqrt(1 + thd * thd);
    tal(r, [["THDi", fmt(thd * 100, 1) + " %"], ["I_RMS / I₁", fmt(rms, 3)], ["PF ved cos φ₁ = 1", fmt(1 / rms, 3)]]);
    regn(r, `THDi = √(I₅² + I₇² + I₁₁² + I₁₃²) / I₁ = √(${[h5(), h7(), h11(), h13()].map(v => fmt(v / 100, 2) + "²").join(" + ")}) = ${fmt(thd * 100, 1)} %\nI_RMS = I₁ · √(1 + THD²) = ${fmt(rms, 3)} · I₁`);
  }
  t();
};

/* 13 · U/f-styring */
M.uf = el => {
  const r = ramme(el, "U/f-styring i frekvensomformeren");
  const f = skyder(r, "Udgangsfrekvens", 2, 80, 1, 25, "Hz", t), boost = skyder(r, "Startboost", 0, 10, 1, 4, "% af U_N", t);
  const s = svg(r, 420, 220);
  lgd(r, [[C.gul, "Motorspænding U"], [C.l2, "Flux U/f (relativ)"], [C.l3, "Arbejdspunkt"]]);
  function t() {
    const U = x => Math.min(400, 400 * (boost() / 100 + (1 - boost() / 100) * x / 50)), fl = x => (U(x) / x) / (400 / 50);
    s.innerHTML = ""; const a = akser(s, 420, 220, { l: 34, r: 12, t: 10, b: 24 }, 0, 80, 0, 450, "f [Hz]", "U [V]");
    const pu = [], pf = []; for (let x = 1; x <= 80; x += 1) { pu.push([a.X(x), a.Y(U(x))]); pf.push([a.X(x), a.Y(Math.min(450, fl(x) * 300))]); }
    kurve(s, pu, C.gul); kurve(s, pf, C.l2, 1.8, "5 3");
    tegn(s, "circle", { cx: a.X(f()), cy: a.Y(U(f())), r: 5, fill: C.l3 });
    tegn(s, "line", { x1: a.X(50), x2: a.X(50), y1: a.Y(0), y2: a.Y(450), stroke: C.dim, "stroke-dasharray": "3 3" });
    tal(r, [["U", fmt(U(f()), 0) + " V"], ["Synkron hastighed (4-polet)", fmt(60 * f() / 2, 0) + " o/min"], ["Flux i forhold til nominel", fmt(fl(f()) * 100, 0) + " %"],
      ["Område", f() > 50 ? "Feltsvækning: moment falder" : "Konstant flux og moment"]]);
  }
  t();
};

/* 14 · Belysningsstyrke fra en punktkilde */
M.lys = el => {
  const r = ramme(el, "Belysningsstyrke på et vandret bord");
  const I = skyder(r, "Lysstyrke I (mod punktet)", 100, 3000, 50, 1000, "cd", t), h = skyder(r, "Højde over bordet h", .5, 5, .1, 2, "m", t), d = skyder(r, "Vandret afstand d", 0, 5, .1, 1.5, "m", t);
  const s = svg(r, 420, 220);
  function t() {
    const al = Math.atan2(d(), h()), rr = Math.hypot(d(), h()), E = I() * Math.cos(al) ** 3 / h() ** 2, E0 = I() / h() ** 2;
    s.innerHTML = ""; const k = 36, ox = 60, oy = 200;
    tegn(s, "line", { x1: 20, x2: 400, y1: oy, y2: oy, stroke: C.dim, "stroke-width": 3 });
    const lx = ox, ly = oy - h() * k, px = ox + d() * k;
    tegn(s, "line", { x1: lx, y1: ly, x2: lx, y2: oy, stroke: C.grid, "stroke-dasharray": "4 3" });
    tegn(s, "line", { x1: lx, y1: ly, x2: px, y2: oy, stroke: C.gul, "stroke-width": 2 });
    tegn(s, "circle", { cx: lx, cy: ly, r: 8, fill: C.gul });
    tegn(s, "circle", { cx: px, cy: oy, r: 4.5, fill: C.l3 });
    tegn(s, "text", { x: lx + 12, y: (ly + oy) / 2, fill: C.dim, "font-size": 12 }, "h");
    tegn(s, "text", { x: (lx + px) / 2 + 8, y: (ly + oy) / 2 - 6, fill: C.gul, "font-size": 12 }, `r = ${fmt(rr, 2)} m`);
    tal(r, [["Vinkel α", fmt(al * 180 / Math.PI, 1) + "°"], ["E i punktet", fmt(E, 0) + " lx"], ["E lige under lampen", fmt(E0, 0) + " lx"]]);
    regn(r, `E = I · cos³α / h² = ${I()} · cos³(${fmt(al * 180 / Math.PI, 1)}°) / ${fmt(h(), 1)}² = ${fmt(E, 0)} lx\n(samme som E = I · cos α / r² = ${I()} · ${fmt(Math.cos(al), 3)} / ${fmt(rr, 2)}²)`);
  }
  t();
};

document.querySelectorAll(".m[data-m]").forEach(el => { const f = M[el.dataset.m]; if (f) try { f(el); } catch (e) { el.textContent = "Modellen kunne ikke vises."; console.error(e); } });
})();
