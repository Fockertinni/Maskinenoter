id: halvleder
navn: Halvledere, dioder og solceller
ikon: solcelle
intro: PN-overgangen, dioden, LED og fotodioden, friløbsdioden, solcellens ækvivalentmodel, solindstråling, AM, STC og NOCT, IV-kurven og virkningsgrad.
---
# Noter

> **Kilder**
> PP12 Halvlederen, dioder, lysdioder og solceller · Lab 5 (tyndfilm-solpanel) · Obligatorisk opgavesæt 3, opgave 8

En halvleder er hverken en god leder eller en god isolator. Ved at tilsætte små mængder af andre stoffer (doping) kan man styre, hvordan den leder. Sætter man to forskellige lag sammen, får man en PN-overgang, og den er grundlaget for dioden, lysdioden og solcellen.

## PN-overgangen

| Lag | Dopes med | Valenselektroner | Frie ladningsbærere |
|---|---|---|---|
| Silicium (rent) | — | 4 | Næsten ingen |
| P-type | Bor (B) | 3 | Huller (mangler en elektron), positive |
| N-type | Fosfor (P) | 5 | Frie elektroner, negative |

Når P og N lægges sammen, vandrer frie elektroner fra N over og fylder huller i P. Tilbage står faste ioner: negative borioner på P-siden og positive fosforioner på N-siden. Det område kaldes **rumladningszonen** (spærrelaget). Ionerne laver et **indbygget elektrisk felt**, der stopper yderligere vandring.

## Dioden

- **Lederetning:** plus på anoden (P), minus på katoden (N). Den ydre spænding presser spærrelaget sammen. Over ca. **0,7 V** (silicium) leder dioden, og strømmen stiger stejlt.
- **Spærreretning:** plus på katoden. Spærrelaget bliver bredere, og kun en lille lækstrøm løber. Ved gennembrudsspændingen (på slides ca. −100 V) bryder den igennem.
- Symbolet: pilen viser lederetningen fra anode til katode. Stregen er katoden.

### Friløbsdioden over en DC-relæspole

Det er en af eksamensopgaverne under temaet. Dioden sættes **i spærreretning** over spolen (katoden mod plus).

1. Under drift spærrer den, så al strøm går gennem spolen.
2. Når kontakten eller transistoren afbryder, vil spolen holde strømmen i gang (e = −L · di/dt). Spændingen over spolen vender.
3. Nu er dioden i lederetning. Strømmen løber rundt gennem spole og diode og dør ud med τ = L/R.
4. Spændingen over spolen begrænses til ca. 0,7 V, i stedet for flere hundrede volt. Det beskytter kontakt eller transistor mod gnister og overspænding.

Ulempen er, at relæet slipper lidt langsommere. Se også ind- og udkoblingsmodellen under [håndregler og induktion](haandregler.html).

## LED og fotodiode

```
E_foton = h · c / λ        [J]  (÷ 1,602·10⁻¹⁹ for eV)
λ = h · c / E_foton        [m]  (× 10⁹ for nm)
h = 6,626·10⁻³⁴ Js     c = 3·10⁸ m/s
```

- **LED:** i lederetning falder elektroner fra lederbåndet ned i huller i valensbåndet (rekombination). Energien sendes ud som en foton. Båndgabet bestemmer farven: stort båndgab giver kort bølgelængde (blåt), lille giver langt (rødt).
- **Fotodiode:** omvendt. En foton med nok energi slår en elektron fri i spærrelaget, og feltet trækker den væk. Det giver en strøm, der er proportional med lyset. Bruges i spærreretning som lyssensor.

> **Trykfejl på slides (PP12, slide 4)**
> E_foton = h · c / λ står med enheden [eV]. Med h i Js giver formlen joule. Del med 1,602·10⁻¹⁹ for at få eV. Tilsvarende giver λ = h · c / E meter, ikke nm, medmindre du omregner.

<details markdown="1"><summary>Forudsig først: hvor lang en bølgelængde kan lige netop frigøre en elektron i silicium (båndgab 1,12 eV)?</summary>

E = 1,12 · 1,602·10⁻¹⁹ = 1,79·10⁻¹⁹ J. λ = 6,626·10⁻³⁴ · 3·10⁸ / 1,79·10⁻¹⁹ = 1,11·10⁻⁶ m = 1.110 nm (infrarødt). Lys med længere bølgelængde går igennem uden at gøre noget.
</details>

## Solcellen

En solcelle er en stor fotodiode uden ydre spænding. Fotonerne laver elektron-hul-par, det indbyggede felt skiller dem, og cellen bliver en strømkilde (ca. 0,5–0,6 V pr. siliciumcelle).

### Ækvivalentmodellen

```
I_sc (strømkilde, ∝ lyset) ∥ D (dioden) ∥ R_p (lækmodstand)  →  R_s i serie  →  belastning
```

