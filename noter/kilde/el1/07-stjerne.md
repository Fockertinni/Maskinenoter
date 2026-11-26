id: stjerne
navn: Y-Δ-transformation og stjernelast uden nul
ikon: trefase
intro: Stjerne-trekant-transformation, usymmetrisk Y-last uden nul, stjernepunktets forskydning, Millmans formel og vektordiagrammer.
---
# Noter

> **Kilder**
> PP7 Stjerne-trekant transformation, 3-faset Y-forbundet belastning u. nul · Obligatorisk opgavesæt 3, opgave 3 og 6

Er en stjernelast symmetrisk, er det lige meget, om nullen er tilsluttet. Er den usymmetrisk og uden nul, kan strømmene ikke længere løbe tilbage i nullen. De skal summere til nul, og det tvinger lastens stjernepunkt væk fra nettets nulpunkt. Fasespændingerne over lasten bliver forskellige.

## Usymmetrisk Y-last med nul

Med nul ligger lastens stjernepunkt fast på nettets nulpunkt. Hver last får sine 230 V, og strømmene regnes hver for sig:

```
I1 = U_1N / Z1      I2 = U_2N / Z2      I3 = U_3N / Z3      I_N = I1 + I2 + I3   (vektorielt)
```

## Usymmetrisk Y-last uden nul

Uden nul skal I1 + I2 + I3 = 0. Lastens stjernepunkt X flytter sig mod den fase, der har **mindst impedans**. Fasen med **størst impedans** får den højeste spænding.

Der er to måder at regne det:

**Metode 1: Y-Δ-transformation (slides).** Omregn stjernen til en ækvivalent trekant. Trekanten ligger direkte på netspændingerne, så grenstrømmene er lette at regne. Bagefter findes netstrømmene og spændingerne over de oprindelige stjernemodstande.

**Metode 2: Millmans formel (går ud over slides).** Stjernepunktets forskydning regnes direkte:

```
U_X0 = (U_1N/Z1 + U_2N/Z2 + U_3N/Z3) / (1/Z1 + 1/Z2 + 1/Z3)
Spænding over last i:  U_iX = U_iN − U_X0
```

<details markdown="1"><summary>Forudsig først: R1 = 80 Ω, R2 = 125 Ω og R3 = 45 Ω uden nul. Hvilken modstand får den højeste spænding?</summary>

R2 (125 Ω, den største). Stjernepunktet trækkes mod L3, fordi R3 er mindst. Tjek i modellen.
</details>

<div class="m" data-m="stjerne"></div>

## Y-Δ-transformation

```
Y → Δ:   R12 = (R10·R20 + R20·R30 + R30·R10) / R30
         R23 = (R10·R20 + R20·R30 + R30·R10) / R10
         R31 = (R10·R20 + R20·R30 + R30·R10) / R20

Δ → Y:   R10 = R12 · R31 / (R12 + R23 + R31)
         R20 = R12 · R23 / (R12 + R23 + R31)
         R30 = R23 · R31 / (R12 + R23 + R31)
```

Huskeregel Y → Δ: tælleren er den samme for alle tre (summen af de parvise produkter), og nævneren er den stjernemodstand, der sidder **over for** trekantgrenen. Ved symmetri er R_Δ = 3 · R_Y.

Beregningen bagefter:

1. Grenstrømme i trekanten: I_12 = U_12 / R12, I_23 = U_23 / R23, I_31 = U_31 / R31.
2. Netstrømme (Kirchhoff i hjørnerne): I1 = I_12 − I_31, I2 = I_23 − I_12, I3 = I_31 − I_23.
3. Spændinger over stjernemodstandene: U_1X = I1 · R10 osv.
4. Stjernepunktets forskydning: U_X0 = U_10 − U_1X (skal give det samme for alle tre faser, det er din kontrol).

> **Trykfejl på slides (PP7, slide 5)**
> Netstrømmen i L2 står som I2 = I23 + (−I21). Det skal være I2 = I23 + (−I12), altså I23 − I12. Med −I21 (= +I12) får du et forkert resultat.

