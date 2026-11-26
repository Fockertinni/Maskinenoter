id: asynkron-eksamen
navn: Alt du skal bruge til eksamen: Asynkronmotor
ikon: motor
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise ved bordet i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Egne noter og rapporter må ikke medbringes, så alt herunder skal sidde i hovedet.

Hvis du kun når én ting: kunne forklare slip, gå effektbalancen igennem fra P_1 til P_2 og tegne momentkurven med start-, kip- og driftspunkt. Så kan du forklare alt fra Lab 3.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | n_1 = 60 · f / p | Synkron hastighed (p = polpar) |
| 2 | s = (n_1 − n_2) / n_1 | Slip, typisk 2–5 % ved fuld last |
| 3 | f_2 = s · f_1 | Rotorfrekvens |
| 4 | P_1 = √3 · U · I · cos φ | Optaget effekt |
| 5 | P_δ = P_1 − P_Cu1 − P_Fe | Luftgabseffekt |
| 6 | P_Cu2 = s · P_δ og P_mek = (1 − s) · P_δ | Rotortab og mekanisk effekt |
| 7 | η = P_2 / P_1 | P_2 er mærkepladens effekt |
| 8 | M = 9,55 · P_2 / n | Nm, W og o/min |
| 9 | Q_C = P · (tan φ_1 − tan φ_2) | Fasekompensering |
| 10 | C_Y = Q_C / (3 · ω · U_f²), C_Δ = C_Y / 3 | Kondensator pr. fase |

> **Fælden**
> Mærkepladens kW er **akseleffekten** P_2, ikke den optagne effekt. η = P_2 / P_1, hvor P_1 regnes ud fra U, I og cos φ.

## 2 · Det du skal kunne forklare

### Drejefelt og slip

**Pointe:** tre viklinger forskudt 120° fodret med 3-faset strøm giver et roterende felt, og rotoren kører lidt langsommere end feltet.

**Hvorfor slip er nødvendigt:** kun når feltet glider forbi rotorstavene, induceres der spænding og strøm i rotoren, og det er strømmen i feltet, der giver moment. Ved synkron hastighed er der intet moment.

**Retning:** byt to faser, så vender drejefeltet og motoren.

### Rotortyper

- **Burrotor:** robust og billig, ingen børster. Langt den mest brugte.
- **Slæberingsrotor:** ydre modstande giver højt startmoment og lav startstrøm.
- **Strømfortrængningsrotor:** dybe stave, hvor strømmen ved start (50 Hz i rotoren) presses ud i staven, så modstanden og startmomentet bliver højt.

### Effektbalancen

**Pointe:** P_1 ind, statortab og jerntab af, luftgabseffekten over til rotoren, og af den går brøkdelen s til rotorkobbertab.

**Hvorfor s · P_δ:** rotormodstanden ses fra statoren som R2'/s = R2' + R2'(1 − s)/s. Første led er tab, andet led er mekanisk effekt.

**Lab 3, tabsmetoder:** tomgangen giver P_0 ≈ P_Fe + P_mek. Forenklet metode bruger det direkte, fuld metode trækker også tomgangens kobbertab og de kendte mekaniske tab (10 W pr. fase) fra.

### Momentkurven

**Pointe:** startmoment 1,3–2 × M_N, kipmoment 2–3 × M_N, og drift på den stejle del tæt ved synkron hastighed.

**Hvorfor M ∝ U²:** fluxen ∝ U og rotorstrømmen ∝ U. 10 % lavere spænding giver ca. 19 % mindre moment.

**Ved start:** motoren skal give mindst ca. 20 % mere moment end lasten under hele starten.

### Startmetoder

| Metode | Startstrøm | Startmoment |
|---|---|---|
| Direkte | 4–8 × I_N | 1,3–2 × M_N |
| Y/Δ | ⅓ | ⅓ |
| Softstarter | Reduceret | Reduceret (∝ U²) |
| Frekvensomformer | ≈ I_N | Op til M_N |

**Hvorfor ⅓ ved Y/Δ:** viklingen får 230 V i stedet for 400 V. Viklingsstrømmen falder √3, og linjestrømmen falder yderligere √3, fordi Y ikke har trekantens √3. Momentet følger U² = 1/3.

### Fasekompensering

**Pointe:** kondensatorer leverer motorens reaktive effekt lokalt, så strømmen i forsyningen falder.

