id: blandet
navn: Blandede AC-kredse
ikon: sinus
intro: Parallelforbundne seriekredse og serieforbundne parallelkredse med R, X_L og X_C. Beregning trin for trin og strøm-spændingsvektordiagrammer med Thales-cirklen.
---
# Noter

> **Kilder**
> PP5 Parallelforbundne seriekredse / serieforbindelse med parallelkredse · Obligatorisk opgavesæt 2, opgave 2 og 7

En blandet kreds løses ved at reducere den skridt for skridt, præcis som i DC: hver seriegren bliver én impedans, parallelle grene regnes sammen, og til sidst går du baglæns og finder strømme og spændinger i hver del. Forskellen er, at alt er vektorer.

## Byggestenene

| Komponent | Formel | Kompleks |
|---|---|---|
| Resistans | R = ρ · l / S | R∠0° |
| Spole | X_L = ωL | jX_L = X_L∠90° |
| Kondensator | X_C = 1/(ωC) | −jX_C = X_C∠−90° |

## Parallelforbundne seriekredse

To seriegrene i parallel: Z1 = R1 + jX_L og Z2 = R2 − jX_C.

```
Z_kreds = (Z1⁻¹ + Z2⁻¹)⁻¹
I1 = U / Z1        I2 = U / Z2        I = I1 + I2   (vektorielt)
U_cd = U_ca − U_ad   (spændingen mellem midtpunkterne i de to grene)
```

**Vektordiagrammet:** U er fælles og tegnes som reference. I hver gren står U_R og U_X vinkelret på hinanden og lægges sammen til U. Derfor ligger midtpunktet i hver gren (c og d) på en **Thales-cirkel** med U som diameter. Spændingen U_cd er korden mellem de to punkter.

<details markdown="1"><summary>Forudsig først: hvad sker der med U_cd, når grenene er ens (samme R og samme X med samme fortegn)?</summary>

Så ligger c og d i samme punkt, og U_cd = 0. Broen er i balance. Med en spole i den ene gren og en kondensator i den anden ligger punkterne på hver sin side af U, og U_cd bliver stor. Prøv i modellen.
</details>

<div class="m" data-m="blandet"></div>

### Gennemregnet eksempel (opgavesæt 2, opgave 7)

R1 = 100 Ω i serie med L = 0,25 H i den ene gren, R2 = 80 Ω i serie med C = 20 µF i den anden. U = 100 V, 50 Hz. Klemme c sidder mellem L og R1, klemme d mellem C og R2.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| X_L og X_C | 2π·50·0,25 og 1/(2π·50·20·10⁻⁶) | 78,5 Ω og 159,2 Ω |
| Z1 | 100 + j78,5 | 127,2 Ω ∠ 38,2° |
| Z2 | 80 − j159,2 | 178,1 Ω ∠ −63,3° |
| I1 | 100 / 127,2∠38,2° | 0,786 A ∠ −38,2° |
| I2 | 100 / 178,1∠−63,3° | 0,561 A ∠ 63,3° |
| I = I1 + I2 | (0,618 − j0,486) + (0,252 + j0,502) | 0,871 A ∠ 1,0° |
| Z_kreds | 100 / 0,871∠1,0° | 114,8 Ω ∠ −1,0° |
| cos φ | cos(−1,0°) | 1,00 (en anelse kapacitiv) |
| U_cd = I1·R1 − I2·R2 | 78,6∠−38,2° − 44,9∠63,3° | 98,0 V |

> **Usikkert i besvarelsen**
> Den indsendte besvarelse skrev Z2 = 80 + 159,15 · i. Kondensatorens reaktans skal have minus. Med det rigtige fortegn er de to grene næsten i balance, så den samlede strøm ligger i fase med spændingen (cos φ ≈ 1,00), og I = 0,87 A, ikke 1,54 A.
</details>

## Serieforbundne parallelkredse

En parallelkreds (to grene mellem b og e) i serie med andre komponenter. Regn parallelkredsen om til én impedans Z_eb, og læg resten til i serie.

```
Z_eb = ((R2 + jX_L2)⁻¹ + (R3 − jX_C)⁻¹)⁻¹
Z_fa = R1 + Z_eb + jX_L1
I1 = U / Z_fa      U_eb = I1 · Z_eb      I2 = U_eb / (R2 + jX_L2)      I3 = U_eb / (R3 − jX_C)
```

**Vektordiagrammet:** I serieleddene er I1 fælles. Start med I1 som reference, tegn U_R1, så U_eb, så U_L1. Parallelkredsens to grene tegnes ud fra U_eb med sin egen Thales-cirkel.

> **Trykfejl på slides (PP5, slide 4)**
> Formlen skriver Z_fa = R1 + Z_eb + X_L1. Spolen skal med som jX_L1 (90° drejet). Lægges X_L1 til som et reelt tal, bliver både størrelse og vinkel forkert.

### Gennemregnet eksempel (opgavesæt 2, opgave 2)

R1 = 145 Ω i serie med en parallelkreds af C = 75 µF og (R2 = 50 Ω + L = 0,11 H). Spændingen over kondensatoren er 70 V, 50 Hz.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| X_L og X_C | 2π·50·0,11 og 1/(2π·50·75·10⁻⁶) | 34,6 Ω og 42,4 Ω |
| I_C | 70 / 42,4∠−90° | 1,65 A ∠ 90° |
| Z for R2 + L | 50 + j34,6 | 60,8 Ω ∠ 34,7° |
| I_R2 | 70 / 60,8∠34,7° | 1,15 A ∠ −34,7° |
| I_R1 = I_C + I_R2 | | 1,37 A ∠ 46,4° |
| U_R1 | 145 · 1,37∠46,4° | 199 V ∠ 46,4° |
| U = U_R1 + U_C | | 252,6 V ∠ 34,8° |
| φ = vinkel(U) − vinkel(I) | 34,8° − 46,4° | −11,6° (kapacitiv) |
| cos φ | | 0,98 |

