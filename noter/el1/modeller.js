/* Interaktive modeller til Elektroteknik 1-noterne (noter/el1/*.html).
   I markdown-kilden skrives fx <div class="m" data-m="rlc"></div>, så tegnes modellen her.
   Hjælpefunktionerne er de samme som i noter/el2/modeller.js. Ren JavaScript og SVG, ingen biblioteker.
   Modeller: thevenin, rlc, dielektrikum, rc, rl, kompensering, luftgab, jernspole, blandet, aron, stjerne,
   nulstrom, kraft, dcmotor, leder, akku, solcelle, sinus */
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


/* ---------- 1 · DC-kredse: Thevenin og effekttilpasning ---------- */
M.thevenin = el => {
  const r = ramme(el, "Thevenin-ækvivalent med belastning");
  const E = skyder(r, "E_Th", 1, 60, 1, 29, "V", t), Ri = skyder(r, "R_Th", .5, 20, .5, 6.5, "Ω", t), RL = skyder(r, "R_L (belastning)", 0, 40, .5, 5, "Ω", t);
  const s = svg(r, 420, 230);
  lgd(r, [[C.l2, "U_ab (klemspænding)"], [C.gul, "P i belastningen"], [C.l1, "dit arbejdspunkt"]]);
  function t() {
    const e = E(), ri = Ri(), rl = RL(), I = e / (ri + rl), U = I * rl, P = I * I * rl, Pmax = e * e / (4 * ri);
    s.innerHTML = ""; const a = akser(s, 420, 230, { l: 34, r: 34, t: 14, b: 26 }, 0, 40, 0, 1.05, "R_L [Ω]", "andel af maks.");
    const pU = [], pP = []; for (let x = 0; x <= 40; x += .25) { const i = e / (ri + x); pU.push([a.X(x), a.Y(i * x / e)]); pP.push([a.X(x), a.Y(i * i * x / Pmax)]); }
    kurve(s, pU, C.l2); kurve(s, pP, C.gul);
    tegn(s, "line", { x1: a.X(ri), x2: a.X(ri), y1: a.Y(0), y2: a.Y(1.05), stroke: C.dim, "stroke-dasharray": "4 3" });
    tegn(s, "text", { x: a.X(ri) + 4, y: a.Y(.06), fill: C.dim, "font-size": 11 }, "R_L = R_Th");
    tegn(s, "circle", { cx: a.X(rl), cy: a.Y(U / e), r: 5, fill: C.l1 }); tegn(s, "circle", { cx: a.X(rl), cy: a.Y(P / Pmax), r: 5, fill: C.l1 });
    tal(r, [["Strøm I", fmt(I, 2) + " A"], ["U_ab", fmt(U, 2) + " V"], ["P i R_L", fmt(P, 1) + " W"], ["Virkningsgrad R_L/(R_L+R_Th)", fmt(100 * rl / (ri + rl), 0) + " %"]]);
    regn(r, `I = E_Th / (R_Th + R_L) = ${fmt(e, 1)} / (${fmt(ri, 1)} + ${fmt(rl, 1)}) = ${fmt(I, 3)} A\nU_ab = I · R_L = ${fmt(U, 2)} V   (spændingsdeling: E_Th · R_L / (R_Th + R_L))\nMaks. effekt når R_L = R_Th: P_max = E_Th² / (4 · R_Th) = ${fmt(Pmax, 1)} W, men så er η kun 50 %`);
  }
  t();
};

/* ---------- 2 · AC-kredse: serie- og parallel-RLC med vektordiagram ---------- */
M.rlc = el => {
  const r = ramme(el, "R, L og C i serie eller parallel (230 V)");
  const kob = knapper(r, "Kobling", [["s", "Serie"], ["p", "Parallel"]], "s", t);
  const R = skyder(r, "R", 5, 300, 5, 100, "Ω", t), L = skyder(r, "L", 0, 1, .01, .32, "H", t), Cc = skyder(r, "C", 5, 200, 1, 50, "µF", t), f = skyder(r, "f", 10, 150, 1, 50, "Hz", t);
  const s = svg(r, 420, 300);
  function t() {
    const w = 2 * Math.PI * f(), XL = w * L(), XC = 1 / (w * Cc() * 1e-6), Rv = R(), U = 230, f0 = 1 / (2 * Math.PI * Math.sqrt(Math.max(L(), 1e-6) * Cc() * 1e-6));
    s.innerHTML = ""; const ox = 150, oy = 150;
    tegn(s, "line", { x1: 10, x2: 410, y1: oy, y2: oy, stroke: C.grid }); tegn(s, "line", { x1: ox, x2: ox, y1: 10, y2: 290, stroke: C.grid });
    if (kob() === "s") {
      const Z = K(Rv, XL - XC), I = U / abs(Z), phi = ang(Z), UR = I * Rv, UL = I * XL, UC = I * XC, k = 130 / Math.max(U, UL, UC, UR);
      lgd(r, [[C.hvid, "I (reference)"], [C.l3, "U_R"], [C.l1, "U_L"], [C.l2, "U_C"], [C.gul, "U = U_R + U_L + U_C"]]);
      pil(s, ox, oy, ox + 60, oy, C.hvid, 2, "I");
      pil(s, ox, oy, ox + UR * k, oy, C.l3, 3, "U_R");
      pil(s, ox + UR * k, oy, ox + UR * k, oy - UL * k, C.l1, 2.6, "U_L");
      pil(s, ox + UR * k, oy - UL * k, ox + UR * k, oy - UL * k + UC * k, C.l2, 2.6, "U_C");
      pil(s, ox, oy, ox + UR * k, oy - (UL - UC) * k, C.gul, 3, "U");
      tal(r, [["X_L / X_C", `${fmt(XL, 1)} / ${fmt(XC, 1)} Ω`], ["|Z|", fmt(abs(Z), 1) + " Ω"], ["I", fmt(I, 3) + " A"], ["φ", fmt(phi, 1) + "° " + (phi > .5 ? "(induktiv)" : phi < -.5 ? "(kapacitiv)" : "(resonans)")], ["U_L / U_C", `${fmt(UL, 0)} / ${fmt(UC, 0)} V`], ["Resonans f₀", fmt(f0, 1) + " Hz"]]);
      regn(r, `Z = R + j(X_L − X_C) = ${fmt(Rv, 0)} + j(${fmt(XL, 1)} − ${fmt(XC, 1)}) = ${fmt(abs(Z), 1)} Ω ∠ ${fmt(phi, 1)}°\nI = U / Z = 230 / ${fmt(abs(Z), 1)} = ${fmt(I, 3)} A\nU_L og U_C kan hver for sig være større end U, fordi de står modsat hinanden.`);
    } else {
      const IR = U / Rv, IL = L() > 0 ? U / XL : 0, IC = U / XC, I = K(IR, IC - IL), phi = -ang(I), k = 130 / Math.max(IR, IL, IC, abs(I));
      lgd(r, [[C.hvid, "U (reference)"], [C.l3, "I_R"], [C.l1, "I_L"], [C.l2, "I_C"], [C.gul, "I = I_R + I_L + I_C"]]);
      pil(s, ox, oy, ox + 130, oy, C.hvid, 2, "U");
      pil(s, ox, oy, ox + IR * k, oy, C.l3, 3, "I_R");
      pil(s, ox + IR * k, oy, ox + IR * k, oy + IL * k, C.l1, 2.6, "I_L");
      pil(s, ox + IR * k, oy + IL * k, ox + IR * k, oy + IL * k - IC * k, C.l2, 2.6, "I_C");
      pil(s, ox, oy, ox + IR * k, oy - (IC - IL) * k, C.gul, 3, "I");
      tal(r, [["I_R / I_L / I_C", `${fmt(IR, 2)} / ${fmt(IL, 2)} / ${fmt(IC, 2)} A`], ["Samlet I", fmt(abs(I), 3) + " A"], ["|Z| = U / I", fmt(U / abs(I), 1) + " Ω"], ["φ", fmt(phi, 1) + "° " + (phi > .5 ? "(induktiv)" : phi < -.5 ? "(kapacitiv)" : "(resonans)")]]);
      regn(r, `I = I_R + j(I_C − I_L) = ${fmt(IR, 2)} + j(${fmt(IC, 2)} − ${fmt(IL, 2)})\n|I| = √(${fmt(IR, 2)}² + ${fmt(IC - IL, 2)}²) = ${fmt(abs(I), 3)} A\nI parallel er spændingen fælles, så den er reference. Strømmene lægges vektorielt sammen.`);
    }
  }
  t();
};

