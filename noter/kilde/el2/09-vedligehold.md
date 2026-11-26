id: vedligehold
navn: Tilstandsbaseret vedligehold
ikon: vedligehold
intro: Selvstudie. Korrektiv, forebyggende og tilstandsbaseret vedligehold, termografering af el-anlæg og partielle udladninger i højspændingsudstyr.
---
# Noter

> **Kilder**
> Selvstudie med obligatorisk opgave · UV10 og UV3
> UV3 og UV10 var ikke med i Martins materiale, så afsnittet bygger på kursets emneliste og standardteori. Tjek det mod UV-materialet.

I stedet for at udskifte eller efterse til faste tider **måles udstyrets faktiske tilstand, og der gribes ind, når målingerne viser en udvikling.** Det sparer unødige stop og fanger fejl, før de bliver til havari.

## Tre strategier

| Strategi | Hvornår gribes ind | Eksempel |
|---|---|---|
| Korrektiv (havari) | Når det er gået i stykker | Ikke-kritiske småmotorer |
| Forebyggende (tidsbaseret) | Efter fast interval eller driftstimer | Olieskift, lejeskift |
| Tilstandsbaseret (CBM) | Når målinger viser en tendens | Termografi, PD, vibration, isolationsmåling |

Typiske målinger på el-anlæg: termografi, partielle udladninger, isolationsmodstand (megger, polarisationsindeks), vibrationsanalyse på motorer, strømsignaturanalyse og olieanalyse på transformere.

<details markdown="1"><summary>Forudsig først: hvilken strategi passer til styremaskinens pumpemotor, og hvilken til en lille ventilator i et lagerrum?</summary>

Styremaskinen er kritisk, så den skal have tilstandsbaseret (eller mindst forebyggende) vedligehold. Ventilatoren er billig og ikke kritisk, så korrektiv vedligehold er fornuftigt: skift den, når den står af.
</details>

## Termografering

Et IR-kamera viser overfladetemperaturen. Dårlige forbindelser, overbelastede ledere, ubalance mellem faser og defekte sikringer bliver varmere end omgivelserne.

- **Mål under belastning**, helst over 40 % af nominel last, fordi opvarmningen stiger med I².
- **Sammenlign** samme punkt på de tre faser (ΔT mellem faser) og mod referencen eller omgivelsen.
- **Emissivitet:** blanke metaloverflader reflekterer og viser en forkert (for lav) temperatur. Indstil emissiviteten, eller mål på isolering, tape eller maling.
- **Tavlelåger** skal ofte åbnes, fordi IR ikke går gennem glas og plast. Det kræver sikkerhed for arbejde nær spændingsførende dele, eller IR-vinduer.
- **Rapport:** IR-billede og normalfoto, last, ΔT, vurdering af alvoren og anbefalet handling.

> **Faldgrube**
> En blank kobberskinne kan se kold ud på kameraet, selvom den er varm. Det er emissiviteten, ikke temperaturen.

<details markdown="1"><summary>Prøv selv: en forbindelse er 15 K varmere end de to andre faser ved 30 % last. Hvor varm ville den ca. være ved fuld last?</summary>

Opvarmningen følger I². Fra 30 % til 100 % stiger I² med (1 / 0,3)² ≈ 11. ΔT bliver altså ca. 11 · 15 ≈ 165 K. Derfor skal man måle ved høj last, eller regne op, før man vurderer alvoren.
</details>

## Partielle udladninger (PD)

Små elektriske udladninger, der kun delvist bryder isolationen igennem. De opstår typisk i luftlommer i støbt isolation, på overflader (krybestrømme) eller som korona ved skarpe kanter. PD nedbryder isolationen gradvist og ender i et fuldt gennemslag.

- Relevant for højspændingsudstyr: generatorer og motorer på 3,3–11 kV om bord, kabler, transformere og tavler.
- Måles online med HF-strømtransformere, koblingskondensatorer, TEV-sensorer (transient earth voltage) eller ultralyd.
- **Udviklingen over tid (trending) er vigtigere end en enkelt måling.**

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad er forskellen på forebyggende og tilstandsbaseret vedligehold?
2. Hvorfor skal termografering ske ved høj last?
3. Hvorfor kan en blank overflade vise for lav temperatur?
4. Hvorfor er trending vigtigere end én PD-måling?

<details markdown="1"><summary>Svar</summary>

1. Forebyggende sker efter et fast interval uanset tilstand. Tilstandsbaseret sker, når målinger viser, at tilstanden er ved at blive dårligere.
2. Varmeudviklingen følger I², så fejl ved lav last ser små ud.
3. Den har lav emissivitet og reflekterer omgivelsernes stråling i stedet for at udsende sin egen.
4. Niveauet afhænger af udstyret og målemetoden. Det er en stigning over tid, der viser, at isolationen nedbrydes.
</details>
</div>

# Quiz

Q: Hvilken strategi er tilstandsbaseret vedligehold?
A: Udskift efter et fast antal driftstimer
R: Grib ind, når målinger viser en udvikling
A: Reparér, når det går i stykker
A: Udskift alt ved hvert værftsophold
F: CBM bygger på målinger af den faktiske tilstand.

Q: Hvorfor bør termografering ske over ca. 40 % last?
A: Fordi kameraet ellers ikke virker
R: Fordi opvarmningen stiger med I², så fejl ved lav last er svære at se
A: Fordi tavlen ellers er spændingsløs
A: Fordi emissiviteten ændrer sig med lasten
F: En dårlig forbindelse afsætter I²R, som vokser kraftigt med strømmen.

Q: En blank kobberskinne viser lav temperatur på IR-kameraet. Hvad er den mest sandsynlige forklaring?
A: Skinnen er overdimensioneret
R: Lav emissivitet, så kameraet ser reflekteret stråling
A: Der løber ingen strøm
A: Kameraet er defekt
F: Mål på tape, maling eller isolering, eller indstil emissiviteten.

Q: Hvad er en partiel udladning?
A: En fuld kortslutning gennem isolationen
R: En lille udladning, der kun delvist bryder isolationen igennem
A: En jordfejl i et IT-net
A: En udladning af en kondensator
F: PD nedbryder isolationen gradvist og ender i et gennemslag.

Q: Hvor er PD-måling mest relevant om bord?
A: På 24 V styrestrøm
A: På 230 V belysning
R: På højspændingsgeneratorer, -motorer og -kabler (3,3–11 kV)
A: På batterier
F: PD kræver høj feltstyrke i isolationen.

Q: Hvad skal en termograferingsrapport indeholde ud over IR-billedet?
A: Kun temperaturen
R: Normalfoto, last, ΔT, vurdering af alvoren og anbefalet handling
A: Kameraets serienummer
A: Tavlens IP-klasse
F: Uden lasten og ΔT kan man ikke vurdere alvoren.
