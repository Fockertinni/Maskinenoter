id: varmetransmission
navn: Varmetransmission
ikon: varmeovf
intro: Varmeledning, konvektion og stråling, varmeledningsevne, overgangstal, U-værdi og isolering, og hvordan varme overføres i en varmeveksler.
---
# Noter

> **Kilder**
> Ikke dækket af slides i materialet. Standardteori. Strålingsdelen hænger sammen med IR-termometret i emnet Termometre.

Varme kan bevæge sig på tre måder: ved **ledning** gennem et materiale, ved **konvektion** med en strømmende væske eller gas, og ved **stråling** som elektromagnetiske bølger. I praksis sker det ofte alle tre på én gang.

## Varmeledning (konduktion)

Varmen vandrer gennem materialet fra molekyle til molekyle. Hvor godt det går, afhænger af **varmeledningsevnen λ** (lambda) i W/(m·K).

```
Φ = λ · A · Δt / d        [W]
```

| Materiale | λ [W/(m·K)] |
|---|---|
| Kobber | ca. 390 |
| Aluminium | ca. 220 |
| Stål | ca. 50 |
| Rustfrit stål | ca. 15 |
| Murværk | ca. 0,6 |
| Vand | ca. 0,6 |
| Mineraluld | ca. 0,04 |
| Stillestående luft | ca. 0,026 |

Isoleringsmaterialer virker, fordi de holder luft stille i små lommer.

## Konvektion

En væske eller gas strømmer forbi en overflade og tager varmen med. Overgangen beskrives med **varmeovergangstallet h** (også kaldet α) i W/(m²·K):

```
Φ = h · A · Δt
```

| Situation | h [W/(m²·K)] |
|---|---|
| Luft, naturlig konvektion | 5–25 |
| Luft, blæser | 25–250 |
| Vand, strømmende | 500–10.000 |
| Kondenserende damp | 5.000–100.000 |

**Naturlig konvektion** drives af, at varm væske er lettere og stiger op. **Tvungen konvektion** drives af en pumpe eller blæser og er langt mere effektiv.

## Stråling

Alle legemer udsender varmestråling, og jo varmere, jo mere. Stråling kræver intet medium og går også gennem vakuum.

```
Φ = ε · σ · A · (T₁⁴ − T₂⁴)        σ = 5,67 · 10⁻⁸ W/(m²·K⁴)
```

ε (emissionstallet) er mellem 0 og 1. Mat sort er tæt på 1, blankt metal tæt på 0. Det er derfor, rør i maskinrummet isoleres og beklædes med blank aluminium.

<div class="m" data-m="straal"></div>

## Gennemgang gennem en væg: U-værdi

Varmen fra et medium gennem en væg til et andet medium skal igennem flere "modstande" i serie: overgangen på indersiden, hvert lag i væggen og overgangen på ydersiden. Modstandene lægges sammen ligesom elektriske modstande i serie.

```
R = 1/h_i + d₁/λ₁ + d₂/λ₂ + … + 1/h_u      [m²·K/W]
U = 1 / R                                 [W/(m²·K)]
Φ = U · A · Δt
```

<div class="m" data-m="vaeg"></div>

### Gennemregnet eksempel

En 10 mm stålvæg med 50 mm mineraluld har 180 °C inde og 25 °C ude, og h_i = h_u = 10 W/(m²·K). Find U, varmetabet pr. m², og overfladetemperaturen på ydersiden. Regn først.

<details markdown="1"><summary>Vis udregning</summary>

| Lag | Udregning | R [m²K/W] |
|---|---|---|
| Overgang inde | 1 / 10 | 0,100 |
| Stål | 0,010 / 50 | 0,0002 |
| Mineraluld | 0,050 / 0,04 | 1,250 |
| Overgang ude | 1 / 10 | 0,100 |
| **I alt** | | **1,450** |

U = 1 / 1,45 = 0,69 W/(m²·K). q = 0,69 · 155 = 107 W/m².
Yderste overflade: t = 25 + 107 / 10 = 35,7 °C.

Uden isolering er R = 0,2, U = 5,0 og q = 774 W/m², og overfladen bliver ca. 102 °C. Læg mærke til, at stålets bidrag er helt ubetydeligt.
</details>

> **Praksis**
> SOLAS kræver, at varme overflader over 220 °C, hvor brændstof kan sprøjte hen, er isoleret. For personsikkerhed er tommelfingerreglen, at en overflade over ca. 60 °C kan give forbrændinger.

