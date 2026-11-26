id: trefaset
navn: Trefaset belastning
ikon: trefase
intro: Stjerne og trekant, effekt i 3-fasede systemer, usymmetrisk last med og uden nul, Kirchhoff med tangamperemeter og de tre wattmetermetoder.
---
# Noter

> **Kilder**
> UV 1–4 · FL1 5.5 · UV8 5.4 · Bog 2 kap. 6.5–6.10 og 7.5 · Lab 1

I et 3 × 400/230 V net er netspændingen √3 gange større end fasespændingen, og ved symmetri summerer de tre fasestrømme til nul. Når lasten er usymmetrisk, skal nullen enten føre differensstrømmen, eller stjernepunktet flytter sig.

## Stjerne (Y) og trekant (Δ)

| | Stjerne (Y) | Trekant (Δ) |
|---|---|---|
| Spænding over hver impedans | U_f = U_L / √3 (230 V) | U_L (400 V) |
| Linjestrøm | I_L = I_f | I_L = √3 · I_f |
| Samme impedans Z i hver gren | P_Y | P_Δ = 3 · P_Y |
| Ækvivalent impedans | Z_Y = Z_Δ / 3 | Z_Δ = 3 · Z_Y |

- Samme effekt i begge koblinger kræver R_Δ = 3 · R_Y. Det gælder også X og L. I Lab 1, aktivitet 2 betyder det: skal en Y-koblet spole optage samme Q i Δ, skal L være 3 gange større.
- **Mærkeplade:** "400 V Δ / 690 V Y" kobles i Δ på et 400 V-net. "230 V Δ / 400 V Y" kobles i Y. Forkert kobling giver √3 for høj viklingsspænding.

## Effekt i 3-fasede systemer

Formlerne bruger altid netværdier (U_L og I_L), uanset om lasten er Y eller Δ.

```
S = √3 · U_L · I_L      P = √3 · U_L · I_L · cos φ      Q = √3 · U_L · I_L · sin φ
S² = P² + Q²            S = 3 · U_f · I_f*  (kompleks)
```

- Strømme lægges sammen vektorielt, aldrig aritmetisk. Resistiv og induktiv last i parallel: I = √(I_w² + I_b²).
- Reaktiv effekt for en spole: Q = U² / X_L, og X_L = 2πfL, så L = X_L / (2πf).

### Gennemregnet eksempel (Lab 1, aktivitet 1 og 2)

Symmetrisk Δ med 320 Ω pr. gren på 400 V, og derefter en symmetrisk Y-koblet spole med X_L = 100 Ω i parallel. Regn I_L, P, Q, L og den samlede linjestrøm, før du åbner.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| I_f (Δ) | 400 / 320 | 1,25 A |
| I_L (Δ) = I_w | √3 · 1,25 | 2,17 A |
| P | 3 · 400² / 320 = 3 · 500 | 1.500 W |
| I_L (Y-spole) = I_b | 230 / 100 | 2,30 A |
| Q | 3 · 230² / 100 | 1.587 var |
| L | 100 / (2π · 50) | 0,318 H |
| Samlet I_L | √(2,17² + 2,30²) | 3,16 A |

Skulle spolen yde samme Q i Δ, skal X_L være 300 Ω, altså L = 0,955 H.
</details>

## Usymmetrisk belastning

**Med nul (4-leder):** hver fase får sine 230 V uanset lasten. Nulstrømmen er vektorsummen af fasestrømmene: I_N = I_1 + I_2 + I_3 (komplekst). Med ikke-lineære laster (LED, PC, omformere) kan nulstrømmen blive større end fasestrømmen, fordi 3. harmoniske lægges sammen i nullen.

**Uden nul (3-leder):** stjernepunktet forskydes mod den fase, der har mindst impedans. Fasen med størst impedans får højest spænding. Forskydningen findes med Millmans sætning, eller ved at omregne lasten fra Y til Δ, så den regnes som trekant på 400 V.

<details markdown="1"><summary>Forudsig først: R1 = 200, R2 = 160 og R3 = 320 Ω. Hvilken fase får højest spænding, når nullen fjernes?</summary>

