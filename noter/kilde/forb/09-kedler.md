id: kedler
navn: Skibskedler og WHR
ikon: kedel
intro: Udstødskedel og hjælpekedel, kedeltyper, regulering af dampproduktionen, kedelsystemet med Waste Heat Recovery og damptabellen.
---
# Noter

> **Kilder**
> K22 · Lektion 43–44

Udstødskedlen udnytter spildvarmen i udstødningsgassen under sejlads. Hjælpekedlen (HFO- eller slamoliefyret) leverer varmen, når motoren står stille, fx i havn.

## Kedeltyper

| Type | Hvad er i rørene | Kendetegn |
|---|---|---|
| Vandrørskedel | Vand og damp | Sektioner: economiser, fordamper, evt. overheder. Større kapacitet. Har ingen egen beholder, men bruger hjælpekedlens |
| Røgrørskedel | Røggas | Vandkammer. Sjældent overhedning (kan tilføjes som rørslange) |
| Kombi- eller kompositkedel | Begge dele | Én kedel med udstødsgasdel og oliebrænder. Ofte på mindre skibe |

## Udstødskedlen

Gassen efter turboladeren er 250–300 °C. Den må **højst køles til 140–150 °C**, ellers kondenserer svovlsyredampe og æder skorstenen. Varmen under denne grænse er et tab.

Tilført effekt beregnes på røggassiden. Samme formel bruges pr. sektion: overheder (t_ind → t_y), fordamper (t_y → t_x) og economiser (t_x → t_ud). Nyttig effekt beregnes på vand- og dampsiden. Tabet skyldes udstråling til omgivelserne.

## Regulering

Setpunktet er damptemperaturen ud af kedlen. Effekten fra gassen kan ikke reguleres, for den følger motorlasten.

1. **Bypass-spjæld** leder en del af røggassen uden om hedefladen.
2. **Luk for røggas** til nogle rør (røgrørskedel).
3. **Luk for vand** til nogle rør (vandrørskedel).
4. **Kondensér overskudsdamp** i en dampkondensator (kræver ekstra pumpeeffekt til kølevand).

Metode 1–3 regulerer arealet A i varmetransmissionsformlen. Effekten følger A ligefrem proportionalt.

**Rensning:** belægninger (kulstof, aske) sænker U. Under drift: sodblæsning med damp, eller en væske, der fordamper og får belægningen til at trække sig sammen og knække af. Under stop: højtryksrenser og børster.

## Hjælpekedlen

Olie og luft fyres ind i et brændkammer (helst fuldstændig forbrænding, så flammen ikke rører metallet). Røggassen passerer **pinrør**: vandrør med påsvejste ståltappe, der giver større areal A og mere turbulens (højere U).

h_i er nedre brændværdi (svær at kende for slamolie). Luftens varmeindhold ses der bort fra. Tab: røggastab (størst), udstråling og uforbrændt.

## Kedelsystemet og WHR

1. **Fødevandstank** samler kondensat fra forbrugere og turbine.
2. Pumpes til udstødskedlens **economiser** → lige under mætningstemperatur.
3. Til hjælpekedlens **separeringsbeholder**: vand i bunden (h′), tør mættet damp i toppen (h″).
4. **Cirkulationspumpe** sender vand til udstødskedlens **fordamper** → vand/damp-blanding retur til beholderen.
5. Damp til forbrugere, eller til **overhederen** → dampturbine → kondensator (havvand) → kondensat retur.

Ved stort forbrug river dampen dråber med: tørhedsgrad x ≈ 98–99 %, altså våd damp (h_x), ikke h″.

**WHR (Waste Heat Recovery):** overskudsdampen driver en turbine i stedet for at blive kondenseret væk. Den mekaniske effekt bruges i en generator (sparer olie i hjælpemotorer) eller på propelakslen (sparer olie i hovedmotoren).

## Damptabel: mættet vanddamp (bilag 1)