| Del | Betyder | Ideelt |
|---|---|---|
| I_sc | Lysstrømmen, proportional med indstrålingen | — |
| D | PN-overgangen. Begrænser spændingen til U_oc | — |
| R_p | Lækstrøm i cellen | Uendelig |
| R_s | Modstand i kontakter og materiale | Nul |

### Indstråling, pyranometer, AM, STC og NOCT

```
asr = U_målt [mV] / K [mV/(kW/m²)]     [kW/m²]
AM = 1 / cos θ       (θ = solens vinkel fra lodret)
```

| Betingelse | Indstråling | Temperatur | Andet |
|---|---|---|---|
| **STC** (datablad) | 1.000 W/m² | **Celle** 25 °C | AM 1,5 |
| **NOCT** (mere realistisk) | 800 W/m² | **Omgivelser** 20 °C | Vind 1 m/s |

AM 1 er solen lige over hovedet. AM 1,5 svarer til θ ≈ 48°, og lyset går gennem 1,5 gange så meget luft.

### IV-kurven, R_optimal og P_m

- **U_oc:** tomgangsspænding (I = 0). **I_sc:** kortslutningsstrøm (U = 0).
- Panelet leverer mest effekt i knækket på IV-kurven: **MPP** (U_mpp, I_mpp).
- **Indstråling** flytter strømmen (I_sc ∝ asr). **Temperatur** flytter spændingen: højere temperatur giver lavere U og lavere P (ca. −0,4 %/°C).

```
R_optimal ≈ U_oc / I_sc                         (grov, til valg af skydemodstand)
R_optimal = U_mpp,nominel / I_mpp,nominel · 1000 / asr    (bedre)
η = P_m / (asr · A)
```

> **Bemærk om slides (PP12, slide 8)**
> R = U_oc / I_sc er kun et groft bud. MPP ligger ved lavere spænding og strøm, så den rigtige R_optimal er typisk 25 % lavere. For panelet i opgavesæt 3 er U_oc/I_sc = 4,9 Ω, mens U_mpp/I_mpp = 27,4/7,3 = 3,75 Ω.

<div class="m" data-m="solcelle"></div>

### Serie, parallel og bypass-dioder

- Paneler i **serie** lægger spændingerne sammen. Strømmen er den samme.
- Strenge i **parallel** lægger strømmene sammen.
- En skygget celle i en serieforbindelse begrænser hele strengens strøm. **Bypass-dioden** over panelet (eller en del af det) leder strømmen udenom, så strengen kun mister det skyggede panels spænding plus ca. 0,7 V.
- **Lab 5:** dækkes tyndfilmpanelet til på den ene led, falder effekten næsten med det samme til nul (alle cellerne i serie skygges). På den anden led falder effekten i takt med, hvor meget der dækkes.

### Gennemregnet eksempel (opgavesæt 3, opgave 8: Axitec AC-260)

Datablad: P_mpp = 260 W, η = 15,98 % ved STC, α_Pmpp = −0,42 %/°C. Målt: U_oc = 37,6 V, I_sc = 7,66 A, pyranometer 125,8 mV (K = 148 mV/(kW/m²)), MPP ved 27,4 V og 7,3 A. Anlæg: 4 strenge parallelt, 22 paneler i serie.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| Areal | 260 / (1.000 · 0,1598) | 1,627 m² |
| asr | 125,8 / 148 | 0,85 kW/m² = 850 W/m² |
| P_m | 27,4 · 7,3 | 200 W |
| η aktuelt | 200 / (850 · 1,627) | 14,46 % |
| Relativt fald | 14,46 / 15,98 − 1 | −9,5 % |
| T_x | 25 + (−9,5) / (−0,42) | ca. 47,6 °C |
| Anlæg U | 22 · 27,4 | 602,8 V |
| Anlæg I | 4 · 7,3 | 29,2 A |
| Anlæg P | 602,8 · 29,2 | 17,6 kW |
| Ét panel skygget pr. streng | 21 · 27,4 − 0,7 = 574,7 V, · 29,2 A | 16,8 kW |

> **Usikker: afviger fra besvarelsen**
> I afleveringen blev T_x = 28,6 °C. Der blev regnet med forskellen i procentpoint (14,46 − 15,98 = −1,52) delt med 0,42. Men α_Pmpp er et **relativt** fald pr. grad, så faldet skal regnes som 14,46/15,98 − 1 = −9,5 %. Det giver ca. 47,6 °C, hvilket passer bedre med et panel i sol. Det forudsætter, at virkningsgraden ellers er den samme ved 850 og 1.000 W/m².
</details>

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad dopes P-laget og N-laget med, og hvorfor?
2. Hvilken vej skal en friløbsdiode vende over en relæspole?
3. Hvad er forskellen på STC og NOCT?
4. Hvad sker der med U_oc og I_sc, når panelet bliver varmt?

<details markdown="1"><summary>Svar</summary>

