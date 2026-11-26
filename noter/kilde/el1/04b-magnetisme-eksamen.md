id: magnetisme-eksamen
navn: Alt du skal bruge til eksamen: Magnetisme
ikon: magnet
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at forklare beregning af reluktans og fluxtæthed i en oplyst magnetisk kreds ud fra oplyst data."

Hvis du kun når én ting: kunne opstille N · I = Φ · (R_m,Fe + R_m,δ) for en kerne med luftgab, regne B, og forklare hvorfor luftgabet bruger det meste af amperevindingerne.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | B = Φ / A | Fluxtæthed |
| 2 | H = N · I / l | Feltstyrke |
| 3 | B = μ₀ · μ_r · H | Sammenhæng, μ₀ = 4π·10⁻⁷ |
| 4 | R_m = l / (μ₀ μ_r A) | Reluktans (1/H) |
| 5 | N · I = Φ · ΣR_m | Den magnetiske "Ohms lov" |
| 6 | L = N² / R_m | Selvinduktion |
| 7 | P_hy ∝ f, P_hv ∝ f² | Jerntab ved samme B |
| 8 | tan α = R_Fe / X_L,eff | Vinklen mellem Φ og I |

## 2 · Det du skal kunne forklare

### Beregningsgangen i en magnetisk kreds

1. Del kredsen op i stykker med samme materiale og tværsnit (jern, luftgab).
2. Regn reluktansen for hvert stykke: R_m = l / (μ₀ μ_r A). Luftgabet har μ_r = 1.
3. Læg reluktanserne sammen (de sidder i serie).
4. Φ = N · I / ΣR_m og B = Φ / A.
5. Tjek at B er under mætning (ca. 1,5 T), ellers holder μ_r ikke.

**Tal du kan nævne:** 400 mm jern (μ_r = 2.000) og 1 mm luftgab, A = 4 cm². For B = 1 T bruger jernet 159 A og luftgabet 796 A. Luftgabet tager over 80 %.

### Hvorfor har motorer og nogle spoler luftgab?

En motor skal have et luftgab, så rotoren kan dreje. I en drosselspole bruges luftgabet bevidst: det gør L mindre afhængig af μ_r og strømmen, så spolen ikke så let går i mætning.

### Jerntab

**Hysteresetab:** jernets domæner vendes hver halve periode. Energien svarer til arealet af hysteresesløjfen. Mindskes med blødt magnetisk materiale (smal sløjfe).

**Hvirvelstrømstab:** den skiftende flux inducerer strømme i selve kernen. Mindskes ved lamellering og silicium i jernet (højere resistivitet).

### AC-spolen med jernkerne

**Pointe:** wattmeteret måler både kobbertab og jerntab. Trækker du I² · R_Cu fra, har du jerntabet. Jerntabet får fluxen til at ligge vinklen α efter strømmen.

## 3 · Det du skal kunne tegne

1. En jernkerne med vikling, fluxens vej og luftgabet, og den tilsvarende "elektriske" kreds med N·I, R_m,Fe og R_m,δ i serie.
2. B-H-kurven med mætning.
3. Hysteresesløjfen med B_r og H_c markeret.
4. Vektordiagrammet for en jernspole: I vandret, Φ lidt under I (vinklen α), I·R_Cu langs I, I·X_L op, og U som resultant med vinklen φ.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvad sker der med strømmen i en spole, når kernen går i mætning?</summary>

μ_r falder, så L falder, og strømmen stiger kraftigt for at give den flux, spændingen kræver. Strømmen bliver også forvrænget (spidser).
</details>

<details markdown="1"><summary>Hvorfor bruges siliciumjern i transformerkerner?</summary>

Silicium øger jernets resistivitet, så hvirvelstrømmene bliver mindre, og det giver en smallere hysteresesløjfe. Begge dele mindsker jerntabet.
</details>

<details markdown="1"><summary>Hvad betyder remanens og koercitivkraft?</summary>

Remanens B_r er den fluxtæthed, der bliver tilbage, når strømmen er nul. Koercitivkraften H_c er den modsatte feltstyrke, der skal til for at fjerne den. En permanent magnet har stor H_c, en transformerkerne lille.
</details>

<details markdown="1"><summary>Hvordan ændrer jerntabet sig fra 50 til 60 Hz?</summary>

Ved samme B stiger hysteresetabet med 20 % (∝ f) og hvirvelstrømstabet med 44 % (∝ f²). Holdes spændingen fast, falder B dog med 1/f, og så kan jerntabet faktisk falde.
</details>

<details markdown="1"><summary>Hvordan finder du jerntabet i en spole med en måling?</summary>

Mål P med wattmeter, I og R_Cu (med DC). P_Fe = P − I² · R_Cu.
</details>

## 5 · Faldgruber

- N glemt i N · I.
- μ_r brugt i luftgabet.
- mm ikke regnet om til m, eller cm² ikke til m².
- B over mætning uden at kommentere det.
- φ (U mod I) svaret, når der spørges om α (Φ mod I).

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Amperevindingerne N · I driver fluxen Φ gennem kernen, og reluktansen R_m = l/(μA) bremser den, ligesom Ohms lov. B = Φ/A og H = NI/l. Jern har μ_r i tusinder, luft 1, så et luftgab på en millimeter bruger det meste af amperevindingerne. Over ca. 1,5 T går jernet i mætning. I AC giver jernet tab: hysteresetab (∝ f) fordi domænerne vendes, og hvirvelstrømstab (∝ f²) fordi der induceres strømme i kernen. Lamellering og siliciumjern mindsker dem. I en jernspole måler wattmeteret kobbertab plus jerntab, og jerntabet får fluxen til at halte vinklen α efter strømmen.
</details>
</div>
