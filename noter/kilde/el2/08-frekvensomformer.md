id: frekvensomformer
navn: Frekvensomformer
ikon: frekvens
intro: Halvlederkomponenter, styret ensretning, frekvensomformerens fire dele, PAM og PWM, U/f-styring, lineære og ulineære forbrugere, harmoniske og THD, DC-fordeling og reluktansmotoren.
---
# Noter

> **Kilder**
> UV 29–32 · SH s. 15–49 og 118–157 · FL1 kap. 6 · UV11 · UV2 · UV4 · Lab 8

Frekvensomformeren gør det muligt at styre en vekselstrømsmotors hastighed trinløst ved at **ændre frekvens og spænding sammen**. Prisen er et ikke-sinusformet strømoptag fra nettet (høj THDi) og højfrekvente spændingspulser på motoren.

## Halvlederkomponenter

| Komponent | Styring | Tænder | Slukker | Brug |
|---|---|---|---|---|
| Diode | Ingen | Når anoden er positiv i forhold til katoden | Når strømmen vender | Ustyret ensretter |
| Thyristor (SCR) | Gate-puls | Gate-puls + fremadspænding | Først når strømmen går i nul | Styret ensretter, softstarter, DC-drev |
| Triac | Gate | Begge retninger | Ved strømmens nulgennemgang | 1-faset AC-styring (dæmpere) |
| Transistor / IGBT / MOSFET | Gate/basis kontinuert | Når gaten er på | Når gaten slås fra | Vekselretter (PWM), choppere |

**Styret ensretning (thyristorbro):** tændvinklen α forsinker tændingen og sænker middelspændingen. For en 6-puls bro:

```
U_d = 1,35 · U_L · cos α
```

Ved α > 90° bliver U_d negativ, og broen kører som vekselretter (energi tilbage til nettet). To antiparallelle broer giver 4-kvadrantdrift af en DC-motor.

## Frekvensomformerens opbygning

1. **Ensretter:** typisk en ustyret 6-puls diodebro (B6). Laver pulserende DC.
2. **Mellemkreds:** kondensatorer (og ofte en DC-spole) udglatter. Spændingen er ≈ √2 · U_L, altså 540–565 V DC på et 400 V-net. Indeholder evt. også bremsechopper og bremsemodstand.
3. **Vekselretter (inverter):** 6 IGBT'er med friløbsdioder, der skifter mellemkredsspændingen ud på motorens tre faser.
4. **Styre- og reguleringsdel:** danner koblingsmønsteret, måler strøm og spænding og beskytter.

**PAM og PWM:** ved PAM varieres mellemkredsspændingen (chopper eller thyristorbro), og vekselretteren sætter frekvensen. Ved PWM er mellemkredsspændingen fast, og både spænding og frekvens dannes ved at variere pulsbredderne i et højfrekvent mønster (kHz). Motorens induktans udglatter strømmen til næsten sinus. Moderne drev er PWM.

## Hastighedsregulering af asynkronmotorer

```
n_2 = 60 · f / p · (1 − s)
```

Hastigheden kan ændres via polpartallet (polomkobling, faste trin), slippet (rotormodstand eller lavere statorspænding, som giver tab) eller frekvensen (frekvensomformer, bedst).

- **U/f-styring:** U holdes proportional med f op til 50 Hz, så fluxen og dermed momentet er konstant. Over 50 Hz kan U ikke stige mere, og der opstår feltsvækning med faldende moment.
- **Slipkompensation:** øger frekvensen med lasten, så hastigheden holdes.
- **Startkompensation / boost:** ekstra spænding ved lav frekvens for at klare spændingsfaldet i R1 og give startmoment.
- **Vektorstyring / DTC:** en motormodel i softwaren styrer flux og moment direkte, med en dynamik som en DC-motor.
- **Energibesparelse:** pumper og blæsere følger affinitetslovene (P ∝ n³). 20 % lavere hastighed giver ca. halv effekt.

<div class="m" data-m="uf"></div>

**Ulemper:** overharmoniske strømme i nettet, høje du/dt-pulser (lejestrømme, isolationsbelastning, EMC), krav om skærmet kabel og ofte RCD type B.

## Lineære og ulineære forbrugere

