id: gas
navn: Idealgasloven og tilstandsændringer
ikon: gas
intro: Idealgasloven, den kombinerede gaslov, normalkubikmeter, isobar, isokor, isoterm og adiabatisk proces, pV-diagrammet og volumenændringsarbejde.
---
# Noter

> **Kilder**
> Ikke dækket af slides i materialet. Standardteori.

En gas består af molekyler, der flyver frit rundt og støder ind i beholderens vægge. Stødene er trykket. Gør man gassen varmere, flyver molekylerne hurtigere og støder hårdere: trykket stiger, eller gassen udvider sig.

## Idealgasloven

```
p · V = m · R · T
```

- p er **absolut** tryk i Pa
- V er rumfang i m³
- m er masse i kg
- R er gaskonstanten for den bestemte gas i J/(kg·K). For luft er R = 287 J/(kg·K).
- T er **absolut** temperatur i K

Den gælder godt for luft, nitrogen, ilt og forbrændingsgas ved normale tryk. Den gælder ikke for damp tæt på mætningskurven: der bruges damptabellen.

### Gennemregnet eksempel

En startluftflaske på 0,5 m³ viser 30 bar på manometeret ved 20 °C. Hvor mange kg luft er der i? Og hvad viser manometeret, hvis maskinrummet bliver 50 °C? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

p = 30 + 1,013 = 31,013 bar(a) = 31,013 · 10⁵ Pa. T = 293,15 K.

m = p · V / (R · T) = 31,013 · 10⁵ · 0,5 / (287 · 293,15) = 1.550.650 / 84.134 = **18,4 kg.**

Opvarmning ved konstant volumen: p₂ = p₁ · T₂ / T₁ = 31,013 · 323,15 / 293,15 = 34,19 bar(a). Manometeret viser **33,2 bar.**
</details>

## Den kombinerede gaslov

Er massen den samme før og efter, går m · R ud:

```
p₁ · V₁ / T₁ = p₂ · V₂ / T₂
```

Den er nok til de fleste opgaver om luft i flasker, cylindre og kompressorer.

## Normalkubikmeter

En kubikmeter luft vejer forskelligt alt efter tryk og temperatur. Derfor angiver man gasmængder i **normalkubikmeter (Nm³)**: rumfanget ved 0 °C og 1,01325 bar. 1 Nm³ luft vejer 1,293 kg.

## De fire tilstandsændringer

| Proces | Konstant | Sammenhæng | Arbejde W | Eksempel |
|---|---|---|---|---|
| Isobar | p | V / T = konst. | p · (V₂ − V₁) | Opvarmning af luft i en cylinder med frit stempel |
| Isokor | V | p / T = konst. | 0 | Startluftflaske der bliver varm |
| Isoterm | T | p · V = konst. | p₁V₁ · ln(V₂/V₁) | Langsom kompression med god køling |
| Adiabatisk | ingen varme | p · V^κ = konst. | (p₁V₁ − p₂V₂) / (κ − 1) | Kompressionsslaget i en dieselmotor |

For luft er κ = c_p / c_v = 1,005 / 0,718 = 1,4.

<div class="m" data-m="pv"></div>

**Forudsig først:** luft komprimeres til halvt volumen. Hvilken proces giver højest sluttryk, isoterm eller adiabatisk?

<details markdown="1"><summary>Vis svar</summary>

Adiabatisk. Uden køling bliver luften varm under kompressionen, og den varme luft giver et ekstra tryk. Isoterm: p₂ = 2 bar. Adiabatisk: p₂ = 2^1,4 = 2,64 bar, og temperaturen stiger fra 20 °C til ca. 113 °C.
</details>

### Adiabatisk kompression i en dieselmotor

```
T₂ = T₁ · (V₁/V₂)^(κ−1)        p₂ = p₁ · (V₁/V₂)^κ
```

Med kompressionsforhold ε = 15, 1 bar og 20 °C: T₂ = 293,15 · 15^0,4 = 293,15 · 2,954 = 866 K ≈ **593 °C**, og p₂ = 15^1,4 = 44,3 bar. Det er varmt nok til, at brændstoffet selvantænder. (I virkeligheden er det lidt mindre, fordi cylindervæggen køler.)

## Volumenændringsarbejde og pV-diagrammet

