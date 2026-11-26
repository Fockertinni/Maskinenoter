id: vedligehold-eksamen
navn: Alt du skal bruge til eksamen: Tilstandsbaseret vedligehold
ikon: vedligehold
intro: Det du skal kunne forklare, de spørgsmål du kan forvente, og hvordan du kobler emnet til resten af faget.
---
# Noter

> **Selvstudie**
> Emnet er selvstudie med obligatorisk opgave. UV3 og UV10 var ikke med i materialet, så tjek tallene mod UV-materialet. Til eksamen kommer det typisk som en kobling: "hvordan ville du finde fejlen, før den bliver til havari?"

Hvis du kun når én ting: kunne forklare forskellen på de tre vedligeholdsstrategier, og hvordan man termograferer en tavle rigtigt.

## 1 · Det vigtigste at huske

| Emne | Det skal du kunne sige |
|---|---|
| Strategier | Korrektiv (når det går i stykker), forebyggende (fast interval), tilstandsbaseret (når målinger viser en tendens) |
| Termografi | Mål over ca. 40 % last, sammenlign faserne, pas på emissiviteten |
| Opvarmning | Følger I², så 30 % last viser kun ca. 1/11 af opvarmningen ved fuld last |
| PD | Små udladninger i isolationen på HS-udstyr (3,3–11 kV), måles online, trending er vigtigst |
| Andre målinger | Isolationsmodstand (megger, polarisationsindeks), vibration, strømsignatur, olieanalyse |

## 2 · Det du skal kunne forklare

### De tre strategier

**Pointe:** tilstandsbaseret vedligehold måler den faktiske tilstand og griber ind, når målingerne viser en udvikling.

**Hvorfor:** det sparer unødige stop og udskiftninger, og det fanger fejl, før de bliver til havari. Korrektiv vedligehold er fint til billige, ikke-kritiske ting. Kritisk udstyr som styremaskinen skal have tilstandsbaseret eller forebyggende vedligehold.

### Termografering

**Pointe:** dårlige forbindelser, overbelastede ledere, faseubalance og defekte sikringer bliver varmere end omgivelserne.

**Sådan gør du det rigtigt:**

1. Mål under belastning, helst over 40 %, fordi opvarmningen følger I².
2. Sammenlign samme punkt på tre faser (ΔT mellem faser).
3. Indstil emissiviteten, eller mål på tape, maling eller isolering. Blanke metaloverflader viser for lav temperatur.
4. Åbn lågerne (IR går ikke gennem glas og plast), og overhold reglerne for arbejde nær spændingsførende dele. Eller brug IR-vinduer.
5. Rapportér med IR-billede, normalfoto, last, ΔT, vurdering og anbefalet handling.

### Partielle udladninger

**Pointe:** små udladninger, der kun delvist bryder isolationen igennem, i luftlommer, på overflader eller som korona. De nedbryder isolationen og ender i gennemslag.

**Hvorfor trending:** niveauet afhænger af udstyr og målemetode. Det er stigningen over tid, der viser nedbrydningen.

## 3 · Koblinger til resten af faget

- **Generatorer og motorer:** isolationsklasser, hvor 8–10 °C over grænsen halverer levetiden. Termografi og PD fanger det.
- **Trefaset belastning:** faseubalance ses som forskel i temperatur mellem faserne.
- **Harmoniske:** ekstra opvarmning af kabler, transformere og nul kan ses med termografi.
- **IT-net om bord:** isolationsovervågningen (IMD) er i sig selv en form for tilstandsovervågning.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvad er forskellen på forebyggende og tilstandsbaseret vedligehold?</summary>

Forebyggende sker efter et fast interval uanset tilstand. Tilstandsbaseret sker, når målinger viser, at tilstanden er ved at blive dårligere.
</details>

<details markdown="1"><summary>En forbindelse er 15 K varmere end de andre ved 30 % last. Er det alvorligt?</summary>

Opvarmningen følger I². Ved fuld last bliver den ca. (1/0,3)² ≈ 11 gange større, altså ca. 165 K. Det er alvorligt og skal udbedres.
</details>

<details markdown="1"><summary>Hvorfor viser en blank kobberskinne for lav temperatur?</summary>

Den har lav emissivitet og reflekterer omgivelsernes stråling i stedet for at udsende sin egen.
</details>

<details markdown="1"><summary>Hvor giver PD-måling mening om bord?</summary>

På højspændingsudstyr: generatorer, motorer, kabler, transformere og tavler på 3,3–11 kV.
</details>

<details markdown="1"><summary>Hvilke målinger ville du bruge på en vigtig elmotor?</summary>

Vibrationsanalyse (lejer), termografi (forbindelser og opvarmning), isolationsmodstand og strømsignaturanalyse (rotorstave og belastning).
</details>

## 5 · Faldgruber

- Termograferet ved lav last og konkluderet, at alt er fint.
- Glemt emissiviteten.
- Én PD-måling brugt som facit i stedet for trending.
- Sagt at tilstandsbaseret vedligehold altid er bedst. Til billigt, ikke-kritisk udstyr er korrektiv fin.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Vedligehold kan være korrektivt, forebyggende efter faste intervaller eller tilstandsbaseret, hvor man måler den faktiske tilstand og griber ind ved en tendens. På el-anlæg bruges termografi, partielle udladninger, isolationsmodstand, vibration og olieanalyse. Termografi skal ske ved høj last, fordi opvarmningen følger I², med sammenligning mellem faserne og korrekt emissivitet. Partielle udladninger nedbryder isolationen i højspændingsudstyr, og det er udviklingen over tid, der tæller.
</details>
</div>