/* ---------- 3 · Kondensator: to dielektrika i serie ---------- */
M.dielektrikum = el => {
  const r = ramme(el, "Pladekondensator med luft og et isolerende lag");
  const er = skyder(r, "ε_r i lag 2", 1, 10, .1, 7, "", t), U = skyder(r, "Spænding U", 100, 10000, 100, 1000, "V", t), a = skyder(r, "Tykkelse pr. lag", .5, 5, .5, 1, "mm", t);
  const s = svg(r, 420, 170);
  lgd(r, [[C.l1, "Lag 1: luft (ε_r = 1)"], [C.l2, "Lag 2"]]);
  function t() {
    const e = er(), d = a() / 1000, u = U(), U1 = u * e / (1 + e), U2 = u / (1 + e), E1 = U1 / d, E2 = U2 / d;
    s.innerHTML = ""; const x0 = 40, w = 340, h = 120, y0 = 25, k = w / 2;
    tegn(s, "rect", { x: x0, y: y0, width: k, height: h, fill: "#3a1f1c" }); tegn(s, "rect", { x: x0 + k, y: y0, width: k, height: h, fill: "#1b2b45" });
    tegn(s, "rect", { x: x0 - 8, y: y0 - 6, width: 8, height: h + 12, fill: C.hvid }); tegn(s, "rect", { x: x0 + w, y: y0 - 6, width: 8, height: h + 12, fill: C.hvid });
    const n1 = Math.round(4 + 10 * E1 / Math.max(E1, E2)), n2 = Math.round(4 + 10 * E2 / Math.max(E1, E2));
    for (let i = 0; i < n1; i++) pil(s, x0 + 6, y0 + (i + .5) * h / n1, x0 + k - 6, y0 + (i + .5) * h / n1, C.l1, 1.4);
    for (let i = 0; i < n2; i++) pil(s, x0 + k + 6, y0 + (i + .5) * h / n2, x0 + w - 6, y0 + (i + .5) * h / n2, C.l2, 1.4);
    tegn(s, "text", { x: x0 + k / 2, y: y0 + h + 22, fill: C.l1, "font-size": 13, "text-anchor": "middle" }, `U₁ = ${fmt(U1, 0)} V`);
    tegn(s, "text", { x: x0 + 1.5 * k, y: y0 + h + 22, fill: C.l2, "font-size": 13, "text-anchor": "middle" }, `U₂ = ${fmt(U2, 0)} V`);
    tal(r, [["E i luft", fmt(E1 / 1e6, 2) + " kV/mm"], ["E i lag 2", fmt(E2 / 1e6, 2) + " kV/mm"], ["Forhold E₁/E₂", fmt(E1 / E2, 1)], ["Luftens gennemslag ca.", "3 kV/mm"]]);
    regn(r, `Samme ladning Q og samme D = Q/A går gennem begge lag. E = D / ε, så E₁/E₂ = ε_r2/ε_r1 = ${fmt(e, 1)}.\nLagene er lige tykke, så U₁/U₂ = E₁/E₂ = ${fmt(e, 1)}: luften tager ${fmt(100 * e / (1 + e), 0)} % af spændingen.\nDerfor er luftlommer i isolation farlige: luften får den højeste feltstyrke og slår først igennem.`);
    besked(r, E1 > 3e6 ? "Feltet i luften er over ca. 3 kV/mm. Luftlaget vil slå igennem (glimudladning), selv om det faste lag holder." : "Luften holder ved denne spænding.", E1 <= 3e6);
  }
  t();
};

