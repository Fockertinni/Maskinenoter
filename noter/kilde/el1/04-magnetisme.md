id: magnetisme
navn: Magnetisme
ikon: magnet
intro: Magnetisk flux og fluxtæthed, feltstyrke og permeabilitet, magnetiske kredse med og uden luftgab, jerntab og AC-spolen med jernkerne.
---
# Noter

> **Kilder**
> PP4 Magnetisme · Lab 4 (spole med jernkerne) · Obligatorisk opgavesæt 2, opgave 3 og 9

En strøm gennem en spole skaber et magnetfelt. Hvor stærkt feltet bliver, afhænger af amperevindingerne N · I og af, hvor let fluxen kan løbe gennem kernen. Det regnes på samme måde som en DC-kreds: N · I er "spændingen", fluxen Φ er "strømmen", og reluktansen R_m er "modstanden".

## Flux, fluxtæthed og feltstyrke

```
Φ                    [Wb]       magnetisk flux (antal feltlinjer)
B = Φ / A            [T = Wb/m²] fluxtæthed
H = N · I / l        [A/m]      magnetisk feltstyrke
B = μ · H = μ₀ · μ_r · H        μ₀ = 4π·10⁻⁷ H/m
```

- **μ_r** er materialets relative permeabilitet. Luft har 1, elektroblik typisk 1.000–5.000.
- **B-H-kurven** for jern er ikke lineær. Over ca. 1,2–1,6 T går jernet i **mætning**: μ_r falder, og mere strøm giver næsten ikke mere flux. Det ses på slide 2.

## Magnetiske kredse

| Elektrisk kreds | Magnetisk kreds |
|---|---|
| Spænding U | Magnetomotorisk kraft F_m = N · I [A] |
| Strøm I | Flux Φ [Wb] |
| Modstand R = l / (γ · A) | Reluktans R_m = l / (μ · A) [1/H] |
| U = R · I | N · I = Φ · R_m |

Består kredsen af flere dele (jern og luftgab), sidder reluktanserne i serie:

```
N · I = Φ · (l_Fe / (μ₀ μ_r A_Fe) + δ / (μ₀ A_δ))
```

**Luftgabet dominerer.** Et luftgab på 1 mm har samme reluktans som 2 m jern med μ_r = 2.000. Derfor bruger en motor med luftgab meget af sin magnetiseringsstrøm på at drive fluxen over gabet.

> **Trykfejl på slides (PP4, slide 3)**
> Formlen er skrevet I = Φ · l₁/(μ₁A₁) + Φ · l₂/(μ₂A₂). Venstre side skal være N · I (amperevindinger), ikke I. Ved A_L = A_Fe · σ er σ fyldfaktoren for den lamellerede kerne (andelen af tværsnittet, der er jern). Den sidste tolkning er **usikker**, da sliden ikke forklarer σ.

<details markdown="1"><summary>Forudsig først: kernen har μ_r = 2.000, 400 mm jernvej og et luftgab på 1 mm. Hvor stor en del af amperevindingerne bruges i luftgabet?</summary>

Jernet svarer til 400 / 2.000 = 0,2 mm luft. Gabet er 1 mm. Så gabet bruger 1 / 1,2 ≈ 83 %. Prøv i modellen, og se hvad der sker, når du sætter δ til 0.
</details>

<div class="m" data-m="luftgab"></div>

### Gennemregnet eksempel

En kerne har jernvej 400 mm, A = 4 cm², μ_r = 2.000 og et luftgab på 1 mm. Hvor mange amperevindinger skal der til for B = 1 T?

<details markdown="1"><summary>Vis udregning</summary>

| Del | Udregning | Resultat |
|---|---|---|
| H i jernet | 1 / (4π·10⁻⁷ · 2.000) | 398 A/m |
| N·I i jernet | 398 · 0,399 m | 159 A |
| H i luftgabet | 1 / (4π·10⁻⁷) | 795.800 A/m |
| N·I i luftgabet | 795.800 · 0,001 m | 796 A |
| I alt | 159 + 796 | 955 A, fx 500 vindinger og 1,91 A |
| L | N² / R_m = 500² / (0,399/(μ₀·2000·4·10⁻⁴) + 0,001/(μ₀·4·10⁻⁴)) | 0,105 H |
</details>

