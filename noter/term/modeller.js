/* Interaktive modeller til Grundlæggende termodynamik-noterne (noter/term/*.html).
   I markdown-kilden skrives fx <div class="m" data-m="skala"></div>, så tegnes modellen her.
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

/* 1 · Temperaturskalaer: °C, K og °F på samme termometer */
M.skala = el => {
  const r = ramme(el, "Tre skalaer på samme termometer");
  const T = skyder(r, "Temperatur", -273.15, 400, 0.05, 20, "°C", t, v => fmt(v, 1));
  const s = svg(r, 420, 260);
  lgd(r, [[C.l2, "Celsius"], [C.l3, "Kelvin"], [C.l1, "Fahrenheit"]]);
  function t() {
    const c = T(), k = c + 273.15, f = c * 1.8 + 32;
    s.innerHTML = "";
    const y = v => 230 - (v + 273.15) / 673.15 * 200;
    tegn(s, "rect", { x: 196, y: 24, width: 28, height: 210, rx: 14, fill: "none", stroke: C.dim, "stroke-width": 2 });
    tegn(s, "rect", { x: 202, y: y(c), width: 16, height: 232 - y(c), rx: 8, fill: C.l1 });
    const maerke = [[-273.15, "Absolut nul"], [0, "Is smelter"], [100, "Vand koger (1 atm)"], [37, "Kropstemp."]];
    maerke.forEach(([v, navn]) => {
      tegn(s, "line", { x1: 186, x2: 234, y1: y(v), y2: y(v), stroke: C.grid });
      tegn(s, "text", { x: 240, y: y(v) + 4, fill: C.dim, "font-size": 11 }, navn);
    });
    tegn(s, "line", { x1: 120, x2: 300, y1: y(c), y2: y(c), stroke: C.gul, "stroke-dasharray": "4 3" });
    tegn(s, "text", { x: 20, y: y(c) - 6, fill: C.l2, "font-size": 13, "font-family": "ui-monospace, monospace" }, fmt(c, 1) + " °C");
    tegn(s, "text", { x: 20, y: y(c) + 12, fill: C.l3, "font-size": 13, "font-family": "ui-monospace, monospace" }, fmt(k, 2) + " K");
    tegn(s, "text", { x: 310, y: y(c) + 4, fill: C.l1, "font-size": 13, "font-family": "ui-monospace, monospace" }, fmt(f, 1) + " °F");
    tal(r, [["Celsius", fmt(c, 1) + " °C"], ["Kelvin", fmt(k, 2) + " K"], ["Fahrenheit", fmt(f, 1) + " °F"]]);
    regn(r, `K = °C + 273,15 = ${fmt(c, 2)} + 273,15 = ${fmt(k, 2)} K\n°F = °C · 1,8 + 32 = ${fmt(c, 2)} · 1,8 + 32 = ${fmt(f, 1)} °F\nEn temperaturforskel på 1 °C er 1 K, men 1,8 °F.`);
  }
  t();
};

/* 2 · Modstandsfølere: Pt100 (PTC) og NTC-termistor */
M.pt100 = el => {
  const r = ramme(el, "Modstand som funktion af temperatur");
  const T = skyder(r, "Temperatur", -50, 300, 1, 100, "°C", t);
  const s = svg(r, 420, 250);
  lgd(r, [[C.l2, "Pt100: R = 100 · (1 + 0,00385 · t)"], [C.l1, "NTC 10 kΩ, B = 3950 K (højre akse, log)"]]);
  const pt = c => 100 * (1 + 0.00385 * c), ntc = c => 10000 * Math.exp(3950 * (1 / (c + 273.15) - 1 / 298.15));
  function t() {
    s.innerHTML = "";
    const { X, Y } = akser(s, 420, 250, { l: 40, r: 44, t: 16, b: 26 }, -50, 300, 0, 250, "t [°C]", "R Pt100 [Ω]");
    const YL = v => 250 - 26 - (Math.log10(v) - 1) / 5 * (250 - 16 - 26);
    const p1 = [], p2 = [];
    for (let c = -50; c <= 300; c += 5) { p1.push([X(c), Y(pt(c))]); const n = ntc(c); if (n > 10 && n < 1e6) p2.push([X(c), YL(n)]); }
    kurve(s, p1, C.l2); kurve(s, p2, C.l1);
    [10, 100, 1000, 1e4, 1e5].forEach(v => tegn(s, "text", { x: 382, y: YL(v) + 4, fill: C.dim, "font-size": 10 }, v >= 1000 ? v / 1000 + "k" : v));
    tegn(s, "line", { x1: X(T()), x2: X(T()), y1: 16, y2: 224, stroke: C.gul, "stroke-dasharray": "4 3" });
    tegn(s, "circle", { cx: X(T()), cy: Y(pt(T())), r: 4.5, fill: C.l2 });
    const n = ntc(T()); if (n > 10 && n < 1e6) tegn(s, "circle", { cx: X(T()), cy: YL(n), r: 4.5, fill: C.l1 });
    [0, 100, 200, 300].forEach(v => tegn(s, "text", { x: X(v), y: 240, fill: C.dim, "font-size": 10, "text-anchor": "middle" }, v));
    tal(r, [["Pt100", fmt(pt(T()), 2) + " Ω"], ["Ændring pr. °C (Pt100)", "0,385 Ω/°C"], ["NTC", n > 1000 ? fmt(n / 1000, 2) + " kΩ" : fmt(n, 0) + " Ω"]]);
    regn(r, `Pt100: R = R0 · (1 + α · t) = 100 · (1 + 0,00385 · ${T()}) = ${fmt(pt(T()), 2)} Ω\nNTC:   R = R25 · e^(B·(1/T − 1/298,15)) = ${n > 1000 ? fmt(n / 1000, 2) + " kΩ" : fmt(n, 0) + " Ω"}  (T i kelvin)\nPt100 er næsten lineær. NTC falder kraftigt og er meget følsom, men ulineær.`);
  }
  t();
};