/* ---------- 3 + 9 · Op- og afladning: RC og RL ---------- */
function tau(el, typ) {
  const rc = typ === "rc";
  const r = ramme(el, rc ? "Op- og afladning af kondensator" : "Ind- og udkobling af spole");
  const ret = knapper(r, "Forløb", [[1, rc ? "Opladning" : "Indkobling"], [0, rc ? "Afladning" : "Udkobling"]], 1, t);
  const R = skyder(r, "R", 10, 1000, 10, 100, "Ω", t), X = rc ? skyder(r, "C", 10, 2000, 10, 470, "µF", t) : skyder(r, "L", .1, 10, .1, 2, "H", t);
  const tt = skyder(r, "Tid t", 0, 300, 1, 47, "ms", t);
  const s = svg(r, 420, 220);
  lgd(r, rc ? [[C.l1, "u_C (kondensatorspænding)"], [C.l2, "i (ladestrøm)"]] : [[C.l1, "i (strøm i spolen)"], [C.l2, "e_s (selvinduktion)"]]);
  function t() {
    const U = 24, Rv = R(), T = rc ? Rv * X() * 1e-6 : X() / Rv, op = ret(), tm = tt() / 1000, I0 = U / Rv;
    const f1 = x => op ? 1 - Math.exp(-x / T) : Math.exp(-x / T), f2 = x => op ? Math.exp(-x / T) : -Math.exp(-x / T);
    s.innerHTML = ""; const a = akser(s, 420, 220, { l: 34, r: 12, t: 14, b: 26 }, 0, .3, -1.05, 1.05, "t [s]", "andel");
    const p1 = [], p2 = []; for (let x = 0; x <= .3; x += .001) { p1.push([a.X(x), a.Y(f1(x))]); p2.push([a.X(x), a.Y(f2(x))]); }
    kurve(s, p1, C.l1); kurve(s, p2, C.l2);
    for (let n = 1; n <= 5 && n * T <= .3; n++) { tegn(s, "line", { x1: a.X(n * T), x2: a.X(n * T), y1: a.Y(-1.05), y2: a.Y(1.05), stroke: C.grid, "stroke-dasharray": "2 4" }); tegn(s, "text", { x: a.X(n * T) + 2, y: a.Y(-.95), fill: C.dim, "font-size": 11 }, n + "τ"); }
    tegn(s, "line", { x1: a.X(Math.min(tm, .3)), x2: a.X(Math.min(tm, .3)), y1: a.Y(-1.05), y2: a.Y(1.05), stroke: C.gul, "stroke-width": 1.5 });
    const v1 = f1(tm), v2 = f2(tm);
    tal(r, [["τ", fmt(T * 1000, 1) + " ms"], ["t / τ", fmt(tm / T, 2)], rc ? ["u_C", fmt(U * v1, 2) + " V"] : ["i", fmt(I0 * v1, 3) + " A"], rc ? ["i", fmt(I0 * v2, 3) + " A"] : ["e_s", fmt(U * v2, 2) + " V"]]);
    regn(r, rc
      ? `τ = R · C = ${fmt(Rv, 0)} · ${fmt(X(), 0)}·10⁻⁶ = ${fmt(T * 1000, 1)} ms   (U = 24 V)\n${op ? `u_C = U · (1 − e^(−t/τ)) = 24 · (1 − e^(−${fmt(tm / T, 2)})) = ${fmt(U * v1, 2)} V` : `u_C = U · e^(−t/τ) = 24 · e^(−${fmt(tm / T, 2)}) = ${fmt(U * v1, 2)} V`}\nEfter 1τ er der nået 63,2 % af vejen, efter 5τ regnes forløbet som slut (99,3 %).`
      : `τ = L / R = ${fmt(X(), 1)} / ${fmt(Rv, 0)} = ${fmt(T * 1000, 1)} ms   (U = 24 V, I = U/R = ${fmt(I0, 3)} A)\n${op ? `i = I · (1 − e^(−t/τ)) = ${fmt(I0 * v1, 3)} A` : `i = I · e^(−t/τ) = ${fmt(I0 * v1, 3)} A  (gennem friløbsdioden)`}\nEnergi i feltet: W = ½ · L · I² = ${fmt(.5 * X() * I0 * I0, 3)} J. Uden friløbsdiode skal den energi ud i en gnist.`);
  }
  t();
}
M.rc = el => tau(el, "rc");
M.rl = el => tau(el, "rl");

/* ---------- 3 + 6 · Fasekompensering (1- eller 3-faset) ---------- */
M.kompensering = el => {
  const r = ramme(el, "Fasekompensering med kondensator");
  const net = knapper(r, "Net", [[1, "1-faset 230 V"], [3, "3-faset 400 V"]], 1, t);
  const P = skyder(r, "Aktiv effekt P", .2, 20, .1, 2, "kW", t), c1 = skyder(r, "cos φ₁ før", .3, .95, .01, .6, "", t), c2 = skyder(r, "cos φ₂ ønsket", .8, 1, .01, .95, "", t);
  const s = svg(r, 420, 220);
  lgd(r, [[C.l3, "P"], [C.l1, "S₁ og Q₁ før"], [C.l2, "S₂ efter"], [C.gul, "Q_C"]]);
  function t() {
    const p = P() * 1000, t1 = Math.tan(Math.acos(c1())), t2 = Math.tan(Math.acos(Math.max(c1(), c2()))), Q1 = p * t1, Q2 = p * t2, QC = Q1 - Q2, w = 2 * Math.PI * 50;
    s.innerHTML = ""; const ox = 30, oy = 205, k = Math.min(250 / p, 190 / Q1);
    pil(s, ox, oy, ox + p * k, oy, C.l3, 3, "P");
    pil(s, ox + p * k, oy, ox + p * k, oy - Q1 * k, C.l1, 2.4, "Q₁");
    pil(s, ox, oy, ox + p * k, oy - Q1 * k, C.l1, 1.6, "S₁");
    pil(s, ox, oy, ox + p * k, oy - Q2 * k, C.l2, 2.4, "S₂");
    tegn(s, "line", { x1: ox + p * k + 14, x2: ox + p * k + 14, y1: oy - Q1 * k, y2: oy - Q2 * k, stroke: C.gul, "stroke-width": 4 });
    tegn(s, "text", { x: ox + p * k + 22, y: oy - (Q1 + Q2) / 2 * k, fill: C.gul, "font-size": 13 }, "Q_C");
    if (net() === 1) {
      const XC = 230 ** 2 / QC, Cf = 1 / (w * XC);
      tal(r, [["Q_C", fmt(QC, 0) + " var"], ["X_C", fmt(XC, 1) + " Ω"], ["C", fmt(Cf * 1e6, 1) + " µF"], ["Strøm før → efter", `${fmt(p / (230 * c1()), 2)} → ${fmt(p / (230 * Math.max(c1(), c2())), 2)} A`]]);
      regn(r, `Q_C = P · (tan φ₁ − tan φ₂) = ${fmt(p, 0)} · (${fmt(t1, 3)} − ${fmt(t2, 3)}) = ${fmt(QC, 0)} var\nX_C = U² / Q_C = 230² / ${fmt(QC, 0)} = ${fmt(XC, 1)} Ω\nC = 1 / (ω · X_C) = 1 / (314,16 · ${fmt(XC, 1)}) = ${fmt(Cf * 1e6, 1)} µF`);
    } else {
      const CY = QC / (3 * w * 230 ** 2), CD = QC / (3 * w * 400 ** 2);
      tal(r, [["Q_C i alt", fmt(QC, 0) + " var"], ["C pr. fase i Y", fmt(CY * 1e6, 1) + " µF"], ["C pr. fase i Δ", fmt(CD * 1e6, 1) + " µF"], ["Linjestrøm før → efter", `${fmt(p / (Math.sqrt(3) * 400 * c1()), 2)} → ${fmt(p / (Math.sqrt(3) * 400 * Math.max(c1(), c2())), 2)} A`]]);
      regn(r, `Q_C = P · (tan φ₁ − tan φ₂) = ${fmt(QC, 0)} var, fordelt på 3 kondensatorer\nY: C = (Q_C/3) / (ω · U_f²) = ${fmt(QC / 3, 0)} / (314,16 · 230²) = ${fmt(CY * 1e6, 1)} µF\nΔ: C = (Q_C/3) / (ω · U_L²) = ${fmt(QC / 3, 0)} / (314,16 · 400²) = ${fmt(CD * 1e6, 1)} µF  (3 gange mindre)`);
    }
  }
  t();
};