## Varmevekslere

I en varmeveksler (fx ferskvandskøler med havvand) overføres varmen fra det varme medium gennem en metalvæg til det kolde. Temperaturforskellen ændrer sig gennem veksleren, så man bruger den **logaritmiske middeltemperaturdifferens:**

```
Φ = U · A · Δt_m        Δt_m = (Δt₁ − Δt₂) / ln(Δt₁ / Δt₂)
```

Δt₁ og Δt₂ er temperaturforskellen i hver ende. **Modstrøm** (medierne løber hver sin vej) giver større Δt_m og dermed en mindre veksler end **medstrøm.**

**Eksempel:** varmt vand 80 → 50 °C, koldt 20 → 40 °C i modstrøm: Δt₁ = 80 − 40 = 40 K, Δt₂ = 50 − 20 = 30 K. Δt_m = 10 / ln(40/30) = 34,8 K.

# Formler

### Ledning
```
Φ = λ · A · Δt / d
```

### Konvektion
```
Φ = h · A · Δt
```

### Stråling
```
Φ = ε · σ · A · (T₁⁴ − T₂⁴)     σ = 5,67 · 10⁻⁸ W/(m²K⁴), T i kelvin
```

### Sammensat væg
```
R = 1/h_i + Σ(d/λ) + 1/h_u
U = 1/R
Φ = U · A · Δt
t_overflade = t_u + q / h_u
```

### Varmeveksler
```
Φ = U · A · Δt_m
Δt_m = (Δt₁ − Δt₂) / ln(Δt₁/Δt₂)
```

# Quiz

Q: Hvor stor varmestrøm går gennem 1 m² stålplade, 10 mm tyk, med 10 K temperaturforskel? (W, λ = 50)
N: 50000 ; 100 ; W
L: Φ = 50 · 1 · 10 / 0,010 = 50.000 W.
F: Stål leder varme rigtig godt. Det er overgangene, der begrænser.

Q: Hvilken form for varmetransmission kræver intet medium?
A: Ledning
A: Konvektion
R: Stråling
A: Ingen af dem
F: Stråling går også gennem vakuum. Sådan kommer solens varme til jorden.

Q: En væg har R = 2,5 m²K/W. Hvad er U-værdien? (W/(m²K))
N: 0,4 ; 0,01 ; W/(m²K)
L: U = 1 / R = 1 / 2,5 = 0,4.
F: U er den reciprokke af den samlede modstand.

Q: Hvorfor beklæder man isolering på rør med blank aluminium?
A: For at gøre dem lettere
R: Fordi den blanke overflade har lav emission og udstråler mindre varme
A: For at lede varmen væk
A: Fordi aluminium isolerer godt
F: Lav ε betyder lav udstråling. Aluminium beskytter også isoleringen mod olie og vand.

Q: En varmeveksler i modstrøm har Δt₁ = 30 K og Δt₂ = 10 K. Hvad er Δt_m? (K, 1 decimal)
N: 18,2 ; 0,2 ; K
L: Δt_m = (30 − 10) / ln(30/10) = 20 / 1,0986 = 18,2 K.
F: Den logaritmiske middelværdi er altid lidt mindre end den aritmetiske (20 K).

Q: En flade på 2 m² med ε = 0,9 er 200 °C, og omgivelserne er 20 °C. Hvad udstråler den netto? (W)
N: 4361 ; 50 ; W
L: Φ = 0,9 · 5,67·10⁻⁸ · 2 · (473,15⁴ − 293,15⁴) = 1,0206·10⁻⁷ · (5,012·10¹⁰ − 0,7385·10¹⁰) = 1,0206·10⁻⁷ · 4,273·10¹⁰ = 4.361 W.
F: Temperaturerne skal i kelvin og opløftes i 4. potens.

Q: Hvad gør mest for at mindske varmetabet gennem en isoleret stålvæg?
A: Tykkere stål
R: Tykkere isolering
A: Malet stål
A: Højere h på indersiden
F: Isoleringen er den største modstand. Stålets bidrag er ubetydeligt.

Q: Hvorfor er modstrøm bedre end medstrøm i en varmeveksler?
A: Mindre trykfald
R: Temperaturforskellen holdes større gennem hele veksleren, så der kræves mindre areal
A: Den er nemmere at rense
A: Den bruger mindre vand
F: Med modstrøm kan det kolde medium endda komme ud varmere end det varme medium kommer ud.
