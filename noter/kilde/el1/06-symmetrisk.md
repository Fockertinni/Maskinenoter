id: symmetrisk
navn: 3-faset symmetrisk belastning
ikon: trefase
intro: Stjerne og trekant, fase- og netstrømme, effekt i 3-fasede systemer, 1-, 2- og 3-wattmetermetoden, vektordiagrammer og fasekompensering med kondensatorbatteri.
---
# Noter

> **Kilder**
> PP6 3-faset symmetrisk belastning · Lab 6 (symmetrisk Y og Δ, 1- og 2-wattmeter) · Obligatorisk opgavesæt 3, opgave 1, 4, 7 og 9

Et 3 × 400/230 V net har tre fasespændinger på 230 V med 120° imellem. Spændingen mellem to faser (netspændingen) er √3 · 230 = 400 V. Ved symmetrisk last trækker alle tre faser lige meget strøm, og summen af strømmene er nul.

## Stjerne (Y) og trekant (Δ)

| | Stjerne (Y) | Trekant (Δ) |
|---|---|---|
| Spænding over hver last | U_f = U_n / √3 = 230 V | U_f = U_n = 400 V |
| Netstrøm | I_n = I_f | I_n = √3 · I_f |
| Samme last flyttet fra Y til Δ | P_Y | P_Δ = 3 · P_Y |

Effekten følger U². Flyttes en modstand fra 230 V til 400 V, bliver effekten (400/230)² = 3 gange større.

**Mærkepladen:** "230/400 V Δ/Y" betyder, at hver vikling tåler 230 V. På et 400 V-net kobles motoren i **Y** (opgavesæt 3, opgave 4). "400/690 V Δ/Y" kobles i **Δ** på 400 V.

## Effekt

```
P = √3 · U_n · I_n · cos φ = 3 · U_f · I_f · cos φ
Q = √3 · U_n · I_n · sin φ        S = √3 · U_n · I_n        S² = P² + Q²
```

Formlen med √3 bruger **netværdier** og gælder både for Y og Δ, fordi √3 · U_n · I_n = 3 · U_f · I_f i begge koblinger.

## Vektordiagrammet

- Tegn de tre fasespændinger U_1N, U_2N og U_3N fra nulpunktet med 120° imellem. Netspændingerne U_12, U_23 og U_31 er siderne i trekanten mellem spidserne.
- I Y: hver strøm ligger φ efter sin fasespænding.
- I Δ: grenstrømmene I_12, I_23 og I_31 ligger φ efter deres netspænding. Netstrømmen er forskellen mellem to grenstrømme, fx I_L1 = I_12 − I_31. Derfor er den √3 gange større og drejet 30°.

## Wattmetermetoderne

| Metode | Kræver | Last | Samlet effekt |
|---|---|---|---|
| 1 wattmeter | Adgang til N (eller kunstigt nulpunkt) | Kun symmetrisk | P = 3 · W |
| 2 wattmetre (Aron) | 3-ledernet | Vilkårlig | P = W1 + W2 (med fortegn) |
| 3 wattmetre | 4-ledernet | Vilkårlig | P = W1 + W2 + W3 |

**Aron-koblingen:** strømspolerne sidder i to faser, og spændingsspolerne måler mellem hver af dem og den tredje fase. Den virker, fordi I1 + I2 + I3 = 0 i et 3-ledernet. Ved symmetrisk last:

```
W1 = U_n · I_n · cos(30° + φ)       W2 = U_n · I_n · cos(30° − φ)
P = W1 + W2                          Q = √3 · (W2 − W1)
```

Ved cos φ under 0,5 (φ > 60°) bliver W1 negativ. Det er ikke en fejl. Læg visningerne sammen med fortegn.

<details markdown="1"><summary>Forudsig først: en ubelastet motor har cos φ = 0,3. Hvad viser de to wattmetre?</summary>

φ = 72,5°. W1 ∝ cos(102,5°) er negativ, W2 ∝ cos(42,5°) er positiv og større. Summen er den lille P. Prøv i modellen.
</details>

<div class="m" data-m="aron"></div>

### Gennemregnet eksempel (opgavesæt 3, opgave 9: pumpen på coasteren)