/* ---------- 4 · Magnetisk kreds med luftgab ---------- */
M.luftgab = el => {
  const r = ramme(el, "Magnetisk kreds med luftgab");
  const N = skyder(r, "Vindinger N", 50, 2000, 50, 500, "", t), I = skyder(r, "Strøm I", .1, 5, .1, 1, "A", t), d = skyder(r, "Luftgab δ", 0, 5, .1, 1, "mm", t), mr = skyder(r, "μ_r for jern", 200, 5000, 100, 2000, "", t);
  const s = svg(r, 420, 120);
  lgd(r, [[C.l2, "Reluktans i jernet"], [C.l1, "Reluktans i luftgabet"]]);
  function t() {
    const mu0 = 4e-7 * Math.PI, A = 4e-4, lFe = .4, dd = d() / 1000, RFe = (lFe - dd) / (mu0 * mr() * A), Rg = dd / (mu0 * A), Rm = RFe + Rg, F = N() * I(), Phi = F / Rm, B = Phi / A, L = N() ** 2 / Rm;
    s.innerHTML = ""; const w = 380, aF = RFe / Rm * w;
    tegn(s, "rect", { x: 20, y: 30, width: aF, height: 36, fill: C.l2, rx: 4 }); tegn(s, "rect", { x: 20 + aF, y: 30, width: w - aF, height: 36, fill: C.l1, rx: 4 });
    tegn(s, "text", { x: 20, y: 22, fill: C.dim, "font-size": 12 }, `R_m i alt = ${fmt(Rm / 1e3, 0)} kA/Wb (1/H)`);
    tegn(s, "text", { x: 20, y: 92, fill: C.hvid, "font-size": 13 }, `Luftgabet tager ${fmt(100 * Rg / Rm, 0)} % af amperevindingerne, selv om det kun er ${fmt(100 * dd / lFe, 2)} % af længden`);
    tal(r, [["F_m = N · I", fmt(F, 0) + " A"], ["Φ", fmt(Phi * 1e3, 3) + " mWb"], ["B = Φ / A", fmt(B, 2) + " T"], ["L = N² / R_m", fmt(L, 2) + " H"]]);
    regn(r, `Jernvej l = 400 mm, A = 4 cm²\nR_m,Fe = l / (μ₀ · μ_r · A) = ${fmt(RFe / 1e3, 0)} kA/Wb    R_m,δ = δ / (μ₀ · A) = ${fmt(Rg / 1e3, 0)} kA/Wb\nΦ = N · I / (R_m,Fe + R_m,δ) = ${fmt(F, 0)} / ${fmt(Rm / 1e3, 0)}·10³ = ${fmt(Phi * 1e3, 3)} mWb   B = ${fmt(B, 2)} T`);
    besked(r, B > 1.5 ? "B er over ca. 1,5 T. Jernet går i mætning, så μ_r falder, og den lineære beregning holder ikke længere." : "B er under mætning (ca. 1,5 T), så beregningen er rimelig.", B <= 1.5);
  }
  t();
};

/* ---------- 4 · AC-spole med jernkerne ---------- */
M.jernspole = el => {
  const r = ramme(el, "AC-spole med jernkerne: kobbertab, jerntab og vinklen α");
  const U = skyder(r, "U", 50, 400, 5, 230, "V", t), I = skyder(r, "I", .2, 3, .05, 1.25, "A", t), P = skyder(r, "Wattmeter P", 10, 400, 5, 250, "W", t), Rc = skyder(r, "R_Cu", 1, 200, 1, 130, "Ω", t);
  const s = svg(r, 420, 240);
  lgd(r, [[C.hvid, "I og Φ"], [C.l3, "I·R_Cu"], [C.lilla, "I·R_Fe"], [C.l1, "I·X_L,eff"], [C.gul, "U"]]);
  function t() {
    const u = U(), i = I(), p = Math.min(P(), u * i * .999), PCu = i * i * Rc(), PFe = p - PCu, Z = u / i, Reff = p / (i * i), X = Math.sqrt(Math.max(Z * Z - Reff * Reff, 0)), RFe = Reff - Rc(), phi = Math.acos(p / (u * i)) * 180 / Math.PI, al = Math.atan2(RFe, X) * 180 / Math.PI;
    s.innerHTML = ""; const ox = 30, oy = 215, k = 190 / u;
    pil(s, ox, oy, ox + 330, oy, C.hvid, 1.6, "I");
    const fx = Math.cos(rad(-al)), fy = Math.sin(rad(-al));
    if (PFe > 0) pil(s, ox, oy, ox + 150 * fx, oy - 150 * fy, C.dim, 1.6, "Φ");
    const a1 = i * Rc() * k, a2 = i * Math.max(RFe, 0) * k, a3 = i * X * k;
    pil(s, ox, oy, ox + a1, oy, C.l3, 3); pil(s, ox + a1, oy, ox + a1 + a2, oy, C.lilla, 3); pil(s, ox + a1 + a2, oy, ox + a1 + a2, oy - a3, C.l1, 2.6);
    pil(s, ox, oy, ox + a1 + a2, oy - a3, C.gul, 3, "U");
    tal(r, [["P_Cu = I² · R_Cu", fmt(PCu, 1) + " W"], ["P_Fe = P − P_Cu", fmt(PFe, 1) + " W"], ["φ (mellem U og I)", fmt(phi, 1) + "°"], ["α (mellem Φ og I)", fmt(al, 1) + "°"]]);
    regn(r, `Z = U / I = ${fmt(Z, 1)} Ω   R_eff = P / I² = ${fmt(Reff, 1)} Ω   R_Fe = R_eff − R_Cu = ${fmt(RFe, 1)} Ω\nX_L,eff = √(Z² − R_eff²) = ${fmt(X, 1)} Ω   tan α = R_Fe / X_L,eff = ${fmt(RFe / X, 3)}  →  α = ${fmt(al, 1)}°\nFeltet Φ følger den magnetiserende strøm, men hysterese får det til at halte vinklen α efter I.`);
    if (PFe < 0) besked(r, "P_Cu er større end den målte P. Det kan ikke lade sig gøre. Ret R_Cu eller P.", false); else r.el.querySelector(".besked")?.remove();
  }
  t();
};

