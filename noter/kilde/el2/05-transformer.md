id: transformer
navn: Transformer
ikon: transformer
intro: Opbygning, den ideelle transformer, ækvivalentskemaet, tomgangs- og kortslutningsforsøget, tab og virkningsgrad, spændingsfald og de andre transformertyper.
---
# Noter

> **Kilder**
> UV 17–20 · Bog 3 kap. 2.1–2.5.1 og 2.7 · UV6B · Lab 5

Transformeren overfører energi mellem to viklinger via en fælles jernkerne. **To simple forsøg, tomgang og kortslutning, giver alle parametre i ækvivalentskemaet**, og dermed tab, virkningsgrad og spændingsfald.

## Opbygning

- **Kerne:** koldvalsede, kornorienterede, isolerede jernplader (lamineret) for at holde hvirvelstrømstabet nede. Samlinger i 45°.
- **Kernetransformer** (viklinger på to ben, større transformere) og **kappetransformer** (viklinger på midterbenet, små transformere).
- LS-viklingen ligger inderst, tættest på kernen, og HS-viklingen yderst. Det er lettere at isolere.
- **Store transformere:** olie som isolation og kølemiddel, ekspansionsbeholder med silicagel-filter og gasrelæ (Buchholz), der opdager indre fejl. **Tørtransformere** er støbt i epoxy og bruges om bord.

## Ideel transformer

```
n = U_1 / U_2 = N_1 / N_2 = I_2 / I_1          U = 4,44 · f · N · Φ_max
```

Impedanser henføres mellem siderne med n²: Z' = n² · Z (fra sekundær til primær).

## Ækvivalentskema

- **Seriegren (serieimpedans):** R_1 + jX_1. Viklingsmodstand og spredningsreaktans for begge viklinger henført til én side. Findes ved kortslutningsforsøget.
- **Tværgren (tværimpedans):** R_Fe ∥ jX_h. Jerntab og magnetisering. Findes ved tomgangsforsøget.

## Tomgangsforsøget

Nominel spænding på primærsiden, sekundærsiden åben. Strømmen er kun få % af I_N, så kobbertabet er ubetydeligt. **Den målte effekt er jerntabet.**

```
P_0 = P_Fe        cos φ_0 = P_0 / (√3 · U_1 · I_0)        n = U_1 / U_20
R_Fe = U_f² / P_0,fase        X_h = U_f² / Q_0,fase
P_0 = P_0N · (U / U_N)²
```

Jerntabet stiger med kvadratet på spændingen (Lab 5, aktivitet 2).

## Kortslutningsforsøget

Sekundærsiden kortsluttes, og primærspændingen skrues op fra 0, til der løber fuldlaststrøm. Spændingen er kun 3–10 % af U_N, så jerntabet er ubetydeligt. **Den målte effekt er kobbertabet ved fuld last.**

```
P_k = P_Cu,1/1        Z_1 = U_1k,f / I_1,1/1        R_1 = Z_1 · cos φ_k        X_1 = Z_1 · sin φ_k
e_k = U_1k / U_1N · 100 %        e_r = e_k · cos φ_k        e_x = e_k · sin φ_k        e_k² = e_r² + e_x²
```

e_k er typisk 4–6 % for distributionstransformere og bestemmer kortslutningsstrømmen (se Kortslutning og koblingsciffer).

> **Hvorfor er R fra kortslutningsforsøget større end DC-modstanden?**
> Kortslutningseffekten indeholder også hvirvelstrømstab i metaldele og strømfortrængning i tykke ledere.

### Gennemregnet eksempel (2 kVA øvelsestransformer, 400/400 V)

Eksempeltal: tomgang ved 400 V giver I_0 = 0,15 A og P_0 = 40 W. Kortslutning ved I_N giver U_1k = 20 V og P_k = 80 W. Regn I_N, cos φ_0, R_Fe, X_h, Z_1, R_1, X_1, e_k, e_r og e_x, før du åbner.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| I_N | 2.000 / (√3 · 400) | 2,89 A |
| cos φ_0 | 40 / (√3 · 400 · 0,15) | 0,385 |
| Q_0 | √(103,9² − 40²) | 95,9 var |
| R_Fe | 230,9² / (40 / 3) | 4.000 Ω |
| X_h | 230,9² / (95,9 / 3) | 1.668 Ω |
| Z_1 | (20 / √3) / 2,89 | 4,0 Ω |
| cos φ_k | 80 / (√3 · 20 · 2,89) | 0,80 |
| R_1 / X_1 | 4,0 · 0,8 / 4,0 · 0,6 | 3,2 / 2,4 Ω |
| e_k / e_r / e_x | 20 / 400 · 100 %, · 0,8, · 0,6 | 5 / 4 / 3 % |

