id: dcmotor
navn: DC-motoren
ikon: motor
intro: Opbygning, kommutering og ankerreaktion, vendepoler, serie-, shunt- og permanentmagnetmotoren, spændingsligningen, moment, tab og virkningsgrad.
---
# Noter

> **Kilder**
> PP10 DC-motoren · Lab 3 (DC-motor og generator) · Obligatorisk opgavesæt 1, opgave 6 · Obligatorisk opgavesæt 2, opgave 1

En DC-motor er en leder i et magnetfelt (F = B · I · l), der drejer rundt. Når den drejer, skærer den feltlinjer og inducerer en modspænding E (E = B · l · v). Modspændingen er nøglen til hele motoren: den bestemmer omdrejningstallet, og den begrænser strømmen.

## Opbygning

| Del | Opgave |
|---|---|
| Anker (rotor) | Bærer viklingerne, hvor strømmen I_a løber, og hvor momentet dannes |
| Statorhus | Mekanisk ramme og en del af den magnetiske kreds |
| Hovedpoler | Danner hovedfeltet Φ (med feltvikling eller permanente magneter) |
| Kommutator og børstebro | Vender strømmen i ankerlederne, så momentet altid har samme retning |
| Vendepoler | Små poler mellem hovedpolerne, der ophæver ankerreaktionen i den neutrale zone |
| Ventilator | Køling |

## Kommutering og ankerreaktion

**Kommutering:** når en ankerleder passerer fra under en nordpol til under en sydpol, skal strømmen i den vende, ellers vender kraften også. Kommutatoren gør det mekanisk: børsterne skifter forbindelse, netop når lederen er i den **neutrale zone**, hvor den ikke skærer feltlinjer og ikke har spænding induceret.

**Ankerreaktion:** ankerstrømmen laver sit eget felt (tværfeltet Φ_t), som står vinkelret på hovedfeltet Φ_h. Det resulterende felt Φ_r bliver skævt, og den neutrale zone flytter sig. Børsterne kortslutter nu en leder, der har spænding, og det giver **gnister** og slid på kommutatoren. Hovedfeltet svækkes også en smule.

**Vendepoler** sidder i den neutrale zone og er seriekoblet med ankeret. De laver et felt Φ_v, der er lige så stort og modsat tværfeltet, ved alle belastninger. Så bliver den neutrale zone, hvor den skal være.

## De tre motortyper

| | Seriemotor | Shuntmotor | Permanentmagnetmotor |
|---|---|---|---|
| Feltvikling | I serie med ankeret (R_s) | Parallel med ankeret (R_sh) | Ingen, permanente magneter |
| Felt Φ | ∝ I_a (før mætning) | Næsten konstant | Konstant |
| Moment | Meget stort startmoment (M ∝ I_a²) | M ∝ I_a | M ∝ I_a |
| Omdrejningstal | Falder kraftigt med lasten. **Løber løbsk ubelastet** | Næsten konstant | Næsten konstant |
| Bruges til | Startmotorer, kraner, traktion | Værktøjsmaskiner, pumper, ventilatorer | Små drev, servo, ventilatorer i biler |

## Spændingsligningen og moment

```
Shunt:  E = U − I_a · (R_a + R_v) − ΔU_b         I = I_a + I_sh,  I_sh = U / R_sh
Serie:  E = U − I_a · (R_a + R_v + R_s) − ΔU_b
E = k_E · Φ · n          M = k_M · Φ · I_a        E · I_a = M · ω   (indre effekt)
n = (U − I_a · R − ΔU_b) / (k_E · Φ)
```

R_v er vendepolsviklingen, ΔU_b børstespændingsfaldet (ca. 2 V).

- **Belastning stiger:** n falder lidt, E falder, og I_a stiger, indtil momentet passer.
- **Start:** n = 0, så E = 0. Strømmen bliver I_a = (U − ΔU_b) / R_a, som er mange gange mærkestrømmen. Derfor bruges en **igangsætter** (startmodstand), der kobles ud trin for trin.
- **Feltet afbrydes (shunt):** Φ falder til remanensen. For at lave E skal n stige voldsomt, og I_a stiger. Motoren løber løbsk eller brænder af.

<details markdown="1"><summary>Forudsig først: hvad sker der med en seriemotors omdrejningstal, når lasten fjernes?</summary>

I_a bliver lille, så Φ bliver lille. E skal stadig være næsten U, og E = k_E · Φ · n, så n stiger voldsomt. Seriemotoren må aldrig køre ubelastet eller med remtræk, der kan springe af. Skift til "Serie" i modellen, og træk I_a ned.
</details>