/* ---------- 5 · Parallelforbundne seriekredse (bro) ---------- */
M.blandet = el => {
  const r = ramme(el, "R₁ + X_L parallelt med R₂ − X_C, og spændingen U_cd");
  const R1 = skyder(r, "R₁", 10, 300, 5, 100, "Ω", t), XL = skyder(r, "X_L", 0, 300, 5, 80, "Ω", t), R2 = skyder(r, "R₂", 10, 300, 5, 80, "Ω", t), XC = skyder(r, "X_C", 0, 300, 5, 160, "Ω", t);
  const s = svg(r, 420, 290);
  lgd(r, [[C.hvid, "U (reference)"], [C.l1, "I₁ (gren med spole)"], [C.l2, "I₂ (gren med kondensator)"], [C.gul, "I = I₁ + I₂"], [C.lilla, "U_cd"]]);
  function t() {
    const U = K(100), Z1 = K(R1(), XL()), Z2 = K(R2(), -XC()), I1 = dv(U, Z1), I2 = dv(U, Z2), I = add(I1, I2), Z = dv(U, I);
    const UR1 = mul(I1, K(R1())), UR2 = mul(I2, K(R2())), Ucd = sub(UR2, UR1);
    s.innerHTML = ""; const ox = 60, oy = 145, kU = 2.6, kI = 110 / Math.max(abs(I1), abs(I2), abs(I));
    pil(s, ox, oy, ox + 100 * kU, oy, C.hvid, 1.6, "U");
    pil(s, ox, oy, ox + I1.re * kI, oy - I1.im * kI, C.l1, 2.4, "I₁"); pil(s, ox, oy, ox + I2.re * kI, oy - I2.im * kI, C.l2, 2.4, "I₂"); pil(s, ox, oy, ox + I.re * kI, oy - I.im * kI, C.gul, 3, "I");
    pil(s, ox + UR1.re * kU, oy - UR1.im * kU, ox + UR2.re * kU, oy - UR2.im * kU, C.lilla, 2.4, "U_cd");
    tegn(s, "circle", { cx: ox + 50 * kU, cy: oy, r: 50 * kU, fill: "none", stroke: C.grid, "stroke-dasharray": "3 4" });
    tal(r, [["I₁", `${fmt(abs(I1), 3)} A ∠ ${fmt(ang(I1), 1)}°`], ["I₂", `${fmt(abs(I2), 3)} A ∠ ${fmt(ang(I2), 1)}°`], ["I", `${fmt(abs(I), 3)} A ∠ ${fmt(ang(I), 1)}°`], ["Z", `${fmt(abs(Z), 1)} Ω ∠ ${fmt(ang(Z), 1)}°`], ["cos φ", fmt(Math.cos(rad(ang(Z))), 3)], ["U_cd", fmt(abs(Ucd), 1) + " V"]]);
    regn(r, `U = 100 V ∠ 0°.  Z₁ = ${R1()} + j${XL()} Ω,  Z₂ = ${R2()} − j${XC()} Ω\nI₁ = U/Z₁,  I₂ = U/Z₂,  I = I₁ + I₂  (vektorielt)\nU_cd = U_R2 − U_R1 = I₂·R₂ − I₁·R₁ = ${fmt(abs(Ucd), 1)} V ∠ ${fmt(ang(Ucd), 1)}°\nPunkterne c og d ligger begge på Thales-cirklen over U, fordi U_R og U_X står vinkelret i hver gren.`);
  }
  t();
};

/* ---------- 8 · Usymmetrisk last med nul: nulstrømmen ---------- */
M.nulstrom = el => {
  const r = ramme(el, "Tre 1-fasede laster på 3 × 400/230 V med nul");
  const I1 = skyder(r, "I i L1–N", 0, 20, .5, 10, "A", t), p1 = skyder(r, "φ₁", -90, 90, 1, 0, "°", t);
  const I2 = skyder(r, "I i L2–N", 0, 20, .5, 6, "A", t), p2 = skyder(r, "φ₂", -90, 90, 1, 37, "°", t);
  const I3 = skyder(r, "I i L3–N", 0, 20, .5, 4, "A", t), p3 = skyder(r, "φ₃", -90, 90, 1, 0, "°", t);
  const s = svg(r, 420, 300);
  lgd(r, [[C.l1, "I_L1"], [C.l2, "I_L2"], [C.l3, "I_L3"], [C.gul, "I_N (spids til hale)"]]);
  function t() {
    const vU = [0, -120, 120], Iv = [pol(I1(), vU[0] - p1()), pol(I2(), vU[1] - p2()), pol(I3(), vU[2] - p3())], sum = Iv.reduce(add, K(0)), IN = K(-sum.re, -sum.im);
    s.innerHTML = ""; const cx = 170, cy = 150, kU = .45, kI = 110 / Math.max(20, ...Iv.map(abs));
    vU.forEach((g, i) => { const u = pol(230, g); pil(s, cx, cy, cx + u.re * kU, cy - u.im * kU, C.grid, 1.4, "U" + (i + 1) + "N"); });
    let px = cx, py = cy;
    Iv.forEach((z, i) => { pil(s, cx, cy, cx + z.re * kI, cy - z.im * kI, [C.l1, C.l2, C.l3][i], 2.6); });
    Iv.forEach((z, i) => { pil(s, px, py, px + z.re * kI, py - z.im * kI, [C.l1, C.l2, C.l3][i], 1.2); px += z.re * kI; py -= z.im * kI; });
    pil(s, cx, cy, px, py, C.gul, 3, "−I_N");
    tal(r, [["I_N", `${fmt(abs(IN), 2)} A`], ["Vinkel på I_N", fmt(ang(IN), 1) + "°"], ["P i alt", fmt(230 * (I1() * Math.cos(rad(p1())) + I2() * Math.cos(rad(p2())) + I3() * Math.cos(rad(p3()))), 0) + " W"]]);
    regn(r, `I_L1 = ${I1()} ∠ ${0 - p1()}°,  I_L2 = ${I2()} ∠ ${-120 - p2()}°,  I_L3 = ${I3()} ∠ ${120 - p3()}°  (φ > 0 = induktiv)\nKirchhoff: I_L1 + I_L2 + I_L3 + I_N = 0  →  I_N = −(I_L1 + I_L2 + I_L3)\n|I_N| = ${fmt(abs(IN), 2)} A. Prøv tre ens resistive laster: så bliver I_N = 0.`);
  }
  t();
};

