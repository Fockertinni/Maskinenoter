id: termometre
navn: Termometre og temperaturmåling
ikon: termometer
intro: Væsketermometer, metaludvidelse og bimetal, termistorer, Pt100, termoelementer og strålingstermometre: måleprincip, måleområde og usikkerhed.
---
# Noter

> **Kilder**
> Klasseopgaven "Oplæg til typer af termometre" og gruppefremlæggelsen "Typer af termometre" (Gruppe A). Usikkerheder og måleområder er suppleret fra metrologi.dk (T1 "Temperaturmåling ved hjælp af elektrisk modstand") og standardværdier (IEC 60751 og IEC 60584).

Klasseopgaven spørger om tre ting for hver målemetode: **måleprincip, måleområde og usikkerhed.** Det er også den rækkefølge, du bør svare i til eksamen.

Termometre deles i to grupper:

- **Berøringstermometre:** føleren skal have samme temperatur som mediet. Væske, bimetal, termistor, Pt100 og termoelement.
- **Berøringsfrie termometre:** måler den varmestråling, en overflade udsender. IR-termometer og termografikamera.

## Oversigt

| Termometer | Måleprincip | Typisk måleområde | Typisk usikkerhed | Fordel / ulempe |
|---|---|---|---|---|
| Væsketermometer (sprit) | Væsken udvider sig | ca. −100 til +70 °C | ±0,5–1 °C | Billigt, ingen strøm / skrøbeligt, kun lokal aflæsning |
| Væsketermometer (kviksølv) | Væsken udvider sig | −39 til +356 °C | ±0,1–1 °C | Præcist / giftigt, udfases |
| Bimetaltermometer | To metaller udvider sig forskelligt | ca. −50 til +500 °C | ±1–2 % af skala | Robust, tåler høj temperatur / unøjagtigt |
| Termistor (NTC/PTC) | Modstanden ændrer sig kraftigt | ca. −50 til +150 °C | ±0,1–1 °C | Følsom og hurtig / ulineær, smalt område |
| Pt100 (modstandstermometer) | Platins modstand stiger lineært | −200 til +850 °C | Klasse A: ±(0,15 + 0,002·\|t\|) °C | Præcis og stabil / langsommere, dyrere |
| Termoelement (type K) | Seebeck: spænding mellem to metaller | ca. −200 til +1260 °C | Klasse 2: ±2,5 °C eller ±0,75 % | Høje temperaturer, robust / lille signal, kræver kompensering |
| Strålings- / IR-termometer | Overfladens varmestråling | ca. −50 til +3000 °C | ±1–2 °C eller ±1–2 % | Berøringsfri, hurtig / kun overflade, afhænger af ε |

> **Trykfejl og usikkert på slides**
> Gruppefremlæggelsen giver sprit "ca. −100 til 80 °C". Ren ethanol koger ved 78 °C, så ca. +70 °C er en mere realistisk øvre grænse. Tallene for usikkerhed og måleområde i tabellen er typiske værdier, ikke fra slides, og konkrete følere kan afvige.

## Væsketermometer

**Princip:** omgivelsestemperaturen stiger, og væsken udvider sig og stiger op i et tyndt kapillarrør. Falder temperaturen, trækker væsken sig sammen. Kapillaret er tyndt, så en lille volumenændring giver et langt udslag.

**Måleområde** afhænger af væsken: den må hverken fryse eller koge. Kviksølv størkner ved −39 °C og koger ved 357 °C. Sprit kan bruges langt under frysepunktet, men koger tidligt.

**Fejlkilder:** parallaksefejl ved aflæsning, og nedsænkningsdybden. Et termometer er kalibreret til en bestemt dybde (helt nedsænket eller til en mærkestreg), og står resten af søjlen koldere, viser det forkert.

## Metaludvidelsestermometer og bimetal

Slides nævner to konstruktionstyper:

1. **Stavudvidelse:** en metalstav i et rør af et materiale med lille udvidelse. Stavens forlængelse overføres til en viser eller en kontakt (klassisk termostat).
2. **Bimetal:** to metalstrimler med forskellig udvidelseskoefficient (fx messing og invar) er valset sammen. Ved opvarmning udvider det ene sig mest, og strimlen bøjer mod metallet med den mindste udvidelse. Rullet som en spiral drejer den en viser.

