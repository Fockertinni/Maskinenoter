id: energi
navn: Energi, effekt og virkningsgrad
ikon: energi
intro: Termodynamikkens 1. og 2. hovedsætning, indre energi, arbejde og varme, effekt, brændværdi, specifikt brændstofforbrug, virkningsgrad i en kæde og Carnot.
---
# Noter

> **Kilder**
> Ikke dækket af slides i materialet. Standardteori.

Energi kan omdannes, men den kan hverken opstå eller forsvinde. Det er termodynamikkens 1. hovedsætning, og det er grundlaget for alle energiregnskaber i maskinrummet.

## 1. hovedsætning

For et lukket system (en gas i en cylinder):

```
Q = ΔU + W
```

Den tilførte varme Q går dels til at øge gassens **indre energi** U (den bliver varmere), dels til at udføre **arbejde** W (den skubber stemplet).

For et åbent system med en strøm igennem (kedel, turbine, pumpe, varmeveksler) bruger man entalpi:

```
Φ − P = ṁ · (h₂ − h₁)        (når kinetisk og potentiel energi ses bort fra)
```

Φ er tilført varmeeffekt, og P er den akseleffekt, systemet afgiver.

> **Fortegn**
> Her regnes tilført varme og afgivet arbejde som positive. Nogle bøger bruger andre fortegn. Tjek hvilken konvention bogen bruger.

## Energi, arbejde og effekt

| Størrelse | Enhed | Sammenhæng |
|---|---|---|
| Energi, arbejde, varme | J, kJ, kWh | 1 kWh = 3,6 MJ |
| Effekt | W, kW | P = W / t |
| Mekanisk arbejde | J | W = F · s |
| Akseleffekt | W | P = M · ω = 2π · n · M |

## Brændværdi og brændstofforbrug

Brændværdien H (kJ/kg) er den energi, der frigives ved fuldstændig forbrænding. Den **nedre brændværdi** H_n regner med, at vandet i røggassen forbliver damp, og bruges ved motorer. Marine diesel har H_n ≈ 42,7 MJ/kg.

```
Φ_brændsel = ṁ_b · H_n
η = P_aksel / Φ_brændsel
b = ṁ_b / P   [g/kWh]          b = 3.600.000 / (η · H_n [kJ/kg])
```

### Gennemregnet eksempel

En hjælpemotor yder 500 kW på akslen med en virkningsgrad på 42 %. Brændstoffets H_n = 42.700 kJ/kg. Hvad er brændstofforbruget i kg/h og det specifikke forbrug? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

Φ_b = P / η = 500 / 0,42 = 1.190,5 kW.
ṁ_b = 1.190,5 / 42.700 = 0,02788 kg/s = **100,4 kg/h.**
b = 100.400 g/h / 500 kW = **201 g/kWh.**
</details>

## Virkningsgrad

```
η = nyttig effekt / tilført effekt = P_ud / P_ind
```

Virkningsgraden er altid under 1. Resten bliver til tab, næsten altid som varme. I en kæde af maskiner **ganges** virkningsgraderne:

```
η_total = η₁ · η₂ · η₃ · …
```

<div class="m" data-m="eta"></div>

## 2. hovedsætning

Varme strømmer af sig selv kun fra varmt til koldt. Og en varmemaskine kan aldrig omdanne al tilført varme til arbejde: noget skal afgives til et koldere reservoir (kølevand, omgivelser). Den højest mulige virkningsgrad er **Carnot-virkningsgraden:**

```
η_Carnot = 1 − T_kold / T_varm        T i kelvin
```

En dampturbine med damp på 550 °C og kondensator på 30 °C kan højst få η = 1 − 303,15 / 823,15 = 0,63. I praksis får et dampkraftværk 35–45 %, fordi processen ikke er ideel.

> **Faldgrube**
> Carnot-formlen kræver kelvin. Med °C får du 1 − 30/550 = 0,95, hvilket er helt forkert.