/* 3 · Termoelement: spænding fra forskellen mellem varmt og koldt loddested */
M.termoel = el => {
  const r = ramme(el, "Termoelement type K");
  const Tv = skyder(r, "Målested (varmt loddested)", 0, 1200, 5, 400, "°C", t), Tk = skyder(r, "Referencested (koldt loddested)", 0, 50, 1, 20, "°C", t);
  const komp = knapper(r, "Koldt loddested-kompensering", [[1, "Til"], [0, "Fra"]], 1, t);
  const s = svg(r, 420, 150);
  function t() {
    const k = 0.041, U = k * (Tv() - Tk()), vist = komp() ? Tv() : U / k;
    s.innerHTML = "";
    tegn(s, "path", { d: "M70,55 L300,55", stroke: C.l1, "stroke-width": 4 });
    tegn(s, "path", { d: "M70,95 L300,95", stroke: C.l2, "stroke-width": 4 });
    tegn(s, "path", { d: "M70,55 Q40,75 70,95", stroke: C.gul, "stroke-width": 4, fill: "none" });
    tegn(s, "circle", { cx: 48, cy: 75, r: 7, fill: C.gul });
    tegn(s, "text", { x: 20, y: 125, fill: C.gul, "font-size": 12 }, `målested ${Tv()} °C`);
    tegn(s, "rect", { x: 300, y: 40, width: 90, height: 70, rx: 8, fill: "none", stroke: C.dim });
    tegn(s, "text", { x: 345, y: 70, fill: C.hvid, "font-size": 14, "text-anchor": "middle", "font-family": "ui-monospace, monospace" }, fmt(vist, 0) + " °C");
    tegn(s, "text", { x: 345, y: 92, fill: C.dim, "font-size": 11, "text-anchor": "middle" }, `${fmt(U, 2)} mV`);
    tegn(s, "text", { x: 300, y: 130, fill: C.dim, "font-size": 11 }, `klemmer ${Tk()} °C`);
    tegn(s, "text", { x: 150, y: 48, fill: C.l1, "font-size": 11 }, "NiCr (+)");
    tegn(s, "text", { x: 150, y: 112, fill: C.l2, "font-size": 11 }, "NiAl (−)");
    tal(r, [["Termospænding", fmt(U, 2) + " mV"], ["Instrumentet viser", fmt(vist, 0) + " °C"], ["Fejl uden kompensering", fmt(vist - Tv(), 0) + " °C"]]);
    regn(r, `U ≈ k · (t_mål − t_ref) = 0,041 mV/°C · (${Tv()} − ${Tk()}) = ${fmt(U, 2)} mV\n${komp() ? "Instrumentet måler klemmetemperaturen og lægger den til, så det viser den rigtige temperatur." : "Uden kompensering mangler instrumentet klemmetemperaturen og viser for lavt."}\n(k ≈ 41 µV/°C er en tilnærmelse. Den rigtige kurve står i en tabel, fx IEC 60584.)`);
  }
  t();
};