Bimetal er robust og tåler høje temperaturer, men er mindre nøjagtig. Den bruges i viserinstrumenter på rør, i termostater og i motorværn (termisk overstrømsrelæ), hvor strømmen varmer strimlen op.

<div class="m" data-m="udvid"></div>

## Termistor (NTC og PTC)

En termistor er en halvleder, hvis modstand ændrer sig meget med temperaturen.

- **NTC** (Negative Temperature Coefficient): modstanden falder, når temperaturen stiger. Typisk 10 kΩ ved 25 °C.
- **PTC** (Positive Temperature Coefficient): modstanden stiger, ofte brat ved en bestemt temperatur. Bruges som beskyttelse i motorviklinger.

```
NTC:  R = R25 · e^(B · (1/T − 1/T25))      T i kelvin, T25 = 298,15 K
```

Termistoren er meget følsom (flere procent pr. grad) og hurtig, men kurven er stærkt ulineær, og området er smalt.

## Modstandstermometer (Pt100)

Et Pt100 er en platinmodstand på 100 Ω ved 0 °C. Modstanden stiger næsten lineært med temperaturen.

```
R = R0 · (1 + α · t)        R0 = 100 Ω, α = 0,00385 /°C
```

Det giver 0,385 Ω pr. grad. Ved 100 °C er R = 138,5 Ω.

<div class="m" data-m="pt100"></div>

### 2-, 3- og 4-leder

Ledningerne til føleren har også modstand, og den bliver målt med, hvis man kun har to ledere. 1 Ω ledningsmodstand giver 1 / 0,385 = 2,6 °C fejl. Med 3 ledere kompenserer instrumentet for ledningen, og med 4 ledere måles spændingen direkte over føleren, så ledningen er helt ude af målingen.

### Gennemregnet eksempel

Et Pt100 måler 119,4 Ω. Hvad er temperaturen? Og hvad ville en 2-leder-tilslutning med 2 × 0,5 Ω ledning vise? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

t = (R / R0 − 1) / α = (119,4 / 100 − 1) / 0,00385 = 0,194 / 0,00385 = 50,4 °C.

Med 2-leder ser instrumentet 120,4 Ω: t = 0,204 / 0,00385 = 53,0 °C. Fejlen er 2,6 °C for høj.
</details>

**Tolerance:** klasse A er ±(0,15 + 0,002·|t|) °C, klasse B ±(0,3 + 0,005·|t|) °C. Ved 100 °C giver det ±0,35 °C og ±0,8 °C.

## Termoelement

To forskellige metaller er svejset sammen i målestedet (det varme loddested). Når der er en temperaturforskel mellem målestedet og tilslutningsstedet (det kolde loddested), opstår en lille spænding: **Seebeck-effekten.** Type K (NiCr/NiAl) giver ca. 41 µV pr. grad.

Termoelementet måler altså en **forskel.** Instrumentet skal derfor kende temperaturen ved klemmerne og lægge den til: **koldt loddested-kompensering.**

<div class="m" data-m="termoel"></div>

> **Husk**
> Forlængerledningen skal være af samme metaller som termoelementet (kompensationsledning). Almindelig kobberledning skaber nye loddesteder og giver fejl. Termoelementer bruges fx til udstødningstemperaturer på dieselmotorer, hvor temperaturen er 300–550 °C.

## Strålingstermometer (IR)

Alle legemer udsender varmestråling, og jo varmere de er, jo mere stråler de (Stefan-Boltzmann, T⁴). Et IR-termometer samler strålingen med en linse på en detektor og regner den om til en temperatur.

- Måler kun **overfladen**, ikke det indre.
- Afhænger af **emissionstallet ε.** Blanke metaloverflader har lav ε og reflekterer omgivelserne, så de måles for koldt. Sæt ε korrekt eller sæt sort tape på.
- **Målefeltet** vokser med afstanden (fx 12:1 betyder 1 cm målefelt pr. 12 cm afstand).
- Termografikamera er samme princip med mange pixels og bruges til at finde varme el-forbindelser og lejer.

## Måling af andre størrelser

