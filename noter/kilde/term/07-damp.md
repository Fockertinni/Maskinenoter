id: damp
navn: Faseovergange og vanddamp
ikon: kedel
intro: Smelte- og fordampningsvarme, opvarmningskurven fra is til damp, kogepunkt og tryk, mættet og overhedet damp, dampkvalitet og entalpi fra damptabellen.
---
# Noter

> **Kilder**
> Ikke dækket af slides i materialet. Standardteori. Damptabelværdierne er afrundede værdier fra en almindelig damptabel (IAPWS-IF97).

Når et stof skifter tilstand (fast → væske → gas), bruges der energi uden at temperaturen ændrer sig. Den energi kaldes **latent varme** ("skjult" varme), fordi den ikke kan ses på termometret. Varme, der ændrer temperaturen, kaldes **følelig varme.**

## Latent varme

```
Smeltning:    Q = m · L_s        L_s (is) = 334 kJ/kg
Fordampning:  Q = m · r          r (vand, 1 atm) = 2.257 kJ/kg
```

Samme energi frigives igen ved den modsatte overgang: når damp kondenserer, afgiver den r, og når vand fryser, afgiver det L_s. Det er derfor, damp er så effektivt til opvarmning.

## Opvarmningskurven

<div class="m" data-m="opvarm"></div>

**Forudsig først:** hvad kræver mest energi, at varme 1 kg vand fra 0 til 100 °C, eller at fordampe det ved 100 °C?

<details markdown="1"><summary>Vis svar</summary>

Fordampningen: 2.257 kJ mod 419 kJ, altså mere end 5 gange så meget.
</details>

### Gennemregnet eksempel

Hvor meget energi skal der til at gøre 1 kg is på −20 °C til damp på 120 °C ved 1 atm? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

| Trin | Udregning | kJ |
|---|---|---|
| Is −20 → 0 °C | 1 · 2,1 · 20 | 42 |
| Smeltning | 1 · 334 | 334 |
| Vand 0 → 100 °C | 1 · 4,19 · 100 | 419 |
| Fordampning | 1 · 2.257 | 2.257 |
| Damp 100 → 120 °C | 1 · 2,0 · 20 | 40 |
| **I alt** | | **3.092** |
</details>

## Kogepunktet afhænger af trykket

Vand koger ved 100 °C kun ved 1 atm. Højere tryk giver højere kogepunkt, lavere tryk lavere. Sammenhængen mellem tryk og temperatur ved kogning kaldes **mætningskurven.**

| p [bar(a)] | t_s [°C] | h' [kJ/kg] | r [kJ/kg] | h'' [kJ/kg] |
|---|---|---|---|---|
| 0,1 | 45,8 | 192 | 2.392 | 2.584 |
| 0,5 | 81,3 | 340 | 2.305 | 2.645 |
| 1,013 | 100,0 | 419 | 2.257 | 2.676 |
| 2 | 120,2 | 505 | 2.202 | 2.706 |
| 5 | 151,8 | 640 | 2.107 | 2.748 |
| 10 | 179,9 | 763 | 2.015 | 2.777 |
| 20 | 212,4 | 909 | 1.890 | 2.798 |

h' er entalpien af kogende vand, h'' af tør mættet damp, og r = h'' − h' er fordampningsvarmen. Læg mærke til, at r falder, når trykket stiger.

> **Praksis**
> I en kondensator er der vakuum (fx 0,1 bar(a)), så dampen kondenserer ved kun ca. 46 °C og kan køles med havvand. I en dampkedel på 10 bar er vandet 180 °C uden at koge. Falder trykket pludselig (et rør sprænger), koger vandet eksplosivt.

## Damp: mættet, våd og overhedet

- **Våd damp:** en blanding af vanddråber og damp ved mætningstemperaturen. Beskrives med **dampkvaliteten x** (tørhedsgraden): x = 0 er kogende vand, x = 1 er tør mættet damp.
- **Tør mættet damp:** lige netop fordampet, x = 1.
- **Overhedet damp:** opvarmet over mætningstemperaturen. Bruges i turbiner, så der ikke dannes dråber, der slider på skovlene.