**Forudsig først:** hvorfor kan et varmepumpeanlæg levere mere varme, end det bruger af el (COP over 1), når virkningsgraden altid er under 1?

<details markdown="1"><summary>Vis svar</summary>

Varmepumpen laver ikke varmen af el. Den bruger el til at **flytte** varme fra et koldt sted (luft, havvand) til et varmt. Den leverede varme er elen plus den optagne varme, så 1. hovedsætning holder stadig. COP er ikke en virkningsgrad.
</details>

# Formler

### 1. hovedsætning
```
Lukket system:   Q = ΔU + W
Åbent system:    Φ − P = ṁ · (h₂ − h₁)
ΔU = m · c_v · Δt   (idealgas)
```

### Effekt og arbejde
```
P = W / t        W = F · s        P = 2π · n · M  (n i o/s)
1 kWh = 3,6 MJ
```

### Brændstof
```
Φ_b = ṁ_b · H_n
η = P / Φ_b
b = 3.600.000 / (η · H_n)   [g/kWh], H_n i kJ/kg
```

### Virkningsgrad
```
η = P_ud / P_ind
η_total = η₁ · η₂ · η₃
Tab = P_ind − P_ud
```

### Carnot
```
η_Carnot = 1 − T_kold / T_varm     (kelvin)
```

# Quiz

Q: En pumpe optager 15 kW el og leverer 11,25 kW hydraulisk effekt. Hvad er virkningsgraden? (%)
N: 75 ; 0,5 ; %
L: η = 11,25 / 15 = 0,75 = 75 %.
F: Nyttig effekt divideret med tilført.

Q: En kæde har η = 0,9, 0,35 og 0,96. Hvad er den samlede virkningsgrad? (%, 1 decimal)
N: 30,2 ; 0,2 ; %
L: 0,9 · 0,35 · 0,96 = 0,3024 = 30,2 %.
F: Virkningsgrader ganges.

Q: Hvad er den største mulige virkningsgrad for en varmemaskine mellem 400 °C og 40 °C? (%, 1 decimal)
N: 53,5 ; 0,3 ; %
L: η = 1 − 313,15 / 673,15 = 1 − 0,4652 = 0,535 = 53,5 %.
F: Carnot med temperaturer i kelvin.

Q: En motor yder 1.000 kW med η = 0,45, og H_n = 42.700 kJ/kg. Hvad er brændstofforbruget? (kg/h)
N: 187,4 ; 1 ; kg/h
L: Φ_b = 1.000 / 0,45 = 2.222 kW. ṁ = 2.222 / 42.700 = 0,05204 kg/s = 187,4 kg/h.
F: Del effekten med virkningsgraden, og så med brændværdien.

Q: Hvad siger 1. hovedsætning?
A: Varme strømmer fra varmt til koldt
R: Energi kan omdannes, men hverken opstå eller forsvinde
A: Ingen maskine har virkningsgrad 1
A: Ved 0 K står molekylerne stille
F: Det er energibevarelse. "Varme fra varmt til koldt" og "η under 1" er 2. hovedsætning.

Q: Gas i en cylinder tilføres 50 kJ varme og udfører 20 kJ arbejde. Hvor meget stiger den indre energi? (kJ)
N: 30 ; 0,1 ; kJ
L: ΔU = Q − W = 50 − 20 = 30 kJ.
F: Q = ΔU + W.

Q: Hvorfor er virkningsgraden altid under 1?
A: Fordi energi forsvinder
R: Fordi en del af energien altid bliver til varme, der ikke kan udnyttes til det ønskede formål
A: Fordi man måler forkert
A: Det er den ikke, en elmotor kan have η = 1
F: Energien forsvinder ikke (1. hovedsætning), men noget bliver til tab, typisk varme.

Q: Hvad er 201 g/kWh et udtryk for?
A: Motorens effekt
R: Det specifikke brændstofforbrug
A: Brændværdien
A: Smøreolieforbruget
F: Gram brændstof pr. kWh akselarbejde. Jo lavere, jo bedre virkningsgrad.