1. P: bor (3 valenselektroner, giver huller). N: fosfor (5 valenselektroner, giver frie elektroner).
2. I spærreretning, katoden mod plus. Den leder kun, når spolens spænding vender ved afbrydelse.
3. STC: 1.000 W/m², celletemperatur 25 °C, AM 1,5. NOCT: 800 W/m², omgivelsestemperatur 20 °C, vind 1 m/s.
4. U_oc falder tydeligt. I_sc stiger en smule. Effekten falder ca. 0,4 % pr. grad.
</details>
</div>

# Formler

### Foton
```
E = h · c / λ      [J]     1 eV = 1,602·10⁻¹⁹ J
h = 6,626·10⁻³⁴ Js     c = 3·10⁸ m/s
```

### Solindstråling
```
asr = U_målt / K        [kW/m²]
AM = 1 / cos θ
STC: 1.000 W/m², celle 25 °C, AM 1,5
NOCT: 800 W/m², omgivelser 20 °C, vind 1 m/s
```

### Solpanel
```
R_optimal ≈ U_oc / I_sc     (groft)
R_optimal = U_mpp / I_mpp · 1000 / asr
P_m = U_mpp · I_mpp
η = P_m / (asr · A)
T_x = 25 + (η_akt/η_STC − 1) / α_Pmpp
Serie: U = n · U_panel    Parallel: I = m · I_streng
```

### Diode
```
Silicium: ca. 0,7 V i lederetning
Friløbsdiode: i spærreretning over spolen, τ = L / R ved udkobling
```

# Quiz

Q: Hvad dopes N-laget i en siliciumsolcelle med?
R: Fosfor, som har 5 valenselektroner
A: Bor, som har 3 valenselektroner
A: Kobber
A: Germanium, som har 4 valenselektroner
F: Den femte elektron er fri og bliver en negativ ladningsbærer. Bor i P-laget giver huller.

Q: Hvor stor spænding skal der ca. til, før en siliciumdiode leder?
N: 0,7 ; 0,1 ; V
L: Knæspændingen for silicium er ca. 0,6–0,7 V.
F: Under den spænding er strømmen næsten nul.

Q: Hvorfor sætter man en friløbsdiode over et DC-relæ?
A: For at relæet trækker hurtigere
R: For at begrænse spændingsspidsen, når strømmen til spolen afbrydes
A: For at beskytte mod overstrøm i drift
A: For at gøre spolen til en kondensator
F: Spolen vil holde strømmen i gang. Dioden giver den en vej, så spændingen kun bliver ca. 0,7 V.

Q: Et pyranometer med K = 148 mV/(kW/m²) viser 125,8 mV. Hvad er indstrålingen? (W/m²)
N: 850 ; 5 ; W/m²
L: asr = 125,8 / 148 = 0,85 kW/m² = 850 W/m².
F: Spændingen er proportional med indstrålingen.

Q: Hvad betyder STC?
R: 1.000 W/m², celletemperatur 25 °C, AM 1,5
A: 800 W/m², omgivelsestemperatur 20 °C, vind 1 m/s
A: 1.000 W/m², omgivelsestemperatur 20 °C, AM 1
A: Den højeste effekt panelet kan give
F: Det andet svar er NOCT. Bemærk at STC er celletemperatur, NOCT er omgivelsestemperatur.

Q: Et panel giver 27,4 V og 7,3 A ved 850 W/m². Arealet er 1,627 m². Hvad er virkningsgraden? (%)
N: 14,46 ; 0,1 ; %
L: η = 27,4 · 7,3 / (850 · 1,627) = 200 / 1.383 = 0,1446 = 14,46 %.
F: Effekt ud delt med lysets effekt ind på hele arealet.

Q: 22 paneler i serie med 27,4 V hver og 4 strenge i parallel med 7,3 A pr. streng. Hvad er anlæggets effekt? (kW)
N: 17,6 ; 0,1 ; kW
L: U = 22 · 27,4 = 602,8 V. I = 4 · 7,3 = 29,2 A. P = 17,6 kW.
F: Serie lægger spændinger sammen, parallel lægger strømme sammen.

Q: Solen står 60° fra lodret. Hvad er AM?
N: 2 ; 0,01 ;
L: AM = 1 / cos 60° = 1 / 0,5 = 2.
F: Lyset går gennem dobbelt så meget luft som ved lodret sol.

Q: Hvad sker der med panelets effekt, når celletemperaturen stiger?
A: Den stiger, fordi strømmen stiger
R: Den falder, fordi spændingen falder
A: Den er uændret
A: Den falder, fordi strømmen falder
F: Typisk ca. −0,4 % pr. grad. I_sc stiger lidt, men U_oc falder meget mere.

Q: En foton har bølgelængden 650 nm (rødt lys). Hvad er energien? (eV)
N: 1,91 ; 0,03 ; eV
L: E = 6,626·10⁻³⁴ · 3·10⁸ / 650·10⁻⁹ = 3,06·10⁻¹⁹ J. ÷ 1,602·10⁻¹⁹ = 1,91 eV.
F: Husk at regne nm om til meter og J om til eV.
