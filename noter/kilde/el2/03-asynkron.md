id: asynkron
navn: Asynkronmotor
ikon: motor
intro: Drejefelt og slip, rotortyper, ækvivalentskema og effektbalance, momentkurven, startmetoder, fasekompensering og 1-fasede motorer.
---
# Noter

> **Kilder**
> UV 9–12 · Bog 3 kap. 4.2, 4.4, 4.6.2 og 8.1 · SUV1–2 · UV2 · Lab 3

Asynkronmotoren (induktionsmotoren) kører altid lidt langsommere end statorens drejefelt. **Det er slippet, der inducerer rotorstrøm og dermed moment.** Ved fuld last er slippet typisk 2–5 %, så en 4-polet motor kører ca. 1.420–1.450 o/min.

## Drejefelt og slip

Tre viklinger forskudt 120° og fodret med 3-faset strøm giver et magnetfelt med konstant styrke, der roterer med synkron hastighed. Bytter man to faser, vender drejefeltet, og dermed motoren.

```
n_1 = 60 · f / p        s = (n_1 − n_2) / n_1        n_2 = n_1 · (1 − s)        f_2 = s · f_1
```

- Synkron hastighed ved 50 Hz: 2-polet 3.000, 4-polet 1.500, 6-polet 1.000 o/min.
- s = 1 ved stilstand (start), s ≈ 0 i tomgang, s < 0 er generatordrift.

## Opbygning

- **Kortslutningsrotor (burrotor):** trykstøbte aluminiumsstave kortsluttet med ringe. Robust, billig, ingen børster. Langt den mest brugte.
- **Slæberingsrotor (kontaktringsmotor):** 3-faset rotorvikling ført ud over slæberinge til ydre modstande. Højt startmoment og lav startstrøm.
- **Strømfortrængningsmotor:** dybe eller dobbelte rotorstave. Ved start (høj rotorfrekvens) presses strømmen ud i den yderste del af staven, så rotormodstanden og startmomentet bliver højt.

## Ækvivalentskema og effektbalance

Pr. fase: statorviklingen R1 + jX1 i serie, en tværgren (R_Fe ∥ jX_h) til magnetisering og jerntab, og rotoren henført til statorsiden som R2'/s + jX2'. Det ligner transformeren, men med en lastafhængig rotormodstand:

```
R2'/s = R2' + R2' · (1 − s) / s
```

Det første led er rotorens kobbertab. Det andet repræsenterer den mekaniske effekt.

| Trin | Formel |
|---|---|
| Optaget effekt | P_1 = √3 · U · I · cos φ |
| Luftgabseffekt | P_δ = P_1 − P_Cu1 − P_Fe |
| Rotorkobbertab | P_Cu2 = s · P_δ |
| Mekanisk effekt | P_mek = (1 − s) · P_δ |
| Akseleffekt | P_2 = P_mek − P_frik |
| Virkningsgrad | η = P_2 / P_1 |
| Moment | M = P_2 / ω = 60 · P_2 / (2π · n) ≈ 9,55 · P_2 / n |

**Forenklet metode (Lab 3, aktivitet 3):** tomgangsmålingen giver P_0 ≈ P_Fe + P_mek (kobbertabet i tomgang ses bort fra). Ved fuld last er P_Cu1 = 3 · I² · R_fase (målt viklingsmodstand) og P_Cu2 = s · P_δ.

**Fuld metode (aktivitet 4):** træk også tomgangens statorkobbertab og de kendte mekaniske tab (10 W pr. fase) fra P_0 for at få P_Fe alene.

### Gennemregnet eksempel: mærkepladen

En motor har 1,5 kW, 400 V, 3,3 A, cos φ = 0,80 og 1.440 o/min (eksempeltal, brug din egen mærkeplade i labbet). Find M_N, η_N og s_N, før du åbner.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| P_1 | √3 · 400 · 3,3 · 0,80 | 1.829 W |
| η_N | 1.500 / 1.829 | 0,82 |
| s_N | (1.500 − 1.440) / 1.500 | 4 % |
| M_N | 9,55 · 1.500 / 1.440 | 9,95 Nm |

Mærkepladens effekt er altid akseleffekten P_2.
</details>

## Momentkurven M = f(n)

- **Startmoment** (n = 0): ofte 1,3–2 × M_N.
- **Kipmoment** (maksimum): typisk 2–3 × M_N. Ved større slip end kipslippet er driften ustabil.
- **Driftsområde:** den næsten lineære del tæt ved synkron hastighed.
- **Momentet er proportionalt med U².** 10 % lavere spænding giver ca. 19 % mindre moment.
- Motoren skal under hele starten give mindst ca. 20 % mere moment end lasten (accelerationsmoment).

