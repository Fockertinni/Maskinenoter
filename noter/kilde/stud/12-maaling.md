id: maaling
navn: Måleusikkerhed: worst case og geometrisk kombination
ikon: kapacitet
intro: Portfolio-opgaven i måling: usikkerhed fra databladet, worst case og geometrisk kombination for summer, produkter og potenser, afrunding i måle- og resultatskemaer, og et fuldt gennemregnet eksempel.
---
# Noter

> **Kilder**
> "Opgave – portfolio M4 – Måling – Studiekompetence og Metode – F2026" (RSC og FIJO) · gruppens besvarelse "Studiekompetence M4 portfolio" (lab 16.03.2026) · datablade for Elma BM251 og Elma 9400 ligger på CN (ikke med i materialet)

Ingen måling er præcis. **Et måleresultat er kun komplet, når det har en usikkerhed**: 34,2 ± 1,0 Ω siger, at den sande værdi med stor sikkerhed ligger mellem 33,2 og 35,2 Ω. Portfolio-opgaven træner, hvordan usikkerheden fra instrumenterne føres videre til de størrelser, du beregner.

## Opgaven

En DC-kreds med R1 og R2 i serie på ca. 30 V DC. Efter 3 minutter måles samtidig:

| Måling | Værdi | Instrument |
|---|---|---|
| I_kreds | 0,867 A DC | Elma tangamperemeter 9400 |
| U_R1 | 19,44 V DC | Elma BM251 multimeter |
| U_R2 | 10,16 V DC | Elma BM251 multimeter |

Spændingen frakobles, og modstandene måles: **R1 = 22,1 Ω**, **R2 = 12,1 Ω** (hvert sit multimeter).

> **Trykfejl i opgaveoplægget**
> Under figur 2 står "modstand R1 = 22,1 Ω" og "modstand R1 = 12,1 Ω". Den anden skal være **R2**. Tabel 4 i oplægget hedder også både "Worst case" (den første) og "Worst case og geometrisk kombination". Den første er tabel 3.

Der skal beregnes fem størrelser med usikkerhed: R_kreds = R1 + R2, U_kreds = U_R1 + U_R2, og effekten i R1 på tre måder: U_R1 · I, R1 · I² og U_R1² / R1.

## Trin 1 · Usikkerheden fra databladet

Et digitalt instrument har en nøjagtighed som **±(p % af aflæsningen + n digits)**. Et "digit" er værdien af det sidste ciffer i displayet (opløsningen).

```
ΔS = p/100 · S + n · opløsning
ΔS/S = ΔS / S · 100 %
```

<div class="m" data-m="instrument"></div>

Gruppens værdier passer med disse specifikationer:

| Måling | Antaget nøjagtighed | Udregning | ΔS | ΔS/S |
|---|---|---|---|---|
| R1 = 22,1 Ω | ±(0,5 % + 4 dg), opløsning 0,1 Ω | 0,005 · 22,1 + 4 · 0,1 | 0,51 Ω | 2,31 % |
| R2 = 12,1 Ω | samme | 0,005 · 12,1 + 4 · 0,1 | 0,46 Ω | 3,8 % |
| U_R1 = 19,44 V | ±(0,2 % + 3 dg), opløsning 0,01 V | 0,002 · 19,44 + 3 · 0,01 | 0,069 V | 0,354 % |
| U_R2 = 10,16 V | samme | 0,002 · 10,16 + 3 · 0,01 | 0,050 V | 0,495 % |
| I = 0,867 A | ±(1,0 % + 3 dg), opløsning 0,001 A | 0,01 · 0,867 + 3 · 0,001 | 0,0117 A | 1,35 % |