### Gennemregnet eksempel (opgavesæt 3, opgave 6)

Tre ukendte modstande i Y. Ohmmeteret viser 205 Ω mellem 1 og 2, 170 Ω mellem 2 og 3 og 125 Ω mellem 3 og 1.

<details markdown="1"><summary>Vis udregning</summary>

**Modstandene:** R1 + R2 = 205, R2 + R3 = 170, R3 + R1 = 125. Læg alle tre sammen: 2(R1 + R2 + R3) = 500, så summen er 250. R1 = 250 − 170 = **80 Ω**, R2 = 250 − 125 = **125 Ω**, R3 = 250 − 205 = **45 Ω**.

**Med nul (3 × 400/230 V):**

| Størrelse | Udregning | Resultat |
|---|---|---|
| I1 | 230∠0° / 80 | 2,875 A ∠ 0° |
| I2 | 230∠−120° / 125 | 1,84 A ∠ −120° |
| I3 | 230∠120° / 45 | 5,11 A ∠ 120° |
| I_N | I1 + I2 + I3 | 2,90 A ∠ 102° |

**Uden nul (voltmeter mellem X og N):**

| Størrelse | Udregning | Resultat |
|---|---|---|
| Fælles tæller | 80·125 + 125·45 + 45·80 | 19.225 Ω² |
| R12, R23, R31 | 19.225/45, 19.225/80, 19.225/125 | 427,2 · 240,3 · 153,8 Ω |
| I_12, I_23, I_31 | 400∠30°/427,2 · 400∠−90°/240,3 · 400∠150°/153,8 | 0,936 · 1,665 · 2,601 A |
| I1 = I_12 − I_31 | | 3,17 A ∠ −15,2° |
| I2 = I_23 − I_12 | | 2,28 A ∠ −110,8° |
| I3 = I_31 − I_23 | | 3,72 A ∠ 127,2° |
| U over R1, R2, R3 | 3,17·80 · 2,28·125 · 3,72·45 | 254 · 285 · 168 V |
| Voltmeteret U_X0 | 230,9∠0° − 254∠−15,2° | 68 V ∠ 102° |

Kontrol: U_X0 regnet fra fase 2 og 3 giver også 68 V ∠ 102°. Den største modstand (R2) får 285 V, den mindste (R3) kun 168 V. Den samlede effekt falder fra 2,28 kW med nul til 2,08 kW uden.
</details>

## En fase falder ud (opgavesæt 3, opgave 3)

En vandvarmer på 15 kW (resistiv, 3 × 400 V). Hvad sker der, når L3 afbrydes?

| Kobling | Før | L3 afbrudt | Effekt |
|---|---|---|---|
| Y, 3 × 10,67 Ω (I = 21,7 A) | 230 V over hver | Z1 og Z2 i serie på 400 V, 200 V over hver | 2 · 200² / 10,67 = 7,5 kW |
| Δ, 3 × 32 Ω (I = 21,7 A) | 400 V over hver | Z12 på 400 V, Z23 + Z31 i serie på 400 V | 400²/32 + 400²/64 = 7,5 kW |

Begge koblinger mister halvdelen af effekten.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor flytter stjernepunktet sig kun, når nullen er væk?
2. Mod hvilken fase flytter stjernepunktet?
3. Hvad er tælleren i Y → Δ-formlen?
4. Hvordan kontrollerer du din beregning af U_X0?

<details markdown="1"><summary>Svar</summary>

1. Med nul ligger stjernepunktet fast på nettets nulpunkt, og nullen tager differensstrømmen. Uden nul skal strømmene summere til nul.
2. Mod fasen med mindst impedans.
3. R10·R20 + R20·R30 + R30·R10, den samme for alle tre.
4. Regn U_X0 = U_i0 − U_iX for alle tre faser. Det skal give det samme.
</details>
</div>

