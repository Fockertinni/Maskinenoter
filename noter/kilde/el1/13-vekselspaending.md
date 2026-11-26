id: vekselspaending
navn: Vekselspænding, strøm og effekt (enfaset)
ikon: sinus
intro: Hvordan vekselspænding laves, middel-, effektiv- og spidsværdi, formfaktor, S, P og Q, effektfaktor og watt- og wattløs strøm.
---
# Noter

> **Kilder**
> PP13 Vekselspænding, strøm og effekter (enfaset) · Obligatorisk opgavesæt 2, opgave 8 og 9

Vekselspænding er grundlaget for alt det andet i faget. Her ser du, hvor sinussen kommer fra, hvad de forskellige værdier betyder, og hvordan effekten deles i en aktiv og en reaktiv del.

## Fremstilling af vekselspænding

En ledersløjfe drejer i et magnetfelt. Når lederne bevæger sig vinkelret på feltlinjerne, skærer de flest linjer, og spændingen er størst. Når de bevæger sig langs linjerne, er spændingen nul. Projicerer du et punkt på en roterende cirkel ind på en tidsakse, får du en sinus.

```
E_max = B · l · v           [V]   (én leder, vinkelret på feltet)
e = E_max · sin(ω · t)      ω = 2π · f
T = 1 / f                   50 Hz → T = 20 ms
```

> **Bemærk om slides (PP13, slide 2)**
> E_max = B · l · v gælder for én leder. En sløjfe har to sider, der begge skærer feltet, så for en sløjfe med N vindinger er E_max = 2 · N · B · l · v.

## Middel-, effektiv- og spidsværdi

```
U_max = √2 · U_eff                 230 V → 325 V
U_eff = U_max / √2 ≈ 0,707 · U_max
U_mid = (2/π) · U_max ≈ 0,637 · U_max   (middelværdi over en halv periode)
ξ = U_eff / U_mid ≈ 1,11              formfaktor
k = U_max / U_eff = √2 ≈ 1,414        spidsfaktor (crest)
```

| Værdi | Betyder | Bruges til |
|---|---|---|
| Spidsværdi (peak) | Den højeste værdi | Isolation, overslag, spærrespænding for dioder |
| Effektivværdi (RMS) | Den DC-spænding, der giver samme varme i en modstand | Alt hvad der står på typeskilte og måles med et multimeter |
| Middelværdi | Gennemsnit over en halv periode | Ensretning, billige instrumenter |

Formfaktoren 1,11 gælder kun for en ren sinus. Et billigt instrument måler middelværdien og ganger med 1,11. Er kurven forvrænget, viser det forkert. Et **true RMS**-instrument måler den rigtige effektivværdi.

## Effekt i en vekselstrømskreds

Når strømmen er forskudt φ efter spændingen, kan den deles i to komposanter:

```
I_W  = I · cos φ      [A]   wattstrøm (aktiv), i fase med U
I_WL = I · sin φ      [A]   wattløs strøm (reaktiv), 90° på U

P = U · I · cos φ     [W]     aktiv effekt: bliver til varme og arbejde
Q = U · I · sin φ     [var]   reaktiv effekt: pendler frem og tilbage
S = U · I             [VA]    tilsyneladende effekt: det kablet skal dimensioneres efter
S = √(P² + Q²)        λ = cos φ = P / S
S̄ = Ū · Ī*            (kompleks, Ī* er den konjugerede strøm)
```

Effekttrekanten har P vandret, Q lodret og S som hypotenuse. Vinklen mellem P og S er φ.

**Hvorfor Q betyder noget:** reaktiv effekt laver ikke arbejde, men strømmen skal stadig løbe i kablerne og give tab. Derfor fasekompenserer man (se [kondensatoren](kondensator.html)).

<details markdown="1"><summary>Forudsig først: 230 V og 10 A med φ = 37°. Hvor stor er P og Q?</summary>

cos 37° = 0,80 og sin 37° = 0,60. P = 230 · 10 · 0,80 = 1.837 W. Q = 230 · 10 · 0,60 = 1.384 var. S = 2.300 VA. Træk φ til 0 i modellen og se, at effektkurven aldrig går negativ.
</details>

<div class="m" data-m="sinus"></div>

I modellen er p = u · i. Middelværdien af p er P. Når φ ≠ 0, er p negativ en del af tiden: energien går tilbage til nettet. Det er den reaktive del.

### Gennemregnet eksempel (opgavesæt 2, opgave 9: spole med jernkerne)

230 V, 50 Hz, I = 1,25 A, P = 250 W, kobberresistans 130 Ω.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| S | 230 · 1,25 | 287,5 VA |
| cos φ | 250 / 287,5 | 0,870 (φ = 29,6°) |
| Q | 287,5 · sin 29,6° | 142 var |
| I_W | 1,25 · 0,870 | 1,09 A |
| I_WL | 1,25 · sin 29,6° | 0,62 A |
| Kobbertab | 130 · 1,25² | 203,1 W |
| Jerntab | 250 − 203,1 | 46,9 W |

Wattstrømmen dækker både kobber- og jerntab. Den wattløse strøm er magnetiseringsstrømmen.
</details>

### Gennemregnet eksempel (opgavesæt 2, opgave 8: tre-voltmeter-metoden)

