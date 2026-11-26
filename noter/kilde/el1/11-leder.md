id: leder
navn: Ledere, effekt og energi
ikon: leder
intro: Lederens resistans, resistivitet og temperatur, strømtæthed og strømvarmetab, moment og vinkelhastighed, effekt, arbejde, energi og virkningsgrad, og akkumulatoren.
---
# Noter

> **Kilder**
> PP11 Ledere, strømvarmetab, effekt, arbejde og energi · Obligatorisk opgavesæt 1, opgave 4 · Obligatorisk opgavesæt 2, opgave 5 · Obligatorisk opgavesæt 3, opgave 2

Strøm gennem en leder giver varme. Hvor meget, afhænger af lederens resistans, og resistansen afhænger af materiale, længde, tværsnit og temperatur. Det er grundlaget for at dimensionere kabler og regne energiforbrug.

## Lederens resistans

```
R = ρ · l / S = l / (γ · S)        G = 1 / R = γ · S / l   [S, siemens]
```

| Materiale | ρ ved 20 °C [Ω·mm²/m] | α [1/°C] |
|---|---|---|
| Kobber | 0,0175 | 0,004 |
| Aluminium | 0,028 | 0,0037 |
| Konstantan | ca. 0,5 | 0,000005 (næsten konstant) |

Med l i meter og S i mm² kan ρ = 0,0175 Ω·mm²/m bruges direkte.

## Resistans og temperatur

```
R₂ = R₁ · (1 + α · (T₂ − T₁))       →   T₂ = T₁ + (R₂/R₁ − 1) / α
```

Metaller har positiv α: modstanden stiger med temperaturen. Kul har negativ α. Det bruges omvendt til at **måle** temperaturen i en vikling: mål R kold og varm, og regn T₂ ud.

### Gennemregnet eksempel (opgavesæt 1, opgave 4: svejsekabel)

Kobberkabel, S = 10 mm², R = 8,75 mΩ ved 20 °C, I = 50 A. Efter 240 minutter er R = 11,2 mΩ.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| Længde | 8,75·10⁻³ · 10 / 0,0175 | 5,0 m |
| Effekttab ved start | 8,75·10⁻³ · 50² | 21,9 W |
| Strømtæthed | 50 / 10 | 5 A/mm² |
| Sluttemperatur | 20 + (11,2 / 8,75 − 1) / 0,004 | 90 °C |
| Effekttab ved slut | 11,2·10⁻³ · 50² | 28 W |
</details>

## Strømtæthed og strømvarmetab

```
J = I / S          [A/mm²]
P = R · I²         [W]       strømvarmetab (kobbertab)
```

Høj strømtæthed betyder meget varme pr. volumen. Et tyndt kabel med høj J bliver varmt, og isolationen ældes. Varmeafgivelsen afhænger af overfladen, så kabler dimensioneres efter tilladt temperatur, ikke kun efter J.

> **Trykfejl på slides (PP11, slide 2)**
> Strømvarmetabet står som P = R · I² · N. Enheden er watt [W], ikke newton. N skal ikke ganges på.

<div class="m" data-m="leder"></div>

## Moment og vinkelhastighed

```
M = F · r          [Nm]
ω = 2π · n         [rad/s]   (n i omdr./s)     ω = 2π · n / 60  (n i o/min)
P = M · ω          [W]       M = P_aksel / ω
```

> **Bemærk om slides (PP11, slide 4)**
> Sliden skriver ω = 2π · f. Det gælder for elektriske størrelser. For en aksel skal du bruge omdrejningstallet n. For en 2-polet motor er n og f næsten ens, men for en 4-polet motor er n kun halvdelen.

## Effekt, arbejde, energi og virkningsgrad

```
W = F · s          [J]        mekanisk arbejde
P = W / t          [W]        effekt
P = U · I          [J/C · C/s = J/s = W]
W = P · t          [J] eller [kWh]      1 kWh = 3,6 MJ
η = P2 / P1 = (P1 − ΔP) / P1 = P2 / (P2 + ΔP)
```

### Gennemregnet eksempel (opgavesæt 3, opgave 2: komfuret juleaften)

To kogezoner på 1,5 kW, to på 2 kW, over- og undervarme i ovnen (0,8 + 1 kW) i 2 timer. Elpris 2,30 kr./kWh.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| Samlet effekt | 2 · 1,5 + 2 · 2 + 0,8 + 1 | 8,8 kW |
| Energi | 8,8 kW · 2 h | 17,6 kWh |
| I joule | 17,6 · 3,6·10⁶ | 63,4 MJ |
| Pris | 17,6 · 2,30 | 40,48 kr. |

Grillen (1,5 kW) er ikke tændt.
</details>

### Gennemregnet eksempel (opgavesæt 2, opgave 5: to varmelegemer)

Ved 230 V udvikles 500 kJ på 25 minutter i serie og 2.500 kJ i parallel.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| P serie og parallel | 500.000/1.500 og 2.500.000/1.500 | 333 W og 1.667 W |
| R serie | 230² / 333 | 158,7 Ω = R1 + R2 |
| R parallel | 230² / 1.667 | 31,74 Ω = R1R2/(R1 + R2) |
| R1 · R2 | 31,74 · 158,7 | 5.037 Ω² |
| Løs x² − 158,7x + 5.037 = 0 | | R1 = 43,9 Ω og R2 = 114,8 Ω |

Frekvensen (60 Hz) er ligegyldig, fordi lasten er rent resistiv.
</details>

## Elektromotorisk kraft, ladning og akkumulatoren

```
E = W / Q          [V = J/C]     EMK: energi pr. ladning, som kilden tilfører
Q = I · t          [C = As]      kapacitet angives i Ah (1 Ah = 3.600 C)
U_kl = E − I · R_i               klemspænding
R_i = (E − U_kl) / I             indre modstand
```

