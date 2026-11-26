id: damp-eksamen
navn: Alt du skal bruge til eksamen: Faseovergange og vanddamp
ikon: kedel
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen for Grundlæggende termodynamik stod ikke i materialet. Tjek læringsmålene. Siden er bygget, så du kan både regne og forklare emnet mundtligt.

Hvis du kun når én ting: kunne tegne opvarmningskurven fra is til damp og forklare latent varme, og at kogepunktet stiger med trykket.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | Q = m · L_s, L_s = 334 kJ/kg | Smeltning af is |
| 2 | Q = m · r, r = 2.257 kJ/kg (1 atm) | Fordampning / kondensering |
| 3 | h = h' + x · r | Våd damp |
| 4 | Φ = ṁ · (h₂ − h₁) | Kedel, kondensator, veksler |
| 5 | 1 bar → 100 °C, 10 bar → 180 °C | Mætningstemperatur |

## 2 · Det du skal kunne forklare

### Latent og følelig varme

**Pointe:** følelig varme ændrer temperaturen. Latent varme ændrer tilstanden ved konstant temperatur.

**Tal:** at fordampe 1 kg vand kræver 2.257 kJ, mere end 5 gange de 419 kJ, der skal til for at varme det fra 0 til 100 °C.

### Kogepunkt og tryk

**Pointe:** jo højere tryk, jo højere kogepunkt.

**Praksis:** en kedel på 10 bar har 180 °C vand. En kondensator med vakuum (0,1 bar(a)) kondenserer damp ved ca. 46 °C.

### Våd, mættet og overhedet damp

**Pointe:** våd damp er en blanding med dampkvalitet x. Tør mættet damp har x = 1. Overhedet damp er varmere end mætningstemperaturen.

**Hvorfor overhedning:** i turbinen undgås dråber, der eroderer skovlene.

### Entalpi

**Pointe:** energiindholdet pr. kg i et strømmende medie. Den overførte varme er forskellen i h gange massestrømmen.

## 3 · Det du skal kunne tegne

1. **Opvarmningskurven** (t over Q) fra is ved −20 °C til damp ved 120 °C med vandrette stykker ved 0 og 100 °C.
2. **Mætningskurven** (t_s over p), stigende og krum.

<details markdown="1"><summary>Tjek din opvarmningskurve</summary>

Fem stykker: skrå (is, 42 kJ), vandret ved 0 °C (334 kJ), skrå (vand, 419 kJ), langt vandret ved 100 °C (2.257 kJ), skrå (damp, 40 kJ). Det lange vandrette stykke er det vigtigste.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor er damp så godt til opvarmning?</summary>

Når damp kondenserer, afgiver den hele fordampningsvarmen (ca. 2.000 kJ/kg) ved konstant temperatur, og overgangstallet ved kondensering er meget højt.
</details>

<details markdown="1"><summary>Hvad sker der, hvis trykket pludselig falder i en kedel?</summary>

Vandet er varmere end kogepunktet ved det nye tryk, så det koger eksplosivt (flashdamp). Derfor er kedelsprængninger så farlige.
</details>

<details markdown="1"><summary>Find h for damp ved 10 bar(a) og x = 0,9.</summary>

h = 763 + 0,9 · 2.015 = 2.576 kJ/kg.
</details>

<details markdown="1"><summary>Hvorfor falder r, når trykket stiger?</summary>

Ved højere tryk og temperatur ligner væsken og dampen hinanden mere. Ved det kritiske punkt (221 bar, 374 °C) er der ingen forskel, og r = 0.
</details>

## 5 · Faldgruber

- Overtryk brugt i damptabellen (den er i absolut tryk).
- Latent varme glemt, så kun m · c · Δt regnet.
- x brugt på h'' i stedet for på r.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Ved en faseovergang tilføres eller afgives latent varme ved konstant temperatur: 334 kJ/kg ved smeltning af is og 2.257 kJ/kg ved fordampning af vand ved 1 atm. Kogepunktet stiger med trykket, så en kedel på 10 bar har 180 °C, og en kondensator med vakuum kondenserer ved lav temperatur. Våd damp beskrives med dampkvaliteten x og h = h' + x · r. Overhedet damp er varmere end mætningstemperaturen og bruges i turbiner. Varmen i et strømmende medie er Φ = ṁ · (h₂ − h₁).
</details>
</div>
