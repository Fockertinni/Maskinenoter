id: frekvensomformer-eksamen
navn: Alt du skal bruge til eksamen: Frekvensomformer
ikon: frekvens
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise ved bordet i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Egne noter og rapporter må ikke medbringes, så alt herunder skal sidde i hovedet.

Hvis du kun når én ting: kunne tegne frekvensomformerens fire dele og forklare, hvorfor den trækker en pulseret strøm fra nettet med høj THDi, mens motoren får en næsten sinusformet strøm.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | U_DC ≈ √2 · U_L ≈ 540–565 V | Mellemkredsen på et 400 V-net |
| 2 | U_d = 1,35 · U_L · cos α | Styret 6-puls thyristorbro |
| 3 | n_2 = 60 · f / p · (1 − s) | Hastighed |
| 4 | U / f = konstant op til 50 Hz | Konstant flux og moment |
| 5 | P ∝ n³ | Pumper og blæsere (affinitetslovene) |
| 6 | h = 6k ± 1 | 6-puls: 5., 7., 11., 13. harmoniske |
| 7 | THD_i = √(Σ I_h²) / I_1 · 100 % | Strømforvrængning |
| 8 | I_RMS = I_1 · √(1 + THD²) | Den faktiske strøm |
| 9 | S² = P² + Q² + D², PF = cos φ_1 · I_1 / I_RMS | Effekter med harmoniske |
| 10 | η_samlet = η_FO · η_motor | Lab 8 |

> **Fælden**
> cos φ og effektfaktoren PF er **ikke** det samme ved harmoniske. En frekvensomformer kan have cos φ ≈ 1 og PF på 0,7.

## 2 · Det du skal kunne forklare

### Halvlederne

| Komponent | Tænder | Slukker |
|---|---|---|
| Diode | Når anoden er positiv | Når strømmen vender |
| Thyristor | Gate-puls + fremadspænding | Når strømmen går i nul |
| Triac | Gate, begge retninger | Ved nulgennemgang |
| IGBT/MOSFET | Når gaten er på | Når gaten slås fra |

**Pointe:** kun transistorer (IGBT) kan slukkes aktivt, derfor bruges de i vekselretteren.

**Styret ensretning:** tændvinklen α sænker middelspændingen. Over 90° bliver U_d negativ, og broen sender energi tilbage til nettet.

### De fire dele

1. **Ensretter:** 6-puls diodebro, laver pulserende DC.
2. **Mellemkreds:** kondensatorer (og DC-spole) udglatter til ca. 540–565 V DC. Evt. bremsechopper.
3. **Vekselretter:** 6 IGBT'er med friløbsdioder danner motorens spænding og frekvens.
4. **Styring:** koblingsmønster, måling og beskyttelse.

**PWM:** fast mellemkredsspænding, og pulsbredderne varieres i et kHz-mønster. Motorens induktans udglatter strømmen til næsten sinus.

### Hastighedsregulering

**Pointe:** U/f holdes konstant op til 50 Hz, så fluxen og momentet er konstant. Over 50 Hz feltsvækning.

**Hvorfor:** fluxen ∝ U / f. Lav frekvens med fuld spænding ville mætte motoren. Boost ved lav frekvens kompenserer spændingsfaldet i R1. Vektorstyring styrer flux og moment direkte.

**Energi:** pumper og blæsere: 20 % lavere hastighed giver ca. halv effekt (0,8³ = 0,51).

### Lineære og ulineære forbrugere

**Pointe:** en ensretter med kondensator leder kun, når netspændingen er højere end kondensatorens. Strømmen kommer i korte, høje pulser.

### Harmoniske og THD

**Pointe:** den pulserede strøm kan skrives som grundtonen plus harmoniske. En 6-puls ensretter giver 5., 7., 11., 13. osv.

**Hvorfor ingen 3.:** i et symmetrisk 3-ledernet er 3. harmoniske i fase i alle faser og har ingen vej uden nul.

**Hvorfor THDu er størst i svage net:** U_h = I_h · h · X_net. Et skib i ø-drift på én generator har stor X_net.

**Konsekvenser:** opvarmning, overbelastet nul (fra 1-fasede ulineære laster), resonans med kompenseringskondensatorer, fejl i elektronik og RCD'er.

**Afhjælpning:** DC- eller AC-spole, 12- eller 18-puls ensretter, passive og aktive filtre, Active Front End.

