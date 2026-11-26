id: transformer-eksamen
navn: Alt du skal bruge til eksamen: Transformer
ikon: transformer
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise ved bordet i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Egne noter og rapporter må ikke medbringes, så alt herunder skal sidde i hovedet.

Hvis du kun når én ting: kunne tegne ækvivalentskemaet og forklare, hvorfor tomgangsforsøget giver tværgrenen og jerntabet, og kortslutningsforsøget giver seriegrenen og kobbertabet. Resten af emnet bygger på det.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | n = U_1 / U_2 = N_1 / N_2 = I_2 / I_1 | Omsætningsforhold |
| 2 | Z' = n² · Z | Henføring fra sekundær til primær |
| 3 | I_N = S_N / (√3 · U_N) | 2 kVA på 400 V: 2,89 A |
| 4 | R_Fe = U_f² / P_0,fase, X_h = U_f² / Q_0,fase | Tomgangsforsøg |
| 5 | P_0 = P_0N · (U / U_N)² | Jerntabet følger U² |
| 6 | Z_1 = U_1k,f / I_1N, R_1 = Z_1 cos φ_k, X_1 = Z_1 sin φ_k | Kortslutningsforsøg |
| 7 | e_k = U_1k / U_1N · 100 %, e_k² = e_r² + e_x² | Kortslutningsspænding |
| 8 | η = P_2 / (P_2 + P_0 + x² · P_k) | x = I / I_N |
| 9 | x_ηmax = √(P_0 / P_k) | Maks. virkningsgrad når kobbertab = jerntab |
| 10 | ΔU ≈ I · (R cos φ + X sin φ), ε ≈ x · (e_r cos φ + e_x sin φ) | Spændingsfald |

> **Fælden**
> I tomgangs- og kortslutningsformlerne skal du bruge **fasestørrelser**: U_f = U_L / √3 og effekten pr. fase = P / 3.

## 2 · Det du skal kunne forklare

### Opbygning

**Pointe:** to viklinger på en fælles lamineret jernkerne. LS inderst, HS yderst.

**Hvorfor lamineret:** de isolerede plader holder hvirvelstrømstabet nede. **Hvorfor HS yderst:** den høje spænding holdes væk fra den jordede kerne, så den er lettere at isolere.

**Store transformere:** olie til isolation og køling, ekspansionsbeholder med silicagel og Buchholz-relæ, der opdager indre fejl. Om bord: tørtransformere i epoxy.

### Ækvivalentskemaet

**Pointe:** seriegren R_1 + jX_1 (viklinger og spredning) og tværgren R_Fe ∥ jX_h (jerntab og magnetisering).

### Tomgangsforsøget

**Pointe:** nominel spænding, åben sekundær. Den målte effekt er jerntabet.

**Hvorfor:** strømmen er kun få % af I_N, så I²R er ubetydelig. Fluxen er nominel, så jerntabet er det samme som i drift. Forsøget giver også n.

### Kortslutningsforsøget

**Pointe:** kortsluttet sekundær, spændingen skrues op fra 0, til der løber I_N. Den målte effekt er kobbertabet ved fuld last.

**Hvorfor:** spændingen er kun 3–10 % af U_N, så fluxen og jerntabet er ubetydelige.

**Hvorfor R større end DC-modstanden:** hvirvelstrømstab i metaldele og strømfortrængning i tykke ledere tæller med.

**Tal du kan nævne:** 2 kVA, 20 V og 80 W giver e_k = 5 %, Z_1 = 4,0 Ω, R_1 = 3,2 Ω, X_1 = 2,4 Ω, e_r = 4 % og e_x = 3 %.

### Virkningsgrad

**Pointe:** jerntabet er konstant, kobbertabet vokser med x². Virkningsgraden er størst, hvor de to er lige store.

**Tal:** P_0 = 40 W og P_k = 80 W giver maks. η ved x = 0,71, og η = 94,3 % ved fuld last og cos φ = 1.

### Spændingsfald

**Pointe:** ΔU ≈ I · (R cos φ + X sin φ). Kun den del af spændingsfaldet, der ligger i U's retning, ændrer spændingens størrelse.