Alle værdier er pr. fase i en tænkt stjerne.
</details>

## Tab og virkningsgrad

```
η = P_2 / (P_2 + P_0 + x² · P_k)        x = I / I_N
```

- P_0 (jerntab) er konstant, så længe spændingen er konstant. Kobbertabet varierer med belastningen i anden.
- **Maksimal virkningsgrad, når kobbertab = jerntab:** x = √(P_0 / P_k).

<details markdown="1"><summary>Forudsig først: ved hvilken belastningsgrad har eksempeltransformeren (P_0 = 40 W, P_k = 80 W) den højeste virkningsgrad?</summary>

x = √(40 / 80) = 0,71, altså ved ca. 71 % last. Prøv at gøre jerntabet mindre i modellen, og se toppunktet flytte mod lav last. Det er derfor, transformere, der står meget i tomgang, bygges med lavt jerntab.
</details>

<div class="m" data-m="trafoeta"></div>

## Spændingsfald

Definitionen er forskellen i talværdi: ΔU = |U_1| − |U_2|. I praksis bruges den tilnærmede formel (DS/HD 60364), som ligger tæt på definitionen:

```
ΔU ≈ I · R · cos φ + I · X · sin φ
ε  ≈ x · (e_r · cos φ + e_x · sin φ)        (procent, Kapp-diagrammet)
```

Den forkerte metode ΔU = I · Z giver en fejl, der vokser, jo større forskellen er mellem strømmens vinkel og impedansens vinkel. Fasespændingsfald × √3 = netspændingsfald. Kapacitiv last kan give negativt spændingsfald (spændingsstigning).

<div class="m" data-m="spfald"></div>

## Andre transformertyper

| Type | Kendetegn |
|---|---|
| Sparetransformer (autotransformer) | Én vikling med udtag. Billig og let, men ingen galvanisk adskillelse |
| Variotransformer | Justerbar sparetransformer med kulkontakt (bruges i labbet, 0–100 %) |
| Skilletransformer | Galvanisk adskillelse af en enkelt brugsgenstand |
| Sikkerhedstransformer | Leverer SELV (max 50 V AC), forstærket isolation |
| Strømtransformer (CT) | Primær i serie med lederen, typisk x/5 A eller x/1 A. **Sekundæren må aldrig åbnes under drift.** Kortslut den først, ellers opstår farlig højspænding og overophedning |
| Spændingstransformer (VT) | Arbejder næsten ubelastet, typisk 100 V eller 110 V sekundært. **Må ikke kortsluttes** |

Måletransformere angives med nøjagtighedsklasse og VA-tal (belastningsevne). Flere strømspoler kobles i serie på en CT, flere spændingsspoler i parallel på en VT. Den ene sekundærklemme jordes altid.

## Lab 5 kort

Øvelsestransformer: S_N = 2.000 VA, 3 × 400 V / 3 × 400/230 V, Dyn. Forsynes via variotransformer. Strømme måles med tang (I = gennemsnit af I_L1 og I_L3), effekten med 2-wattmetermetoden.

1. Forberedelse: I_N på primær- og sekundærsiden (≈ 2,9 A).
2. Tomgangsforsøg ved U_1N: cos φ_0, R_Fe, X_h og n.
3. P_0 ved 25, 50, 75 og 100 % af U_1N. Vis den kvadratiske sammenhæng.
4. Kortslutningsforsøg: kontrollér 0 V, før kortslutningen monteres, og skru op til I_k = I_N. Find Z_1, R_1, X_1, e_k, e_r og e_x.
5. Spændingsfald over R_installation (ca. 2,2 Ω pr. fase) ved tre belastninger. Sammenlign definitionen, den tilnærmede formel og den "forkerte" metode.

