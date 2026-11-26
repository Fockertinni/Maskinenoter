id: koelevand
navn: Kølevandssystemer
ikon: koel
intro: Centralkølesystemet med søvand, LT- og HT-kreds, ekspansionstanken, vandbehandling og typiske fejl.
---
# Noter

> **Kilder**
> K40, K26 (kun figurer) · JW s. 215–232 · Lektion 37–38

Store skibe bruger et **centralkølesystem**: søvand køler et lukket ferskvandssystem gennem en varmeveksler, så motoren aldrig møder korrosivt havvand.

## Søvandssystemet (SW)

1. **Søkiste** med høj og lav indsugning. Den høje bruges i havn, så mudder ikke suges ind. Kan renses med trykluft og damp.
2. **Søfilter** (2–4 mm) fjerner større ting, ikke alger og småpartikler. Beskytter pumper og varmevekslere.
3. **Søvandspumper:** 2 hovedpumper og 1 aux, centrifugalpumper. Dårlig sugeevne, så de placeres under vandlinjen ("druknet").
4. **Varmevekslere:** ferskvand, damp/kondens, dieselgeneratorer.
5. **3-vejsventil** (setpunkt 20 °C) recirkulerer varmt vand. Mere last → mindre recirkulation, mere vand over bord og ind fra havet.

Alternativ: frekvensstyret søvandspumpe (VSD) uden recirkulation. Tommelfingerregel: vandhastighed over 1 m/s, så faststof ikke bundfælder.

- **Kavitation:** lokalt lavt tryk → dampbobler → de kollapser → trykbølger ødelægger metallet. Tegn: støj og vibrationer. Sker lettere i varmt vand.
- **Pladevarmeveksler:** plader spændt sammen med pakninger, der adskiller medierne. Titanium mod korrosion. Stor overflade, lavt vedligehold. Renses med vand og kemikalier efter manualen. Bruges mere end den dyrere rørveksler.

## Ferskvandssystemet (FW)

| Kreds | Temperatur | Køler | Hvorfor |
|---|---|---|---|
| Lavtemperatur (LT) | 20–30 °C | Kamakselolie, smøreolie, skylleluftkøler, luftkompressorer | Olien skal have rette viskositet og ikke nedbrydes termisk. Kold skylleluft = højere massefylde og fyldningsgrad. Kompressorer: nær-isoterm kompression (mindst energi) |
| Højtemperatur (HT) | 80–90 °C | Cylinderforing, topstykke, udstødningsventil | Beskytter ståldele og cylinderolie. Høj temperatur = mindre varmetab (bedre termisk virkningsgrad) og små varmespændinger i foringen. Undgår kondensation af svovlsyre |

**Vejen:** ferskvandskølere → LT-pumper → oliekølere og skylleluftkøler → deling: retur til kølerne, eller via 3-vejsventil som opspædning til HT-kredsen → HT-pumper → motor → aflufter og ekspansionstank → retur. Skylleluftkøleren passerer ofte dugpunktet, så store mængder kondensvand skal drænes.

## Ekspansionstanken

- Optager vandets udvidelse og sammentrækning ved stop, halv og fuld last.
- Buffer, der genfylder ved tab.
- Langsom afluftning af udskilt luft.
- Påfyldning og kemikalietilsætning.
- **Placeret højt:** luften samles her, og det statiske tryk på pumpernes sugeside forhindrer kavitation.

Der er intet filter i det lukkede FW-system. Vandet er ofte kondensat eller demineraliseret vand fra ferskvandsgeneratoren, tilsat additiver.

- **Flowretning:** kølevandet tilføres nederst i foringen og strømmer op. Varmt vand og udskilt luft søger opad. Modsat retning ville fange luftbobler og give lokal overophedning.
- **Stempelkøling:** stempelringene leder noget varme til foringen, men hovedkølingen er intern stempelkøling med olie.

## Vandbehandling: problemer ved for lidt

- Korrosion ved lav pH.
- Kalkaflejringer (hårdt vandværksvand).
- Olieemulgering → slamlag → dårlig varmeledning, overophedning.
- Iltkorrosion → grubetæring.
- Biologisk forurening → syre → korrosion.

## Typiske fejl og konsekvenser