> **Usikkert: tjek databladene**
> Specifikationerne ovenfor er regnet baglæns ud fra gruppens tal, fordi databladene ikke var med. Opgaveoplæggets eksempeltabel skriver **±(1,0 % + 10 dg)** for Elma 9400. Med opløsning 0,001 A giver det ΔI = 0,01 · 0,867 + 10 · 0,001 = **0,0187 A (2,15 %)**, ikke 0,0117 A. Slå det rigtige måleområde og den rigtige nøjagtighed op, før du bruger tallene.

**Måleskemaets regler (fra oplægget):** alle cifre i den målte værdi vises. Den absolutte usikkerhed får **1 decimal mere end instrumentets opløsning** (fx 0,51 Ω ved 0,1 Ω opløsning, og 0,069 V ved 0,01 V). Den relative usikkerhed får **3 betydende cifre, hvis første ciffer er under 3**, ellers 2 (2,31 % men 3,8 %).

## Trin 2 · Worst case

**Worst case** antager, at alle fejl trækker i samme retning på samme tid. Det giver den største mulige usikkerhed.

- **Sum og differens:** læg de **absolutte** usikkerheder sammen.
- **Produkt og kvotient:** læg de **relative** usikkerheder sammen.
- **Potens:** gang den relative usikkerhed med **eksponenten**.

## Trin 3 · Geometrisk kombination

**Geometrisk kombination** (kvadratisk addition) bruges, når målingerne er **stokastisk uafhængige**: fejlene er tilfældige og kommer fra forskellige instrumenter, så det er usandsynligt, at alle er maksimale i samme retning. Usikkerhederne lægges sammen som siderne i en retvinklet trekant.

- **Sum og differens:** ΔZ = √(ΔX² + ΔY²).
- **Produkt og kvotient:** ΔZ/Z = √((ΔX/X)² + (ΔY/Y)²).
- **Potens:** eksponenten ganges på **inden** kvadratet: (2 · ΔI/I)².

> **Fælden med I²**
> I² er **én** måling af I, ikke to uafhængige. Begge faktorer har præcis samme fejl, så de er fuldt korrelerede. Derfor er bidraget **(2 · ΔI/I)²**, ikke (ΔI/I)² + (ΔI/I)². Gruppens besvarelse fik 3,00 % for R1 · I² og 2,36 % for U_R1² / R1 med geometrisk kombination. Det svarer til at regne kvadratet som to uafhængige målinger. Med reglen ovenfor bliver det **3,55 %** og **2,42 %**. *Usikkert: tjek med underviseren, hvilken regel der forventes.*

<div class="m" data-m="wcgk"></div>

## Gennemregnet eksempel

### R_kreds = R1 + R2

```
R_kreds = 22,1 + 12,1 = 34,2 Ω
WC:  ΔR = 0,51 + 0,46 = 0,97 Ω            ΔR/R = 0,97 / 34,2 = 2,84 %
GK:  ΔR = √(0,51² + 0,46²) = 0,69 Ω       ΔR/R = 2,01 %
```

### P = R1 · I²

```
P = 22,1 · 0,867² = 16,61 W
WC:  ΔP/P = 2,31 % + 2 · 1,35 % = 5,01 %        ΔP = 0,83 W
GK:  ΔP/P = √(2,31² + (2 · 1,35)²) = 3,55 %     ΔP = 0,59 W
```

<details markdown="1"><summary>Prøv selv: regn P = U_R1 · I med worst case og geometrisk kombination, før du åbner.</summary>

P = 19,44 · 0,867 = 16,85 W. WC: 0,354 % + 1,35 % = 1,70 %, ΔP = 0,29 W. GK: √(0,354² + 1,35²) = 1,40 %, ΔP = 0,24 W.
</details>

## Resultatskemaet

**Afrundingsregel (fra oplægget):** usikkerheden angives med **1–2 betydende cifre**, og værdien rundes af til **samme decimalplads som usikkerheden**. Det undgår falsk præcision. Mellemregninger laves med alle cifre.

