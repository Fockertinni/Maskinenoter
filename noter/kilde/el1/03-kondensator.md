id: kondensator
navn: Kondensatoren
ikon: kondensator
intro: Elektrisk felt, flux og kapacitans, kondensatorer i serie og parallel, op- og afladning, kapacitans i kabler og luftledninger, og fasekompensering.
---
# Noter

> **Kilder**
> PP3 Kondensatoren · Obligatorisk opgavesæt 1, opgave 2 · Obligatorisk opgavesæt 2, opgave 6

En kondensator er to ledende plader adskilt af en isolator (dielektrikum). Lægger du en spænding over, samles der +Q på den ene plade og −Q på den anden, og der opstår et elektrisk felt imellem dem. Kondensatoren lagrer energi i feltet.

## Felt, flux og kapacitans

```
C = Q / U = ε · A / a          [F]       ε = ε₀ · ε_r,  ε₀ = 8,85·10⁻¹² F/m
E = U / a                       [V/m]     elektrisk feltstyrke
D = Q / A                       [C/m²]    forskydningstæthed (fluxtæthed)
ψ = E · A = Q / ε               [Vm]      elektrisk flux
W = ½ · C · U²                  [J]       energi i feltet
```

- C vokser med pladearealet A og ε_r og falder med afstanden a.
- Et dielektrikum med højt ε_r polariseres (figur b på slide 2). Molekylerne vender sig, så feltet inde i materialet bliver svagere, og pladerne kan rumme mere ladning ved samme spænding.

### Coulombs lov (opgavesæt 1, opgave 2.2)

```
F = (1 / (4π · ε₀ · ε_r)) · Q1 · Q2 / r²
```

To ladninger på +25 µC og −25 µC med 0,15 m imellem i luft: F = 8,99·10⁹ · 625·10⁻¹² / 0,0225 = **250 N** (tiltrækning). Fordobles afstanden, bliver kraften en fjerdedel: **62,4 N**. I transformerolie (ε_r = 2,2) bliver den 250 / 2,2 = **114 N**.

### To dielektrika i serie (opgavesæt 1, opgave 2.1)

Luft og PVC (ε_r = 7) i lige tykke lag mellem pladerne. Samme ladning går gennem begge lag, så D er ens. Da E = D / ε, bliver feltet i luften **7 gange** større end i PVC, og luftlaget tager 7/8 af spændingen.

<details markdown="1"><summary>Forudsig først: hvad sker der, hvis du øger ε_r i det faste lag? Får luften mere eller mindre af spændingen?</summary>

Mere. Jo bedre det faste materiale er (højere ε_r), jo mere skubbes feltet over i luften. Derfor er luftlommer i kabelisolation og viklinger farlige. Prøv det i modellen.
</details>

<div class="m" data-m="dielektrikum"></div>

## Serie og parallel

| | Serie | Parallel |
|---|---|---|
| Ladning | Q = Q1 = Q2 | Q = Q1 + Q2 |
| Spænding | U = U1 + U2 | U = U1 = U2 |
| Kapacitans | C = (C1⁻¹ + C2⁻¹)⁻¹ | C = C1 + C2 |
| Reaktans | X_C = X_C1 + X_C2 | X_C = (X_C1⁻¹ + X_C2⁻¹)⁻¹ |

Kondensatorer regnes "omvendt" af modstande: parallel lægges sammen, serie regnes som modstande i parallel. Reaktansen X_C = 1/(ωC) regnes derimod som modstande.

> **Trykfejl på slides (PP3, slide 4)**
> Ved parallelforbindelse står Q = Q1 + Q2 [Q]. Enheden er coulomb [C].

## Op- og afladning

Gennem en modstand R lades kondensatoren op med tidskonstanten τ = R · C.

```
Opladning:  u_C = U · (1 − e^(−t/τ))      i = I · e^(−t/τ)      (I = U / R)
Afladning:  u_C = U · e^(−t/τ)            i = −I · e^(−t/τ)
```