| p (bar) | t_m (°C) | h′ (kJ/kg) | h″ (kJ/kg) | r (kJ/kg) |
|---|---|---|---|---|
| 0,02 | 17,5 | 73,5 | 2533,6 | 2460,2 |
| 0,04 | 28,9 | 121,4 | 2554,5 | 2433,1 |
| 0,05 | 32,9 | 137,8 | 2561,6 | 2423,8 |
| 0,056 | 35,0 | 146,6 | 2565,4 | 2418,8 |
| 0,06 | 36,2 | 151,5 | 2567,5 | 2416,0 |
| 0,08 | 41,5 | 173,9 | 2577,1 | 2403,2 |
| 0,096 | 45,0 | 188,4 | 2583,3 | 2394,9 |
| 0,1 | 45,8 | 191,8 | 2584,8 | 2392,9 |
| 0,2 | 60,1 | 251,5 | 2609,9 | 2358,4 |
| 0,31 | 70,0 | 293,0 | 2626,9 | 2334,0 |
| 0,386 | 75,0 | 313,9 | 2635,4 | 2321,5 |
| 0,578 | 85,0 | 355,9 | 2652,0 | 2296,5 |
| 0,6 | 85,9 | 359,9 | 2653,6 | 2293,6 |
| 0,7 | 90,0 | 376,8 | 2660,1 | 2283,3 |
| 0,8 | 93,5 | 391,7 | 2665,8 | 2274,0 |
| 1 | 99,6 | 417,5 | 2675,4 | 2257,9 |
| 1,21 | 105,0 | 440,2 | 2683,7 | 2243,6 |
| 1,433 | 110,0 | 461,3 | 2691,3 | 2230,0 |
| 2 | 120,2 | 504,7 | 2706,3 | 2201,6 |
| 2,32 | 125,0 | 525,1 | 2713,1 | 2188,0 |
| 3 | 133,5 | 561,4 | 2724,7 | 2163,2 |
| 4 | 143,6 | 604,7 | 2737,6 | 2133,0 |
| 6 | 158,8 | 670,4 | 2755,5 | 2085,0 |
| 6,2 | 160,0 | 675,5 | 2756,7 | 2081,3 |
| 7 | 165,0 | 697,3 | 2762,0 | 2064,8 |
| 8 | 170,4 | 720,9 | 2767,5 | 2046,5 |
| 10 | 179,9 | 762,6 | 2776,2 | 2013,6 |
| 20 | 212,4 | 908,6 | 2797,2 | 1888,6 |
| 30 | 233,8 | 1008,4 | 2802,3 | 1793,9 |
| 40 | 250,3 | 1087,4 | 2800,3 | 1712,9 |
| 42 | 253,2 | 1101,6 | 2799,4 | 1697,8 |
| 44 | 256,1 | 1115,4 | 2798,3 | 1683,9 |
| 46 | 258,8 | 1128,8 | 2797,0 | 1668,3 |
| 48 | 261,4 | 1141,8 | 2795,7 | 1653,9 |
| 50 | 263,9 | 1154,2 | 2794,2 | 1639,7 |
| 60 | 275,6 | 1213,7 | 2785,0 | 1571,3 |
| 70 | 285,8 | 1267,4 | 2773,5 | 1506,0 |
| 80 | 295,0 | 1317,1 | 2759,9 | 1442,8 |

> **Trykfejl i kompendiet**
> Tabellen for overhedet damp (bilag 2, 2–200 bar og 140–600 °C) står i kompendiet. Den har et par tydelige trykfejl, fx 9 bar/200 °C = 2933 og 100 bar/560 °C = 3426. Interpolér fra nabocellerne der.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor må udstødningsgassen ikke køles under ca. 150 °C?
2. Tegn kedelsystemet med economiser, separeringsbeholder, fordamper og overheder.
3. Hvordan regulerer man dampproduktionen fra udstødskedlen?
4. Hvorfor bruger man h_x og ikke h″ ved stort dampforbrug?

<details markdown="1"><summary>Svar</summary>

1. Så kondenserer svovlsyredampe og tærer skorstenen og kedlen.
2. Fødevandstank → fødevandspumpe → economiser → separeringsbeholder. Cirkulationspumpe → fordamper → tilbage til beholderen. Damp fra toppen → forbrugere eller overheder → turbine → kondensator → fødevandstank.
3. Bypass-spjæld for røggassen, luk for gas eller vand til nogle rør (mindre areal A), eller kondensér overskudsdampen.
4. Dampen river vanddråber med, så den ikke er tør mættet. Med x ≈ 0,98–0,99 er entalpien lidt lavere end h″.
</details>
</div>

# Formler