**Tal du kan nævne:** P = 1,2 kW fra cos φ 0,65 til 0,95 kræver Q_C ≈ 1.009 var, altså ca. 20 µF pr. fase i Y eller 6,7 µF i Δ.

### 1-fasede motorer

**Pointe:** én vikling giver kun et pulserende felt og intet startmoment. En hjælpevikling med kondensator giver et drejefelt. Retningen vendes ved at bytte tilledningerne på hoved- eller hjælpeviklingen.

## 3 · Det du skal kunne tegne

1. **Momentkurven** M = f(n) med start-, kip- og driftspunkt og en lastkurve (konstant og kvadratisk).
2. **Effektflowet** fra P_1 til P_2 med alle tab.
3. **Ækvivalentskemaet:** R1, X1, tværgren R_Fe ∥ X_h, R2'/s og X2'.
4. **Fasekompenseringen** som effekttrekant: P vandret, Q_1 og Q_2, Q_C som forskellen.
5. **Y/Δ-starteren** med de tre kontaktorer.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>En 4-polet motor kører 1.440 o/min. Hvad er slip og rotorfrekvens?</summary>

n_1 = 1.500. s = 60 / 1.500 = 4 %. f_2 = 0,04 · 50 = 2 Hz.
</details>

<details markdown="1"><summary>Hvorfor kan motoren ikke nå synkron hastighed?</summary>

Uden slip skærer feltet ikke rotorlederne. Ingen induceret strøm, intet moment. Friktionen bremser den, så den altid ligger lidt under.
</details>

<details markdown="1"><summary>Hvorfor er cos φ dårlig i tomgang?</summary>

Magnetiseringsstrømmen er næsten den samme ved alle laster, men den aktive strøm er lille i tomgang. Den reaktive del dominerer.
</details>

<details markdown="1"><summary>Hvornår må du ikke bruge Y/Δ-start?</summary>

Ved tung start, fordi startmomentet kun er en tredjedel. Og motoren skal være Δ-koblet ved netspændingen (fx 400 V Δ / 690 V Y) og have seks klemmer.
</details>

<details markdown="1"><summary>Hvorfor stiger strømmen i forsyningen ikke, når du sætter kondensatorer på?</summary>

Den falder. Kondensatorerne leverer den reaktive strøm, som motoren ellers trak gennem forsyningen. Motorens egen strøm er uændret.
</details>

<details markdown="1"><summary>Hvordan kan du se på tomgangsmålingen, hvor store jern- og friktionstabene er?</summary>

I tomgang er P_2 = 0 og kobbertabet lille, så den optagne effekt P_0 er næsten jerntab plus friktion og ventilation.
</details>

## 5 · Ved bordet i laboratoriet

ABB 1,5 kW motor belastet af en fremmedmagnetiseret DC-generator på Terco-momentbænken.

1. **Forberedelse:** M_N, η_N og s_N fra mærkepladen, og vælg Y eller Δ til 3 × 400 V. Vis at du kan læse mærkepladen.
2. **Mål viklingsmodstanden** og kalibrér momentet til 0 Nm i tomgang.
3. **Direkte start** og målinger ved tomgang, 1/3, 2/3, 1/1 og 6/5 last: n, U, I, P, Q og cos φ. Beregn P_2, η og s.
4. **Tab** med forenklet og fuld metode.
5. **Fasekompensér** ved ca. ½ M_N til cos φ ≈ 0,95 med et Y-koblet batteri.

## 6 · Faldgruber

- Mærkepladens effekt brugt som optaget effekt.
- Poler i stedet for polpar.
- Slip regnet i forhold til n_2 i stedet for n_1.
- C beregnet med 400 V for et Y-koblet batteri (det skal være 230 V).
- Påstået at Y/Δ halverer startstrømmen. Den bliver en tredjedel.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Statorens tre viklinger giver et drejefelt med n_1 = 60 · f / p. Rotoren kører med slippet s langsommere, og det er slippet, der inducerer rotorstrøm og moment. Af luftgabseffekten går s til rotorkobbertab og 1 − s til mekanisk effekt. Momentkurven har startmoment, kipmoment og et stabilt driftsområde tæt ved synkron hastighed, og momentet følger U². Direkte start giver 4–8 gange I_N, Y/Δ giver en tredjedel strøm og moment. Kondensatorer forbedrer cos φ og sænker strømmen i forsyningen.
</details>
</div>