### Spolens selvinduktion (opgavesæt 2, opgave 3)

```
L = μ · A · N² / l = N² / R_m
```

L følger N². En ringkerne med 800 vindinger har L = 1,40 H. Bruges et udtag med 500 vindinger, bliver L = 1,40 · (500/800)² = **0,547 H**. Kobbertråden (0,12 mm, 60 mm pr. vinding) har R = 0,0175 · 500 · 0,06 / 0,01131 = 46,4 Ω, så ved 50 Hz er X_L = 171,8 Ω og cos φ = 46,4 / 178 = **0,26**.

## Jerntab

Jerntabet P_Fe er varme i kernen og består af to dele:

| Tab | Årsag | Afhænger af f | Mindskes ved |
|---|---|---|---|
| Hysteresetab P_hy | Domænerne i jernet vendes 2 gange pr. periode, og det koster energi (arealet af hysteresesløjfen) | P_hy ∝ f | Blødt magnetisk materiale med smal sløjfe (siliciumjern, kornorienteret blik) |
| Hvirvelstrømstab P_hv | Den skiftende flux inducerer strømme rundt i selve kernen | P_hv ∝ f² | Lamellering (tynde, isolerede plader) og silicium, der øger jernets resistivitet |

```
P_Fe = P_hy + P_hv        P_hy = k₂ · f        P_hv = k₁ · f²     (ved samme B)
```

- **B_r (remanens)** er den flux, der bliver tilbage, når H = 0. **H_c (koercitivkraft)** er den H, der skal til for at fjerne den.
- Fra 50 til 60 Hz (samme B) stiger hysteresetabet 20 % og hvirvelstrømstabet 44 %.

> **Bemærk**
> P_hv ∝ f² og P_hy ∝ f gælder kun ved konstant fluxtæthed. Holder du spændingen fast og hæver f, falder B (U ≈ 4,44 · f · N · B · A), og så falder jerntabet i stedet. Dette går ud over slides.

## AC-spolen med jernkerne

En spole med jernkerne har både kobbertab og jerntab. Wattmeteret måler summen:

```
P = P_Cu + P_Fe = I² · R_Cu + I² · R_Fe = I² · R_eff
Z = U / I        X_L,eff = √(Z² − R_eff²)        tan α = R_Fe / X_L,eff
```

- **φ** er vinklen mellem U og I.
- **α** er vinklen mellem fluxen Φ og strømmen I. Uden jerntab ligger Φ i fase med I. Hysteresen får Φ til at halte α efter I.

<div class="m" data-m="jernspole"></div>

### Gennemregnet eksempel (opgavesæt 2, opgave 9)

230 V, 50 Hz, I = 1,25 A, P = 250 W og R_Cu = 130 Ω.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| P_Cu | 1,25² · 130 | 203,1 W |
| P_Fe | 250 − 203,1 | 46,9 W |
| φ (U mod I) | cos⁻¹(250 / (230 · 1,25)) | 29,6° |
| Z og R_eff | 230 / 1,25 og 250 / 1,25² | 184 Ω og 160 Ω |
| R_Fe | 160 − 130 | 30 Ω |
| X_L,eff | √(184² − 160²) | 90,9 Ω |
| α (Φ mod I) | tan⁻¹(30 / 90,9) | 18,3° |

> **Usikkert i besvarelsen**
> Opgave 9.2 spørger efter vinklen mellem feltet og strømmen. Den indsendte besvarelse regnede φ = 29,5° (U mod I). Vinklen mellem Φ og I er α ≈ 18,3°.
</details>

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad svarer til spænding, strøm og modstand i en magnetisk kreds?
2. Hvorfor kræver et luftgab så mange amperevindinger?
3. Hvorfor lamellerer man en jernkerne?
4. Hvad er forskellen på vinklen φ og vinklen α i en jernspole?

<details markdown="1"><summary>Svar</summary>