| Størrelse | Værdi | Worst case | Geometrisk kombination |
|---|---|---|---|
| R_kreds = R1 + R2 | 34,2 Ω | ± 1,0 Ω (2,8 %) | ± 0,7 Ω (2,0 %) |
| U_kreds = U_R1 + U_R2 | 29,60 V | ± 0,12 V (0,40 %) | ± 0,09 V (0,29 %) |
| P_R1 = U_R1 · I | 16,85 W | ± 0,29 W (1,7 %) | ± 0,24 W (1,4 %) |
| P_R1 = R1 · I² | 16,6 W | ± 0,8 W (5,0 %) | ± 0,6 W (3,6 %) |
| P_R1 = U_R1² / R1 | 17,1 W | ± 0,5 W (3,0 %) | ± 0,4 W (2,4 %) |

Tallene for R_kreds passer med oplæggets eksempeltabel (34,2 ± 1,0 Ω, 2,8 % og 0,7 Ω, 2,0 %).

## Kort faktuel diskussion af de tre effekter

- **De tre effekter stemmer overens inden for usikkerheden:** intervallerne 16,6 ± 0,8, 16,85 ± 0,29 og 17,1 ± 0,5 W overlapper alle omkring 16,6–17,1 W.
- **U_R1 · I har den mindste usikkerhed**, fordi spændingsmålingen er meget nøjagtig (0,35 %), og I kun indgår én gang.
- **R1 · I² har den største usikkerhed**, fordi I indgår i anden potens, og modstandsmålingen er den mest usikre (2,31 %).
- **U_R1² / R1** ligger imellem: U er nøjagtig, men R1 trækker op.
- **Geometrisk kombination giver mindre usikkerhed end worst case**, fordi det er usandsynligt, at alle fejl er maksimale i samme retning.
- **Bemærk:** R1 blev målt **kold og uden strøm**, mens U og I blev målt i drift. Opvarmning ændrer modstanden, så R1 · I² og U² / R1 kan afvige systematisk fra U · I. Det er en trussel mod validiteten, ikke mod reliabiliteten.

## Tillægsopgaven: R1 // R2

Udtrykket R1 · R2 / (R1 + R2) indeholder de samme målinger flere gange, så **min/max-metoden** er lettest: indsæt de mindste værdier for at få minimum og de største for at få maksimum (parallelmodstanden stiger med begge).

```
R1//R2 = 22,1 · 12,1 / 34,2 = 7,82 Ω
min = 21,59 · 11,64 / 33,23 = 7,56 Ω
max = 22,61 · 12,56 / 35,17 = 8,07 Ω
ΔR = (8,07 − 7,56) / 2 = 0,26 Ω   →   7,8 ± 0,3 Ω (3,3 %)
```

<details markdown="1"><summary>Forudsig først: er parallelmodstanden mere eller mindre usikker i procent end R1 alene?</summary>

Mere: 3,3 % mod 2,31 % for R1, men mindre end R2's 3,8 %. Parallelmodstanden domineres af den mindste modstand (R2), som har den største relative usikkerhed.
</details>

# Formler

### Usikkerhed fra databladet

```
ΔS = p/100 · S + n · opløsning
ΔS/S = ΔS / S · 100 %
```

### Worst case

```
Z = X ± Y         ΔZ = ΔX + ΔY
Z = X · Y, X / Y  ΔZ/Z = ΔX/X + ΔY/Y
Z = Xⁿ            ΔZ/Z = |n| · ΔX/X
```

### Geometrisk kombination (uafhængige målinger)

```
Z = X ± Y         ΔZ = √(ΔX² + ΔY²)
Z = X · Y, X / Y  ΔZ/Z = √((ΔX/X)² + (ΔY/Y)²)
Z = Xⁿ · Yᵐ       ΔZ/Z = √((n · ΔX/X)² + (m · ΔY/Y)²)
```

### Effekt i en modstand

```
P = U · I = R · I² = U² / R
```

### Min/max (tillægsopgaven)