| t | 1τ | 2τ | 3τ | 4τ | 5τ |
|---|---|---|---|---|---|
| Opladning | 63,2 % | 86,5 % | 95,0 % | 98,2 % | 99,3 % |
| Afladning | 36,8 % | 13,5 % | 5,0 % | 1,8 % | 0,7 % |

Efter 5τ regnes forløbet som slut. Strømmen er størst i første øjeblik, hvor kondensatoren opfører sig som en kortslutning.

<div class="m" data-m="rc"></div>

> **Sikkerhed**
> En opladet kondensator kan holde på en farlig spænding længe efter, at den er afbrudt (fx i frekvensomformere og kompenseringsanlæg). Aflad og mål, før du rører.

## Kapacitans i kabler og luftledninger

Et kabel er en lang kondensator: lederne er pladerne, og isolationen er dielektrikum. Der er kapacitans mellem lederne (C_c) og fra hver leder til skærm eller jord (C_s). Selv uden belastning trækker kablet en **ladestrøm** I_C = U / X_C, som ligger 90° før spændingen.

- Kabler har meget større kapacitans end luftledninger, fordi lederne ligger tæt og ε_r er større end i luft.
- Lange, ubelastede kabler leverer reaktiv effekt til nettet. Spændingen for enden kan blive højere end ved forsyningen (Ferranti-effekten, går ud over slides).
- Kapacitansen er grunden til, at en isolationsprøve med DC skal have tid, og at et kabel skal aflades bagefter.

## Fasekompensering

Induktive laster (motorer, lysstofrør med spole) trækker en wattløs strøm, der belaster kabler og transformere uden at udføre arbejde. En kondensator i parallel leverer den reaktive strøm lokalt, så nettet kun skal levere den aktive strøm.

```
Q_C = P · (tan φ₁ − tan φ₂)       X_C = U² / Q_C       C = 1 / (ω · X_C)
```

- Den aktive strøm I_w = I · cos φ ændres ikke. Det er kun den wattløse del, der bliver mindre.
- Kompensér ikke til cos φ = 1. Ved lav last kan anlægget blive kapacitivt, og der er risiko for resonans med nettets induktans.

<div class="m" data-m="kompensering"></div>

### Gennemregnet eksempel (opgavesæt 2, opgave 6: lysstofrør)

Et lysstofrør på 24 W med reaktansspole på 230 V, 50 Hz. Strømmen I2 er 0,25 A, og spolen har 4 W tab. Efter kompensering er strømmen I1 = 0,15 A (stadig induktiv).

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| R_rør og R_spole | 24 / 0,25² og 4 / 0,25² | 384 Ω og 64 Ω |
| Z for grenen | 230 / 0,25 | 920 Ω |
| φ for I2 | cos⁻¹((384 + 64) / 920) | 60,9° |
| Spolens impedans | 920∠60,9° − 384 | 806 Ω ∠ 85,5° |
| U over spolen | 806 · 0,25 | 201,5 V |
| Aktiv strøm (uændret) | 0,25 · cos 60,9° | 0,1217 A |
| Ny vinkel | cos⁻¹(0,1217 / 0,15) | 35,7° |
| I_C | 0,25 · sin 60,9° − 0,15 · sin 35,7° = 0,2184 − 0,0876 | 0,131 A |
| C | 0,131 / (230 · 314,16) | 1,81 µF |

U over spolen og røret er tilsammen mere end 230 V, fordi de lægges vektorielt sammen.
</details>

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad sker der med C, hvis du halverer afstanden mellem pladerne?
2. Hvorfor er feltet størst i luftlaget, når luft og PVC sidder i serie?
3. Hvor stor en del af vejen er kondensatoren opladet efter 3τ?
4. Hvilken strøm ændrer sig ikke ved fasekompensering?

<details markdown="1"><summary>Svar</summary>

1. C fordobles, fordi C = εA/a.
2. D er den samme i begge lag, og E = D/ε. Luften har lavest ε, så den får størst E.
3. 95 %.
4. Den aktive strøm (wattstrømmen) I · cos φ.
</details>
</div>

# Formler