Et 3 × 115 V, 60 Hz net. Aron-koblingen viser 1.880 W og −280 W. Pumpen flytter 100 m³ søvand (1.027 kg/m³) 5,5 m op på 1 time og 22 minutter. Motorens η = 92 %.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| P1 | 1.880 + (−280) | 1.600 W |
| Q | √3 · (1.880 − (−280)) | 3.741 var |
| S | √(1.600² + 3.741²) | 4.069 VA |
| cos φ | 1.600 / 4.069 | 0,39 (derfor negativt wattmeter) |
| I_n | 4.069 / (√3 · 115) | 20,4 A |
| P2 (akselen) | 0,92 · 1.600 | 1.472 W |
| Hydraulisk effekt | (100 · 1.027 / 4.920 s) · 9,82 · 5,5 | 1.127 W |
| η pumpe | 1.127 / 1.472 | 76,6 % |
| η motor og pumpe | 1.127 / 1.600 | 70,5 % |

> **Usikkert i besvarelsen**
> Den indsendte besvarelse regnede S = P1 / η = 1.739 VA. S har intet med virkningsgraden at gøre: S = √(P² + Q²) = 4.069 VA, og Q findes direkte fra Aron-visningerne. Opgaven spørger efter pumpens virkningsgrad, som er 76,6 % for pumpen alene. 70,5 % er motor og pumpe tilsammen.
</details>

## Tangamperemeter (opgavesæt 3, opgave 1)

En motor trækker 37 A pr. fase. Hvad viser tangen?

| Tangen omslutter | Visning | Hvorfor |
|---|---|---|
| Én fase | 37 A | Fasestrømmen |
| To faser | 37 A | Summen af to strømme med 120° imellem er lige så stor som den tredje |
| Tre faser | 0 A | Symmetrisk: summen er nul |
| Én fase og PE | 37 A | Ingen strøm i PE i en fejlfri installation |

## To symmetriske belastninger på samme net

Strømme fra flere laster lægges sammen vektorielt i hver fase. Del dem op i wattstrøm (I · cos φ) og wattløs strøm (I · sin φ), læg delene sammen hver for sig, og brug Pythagoras.

### Gennemregnet eksempel

Varmelegemer 3 × 23 Ω i Y og en Δ-koblet motor, der trækker 9,3 A med cos φ = 0,8, på 3 × 400/230 V.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| Varme: I_n = I_f | 230 / 23 | 10,0 A (cos φ = 1) |
| Varme: P | 3 · 230 · 10 | 6.900 W |
| Motor: fasestrøm i viklingen | 9,3 / √3 | 5,37 A |
| Motor: P | √3 · 400 · 9,3 · 0,8 | 5.155 W |
| Wattstrøm pr. fase | 10 + 9,3 · 0,8 | 17,44 A |
| Wattløs strøm pr. fase | 9,3 · 0,6 | 5,58 A |
| Samlet netstrøm | √(17,44² + 5,58²) | 18,3 A |
| Samlet cos φ | 17,44 / 18,3 | 0,95 |

Netstrømmen er 18,3 A, ikke 10 + 9,3 = 19,3 A.
</details>

## Fasekompensering i 3-fasede net

Kondensatorbatteriet består af tre kondensatorer i Y eller Δ.

```
Q_C = P · (tan φ₁ − tan φ₂)
Y:  C = (Q_C / 3) / (ω · U_f²)        Δ:  C = (Q_C / 3) / (ω · U_n²)   (3 gange mindre)
```

<div class="m" data-m="kompensering"></div>

### Gennemregnet eksempel (opgavesæt 3, opgave 7: færgen Rødby–Puttgarden)

En thrustermotor på 6,6 kV, 50 Hz optager 2,78 MW ved 246 A. Uden kompensering er cos φ = 0,86.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| cos φ efter | 2,78·10⁶ / (√3 · 6.600 · 246) | 0,989 (φ = 8,7°) |
| I før | 2,78·10⁶ / (√3 · 6.600 · 0,86) | 283 A |
| Q_C | 2,78·10⁶ · (tan 30,7° − tan 8,7°) | 1,23 Mvar |
| C i Δ | (1,23·10⁶ / 3) / (314,16 · 6.600²) | 29,9 µF |
| C i Y | (1,23·10⁶ / 3) / (314,16 · 3.811²) | 89,6 µF |

Q_C er den samme i begge koblinger. Det er kun C, der ændrer sig.
</details>

> **Lab 6**
> Symmetrisk resistiv last i Y og Δ, målt med 1 og 2 wattmetre. P i Δ blev ca. 3 gange P i Y. Med rent resistiv last viser de to wattmetre i Aron-koblingen det samme (cos(±30°)). Modstandene blev varme undervejs og ændrede værdi, og skydemodstandene var ikke helt ens.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor gælder P = √3 · U_n · I_n · cos φ både for Y og Δ?
2. Hvornår må du bruge 1-wattmetermetoden?
3. Hvorfor viser tangen 37 A om to faser?
4. Hvorfor bliver C 3 gange mindre i Δ?

