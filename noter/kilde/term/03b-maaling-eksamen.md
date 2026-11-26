id: maaling-eksamen
navn: Alt du skal bruge til eksamen: Måling og måleusikkerhed
ikon: maal
intro: De vigtigste formler, det du skal kunne forklare, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen for Grundlæggende termodynamik stod ikke i materialet. Tjek læringsmålene. Siden er bygget, så du kan både regne og forklare emnet mundtligt.

Hvis du kun når én ting: kunne forklare forskellen på systematiske og tilfældige fejl, og hvorfor et måleresultat skal have en usikkerhed.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | x̄ = Σx / n | Middelværdi |
| 2 | s = √(Σ(x − x̄)² / (n − 1)) | Spredning på den enkelte måling |
| 3 | u = s / √n | Standardusikkerhed på middelværdien (type A) |
| 4 | u_c = √(u₁² + u₂² + …) | Flere uafhængige bidrag |
| 5 | U = k · u_c, k = 2 | Udvidet usikkerhed, ca. 95 % |
| 6 | u = (opløsning/2) / √3 | Opløsning som bidrag (type B) |

## 2 · Det du skal kunne forklare

### Hvad er en måling?

**Pointe:** en sammenligning med en kendt reference. Resultatet er kun komplet med en usikkerhed og en enhed.

### Systematiske og tilfældige fejl

**Pointe:** systematiske fejl er ens hver gang og fjernes ved kalibrering. Tilfældige fejl svinger og bliver mindre i middelværdien, jo flere målinger.

**Eksempel:** en 2-leder Pt100 viser altid 2,6 °C for meget (systematisk). Støj på signalet giver ±0,2 °C (tilfældig).

### Nøjagtighed og præcision

**Pointe:** præcision er gentagelighed (lille spredning), nøjagtighed er tæt på den sande værdi. Skydeskiven er det bedste billede.

### Type A og type B

**Pointe:** type A findes statistisk ud fra gentagne målinger. Type B findes på anden måde: kalibreringsbevis, datablad, opløsning.

### Sporbarhed

**Pointe:** en ubrudt kæde af kalibreringer tilbage til den nationale standard. Uden den kan målinger ikke sammenlignes.

## 3 · Det du skal kunne tegne

1. **Skydeskiven** fire gange: præcis/nøjagtig, præcis/unøjagtig, upræcis/nøjagtig, upræcis/unøjagtig.
2. **En normalfordeling** med middelværdien og ±2u markeret.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hjælper det at måle 100 gange, hvis termometret er forkert kalibreret?</summary>

Nej. Den tilfældige del bliver mindre, men den systematiske fejl er der stadig. Den kræver kalibrering og korrektion.
</details>

<details markdown="1"><summary>Hvorfor lægges usikkerheder sammen kvadratisk?</summary>

Uafhængige bidrag går sjældent i samme retning på samme tid, så de ophæver delvist hinanden. Kvadratisk sum (som Pythagoras) er det statistisk rigtige.
</details>

<details markdown="1"><summary>Hvordan skriver du et resultat korrekt?</summary>

Måleværdi ± udvidet usikkerhed, enhed og dækningsfaktor: 80,1 °C ± 0,6 °C (k = 2). Usikkerheden med 1–2 betydende cifre, og værdien afrundet til samme decimal.
</details>

<details markdown="1"><summary>Fem målinger giver x̄ = 80,10 og s = 0,27 °C. Kalibreringen giver u = 0,3 °C. Resultat?</summary>

u_A = 0,27/√5 = 0,12. u_c = √(0,12² + 0,3²) = 0,32. U = 0,65. Resultat 80,1 ± 0,6 °C (k = 2).
</details>

## 5 · Faldgruber

- Usikkerheder lagt direkte sammen i stedet for kvadratisk.
- Spredningen s brugt som usikkerhed på middelværdien (glemt √n).
- Alt for mange decimaler i resultatet.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

En måling er en sammenligning med en reference, og et resultat skal have en usikkerhed. Systematiske fejl er ens hver gang og fjernes ved kalibrering, tilfældige fejl svinger og mindskes ved at tage middelværdien af flere målinger. Spredningen s beskriver den enkelte måling, og u = s/√n middelværdien. Type B-bidrag fra kalibrering og opløsning lægges sammen kvadratisk med type A, og den udvidede usikkerhed er U = 2 · u_c for ca. 95 %. Sporbarhed er kæden af kalibreringer tilbage til den nationale standard.
</details>
</div>