<div class="m" data-m="dcmotor"></div>

## Tab og virkningsgrad

```
P1 = U · I                       optaget effekt
P_Cu = I_a² · (R_a + R_v) + I_sh² · R_sh      (shunt)   eller   I_a² · (R_a + R_v + R_s)   (serie)
P_b = ΔU_b · I_a                 børstetab
P_mek + P_Fe                     friktion, ventilation og jerntab i ankeret
P2 = M · ω = P1 − ΣP_tab         η = P2 / P1
```

Sankey-diagrammet på slide 7: P1 ind, så går P_Cu, P_mek og P_B fra, og P2 kommer ud på akslen.

> **Bemærk om slides (PP10, slide 7)**
> Tabslisten nævner ikke jerntabet i ankeret. Ankeret drejer i feltet og har både hysterese- og hvirvelstrømstab. I opgaverne lægges det normalt sammen med det mekaniske tab (P_mek+Fe).

### Gennemregnet eksempel (opgavesæt 1, opgave 6: shuntmotor)

220 V, I = 2,0 A, η = 0,68, R_sh = 1.200 Ω, R_av = 24 Ω, ΔU_b = 2 V, n = 50 o/s.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| P1 | 220 · 2,0 | 440 W |
| P2 | 0,68 · 440 | 299,2 W |
| I_sh | 220 / 1.200 | 0,183 A |
| I_a | 2,0 − 0,183 | 1,817 A |
| P_sh | 220 · 0,183 | 40,3 W |
| P_av | 24 · 1,817² | 79,2 W |
| P_b | 2 · 1,817 | 3,6 W |
| P_mek+Fe | 440 − 299,2 − 40,3 − 79,2 − 3,6 | 17,7 W |
| E | 220 − 1,817 · 24 − 2 | 174,4 V |
| M på akslen | 299,2 / (2π · 50) | 0,95 Nm |

**Last øget til 2,8 A:** I_a = 2,8 − 0,183 = 2,617 A. Φ er konstant, så det indre moment følger I_a: M_i = (174,4 · 1,817 / 314,16) · 2,617 / 1,817 = 1,01 · 1,44 = 1,45 Nm. Trækkes det mekaniske tab (ca. 0,06 Nm) fra, er akselmomentet ca. 1,40 Nm.

> **Usikkert**
> Den indsendte besvarelse skalerede akselmomentet direkte (0,952 · 2,617/1,817 = 1,37 Nm). Det er strengt taget det indre moment, der er proportionalt med I_a. Forskellen er lille, men forklar antagelsen, hvis du bruger den genvej.
</details>

### Gennemregnet eksempel (opgavesæt 2, opgave 1: seriemotor)

P2 = 10 kW, U = 460 V, n = 1.500 o/min, ΔU_b = 2 V, R_a + R_v = 0,52 Ω, R_s = 0,33 Ω, η = 0,88.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| P1 | 10.000 / 0,88 | 11.364 W |
| I | 11.364 / 460 | 24,7 A |
| P_Cu | 24,7² · (0,52 + 0,33) | 518,7 W |
| P_b | 2 · 24,7 | 49,4 W |
| P_mek+Fe | 11.364 − 10.000 − 518,7 − 49,4 | 795 W |
| Startstrøm (1,6 · I) | 1,6 · 24,7 | 39,5 A |
| Igangsætter | (460 − 2) / 39,5 − 0,85 | 10,7 Ω |
| E ved 1.500 o/min | 460 − 24,7 · 0,85 − 2 | 437 V |
| E ved 900 o/min, samme M (samme I, samme Φ) | 437 · 900 / 1.500 | 262 V |
| Formodstand ved 900 o/min | (460 − 262 − 2) / 24,7 − 0,85 | 7,1 Ω |

Hastighedsregulering med formodstand virker, men brænder meget effekt af: 24,7² · 7,1 = 4,3 kW.
</details>

> **Lab 3**
> En permanentmagnetmotor trak en generator. Højere forsyningsspænding gav højere omdrejningstal og højere generatorspænding (E ∝ n). Vendt polaritet vendte omløbsretningen. Belastet generator gav lavere n og højere strøm i motoren.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor er startstrømmen så stor i en DC-motor?
2. Hvad er ankerreaktion, og hvad gør vendepolerne?
3. Hvorfor må en seriemotor ikke køre ubelastet?
4. Hvad er formålet med shuntviklingen?

<details markdown="1"><summary>Svar</summary>