**Hvorfor I · Z er forkert:** den lægger hele I·Z til, uanset vinklen mellem strømmen og impedansen. Kapacitiv last kan give spændingsstigning.

### Måletransformere

- **Strømtransformer:** sekundæren må aldrig åbnes under drift. Uden sekundærstrøm magnetiserer primærstrømmen kernen i dyb mætning, og der opstår farlig højspænding.
- **Spændingstransformer:** må aldrig kortsluttes.
- Den ene sekundærklemme jordes altid.

## 3 · Det du skal kunne tegne

1. **Ækvivalentskemaet** med hvilket forsøg, der giver hvilken komponent.
2. **Tomgangs- og kortslutningsopstillingen** med variotransformer, tang og Aron-kobling.
3. **η som funktion af x** med jerntab som vandret linje og kobbertab som parabel, og toppunktet hvor de krydser.
4. **Kapp-diagrammet:** U_2 vandret, I·R parallelt med I, I·X vinkelret, U_1 som summen.
5. **P_0 som funktion af U**: en parabel.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor er P_0 jerntabet og P_k kobbertabet?</summary>

I tomgang er strømmen lille (ingen kobbertab), men fluxen nominel. I kortslutning er strømmen nominel, men spændingen og dermed fluxen meget lav (intet jerntab).
</details>

<details markdown="1"><summary>Hvad sker der med P_0, når du halverer spændingen?</summary>

Det falder til en fjerdedel, fordi jerntabet følger U². Det er Lab 5, aktivitet 2.
</details>

<details markdown="1"><summary>Hvorfor skal du måle 0 V, før kortslutningen monteres?</summary>

Variotransformeren skal stå på 0, ellers giver kortslutningen en stor strøm i det øjeblik, den sluttes. Øvelsestransformeren er ikke beskyttet.
</details>

<details markdown="1"><summary>Hvad bruges e_k til?</summary>

Den bestemmer kortslutningsstrømmen (I_k3 = I_N · 100 / e_k), spændingsfaldet og lastfordelingen ved paralleldrift.
</details>

<details markdown="1"><summary>Hvorfor har distributionstransformere lavt jerntab?</summary>

De står ofte på lav last, og jerntabet er der døgnet rundt. Maks. virkningsgrad ved lav last kræver lavt P_0 i forhold til P_k.
</details>

<details markdown="1"><summary>Hvorfor må en strømtransformer ikke åbnes?</summary>

Sekundærstrømmens modfelt forsvinder. Primærstrømmen driver kernen i mætning, og der induceres meget høj spænding og varme. Kortslut den først.
</details>

## 5 · Ved bordet i laboratoriet

Øvelsestransformer 2 kVA, 3 × 400 V / 3 × 400/230 V, Dyn, forsynet via variotransformer. Strømme med tang, effekt med 2-wattmetermetoden.

1. **Forberedelse:** I_N på begge sider (≈ 2,9 A).
2. **Tomgang ved U_1N:** cos φ_0, R_Fe, X_h og n.
3. **P_0 ved 25, 50, 75 og 100 %** og vis U²-sammenhængen.
4. **Kortslutning:** 0 V før montering, op til I_N, og find Z_1, R_1, X_1, e_k, e_r og e_x.
5. **Spændingsfald** ved tre belastninger med tre metoder.

## 6 · Faldgruber

- Linjespænding brugt i stedet for fasespænding i R_Fe, X_h og Z_1.
- Den samlede effekt brugt i stedet for effekten pr. fase.
- Kortslutningen monteret med spænding på.
- ΔU = I · Z brugt som facit.
- Påstået at jerntabet afhænger af lasten.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Transformeren har to viklinger på en lamineret jernkerne. Ækvivalentskemaet har en seriegren for viklinger og spredning og en tværgren for jerntab og magnetisering. Tomgangsforsøget ved nominel spænding giver jerntabet og tværgrenen, fordi strømmen er lille. Kortslutningsforsøget ved nominel strøm giver kobbertabet og seriegrenen, fordi spændingen er lav. Jerntabet er konstant og følger U², kobbertabet følger x², og virkningsgraden er størst, hvor de er lige store. Spændingsfaldet er I gange R cos φ plus X sin φ. En strømtransformer må aldrig åbnes under drift.
</details>
</div>