/* 4 · Måleserie, middelværdi og usikkerhed */
M.usikkerhed = el => {
  const r = ramme(el, "Gentagne målinger og usikkerhed");
  const n = skyder(r, "Antal målinger n", 2, 50, 1, 10, "", t), sp = skyder(r, "Spredning på den enkelte måling", .1, 3, .1, 1, "°C", t);
  const sand = 80;
  let fro = 7;
  const knap = document.createElement("button"); knap.type = "button"; knap.textContent = "Ny måleserie"; knap.className = "on";
  const rr = document.createElement("div"); rr.className = "rad"; rr.append(knap); r.ctl.append(rr);
  knap.addEventListener("click", () => { fro = Math.floor(Math.random() * 1e6) + 1; t(); });
  const s = svg(r, 420, 200);
  lgd(r, [[C.l2, "Målinger"], [C.gul, "Middelværdi ± 2u"], [C.l3, "Sand værdi (80 °C)"]]);
  function rnd(seed) { let x = seed; return () => { x = (x * 16807) % 2147483647; return x / 2147483647; }; }
  function t() {
    const R = rnd(fro), m = [];
    for (let i = 0; i < n(); i++) { const u1 = R() || 1e-9, u2 = R(); m.push(sand + sp() * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)); }
    const mid = m.reduce((a, b) => a + b, 0) / m.length, s_ = Math.sqrt(m.reduce((a, b) => a + (b - mid) ** 2, 0) / (m.length - 1)), u = s_ / Math.sqrt(m.length);
    s.innerHTML = "";
    const X = v => 30 + (v - (sand - 8)) / 16 * 360;
    tegn(s, "line", { x1: 30, x2: 390, y1: 170, y2: 170, stroke: C.dim });
    for (let v = sand - 8; v <= sand + 8; v += 2) { tegn(s, "line", { x1: X(v), x2: X(v), y1: 166, y2: 174, stroke: C.dim }); tegn(s, "text", { x: X(v), y: 190, fill: C.dim, "font-size": 10, "text-anchor": "middle" }, v); }
    m.forEach((v, i) => tegn(s, "circle", { cx: X(v), cy: 150 - (i % 12) * 9, r: 3.5, fill: C.l2, opacity: .85 }));
    tegn(s, "line", { x1: X(sand), x2: X(sand), y1: 20, y2: 170, stroke: C.l3, "stroke-width": 2 });
    tegn(s, "rect", { x: X(mid - 2 * u), y: 24, width: Math.max(2, X(mid + 2 * u) - X(mid - 2 * u)), height: 12, fill: C.gul, opacity: .35 });
    tegn(s, "line", { x1: X(mid), x2: X(mid), y1: 20, y2: 40, stroke: C.gul, "stroke-width": 3 });
    tal(r, [["Middelværdi x̄", fmt(mid, 2) + " °C"], ["Spredning s", fmt(s_, 2) + " °C"], ["Standardusikkerhed u = s/√n", fmt(u, 2) + " °C"], ["Udvidet U = 2u (ca. 95 %)", "± " + fmt(2 * u, 2) + " °C"]]);
    regn(r, `x̄ = Σx / n = ${fmt(mid, 2)} °C\ns = √(Σ(x − x̄)² / (n − 1)) = ${fmt(s_, 2)} °C\nu = s / √n = ${fmt(s_, 2)} / √${n()} = ${fmt(u, 2)} °C\nResultat: ${fmt(mid, 1)} °C ± ${fmt(2 * u, 1)} °C (k = 2)\nFlere målinger gør middelværdien sikrere, men fjerner ikke en systematisk fejl.`);
  }
  t();
};

/* 5 · Hydrostatisk tryk og U-rørsmanometer */
M.tryk = el => {
  const r = ramme(el, "Tryk i en væskesøjle");
  const h = skyder(r, "Dybde / søjlehøjde h", 0, 30, .1, 10, "m", t);
  const rho = knapper(r, "Væske", [[1000, "Vand"], [1025, "Havvand"], [870, "Olie"], [13600, "Kviksølv"]], 1000, t);
  const pa = skyder(r, "Barometerstand", .95, 1.05, .001, 1.013, "bar", t, v => fmt(v, 3));
  const s = svg(r, 420, 220);
  function t() {
    const po = rho() * 9.81 * h() / 1e5, pab = po + pa();
    s.innerHTML = "";
    tegn(s, "rect", { x: 60, y: 20, width: 120, height: 180, fill: "none", stroke: C.dim, "stroke-width": 2 });
    tegn(s, "rect", { x: 62, y: 30, width: 116, height: 168, fill: rho() > 5000 ? "#9aa5ad" : rho() < 950 ? "#c9a33a" : "#2a6fb0", opacity: .55 });
    const y = 30 + Math.min(h(), 30) / 30 * 168;
    tegn(s, "circle", { cx: 120, cy: y, r: 6, fill: C.gul });
    tegn(s, "line", { x1: 186, x2: 220, y1: 30, y2: 30, stroke: C.dim }); tegn(s, "line", { x1: 186, x2: 220, y1: y, y2: y, stroke: C.dim });
    pil(s, 205, 30, 205, y, C.gul, 2); tegn(s, "text", { x: 212, y: (30 + y) / 2 + 4, fill: C.gul, "font-size": 12 }, `h = ${fmt(h(), 1)} m`);
    const bx = 290, bar0 = 190, kb = 160 / 5;
    tegn(s, "rect", { x: bx, y: bar0 - pa() * kb, width: 34, height: pa() * kb, fill: C.l3 });
    tegn(s, "rect", { x: bx, y: bar0 - pab * kb, width: 34, height: po * kb, fill: C.l2 });
    tegn(s, "text", { x: bx + 42, y: bar0 - pa() * kb / 2, fill: C.l3, "font-size": 11 }, "atmosfære");
    tegn(s, "text", { x: bx + 42, y: Math.max(14, bar0 - pa() * kb - po * kb / 2), fill: C.l2, "font-size": 11 }, "overtryk");
    tal(r, [["Overtryk (manometer)", fmt(po, 3) + " bar(o)"], ["Absolut tryk", fmt(pab, 3) + " bar(a)"], ["I kPa", fmt(po * 100, 1) + " kPa(o)"]]);
    regn(r, `p_o = ρ · g · h = ${rho()} · 9,81 · ${fmt(h(), 1)} = ${fmt(po * 1e5, 0)} Pa = ${fmt(po, 3)} bar\np_abs = p_o + p_atm = ${fmt(po, 3)} + ${fmt(pa(), 3)} = ${fmt(pab, 3)} bar\nTommelfingerregel: 10 m vandsøjle ≈ 1 bar.`);
  }
  t();
};

