id: usymmetrisk
navn: Usymmetrisk belastning med nul
ikon: trefase
intro: 1-, 2- og 3-fasede belastninger på samme 4-ledernet, knudepunktsligninger, nulstrømmen og strøm-spændingsdiagrammer.
---
# Noter

> **Kilder**
> PP8 Usymmetrisk belastning af 3-faset net m. nul · Obligatorisk opgavesæt 3, opgave 5

I en virkelig installation sidder der laster af alle slags på samme net: 3-fasede motorer, 2-fasede laster mellem to faser (400 V) og 1-fasede laster mellem fase og nul (230 V). Strømmen i hver faseleder er summen af strømmene til de laster, der hænger på den. Nullen fører differensen.

## De tre slags tilslutning

| Tilslutning | Spænding | Strømmens vinkel (når U_1N er 0°) |
|---|---|---|
| 1-faset L1–N | U_1N = 230 V ∠ 0° | 0° − φ |
| 1-faset L2–N | U_2N = 230 V ∠ −120° | −120° − φ |
| 1-faset L3–N | U_3N = 230 V ∠ 120° | 120° − φ |
| 2-faset L1–L2 | U_12 = 400 V ∠ 30° | 30° − φ (strømmen løber ud i L1 og tilbage i L2) |
| 2-faset L2–L3 | U_23 = 400 V ∠ −90° | −90° − φ |
| 2-faset L3–L1 | U_31 = 400 V ∠ 150° | 150° − φ |
| 3-faset symmetrisk | U_1N, U_2N, U_3N | Hver fase φ efter sin fasespænding |

φ er positiv for induktiv last (strømmen ligger efter).

## Knudepunktsligninger

Opstil Kirchhoffs 1. lov for hver faseleder. Med en motor (m), en 2-faset transformer mellem L2 og L3 (t23) og en 1-faset lampe mellem L1 og N (l10) som på slide 6:

```
I_L1 = I_m1 + I_l10
I_L2 = I_m2 + I_t23
I_L3 = I_m3 − I_t23      (strømmen fra L2 til L3 løber tilbage i L3)
I_0  = −I_l10            (nullen fører kun de 1-fasede strømme tilbage)
```

Den 3-fasede motor bidrager ikke til nullen, fordi dens tre strømme summerer til nul. En 2-faset last bidrager heller ikke: den har ingen forbindelse til nul.

## Nulstrømmen

```
I_N = −(I_L1 + I_L2 + I_L3)
```

Med tre ens resistive 1-fasede laster er nulstrømmen 0. Med forskellige laster eller forskellige cos φ bliver den forskellig fra 0, og den kan i særlige tilfælde blive større end den største fasestrøm (fx ved 3. harmoniske fra elektronik, hvor bidragene er i fase og lægges sammen).

<details markdown="1"><summary>Forudsig først: 10 A resistivt på L1–N og 10 A resistivt på L2–N, intet på L3. Hvad er I_N?</summary>

10 A. To lige store strømme med 120° imellem giver en sum på samme størrelse. Nullen fører det, L3 ville have ført. Prøv i modellen: sæt I3 til 0.
</details>

<div class="m" data-m="nulstrom"></div>

### Gennemregnet eksempel (opgavesæt 3, opgave 5)

På 3 × 400/230 V skal tilsluttes: en 1-faset motor på 400 V, 7,2 A, cos φ = 0,84, en induktiv last på 230 V, 1,4 kVA, cos φ = 0,65 (skal på L1–N), og et varmelegeme på 230 V, 2,5 kW. Varmelegemet placeres, så nulstrømmen bliver mindst. Motoren placeres, så forskellen mellem største og mindste fasestrøm bliver mindst.

<details markdown="1"><summary>Vis udregning</summary>

**Placering af varmelegemet:** den induktive last har strømmen ∠ −49,5°. Nulstrømmen bliver mindst, hvis varmelegemets strøm peger så modsat som muligt, altså tæt på −49,5° + 180° = 130,5°. Af 0°, −120° og 120° er 120° tættest, så varmelegemet sættes på **L3–N**.

| Varmelegeme på | L1–N | L2–N | L3–N |
|---|---|---|---|
| I_N | 15,5 A | 14,1 A | **5,0 A** |

**Placering af motoren:** prøv alle tre muligheder.

| Motor på | I_L1 / I_L2 / I_L3 | Forskel |
|---|---|---|
| L1–L2 | 12,2 / 7,2 / 10,9 A | **5,0 A** |
| L2–L3 | 6,1 / 7,2 / 15,5 A | 9,5 A |
| L3–L1 | 13,2 / 0 / 18,1 A | 18,1 A |

**Strømmene med motoren på L1–L2:**

| Strøm | Udregning | Resultat |
|---|---|---|
| I_motor | 7,2 ∠ (30° − 32,9°) | 7,2 A ∠ −2,9° |
| I_induktiv | (1.400/230) ∠ −49,5° | 6,09 A ∠ −49,5° |
| I_varme | (2.500/230) ∠ 120° | 10,87 A ∠ 120° |
| I_L1 = I_motor + I_induktiv | | 12,2 A ∠ −24,1° |
| I_L2 = −I_motor | | 7,2 A ∠ 177,1° |
| I_L3 = I_varme | | 10,87 A ∠ 120° |
| I_N | størrelsen af I_induktiv + I_varme | 5,0 A |
</details>

