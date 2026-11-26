id: halvleder-eksamen
navn: Alt du skal bruge til eksamen: Halvledere, dioder og solceller
ikon: solcelle
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at opstille beregning af virkningsgrad ud fra oplyste data, eller forklare formålet med en friløbsdiode i forhold til et DC-relæ."

Hvis du kun når én ting: kunne tegne solcellens ækvivalentmodel og en IV-kurve med U_oc, I_sc og MPP, og regne η = P_m / (asr · A) med asr fra pyranometeret. Øv også friløbsdioden, for den kan komme som den korte opgave.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | asr = U_målt / K | Indstråling fra pyranometer |
| 2 | P_m = U_mpp · I_mpp | Effekt i MPP |
| 3 | η = P_m / (asr · A) | Virkningsgrad |
| 4 | A = P_STC / (1.000 · η_STC) | Areal, hvis kun η og P er givet |
| 5 | R_opt ≈ U_oc / I_sc (groft) | Valg af belastning til IV-kurven |
| 6 | AM = 1 / cos θ | Luftmasse |
| 7 | T_x = 25 + (η/η_STC − 1)/α | Celletemperatur ud fra η |
| 8 | E = h · c / λ | Fotonenergi |

## 2 · Det du skal kunne forklare

### PN-overgangen

**Pointe:** P-laget har huller (bor), N-laget frie elektroner (fosfor). Ved overgangen udligner de hinanden, og der bliver en rumladningszone med et indbygget felt.

**Hvorfor det betyder noget:** feltet er det, der skiller elektron og hul ad i en solcelle, og det, der skal overvindes (0,7 V), før en diode leder.

### Friløbsdioden og DC-relæet

**Pointe:** en relæspole vil holde sin strøm i gang, når den afbrydes. Uden diode giver e = −L · di/dt en spændingsspids på hundredvis af volt.

**Sådan virker den:** dioden sidder i spærreretning over spolen. Ved afbrydelse vender spolens spænding, dioden leder, og strømmen løber i ring og dør ud med τ = L/R. Spændingen bliver kun ca. 0,7 V. Det beskytter kontakten eller transistoren.

**Ulempe:** relæet slipper langsommere, fordi strømmen dør langsomt ud.

### Solcellen og IV-kurven

**Pointe:** solcellen er en strømkilde, hvis strøm følger lyset. Dioden i modellen begrænser spændingen til U_oc.

**Kæden:** mere lys → større I_sc → mere effekt. Højere temperatur → lavere U_oc → mindre effekt (ca. −0,4 %/°C).

**Tal du kan nævne:** Axitec-panelet giver 15,98 % ved STC, men kun 14,46 % i målingen ved 850 W/m², fordi cellen var ca. 48 °C.

### Bypass-dioder

**Pointe:** cellerne er i serie, så én skygget celle kan stoppe hele strengen. Bypass-dioden leder strømmen udenom. Strengen mister så kun det skyggede panels spænding.

## 3 · Det du skal kunne tegne

1. PN-overgangen med borioner, fosforioner, huller, frie elektroner og rumladningszonen.
2. Diodens IV-karakteristik: lederetning med knæ ved 0,7 V, lækstrøm og gennembrud i spærreretning.
3. Relæspole med friløbsdiode, kontakt og forsyning, med strømvejen ved afbrydelse.
4. Solcellens ækvivalentmodel: I_sc, D, R_p parallelt, R_s i serie, belastning.
5. IV-kurve og P-kurve med U_oc, I_sc og MPP, for to indstrålinger.
6. Målekredsen fra Lab 5: panel, skydemodstand, amperemeter, voltmeter (eller wattmeter) og pyranometer ved siden af.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Opstil beregningen af virkningsgraden ud fra: pyranometer 125,8 mV, K = 148 mV/(kW/m²), MPP 27,4 V og 7,3 A, areal 1,627 m².</summary>

asr = 125,8 / 148 = 0,85 kW/m² = 850 W/m². Indstrålet effekt = 850 · 1,627 = 1.383 W. P_m = 27,4 · 7,3 = 200 W. η = 200 / 1.383 = 14,46 %.
</details>

<details markdown="1"><summary>Hvorfor er den målte virkningsgrad lavere end databladets 15,98 %?</summary>

Databladet gælder ved STC med en celletemperatur på 25 °C. I solen bliver cellen varm, og spændingen falder ca. 0,4 % pr. grad. 14,46 % svarer til en celletemperatur på ca. 48 °C.
</details>

<details markdown="1"><summary>Hvilke driftsbetingelser gælder databladets virkningsgrad ved?</summary>

STC: 1.000 W/m², celletemperatur 25 °C, AM 1,5. I praksis er cellen varmere, og virkningsgraden lavere.
</details>

<details markdown="1"><summary>Hvordan vælger du en belastningsmodstand til at optage IV-kurven?</summary>

Mål U_oc og I_sc. R_optimal ≈ U_oc / I_sc (fx 37,6/7,66 = 4,9 Ω). Vælg en skydemodstand, der kan gå et godt stykke over og ned til næsten nul, og som tåler I_sc. Mål hurtigt ved lave modstande.
</details>

<details markdown="1"><summary>Hvad sker der, når ét panel i hver streng skygges?</summary>

Bypass-dioden leder strømmen udenom. Strengen mister ét panels spænding plus ca. 0,7 V: 21 · 27,4 − 0,7 = 574,7 V. Strømmen er uændret, så effekten falder fra 17,6 til 16,8 kW.
</details>

<details markdown="1"><summary>Hvordan virker en LED?</summary>

I lederetning falder elektroner fra lederbåndet ned i huller i valensbåndet. Energien, som svarer til båndgabet, sendes ud som en foton. Båndgabet bestemmer bølgelængden: λ = h · c / E.
</details>

## 5 · Faldgruber

- Pyranometerets mV sat direkte ind som W/m² uden at dele med K.
- Arealet glemt, så η bliver over 100 %.
- STC (celle 25 °C) blandet sammen med NOCT (omgivelser 20 °C).
- α_Pmpp brugt på forskellen i procentpoint i stedet for på det relative fald.
- Friløbsdioden tegnet i lederetning, så den kortslutter forsyningen.
- E = h·c/λ angivet i eV uden at dele med 1,602·10⁻¹⁹ (trykfejl på PP12).

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Silicium dopes med bor til P-lag (huller) og fosfor til N-lag (frie elektroner). Ved overgangen dannes en rumladningszone med et indbygget felt. En diode leder over ca. 0,7 V i lederetning. En friløbsdiode sidder i spærreretning over en relæspole og giver strømmen en vej ved afbrydelse, så der ikke kommer en spændingsspids. I en LED bliver energien til lys, i en fotodiode og solcelle bliver lys til strøm. Solcellen er en strømkilde I_sc parallelt med en diode og R_p, og med R_s i serie. Databladet gælder ved STC: 1.000 W/m², 25 °C celle, AM 1,5. Indstrålingen måles med pyranometer: asr = U/K. Virkningsgraden er η = U_mpp·I_mpp / (asr·A). Varme sænker spændingen og effekten ca. 0,4 % pr. grad. Paneler i serie lægger spændinger sammen, og bypass-dioder hjælper ved skygge.
</details>
</div>
