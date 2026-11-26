id: varmetransmission-eksamen
navn: Alt du skal bruge til eksamen: Varmetransmission
ikon: varmeovf
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen for Grundlæggende termodynamik stod ikke i materialet. Tjek læringsmålene. Siden er bygget, så du kan både regne og forklare emnet mundtligt.

Hvis du kun når én ting: kunne forklare ledning, konvektion og stråling med et eksempel på hver fra maskinrummet, og regne en U-værdi.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | Φ = λ · A · Δt / d | Ledning gennem et lag |
| 2 | Φ = h · A · Δt | Konvektion ved en overflade |
| 3 | Φ = ε · σ · A · (T₁⁴ − T₂⁴) | Stråling (kelvin) |
| 4 | R = 1/h_i + Σ d/λ + 1/h_u, U = 1/R | Sammensat væg |
| 5 | Φ = U · A · Δt | Gennemgang |
| 6 | Δt_m = (Δt₁ − Δt₂) / ln(Δt₁/Δt₂) | Varmeveksler |

## 2 · Det du skal kunne forklare

### De tre måder

| Måde | Pointe | Eksempel |
|---|---|---|
| Ledning | Varme vandrer gennem materialet | Gennem rørvæggen i en køler |
| Konvektion | En strømmende væske eller gas tager varmen med | Kølevand langs cylinderforingen |
| Stråling | Elektromagnetiske bølger, intet medium | Varm udstødningsmanifold mod omgivelserne |

### Isolering

**Pointe:** isolering virker ved at holde luft stille. Den største modstand bestemmer det hele, og i en isoleret stålvæg er stålets bidrag ubetydeligt.

### Modstande i serie

**Pointe:** som elektriske modstande: de lægges sammen, og U er den reciprokke værdi.

### Modstrøm

**Pointe:** modstrøm holder en større temperaturforskel gennem hele veksleren og kræver mindre areal end medstrøm.

### Emission

**Pointe:** blank overflade = lav ε = lidt stråling. Derfor alu-beklædning på isolering, og derfor måler IR-termometre blanke flader forkert.

## 3 · Det du skal kunne tegne

1. **Temperaturforløbet gennem en væg** med to lag og overgange: små fald i overgangene og stålet, stort fald i isoleringen.
2. **Varmeveksler i med- og modstrøm** med temperaturkurver for begge medier.

<details markdown="1"><summary>Tjek din vægtegning</summary>

Temperaturen falder lidt i overgangen inde, næsten intet gennem stålet, meget gennem isoleringen (stejlest, fordi λ er lille) og lidt i overgangen ude. Faldet i hvert lag er proportionalt med lagets R.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Find U og varmetabet for 10 mm stål + 50 mm mineraluld, 180/25 °C, h = 10.</summary>

R = 0,1 + 0,0002 + 1,25 + 0,1 = 1,45. U = 0,69 W/(m²K). q = 0,69 · 155 = 107 W/m².
</details>

<details markdown="1"><summary>Hvorfor isoleres varme rør i maskinrummet?</summary>

Energitab, personsikkerhed (forbrænding over ca. 60 °C) og brandsikkerhed: SOLAS kræver isolering af flader over 220 °C, hvor olie kan sprøjte hen.
</details>

<details markdown="1"><summary>Hvordan påvirker belægninger en varmeveksler?</summary>

Kalk, slam eller olie lægger et ekstra lag med lav λ (en ekstra modstand). U falder, og veksleren yder mindre. Det ses som stigende temperaturforskel eller faldende Δt på kølevandet.
</details>

<details markdown="1"><summary>Hvorfor er stråling vigtigst ved høje temperaturer?</summary>

Den følger T⁴. Fordobles den absolutte temperatur, bliver strålingen 16 gange større, mens ledning og konvektion kun følger Δt.
</details>

## 5 · Faldgruber

- Stråling regnet i °C.
- mm ikke omregnet til m i d/λ.
- 1/h glemt i U-værdien.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Varme overføres ved ledning gennem materialer (Φ = λ · A · Δt/d), ved konvektion med strømmende medier (Φ = h · A · Δt) og ved stråling (Φ = ε · σ · A · (T₁⁴ − T₂⁴) i kelvin). Gennem en væg lægges modstandene 1/h og d/λ sammen i serie, og U = 1/R. Isolering virker ved stillestående luft og dominerer modstanden. I en varmeveksler bruges Φ = U · A · Δt_m, og modstrøm er mere effektiv end medstrøm. Belægninger sænker U.
</details>
</div>