/* 6 · Lineær varmeudvidelse */
M.udvid = el => {
  const r = ramme(el, "En stang der bliver varm");
  const mat = knapper(r, "Materiale", [[12, "Stål"], [17, "Kobber"], [19, "Messing"], [23, "Aluminium"]], 12, t);
  const L = skyder(r, "Længde ved start L₀", .1, 20, .1, 10, "m", t), dT = skyder(r, "Temperaturstigning Δt", 0, 400, 5, 100, "K", t);
  const s = svg(r, 420, 130);
  function t() {
    const a = mat() * 1e-6, dL = a * L() * dT();
    s.innerHTML = "";
    tegn(s, "rect", { x: 20, y: 30, width: 300, height: 20, fill: C.dim });
    const ekstra = Math.min(90, dL * 1000 / 50 * 90);
    tegn(s, "rect", { x: 20, y: 70, width: 300, height: 20, fill: C.l1 });
    tegn(s, "rect", { x: 320, y: 70, width: ekstra, height: 20, fill: C.gul });
    tegn(s, "text", { x: 20, y: 22, fill: C.dim, "font-size": 11 }, "kold");
    tegn(s, "text", { x: 20, y: 108, fill: C.l1, "font-size": 11 }, `varm, ${dT()} K varmere (forlængelsen er overdrevet)`);
    tal(r, [["Udvidelseskoefficient α", mat() + " · 10⁻⁶ /K"], ["Forlængelse ΔL", fmt(dL * 1000, 2) + " mm"], ["Ny længde", fmt(L() + dL, 4) + " m"]]);
    regn(r, `ΔL = α · L₀ · Δt = ${mat()}·10⁻⁶ · ${fmt(L(), 1)} · ${dT()} = ${fmt(dL, 5)} m = ${fmt(dL * 1000, 2)} mm\nKan stangen ikke udvide sig, opstår en spænding σ = E · α · Δt (stål: ${fmt(210000 * a * dT(), 0)} MPa).`);
  }
  t();
};

/* 7 · Blandingstemperatur */
M.blanding = el => {
  const r = ramme(el, "Hvor ender temperaturen?");
  const m1 = skyder(r, "Vand: masse m₁", .1, 10, .1, 2, "kg", t), t1 = skyder(r, "Vand: temperatur t₁", 0, 100, 1, 20, "°C", t);
  const mat = knapper(r, "Emne 2", [[4.19, "Vand"], [0.46, "Stål"], [0.90, "Aluminium"], [0.385, "Kobber"]], 0.46, t);
  const m2 = skyder(r, "Emne 2: masse m₂", .1, 10, .1, 1, "kg", t), t2 = skyder(r, "Emne 2: temperatur t₂", 0, 400, 5, 200, "°C", t);
  const vis = knapper(r, "Facit", [[0, "Skjul"], [1, "Vis"]], 0, t);
  const s = svg(r, 420, 150);
  function t() {
    const c1 = 4.19, c2 = mat(), C1 = m1() * c1, C2 = m2() * c2, tb = (C1 * t1() + C2 * t2()) / (C1 + C2);
    s.innerHTML = "";
    const X = v => 30 + v / 400 * 360;
    tegn(s, "line", { x1: 30, x2: 390, y1: 90, y2: 90, stroke: C.dim });
    [0, 100, 200, 300, 400].forEach(v => tegn(s, "text", { x: X(v), y: 110, fill: C.dim, "font-size": 10, "text-anchor": "middle" }, v + " °C"));
    tegn(s, "circle", { cx: X(t1()), cy: 90, r: 7, fill: C.l2 }); tegn(s, "text", { x: X(t1()), y: 75, fill: C.l2, "font-size": 11, "text-anchor": "middle" }, "vand");
    tegn(s, "circle", { cx: X(t2()), cy: 90, r: 7, fill: C.l1 }); tegn(s, "text", { x: X(t2()), y: 75, fill: C.l1, "font-size": 11, "text-anchor": "middle" }, "emne 2");
    if (vis()) { tegn(s, "circle", { cx: X(tb), cy: 90, r: 6, fill: C.gul }); tegn(s, "text", { x: X(tb), y: 135, fill: C.gul, "font-size": 12, "text-anchor": "middle" }, fmt(tb, 1) + " °C"); }
    tal(r, [["Varmekapacitet vand m₁c₁", fmt(C1, 2) + " kJ/K"], ["Varmekapacitet emne 2 m₂c₂", fmt(C2, 2) + " kJ/K"], ["Sluttemperatur", vis() ? fmt(tb, 1) + " °C" : "Regn først"]]);
    regn(r, vis() ? `Afgivet varme = optaget varme\nt = (m₁c₁t₁ + m₂c₂t₂) / (m₁c₁ + m₂c₂)\n  = (${fmt(C1, 2)} · ${t1()} + ${fmt(C2, 2)} · ${t2()}) / (${fmt(C1, 2)} + ${fmt(C2, 2)}) = ${fmt(tb, 1)} °C\nForudsætning: intet varmetab og ingen fordampning.` : "Forudsig: ligger sluttemperaturen tættest på vandets eller emnets temperatur? Regn den, og tryk Vis.");
  }
  t();
};