/* ---------- 9 · Højrehåndsregel / venstrehåndsregel: kraft på leder ---------- */
M.kraft = el => {
  const r = ramme(el, "Kraft på strømførende leder i et magnetfelt");
  const pol_ = knapper(r, "Nordpol", [[1, "Foroven"], [-1, "Forneden"]], 1, t);
  const strom = knapper(r, "Strøm i lederen", [[1, "Ind i papiret ⊗"], [-1, "Ud af papiret ⊙"]], 1, t);
  const B = skyder(r, "B", .1, 1.5, .05, .8, "T", t), I = skyder(r, "I", 1, 50, 1, 10, "A", t);
  const s = svg(r, 420, 260);
  lgd(r, [[C.l2, "hovedfelt (N → S)"], [C.l1, "lederens felt (proptrækker)"], [C.gul, "kraft F"]]);
  function t() {
    const n = pol_(), i = strom(), cx = 210, cy = 130, l = .2, F = B() * I() * l;
    s.innerHTML = "";
    tegn(s, "rect", { x: 120, y: 6, width: 180, height: 34, fill: n > 0 ? "#7a2a24" : "#1e3a66", rx: 4 }); tegn(s, "text", { x: 210, y: 29, fill: C.hvid, "font-size": 16, "text-anchor": "middle" }, n > 0 ? "N" : "S");
    tegn(s, "rect", { x: 120, y: 220, width: 180, height: 34, fill: n > 0 ? "#1e3a66" : "#7a2a24", rx: 4 }); tegn(s, "text", { x: 210, y: 243, fill: C.hvid, "font-size": 16, "text-anchor": "middle" }, n > 0 ? "S" : "N");
    for (let x = 140; x <= 280; x += 28) { if (Math.abs(x - cx) < 10) continue; n > 0 ? pil(s, x, 46, x, 214, C.l2, 1.2) : pil(s, x, 214, x, 46, C.l2, 1.2); }
    tegn(s, "circle", { cx, cy, r: 30, fill: "none", stroke: C.l1, "stroke-width": 1.6 });
    // proptrækker: strøm ind (⊗) giver felt med uret
    const cw = i > 0; pil(s, cx + 30, cw ? cy - 7 : cy + 7, cx + 30, cw ? cy + 7 : cy - 7, C.l1, 1.6); pil(s, cx - 30, cw ? cy + 7 : cy - 7, cx - 30, cw ? cy - 7 : cy + 7, C.l1, 1.6);
    tegn(s, "circle", { cx, cy, r: 12, fill: "#0f1713", stroke: C.hvid, "stroke-width": 2 });
    if (i > 0) { tegn(s, "line", { x1: cx - 7, y1: cy - 7, x2: cx + 7, y2: cy + 7, stroke: C.hvid, "stroke-width": 2 }); tegn(s, "line", { x1: cx + 7, y1: cy - 7, x2: cx - 7, y2: cy + 7, stroke: C.hvid, "stroke-width": 2 }); }
    else tegn(s, "circle", { cx, cy, r: 3.5, fill: C.hvid });
    // retning: B nedad (n>0) og I ind (i>0): F = I l × B. Ind = -z, B = -y: (-z)×(-y) = z×y = -x  → mod venstre
    const dir = -n * i; pil(s, cx, cy, cx + dir * 110, cy, C.gul, 4, "F");
    tal(r, [["F = B · I · l", fmt(F, 2) + " N (l = 0,2 m)"], ["Kraften peger", dir > 0 ? "mod højre" : "mod venstre"]]);
    regn(r, `Feltlinjerne går fra N til S. Proptrækkerreglen: strøm ind i papiret (⊗) giver et felt med uret om lederen.\nPå den side, hvor lederens felt og hovedfeltet har samme retning, bliver feltet stærkt. Lederen skubbes mod den svage side.\nVend enten strømmen eller polerne, så vender kraften. Vend begge, så er kraften uændret.`);
  }
  t();
};

/* ---------- 10 · DC-motor: shunt og serie ---------- */
M.dcmotor = el => {
  const r = ramme(el, "DC-motorens hastighed og moment ved belastning");
  const typ = knapper(r, "Motor", [["sh", "Shunt (konstant felt)"], ["se", "Serie (felt ∝ I_a)"]], "sh", t);
  const Ia = skyder(r, "Ankerstrøm I_a", .3, 6, .05, 1.82, "A", t);
  const s = svg(r, 420, 230);
  lgd(r, [[C.l2, "n som funktion af M"], [C.gul, "arbejdspunkt"]]);
  // data fra opgavesæt 1, opgave 6: 220 V, R_av = 24 Ω, ΔU_b = 2 V, n = 50 o/s ved I_a = 1,817 A
  const U = 220, Ra = 24, dUb = 2, kphi = (220 - 1.817 * 24 - 2) / 50;
  function punkt(ia, se) { const kp = se ? kphi * ia / 1.817 : kphi, Rs = se ? 4 : 0, E = U - ia * (Ra + Rs) - dUb, n = E / kp, M = kp * ia / (2 * Math.PI); return { E, n, M, kp, Rs }; }
  function t() {
    const se = typ() === "se", ia = Ia(), p = punkt(ia, se);
    s.innerHTML = ""; const a = akser(s, 420, 230, { l: 40, r: 12, t: 14, b: 26 }, 0, se ? 12 : 4, 0, 150, "M [Nm]", "n [o/s]");
    const pk = []; for (let x = .3; x <= 6; x += .02) { const q = punkt(x, se); if (q.n <= 150 && q.n > 0 && q.M <= (se ? 12 : 4)) pk.push([a.X(q.M), a.Y(q.n)]); }
    kurve(s, pk, C.l2); tegn(s, "circle", { cx: a.X(p.M), cy: a.Y(Math.min(p.n, 150)), r: 6, fill: C.gul });
    const P1 = U * ia + (se ? 0 : U * U / 1200), PCu = ia * ia * (Ra + p.Rs) + (se ? 0 : U * U / 1200), Pb = dUb * ia, Pi = p.E * ia;
    tal(r, [["Modspænding E", fmt(p.E, 1) + " V"], ["n", fmt(p.n, 1) + " o/s = " + fmt(p.n * 60, 0) + " o/min"], ["Indre moment M", fmt(p.M, 2) + " Nm"], ["Indre effekt E · I_a", fmt(Pi, 0) + " W"]]);
    regn(r, `E = U − I_a · R${se ? "_(a+v+s)" : "_av"} − ΔU_b = 220 − ${fmt(ia, 2)} · ${Ra + p.Rs} − 2 = ${fmt(p.E, 1)} V\nn = E / (k_E · Φ),  M = k_M · Φ · I_a  (k_E·Φ = ${fmt(p.kp, 3)} V per o/s)\nTab: P_Cu = ${fmt(PCu, 0)} W, P_b = ${fmt(Pb, 1)} W. Mekaniske tab og jerntab trækkes fra E·I_a for at få P₂.` + (se ? "\nSeriemotoren: ved lille I_a bliver Φ lille, og n stiger voldsomt. Den må aldrig køre ubelastet." : "\nShuntmotoren: Φ er næsten konstant, så n falder kun lidt med belastningen."));
  }
  t();
};