<details markdown="1"><summary>Svar</summary>

1. I Y er I_f = I_n og U_f = U_n/√3, i Δ er U_f = U_n og I_f = I_n/√3. I begge tilfælde er 3 · U_f · I_f = √3 · U_n · I_n.
2. Kun ved symmetrisk last med adgang til et nulpunkt.
3. I1 + I2 = −I3, og |I3| = 37 A.
4. Kondensatoren får 400 V i stedet for 230 V, og Q = U²/X_C. (400/230)² = 3.
</details>
</div>

# Formler

### Y og Δ
```
Y:  U_n = √3 · U_f      I_n = I_f
Δ:  U_n = U_f           I_n = √3 · I_f
P_Δ = 3 · P_Y  (samme impedans)
```

### Effekt
```
P = √3 · U_n · I_n · cos φ = 3 · U_f · I_f · cos φ
Q = √3 · U_n · I_n · sin φ
S = √3 · U_n · I_n         S² = P² + Q²
```

### Wattmetre
```
1 W:  W = U_f · I_f · cos φ        P = 3 · W
2 W:  W1 = U_n·I_n·cos(30° + φ)    W2 = U_n·I_n·cos(30° − φ)
      P = W1 + W2                  Q = √3 · (W2 − W1)
3 W:  P = W1 + W2 + W3
```

### Fasekompensering
```
Q_C = P · (tan φ₁ − tan φ₂)
C_Y = Q_C / (3 · ω · U_f²)        C_Δ = Q_C / (3 · ω · U_n²)
```

# Quiz

Q: En motor på 3 × 400 V trækker 9,3 A med cos φ = 0,8. Hvad er P1? (W)
N: 5155 ; 10 ; W
L: P1 = √3 · 400 · 9,3 · 0,8 = 5.155 W.
F: Brug netværdier i √3-formlen.

Q: Mærkepladen siger 230/400 V Δ/Y. Hvordan kobles motoren på 3 × 400 V?
A: Trekant
R: Stjerne
A: Det er lige meget
A: Den kan ikke bruges
F: Hver vikling tåler 230 V. I Y får den 400/√3 = 230 V.

Q: Tre ens modstande giver 2 kW i stjerne. Hvad giver de i trekant? (kW)
N: 6 ; 0,05 ; kW
L: P_Δ = 3 · P_Y = 3 · 2 = 6 kW.
F: Spændingen over hver modstand stiger fra 230 til 400 V, og P ∝ U².

Q: En symmetrisk motor trækker 37 A. Tangen omslutter tre af fasederne. Hvad viser den?
A: 37 A
A: 64 A
R: 0 A
A: 111 A
F: Ved symmetrisk last er summen af de tre fasestrømme nul.

Q: Aron-koblingen viser 1.880 W og −280 W. Hvad er den samlede P? (W)
N: 1600 ; 1 ; W
L: P = W1 + W2 = 1.880 + (−280) = 1.600 W.
F: Visningerne lægges sammen med fortegn.

Q: Samme Aron-visninger (1.880 W og −280 W). Hvad er Q? (var)
N: 3741 ; 10 ; var
L: Q = √3 · (1.880 − (−280)) = √3 · 2.160 = 3.741 var.
F: Q = √3 · (W2 − W1) gælder ved symmetrisk last.

Q: Ved hvilken effektfaktor viser det ene wattmeter i Aron-koblingen 0?
A: cos φ = 1
A: cos φ = 0,866
R: cos φ = 0,5
A: cos φ = 0
F: cos(30° + 60°) = cos 90° = 0. Under 0,5 bliver visningen negativ.

Q: Hvornår må 1-wattmetermetoden bruges?
R: Kun ved symmetrisk last med adgang til et nulpunkt
A: Ved al last i et 4-ledernet
A: Ved al last i et 3-ledernet
A: Kun ved rent resistiv last
F: P = 3 · W forudsætter, at alle faser trækker samme effekt.

Q: Varmelegemer trækker 10 A (cos φ = 1), og en motor trækker 9,3 A (cos φ = 0,8) i samme fase. Hvad er netstrømmen? (A)
N: 18,3 ; 0,1 ; A
L: I_w = 10 + 9,3 · 0,8 = 17,44 A. I_wl = 9,3 · 0,6 = 5,58 A. I = √(17,44² + 5,58²) = 18,3 A.
F: Strømme med forskellig vinkel lægges sammen vektorielt.