R3, fordi den har størst modstand. Stjernepunktet trækkes mod R2 (mindst modstand), så R2 får lavest spænding. Prøv det i modellen herunder.
</details>

<div class="m" data-m="stjerne"></div>

Med 200/160/320 Ω og nul er I_N ≈ 0,63 A og P ≈ 760 W. Uden nul forskydes stjernepunktet ca. 44 V, faserne får 229 / 197 / 271 V, og P falder til ca. 733 W.

> **Hvorfor falder P uden nul?**
> Spændingen flyttes væk fra de små modstande, som tog mest effekt, og over på den store.

Afbrudt nul i en landinstallation giver det samme fænomen. Apparater på den let belastede fase kan få op mod 400 V.

## Kirchhoffs 1. lov med tangamperemeter

- **3-leder:** tang om L1+L2+L3 viser altid 0. Tang om to ledere viser strømmen i den tredje (den, der mangler).
- **4-leder:** L1+L2+L3 viser nulstrømmen. L1+L2+L3+N viser 0.

## Wattmetermetoder

| Metode | Net | Belastning | Samlet effekt |
|---|---|---|---|
| 1-wattmeter | Adgang til N (eller kunstigt nulpunkt) | Kun symmetrisk | P = 3 · W |
| 3-wattmeter | 4-leder | Vilkårlig | P = W1 + W2 + W3 |
| 2-wattmeter (Aron) | 3-leder uden nul | Vilkårlig | P = W1 + W2 (med fortegn) |

Aron-koblingen har strømspoler i to faser og spændingsspoler mod den tredje. Den virker, fordi I1 + I2 + I3 = 0. Wattmeterets visning er generelt U_spændingsspole · I_strømspole · cos(vinklen mellem netop de to vektorer).

<details markdown="1"><summary>Forudsig først: ved hvilken cos φ viser det ene wattmeter 0?</summary>

Ved cos φ = 0,5 (φ = 60°), fordi cos(30° + 60°) = cos 90° = 0. Under 0,5 bliver visningen negativ, og det er ikke en fejl.
</details>

<div class="m" data-m="aron"></div>

> **Typiske fejl i Lab 1**
> Strømme lagt sammen som tal i stedet for vektorer · √3 på den forkerte side i Δ · 1-wattmetermetoden brugt på usymmetrisk last · 230 V pr. fase brugt i aktivitet 4, hvor nullen er fjernet.

## Lab 1 kort

| Aktivitet | Opstilling | Målemetode | Pointe |
|---|---|---|---|
| 1 | Symmetrisk Δ, resistiv (320 Ω pr. gren) | 1-wattmeter | KCL med tang, P = 3 · W |
| 2 | + symmetrisk Y induktiv (X_L = 100 Ω) i parallel | 1-wattmeter | Vektoriel sum af strømme, beregn L |
| 3 | Usymmetrisk Y med nul (fx 200/160/320 Ω) | 3-wattmeter | Nulstrøm, KCL |
| 4 | Samme, nul fjernet | 2-wattmeter (Aron) | Stjernepunktsforskydning, lavere samlet P |

