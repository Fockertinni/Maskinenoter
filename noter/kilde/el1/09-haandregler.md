id: haandregler
navn: Magnetfelt, håndregler og induktion
ikon: magnet
intro: Spoleregel, proptrækkerregel, motor- og generatorregel, Lenz' lov, induktion, selvinduktion og ind- og udkobling af spoler.
---
# Noter

> **Kilder**
> PP9 Magnetisk felt – håndregler · Obligatorisk opgavesæt 1, opgave 1 · Lab 3 (DC-motor og generator)

Håndreglerne giver retningen af felter, kræfter og inducerede spændinger. Størrelsen giver formlerne: F = B · I · l for kraften og E = B · l · v for den inducerede spænding. Alle motorer, generatorer og transformere bygger på de to.

## Retninger i tegninger

- **⊗ (kryds):** strømmen løber **ind** i papiret (du ser enden af en pil bagfra).
- **⊙ (prik):** strømmen løber **ud** af papiret (du ser pilens spids).
- **Feltlinjer** går uden for en magnet fra **N til S**, inde i magneten fra S til N.

## Håndreglerne

| Regel | Hånd | Sådan | Giver |
|---|---|---|---|
| Proptrækkerreglen | — | Skru en proptrækker i strømmens retning. Drejeretningen er feltets retning | Feltet om en leder. Strøm ind (⊗) giver felt med uret |
| Spolereglen | Højre | Fingrene følger strømmen rundt i vindingerne | Tommelfingeren peger mod spolens nordpol |
| Motorreglen | Venstre | Feltlinjerne ind i håndfladen, fingrene i strømmens retning | Tommelfingeren viser kraften |
| Generatorreglen | Højre | Feltlinjerne ind i håndfladen, tommelfingeren i bevægelsens retning | Fingrene viser den inducerede strøm |

**Uden hænder:** tegn lederens felt (proptrækker) oven i hovedfeltet. På den side, hvor felterne har samme retning, bliver feltet stærkt. Lederen skubbes mod den svage side, som et elastik af feltlinjer, der vil rette sig ud.

> **Usikkert**
> Hvilken hånd der bruges til motor- og generatorreglen varierer mellem lærebøger (nogle bruger højre hånd med andre fingre). Lær én version sikkert, og kontrollér den med feltbilledet ovenfor.

<details markdown="1"><summary>Forudsig først: N foroven, S forneden, strømmen løber ind i papiret. Hvilken vej skubbes lederen?</summary>

Mod venstre. Strøm ind giver et felt med uret. Til venstre for lederen peger det op, mod hovedfeltet (som går ned fra N til S), så feltet er svagt der. Til højre peger begge ned, så feltet er stærkt. Lederen skubbes mod venstre. Tjek i modellen.
</details>

<div class="m" data-m="kraft"></div>

## Kraft og induceret spænding

```
F = B · I · l          [N]     kraft på en leder vinkelret på feltet
E = B · l · v          [V]     induceret spænding i en leder, der bevæges vinkelret på feltet
v = Δs / Δt            [m/s]
```

I opgavesæt 1, opgave 1.5 skrives E = B · l · Δs/Δt. Δs/Δt er bevægelseshastigheden. Jo hurtigere lederen skærer feltlinjerne, jo større spænding.

> **Bemærk om slides (PP9, slide 3)**
> Generatorreglen står som E = −B · l · v. Minus kommer fra Lenz' lov og fortæller kun, at den inducerede strøm modarbejder bevægelsen. Til beregning af størrelsen bruges E = B · l · v.

## Induktion og Lenz' lov

```
e = −N · dΦ/dt       [V]
```

Der induceres en spænding i en spole, når fluxen gennem den ændrer sig, uanset om det er magneten, der bevæges, eller strømmen, der ændres.

**Lenz' lov:** den inducerede strøm har en retning, så dens eget felt **modarbejder ændringen**, der skabte den. Skubbes en nordpol ind i en spole, laver spolen selv en nordpol i den ende for at skubbe imod. Trækkes magneten ud, vender strømmen (slide 4).

## Selvinduktion

En spole reagerer også på ændringer i sin egen strøm. Når strømmen stiger, stiger fluxen, og spolen inducerer en modspænding.

```
e_s = −L · di/dt              L = μ · A · N² / l      [H]
W = ½ · L · I²                [J]  energi i magnetfeltet
```

Spolen er "træg" over for strømændringer, ligesom en masse er træg over for hastighedsændringer. Den kan ikke ændre strømmen momentant.

## Ind- og udkobling af spoler

```
τ = L / R
Indkobling:  i = I · (1 − e^(−t/τ))        e_s = U · e^(−t/τ)
Udkobling:   i = I · e^(−t/τ)              e_s = −U · e^(−t/τ)     (med friløbsdiode)
```

- **Indkobling:** strømmen stiger langsomt. 63 % efter 1τ, færdig efter ca. 5τ.
- **Udkobling uden diode:** strømmen vil afbrydes på næsten ingen tid, så di/dt bliver enormt, og e_s = −L · di/dt bliver flere hundrede eller tusinde volt. Det giver gnister over kontakten og kan ødelægge transistorer.
- **Udkobling med friløbsdiode:** dioden sidder i spærreretning over spolen under drift. Ved afbrydelse vender spolens spænding, dioden leder, og strømmen kan løbe videre rundt gennem spolen og dø ud med τ. Energien ½LI² bliver til varme i spolens modstand.