### Ulemper ved frekvensomformere

Harmoniske i nettet, høje du/dt-pulser (lejestrømme, isolationsbelastning, EMC), skærmet kabel og RCD type B.

### DC-fordeling og reluktansmotor

- **DC-fordeling om bord:** ingen synkronisering, generatorer på variabel hastighed, batterier direkte på skinnen. Ulempe: DC-kortslutninger er svære at afbryde.
- **Reluktansmotor (SynRM):** rotor af formet jern uden vikling og magneter. Kører synkront uden slip og uden rotortab, så virkningsgraden er høj. Kræver frekvensomformer og har lavere effektfaktor end en PM-motor.

## 3 · Det du skal kunne tegne

1. **Blokdiagrammet:** ensretter, mellemkreds, vekselretter, styring og motor.
2. **Netstrømmen** før omformeren: to korte pulser pr. halvperiode.
3. **PWM-spændingen** og den udglattede motorstrøm.
4. **U/f-kurven** med knæk ved 50 Hz og boost ved lav frekvens.
5. **Effektflowet** i Lab 8 med η_FO og η_motor.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor er I_RMS før omformeren anderledes end efter?</summary>

Før omformeren er strømmen pulseret og rig på harmoniske. Efter er den næsten sinusformet, og i tomgang er den mest motorens magnetiseringsstrøm, som omformeren leverer fra mellemkredsen. Den reaktive strøm går ikke gennem nettet.
</details>

<details markdown="1"><summary>I_5 = 20 %, I_7 = 14 %, I_11 = 9 %, I_13 = 7 %. Hvad er THDi?</summary>

√(400 + 196 + 81 + 49) = √726 = 26,9 %.
</details>

<details markdown="1"><summary>Hvorfor skal der RCD type B efter en frekvensomformer?</summary>

En jordfejl efter ensretteren kan give glat DC-fejlstrøm, som en type A ikke kan se.
</details>

<details markdown="1"><summary>Hvorfor sparer en frekvensomformer energi på en pumpe?</summary>

Effekten følger n³. I stedet for at drøvle flowet med en ventil sænkes hastigheden, og 20 % lavere hastighed giver ca. halv effekt.
</details>

<details markdown="1"><summary>Hvad er fordelen ved en reluktansmotor?</summary>

Ingen rotorvikling og intet slip, så ingen rotortab. Højere virkningsgrad og køligere lejer end en asynkronmotor.
</details>

<details markdown="1"><summary>Hvordan nedbringer man harmoniske fra en frekvensomformer?</summary>

DC- eller netspole, 12- eller 18-puls ensretter med fasedrejningstransformer, passive eller aktive filtre, eller Active Front End.
</details>

## 5 · Ved bordet i laboratoriet

Frekvensomformeren i local mode driver reluktansmotoren, belastet af Terco-momentbænken med DC-generator og modstandskasse. THD-meter CA8335, tangens pil mod omformeren.

1. **1.500 o/min:** mål I_RMS før og efter omformeren i tomgang og forklar forskellen.
2. **Tomgang til fuld last:** S, P, Q, Q_D, n og THDi før omformeren. Beregn η_FO, η_motor og η_samlet.
3. **Harmoniske:** mål de ulige harmoniske og regn THDi selv.
4. **1.000 o/min:** virkningsgraderne igen.

## 6 · Faldgruber

- cos φ og PF blandet sammen.
- Harmoniske lagt sammen lineært i stedet for kvadratisk.
- Påstået at 3. harmoniske dominerer fra en 3-faset 6-puls ensretter.
- η_motor regnet uden at omregne n til ω (ω = 2π · n / 60).
- Mellemkredsspændingen sat til 400 V.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Frekvensomformeren ensretter nettet til ca. 560 V DC, udglatter i mellemkredsen og danner med IGBT'er og PWM en spænding med variabel frekvens til motoren. U/f holdes konstant op til 50 Hz, så momentet er konstant. Fordi ensretteren kun leder i korte pulser, trækker den en strøm med 5., 7., 11. og 13. harmoniske. THDi måler forvrængningen, og den samlede strøm er I_1 gange kvadratroden af 1 plus THD². Harmoniske giver varme, belastet nul og spændingsforvrængning, størst i svage net som et skib i ø-drift. Reluktansmotoren kører synkront uden rotortab og kræver en frekvensomformer.
</details>
</div>
