id: kondensator-eksamen
navn: Alt du skal bruge til eksamen: Kondensatoren
ikon: kondensator
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at skitsere et strøm-spændingsdiagram ud fra fasekompensering."

Hvis du kun når én ting: kunne tegne vektordiagrammet før og efter fasekompensering (U som reference, I_w vandret, I_wl nedad, I_C opad) og effekttrekanten med Q_C, og forklare hvad der er vundet.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | C = Q / U = ε₀ε_r · A / a | Kapacitans |
| 2 | E = U / a og D = Q / A | Feltstyrke og fluxtæthed |
| 3 | F = Q1Q2 / (4πε₀ε_r r²) | Coulombs lov |
| 4 | Serie: C = (C1⁻¹ + C2⁻¹)⁻¹, parallel: C = C1 + C2 | Sammenkobling |
| 5 | X_C = 1 / (ωC) | Reaktans |
| 6 | τ = RC, u_C = U(1 − e^(−t/τ)) | Opladning |
| 7 | Q_C = P(tan φ₁ − tan φ₂) | Fasekompensering |
| 8 | C = Q_C / (ω · U²) | Kondensatorens størrelse |

## 2 · Det du skal kunne forklare

### Fasekompensering

**Pointe:** en kondensator i parallel med en induktiv last leverer den wattløse strøm lokalt, så nettet kun leverer den aktive strøm og lidt reaktiv.

**Hvorfor:** kondensatorens strøm ligger 90° før spændingen, og lastens wattløse strøm ligger 90° efter. De peger modsat og ophæver hinanden.

**Hvad vinder man:** mindre strøm i kabler og transformere, mindre tab (R · I²), mindre spændingsfald, og elselskabet tager betaling for reaktiv effekt. P er uændret.

**Tal du kan nævne:** lysstofrøret i opgavesæt 2, opgave 6: strømmen falder fra 0,25 A til 0,15 A med en kondensator på 1,81 µF, mens den aktive strøm på 0,122 A er den samme.

### Elektrisk felt og dielektrikum

**Pointe:** feltet mellem pladerne er E = U / a. Et dielektrikum med højt ε_r gør, at pladerne kan rumme mere ladning ved samme spænding.

**To lag i serie:** samme D i begge lag, så E = D/ε er størst i laget med lavest ε. Luft i serie med PVC (ε_r = 7) får 7 gange feltet. Derfor er luftlommer i isolation farlige.

### Op- og afladning

**Pointe:** spændingen kan ikke springe over en kondensator. Den følger en e-funktion med τ = RC: 63 % efter 1τ og færdig efter ca. 5τ.

### Kabler og luftledninger

**Pointe:** et kabel har kapacitans mellem lederne og mod skærm/jord, så det trækker en ladestrøm, selv når det er ubelastet. Kabler har mere kapacitans end luftledninger.

## 3 · Det du skal kunne tegne

1. Pladekondensatoren med feltlinjer, +Q og −Q, og afstanden a.
2. Op- og afladningskurven med 63 % og 37 % markeret ved 1τ.
3. **Vektordiagrammet for fasekompensering:** U vandret, I_w langs U, I_wl lodret ned, I før kompensering som resultant, I_C lodret op, I_ny som den nye resultant med mindre vinkel.
4. **Effekttrekanten:** P vandret, Q₁ lodret, S₁ som hypotenuse. Q_C trækkes fra oppefra, så Q₂ og S₂ bliver mindre.
5. Diagrammet med kondensatoren i parallel med en spole og en modstand (I2 i lasten, I_C i kondensatoren, I1 fra nettet).

<details markdown="1"><summary>Tjek din skitse af vektordiagrammet</summary>

I_w (wattstrømmen) ligger langs U og er den samme før og efter. I_wl før peger ned. I_C peger op og er kortere end I_wl, så der stadig er lidt induktiv strøm tilbage. Den nye strøm er kortere og ligger tættere på U.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor kompenserer man ikke helt til cos φ = 1?</summary>

Ved lav last ville anlægget blive kapacitivt (overkompenseret), og spændingen kan stige. Der er også risiko for resonans mellem kondensatorerne og nettets induktans, især med harmoniske.
</details>

<details markdown="1"><summary>Hvad sker der med strømmen i den induktive last, når du sætter kondensatoren på?</summary>

Intet. Lasten får samme spænding og trækker samme strøm. Det er kun strømmen fra nettet (før knudepunktet), der bliver mindre.
</details>

<details markdown="1"><summary>Hvor skal kondensatorbatteriet sidde, Y eller Δ?</summary>

I Δ får hver kondensator 400 V i stedet for 230 V, så C bliver 3 gange mindre for samme Q_C. Til gengæld skal de tåle højere spænding. (Opgavesæt 3, opgave 7: 29,9 µF i Δ mod 89,6 µF i Y.)
</details>

<details markdown="1"><summary>Hvorfor er en opladet kondensator farlig efter afbrydelse?</summary>

Den holder sin ladning, indtil den aflades gennem en modstand. I store anlæg sidder der afladningsmodstande, men du skal altid måle, før du rører.
</details>

<details markdown="1"><summary>Hvad sker der med C, hvis afstanden mellem pladerne halveres og ε_r fordobles?</summary>

C = εA/a bliver 2 · 2 = 4 gange større.
</details>

## 5 · Faldgruber

- C i serie og parallel regnet som modstande (det er omvendt).
- 230 V brugt i stedet for 400 V for et Δ-koblet batteri.
- Q_C regnet som P · tan φ₂ i stedet for forskellen.
- Wattstrømmen tegnet anderledes efter kompensering.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

En kondensator er to plader med et dielektrikum imellem. C = εA/a. Feltet er E = U/a, og i lag i serie får det materiale med lavest ε den største feltstyrke. Parallel lægges kapacitanser sammen, i serie regnes de som modstande i parallel. Den oplades med τ = RC: 63 % efter 1τ, færdig efter 5τ. I AC ligger strømmen 90° før spændingen, og X_C = 1/(ωC). Det udnyttes til fasekompensering: kondensatorens strøm ophæver lastens wattløse strøm, så nettet leverer mindre strøm ved samme P. Q_C = P(tan φ₁ − tan φ₂) og C = Q_C/(ωU²).
</details>
</div>
