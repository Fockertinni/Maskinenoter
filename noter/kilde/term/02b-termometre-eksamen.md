id: termometre-eksamen
navn: Alt du skal bruge til eksamen: Termometre og temperaturmåling
ikon: termometer
intro: Måleprincip, måleområde og usikkerhed for hvert termometer, det du skal kunne tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen stod ikke i materialet. Klasseopgaven spørger om måleprincip, måleområde og usikkerhed, så øv dig i at svare i den rækkefølge for hver type.

Hvis du kun når én ting: kunne forklare Pt100 og termoelementet, og hvorfor det ene måler en absolut temperatur, mens det andet måler en forskel.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | R = 100 · (1 + 0,00385 · t) | Pt100 |
| 2 | t = (R/100 − 1) / 0,00385 | Pt100 baglæns |
| 3 | 0,385 Ω/°C | Pt100's følsomhed og ledningsfejl |
| 4 | U ≈ 41 µV/°C · (t_mål − t_ref) | Termoelement type K |
| 5 | Klasse A: ±(0,15 + 0,002·\|t\|) °C | Pt100-tolerance |
| 6 | R = R25 · e^(B·(1/T − 1/298,15)) | NTC |

## 2 · Det du skal kunne forklare

| Type | Princip i én sætning | Område | Typisk usikkerhed |
|---|---|---|---|
| Væske | Væsken udvider sig op i et kapillar | Sprit ca. −100…+70 °C, Hg −39…+356 °C | ±0,1–1 °C |
| Bimetal | To metaller med forskellig α bøjer | ca. −50…+500 °C | ±1–2 % af skala |
| NTC/PTC | Halvlederens modstand ændrer sig kraftigt | ca. −50…+150 °C | ±0,1–1 °C |
| Pt100 | Platins modstand stiger næsten lineært | −200…+850 °C | Klasse A ±0,35 °C ved 100 °C |
| Termoelement | Seebeck-spænding fra temperaturforskel | ca. −200…+1260 °C (K) | ±2,5 °C / 0,75 % |
| IR | Overfladens varmestråling | ca. −50…+3000 °C | ±1–2 °C, afhænger af ε |

### Pt100

**Pointe:** 100 Ω ved 0 °C, stiger 0,385 Ω pr. grad.

**Hvorfor 3- eller 4-leder:** ledningsmodstanden måles med i en 2-leder. 1 Ω giver 2,6 °C fejl.

### Termoelement

**Pointe:** to forskellige metaller giver en spænding, der afhænger af temperaturforskellen mellem målestedet og klemmerne.

**Hvorfor kompensering:** uden kendt klemmetemperatur ved instrumentet ikke, hvad forskellen skal lægges til. Forlængelse skal ske med kompensationsledning.

### IR

**Pointe:** måler kun overfladen, og resultatet afhænger af emissionstallet. Blanke flader måles for koldt.

## 3 · Det du skal kunne tegne

1. **Pt100-kurve og NTC-kurve** i samme diagram: Pt100 en svagt stigende ret linje, NTC en stejlt faldende kurve.
2. **Termoelement:** to metaller samlet i målestedet, klemmer ved instrumentet og koldt loddested.
3. **Bimetalstrimmel** før og efter opvarmning, med metallet med størst α på ydersiden.
4. **2-, 3- og 4-leder-tilslutning** af en Pt100.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvilket termometer vil du vælge til kølevandet, og hvorfor?</summary>

Pt100 i en lomme. Området passer, den er præcis og stabil, og den giver et signal til automatikken. 3- eller 4-leder for at undgå ledningsfejl.
</details>

<details markdown="1"><summary>Hvilket termometer vil du vælge til udstødningsgassen?</summary>

Termoelement type K. Det tåler 300–600 °C, er robust over for vibrationer og hurtigt.
</details>

<details markdown="1"><summary>Hvorfor viser et termoelement forkert, hvis det forlænges med almindelig kobberledning?</summary>

Overgangen mellem termoelementets metaller og kobberet danner nye termoelementer, hvis temperatur ikke kendes. Instrumentet kompenserer for klemmerne, men ikke for samlingen ude i ledningen.
</details>

<details markdown="1"><summary>Et Pt100 måler 119,4 Ω. Hvad er temperaturen?</summary>

t = (1,194 − 1) / 0,00385 = 50,4 °C.
</details>

<details markdown="1"><summary>Hvorfor er en NTC ikke god til at måle over et stort område?</summary>

Kurven er stærkt ulineær, så følsomheden ændrer sig meget. Den er god i et smalt område, fx viklingsbeskyttelse eller rumtemperatur.
</details>

<details markdown="1"><summary>Hvorfor skal en føler i et rør sidde i en lomme med god kontakt?</summary>

Føleren viser sin egen temperatur (0. hovedsætning). Luft i lommen isolerer og giver lang responstid og forkert visning. Olie eller pasta forbedrer kontakten.
</details>

## 5 · Faldgruber

- At tro, et termoelement måler en absolut temperatur.
- Glemme ledningsmodstanden ved 2-leder Pt100.
- IR på blankt metal uden at justere ε.
- Spritermometret over ca. 70 °C (slides siger 80 °C, men sprit koger ved 78 °C).

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Berøringstermometre skal i ligevægt med mediet, berøringsfrie måler strålingen. Væsketermometre og bimetal bruger varmeudvidelse og er enkle og robuste. Termistorer (NTC/PTC) ændrer modstand kraftigt og er følsomme, men ulineære. Pt100 er 100 Ω ved 0 °C og stiger 0,385 Ω/°C, præcist fra −200 til 850 °C, og tilsluttes med 3 eller 4 ledere. Termoelementet giver en spænding fra forskellen mellem målested og klemmer, tåler høje temperaturer og kræver kompensering. IR måler overfladen og afhænger af emissionstallet. Svar altid med princip, område og usikkerhed.
</details>
</div>
