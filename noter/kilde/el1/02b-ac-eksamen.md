id: ac-eksamen
navn: Alt du skal bruge til eksamen: AC-kredse
ikon: sinus
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at tegne/forklare ækvivalentskemaet for en serie eller parallelkreds."

Hvis du kun når én ting: kunne tegne en serie-RLC og en parallel-RLC med vektordiagram, og forklare hvorfor reference er strømmen i den ene og spændingen i den anden.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | X_L = 2πfL | Spolens reaktans, vokser med f |
| 2 | X_C = 1 / (2πfC) | Kondensatorens reaktans, falder med f |
| 3 | Z = R + j(X_L − X_C) | Serie |
| 4 | Z = (Z1⁻¹ + Z2⁻¹)⁻¹ | Parallel |
| 5 | φ = tan⁻¹(X / R) og cos φ = R / Z | Faseforskydning |
| 6 | f₀ = 1 / (2π√(LC)) | Serieresonans |
| 7 | R_p = (R² + X²) / R, X_p = (R² + X²) / X | Serie ↔ parallel ækvivalent |

## 2 · Det du skal kunne forklare

### Fasen i de tre komponenter

**Pointe:** i R er strøm og spænding i fase, i L ligger strømmen 90° efter, i C ligger den 90° før.

**Hvorfor:** spolen modarbejder ændringer i strømmen med sin selvinduktion. Kondensatoren skal have ladning ind, før spændingen over den kan stige, så strømmen kommer først.

### Ækvivalentskemaet

**Pointe:** en virkelig spole eller en sammensat kreds tegnes som én resistans og én reaktans, enten i serie eller i parallel.

**Sådan:** en spole er R_Cu i serie med X_L. En blandet kreds reduceres gren for gren til Z1, Z2 …, og de regnes sammen som i DC. Serie og parallel ækvivalent giver samme Z ved én frekvens: R_p = (R² + X²) / R.

### Serie mod parallel

| | Serie | Parallel |
|---|---|---|
| Fælles størrelse og reference | I | U |
| Det, der lægges sammen vektorielt | Spændingerne | Strømmene |
| Ved resonans | Z mindst, I størst | Z størst, I mindst |

### Resonans

**Pointe:** ved f₀ er X_L = X_C, så reaktanserne ophæver hinanden.

**Tal:** opgavesæt 2, opgave 4 gav C = 25,85 µF for f₀ = 70 Hz. Ved 50 Hz er kredsen kapacitiv (φ = −35°), I = 2,21 A og U_C = 272 V, altså mere end netspændingen.

## 3 · Det du skal kunne tegne

1. Symbol, vektordiagram og kurve for R, L og C hver for sig.
2. Serie-RLC med vektordiagram: I vandret, U_R, U_L og U_C spids til hale, U som resultant.
3. Parallel-RLC med vektordiagram: U som reference, I_R, I_L, I_C og den samlede I.
4. Impedanstrekanten (R vandret, X lodret, Z som hypotenuse) og effekttrekanten.
5. En spole som ækvivalentskema i serie og i parallel.

<details markdown="1"><summary>Tjek din tegning af serie-RLC</summary>

I vandret. U_R langs I. U_L lodret op fra spidsen af U_R. U_C lodret ned fra spidsen af U_L. U går fra start til slut. Er U_L længere end U_C, peger U opad (induktiv), og φ er positiv.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor stiger strømmen i en spole, når du trækker jernkernen ud?</summary>

L afhænger af μ i kernen. Uden jern falder L og dermed X_L = 2πfL, så impedansen falder, og strømmen stiger. Det så I i Lab 4.
</details>

<details markdown="1"><summary>Hvorfor kan U_C være større end netspændingen i en seriekreds?</summary>

U_L og U_C står 180° fra hinanden og ophæver hinanden delvist. Hver for sig er de I · X, og når I er stor tæt på resonans, kan de blive større end U.
</details>

<details markdown="1"><summary>Hvordan finder du R og L i en ukendt spole med tre voltmetre?</summary>

Sæt en kendt R1 i serie. U1, U2 og U3 danner en trekant, og cosinusrelationen giver vinklen. I = U1 / R1. Spolens spænding som vektor er U3 − U1, og Z = U2 / I. R = Z · cos φ_Z og X_L = Z · sin φ_Z.
</details>

<details markdown="1"><summary>Hvad er forskellen på at gange og lægge komplekse tal sammen på lommeregneren?</summary>

Gange og dividere: brug polær form (gang længderne, læg vinklerne sammen). Lægge sammen: brug rektangulær form (a + jb). Det fanger mange fejl, at vinkler bliver lagt sammen ved en addition.
</details>

<details markdown="1"><summary>Hvad viser en negativ vinkel på Z?</summary>

At kredsen er kapacitiv: X_C er større end X_L, og strømmen ligger før spændingen.
</details>

## 5 · Faldgruber

- Spændingerne lagt sammen som tal i stedet for vektorer.
- Grader og radianer blandet sammen på lommeregneren.
- X_C sat ind med plus i en serieimpedans.
- Vinklen på strømmen forvekslet med φ. φ er vinklen fra I til U, så en strøm på ∠+35° med U på ∠0° betyder φ = −35° (kapacitiv).

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

I AC har strøm og spænding en vinkel, så jeg regner med vektorer. R har strøm og spænding i fase, spolen har strømmen 90° efter, kondensatoren 90° før. X_L = 2πfL og X_C = 1/(2πfC). I serie er strømmen fælles og spændingerne lægges vektorielt sammen; i parallel er spændingen fælles og strømmene lægges sammen. Z = R + j(X_L − X_C), og cos φ = R/Z. Ved resonans ophæver X_L og X_C hinanden. Enhver kreds kan tegnes som et ækvivalentskema med én R og én X i serie eller i parallel.
</details>
</div>
