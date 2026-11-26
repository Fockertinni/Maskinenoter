id: vekselspaending-eksamen
navn: Alt du skal bruge til eksamen: Vekselspænding og effekt
ikon: sinus
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at opstille beregning af aktiv effekt."

Hvis du kun når én ting: kunne tegne effekttrekanten og strømmens deling i I_W og I_WL, og opstille P = U · I · cos φ, også når cos φ først skal findes fra R og Z eller fra en måling.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | U_max = √2 · U_eff | Spidsværdi |
| 2 | U_mid = 0,637 · U_max | Middelværdi |
| 3 | ξ = U_eff / U_mid = 1,11 | Formfaktor |
| 4 | P = U · I · cos φ | Aktiv effekt |
| 5 | P = R · I² | Aktiv effekt, når R er kendt |
| 6 | Q = U · I · sin φ | Reaktiv effekt |
| 7 | S = U · I = √(P² + Q²) | Tilsyneladende effekt |
| 8 | I_W = I cos φ, I_WL = I sin φ | Watt- og wattløs strøm |
| 9 | cos φ = R / Z = P / S | Effektfaktor |

## 2 · Det du skal kunne forklare

### Hvordan vekselspænding laves

**Pointe:** en ledersløjfe drejer i et magnetfelt. Spændingen er størst, når lederne skærer feltlinjerne vinkelret, og nul, når de bevæger sig langs dem. Det giver e = E_max · sin(ωt).

### Effektivværdi

**Pointe:** effektivværdien er den DC-spænding, der giver samme varme i en modstand. 230 V AC varmer lige så meget som 230 V DC, selv om spidsen er 325 V.

### Aktiv effekt på tre måder

1. **Fra spænding, strøm og vinkel:** P = U · I · cos φ.
2. **Fra modstanden:** P = R · I². Kun resistanser bruger aktiv effekt. Spoler og kondensatorer bruger ingen.
3. **Fra wattstrømmen:** P = U · I_W.

**Tal du kan nævne:** spolen i opgavesæt 2, opgave 9: P = 230 · 1,25 · 0,870 = 250 W. Heraf er 203 W kobbertab (R · I²) og 47 W jerntab.

### Hvorfor reaktiv effekt er et problem

**Pointe:** Q laver ikke arbejde, men strømmen skal løbe i kablerne. Større strøm giver større tab og kræver større kabler og transformere. Derfor fasekompenserer man.

## 3 · Det du skal kunne tegne

1. Sinuskurven med U_max, U_eff og U_mid og en periode T.
2. Den roterende vektor og projektionen til sinus.
3. Strømvektoren delt i I_W (langs U) og I_WL (vinkelret på U).
4. Effekttrekanten: P vandret, Q lodret, S som hypotenuse, φ mellem P og S.
5. Impedanstrekanten (R, X, Z) ved siden af. Den har samme form som effekttrekanten.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Opstil beregningen af den aktive effekt for en serieforbindelse af R = 30 Ω og X_L = 40 Ω på 230 V.</summary>

Z = √(30² + 40²) = 50 Ω. I = 230 / 50 = 4,6 A. cos φ = 30 / 50 = 0,6. P = 230 · 4,6 · 0,6 = 634,8 W. Kontrol: P = R · I² = 30 · 4,6² = 634,8 W. Q = 40 · 4,6² = 846,4 var, S = 1.058 VA.
</details>

<details markdown="1"><summary>Hvad er forskellen på P, Q og S?</summary>

P [W] er den effekt, der bliver til varme og arbejde. Q [var] er den effekt, der pendler mellem nettet og spolers og kondensatorers felter. S [VA] = U · I er det, nettet og kablerne skal levere strøm til. S² = P² + Q².
</details>

<details markdown="1"><summary>Hvorfor er formfaktoren vigtig ved måling?</summary>

Billige instrumenter måler middelværdien og ganger med 1,11. Det passer kun for ren sinus. Ved forvrængede kurver fra fx frekvensomformere skal du bruge et true RMS-instrument.
</details>

<details markdown="1"><summary>Hvordan måler du cos φ, hvis du kun har et voltmeter, et amperemeter og et wattmeter?</summary>

Mål U, I og P. S = U · I. cos φ = P / S. Q = √(S² − P²).
</details>

<details markdown="1"><summary>Hvad er wattstrøm og wattløs strøm, og hvad bruges de til?</summary>

Wattstrømmen I · cos φ ligger i fase med spændingen og giver den aktive effekt. Den wattløse strøm I · sin φ ligger 90° forskudt og giver den reaktive effekt. Ved fasekompensering ophæver kondensatorens strøm den induktive wattløse strøm, mens wattstrømmen er uændret.
</details>

## 5 · Faldgruber

- Spidsværdien brugt i P = U · I · cos φ. Brug altid effektivværdier.
- P = U · I uden cos φ, når kredsen har reaktans.
- R · I² regnet med hele Z i stedet for R.
- φ i grader sat ind i en lommeregner, der står i radianer.
- E_max = B · l · v brugt for en hel sløjfe. To sider og N vindinger giver 2·N·B·l·v.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

En ledersløjfe, der drejer i et magnetfelt, giver en sinusspænding e = E_max·sin(ωt). Ved 50 Hz er perioden 20 ms. Effektivværdien er den DC-værdi, der giver samme varme, og spidsværdien er √2 gange større: 230 V har spids 325 V. Middelværdien er 0,637 af spidsen, og formfaktoren er 1,11 for ren sinus. Er strømmen forskudt φ efter spændingen, deles den i en wattstrøm I·cos φ og en wattløs strøm I·sin φ. Den aktive effekt er P = U·I·cos φ = R·I², den reaktive Q = U·I·sin φ, og den tilsyneladende S = U·I. De danner effekttrekanten, og cos φ = P/S er effektfaktoren.
</details>
</div>