R1 = 200 Ω i serie med en ukendt spole Z. V1 (over R1) = 55 V, V2 (over Z) = 75 V, V3 (over det hele) = 125 V.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| I | 55 / 200 | 0,275 A |
| Z | 75 / 0,275 | 272,7 Ω |
| cos φ_Z (cosinusrelationen) | (125² − 55² − 75²) / (2 · 55 · 75) | 0,845 |
| R | 272,7 · 0,845 | 230,6 Ω |
| X_L | 272,7 · sin φ_Z | 145,6 Ω |
| L | 145,6 / (2π · 50) | 0,464 H |
| Spole: S, P, Q | 75 · 0,275 · (1; 0,845; 0,534) | 20,6 VA, 17,4 W, 11,0 var |
| Kreds: P | 17,4 + 55 · 0,275 | 32,6 W |
| Kreds: Q og S | 11,0 og 125 · 0,275 | 11,0 var og 34,4 VA |

Metoden virker, fordi spændingerne danner en trekant: U_R1 og U_Z lægges vektorielt sammen til U.
</details>

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad er spidsværdien af 230 V?
2. Hvad betyder effektivværdi?
3. Hvad er forskellen på P, Q og S?
4. Hvad er wattstrøm og wattløs strøm?

<details markdown="1"><summary>Svar</summary>

1. 230 · √2 = 325 V.
2. Den DC-spænding, der giver samme varmeudvikling i en modstand.
3. P er den aktive effekt, der laver arbejde [W]. Q er den reaktive effekt, der pendler [var]. S = U · I er den samlede, som kablet belastes med [VA].
4. Wattstrømmen I · cos φ er i fase med spændingen og giver P. Den wattløse strøm I · sin φ er 90° forskudt og giver Q.
</details>
</div>

# Formler

### Sinus
```
e = E_max · sin(ωt)     ω = 2πf     T = 1/f
E_max = B · l · v  (én leder)
```

### Værdier
```
U_max = √2 · U_eff
U_mid = (2/π) · U_max = 0,637 · U_max
ξ = U_eff / U_mid = 1,11      k = U_max / U_eff = 1,414
```

### Effekt
```
P = U · I · cos φ     [W]
Q = U · I · sin φ     [var]
S = U · I = √(P² + Q²)   [VA]
λ = cos φ = P / S
I_W = I · cos φ       I_WL = I · sin φ
S̄ = Ū · Ī*
```

# Quiz

Q: Hvad er spidsværdien af en sinusspænding på 230 V? (V)
N: 325 ; 1 ; V
L: U_max = 230 · √2 = 325,3 V.
F: 230 V er effektivværdien.

Q: Hvad er middelværdien af 230 V sinus (over en halv periode)? (V)
N: 207 ; 1 ; V
L: U_mid = 2/π · 325,3 = 207,1 V.
F: Middelværdien er 0,637 af spidsværdien.

Q: Hvad er formfaktoren for en ren sinus?
N: 1,11 ; 0,01 ;
L: ξ = U_eff / U_mid = (1/√2) / (2/π) = π / (2√2) = 1,11.
F: Gælder kun for ren sinus. Derfor skal du bruge et true RMS-instrument ved forvrængede kurver.

Q: Hvor lang er en periode ved 50 Hz? (ms)
N: 20 ; 0,1 ; ms
L: T = 1 / 50 = 0,02 s = 20 ms.
F: T = 1 / f.

Q: En spole optager 1,25 A og 250 W ved 230 V. Hvad er effektfaktoren?
N: 0,87 ; 0,01 ;
L: S = 230 · 1,25 = 287,5 VA. cos φ = 250 / 287,5 = 0,870.
F: λ = P / S.

Q: Samme spole. Hvad er den wattløse strøm? (A)
N: 0,62 ; 0,02 ; A
L: φ = arccos 0,870 = 29,6°. I_WL = 1,25 · sin 29,6° = 0,62 A.
F: Den wattløse strøm er komposanten 90° på spændingen.

Q: Spolen har en kobberresistans på 130 Ω. Hvad er jerntabet? (W)
N: 46,9 ; 0,5 ; W
L: P_Cu = 130 · 1,25² = 203,1 W. P_Fe = 250 − 203,1 = 46,9 W.
F: Den målte effekt er kobbertab plus jerntab.

Q: Hvad skal et kabel dimensioneres efter?
A: Den aktive effekt P
A: Den reaktive effekt Q
R: Den tilsyneladende effekt S (altså strømmen)
A: Middelværdien af spændingen
F: Strømmen I = S/U giver varmen i kablet, uanset om den er aktiv eller reaktiv.

Q: P = 1.837 W og Q = 1.384 var. Hvad er S? (VA)
N: 2300 ; 5 ; VA
L: S = √(1.837² + 1.384²) = 2.300 VA.
F: P og Q er kateter i effekttrekanten. S er hypotenusen.

Q: Hvad viser et ikke-true-RMS instrument på en forvrænget kurve?
A: Altid den rigtige effektivværdi
R: Middelværdien gange 1,11, som kan være forkert
A: Spidsværdien
A: Nul
F: Formfaktoren 1,11 passer kun til ren sinus.