Lastkarakteristikker: konstant moment (kraner, transportbånd), lineært stigende, kvadratisk stigende (pumper, blæsere) og faldende (oprulning).

<details markdown="1"><summary>Forudsig først: en kran med konstant lastmoment lige under startmomentet. Hvad sker der, hvis spændingen falder 10 %?</summary>

Startmomentet falder til ca. 81 %, så motoren kan ikke længere starte. En pumpe har næsten intet moment ved n = 0, så den starter stadig. Prøv begge i modellen.
</details>

<div class="m" data-m="moment"></div>

## Startmetoder

| Metode | Startstrøm | Startmoment | Brug |
|---|---|---|---|
| Direkte start (DOL) | 4–8 × I_N | 1,3–2 × M_N | Standard, når nettet kan klare det |
| Stjerne-trekant | ⅓ af direkte | ⅓ af direkte | Kun let belastet start. Motoren skal være Δ ved netspænding og have 6 klemmer |
| Softstarter | Reduceret, indstillelig | Reduceret (∝ U²) | Pumper og blæsere, blød start og stop |
| Frekvensomformer | ≈ I_N | Op til M_N eller mere | Hastighedsregulering og start |
| Slæberingsmotor med rotormodstand | Lav | Høj | Tung start |

Y/Δ-start giver to strømstød (ved start og ved omkobling) og for lang starttid ved belastet start. Det giver varme og nedbrudt isolation.

## Fasekompensering

Motoren trækker reaktiv strøm til magnetiseringen, især ved lav last (dårlig cos φ). Kondensatorer leverer Q lokalt, så strømmen i kablerne falder.

```
Q_C = P · (tan φ_1 − tan φ_2)
C_Y = Q_C / (3 · ω · U_f²)        C_Δ = Q_C / (3 · ω · U_L²) = C_Y / 3
```

Kontrol i labbet: C = I_C / (ω · U_f) ud fra den målte kondensatorstrøm.

<div class="m" data-m="kompensering"></div>

> **Husk**
> Kondensatorerne ændrer ikke motorens egen strøm. Det er strømmen i forsyningen før kondensatorerne, der falder.

## 1-fasede motorer

En enkelt vikling giver kun et pulserende felt og intet startmoment. En hjælpevikling forskudt 90° med en kondensator (eller modstand) i serie giver en faseforskudt strøm og dermed et drejefelt.

| Type | Kondensator | Startmoment |
|---|---|---|
| PSC | Driftskondensator altid inde | Lavt |
| CSIR | Startkondensator, kobles ud efter start | Højt |
| CSR | Start- og driftskondensator | Ca. 150 % af M_N, bedst ydeevne |
| Skyggepolsmotor | Ingen (kortslutningsring om en del af polen) | Meget lavt, små ventilatorer |

Omdrejningsretningen vendes ved at bytte tilledningerne på enten hoved- eller hjælpeviklingen. En 3-faset motor kan køre 1-faset med Steinmetz-kobling (kondensator), men med reduceret ydeevne.

## Lab 3 kort

ABB 1,5 kW motor belastet af en fremmedmagnetiseret DC-generator på Terco-momentbænken. Rapporten skrives på engelsk, max 2 sider.

1. Forberedelse: beregn M_N, η_N og s_N fra mærkepladen, og vælg Y eller Δ til 3 × 400 V.
2. Mål statorviklingernes modstand, og kalibrér momentet til 0 Nm i tomgang.
3. Direkte start. Mål n, U, I, P, Q og cos φ ved tomgang, 1/3, 2/3, 1/1 og 6/5 last. Beregn P2, η og s, og tegn kurver som i Bog 3 kap. 4.4.5.
4. Tab med forenklet og fuld metode. Sammenlign med P_tab = P1 − P2.
5. Fasekompensér ved ca. ½ M_N til cos φ ≈ 0,95 med et Y-koblet kondensatorbatteri, og vis det vektorielt.