```
R1//R2 = R1 · R2 / (R1 + R2)
ΔR ≈ (R_max − R_min) / 2
```

### Afrunding

```
Måleskema:     ΔS med 1 decimal mere end opløsningen
               ΔS/S: 3 betydende cifre hvis første < 3, ellers 2
Resultatskema: ΔS med 1–2 betydende cifre, værdien til samme decimal
```

# Quiz

Q: Et multimeter har nøjagtigheden ±(0,5 % + 4 dg) og opløsningen 0,1 Ω. Det viser 22,1 Ω. Hvad er den absolutte usikkerhed? (Ω)
N: 0,51 ; 0,01 ; Ω
L: ΔR = 0,005 · 22,1 + 4 · 0,1 = 0,11 + 0,40 = 0,51 Ω.
F: Digits-delen fylder mest ved små aflæsninger.

Q: R1 = 22,1 ± 0,51 Ω og R2 = 12,1 ± 0,46 Ω. Hvad er worst case-usikkerheden på R1 + R2? (Ω)
N: 0,97 ; 0,01 ; Ω
L: Ved en sum lægges de absolutte usikkerheder sammen: 0,51 + 0,46 = 0,97 Ω.
F: Worst case antager, at begge fejl trækker samme vej.

Q: Samme modstande. Hvad er den geometrisk kombinerede usikkerhed på R1 + R2? (Ω)
N: 0,69 ; 0,01 ; Ω
L: √(0,51² + 0,46²) = √(0,2601 + 0,2116) = √0,4717 = 0,69 Ω.
F: Kvadratisk addition, fordi målingerne er uafhængige.

Q: U = 19,44 V ± 0,354 % og I = 0,867 A ± 1,35 %. Hvad er worst case den relative usikkerhed på P = U · I? (%)
N: 1,70 ; 0,02 ; %
L: Ved et produkt lægges de relative usikkerheder sammen: 0,354 + 1,35 = 1,70 %.
F: Produkt og kvotient: relative usikkerheder.

Q: R1 ± 2,31 % og I ± 1,35 %. Hvad er den geometrisk kombinerede relative usikkerhed på P = R1 · I²? (%)
N: 3,55 ; 0,05 ; %
L: √(2,31² + (2 · 1,35)²) = √(5,34 + 7,29) = √12,63 = 3,55 %.
F: Eksponenten 2 ganges på I's relative usikkerhed før kvadratet, fordi I² er én måling.

Q: Hvornår må man bruge geometrisk kombination?
A: Altid, fordi den giver mindst usikkerhed
R: Når målingerne er stokastisk uafhængige, fx fra forskellige instrumenter
A: Kun ved summer
A: Kun når worst case er for stor
F: Ellers er worst case det sikre valg.

Q: En beregnet effekt er 16,612 W ± 0,8321 W. Hvordan skrives den i resultatskemaet?
A: 16,612 ± 0,8321 W
A: 17 ± 1 W
R: 16,6 ± 0,8 W
A: 16,61 ± 0,8 W
F: 1–2 betydende cifre på usikkerheden og værdien til samme decimal.

Q: Hvorfor har P = U · I den mindste usikkerhed af de tre effektberegninger?
A: Fordi den er den største værdi
R: Fordi spændingsmålingen er meget nøjagtig, og I kun indgår én gang
A: Fordi modstanden ikke er målt
A: Fordi den er beregnet med worst case
F: R1 · I² har den største, fordi I er i anden potens, og R er usikker.

Q: R1 = 22,1 Ω og R2 = 12,1 Ω. Hvad er R1 // R2? (Ω, 2 decimaler)
N: 7,82 ; 0,01 ; Ω
L: 22,1 · 12,1 / (22,1 + 12,1) = 267,41 / 34,2 = 7,82 Ω.
F: Min/max-metoden er lettest til usikkerheden, fordi R1 og R2 indgår flere gange.