| Fejl | Virkning |
|---|---|
| Luft i systemet | Hæmmer flow → ringe køling, rivning og revner. Udstødningsgas i vandet udløser alarm ved ekspansionstanken |
| For lav kapacitet | Lukkede ventiler, kavitationsskadet impeller, forurening → lavere flow og varmeoverførsel |
| Kontaminerede kølere | FW-side: korrosionslag. SW-side: silt, sand, rurer (Balanus) → lavere varmetransmission |
| Mangelfuld køling | Kryb, rivning, fastsiddende stempel. Nedbrudt olie → kulstof og ringklæbning. Snavset luftkøler → højere temperaturer i hele forbrændingen |

**Forvarmning:** store motorer forvarmes før start efter længere stop (med hjælpemotorernes kølevand eller damp). Ved kortere stop (fx 24 timer) holdes de varme. Stilstandstemperatur 50–60 °C, driftstemperatur op mod 90 °C. Lasten øges også kun langsomt.

<div class="genkald" markdown="1">
### Test dig selv

1. Tegn centralkølesystemet med SW, LT og HT.
2. Hvorfor er der to temperaturkredse?
3. Hvorfor sidder ekspansionstanken højt?
4. Hvorfor strømmer vandet nedefra og op i foringen?

<details markdown="1"><summary>Svar</summary>

1. Søkiste → filter → SW-pumper → centralkøler → over bord (med recirkulation). FW: centralkøler → LT-pumper → olie- og skylleluftkølere → 3-vejsventil → HT-pumper → motor → ekspansionstank → retur.
2. Olie og skylleluft skal være kolde (viskositet, massefylde), mens motorens ståldele skal være varme (mindre varmetab, små spændinger, ingen svovlsyrekondensation).
3. Luften samles der, og vandsøjlen giver statisk tryk på pumpernes sugeside, så de ikke kavitererer.
4. Varmt vand og luft stiger op. Strømmer vandet nedad, fanges luftbobler, og der opstår lokal overophedning.
</details>
</div>

# Formler

```
p = ρ · g · H        statisk tryk fra væskesøjlen (fx ekspansionstankens højde)
```

# Quiz

Q: Hvorfor bruger store skibe et centralkølesystem?
A: Det er billigere at bygge
R: Så motoren kun møder lukket ferskvand og aldrig korrosivt søvand
A: Søvand kan ikke køle nok
A: For at spare søvandspumper
F: Søvandet køler kun centralkøleren. Resten af systemet er beskyttet ferskvand med additiver.

Q: Hvilken temperatur holdes HT-kredsen typisk på?
A: 20–30 °C
A: 45–50 °C
R: 80–90 °C
A: Over 100 °C
F: Høj temperatur giver mindre varmetab og hindrer kondensation af svovlsyre i foringen.

Q: Hvilken komponent køles af LT-kredsen?
R: Skylleluftkøleren
A: Cylinderforingen
A: Topstykket
A: Udstødningsventilen
F: LT køler olie, skylleluft og kompressorer. HT køler motorens varme dele.

Q: Ekspansionstanken står 10 m over pumpernes sugeside. Hvad er det statiske tryk fra vandsøjlen? (bar, 2 decimaler, ρ = 1000 kg/m³)
N: 0,98 ; 0,01 ; bar
L: p = ρ · g · H = 1000 · 9,81 · 10 = 98.100 Pa = 0,98 bar.
F: Det tryk hjælper med at holde sugetrykket over damptrykket, så pumperne ikke kavitererer.

Q: Hvorfor placeres søvandspumperne under vandlinjen?
A: For at spare plads
R: Centrifugalpumper suger dårligt, så de skal have tilløb ("druknet")
A: For at undgå frost
A: For at få koldere vand
F: Så er pumpen altid fyldt og har positivt tryk på sugesiden.

Q: Hvad er tegn på kavitation i en pumpe?
A: Lavere temperatur
R: Støj og vibrationer
A: Højere flow
A: Lavere strømforbrug
F: Dampbobler kollapser og sender trykbølger mod metallet. Det sker lettere i varmt vand.

Q: Udstødningsgas i kølevandet. Hvor slår det typisk alarm?
A: Ved søkisten
R: Ved ekspansionstanken
A: Ved centralkøleren
A: Ved LT-pumperne
F: Gassen samles der, hvor luften udskilles. Det tyder på en revne i topstykke eller foring.

Q: Hvad er tommelfingerreglen for vandhastigheden i søvandssystemet?
A: Under 0,5 m/s
R: Over 1 m/s, så faststof ikke bundfælder
A: Præcis 3 m/s
A: Det er ligegyldigt
F: Ved lav hastighed sætter sand og silt sig i rør og kølere.
