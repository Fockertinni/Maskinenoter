id: haandregler-eksamen
navn: Alt du skal bruge til eksamen: Håndregler og induktion
ikon: magnet
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at forklare felt-, strøm- og kraftretninger v. håndregler i et givent eksempel."

Hvis du kun når én ting: kunne tage en tegning med to magnetpoler og en leder med ⊗ eller ⊙, tegne lederens felt med proptrækkerreglen, finde den stærke og den svage side, og sige hvilken vej kraften går. Vis det også med motorreglen.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | F = B · I · l | Kraft på leder (motor) |
| 2 | E = B · l · v | Induceret spænding i bevæget leder (generator) |
| 3 | e = −N · dΦ/dt | Induktion i spole, minus = Lenz |
| 4 | e_s = −L · di/dt | Selvinduktion |
| 5 | L = μ · A · N² / l | Spolens selvinduktion |
| 6 | τ = L / R, W = ½LI² | Ind- og udkobling |

## 2 · Det du skal kunne forklare

### Retningerne i en tegning

1. **Hovedfeltet** går fra N til S.
2. **Lederens felt** findes med proptrækkerreglen: ⊗ giver felt med uret, ⊙ mod uret.
3. **Kraften:** hvor de to felter peger samme vej, bliver feltet stærkt. Lederen skubbes mod den svage side.
4. **Kontrol med motorreglen (venstre hånd):** felt ind i håndfladen, fingre i strømmens retning, tommelfingeren viser kraften.

### Spolereglen

**Pointe:** grib om spolen med højre hånd, så fingrene følger strømmen. Tommelfingeren peger mod nordpolen. I opgavesæt 1, opgave 1 skal du bruge den baglæns: fra feltlinjerne til polerne og strømretningen.

### Generatorreglen og Lenz

**Pointe:** bevæges en leder gennem et felt, induceres en spænding E = B · l · v. Den strøm, der løber, laver selv en kraft, der bremser bevægelsen (Lenz). Derfor skal en generator drives med et moment, når den leverer strøm.

**Lab 3:** når generatoren blev belastet, faldt omdrejningstallet, og drivmotoren måtte trække mere strøm.

### Selvinduktion og udkobling

**Pointe:** en spole modarbejder ændringer i sin egen strøm. Ved indkobling stiger strømmen med τ = L/R. Ved udkobling uden friløbsdiode bliver di/dt enorm, og spændingsspidsen giver gnister.

## 3 · Det du skal kunne tegne

1. Feltlinjer om en stangmagnet (N → S udenfor).
2. Feltet om en leder med ⊗ og med ⊙.
3. En leder i et hovedfelt med det samlede feltbillede, stærk og svag side, og kraftpilen.
4. To parallelle ledere: samme strømretning tiltrækker, modsat frastøder (slide 2).
5. En spole med strømretning og N og S.
6. Ind- og udkoblingskurverne for strømmen i en spole med 1τ markeret, og kredsen med friløbsdiode.

<details markdown="1"><summary>Tjek: to parallelle ledere med strøm i samme retning</summary>

Mellem lederne peger deres felter modsat og svækker hinanden. Udenfor er feltet stærkere. Lederne skubbes mod den svage side, altså mod hinanden. De tiltrækker.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvordan vender du omløbsretningen på en DC-motor?</summary>

Vend enten strømmen i ankeret eller feltet. Vender du begge, er retningen uændret. (Lab 3, forsøg 2.)
</details>

<details markdown="1"><summary>Hvordan indgår hastigheden i E = B · l · Δs/Δt?</summary>

Δs/Δt er hastigheden v. Jo hurtigere lederen skærer feltlinjerne, jo mere flux skæres pr. sekund, og jo større spænding.
</details>

<details markdown="1"><summary>Hvorfor er der minus i induktionsloven?</summary>

Lenz' lov: den inducerede strøm modarbejder ændringen. Var det plus, ville en lille ændring forstærke sig selv, og energien ville komme fra ingenting.
</details>

<details markdown="1"><summary>Hvad sker der i det øjeblik, en spole kobles ind på DC?</summary>

Strømmen er nul og stiger langsomt, fordi spolen inducerer en modspænding på hele U. Efter 1τ er strømmen 63 %, efter 5τ fuld.
</details>

<details markdown="1"><summary>Hvordan virker en friløbsdiode?</summary>

Under drift spærrer den. Ved afbrydelse vender spolens spænding, dioden leder, og strømmen løber rundt gennem spole og diode og dør ud med τ = L/R. Spændingen over spolen begrænses til ca. 0,7 V.
</details>

## 5 · Faldgruber

- Feltlinjerne tegnet fra S til N udenfor magneten.
- ⊗ og ⊙ byttet om.
- Højre og venstre hånd byttet om i motor- og generatorreglen. Kontrollér altid med feltbilledet.
- Minus i E = −B · l · v brugt i en talberegning.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Feltet går fra N til S. Om en leder finder jeg feltet med proptrækkerreglen: strøm ind i papiret giver felt med uret. I en spole peger højre tommelfinger mod nordpolen, når fingrene følger strømmen. Ligger en strømførende leder i et felt, bliver feltet stærkt på den side, hvor felterne har samme retning, og lederen skubbes mod den svage side med F = B·I·l. Det er motorprincippet. Bevæges en leder gennem feltet, induceres E = B·l·v. Det er generatorprincippet. Lenz' lov siger, at den inducerede strøm modarbejder ændringen. En spole modarbejder ændringer i sin egen strøm med e = −L·di/dt, så strømmen stiger med τ = L/R, og ved udkobling skal energien ½LI² have en vej ud, fx gennem en friløbsdiode.
</details>
</div>