Når en gas udvider sig mod et stempel, udfører den arbejde. Arbejdet er **arealet under kurven** i pV-diagrammet:

```
W = ∫ p dV
```

- Ekspansion (V vokser): W er positivt, gassen afgiver arbejde.
- Kompression (V falder): W er negativt, der skal tilføres arbejde.
- Isokor: ingen volumenændring, intet arbejde.

Et kredsløb (fx en motorcyklus) er en lukket kurve i pV-diagrammet, og arealet inden i kurven er nettoarbejdet pr. cyklus.

# Formler

### Idealgasloven
```
p · V = m · R · T          p og T absolutte
R_luft = 287 J/(kg·K)
ρ = p / (R · T)
```

### Kombineret gaslov
```
p₁V₁ / T₁ = p₂V₂ / T₂
```

### Tilstandsændringer
```
Isobar:      V₁/T₁ = V₂/T₂          W = p · (V₂ − V₁)
Isokor:      p₁/T₁ = p₂/T₂          W = 0
Isoterm:     p₁V₁ = p₂V₂            W = p₁V₁ · ln(V₂/V₁)
Adiabatisk:  p₁V₁^κ = p₂V₂^κ        W = (p₁V₁ − p₂V₂) / (κ − 1)
             T₂/T₁ = (V₁/V₂)^(κ−1) = (p₂/p₁)^((κ−1)/κ)
```

### Luft
```
c_p = 1,005 kJ/(kg·K)    c_v = 0,718 kJ/(kg·K)
R = c_p − c_v = 0,287 kJ/(kg·K)    κ = c_p / c_v = 1,4
1 Nm³ luft = 1,293 kg (0 °C, 1,01325 bar)
```

# Quiz

Q: Hvad er massefylden af luft ved 1,013 bar(a) og 20 °C? (kg/m³, 2 decimaler)
N: 1,20 ; 0,01 ; kg/m³
L: ρ = p / (R · T) = 101.300 / (287 · 293,15) = 101.300 / 84.134 = 1,20 kg/m³.
F: Luft vejer ca. 1,2 kg pr. m³ ved stuetemperatur.

Q: Luft i en lukket flaske på 20 bar(a) og 20 °C opvarmes til 80 °C. Hvad bliver trykket? (bar(a), 2 decimaler)
N: 24,09 ; 0,05 ; bar
L: p₂ = 20 · 353,15 / 293,15 = 24,09 bar(a).
F: Isokor: p/T er konstant, og T skal i kelvin.

Q: Hvad sker der i en isoterm kompression til en tredjedel af volumen?
A: Trykket bliver 3^1,4 gange større
R: Trykket bliver 3 gange større
A: Trykket er uændret
A: Temperaturen stiger
F: p · V er konstant, når T er konstant.

Q: En dieselmotor har kompressionsforhold 16. Luften er 40 °C ved start. Hvad bliver temperaturen efter adiabatisk kompression? (°C, κ = 1,4)
N: 676 ; 5 ; °C
L: T₂ = 313,15 · 16^0,4 = 313,15 · 3,031 = 949 K = 676 °C.
F: Husk at regne i kelvin og trække 273,15 fra til sidst.

Q: Hvor stort er volumenændringsarbejdet i en isokor proces?
R: 0
A: p · V
A: m · c_v · Δt
A: Det afhænger af trykket
F: Volumen ændrer sig ikke, så der er intet areal under kurven.

Q: Hvad er gaskonstanten R for luft?
A: 8,314 J/(kg·K)
R: 287 J/(kg·K)
A: 1.005 J/(kg·K)
A: 1,4
F: 8,314 er den universelle gaskonstant pr. mol. Pr. kg luft er R = 287.

Q: 1 kg luft udvider sig ved konstant tryk 2 bar fra 0,4 til 0,6 m³. Hvor stort er arbejdet? (kJ)
N: 40 ; 0,5 ; kJ
L: W = p · ΔV = 200.000 · 0,2 = 40.000 J = 40 kJ.
F: Isobar: arbejdet er et rektangel i pV-diagrammet.

Q: Hvad viser arealet inden i en lukket kurve i et pV-diagram?
A: Den tilførte varme
R: Nettoarbejdet pr. cyklus
A: Tabet
A: Temperaturstigningen
F: Ekspansionsarbejde minus kompressionsarbejde.
