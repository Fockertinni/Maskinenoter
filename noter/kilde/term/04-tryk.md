id: tryk
navn: Tryk
ikon: tryk
intro: Tryk som kraft pr. areal, enheder, absolut tryk og overtryk, hydrostatisk tryk, manometre og trykkets betydning i hydraulik.
---
# Noter

> **Kilder**
> Ikke dækket af slides i materialet. Noterne bygger på standardteori fra grundlæggende termodynamik.

Tryk er kraft fordelt på et areal. Et stort tryk betyder, at en stor kraft presser på hver kvadratmeter. I en væske eller gas virker trykket lige meget i alle retninger.

```
p = F / A        [Pa = N/m²]
```

## Enheder

| Enhed | I pascal | Bruges til |
|---|---|---|
| 1 Pa | 1 N/m² | SI-enheden, meget lille |
| 1 kPa | 1.000 Pa | Lave tryk, ventilation |
| 1 bar | 100.000 Pa = 100 kPa | Maskinrummet |
| 1 MPa | 1.000.000 Pa = 10 bar | Hydraulik og styrke |
| 1 atm | 101.325 Pa = 1,01325 bar | Standardatmosfære |
| 1 mVS (meter vandsøjle) | ca. 9.810 Pa ≈ 0,1 bar | Pumper og løftehøjde |
| 1 mmHg | 133,3 Pa | Barometre, vakuum |
| 1 psi | 6.895 Pa ≈ 0,069 bar | Amerikansk udstyr |

## Absolut tryk og overtryk

- **Absolut tryk** (bar(a)) måles fra det fuldstændige vakuum.
- **Overtryk** (bar(o) eller barg) er det, et almindeligt manometer viser: trykket over atmosfæretrykket.
- **Undertryk / vakuum** er tryk under atmosfæretrykket.

```
p_abs = p_o + p_atm        p_atm ≈ 1,013 bar
```

> **Faldgrube**
> Idealgasloven og damptabeller bruger **absolut** tryk. Et manometer på en trykluftflaske, der viser 30 bar, betyder ca. 31 bar(a). Glemmer du atmosfæren, regner du massen ca. 3 % for lav, og ved lave tryk bliver fejlen meget større.

## Hydrostatisk tryk

Trykket i en væske stiger med dybden, fordi væsken ovenover vejer.

```
p = ρ · g · h        ρ [kg/m³], g = 9,81 m/s², h [m]
```

10 m vand giver 1000 · 9,81 · 10 = 98.100 Pa ≈ 1 bar. Det er en god huskeregel: **10 meter vandsøjle ≈ 1 bar.**

<div class="m" data-m="tryk"></div>

Hydrostatisk tryk bruges til niveaumåling i tanke (en tryktransmitter i bunden), og det forklarer, hvorfor en pumpe skal yde mere tryk, jo højere den skal løfte.

### U-rørsmanometer

Et U-rør med væske måler en trykforskel som en højdeforskel: Δp = ρ · g · Δh. Med vand måles små tryk (ventilation), med kviksølv store. 760 mm kviksølv svarer til 1 atm: 13.600 · 9,81 · 0,76 = 101.400 Pa.

## Andre trykmålere

- **Bourdonrørsmanometer:** et krumt, fladt rør retter sig ud, når trykket stiger, og bevægelsen drejer viseren. Det almindelige manometer i maskinrummet.
- **Membranmanometer:** en membran bøjer. Bruges til lave tryk og urene medier.
- **Tryktransmitter:** en piezoresistiv eller kapacitiv føler giver et 4–20 mA-signal til automatikken.

## Tryk i hydraulik (Pascals lov)

Et tryk i en lukket væske forplanter sig uformindsket i alle retninger. Derfor kan en lille kraft på et lille stempel løfte en stor kraft på et stort stempel.

```
F = p · A        A = π · D² / 4
```

### Gennemregnet eksempel

En hydraulikcylinder har stempeldiameter 50 mm, og systemtrykket er 100 bar. Hvor stor kraft kan den give? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

A = π · 0,050² / 4 = 1,963 · 10⁻³ m². p = 100 bar = 10 · 10⁶ Pa.
F = p · A = 10 · 10⁶ · 1,963 · 10⁻³ = 19.635 N ≈ 19,6 kN (ca. 2 tons).
</details>

# Formler

### Tryk
```
p = F / A              [Pa = N/m²]
p_abs = p_o + p_atm    p_atm ≈ 1,013 bar
```

### Hydrostatisk tryk
```
p = ρ · g · h
Δp = ρ · g · Δh        (U-rør)
10 m vand ≈ 1 bar
```

### Enheder
```
1 bar = 10⁵ Pa = 100 kPa
1 MPa = 10 bar
1 atm = 1,01325 bar = 760 mmHg
1 psi ≈ 0,0690 bar
```

### Hydraulik
```
F = p · A        A = π · D² / 4
```

# Quiz

Q: Et manometer viser 6 bar. Hvad er det absolutte tryk ca.? (bar(a), 1 decimal)
N: 7 ; 0,05 ; bar
L: p_abs = 6 + 1,013 = 7,0 bar(a).
F: Manometre viser overtryk.

Q: Hvad er trykket i bunden af en 8 m høj vandtank (overtryk)? (bar, 2 decimaler)
N: 0,78 ; 0,01 ; bar
L: p = 1000 · 9,81 · 8 = 78.480 Pa = 0,78 bar.
F: Ca. 0,1 bar pr. meter vand.

Q: Hvor mange pascal er 1 bar?
A: 1.000 Pa
A: 10.000 Pa
R: 100.000 Pa
A: 1.000.000 Pa
F: 1 bar = 10⁵ Pa = 100 kPa.

Q: En hydraulikcylinder har Ø 80 mm og 150 bar. Hvad er kraften? (kN, 1 decimal)
N: 75,4 ; 0,3 ; kN
L: A = π · 0,08² / 4 = 5,027 · 10⁻³ m². F = 15 · 10⁶ · 5,027 · 10⁻³ = 75.400 N = 75,4 kN.
F: Husk at omregne bar til Pa og mm til m.

Q: Hvilket tryk skal bruges i idealgasloven?
A: Overtryk
R: Absolut tryk
A: Det er ligegyldigt
A: Differenstryk
F: Gasloven gælder for det absolutte tryk, ligesom temperaturen skal være absolut (K).

Q: Hvordan virker et Bourdonrørsmanometer?
A: En væskesøjle stiger
R: Et krumt rør retter sig ud, når trykket stiger
A: En piezokrystal giver en spænding
A: En fjeder trykkes sammen af et stempel
F: Bevægelsen af rørets ende overføres til viseren via et tandhjulsværk.

Q: Et vakuummeter på en kondensator viser −0,9 bar. Hvad er det absolutte tryk ca.? (bar(a), 2 decimaler)
N: 0,11 ; 0,02 ; bar
L: p_abs = −0,9 + 1,013 = 0,11 bar(a).
F: Undertryk er negativt overtryk.
