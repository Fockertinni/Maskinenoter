id: energi-eksamen
navn: Alt du skal bruge til eksamen: Energi, effekt og virkningsgrad
ikon: energi
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen for Grundlæggende termodynamik stod ikke i materialet. Tjek læringsmålene. Siden er bygget, så du kan både regne og forklare emnet mundtligt.

Hvis du kun når én ting: kunne formulere 1. og 2. hovedsætning med et eksempel fra maskinrummet, og regne en virkningsgrad og et brændstofforbrug.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | Q = ΔU + W | 1. hovedsætning, lukket system |
| 2 | Φ − P = ṁ · (h₂ − h₁) | 1. hovedsætning, åbent system |
| 3 | η = P_ud / P_ind | Virkningsgrad |
| 4 | η_total = η₁ · η₂ · η₃ | Kæde af maskiner |
| 5 | Φ_b = ṁ_b · H_n | Brændstoffets effekt |
| 6 | η_Carnot = 1 − T_k / T_v | Største mulige virkningsgrad (kelvin) |

## 2 · Det du skal kunne forklare

### 1. hovedsætning

**Pointe:** energi kan omdannes, men ikke opstå eller forsvinde.

**Eksempel:** i en dieselmotor bliver brændstoffets energi til akselarbejde (ca. 45 %), varme i kølevandet, varme i udstødningen og stråling. Summen er lig den tilførte energi.

### 2. hovedsætning

**Pointe:** varme strømmer af sig selv kun fra varmt til koldt, og en varmemaskine skal altid afgive noget varme til et koldere sted.

**Konsekvens:** η er altid under Carnot-virkningsgraden. 550 °C og 30 °C giver højst 63 %.

### Virkningsgrad

**Pointe:** nyttig effekt delt med tilført effekt. Resten er tab, næsten altid varme.

**I en kæde ganges de:** 0,9 · 0,35 · 0,96 = 0,30.

### Specifikt brændstofforbrug

**Pointe:** gram brændstof pr. kWh akselarbejde. Jo lavere, jo bedre. Moderne store dieselmotorer ligger på ca. 160–200 g/kWh.

### COP er ikke en virkningsgrad

**Pointe:** en varmepumpe flytter varme. Leveret varme = el + optaget varme, så COP kan være 3–5 uden at bryde 1. hovedsætning.

## 3 · Det du skal kunne tegne

1. **Energistrømsdiagram (Sankey)** for en dieselmotor: brændstof ind, akselarbejde, kølevand, udstødning og stråling ud.
2. **Varmemaskine** som kasse mellem et varmt og et koldt reservoir med Q_v ind, W ud og Q_k ud.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvad er brændstofforbruget for en motor på 500 kW med η = 42 % og H_n = 42.700 kJ/kg?</summary>

Φ_b = 500/0,42 = 1.190,5 kW. ṁ = 1.190,5/42.700 = 0,0279 kg/s = 100,4 kg/h. b = 201 g/kWh.
</details>

<details markdown="1"><summary>Hvorfor kan et dampkraftværk ikke få 100 % virkningsgrad, selv uden friktion?</summary>

2. hovedsætning: dampen skal kondenseres, og fordampningsvarmen afgives til kølevandet. Carnot-grænsen er 1 − T_k/T_v.
</details>

<details markdown="1"><summary>Hvordan kan man udnytte tabene fra en motor?</summary>

Spildvarmegenvinding: udstødningskedel til damp, ferskvandsgenerator på kølevandet, varme til opholdsrum og brændstofopvarmning. Det hæver den samlede energiudnyttelse, ikke motorens η.
</details>

<details markdown="1"><summary>Gas tilføres 50 kJ og udfører 20 kJ arbejde. Hvad sker der med den indre energi?</summary>

ΔU = 50 − 20 = 30 kJ. Gassen bliver varmere.
</details>

## 5 · Faldgruber

- Virkningsgrader lagt sammen i stedet for ganget.
- Carnot regnet i °C.
- kW og kWh blandet sammen.
- COP kaldt virkningsgrad.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

1. hovedsætning er energibevarelse: Q = ΔU + W i et lukket system, og Φ − P = ṁ · Δh i et åbent. 2. hovedsætning siger, at varme kun strømmer af sig selv fra varmt til koldt, og at en varmemaskine altid må afgive varme til et koldere sted, så η er under Carnot-grænsen 1 − T_k/T_v i kelvin. Virkningsgraden er nyttig effekt delt med tilført, og i en kæde ganges de. Brændstofforbruget findes som P/(η · H_n), og det specifikke forbrug i g/kWh er et mål for motorens økonomi.
</details>
</div>