### Felt og kapacitans
```
C = Q / U = ε₀ · ε_r · A / a
E = U / a          D = Q / A          ψ = E · A = Q / ε
W = ½ · C · U²
F = Q1 · Q2 / (4π · ε₀ · ε_r · r²)
```

### Serie og parallel
```
Serie:     C = (C1⁻¹ + C2⁻¹)⁻¹      Q ens, U deles
Parallel:  C = C1 + C2              U ens, Q deles
X_C = 1 / (ω · C)
```

### Op- og afladning
```
τ = R · C
Op:   u_C = U · (1 − e^(−t/τ))     i = I · e^(−t/τ)
Af:   u_C = U · e^(−t/τ)           i = −I · e^(−t/τ)
```

### Fasekompensering
```
Q_C = P · (tan φ₁ − tan φ₂)
X_C = U² / Q_C          C = 1 / (ω · X_C) = Q_C / (ω · U²)
cos⁻¹ 0,90 = 25,84°     cos⁻¹ 0,95 = 18,19°
```

# Quiz

Q: To ladninger på +25 µC og −25 µC sidder 0,15 m fra hinanden i luft. Hvor stor er kraften? (N)
N: 250 ; 2 ; N
L: F = 8,99·10⁹ · (25·10⁻⁶)² / 0,15² = 8,99·10⁹ · 6,25·10⁻¹⁰ / 0,0225 = 249,7 N.
F: Coulombs lov. Modsatte ladninger tiltrækker hinanden.

Q: Afstanden mellem de to ladninger fordobles. Hvad sker der med kraften?
A: Den halveres
R: Den bliver en fjerdedel
A: Den fordobles
A: Den er uændret
F: F ∝ 1/r², så dobbelt afstand giver (1/2)² = 1/4.

Q: Luft og PVC (ε_r = 7) ligger i lige tykke lag i en kondensator. Hvor mange gange større er feltstyrken i luften end i PVC?
N: 7 ; 0,1 ;
L: D = Q/A er ens i begge lag. E = D / (ε₀ · ε_r), så E_luft / E_PVC = 7 / 1 = 7.
F: Det svageste dielektrikum får den største feltstyrke.

Q: To kondensatorer på 10 µF og 40 µF sidder i serie. Hvad er den samlede kapacitans? (µF)
N: 8 ; 0,05 ; µF
L: C = (1/10 + 1/40)⁻¹ = (0,125)⁻¹ = 8 µF.
F: Kondensatorer i serie regnes som modstande i parallel.

Q: R = 100 Ω og C = 470 µF. Hvad er tidskonstanten? (ms)
N: 47 ; 0,5 ; ms
L: τ = R · C = 100 · 470·10⁻⁶ = 0,047 s = 47 ms.
F: Efter 5τ = 235 ms er kondensatoren praktisk talt opladet.

Q: Hvor mange procent er kondensatoren opladet efter 2τ?
A: 63,2 %
R: 86,5 %
A: 95,0 %
A: 50 %
F: 1 − e⁻² = 0,865.

Q: En last på 2 kW har cos φ = 0,60 og skal kompenseres til 0,95 på 230 V. Hvor stor skal Q_C være? (var)
N: 2009 ; 15 ; var
L: tan φ₁ = tan(cos⁻¹ 0,6) = 1,333 og tan φ₂ = tan(18,19°) = 0,3287. Q_C = 2000 · (1,333 − 0,3287) = 2009 var.
F: Q_C = P · (tan φ₁ − tan φ₂).

Q: Hvilken størrelse er uændret, når du fasekompenserer en motor?
A: Den samlede strøm fra nettet
R: Den aktive effekt P og wattstrømmen
A: Den reaktive effekt fra nettet
A: Den tilsyneladende effekt
F: Kondensatoren leverer kun reaktiv effekt. Motoren bruger samme P før og efter.

Q: Hvorfor trækker et ubelastet kabel alligevel strøm fra nettet?
R: Kablet har kapacitans mellem lederne og mod jord, så der løber en ladestrøm
A: Isolationen er defekt
A: Kablet har induktans
A: Det gør det ikke
F: Ladestrømmen I_C = U / X_C ligger 90° før spændingen og er større, jo længere kablet er.