/* 8 · Opvarmningskurve for 1 kg is til overhedet damp */
M.opvarm = el => {
  const r = ramme(el, "Fra is til damp ved 1 atm");
  const Q = skyder(r, "Tilført varme", 0, 3200, 10, 500, "kJ", t);
  const m = skyder(r, "Masse", .5, 5, .5, 1, "kg", t);
  const s = svg(r, 420, 240);
  lgd(r, [[C.l2, "Opvarmning (følelig varme)"], [C.gul, "Faseovergang (latent varme)"]]);
  // pr. kg: is -20 -> 0 (2,1), smelt 334, vand 0 -> 100 (4,19), fordamp 2257, damp 100 -> 120 (2,0)
  const trin = [[42, -20, 0, "is"], [334, 0, 0, "smelter"], [419, 0, 100, "vand"], [2257, 100, 100, "koger"], [40, 100, 120, "damp"]];
  const tot = trin.reduce((a, x) => a + x[0], 0);
  function tAf(q) { let rest = q; for (const [d, a, b, n] of trin) { if (rest <= d) return [a + (b - a) * rest / d, n, rest / d]; rest -= d; } return [120, "damp", 1]; }
  function t() {
    s.innerHTML = "";
    const qmax = tot * m();
    const { X, Y } = akser(s, 420, 240, { l: 40, r: 12, t: 16, b: 26 }, 0, qmax, -30, 130, "Q [kJ]", "t [°C]");
    let q0 = 0;
    trin.forEach(([d, a, b]) => { kurve(s, [[X(q0), Y(a)], [X(q0 + d * m()), Y(b)]], a === b ? C.gul : C.l2, 3); q0 += d * m(); });
    const q = Math.min(Q() * m() > qmax ? qmax : Q(), qmax), [temp, fase, andel] = tAf(q / m());
    tegn(s, "circle", { cx: X(q), cy: Y(temp), r: 6, fill: C.l1 });
    [0, 100].forEach(v => tegn(s, "text", { x: 36, y: Y(v) + 4, fill: C.dim, "font-size": 10, "text-anchor": "end" }, v));
    const tilst = fase === "smelter" ? `${fmt(andel * 100, 0)} % smeltet` : fase === "koger" ? `${fmt(andel * 100, 0)} % fordampet (dampkvalitet x = ${fmt(andel, 2)})` : fase;
    tal(r, [["Temperatur", fmt(temp, 1) + " °C"], ["Tilstand", tilst], ["Varme til hele vejen", fmt(qmax, 0) + " kJ"]]);
    regn(r, `Pr. kg:  is −20→0 °C: 2,1·20 = 42 kJ   smeltning: 334 kJ   vand 0→100 °C: 4,19·100 = 419 kJ\n         fordampning: 2257 kJ   damp 100→120 °C: 2,0·20 = 40 kJ\nLæg mærke til, at fordampningen kræver over 5 gange så meget varme som at varme vandet fra 0 til 100 °C.`);
  }
  t();
};