/* ---------- 11 · Leder: resistans, temperatur og tab ---------- */
M.leder = el => {
  const r = ramme(el, "Kobberleder: R ved temperatur, tab og strømtæthed");
  const l = skyder(r, "Længde l", 1, 200, 1, 5, "m", t), S = skyder(r, "Tværsnit S", 1, 50, .5, 10, "mm²", t), I = skyder(r, "Strøm I", 1, 100, 1, 50, "A", t), T = skyder(r, "Ledertemperatur T", -20, 150, 1, 20, "°C", t);
  const s = svg(r, 420, 110);
  function t() {
    const rho = .0175, a = .004, R20 = rho * l() / S(), RT = R20 * (1 + a * (T() - 20)), P = RT * I() ** 2, J = I() / S(), dU = RT * I();
    s.innerHTML = ""; const w = Math.min(380, 20 + J * 30);
    tegn(s, "rect", { x: 20, y: 34, width: 380, height: 30, fill: "#3b2a14", rx: 6 });
    tegn(s, "rect", { x: 20, y: 34, width: w, height: 30, fill: J > 6 ? C.l1 : J > 3 ? C.gul : C.l3, rx: 6 });
    tegn(s, "text", { x: 20, y: 24, fill: C.dim, "font-size": 12 }, "Strømtæthed J (bjælken bliver rød over ca. 6 A/mm²)");
    tegn(s, "text", { x: 24, y: 90, fill: C.hvid, "font-size": 13 }, `J = ${fmt(J, 2)} A/mm²`);
    tal(r, [["R ved 20 °C", fmt(R20 * 1000, 2) + " mΩ"], ["R ved " + T() + " °C", fmt(RT * 1000, 2) + " mΩ"], ["Effekttab P = R·I²", fmt(P, 1) + " W"], ["Spændingsfald", fmt(dU, 2) + " V"]]);
    regn(r, `R₂₀ = ρ · l / S = 0,0175 · ${l()} / ${S()} = ${fmt(R20 * 1000, 2)} mΩ\nR_T = R₂₀ · (1 + α · (T − 20)) = ${fmt(R20 * 1000, 2)} · (1 + 0,004 · ${T() - 20}) = ${fmt(RT * 1000, 2)} mΩ\nP = R · I² = ${fmt(RT * 1000, 2)}·10⁻³ · ${I()}² = ${fmt(P, 1)} W   Energi på 4 timer: ${fmt(P * 4 / 1000, 3)} kWh`);
  }
  t();
};

/* ---------- 11 · Akkumulator: klemspænding og indre modstand ---------- */
M.akku = el => {
  const r = ramme(el, "Batteri med indre modstand");
  const E = skyder(r, "E (EMK)", 1, 30, .1, 12.6, "V", t), Ri = skyder(r, "R_i", .005, 1, .005, .05, "Ω", t), R = skyder(r, "Belastning R", .05, 20, .05, 1, "Ω", t);
  const s = svg(r, 420, 220);
  lgd(r, [[C.l2, "U_kl som funktion af I"], [C.gul, "arbejdspunkt"]]);
  function t() {
    const e = E(), ri = Ri(), rl = R(), I = e / (ri + rl), U = e - I * ri, Imax = e / ri;
    s.innerHTML = ""; const xm = Math.min(Imax, Math.max(I * 2, 10)), a = akser(s, 420, 220, { l: 34, r: 12, t: 14, b: 26 }, 0, xm, 0, e * 1.05, "I [A]", "U_kl [V]");
    kurve(s, [[a.X(0), a.Y(e)], [a.X(xm), a.Y(e - xm * ri)]], C.l2);
    tegn(s, "circle", { cx: a.X(I), cy: a.Y(U), r: 6, fill: C.gul });
    tal(r, [["I", fmt(I, 2) + " A"], ["U_kl", fmt(U, 2) + " V"], ["Tab i R_i", fmt(I * I * ri, 1) + " W"], ["η = U_kl / E", fmt(100 * U / e, 1) + " %"]]);
    regn(r, `I = E / (R_i + R) = ${fmt(e, 1)} / (${fmt(ri, 3)} + ${fmt(rl, 2)}) = ${fmt(I, 2)} A\nU_kl = E − I · R_i = ${fmt(e, 1)} − ${fmt(I, 2)} · ${fmt(ri, 3)} = ${fmt(U, 2)} V\nR_i måles: R_i = (E − U_kl) / I. Kortslutningsstrøm I_k = E / R_i = ${fmt(Imax, 0)} A`);
  }
  t();
};