# Formler

### Y → Δ
```
R12 = (R10·R20 + R20·R30 + R30·R10) / R30
R23 = (R10·R20 + R20·R30 + R30·R10) / R10
R31 = (R10·R20 + R20·R30 + R30·R10) / R20
```

### Δ → Y
```
R10 = R12·R31 / (R12 + R23 + R31)
R20 = R12·R23 / (R12 + R23 + R31)
R30 = R23·R31 / (R12 + R23 + R31)
Symmetrisk: R_Δ = 3 · R_Y
```

### Strømme og forskydning
```
I_12 = U_12 / R12     I_23 = U_23 / R23     I_31 = U_31 / R31
I1 = I_12 − I_31      I2 = I_23 − I_12      I3 = I_31 − I_23
U_iX = I_i · R_i0     U_X0 = U_i0 − U_iX
Millman:  U_X0 = Σ(U_i0 / Z_i) / Σ(1 / Z_i)
```

# Quiz

Q: Ohmmeteret viser 205, 170 og 125 Ω mellem klemmerne 1–2, 2–3 og 3–1 på en stjerne. Hvad er R1? (Ω)
N: 80 ; 0,5 ; Ω
L: Summen af alle tre er (205 + 170 + 125)/2 = 250 Ω. R1 = 250 − R2 − R3 = 250 − 170 = 80 Ω.
F: Mellem to klemmer måles to stjernemodstande i serie.

Q: Tre stjernemodstande er 80, 125 og 45 Ω. Hvad er R12 i den ækvivalente trekant? (Ω)
N: 427,2 ; 0,5 ; Ω
L: R12 = (80·125 + 125·45 + 45·80) / 45 = 19.225 / 45 = 427,2 Ω.
F: Nævneren er stjernemodstanden over for grenen (R30).

Q: En symmetrisk stjerne har 30 Ω pr. gren. Hvad er hver gren i den ækvivalente trekant? (Ω)
N: 90 ; 0,1 ; Ω
L: R_Δ = 3 · R_Y = 90 Ω.
F: Det er den samme regel, der giver P_Δ = 3 · P_Y for samme modstande.

Q: En usymmetrisk Y-last uden nul: hvilken fase får den højeste spænding?
A: Fasen med mindst impedans
R: Fasen med størst impedans
A: Alle får 230 V
A: L1
F: Stjernepunktet trækkes mod den mindste impedans, så den største får mest spænding.

Q: Hvad er den rigtige netstrøm i L2 ud fra trekantens grenstrømme?
A: I2 = I_23 + I_12
R: I2 = I_23 − I_12
A: I2 = I_12 − I_31
A: I2 = I_31 − I_23
F: I hjørne 2 løber I_23 ud og I_12 ind. Sliden har en trykfejl her.

Q: Med 80/125/45 Ω uden nul er U_X0 ca. 68 V. Hvad sker der med den samlede effekt i forhold til med nul?
A: Den stiger
R: Den falder
A: Den er uændret
A: Den bliver nul
F: Spændingen flyttes fra de små modstande (som tog mest effekt) over på den store. P falder fra 2,28 kW til 2,08 kW.

Q: En Y-koblet vandvarmer på 15 kW mister L3. Hvor meget effekt afgiver den nu? (kW)
N: 7,5 ; 0,1 ; kW
L: R = (400/√3)² / 5.000 = 230,9² / 5.000 = 10,67 Ω. Uden L3 sidder to modstande i serie på 400 V: P = 400² / 21,33 = 7.500 W.
F: Den tredje modstand er strømløs.

Q: Hvordan kontrollerer du din beregning af stjernepunktets forskydning?
R: Regn U_X0 = U_i0 − U_iX for alle tre faser og se, at de giver det samme
A: Læg de tre fasespændinger sammen
A: Tjek at strømmene er lige store
A: Det kan ikke kontrolleres
F: Stjernepunktet har kun én placering, så alle tre veje skal give samme vektor.