1. N · I, fluxen Φ og reluktansen R_m = l/(μA).
2. Luft har μ_r = 1, så reluktansen pr. mm er 1.000–5.000 gange større end i jern.
3. Tynde, isolerede plader afbryder hvirvelstrømmenes vej og mindsker hvirvelstrømstabet.
4. φ er mellem U og I. α er mellem Φ og I og skyldes jerntabet.
</details>
</div>

# Formler

### Grundbegreber
```
B = Φ / A                 [T]
H = N · I / l             [A/m]
B = μ₀ · μ_r · H          μ₀ = 4π·10⁻⁷ H/m
```

### Magnetisk kreds
```
R_m = l / (μ₀ · μ_r · A)        [1/H]
F_m = N · I = Φ · R_m           [A]
N · I = Φ · (R_m,Fe + R_m,δ)    (serie)
L = μ · A · N² / l = N² / R_m   [H]
```

### Jerntab
```
P_Fe = P_hy + P_hv
P_hy = k₂ · f       P_hv = k₁ · f²      (ved samme B)
```

### AC-spole med jernkerne
```
P = I² · (R_Cu + R_Fe)     Z = U / I
X_L,eff = √(Z² − R_eff²)   tan α = R_Fe / X_L,eff
```

# Quiz

Q: En flux på 0,4 mWb går gennem et tværsnit på 4 cm². Hvad er B? (T)
N: 1 ; 0,01 ; T
L: B = Φ / A = 0,4·10⁻³ / 4·10⁻⁴ = 1,0 T.
F: B = Φ / A.

Q: Hvad svarer reluktansen R_m til i en elektrisk kreds?
A: Spændingen
A: Strømmen
R: Modstanden
A: Effekten
F: N · I = Φ · R_m svarer til U = I · R.

Q: Hvorfor bruger et lille luftgab det meste af amperevindingerne?
R: Luft har μ_r = 1, så reluktansen pr. længde er tusinder af gange større end i jern
A: Luftgabet har stor elektrisk modstand
A: Fluxen er større i luftgabet
A: Der opstår hvirvelstrømme i luftgabet
F: R_m = l/(μA). Med μ_r = 1 i luft svarer 1 mm luft til 1–5 m jern.

Q: En spole med 800 vindinger har L = 1,40 H. Hvad bliver L med 500 vindinger på samme kerne? (H)
N: 0,547 ; 0,005 ; H
L: L ∝ N², så L = 1,40 · (500/800)² = 1,40 · 0,3906 = 0,547 H.
F: L = N² / R_m, og R_m er den samme kerne.

Q: Hvilket tab mindskes ved at lamellere jernkernen?
A: Hysteresetabet
R: Hvirvelstrømstabet
A: Kobbertabet
A: Det mekaniske tab
F: De isolerede plader afbryder hvirvelstrømmenes vej i kernen.

Q: Frekvensen hæves fra 50 til 60 Hz ved samme B. Hvor meget stiger hvirvelstrømstabet? (%)
N: 44 ; 1 ; %
L: P_hv ∝ f², så (60/50)² = 1,44, altså 44 % mere.
F: Hysteresetabet stiger kun 20 %, fordi det er proportionalt med f.

Q: En jernspole på 230 V trækker 1,25 A og 250 W, og R_Cu = 130 Ω. Hvor stort er jerntabet? (W)
N: 46,9 ; 0,5 ; W
L: P_Cu = 1,25² · 130 = 203,1 W. P_Fe = 250 − 203,1 = 46,9 W.
F: Wattmeteret måler kobbertab og jerntab tilsammen.

Q: Hvad viser vinklen α i vektordiagrammet for en jernspole?
A: Vinklen mellem U og I
R: Vinklen mellem fluxen Φ og strømmen I, som skyldes jerntabet
A: Vinklen mellem U og Φ
A: Spolens effektfaktor
F: Uden jerntab ville Φ ligge i fase med I. tan α = R_Fe / X_L,eff.

Q: Hvad sker der, når jernet går i mætning?
A: μ_r stiger kraftigt
R: μ_r falder, så mere strøm næsten ikke giver mere flux
A: Jerntabet forsvinder
A: B falder til nul
F: Over ca. 1,2–1,6 T flader B-H-kurven ud.