<div class="m" data-m="rl"></div>

### Gennemregnet eksempel

En relæspole har L = 2 H og R = 100 Ω og sidder på 24 V DC.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| I (slutstrøm) | 24 / 100 | 0,24 A |
| τ | 2 / 100 | 20 ms |
| Tid til 63 % | 1τ | 20 ms |
| Tid til fuld strøm | 5τ | 100 ms |
| Energi i feltet | ½ · 2 · 0,24² | 0,058 J |
| e_s hvis strømmen afbrydes på 10 µs | 2 · 0,24 / 10·10⁻⁶ | 48.000 V (teoretisk) |

Den sidste linje viser, hvorfor en friløbsdiode er nødvendig.
</details>

<div class="genkald" markdown="1">
### Test dig selv

1. Hvilken vej går feltet om en leder med strøm ud af papiret?
2. Hvad siger Lenz' lov?
3. Hvorfor kommer der en gnist, når du afbryder strømmen til en spole?
4. Hvad gør en friløbsdiode?

<details markdown="1"><summary>Svar</summary>

1. Mod uret.
2. Den inducerede strøm modarbejder den ændring, der skabte den.
3. Strømmen vil falde til nul på næsten ingen tid. e = −L · di/dt bliver meget stor, og spændingen slår over kontakten.
4. Den giver spolens strøm en vej at løbe rundt i ved udkobling, så strømmen dør ud med τ = L/R uden en høj spændingsspids.
</details>
</div>

# Formler

### Kraft og induktion
```
F = B · I · l
E = B · l · v          (v = Δs / Δt)
e = −N · dΦ/dt
```

### Selvinduktion
```
e_s = −L · di/dt
L = μ · A · N² / l
W = ½ · L · I²
```

### Ind- og udkobling
```
τ = L / R
Ind:  i = I · (1 − e^(−t/τ))     e_s = U · e^(−t/τ)
Ud:   i = I · e^(−t/τ)           e_s = −U · e^(−t/τ)
1τ: 63,2 % / 36,8 %    3τ: 95 % / 5 %    5τ: 99,3 % / 0,7 %
```

# Quiz

Q: Hvad betyder et kryds (⊗) i en leder på en tegning?
R: Strømmen løber ind i papiret
A: Strømmen løber ud af papiret
A: Der er ingen strøm
A: Lederen er jordet
F: Du ser pilens fjer bagfra. En prik (⊙) er pilens spids, altså strøm ud af papiret.

Q: Strømmen løber ind i papiret. Hvilken vej går feltet om lederen?
R: Med uret
A: Mod uret
A: Parallelt med lederen
A: Der er intet felt
F: Proptrækkerreglen: skru ind i papiret, så drejer proptrækkeren med uret.

Q: En leder på 0,2 m med 10 A står vinkelret i et felt på 0,8 T. Hvor stor er kraften? (N)
N: 1,6 ; 0,01 ; N
L: F = B · I · l = 0,8 · 10 · 0,2 = 1,6 N.
F: F = B · I · l, når lederen står vinkelret på feltet.

Q: En leder på 0,5 m bevæges med 4 m/s vinkelret gennem et felt på 1,2 T. Hvad er den inducerede spænding? (V)
N: 2,4 ; 0,01 ; V
L: E = B · l · v = 1,2 · 0,5 · 4 = 2,4 V.
F: Dobbelt hastighed giver dobbelt spænding.

Q: Både strømmens retning og feltets retning vendes. Hvad sker der med kraften?
A: Den vender
R: Den er uændret
A: Den bliver nul
A: Den fordobles
F: Én vending vender kraften. To vendinger ophæver hinanden.

Q: Hvad siger Lenz' lov?
R: Den inducerede strøm modarbejder den ændring, der skabte den
A: Den inducerede strøm forstærker ændringen
A: Den inducerede spænding er proportional med strømmen
A: Feltet går fra N til S
F: Det er derfor, der står minus i e = −N · dΦ/dt.

Q: En spole har L = 2 H og R = 100 Ω. Hvad er tidskonstanten? (ms)
N: 20 ; 0,1 ; ms
L: τ = L / R = 2 / 100 = 0,02 s = 20 ms.
F: Efter 5τ = 100 ms har strømmen nået sin slutværdi.

Q: Samme spole fører 0,24 A. Hvor meget energi er der i magnetfeltet? (J)
N: 0,0576 ; 0,001 ; J
L: W = ½ · L · I² = 0,5 · 2 · 0,24² = 0,0576 J.
F: Energien skal et sted hen ved udkobling: i en gnist eller i friløbsdioden og spolens modstand.

Q: Hvorfor sætter man en friløbsdiode over en relæspole?
A: For at relæet trækker hurtigere
R: For at undgå en høj spændingsspids, når strømmen afbrydes
A: For at beskytte mod forkert polaritet
A: For at mindske strømforbruget
F: Dioden giver spolens strøm en vej, så di/dt bliver lille, og e = −L · di/dt bliver lille.