/* ---------- 12 · Solcelle: IV-kurve, MPP og R-optimal ---------- */
M.solcelle = el => {
  const r = ramme(el, "Solpanel: IV-kurve og effektkurve (60 celler)");
  const G = skyder(r, "Indstråling", 100, 1100, 50, 1000, "W/m²", t), T = skyder(r, "Celletemperatur", -10, 75, 1, 25, "°C", t), Rl = skyder(r, "Belastning R", .5, 30, .1, 3.7, "Ω", t);
  const s = svg(r, 420, 240);
  lgd(r, [[C.l2, "I(U)"], [C.gul, "P(U)"], [C.l1, "MPP"], [C.l3, "R-linje og arbejdspunkt"]]);
  function t() {
    const g = G(), Tc = T(), A = 1.64 * .992, Isc = 9.01 * g / 1000 * (1 + .0005 * (Tc - 25)), Voc0 = 38.0 * (1 - .0031 * (Tc - 25)), a = 60 * 1.3 * .02569 * (Tc + 273.15) / 298.15;
    const I0 = 9.01 * (1 + .0005 * (Tc - 25)) / (Math.exp(Voc0 / a) - 1), Iv = v => Isc - I0 * (Math.exp(v / a) - 1);
    let Voc = a * Math.log(Isc / I0 + 1), mp = { v: 0, p: 0 }; const pts = [], pp = [];
    for (let v = 0; v <= Voc; v += Voc / 300) { const i = Math.max(Iv(v), 0), p = v * i; pts.push([v, i]); pp.push([v, p]); if (p > mp.p) mp = { v, p, i }; }
    // arbejdspunkt med R: løs I(U) = U/R
    let lo = 0, hi = Voc; for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2; Iv(m) - m / Rl() > 0 ? lo = m : hi = m; } const Ua = lo, Ia = Ua / Rl();
    s.innerHTML = ""; const ax = akser(s, 420, 240, { l: 34, r: 40, t: 14, b: 26 }, 0, 42, 0, 10, "U [V]", "I [A]"), Yp = p => ax.Y(p / 300 * 10);
    kurve(s, pts.map(([v, i]) => [ax.X(v), ax.Y(i)]), C.l2); kurve(s, pp.map(([v, p]) => [ax.X(v), Yp(p)]), C.gul);
    tegn(s, "line", { x1: ax.X(0), y1: ax.Y(0), x2: ax.X(Math.min(42, 10 * Rl())), y2: ax.Y(Math.min(10, 42 / Rl())), stroke: C.l3, "stroke-dasharray": "4 3" });
    tegn(s, "circle", { cx: ax.X(mp.v), cy: ax.Y(mp.i), r: 5, fill: C.l1 }); tegn(s, "circle", { cx: ax.X(Ua), cy: ax.Y(Ia), r: 6, fill: C.l3 });
    tegn(s, "text", { x: 414, y: 26, fill: C.gul, "font-size": 11, "text-anchor": "end" }, "P (0–300 W)");
    tal(r, [["U_oc / I_sc", `${fmt(Voc, 1)} V / ${fmt(Isc, 2)} A`], ["MPP", `${fmt(mp.v, 1)} V · ${fmt(mp.i, 2)} A = ${fmt(mp.p, 0)} W`], ["R ved MPP", fmt(mp.v / mp.i, 2) + " Ω"], ["Med din R", `${fmt(Ua * Ia, 0)} W`], ["η ved MPP", fmt(100 * mp.p / (g * A), 1) + " %"], ["Fyldfaktor FF", fmt(mp.p / (Voc * Isc), 2)]]);
    regn(r, `Modellen er en simpel 1-diode-model (I_sc ∝ indstråling, U_oc falder ca. 0,31 %/°C).\nR_opt = U_mpp / I_mpp = ${fmt(mp.v / mp.i, 2)} Ω.  Groft overslag: U_oc / I_sc = ${fmt(Voc / Isc, 2)} Ω (for stort).\nη = P_mpp / (asr · A) = ${fmt(mp.p, 0)} / (${g} · ${fmt(A, 3)}) = ${fmt(100 * mp.p / (g * A), 1)} %`);
  }
  t();
};

/* ---------- 13 · Vekselspænding: værdier og effekt ---------- */
M.sinus = el => {
  const r = ramme(el, "Sinus: spids-, effektiv- og middelværdi, og effekten p = u · i");
  const U = skyder(r, "U_eff", 10, 400, 5, 230, "V", t), I = skyder(r, "I_eff", .5, 20, .5, 10, "A", t), phi = skyder(r, "φ (strøm efter spænding)", -90, 90, 1, 37, "°", t);
  const s = svg(r, 420, 240);
  lgd(r, [[C.l2, "u(t)"], [C.l1, "i(t)"], [C.gul, "p(t) = u · i"], [C.l3, "P = middelværdien af p"]]);
  function t() {
    const u = U(), i = I(), p = phi(), Um = u * Math.SQRT2, Im = i * Math.SQRT2, P = u * i * Math.cos(rad(p)), Q = u * i * Math.sin(rad(p)), S = u * i;
    s.innerHTML = ""; const pmax = S * 2, a = akser(s, 420, 240, { l: 34, r: 12, t: 14, b: 26 }, 0, 40, -1.05, 1.05, "t [ms]", "");
    const pu = [], pi = [], pw = []; for (let x = 0; x <= 40; x += .2) { const w = 2 * Math.PI * 50 * x / 1000, uu = Um * Math.sin(w), ii = Im * Math.sin(w - rad(p)); pu.push([a.X(x), a.Y(uu / 566)]); pi.push([a.X(x), a.Y(ii / 28.3)]); pw.push([a.X(x), a.Y(uu * ii / pmax)]); }
    kurve(s, pu, C.l2); kurve(s, pi, C.l1); kurve(s, pw, C.gul, 1.8);
    tegn(s, "line", { x1: a.X(0), x2: a.X(40), y1: a.Y(P / pmax), y2: a.Y(P / pmax), stroke: C.l3, "stroke-width": 2, "stroke-dasharray": "6 4" });
    tal(r, [["U_max = √2 · U_eff", fmt(Um, 0) + " V"], ["U_mid = 2/π · U_max", fmt(Um * 2 / Math.PI, 0) + " V"], ["Formfaktor", fmt(u / (Um * 2 / Math.PI), 2)], ["P", fmt(P, 0) + " W"], ["Q", fmt(Q, 0) + " var"], ["S", fmt(S, 0) + " VA"]]);
    regn(r, `P = U · I · cos φ = ${u} · ${i} · cos ${p}° = ${fmt(P, 0)} W\nI_w = I · cos φ = ${fmt(i * Math.cos(rad(p)), 2)} A (wattstrøm),  I_wl = I · sin φ = ${fmt(i * Math.sin(rad(p)), 2)} A (wattløs strøm)\nNår p(t) er negativ, sender lasten energi tilbage til nettet. Det er den reaktive effekt, der pendler.`);
  }
  t();
};

document.querySelectorAll(".m[data-m]").forEach(el => { const f = M[el.dataset.m]; if (f) try { f(el); } catch (e) { el.textContent = "Modellen kunne ikke vises."; console.error(e); } });
})();
