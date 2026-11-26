id: temperatur
navn: Temperatur og temperaturskalaer
ikon: termometer
intro: Hvad temperatur er, termodynamikkens 0. hovedsætning, Celsius, Kelvin og Fahrenheit, og hvorfor gasformler altid skal have kelvin.
---
# Noter

> **Kilder**
> Slides "Typer af termometre – Gruppefremlæggelse" (slide 7, temperaturskalaer). Resten bygger på standardteori, fordi bogkapitlerne ikke var med i materialet.

Temperatur er et mål for, hvor kraftigt molekylerne i et stof bevæger sig. Jo varmere, jo større er den gennemsnitlige bevægelsesenergi. Ved det absolutte nulpunkt, 0 K eller −273,15 °C, er bevægelsen så lille, som den overhovedet kan blive.

## Temperatur og varme er ikke det samme

- **Temperatur** er en tilstand: hvor varmt noget er. Den måles i °C eller K.
- **Varme** er energi, der strømmer fra et varmt til et koldt sted på grund af temperaturforskellen. Den måles i J (joule).

En kop kaffe på 80 °C har højere temperatur end et badekar med vand på 40 °C, men badekarret indeholder langt mere varmeenergi.

## Termodynamikkens 0. hovedsætning

Er legeme A i termisk ligevægt med B, og B i ligevægt med C, så er A og C også i ligevægt. Det lyder banalt, men det er grunden til, at et termometer virker: termometret (B) får samme temperatur som det, det måler (A), og så kan man aflæse temperaturen på skalaen.

> **Konsekvens i praksis**
> Et termometer viser sin egen temperatur. Det viser kun mediets temperatur, når det har haft tid til at komme i ligevægt med det. Derfor har en føler en responstid, og en lommeføler i et rør skal have god kontakt (olie eller pasta i lommen).

## De tre skalaer

| Skala | Fryse­punkt for vand | Kogepunkt (1 atm) | Absolut nul | Bruges til |
|---|---|---|---|---|
| Celsius (°C) | 0 | 100 | −273,15 | Dagligdag og aflæsning i maskinrummet |
| Kelvin (K) | 273,15 | 373,15 | 0 | Alle termodynamiske formler med T |
| Fahrenheit (°F) | 32 | 212 | −459,67 | Amerikansk udstyr og manualer |

<div class="m" data-m="skala"></div>

### Omregning

```
K  = °C + 273,15          °C = K − 273,15
°F = °C · 1,8 + 32        °C = (°F − 32) / 1,8
```

**Forudsig først:** ved hvilken temperatur viser Celsius og Fahrenheit samme tal?

<details markdown="1"><summary>Vis svar</summary>

Sæt °F = °C = x: x = 1,8x + 32 ⇒ −0,8x = 32 ⇒ x = −40. Altså −40 °C = −40 °F.
</details>

## Temperatur og temperaturforskel

En temperaturforskel er den samme i kelvin og i grader Celsius: fra 20 °C til 80 °C er Δt = 60 °C = 60 K. Derfor står specifik varmekapacitet ofte i kJ/(kg·K), og man kan sætte forskellen i °C direkte ind.

En forskel i Fahrenheit er 1,8 gange større: Δ 60 K = 108 °F.

> **Faldgrube**
> I formler med T alene (idealgasloven, stråling, Carnot) skal temperaturen være i kelvin. I formler med Δt (Q = m · c · Δt) er det ligegyldigt. Det er den hyppigste fejl i termodynamik.

### Gennemregnet eksempel

En amerikansk manual siger, at smøreolien maksimalt må have 185 °F. Hvad er det i °C og K? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

°C = (185 − 32) / 1,8 = 153 / 1,8 = 85 °C. K = 85 + 273,15 = 358,15 K.
</details>

# Formler

### Omregning mellem skalaer
```
T [K]  = t [°C] + 273,15
t [°C] = T [K] − 273,15
t [°F] = t [°C] · 1,8 + 32
t [°C] = (t [°F] − 32) / 1,8
```

### Temperaturforskelle
```
Δt [K] = Δt [°C]
Δt [°F] = 1,8 · Δt [°C]
```

### Faste punkter
```
Absolut nul:          0 K = −273,15 °C = −459,67 °F
Is smelter (1 atm):   273,15 K = 0 °C = 32 °F
Vand koger (1 atm):   373,15 K = 100 °C = 212 °F
```

# Quiz

Q: Hvad er 20 °C i kelvin? (K, 2 decimaler)
N: 293,15 ; 0,01 ; K
L: T = 20 + 273,15 = 293,15 K.
F: Læg 273,15 til.

Q: Hvad er 180 °C i Fahrenheit? (°F)
N: 356 ; 0,5 ; °F
L: °F = 180 · 1,8 + 32 = 324 + 32 = 356 °F.
F: Gang med 1,8 og læg 32 til.

Q: Kølevandet stiger fra 30 °C til 45 °C. Hvad er temperaturstigningen i kelvin?
A: 288,15 K
R: 15 K
A: 318,15 K
A: 27 K
F: En temperaturforskel er den samme i °C og K. Man lægger kun 273,15 til en temperatur, ikke til en forskel.

Q: En temperatur på 100 °F svarer til hvad i °C? (1 decimal)
N: 37,8 ; 0,1 ; °C
L: °C = (100 − 32) / 1,8 = 68 / 1,8 = 37,8 °C.
F: Træk 32 fra først, og del så med 1,8.

Q: Hvilken formel kræver, at temperaturen sættes ind i kelvin?
A: Q = m · c · Δt
R: p · V = m · R · T
A: ΔL = α · L₀ · Δt
A: Φ = ṁ · c · Δt
F: Idealgasloven bruger den absolutte temperatur T. De andre bruger en forskel Δt, hvor °C og K giver samme tal.

Q: Hvad siger termodynamikkens 0. hovedsætning?
A: Energi kan hverken opstå eller forsvinde
A: Varme strømmer af sig selv fra koldt til varmt
R: To legemer, der hver er i termisk ligevægt med et tredje, er i ligevægt med hinanden
A: Ved 0 K står alle molekyler helt stille
F: 0. hovedsætning er grundlaget for temperaturmåling: termometret kommer i ligevægt med det, det måler.

Q: Ved hvilken temperatur viser °C og °F samme tal? (°C)
N: -40 ; 0,5 ; °C
L: x = 1,8x + 32 ⇒ −0,8x = 32 ⇒ x = −40.
F: −40 °C = −40 °F.