1. Ved n = 0 er E = 0, så kun den lille ankermodstand begrænser strømmen.
2. Ankerstrømmens tværfelt forskyder den neutrale zone, så der kommer gnister. Vendepolerne laver et modsat felt, så zonen bliver på plads.
3. Lille strøm giver lille felt, og så skal n være meget stor for at lave E. Den løber løbsk.
4. Feltviklingen ligger direkte på klemspændingen, så feltet er næsten konstant, og omdrejningstallet er stabilt.
</details>
</div>

# Formler

### Spændingsligning
```
Shunt:  E = U − I_a · (R_a + R_v) − ΔU_b      I = I_a + U / R_sh
Serie:  E = U − I_a · (R_a + R_v + R_s) − ΔU_b
```

### Moment og hastighed
```
E = k_E · Φ · n          M = k_M · Φ · I_a
E · I_a = M · ω          ω = 2π · n   (n i o/s)
Samme Φ:  E2 / E1 = n2 / n1     M2 / M1 = I_a2 / I_a1
```

### Tab og virkningsgrad
```
P1 = U · I
P_Cu = I_a² · R_anker(+serie) + U² / R_sh
P_b = ΔU_b · I_a
P2 = M · ω = P1 − P_Cu − P_b − P_mek+Fe
η = P2 / P1
```

### Igangsætter
```
R_start = (U − ΔU_b) / I_start − R_a(+R_v + R_s)
```

# Quiz

Q: Hvad er kommutatorens opgave?
R: At vende strømmen i ankerlederne, så momentet altid har samme retning
A: At ensrette forsyningsspændingen
A: At styre omdrejningstallet
A: At ophæve ankerreaktionen
F: Når en leder går fra en nordpol til en sydpol, skal strømmen vende, ellers vender kraften.

Q: Hvad er vendepolernes opgave?
A: At øge hovedfeltet
R: At ophæve ankerens tværfelt i den neutrale zone, så der ikke kommer gnister ved børsterne
A: At vende omløbsretningen
A: At begrænse startstrømmen
F: Vendepolerne er seriekoblet med ankeret, så de følger belastningen.

Q: En shuntmotor på 220 V har R_sh = 1.200 Ω og trækker 2,0 A. Hvad er ankerstrømmen? (A)
N: 1,817 ; 0,005 ; A
L: I_sh = 220 / 1.200 = 0,183 A. I_a = 2,0 − 0,183 = 1,817 A.
F: Kirchhoff: netstrømmen deler sig i shunt- og ankerstrøm.

Q: Samme motor: R_av = 24 Ω og ΔU_b = 2 V. Hvad er modspændingen E? (V)
N: 174,4 ; 0,3 ; V
L: E = 220 − 1,817 · 24 − 2 = 220 − 43,6 − 2 = 174,4 V.
F: E = U − I_a · R − ΔU_b.

Q: Hvad sker der, hvis shuntfeltet afbrydes under drift?
A: Motoren stopper blødt
R: Feltet falder, motoren løber løbsk, og ankerstrømmen stiger kraftigt
A: Motoren kører videre uændret
A: Motoren skifter omløbsretning
F: E = k_E · Φ · n. Med lille Φ skal n blive meget stor for at lave E.

Q: En seriemotor på 460 V med 0,85 Ω i anker og felt skal have startstrømmen begrænset til 39,5 A. ΔU_b = 2 V. Hvor stor skal igangsætteren være? (Ω)
N: 10,7 ; 0,1 ; Ω
L: R = (460 − 2) / 39,5 − 0,85 = 11,59 − 0,85 = 10,74 Ω.
F: Ved start er E = 0.

Q: En motor har E = 437 V ved 1.500 o/min. Hvad er E ved 900 o/min med samme felt? (V)
N: 262,2 ; 0,5 ; V
L: E ∝ n ved konstant Φ: E2 = 437 · 900 / 1.500 = 262,2 V.
F: E = k_E · Φ · n.

Q: Hvilken DC-motor har det største startmoment?
R: Seriemotoren
A: Shuntmotoren
A: Permanentmagnetmotoren
A: De er ens
F: I seriemotoren følger feltet strømmen, så M ∝ I_a². Derfor bruges den til startmotorer og kraner.

Q: En motor optager 440 W og afgiver 299 W ved 50 o/s. Hvad er akselmomentet? (Nm)
N: 0,952 ; 0,005 ; Nm
L: M = P2 / ω = 299,2 / (2π · 50) = 299,2 / 314,16 = 0,952 Nm.
F: Brug den afgivne effekt og ω i rad/s.