### Udstødskedel
```
P_røg   = ṁ_røg · c_p,røg · (t_røg,ind – t_røg,ud)      c_p,røg ≈ 1,03–1,06 kJ/kg·K
P_kedel = ṁ_damp · (h_afg,oh – h_f)                     h_f = fødevandets entalpi
η_kedel = P_kedel / P_røg
Pr. sektion (vand/damp-siden):  P = ṁ · (h_afg – h_til)
```

### Hjælpekedel
```
P_brændstof = ṁ_brændstof · h_i                        h_i = nedre brændværdi
P_røgtab    = ṁ_røg · c_p,røg · (t_røg,ud – t_luft,ind)
P_kedel     = ṁ_damp · (h_afg – h_f)
η_kedel     = P_kedel / P_brændstof
```

### Varmetransmission og våd damp
```
Q   = U · A · Δt_m          U = varmetransmissionstal, A = areal
h_x = h′ + x · r            x = tørhedsgrad
```

## Eksempel

Udstødningsgas 20 kg/s køles fra 280 til 160 °C (c_p = 1,05 kJ/kg·K). Kedlen laver 0,9 kg/s damp ved 7 bar med x = 0,98. Fødevandet har h_f = 251 kJ/kg (60 °C). Find P_røg, h_x, P_kedel og η_kedel.

<details markdown="1"><summary>Vis udregning</summary>

- P_røg = 20 · 1,05 · (280 − 160) = **2.520 kW**.
- h_x = 697,3 + 0,98 · 2.064,8 = **2.720,8 kJ/kg** (7 bar fra tabellen).
- P_kedel = 0,9 · (2.720,8 − 251) = **2.223 kW**.
- η_kedel = 2.223 / 2.520 = **0,88**.
</details>

# Quiz

Q: Hvorfor må udstødningsgassen ikke køles under ca. 140–150 °C?
A: Fordi turbinen så staller
R: Fordi svovlsyredampe så kondenserer og tærer skorstenen
A: Fordi kedlen ellers koger tør
A: Fordi NOx stiger
F: Varmen under grænsen er et bevidst tab.

Q: Udstødningsgas 20 kg/s køles fra 280 til 160 °C, c_p = 1,05 kJ/kg·K. Hvad er den tilførte effekt?
N: 2520 ; 5 ; kW
L: P_røg = 20 · 1,05 · (280 − 160) = 2.520 kW.
F: Effekten følger motorlasten og kan ikke reguleres på gassiden, kun ved at lede gas uden om.

Q: Damp ved 7 bar med tørhedsgrad x = 0,98 (h′ = 697,3, r = 2.064,8 kJ/kg). Hvad er h_x? (1 decimal)
N: 2720,8 ; 0,5 ; kJ/kg
L: h_x = 697,3 + 0,98 · 2.064,8 = 697,3 + 2.023,5 = 2.720,8 kJ/kg.
F: Tør mættet damp ville have h″ = 2.762,0 kJ/kg.

Q: Hvad er i rørene i en vandrørskedel?
R: Vand og damp
A: Røggas
A: Termoolie
A: Luft
F: I røgrørskedlen er det omvendt: røggassen går i rørene, og vandet er udenom.

Q: Hvordan virker metode 1–3 til regulering af udstødskedlen (bypass, luk for gas eller vand)?
A: De sænker U
R: De ændrer det effektive areal A i Q = U · A · Δt_m
A: De ændrer Δt_m
A: De ændrer motorlasten
F: Effekten følger A ligefrem proportionalt.

Q: Hvad giver pinrør i hjælpekedlen?
A: Lavere tryktab
R: Større areal og mere turbulens, altså højere A og U
A: Bedre forbrænding
A: Mindre sod
F: Ståltappene øger overfladen og hvirvler røggassen op.

Q: Hvad bruges WHR-turbinens effekt til?
A: Kun til at drive kedlens pumper
R: I en generator (sparer hjælpemotorer) eller på propelakslen (sparer hovedmotor)
A: Til at forvarme brændstoffet
A: Til at drive turboladeren
F: Overskudsdampen bliver til arbejde i stedet for at blive kondenseret væk.

Q: Hjælpekedlen brænder 0,05 kg/s olie med h_i = 40.000 kJ/kg. Hvad er den tilførte effekt?
N: 2000 ; 1 ; kW
L: P_brændstof = 0,05 · 40.000 = 2.000 kW.
F: Kedlens virkningsgrad er den nyttige dampeffekt divideret med dette tal.