Gruppefordelingen i klasseopgaven indeholdt også "Hvad er måling?", "Hvad er usikkerheden på måleresultatet?" og "Måling af masse". De to første er samlet i emnet **Måling og måleusikkerhed.** Måling af masse var ikke med i materialet.

# Formler

### Pt100
```
R = R0 · (1 + α · t)          R0 = 100 Ω, α = 0,00385 /°C
t = (R / R0 − 1) / α
Følsomhed: 0,385 Ω/°C
Klasse A: ±(0,15 + 0,002·|t|) °C
Klasse B: ±(0,3 + 0,005·|t|) °C
```

### NTC-termistor
```
R = R25 · e^(B · (1/T − 1/298,15))     T i kelvin
```

### Termoelement type K (tilnærmet)
```
U ≈ 41 µV/°C · (t_mål − t_ref)
t_vist = U / k + t_ref        (med koldt loddested-kompensering)
```

### Ledningsfejl ved 2-leder Pt100
```
Δt = R_ledning / 0,385 Ω/°C
```

# Quiz

Q: Et Pt100 måler 138,5 Ω. Hvad er temperaturen? (°C)
N: 100 ; 0,5 ; °C
L: t = (138,5/100 − 1) / 0,00385 = 0,385 / 0,00385 = 100 °C.
F: Pt100 stiger 0,385 Ω pr. grad.

Q: Hvad er modstanden i et Pt100 ved 50 °C? (Ω, 2 decimaler)
N: 119,25 ; 0,05 ; Ω
L: R = 100 · (1 + 0,00385 · 50) = 100 · 1,1925 = 119,25 Ω.
F: R = R0 · (1 + α · t).

Q: Hvad betyder NTC?
A: Modstanden stiger med temperaturen
R: Modstanden falder, når temperaturen stiger
A: Spændingen stiger med temperaturen
A: Modstanden er konstant
F: Negative Temperature Coefficient. En PTC gør det modsatte.

Q: Hvorfor skal et termoelement have koldt loddested-kompensering?
A: Fordi metallerne ruster
R: Fordi spændingen afhænger af forskellen mellem målestedet og tilslutningsstedet
A: Fordi signalet er for stort
A: Fordi termoelementet er ulineært
F: Termospændingen er proportional med temperaturforskellen. Instrumentet skal lægge klemmetemperaturen til.

Q: Et type K-termoelement måler 400 °C, og klemmerne er 20 °C. Hvad er termospændingen ca.? (mV, k = 41 µV/°C)
N: 15,6 ; 0,1 ; mV
L: U = 0,041 · (400 − 20) = 0,041 · 380 = 15,58 mV.
F: Kun forskellen giver spænding.

Q: Et Pt100 er tilsluttet med 2 ledere, der tilsammen har 1 Ω. Hvor stor bliver fejlen? (°C, 1 decimal)
N: 2,6 ; 0,1 ; °C
L: Δt = 1 / 0,385 = 2,6 °C for høj.
F: Brug 3- eller 4-leder for at fjerne ledningsmodstanden.

Q: Du måler en blank, rustfri flange med et IR-termometer sat til ε = 0,95. Hvad sker der?
A: Du måler for varmt
R: Du måler sandsynligvis for koldt
A: Ingen betydning, IR måler altid rigtigt
A: Du måler temperaturen inde i røret
F: En blank flade har lav ε og udsender mindre stråling end instrumentet regner med. Den reflekterer også omgivelserne.

Q: Hvilket termometer er bedst til at måle udstødningstemperaturen (ca. 450 °C) efter hver cylinder?
A: Spritermometer
A: NTC-termistor
R: Termoelement
A: Kviksølvtermometer
F: Termoelementer er robuste, hurtige og tåler høje temperaturer. Pt100 kan også, men er mere sårbart over for vibrationer.

Q: I hvilken retning bøjer en bimetalstrimmel ved opvarmning?
A: Mod metallet med den største udvidelseskoefficient
R: Mod metallet med den mindste udvidelseskoefficient
A: Den bøjer ikke, den bliver længere
A: Det afhænger af strømmen
F: Metallet med størst udvidelse bliver længst og kommer på ydersiden af buen.