/* 9 · pV-diagram for de fire tilstandsændringer */
M.pv = el => {
  const r = ramme(el, "Tilstandsændringer for 1 kg luft");
  const typ = knapper(r, "Proces", [["p", "Isobar"], ["v", "Isokor"], ["t", "Isoterm"], ["a", "Adiabatisk"]], "t", t);
  const fak = skyder(r, "Slutvolumen V₂/V₁ (isokor: p₂/p₁)", .2, 3, .05, .5, "", t, v => fmt(v, 2));
  const s = svg(r, 420, 250);
  lgd(r, [[C.gul, "Valgt proces"], [C.dim, "Isotermer"]]);
  const R = 287, k = 1.4, T1 = 293.15, p1 = 1e5, V1 = R * T1 / p1;
  function t() {
    let p2, V2, T2, W;
    const f = fak(), pkt = [];
    if (typ() === "p") { V2 = V1 * f; p2 = p1; T2 = T1 * f; W = p1 * (V2 - V1); for (let i = 0; i <= 40; i++) pkt.push([V1 + (V2 - V1) * i / 40, p1]); }
    else if (typ() === "v") { V2 = V1; p2 = p1 * f; T2 = T1 * f; W = 0; for (let i = 0; i <= 40; i++) pkt.push([V1, p1 + (p2 - p1) * i / 40]); }
    else if (typ() === "t") { V2 = V1 * f; p2 = p1 / f; T2 = T1; W = p1 * V1 * Math.log(V2 / V1); for (let i = 0; i <= 40; i++) { const v = V1 + (V2 - V1) * i / 40; pkt.push([v, p1 * V1 / v]); } }
    else { V2 = V1 * f; p2 = p1 * (V1 / V2) ** k; T2 = T1 * (V1 / V2) ** (k - 1); W = (p1 * V1 - p2 * V2) / (k - 1); for (let i = 0; i <= 40; i++) { const v = V1 + (V2 - V1) * i / 40; pkt.push([v, p1 * (V1 / v) ** k]); } }
    s.innerHTML = "";
    const { X, Y } = akser(s, 420, 250, { l: 44, r: 12, t: 16, b: 26 }, 0, 2.6, 0, 6.5, "V [m³]", "p [bar]");
    [200, 293.15, 450, 700].forEach(TT => { const q = []; for (let v = .08; v <= 2.6; v += .02) { const pp = R * TT / v / 1e5; if (pp < 6.5) q.push([X(v), Y(pp)]); } kurve(s, q, C.grid, 1.3, "4 3"); });
    const ud = pkt.map(([v, p]) => [X(v), Y(Math.min(p / 1e5, 6.5))]);
    if (typ() !== "v") tegn(s, "polygon", { points: [[X(V1), Y(0)], ...ud, [X(V2), Y(0)]].map(p => p.join(",")).join(" "), fill: C.gul, opacity: .15 });
    kurve(s, ud, C.gul, 3);
    tegn(s, "circle", { cx: X(V1), cy: Y(p1 / 1e5), r: 5, fill: C.l2 }); tegn(s, "text", { x: X(V1) + 7, y: Y(p1 / 1e5) - 6, fill: C.l2, "font-size": 12 }, "1");
    tegn(s, "circle", { cx: X(V2), cy: Y(Math.min(p2 / 1e5, 6.5)), r: 5, fill: C.l1 }); tegn(s, "text", { x: X(V2) + 7, y: Y(Math.min(p2 / 1e5, 6.5)) - 6, fill: C.l1, "font-size": 12 }, "2");
    [1, 2, 3, 4, 5, 6].forEach(v => tegn(s, "text", { x: 40, y: Y(v) + 4, fill: C.dim, "font-size": 10, "text-anchor": "end" }, v));
    tal(r, [["p₂", fmt(p2 / 1e5, 2) + " bar"], ["V₂", fmt(V2, 3) + " m³"], ["T₂", fmt(T2, 0) + " K (" + fmt(T2 - 273.15, 0) + " °C)"], ["Volumenændringsarbejde W", fmt(W / 1000, 1) + " kJ"]]);
    const form = { p: "p konstant: V/T = konstant, W = p · (V₂ − V₁)", v: "V konstant: p/T = konstant, W = 0", t: "T konstant: p · V = konstant, W = p₁V₁ · ln(V₂/V₁)", a: "Ingen varme: p · V^κ = konstant (κ = 1,4), W = (p₁V₁ − p₂V₂)/(κ − 1)" }[typ()];
    regn(r, `Start: p₁ = 1 bar, t₁ = 20 °C, V₁ = R·T₁/p₁ = 287 · 293,15 / 100000 = ${fmt(V1, 3)} m³\n${form}\nW er arealet under kurven. Positiv W: gassen udfører arbejde (ekspansion). Negativ: arbejde tilføres (kompression).`);
  }
  t();
};

/* 10 · Energikæde og virkningsgrad */
M.eta = el => {
  const r = ramme(el, "Energikæde: brændsel → kedel → turbine → generator");
  const P = skyder(r, "Tilført effekt (brændsel)", 100, 5000, 50, 1000, "kW", t);
  const e1 = skyder(r, "η kedel", .5, 1, .01, .9, "", t, v => fmt(v * 100, 0) + " %"), e2 = skyder(r, "η turbine", .1, .5, .01, .35, "", t, v => fmt(v * 100, 0) + " %"), e3 = skyder(r, "η generator", .8, 1, .01, .96, "", t, v => fmt(v * 100, 0) + " %");
  const s = svg(r, 420, 170);
  lgd(r, [[C.l3, "Nyttig effekt videre"], [C.l1, "Tab (varme)"]]);
  function t() {
    const st = [P(), P() * e1(), P() * e1() * e2(), P() * e1() * e2() * e3()], navn = ["Brændsel", "Damp", "Aksel", "El"];
    s.innerHTML = "";
    st.forEach((v, i) => {
      const x = 20 + i * 100, hgt = v / P() * 120;
      tegn(s, "rect", { x, y: 140 - hgt, width: 50, height: hgt, fill: C.l3 });
      if (i > 0) { const tab = st[i - 1] - v; tegn(s, "rect", { x: x - 40, y: 140 - st[i - 1] / P() * 120, width: 26, height: tab / P() * 120, fill: C.l1 }); }
      tegn(s, "text", { x: x + 25, y: 158, fill: C.dim, "font-size": 11, "text-anchor": "middle" }, navn[i]);
      tegn(s, "text", { x: x + 25, y: 134 - hgt, fill: C.hvid, "font-size": 11, "text-anchor": "middle", "font-family": "ui-monospace, monospace" }, fmt(v, 0));
    });
    const eta = e1() * e2() * e3();
    tal(r, [["Samlet η", fmt(eta * 100, 1) + " %"], ["El ud", fmt(st[3], 0) + " kW"], ["Samlet tab", fmt(P() - st[3], 0) + " kW"]]);
    regn(r, `η_total = η₁ · η₂ · η₃ = ${fmt(e1(), 2)} · ${fmt(e2(), 2)} · ${fmt(e3(), 2)} = ${fmt(eta, 3)}\nP_ud = η · P_ind = ${fmt(eta, 3)} · ${P()} = ${fmt(st[3], 0)} kW\nVirkningsgraderne ganges, de lægges ikke sammen.`);
  }
  t();
};