- **EMK** måles i tomgang (I = 0). Under belastning falder klemspændingen med I · R_i.
- **Kapacitet:** 60 Ah kan levere 5 A i 12 timer. Ved høj strøm er den reelle kapacitet mindre.
- **Virkningsgrad (går ud over slides):** Ah-virkningsgraden = afgivet Ah / tilført Ah (bly typisk 85–90 %). Wh-virkningsgraden er lavere (70–80 %), fordi opladning sker ved højere spænding end afladning.
- **Indre modstand:** ældes et batteri, stiger R_i. Det ses ved, at klemspændingen falder meget ved start af en motor, selv om tomgangsspændingen ser fin ud.

<details markdown="1"><summary>Forudsig først: et 12,6 V-batteri med R_i = 0,05 Ω belastes med 1 Ω. Hvad er klemspændingen?</summary>

I = 12,6 / 1,05 = 12 A. U_kl = 12,6 − 12 · 0,05 = 12,0 V. Ved en startmotor på 0,05 Ω falder den til 6,3 V. Prøv i modellen.
</details>

<div class="m" data-m="akku"></div>

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad sker der med R, når du fordobler tværsnittet?
2. Hvordan kan du måle temperaturen i en motorvikling uden termometer?
3. Hvor mange joule er 1 kWh?
4. Hvorfor falder klemspændingen, når et batteri belastes?

<details markdown="1"><summary>Svar</summary>

1. Den halveres.
2. Mål viklingens modstand kold og varm. T₂ = T₁ + (R₂/R₁ − 1)/α.
3. 3,6 MJ.
4. Strømmen giver et spændingsfald I · R_i over batteriets indre modstand.
</details>
</div>

# Formler

### Resistans
```
R = ρ · l / S = 1 / G        ρ_Cu = 0,0175 Ω·mm²/m
R₂ = R₁ · (1 + α · (T₂ − T₁))     α_Cu = 0,004 /°C
J = I / S
P = R · I²
```

### Mekanik
```
M = F · r       ω = 2π · n       P = M · ω
W = F · s       P = W / t
```

### Energi og virkningsgrad
```
W = P · t        1 kWh = 3,6·10⁶ J
η = P2 / P1 = P2 / (P2 + ΔP)
```

### Akkumulator
```
E = W / Q        Q = I · t
U_kl = E − I · R_i       R_i = (E − U_kl) / I
```

# Quiz

Q: Et kobberkabel har S = 10 mm² og R = 8,75 mΩ. Hvor langt er det? (m)
N: 5 ; 0,05 ; m
L: l = R · S / ρ = 8,75·10⁻³ · 10 / 0,0175 = 5,0 m.
F: R = ρ · l / S omskrevet til l.

Q: Kablets modstand stiger fra 8,75 til 11,2 mΩ (start 20 °C, α = 0,004). Hvad er sluttemperaturen? (°C)
N: 90 ; 1 ; °C
L: T₂ = 20 + (11,2/8,75 − 1)/0,004 = 20 + 0,28/0,004 = 20 + 70 = 90 °C.
F: Modstanden stiger 0,4 % pr. grad i kobber.

Q: Hvad er strømvarmetabet i 8,75 mΩ ved 50 A? (W)
N: 21,9 ; 0,2 ; W
L: P = R · I² = 0,00875 · 2.500 = 21,9 W.
F: Tabet vokser med kvadratet på strømmen.

Q: Et komfur bruger 8,8 kW i 2 timer. Hvor meget energi er det i MJ?
N: 63,36 ; 0,1 ; MJ
L: 8,8 · 2 = 17,6 kWh. 17,6 · 3,6 = 63,36 MJ.
F: 1 kWh = 3,6 MJ.

Q: En motor afgiver 15 kW på akslen ved 1.460 o/min. Hvad er momentet? (Nm)
N: 98,1 ; 0,5 ; Nm
L: ω = 2π · 1.460 / 60 = 152,9 rad/s. M = 15.000 / 152,9 = 98,1 Nm.
F: Husk at regne o/min om til rad/s.

Q: En motor optager 5.155 W og afgiver 4.000 W. Hvad er virkningsgraden? (%)
N: 77,6 ; 0,2 ; %
L: η = 4.000 / 5.155 = 0,776 = 77,6 %.
F: η = P2 / P1. Tabene er 1.155 W.

Q: Et batteri har E = 12,6 V og U_kl = 11,9 V ved 50 A. Hvad er den indre modstand? (mΩ)
N: 14 ; 0,5 ; mΩ
L: R_i = (12,6 − 11,9) / 50 = 0,7 / 50 = 0,014 Ω = 14 mΩ.
F: Spændingsfaldet over R_i er forskellen mellem EMK og klemspænding.

Q: Hvad betyder det, at et batteri har en kapacitet på 60 Ah?
R: Det kan levere fx 5 A i 12 timer (en ladningsmængde på 216.000 C)
A: Det kan levere 60 A i alle tilfælde
A: Det har en spænding på 60 V
A: Det har en energi på 60 kWh
F: Ah er ladning: Q = I · t. 60 Ah · 3.600 s/h = 216.000 C.

Q: To varmelegemer giver 158,7 Ω i serie og 31,74 Ω i parallel. Hvad er det mindste? (Ω)
N: 43,9 ; 0,2 ; Ω
L: R1 + R2 = 158,7 og R1R2 = 31,74 · 158,7 = 5.037. Løs x² − 158,7x + 5.037 = 0: x = (158,7 − 71,0)/2 = 43,9 Ω.
F: To ligninger med to ubekendte.