> **Mere til labøvelse 3**
> [Labnoterne](../../modeller/el2/lab3-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab3.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab3-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor kan en asynkronmotor aldrig nå synkron hastighed af sig selv?
2. Hvad sker der med rotorfrekvensen fra start til fuld last?
3. Hvorfor er P_Cu2 = s · P_δ?
4. Hvorfor duer Y/Δ-start ikke til en tungt belastet start?

<details markdown="1"><summary>Svar</summary>

1. Uden slip skærer feltet ikke rotorlederne, så der induceres ingen strøm og intet moment.
2. Den falder fra 50 Hz (s = 1) til 1–2,5 Hz (s = 2–5 %).
3. Af luftgabseffekten går brøkdelen s tabt som varme i rotoren, resten (1 − s) bliver mekanisk effekt. Det følger af R2'/s = R2' + R2'(1 − s)/s.
4. Startmomentet bliver kun ⅓, så motoren kan ikke accelerere lasten, eller starten tager for lang tid.
</details>
</div>

# Formler

### Hastighed og slip
```
n_1 = 60 · f / p
s   = (n_1 − n_2) / n_1
n_2 = n_1 · (1 − s)
f_2 = s · f_1
```

### Effektbalance
```
P_1    = √3 · U · I · cos φ
P_δ    = P_1 − P_Cu1 − P_Fe
P_Cu1  = 3 · I² · R_fase
P_Cu2  = s · P_δ
P_mek  = (1 − s) · P_δ
P_2    = P_mek − P_frik
η      = P_2 / P_1
```

### Moment
```
M = P_2 / ω = 60 · P_2 / (2π · n) ≈ 9,55 · P_2 / n      (Nm, W, o/min)
M ∝ U²
```

### Fasekompensering
```
Q_C = P · (tan φ_1 − tan φ_2)
C_Y = Q_C / (3 · ω · U_f²)
C_Δ = Q_C / (3 · ω · U_L²) = C_Y / 3
C   = I_C / (ω · U_f)        (kontrol ud fra målt strøm i Y)
```

# Quiz

Q: En 4-polet motor kører 1.440 o/min på 50 Hz. Hvad er slippet? (%)
N: 4 ; 0,05 ; %
L: n_1 = 1.500 o/min. s = (1.500 − 1.440) / 1.500 = 0,04 = 4 %.
F: Slip regnes i forhold til den synkrone hastighed.

Q: Hvad er rotorfrekvensen i samme motor? (Hz)
N: 2 ; 0,05 ; Hz
L: f_2 = s · f_1 = 0,04 · 50 = 2 Hz.
F: Rotorfrekvensen er lav i drift og 50 Hz ved start.

Q: En motor afgiver 1.500 W ved 1.440 o/min. Hvad er momentet? (Nm, 1 decimal)
N: 9,9 ; 0,1 ; Nm
L: M = 9,55 · P_2 / n = 9,55 · 1.500 / 1.440 = 9,95 Nm.
F: 9,55 = 60 / (2π).

Q: Luftgabseffekten er 1.700 W og slippet 4 %. Hvad er rotorkobbertabet? (W)
N: 68 ; 1 ; W
L: P_Cu2 = s · P_δ = 0,04 · 1.700 = 68 W.
F: Jo større slip, jo større rotortab.

Q: Spændingen falder 10 %. Hvad sker der med motorens moment?
A: Det falder 10 %
R: Det falder ca. 19 %
A: Det er uændret
A: Det stiger
F: M ∝ U², og 0,9² = 0,81.

Q: Hvad giver stjerne-trekantstart i forhold til direkte start?
A: Halv startstrøm og fuldt startmoment
R: ⅓ startstrøm og ⅓ startmoment
A: ⅓ startstrøm og fuldt startmoment
A: √3 lavere strøm og uændret moment
F: Viklingen får 1/√3 af spændingen, og strøm og moment i nettet falder begge til en tredjedel.

Q: P = 1,2 kW, cos φ skal hæves fra 0,65 til 0,95. Hvor stor Q_C kræves? (var, hele tal)
N: 1009 ; 10 ; var
L: tan φ₁ = 1,169, tan φ₂ = 0,329. Q_C = 1.200 · (1,169 − 0,329) = 1.009 var.
F: Q_C er forskellen i reaktiv effekt før og efter.

Q: Samme Q_C leveres af et Y-koblet batteri på 3 × 400 V. Hvad er C pr. fase? (µF, 1 decimal)
N: 20,2 ; 0,3 ; µF
L: C_Y = Q_C / (3 · ω · U_f²) = 1.009 / (3 · 314,16 · 230²) = 20,2 µF.
F: I Δ ville det kun kræve en tredjedel, ca. 6,7 µF.

Q: Hvordan vender du omdrejningsretningen på en 1-faset kondensatormotor?
A: Ved at bytte fase og nul i stikket
R: Ved at bytte tilledningerne på enten hoved- eller hjælpeviklingen
A: Ved at fjerne kondensatoren
A: Det kan ikke lade sig gøre
F: Det er faseforskydningen mellem de to viklinger, der bestemmer retningen.