/* 11 · Varmeledning gennem en sammensat væg */
M.vaeg = el => {
  const r = ramme(el, "Temperaturforløb gennem en isoleret stålvæg");
  const ti = skyder(r, "Temperatur inde t_i", 20, 300, 5, 180, "°C", t), tu = skyder(r, "Temperatur ude t_u", -10, 40, 1, 25, "°C", t);
  const d = skyder(r, "Isoleringstykkelse", 0, 200, 5, 50, "mm", t);
  const lam = knapper(r, "Isolering", [[.04, "Mineraluld (0,04)"], [.07, "Kalciumsilikat (0,07)"], [.6, "Murværk (0,6)"]], .04, t);
  const s = svg(r, 420, 220);
  function t() {
    // lag: overgang inde h=10, stål 10 mm λ=50, isolering, overgang ude h=10
    const Rl = [1 / 10, .01 / 50, d() / 1000 / lam(), 1 / 10], Rt = Rl.reduce((a, b) => a + b, 0), U = 1 / Rt, q = U * (ti() - tu());
    const T = [ti()]; Rl.forEach(x => T.push(T[T.length - 1] - q * x));
    s.innerHTML = "";
    const x0 = 120, ws = 14, wi = Math.max(2, d() * 1.2), Y = v => 200 - (v + 10) / 320 * 180;
    tegn(s, "rect", { x: x0, y: 15, width: ws, height: 190, fill: C.dim });
    tegn(s, "rect", { x: x0 + ws, y: 15, width: wi, height: 190, fill: "#c9a33a", opacity: .5 });
    const xs = [40, x0, x0 + ws, x0 + ws + wi, x0 + ws + wi + 80];
    kurve(s, [[xs[0], Y(T[0])], [xs[1], Y(T[1])], [xs[2], Y(T[2])], [xs[3], Y(T[3])], [xs[4], Y(T[4])]], C.l1, 3);
    tegn(s, "text", { x: 30, y: Y(T[0]) - 6, fill: C.l1, "font-size": 11 }, fmt(T[0], 0) + " °C");
    tegn(s, "text", { x: xs[3] + 6, y: Y(T[3]) - 6, fill: C.gul, "font-size": 11 }, "overflade " + fmt(T[3], 0) + " °C");
    tegn(s, "text", { x: xs[4] - 10, y: Y(T[4]) + 16, fill: C.l2, "font-size": 11 }, fmt(T[4], 0) + " °C");
    tal(r, [["U-værdi", fmt(U, 2) + " W/m²K"], ["Varmestrøm pr. m²", fmt(q, 0) + " W/m²"], ["Yderste overflade", fmt(T[3], 0) + " °C"]]);
    regn(r, `R = 1/h_i + d_stål/λ_stål + d_iso/λ_iso + 1/h_u\n  = ${fmt(Rl[0], 2)} + ${fmt(Rl[1], 4)} + ${fmt(Rl[2], 3)} + ${fmt(Rl[3], 2)} = ${fmt(Rt, 3)} m²K/W\nU = 1/R = ${fmt(U, 2)} W/m²K    q = U · Δt = ${fmt(U, 2)} · ${ti() - tu()} = ${fmt(q, 0)} W/m²\n(h_i = h_u = 10 W/m²K og 10 mm stål er valgt som eksempel.) ${T[3] > 60 ? "Overfladen er over ca. 60 °C: risiko for forbrænding." : ""}`);
  }
  t();
};

/* 12 · Varmestråling (Stefan-Boltzmann) */
M.straal = el => {
  const r = ramme(el, "Stråling fra en varm flade");
  const T1 = skyder(r, "Fladens temperatur", 20, 600, 5, 200, "°C", t), T2 = skyder(r, "Omgivelserne", 0, 40, 1, 20, "°C", t);
  const eps = knapper(r, "Overflade", [[.05, "Blank alu (0,05)"], [.3, "Oxideret stål (0,3)"], [.8, "Malet (0,8)"], [.95, "Mat sort (0,95)"]], .8, t);
  const s = svg(r, 420, 200);
  function t() {
    const a = T1() + 273.15, b = T2() + 273.15, q = eps() * 5.67e-8 * (a ** 4 - b ** 4);
    s.innerHTML = "";
    const { X, Y } = akser(s, 420, 200, { l: 50, r: 12, t: 16, b: 26 }, 0, 600, 0, 30000, "t_flade [°C]", "q [W/m²]");
    const p = []; for (let c = 20; c <= 600; c += 10) p.push([X(c), Y(Math.min(30000, eps() * 5.67e-8 * ((c + 273.15) ** 4 - b ** 4)))]);
    kurve(s, p, C.gul);
    tegn(s, "circle", { cx: X(T1()), cy: Y(Math.min(q, 30000)), r: 5, fill: C.l1 });
    [10000, 20000, 30000].forEach(v => tegn(s, "text", { x: 46, y: Y(v) + 4, fill: C.dim, "font-size": 10, "text-anchor": "end" }, v / 1000 + "k"));
    tal(r, [["Udstrålet netto", fmt(q, 0) + " W/m²"], ["T₁ i kelvin", fmt(a, 1) + " K"], ["Emissionstal ε", fmt(eps(), 2)]]);
    regn(r, `q = ε · σ · (T₁⁴ − T₂⁴) = ${fmt(eps(), 2)} · 5,67·10⁻⁸ · (${fmt(a, 1)}⁴ − ${fmt(b, 1)}⁴) = ${fmt(q, 0)} W/m²\nTemperaturen skal i kelvin. Fordobles den absolutte temperatur, bliver strålingen 16 gange større.`);
  }
  t();
};