## Sådan tegner du strøm-spændingsdiagrammet

1. Tegn U_1N, U_2N og U_3N fra nulpunktet med 120° imellem og netspændingstrekanten mellem spidserne.
2. Tegn hver lasts strøm fra spidsen af den spænding, den sidder på (1-faset: fra fasespændingen; 2-faset: langs netspændingen, drejet φ).
3. Læg strømmene i hver faseleder sammen spids til hale. Resultanten er I_L1, I_L2 og I_L3.
4. I_N er den vektor, der lukker figuren: −(I_L1 + I_L2 + I_L3).
5. Skriv målestokken på (fx 1 cm = 2 A).

> **Bemærk om slides (PP8, slide 2)**
> Slide 2 er en kopi af PP5's oversigt over R, L og C. Vektordiagrammerne har samme fortegnsproblem: φ = −90° ved spolen. Brug φ = +90° (strømmen efter spændingen).

<div class="genkald" markdown="1">
### Test dig selv

1. Hvilke laster bidrager til nulstrømmen?
2. Hvilken vinkel har strømmen i en resistiv last mellem L1 og L2, når U_1N er 0°?
3. Hvorfor sætter man varmelegemet på L3 i eksemplet?
4. Hvad er I_N, hvis alle tre faser har samme resistive 1-fasede last?

<details markdown="1"><summary>Svar</summary>

1. Kun de 1-fasede (mellem fase og nul). 3-fasede symmetriske og 2-fasede laster summerer til nul eller har ingen forbindelse til nul.
2. 30°, samme vinkel som U_12.
3. Varmelegemets strøm (120°) ligger tættest på at være modsat den induktive lasts strøm (−49,5°), så de ophæver mest muligt i nullen.
4. 0 A.
</details>
</div>

# Formler

### Spændingernes vinkler (U_1N = 0°)
```
U_1N = 230∠0°     U_2N = 230∠−120°     U_3N = 230∠120°
U_12 = 400∠30°    U_23 = 400∠−90°      U_31 = 400∠150°
```

### Strøm i en last
```
1-faset:  I = S / U_f = P / (U_f · cos φ)     vinkel = vinkel(U) − φ
2-faset:  I = S / U_n                         vinkel = vinkel(U_n) − φ
```

### Knudepunkter
```
I_L1 = summen af strømme ud på L1  (en 2-faset last tæller + på den ene, − på den anden)
I_N = −(I_L1 + I_L2 + I_L3)
```

# Quiz

Q: En induktiv last på 1,4 kVA, 230 V. Hvor stor er strømmen? (A)
N: 6,09 ; 0,02 ; A
L: I = S / U = 1.400 / 230 = 6,09 A.
F: Brug S (VA), ikke P, når du skal finde strømmen.

Q: Hvilken vinkel har strømmen i en last med cos φ = 0,65 (induktiv) på L1–N, når U_1N er 0°? (°)
N: -49,5 ; 0,3 ; °
L: φ = cos⁻¹ 0,65 = 49,46°. Strømmen ligger efter: −49,5°.
F: Induktiv last: strømmen ligger φ efter spændingen.

Q: En resistiv last sidder mellem L2 og L3. Hvilken vinkel har strømmen, når U_1N er 0°?
A: −120°
R: −90°
A: 120°
A: 30°
F: U_23 ligger på −90°, og en resistiv strøm er i fase med sin spænding.

Q: 10 A resistivt på L1–N og 10 A resistivt på L2–N. Hvad er nulstrømmen? (A)
N: 10 ; 0,05 ; A
L: |10∠0° + 10∠−120°| = |10 − 5 − j8,66| = |5 − j8,66| = 10 A.
F: To lige store strømme med 120° imellem giver en sum af samme størrelse.

Q: Hvilken last bidrager IKKE til strømmen i nullen?
A: En lampe mellem L1 og N
R: En 2-faset transformer mellem L2 og L3
A: Et varmelegeme mellem L3 og N
A: En stikkontakt mellem L2 og N
F: En 2-faset last har ingen forbindelse til nul. Strømmen løber ud i den ene fase og tilbage i den anden.

Q: En transformer sidder mellem L2 og L3. Med hvilket fortegn indgår dens strøm i I_L3?
A: Plus
R: Minus
A: Den indgår ikke
A: Med √3
F: Strømmen løber ud gennem L2 og tilbage gennem L3: I_L3 = I_m3 − I_t23.

Q: Den induktive last på L1–N har strømmen ∠ −49,5°. På hvilken fase skal et varmelegeme sidde for at give mindst nulstrøm?
A: L1–N
A: L2–N
R: L3–N
A: Det er lige meget
F: Varmelegemets strøm skal pege så modsat som muligt (130,5°). L3–N (120°) er tættest.

Q: Kan nulstrømmen blive større end den største fasestrøm?
R: Ja, fx ved 3. harmoniske fra elektronik, som er i fase i alle tre faser og lægges sammen i nullen
A: Nej, aldrig
A: Kun hvis nullen er afbrudt
A: Kun ved rent resistiv last
F: Derfor dimensioneres nullen i nyere installationer med elektronik ofte fuldt.