> **Usikkert i besvarelsen**
> Den indsendte besvarelse brugte vinklen på U (34,8°) som φ og fik cos φ = 0,82. φ er vinklen mellem U og I, og strømmen ligger på 46,4°, så φ = −11,6° og cos φ = 0,98.
</details>

## Fremgangsmåde, der altid virker

1. Regn alle reaktanser ud.
2. Skriv hver gren som et komplekst tal (R + jX_L eller R − jX_C).
3. Reducer: serie lægges sammen, parallel med (Z1⁻¹ + Z2⁻¹)⁻¹.
4. Find den samlede strøm I = U / Z.
5. Gå baglæns: spænding over parallelkredsen, så strømmen i hver gren.
6. Kontrollér med Kirchhoff: grenstrømmene skal summere vektorielt til I, og spændingerne rundt skal gå op.
7. φ er altid vinklen fra I til U. cos φ = R_kreds / |Z|.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor ligger c og d på en cirkel i vektordiagrammet?
2. Hvad er reference i en parallelforbundet seriekreds, og hvad i en serieforbundet parallelkreds?
3. Hvordan finder du φ, når du kender U∠α og I∠β?
4. Hvornår er U_cd = 0?

<details markdown="1"><summary>Svar</summary>

1. U_R og U_X står vinkelret i hver gren. Toppunktet af en retvinklet trekant med U som hypotenuse ligger på Thales-cirklen.
2. Parallelforbundne seriekredse: U (fælles for grenene). Serieforbundne parallelkredse: I1 (fælles for seriedelen).
3. φ = α − β.
4. Når de to grene deler spændingen ens, fx R1/X1 = R2/X2 med samme fortegn på X (en balanceret bro).
</details>
</div>

# Formler

### Grene og reduktion
```
Z_RL = R + jX_L        Z_RC = R − jX_C
Serie:     Z = Z1 + Z2
Parallel:  Z = (Z1⁻¹ + Z2⁻¹)⁻¹
```

### Strømme og spændinger
```
I = U / Z                  I = I1 + I2 (vektorielt)
U_cd = U_ca − U_ad
φ = vinkel(U) − vinkel(I)     cos φ = Re(Z) / |Z|
```

### Serieforbundet parallelkreds
```
Z_eb = ((R2 + jX_L2)⁻¹ + (R3 − jX_C)⁻¹)⁻¹
Z_fa = R1 + Z_eb + jX_L1
U_eb = I1 · Z_eb
```

# Quiz

Q: Z1 = 100 + j78,5 Ω. Hvad er |Z1|? (Ω)
N: 127,1 ; 0,3 ; Ω
L: |Z1| = √(100² + 78,5²) = √(10000 + 6162) = √16162 = 127,1 Ω.
F: Pythagoras på real- og imaginærdel.

Q: Strømmen ligger på 46,4° og spændingen på 34,8°. Hvad er φ? (°)
N: -11,6 ; 0,2 ; °
L: φ = vinkel(U) − vinkel(I) = 34,8 − 46,4 = −11,6°.
F: Negativ φ betyder kapacitiv: strømmen ligger før spændingen.

Q: Hvad er reference i vektordiagrammet for to seriegrene, der sidder i parallel?
A: Strømmen i den første gren
R: Den fælles spænding U
A: Den samlede strøm
A: Spændingen over den første modstand
F: Grenene har samme spænding, så U er reference.

Q: Hvorfor ligger punkterne c og d på en Thales-cirkel?
R: I hver gren står U_R og U_X vinkelret på hinanden og summerer til U
A: Fordi strømmene er lige store
A: Fordi frekvensen er 50 Hz
A: Det gør de kun ved resonans
F: En retvinklet trekant med U som hypotenuse har toppunktet på cirklen med U som diameter.

Q: Med R1 = 100 Ω, X_L = 78,5 Ω i den ene gren og R2 = 80 Ω, X_C = 159 Ω i den anden på 100 V: hvad er den samlede strøm? (A)
N: 0,871 ; 0,01 ; A
L: I1 = 0,786∠−38,2° = 0,618 − j0,486. I2 = 0,561∠63,3° = 0,252 + j0,502. I = 0,870 + j0,016, |I| = 0,871 A.
F: Den induktive og den kapacitive strøm ophæver næsten hinanden, så I er næsten i fase med U.

Q: Hvilken fejl giver det, hvis du skriver X_C med plus i en gren?
A: Kun vinklen bliver forkert
R: Grenen opfører sig som en spole, så både strømme, Z og cos φ bliver forkerte
A: Ingen, størrelsen er den samme
A: Kun U_cd bliver forkert
F: Fortegnet bestemmer, om strømmen ligger før eller efter. Hele vektorsummen ændrer sig.

Q: En parallelkreds har Z_eb = 30 + j10 Ω og sidder i serie med R1 = 20 Ω og X_L1 = 15 Ω. Hvad er |Z_fa|? (Ω)
N: 55,9 ; 0,3 ; Ω
L: Z_fa = 20 + (30 + j10) + j15 = 50 + j25. |Z_fa| = √(50² + 25²) = √3125 = 55,9 Ω.
F: Serieled lægges sammen komplekst: realdele for sig, imaginærdele for sig.

Q: Hvordan kontrollerer du dine grenstrømme?
R: Med Kirchhoffs 1. lov: summen af grenstrømmene skal give den samlede strøm vektorielt
A: Ved at lægge størrelserne sammen
A: Ved at gange med cos φ
A: Det kan man ikke
F: I = I1 + I2 som vektorer, ikke som tal.