```
Våd damp:  h = h' + x · r
```

## Entalpi

Entalpien h (kJ/kg) er den energi, et kg af stoffet indeholder i forhold til et nulpunkt, når man regner med strømmende medier. For vand er nulpunktet ved 0,01 °C. Ved opvarmning i en kedel eller kondensering i en varmeveksler er den overførte varme bare forskellen i entalpi:

```
Φ = ṁ · (h₂ − h₁)
```

### Gennemregnet eksempel

En kedel leverer 500 kg/h mættet damp ved 10 bar(a) med x = 0,9. Hvad er dampens entalpi, og hvor stor effekt afgiver den, når den kondenserer helt til kogende vand ved samme tryk? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

h = h' + x · r = 763 + 0,9 · 2.015 = 763 + 1.813,5 = 2.576 kJ/kg.

Ved kondensering til h' afgives x · r = 1.813,5 kJ/kg.
ṁ = 500 / 3.600 = 0,139 kg/s. Φ = 0,139 · 1.813,5 = **252 kW.**
</details>

# Formler

### Latent varme
```
Q = m · L_s       L_s (is) = 334 kJ/kg
Q = m · r         r (vand, 1 atm) = 2.257 kJ/kg
```

### Våd damp
```
h = h' + x · r        r = h'' − h'
x = 0: kogende vand   x = 1: tør mættet damp
```

### Varme i en strøm
```
Φ = ṁ · (h₂ − h₁)
```

### Mætningstemperaturer (huskeværdier)
```
0,1 bar → 46 °C    1 bar → 100 °C    5 bar → 152 °C
10 bar → 180 °C    20 bar → 212 °C   (absolut tryk)
```

# Quiz

Q: Hvor meget energi skal der til at smelte 5 kg is ved 0 °C? (kJ)
N: 1670 ; 5 ; kJ
L: Q = 5 · 334 = 1.670 kJ.
F: Under smeltningen er temperaturen konstant 0 °C.

Q: Hvor meget energi skal der til at fordampe 2 kg vand ved 100 °C? (kJ)
N: 4514 ; 10 ; kJ
L: Q = 2 · 2.257 = 4.514 kJ.
F: Fordampningsvarmen er stor sammenlignet med opvarmningen.

Q: Hvad sker der med temperaturen, mens vand koger ved konstant tryk?
A: Den stiger jævnt
R: Den er konstant
A: Den falder
A: Den stiger med 1 °C pr. minut
F: Al tilført energi går til faseovergangen (latent varme).

Q: Ved hvilken temperatur koger vand i en kedel på 10 bar(a)?
A: 100 °C
A: 120 °C
R: ca. 180 °C
A: ca. 250 °C
F: Mætningstemperaturen stiger med trykket.

Q: Damp ved 5 bar(a) har x = 0,95. Hvad er entalpien? (kJ/kg, h' = 640, r = 2.107)
N: 2642 ; 3 ; kJ/kg
L: h = 640 + 0,95 · 2.107 = 640 + 2.001,7 = 2.642 kJ/kg.
F: h = h' + x · r.

Q: Hvorfor er der vakuum i en dampturbines kondensator?
A: For at undgå korrosion
R: For at dampen kan kondensere ved lav temperatur, så turbinen kan udnytte et større trykfald
A: For at gøre vandet tungere
A: For at dampen bliver overhedet
F: Ved 0,1 bar(a) kondenserer damp ved ca. 46 °C.

Q: Hvad er dampkvaliteten x for tør mættet damp?
A: 0
A: 0,5
R: 1
A: Over 1
F: x = 1 betyder, at alt er fordampet, men dampen er ikke overhedet.

Q: 0,2 kg/s mættet damp (x = 1) kondenserer helt ved 2 bar(a), r = 2.202 kJ/kg. Hvor stor effekt afgives? (kW)
N: 440,4 ; 1 ; kW
L: Φ = 0,2 · 2.202 = 440,4 kW.
F: Kondenserende damp afgiver fordampningsvarmen igen.