- **Lineær:** strømmen har samme form som spændingen (R, L, C og motorer direkte på nettet).
- **Ulineær:** strømmen trækkes i pulser. Det gælder ensrettere med kondensator (frekvensomformere, PC'er, LED-drivere, UPS). Diodebroen leder kun, når netspændingen er over kondensatorens spænding, så strømmen kommer i korte, høje spidser.

## Overharmoniske og THD

En periodisk, ikke-sinusformet kurve kan skrives som en sum af sinuskurver ved grundfrekvensen (50 Hz) og heltallige multipla af den (Fourier). En 6-puls ensretter giver harmoniske af orden h = 6k ± 1: 5., 7., 11., 13. osv. Der er ingen lige og ingen, der er delelige med 3, i en symmetrisk 3-lederforsyning.

```
THD_i = √(I_2² + I_3² + I_4² + …) / I_1 · 100 %
I_RMS = √(I_1² + I_2² + I_3² + …) = I_1 · √(1 + THD_i²)
S² = P² + Q² + D²        PF = P / S = cos φ_1 · I_1 / I_RMS
```

THDu defineres på samme måde med spændinger. Harmoniske strømme giver spændingsforvrængning gennem nettets impedans: U_h = I_h · h · X_net. **Derfor er THDu størst i svage net**, fx et skib i ø-drift på én generator.

D (Q_D) er forvrængningseffekten. cos φ (displacement) kan være næsten 1 på en frekvensomformer, mens den samlede effektfaktor PF er meget lavere.

<details markdown="1"><summary>Forudsig først: hvad sker der med I_RMS, hvis THDi er 100 %?</summary>

I_RMS = I_1 · √(1 + 1) = 1,41 · I_1. Kablet skal føre 41 % mere strøm end grundtonen alene, selvom den nyttige effekt er den samme. Skru på skyderne i modellen.
</details>

<div class="m" data-m="thd"></div>

**Konsekvenser:** opvarmning af kabler, transformere og motorer, overbelastet nul (3. harmoniske lægges sammen i N fra 1-fasede ikke-lineære laster), resonans med kompenseringskondensatorer, fejlfunktion i elektronik og RCD'er, og støj.

**Afhjælpning:** DC-spole eller AC-netspole i drevet, 12- eller 18-puls ensretter (fasedrejningstransformer), passive filtre, aktive filtre og Active Front End (IGBT-ensretter).

**Strømfortrængning (skin-effekt):** ved højere frekvens presses strømmen ud mod lederens overflade. Det giver større effektiv modstand og ekstra tab ved harmoniske.

## DC-fordelingssystemer (UV4)

Nyere skibe bruger DC-hovedfordeling. Generatorerne leverer via ensrettere til en fælles DC-skinne, og forbrugerne fødes via vekselrettere.

- **Fordele:** generatorerne skal ikke synkroniseres og kan køre ved variabel hastighed (bedste brændstoføkonomi), batterier kobles direkte på, og der skal bruges færre transformere.
- **Ulempe:** DC-kortslutninger er svære at afbryde, fordi der ingen nulgennemgang er. Det kræver halvlederbeskyttelse.

## Reluktansmotoren

Rotoren har ingen vikling og ingen magneter, kun jern formet så den magnetiske modstand (reluktans) er lav i én retning (d-aksen) og høj på tværs (q-aksen). Rotoren søger at stille sig, så reluktansen er mindst, og følger derfor drejefeltet synkront, uden slip.

- **Synkron reluktansmotor (SynRM):** almindelig 3-faset stator, kræver frekvensomformer. Ingen rotortab, så virkningsgraden er højere end en asynkronmotors, og rotor og lejer er køligere.
- **Switched reluctance (SR):** udprægede poler på både stator og rotor. Faserne tændes på skift ud fra rotorpositionen.
- **Ulempe:** lavere effektfaktor end en permanentmagnetmotor (rotoren skal magnetiseres fra statoren), og den kan ikke køre direkte på nettet.

## Lab 8 kort

Frekvensomformeren (local mode) driver reluktansmotoren, som belastes af Terco-momentbænken med DC-generator og modstandskasse. THD-meter Chauvin Arnoux CA8335, tangens pil mod frekvensomformeren. Målerapport.

1. 1.500 o/min. Mål I_RMS før og efter omformeren i tomgang, og forklar forskellen (pulseret netstrøm mod motorens magnetiseringsstrøm).
2. Tomgang, 1/3, 2/3 og 1/1 last: mål S, P, Q, Q_D, n og THDi før omformeren. Beregn η for omformer, motor og samlet.
3. Ved en valgt typisk lastgrad: mål de ulige harmoniske, beregn THDi og P1, og sammenlign med det målte.
4. 1.000 o/min ved 2/3 M_N: beregn virkningsgraderne igen.

```
η_FO = P_ud,FO / P_ind,FO        η_motor = M · ω / P_ud,FO        η_samlet = η_FO · η_motor
```

> **Mere til labøvelse 8**
> [Labnoterne](../../modeller/el2/lab8-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab8.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab8-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Nævn frekvensomformerens fire dele, og hvad hver gør.
2. Hvorfor holdes U/f konstant under 50 Hz?
3. Hvorfor giver en 6-puls ensretter ikke 3. harmoniske i et symmetrisk 3-ledernet?
4. Hvorfor kan cos φ være 0,98, mens PF kun er 0,7?

<details markdown="1"><summary>Svar</summary>

1. Ensretter (AC til pulserende DC), mellemkreds (udglatter og lagrer energi), vekselretter (IGBT'er danner motorens spænding og frekvens), styring (koblingsmønster, måling og beskyttelse).
2. Fluxen er proportional med U/f. Konstant flux giver konstant moment og undgår mætning ved lav frekvens.
3. 3. harmoniske er i fase i alle tre faser og har ingen vej tilbage uden nul. Ordenerne bliver 6k ± 1.
4. cos φ måler kun vinklen for grundtonen. PF medregner også, at I_RMS er større end I_1 på grund af de harmoniske.
</details>
</div>

# Formler

### Ensretter
```
U_d  = 1,35 · U_L · cos α          (6-puls, styret)
U_DC ≈ √2 · U_L ≈ 540–565 V        (ustyret, 400 V net)
```

### Hastighed
```
n_2 = 60 · f / p · (1 − s)
U / f = konstant op til 50 Hz
P ∝ n³                              (pumper og blæsere)
```

### Harmoniske
```
h = 6k ± 1                          (6-puls: 5, 7, 11, 13 …)
THD_i = √(Σ I_h²) / I_1 · 100 %     (h ≥ 2)
I_RMS = I_1 · √(1 + THD_i²)
U_h   = I_h · h · X_net
S² = P² + Q² + D²
PF = P / S = cos φ_1 · I_1 / I_RMS
```

### Virkningsgrader (Lab 8)
```
η_FO     = P_ud,FO / P_ind,FO
η_motor  = M · ω / P_ud,FO          ω = 2π · n / 60
η_samlet = η_FO · η_motor
```

# Quiz

Q: En styret 6-puls bro på 400 V har tændvinklen α = 60°. Hvad er U_d? (V)
N: 270 ; 1 ; V
L: U_d = 1,35 · 400 · cos 60° = 1,35 · 400 · 0,5 = 270 V.
F: Ved α > 90° bliver U_d negativ, og broen vekselretter.

Q: Hvilke harmoniske giver en 6-puls ensretter?
A: 2., 4., 6. …
A: 3., 9., 15. …
R: 5., 7., 11., 13. …
A: Alle ulige
F: h = 6k ± 1.

Q: Strømmen har I_5 = 20 %, I_7 = 14 %, I_11 = 9 % og I_13 = 7 % af grundtonen. Hvad er THDi? (%, 1 decimal)
N: 26,9 ; 0,2 ; %
L: THDi = √(20² + 14² + 9² + 7²) = √(400 + 196 + 81 + 49) = √726 = 26,9 %.
F: De harmoniske lægges sammen kvadratisk.

Q: I_1 = 10 A og THDi = 50 %. Hvad er I_RMS? (A, 2 decimaler)
N: 11,18 ; 0,02 ; A
L: I_RMS = 10 · √(1 + 0,5²) = 10 · 1,118 = 11,18 A.
F: Harmoniske øger strømmen uden at give nyttig effekt.

Q: En pumpe køres 20 % langsommere med frekvensomformer. Hvor stor bliver effekten i forhold til før? (%, hele tal)
N: 51 ; 1 ; %
L: P ∝ n³: 0,8³ = 0,512 = 51 %.
F: Derfor sparer frekvensomformere meget energi på pumper og blæsere.

Q: Hvad sker der over 50 Hz ved U/f-styring?
A: Momentet stiger
R: Spændingen kan ikke stige mere, så fluxen og momentet falder (feltsvækning)
A: Motoren mætter
A: Slippet bliver negativt
F: Mellemkredsspændingen begrænser udgangsspændingen.

Q: Hvorfor er THDu størst på et skib i ø-drift på én generator?
A: Fordi generatoren laver flere harmoniske end nettet i land
R: Fordi nettets impedans er stor, så de harmoniske strømme giver store spændingsfald
A: Fordi skibe kører 60 Hz
A: Fordi der er flere LED-lamper
F: U_h = I_h · h · X_net. Et svagt net har stor X_net.

Q: Hvad er reluktansmotorens fordel i forhold til asynkronmotoren?
A: Den kan køre direkte på nettet
R: Ingen rotortab og derfor højere virkningsgrad
A: Højere effektfaktor
A: Den har permanente magneter
F: Rotoren har hverken vikling eller magneter og kører synkront uden slip.

Q: Frekvensomformeren optager 1.000 W og afgiver 960 W. Motoren giver 3,8 Nm ved 1.500 o/min. Hvad er den samlede virkningsgrad? (%, hele tal)
N: 60 ; 1 ; %
L: P_2 = 3,8 · 2π · 1.500 / 60 = 597 W. η_samlet = 597 / 1.000 = 0,60 = 60 %. (η_FO = 0,96, η_motor = 0,62.)
F: η_samlet = η_FO · η_motor.