> **Mere til labøvelse 1**
> [Labnoterne](../../modeller/el2/lab1-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab1.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab1-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor bruger effektformlen √3 · U_L · I_L både for Y og Δ?
2. Hvad viser en tang om L1+L2+L3 i et 4-ledernet?
3. Hvorfor kan nulstrømmen blive større end fasestrømmen?
4. Tegn vektordiagrammet for U1, U2, U3 og stjernepunktet N' uden nul.

<details markdown="1"><summary>Svar</summary>

1. I Y er I_L = I_f og U_f = U_L/√3. I Δ er U_f = U_L og I_f = I_L/√3. I begge tilfælde bliver 3 · U_f · I_f = √3 · U_L · I_L.
2. Nulstrømmen (vektorsummen af fasestrømmene).
3. Ved ikke-lineære 1-fasede laster er 3. harmoniske i fase i alle tre faser, så de lægges sammen i nullen i stedet for at udligne hinanden.
4. Spændingstrekanten ligger fast. N' trækkes mod hjørnet for fasen med mindst impedans, og pilene fra N' til hjørnerne er fasespændingerne over lasten.
</details>
</div>

# Formler

### Stjerne og trekant
```
Y:  U_L = √3 · U_f     I_L = I_f
Δ:  U_L = U_f          I_L = √3 · I_f
Z_Δ = 3 · Z_Y          (samme effekt)
```

### Effekt
```
S = √3 · U_L · I_L
P = √3 · U_L · I_L · cos φ
Q = √3 · U_L · I_L · sin φ
S² = P² + Q²
```

### Reaktans
```
X_L = 2πfL          X_C = 1 / (2πfC)
Q = U² / X          L = X_L / (2πf)
```

### Usymmetrisk last
```
Med nul:   I_N = I_1 + I_2 + I_3                   (komplekst)
Uden nul:  U_N'N = (U_1·Y_1 + U_2·Y_2 + U_3·Y_3) / (Y_1 + Y_2 + Y_3)   (Millman)
Y → Δ:     R_12 = (R_1R_2 + R_2R_3 + R_3R_1) / R_3   osv.
```

### Wattmetre
```
1-wattmeter (symmetrisk):  P = 3 · W
3-wattmeter:               P = W1 + W2 + W3
Aron (3-leder):            P = W1 + W2     (med fortegn)
Symmetrisk last:           W_a = U_L·I_L·cos(30° + φ)
                           W_b = U_L·I_L·cos(30° − φ)
                           Q = √3 · (W_b − W_a)
```

# Quiz

Q: En symmetrisk trekantlast har 320 Ω i hver gren på et 400 V-net. Hvad er den samlede effekt? (W)
N: 1500 ; 5 ; W
L: Hver gren får 400 V: P_gren = 400² / 320 = 500 W. P = 3 · 500 = 1.500 W.
F: I Δ ligger netspændingen direkte over hver impedans.

Q: Samme tre modstande kobles i stjerne i stedet. Hvad sker der med effekten?
A: Den bliver √3 gange mindre
R: Den bliver 3 gange mindre
A: Den er uændret
A: Den bliver 3 gange større
F: Hver modstand får 230 V i stedet for 400 V, og effekten følger U²: (1/√3)² = 1/3.

Q: En resistiv strøm på 2,17 A og en induktiv strøm på 2,30 A løber i samme linje. Hvad er linjestrømmen? (A, 2 decimaler)
N: 3,16 ; 0,02 ; A
L: I = √(2,17² + 2,30²) = √(4,71 + 5,29) = √10,0 = 3,16 A.
F: Strømmene står 90° på hinanden, så de lægges sammen vektorielt.

Q: En spole skal have X_L = 100 Ω ved 50 Hz. Hvad er L? (H, 3 decimaler)
N: 0,318 ; 0,002 ; H
L: L = X_L / (2πf) = 100 / 314,16 = 0,318 H.
F: X_L = 2πfL.

Q: En usymmetrisk Y-last kører uden nul. Hvilken fase får den højeste spænding?
A: Fasen med mindst impedans
R: Fasen med størst impedans
A: Alle får 230 V
A: Den fase, der er sluttet til L1
F: Stjernepunktet trækkes mod den fase, der har mindst impedans, så den store impedans får mest spænding.

Q: Hvilken wattmetermetode må du bruge på en usymmetrisk last i et 3-ledernet uden nul?
A: 1-wattmetermetoden
R: 2-wattmetermetoden (Aron)
A: 3-wattmetermetoden med N
A: Ingen af dem
F: Aron virker for vilkårlig last, fordi I1 + I2 + I3 = 0 i et 3-ledernet.

Q: Ved symmetrisk last viser det ene wattmeter i Aron-koblingen negativt. Hvad betyder det?
A: Wattmeteret er koblet forkert
R: cos φ er under 0,5
A: Lasten er kapacitiv
A: Der er en jordfejl
F: W_a = U·I·cos(30° + φ) bliver negativ, når φ > 60°. Visningen skal tælles med fortegn.

Q: Du sætter tang om L1, L2 og L3 i et 3-ledernet. Hvad viser den?
R: 0 A
A: Summen af de tre strømme som tal
A: Nulstrømmen
A: √3 gange fasestrømmen
F: Kirchhoffs 1. lov: uden nul skal den samlede strøm ind være nul.