> **Mere til labøvelse 5**
> [Labnoterne](../../modeller/el2/lab5-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab5.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab5-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor måler tomgangsforsøget jerntabet og kortslutningsforsøget kobbertabet?
2. Hvorfor må en strømtransformers sekundærkreds aldrig åbnes?
3. Hvad sker der med jerntabet, hvis spændingen halveres?
4. Tegn ækvivalentskemaet, og skriv, hvilket forsøg der giver hver komponent.

<details markdown="1"><summary>Svar</summary>

1. I tomgang er strømmen så lille, at I²R er ubetydelig. I kortslutning er spændingen så lav, at fluxen og jerntabet er ubetydelige.
2. Uden sekundærstrøm er der intet modfelt. Primærstrømmen magnetiserer kernen i dyb mætning, og der induceres farlig høj spænding og varme.
3. Det falder til en fjerdedel (P_0 ∝ U²).
4. Seriegren R_1 + jX_1 (kortslutningsforsøget) og tværgren R_Fe ∥ jX_h (tomgangsforsøget).
</details>
</div>

# Formler

### Ideel transformer
```
n  = U_1 / U_2 = N_1 / N_2 = I_2 / I_1
U  = 4,44 · f · N · Φ_max
Z' = n² · Z                     (henføring til primær)
I_N = S_N / (√3 · U_N)
```

### Tomgangsforsøg
```
P_0     = P_Fe
cos φ_0 = P_0 / (√3 · U_1 · I_0)
R_Fe    = U_f² / P_0,fase
X_h     = U_f² / Q_0,fase
P_0     = P_0N · (U / U_N)²
```

### Kortslutningsforsøg
```
P_k = P_Cu ved fuld last
Z_1 = U_1k,f / I_1N      R_1 = Z_1 · cos φ_k      X_1 = Z_1 · sin φ_k
e_k = U_1k / U_1N · 100 %
e_r = e_k · cos φ_k      e_x = e_k · sin φ_k      e_k² = e_r² + e_x²
```

### Virkningsgrad
```
η     = P_2 / (P_2 + P_0 + x² · P_k)        x = I / I_N
x_ηmax = √(P_0 / P_k)
```

### Spændingsfald
```
ΔU = |U_1| − |U_2|                          (definition)
ΔU ≈ I · (R · cos φ + X · sin φ)            (DS/HD 60364)
ε  ≈ x · (e_r · cos φ + e_x · sin φ)        (procent)
```

# Quiz

Q: En 2 kVA transformer på 400 V. Hvad er I_N? (A, 2 decimaler)
N: 2,89 ; 0,01 ; A
L: I_N = S_N / (√3 · U_N) = 2.000 / (√3 · 400) = 2,89 A.
F: Brug altid √3 og netspændingen ved 3-faset.

Q: Tomgangseffekten er 40 W ved 400 V. Hvad er den ved 200 V? (W)
N: 10 ; 0,1 ; W
L: P_0 = 40 · (200 / 400)² = 40 · 0,25 = 10 W.
F: Jerntabet følger U².

Q: Ved kortslutningsforsøget skal der 20 V til for at drive I_N gennem en 400 V transformer. Hvad er e_k? (%)
N: 5 ; 0,05 ; %
L: e_k = 20 / 400 · 100 % = 5 %.
F: e_k bestemmer også kortslutningsstrømmen: I_k3 = 20 · I_N.

Q: P_0 = 40 W og P_k = 80 W. Ved hvilken belastningsgrad x er virkningsgraden størst? (2 decimaler)
N: 0,71 ; 0,01 ;
L: x = √(P_0 / P_k) = √0,5 = 0,71.
F: Her er kobbertabet x² · P_k lig med jerntabet.

Q: Hvad er virkningsgraden ved fuld last og cos φ = 1 for samme transformer (2 kVA)? (%, 1 decimal)
N: 94,3 ; 0,1 ; %
L: η = 2.000 / (2.000 + 40 + 80) = 0,943 = 94,3 %.
F: Ved fuld last er x = 1, så kobbertabet er hele P_k.

Q: e_r = 4 % og e_x = 3 %. Hvor stort er det procentvise spændingsfald ved fuld last og cos φ = 0,8 induktiv? (%)
N: 5 ; 0,05 ; %
L: ε = 1 · (4 · 0,8 + 3 · 0,6) = 3,2 + 1,8 = 5,0 %.
F: sin φ = 0,6, når cos φ = 0,8.

Q: Hvorfor er ΔU = I · Z den forkerte metode?
A: Fordi den glemmer √3
R: Fordi den lægger tallene sammen uden at tage hensyn til vinklen mellem strøm og impedans
A: Fordi Z ikke kan måles
A: Fordi den kun gælder for DC
F: Kun den del af I·Z, der ligger i retning af U, ændrer spændingens størrelse.

Q: Hvad må du aldrig gøre med en strømtransformer i drift?
A: Kortslutte sekundæren
R: Åbne sekundærkredsen
A: Jorde den ene sekundærklemme
A: Koble flere strømspoler i serie
F: Åben sekundær giver farlig højspænding og overophedning. Kortslut den først.

Q: Hvorfor ligger LS-viklingen inderst på kernen?
A: Fordi den har flest vindinger
R: Fordi det er lettere at isolere HS-viklingen, når den ligger yderst
A: Fordi den skal køles af olien
A: Det er tilfældigt
F: Den høje spænding holdes længst væk fra den jordede kerne.