/* 13 · Spændings-tøjningskurve og stivhed */
M.stiv = el => {
  const r = ramme(el, "Trækprøve af en stålstang");
  const F = skyder(r, "Trækkraft F", 0, 120, .5, 30, "kN", t), A = skyder(r, "Tværsnit A", 50, 500, 10, 200, "mm²", t), L = skyder(r, "Længde L₀", .5, 5, .1, 2, "m", t);
  const mat = knapper(r, "Materiale", [["s", "Stål S235"], ["a", "Aluminium"]], "s", t);
  const s = svg(r, 420, 240);
  lgd(r, [[C.l2, "Elastisk område (Hookes lov)"], [C.l1, "Plastisk område"], [C.gul, "Din belastning"]]);
  function t() {
    const E = mat() === "s" ? 210000 : 70000, Re = mat() === "s" ? 235 : 150, Rm = mat() === "s" ? 360 : 200, eu = mat() === "s" ? .2 : .12;
    const sig = F() * 1000 / A();
    s.innerHTML = "";
    const { X, Y } = akser(s, 420, 240, { l: 44, r: 12, t: 16, b: 26 }, 0, 25, 0, 420, "ε [%]", "σ [MPa]");
    const ee = Re / E * 100;
    const el_ = [[X(0), Y(0)], [X(ee), Y(Re)]], pl = [];
    for (let e = ee; e <= eu * 100; e += .25) { const x = (e - ee) / (eu * 100 - ee); pl.push([X(e), Y(x < .8 ? Re + (Rm - Re) * Math.sin(x / .8 * Math.PI / 2) : Rm - (Rm - Re) * .6 * ((x - .8) / .2) ** 2)]); }
    kurve(s, el_, C.l2, 3); kurve(s, pl, C.l1, 3);
    tegn(s, "line", { x1: X(0), x2: X(25), y1: Y(Re), y2: Y(Re), stroke: C.grid, "stroke-dasharray": "4 3" });
    tegn(s, "text", { x: X(14), y: Y(Re) + 14, fill: C.dim, "font-size": 11 }, `R_e = ${Re} MPa (flydegrænse)`);
    tegn(s, "line", { x1: X(0), x2: X(25), y1: Y(Rm), y2: Y(Rm), stroke: C.grid, "stroke-dasharray": "4 3" });
    tegn(s, "text", { x: X(14), y: Y(Rm) - 6, fill: C.dim, "font-size": 11 }, `R_m = ${Rm} MPa (trækstyrke)`);
    const elastisk = sig <= Re, eps = elastisk ? sig / E : null;
    if (elastisk) tegn(s, "circle", { cx: X(eps * 100), cy: Y(sig), r: 6, fill: C.gul });
    else tegn(s, "line", { x1: X(0), x2: X(25), y1: Y(Math.min(sig, 420)), y2: Y(Math.min(sig, 420)), stroke: C.gul, "stroke-width": 2 });
    [100, 200, 300, 400].forEach(v => tegn(s, "text", { x: 40, y: Y(v) + 4, fill: C.dim, "font-size": 10, "text-anchor": "end" }, v));
    tal(r, [["Spænding σ = F/A", fmt(sig, 0) + " MPa"], ["Tøjning ε = σ/E", elastisk ? fmt(eps * 100, 3) + " %" : "Plastisk"], ["Forlængelse ΔL", elastisk ? fmt(eps * L() * 1000, 2) + " mm" : "Blivende"], ["Sikkerhed mod flydning", fmt(Re / Math.max(sig, .001), 2)]]);
    regn(r, `σ = F / A = ${fmt(F() * 1000, 0)} N / ${A()} mm² = ${fmt(sig, 1)} N/mm² = ${fmt(sig, 1)} MPa\n${elastisk ? `ε = σ / E = ${fmt(sig, 1)} / ${E} = ${fmt(eps, 6)}\nΔL = ε · L₀ = ${fmt(eps, 6)} · ${fmt(L() * 1000, 0)} mm = ${fmt(eps * L() * 1000, 2)} mm  (forsvinder igen, når kraften fjernes)` : `σ er over flydegrænsen (${Re} MPa): stangen får en blivende forlængelse.${sig > Rm ? " Over trækstyrken: stangen brister." : ""}`}\nStivheden E siger, hvor meget kraft der skal til for en given tøjning. Styrken (R_e, R_m) siger, hvornår det går galt.`);
  }
  t();
};

document.querySelectorAll(".m[data-m]").forEach(el => { const f = M[el.dataset.m]; if (f) try { f(el); } catch (e) { el.textContent = "Modellen kunne ikke vises."; console.error(e); } });
})();
