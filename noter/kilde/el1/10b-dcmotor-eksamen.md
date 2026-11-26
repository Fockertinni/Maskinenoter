id: dcmotor-eksamen
navn: Alt du skal bruge til eksamen: DC-motoren
ikon: motor
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at opstille DC-motorens spændingsligning med brug af oplyst data."

Hvis du kun når én ting: kunne tegne ækvivalentdiagrammet for en shunt- og en seriemotor, opstille E = U − I_a · R − ΔU_b, og bruge det til at forklare start, belastning og hastighedsregulering.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | E = U − I_a(R_a + R_v) − ΔU_b | Shunt |
| 2 | E = U − I_a(R_a + R_v + R_s) − ΔU_b | Serie |
| 3 | I = I_a + U/R_sh | Shunt, Kirchhoff |
| 4 | E = k_E · Φ · n | Modspænding ∝ hastighed |
| 5 | M = k_M · Φ · I_a | Moment ∝ strøm |
| 6 | E · I_a = M · ω | Indre effekt |
| 7 | η = P2 / P1, P2 = M · ω | Virkningsgrad |
| 8 | R_start = (U − ΔU_b)/I_start − R_a | Igangsætter |

## 2 · Det du skal kunne forklare

### Spændingsligningen

**Pointe:** klemspændingen U bruges til tre ting: modspændingen E, spændingsfaldet i viklingerne I_a · R og børstespændingsfaldet ΔU_b.

**Hvorfor er E vigtig:** E er næsten lige så stor som U under drift. Det er E, der begrænser strømmen. Ved start er E = 0, og strømmen bliver kun begrænset af den lille R_a.

**Tal du kan nævne:** shuntmotoren i opgavesæt 1: 220 V, I_a = 1,82 A, R_av = 24 Ω, ΔU_b = 2 V giver E = 174 V.

### Hastighedsregulering

Fra n = (U − I_a R − ΔU_b) / (k_E Φ) kan n ændres på tre måder:

| Metode | Virkning | Ulempe |
|---|---|---|
| Lavere ankerspænding U | n ned | Kræver styret forsyning |
| Formodstand i ankeret | n ned | Store tab (opgave 2.1: 4,3 kW ved 900 o/min) |
| Feltsvækning (mindre Φ) | n op | Mindre moment pr. ampere |

### Kommutering, ankerreaktion og vendepoler

**Pointe:** kommutatoren vender strømmen i lederne i den neutrale zone. Ankerstrømmens tværfelt flytter zonen, og det giver gnister. Vendepolerne laver et modsat felt, så zonen bliver på plads ved alle belastninger.

### Serie mod shunt

**Seriemotor:** feltet følger strømmen, så startmomentet er stort (M ∝ I_a²), men omdrejningstallet stiger voldsomt ved lille last.

**Shuntmotor:** feltet er næsten konstant, så omdrejningstallet er stabilt. Afbrydes feltet, løber den løbsk.

## 3 · Det du skal kunne tegne

1. Ækvivalentdiagram for shuntmotoren: U, I, I_sh gennem R_sh parallelt, I_a gennem R_v, R_a og E, og ΔU_b ved børsterne.
2. Ækvivalentdiagram for seriemotoren: R_v, R_a, E og R_s i serie, og igangsætteren.
3. n-M-kurverne for serie og shunt.
4. Sankey-diagrammet: P1 → P_Cu, P_b, P_mek+Fe → P2.
5. Hovedfelt, tværfelt og det resulterende felt med den forskudte neutrale zone.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor skal en DC-motor have en igangsætter?</summary>

Ved start er E = 0. Strømmen bliver (U − ΔU_b)/R_a, fx (460 − 2)/0,85 = 539 A for seriemotoren i opgavesæt 2 mod 24,7 A ved fuldlast. Igangsætteren begrænser strømmen, til motoren har fået fart og bygget E op.
</details>

<details markdown="1"><summary>Hvad betyder "shunt", og hvad er formålet?</summary>

Shunt betyder parallel. Feltviklingen ligger parallelt med ankeret direkte på klemspændingen, så feltstrømmen og dermed Φ er næsten konstant. Det giver et stabilt omdrejningstal.
</details>

<details markdown="1"><summary>Hvordan regner du det nye moment, når belastningen øges?</summary>

Ved konstant Φ (shunt) er M ∝ I_a. Find den nye ankerstrøm (I − I_sh), og gang det gamle indre moment med I_a2/I_a1. Træk eventuelt friktionsmomentet fra for at få akselmomentet.
</details>

<details markdown="1"><summary>Hvordan finder du de mekaniske tab og jerntabet?</summary>

Regn P1 = U · I og P2 = η · P1. Regn kobbertab og børstetab. Resten er P_mek+Fe = P1 − P2 − P_Cu − P_b.
</details>

<details markdown="1"><summary>Hvad sker der med omdrejningstallet, når en shuntmotor belastes?</summary>

Det falder lidt. I_a stiger for at give mere moment, så I_a · R stiger, E falder, og n = E/(k_E Φ) falder lidt.
</details>

## 5 · Faldgruber

- Shuntstrømmen glemt, så hele I bruges som ankerstrøm.
- R_s glemt i seriemotorens ligning.
- n i o/min sat ind i ω = 2πn uden at dele med 60.
- Moment regnet med P1 i stedet for P2.
- Børstespændingsfaldet glemt.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

DC-motoren er en strømførende vikling i et magnetfelt. Kommutatoren vender strømmen i den neutrale zone, så momentet altid går samme vej, og vendepolerne ophæver ankerreaktionen, så der ikke kommer gnister. Spændingsligningen er E = U − I_a · R − ΔU_b, hvor E = k_E·Φ·n er modspændingen. Momentet er M = k_M·Φ·I_a. Ved start er E = 0, så strømmen skal begrænses med en igangsætter. Shuntmotoren har konstant felt og stabilt omdrejningstal, men løber løbsk, hvis feltet afbrydes. Seriemotoren har stort startmoment, men løber løbsk ubelastet. Tabene er kobbertab, børstetab, mekaniske tab og jerntab, og η = P2/P1.
</details>
</div>
