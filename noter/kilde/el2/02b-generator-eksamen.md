id: generator-eksamen
navn: Alt du skal bruge til eksamen: Synkrongenerator
ikon: generator
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise ved bordet i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Egne noter og rapporter må ikke medbringes, så alt herunder skal sidde i hovedet.

Hvis du kun når én ting: kunne tegne vektordiagrammet E = U + jX_s·I for induktiv og kapacitiv last og forklare, hvorfor klemspændingen falder ved induktiv last og stiger ved kapacitiv. Det forklarer belastningskarakteristikken og AVR'ens arbejde.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | f = p · n / 60 | Frekvens ud fra omdrejninger (p = polpar) |
| 2 | n_s = 60 · f / p | 4-polet: 1.500 o/min ved 50 Hz |
| 3 | E = 4,44 · f · N · Φ · k_w | EMK ∝ frekvens og flux |
| 4 | E = U + jX_s · I | Ækvivalentskema pr. fase |
| 5 | X_s = X_σ + X_a | Spredning + ankerreaktion |
| 6 | S_N = √3 · U_N · I_N | Generatoren dimensioneres efter S |
| 7 | P_2 = √3 · U_N · I_N · cos φ | Drivmaskinen dimensioneres efter P |
| 8 | P = 3 · E · U_f · sin δ / X_s | Effekt og lastvinkel |

> **Fælden**
> p er antal **polpar**, ikke poler. En 4-polet generator har p = 2.

## 2 · Det du skal kunne forklare

### Frekvens og spænding

**Pointe:** frekvensen bestemmes af omdrejningstallet, spændingen af magnetiseringen (og omdrejningstallet).

**Hvorfor:** hver gang en nord- og en sydpol passerer en vikling, går spændingen en periode. EMK'en er proportional med hvor hurtigt fluxen ændrer sig, altså med f · Φ.

### Opbygning og magnetisering

**Pointe:** stator med 3-faset vikling, rotor (polhjul) med DC-felt, og om bord børsteløs magnetisering.

**Hvorfor børsteløs:** en lille AC-magnetiseringsgenerator på samme aksel og roterende dioder giver rotorens DC uden slæberinge og kul. Mindre vedligehold. AVR'en styrer magnetiseringsgeneratorens statorfelt.

**Ekstra point:** fuldpolsrotor til hurtige turbogeneratorer, udprægede poler til dieselgeneratorer. Dæmperviklingen dæmper pendlinger.

### Ankerreaktion

**Pointe:** statorstrømmens eget felt påvirker hovedfeltet, og virkningen afhænger af lastens art.

| Last | Ankerfelt | Klemspænding ved fast I_m |
|---|---|---|
| Resistiv | Tværfelt, svækker lidt | Falder svagt |
| Induktiv | Modsat hovedfeltet | Falder meget |
| Kapacitiv | Understøtter hovedfeltet | Stiger |

**Tal du kan nævne:** ved I = 1 pu, X_s = 1 pu og cos φ = 0,8 induktiv skal E være ca. 1,8 pu for at holde U = 1 pu. Magnetiseringen skal næsten fordobles.

### De tre karakteristikker

- **Magnetiseringskarakteristik:** E = f(I_m) i tomgang. Starter i remanensen, lineær, knækker ved mætning. Hysterese giver forskellige kurver op og ned.
- **Belastningskarakteristik:** U = f(I) ved fast I_m. Svagt faldende (R), stærkt faldende (L), stigende (C).
- **Reguleringskarakteristik:** den I_m der holder U konstant. Det er AVR'ens opgave.

### Remanens

**Pointe:** restmagnetismen giver en lille spænding uden magnetisering, og den er nødvendig for at en selvmagnetiseret generator kan bygge spænding op.

**Hvorfor ændrer den sig i Lab 2?** Den afhænger af, hvor på hysteresekurven man slap. Efter høj magnetisering er den typisk højere. Mistet remanens løses ved at "flashe" feltet med DC.

### THDu

**Pointe:** generatorens spænding er ikke en ren sinus, heller ikke i tomgang.

**Hvorfor:** noterne, viklingsfordelingen og polskoenes form giver overharmoniske.

### Asynkrongeneratoren

**Pointe:** en asynkronmaskine over synkron hastighed (negativt slip) leverer P, men skal have Q udefra til sit magnetfelt. Bruges i vindmøller.

## 3 · Det du skal kunne tegne

1. **Vektordiagram ved induktiv last:** U vandret, I bagud med φ, jX_s·I vinkelret på I, E som summen, δ mellem U og E.
2. **Samme ved kapacitiv last**, hvor E kan blive mindre end U.
3. **Magnetiseringskarakteristikken** med remanens, lineært område, mætning og hysterese.
4. **Belastningskarakteristikken** med de tre kurver for R, L og C.
5. **Ækvivalentskemaet** pr. fase: E, R og X_s i serie med klemmerne.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvilket omdrejningstal skal en 6-polet generator køre for at give 60 Hz?</summary>

p = 3. n = 60 · 60 / 3 = 1.200 o/min.
</details>

<details markdown="1"><summary>Hvorfor falder spændingen mest ved induktiv last?</summary>

Ankerstrømmen ligger 90° efter, og dens felt står næsten modsat hovedfeltet. Det svækker fluxen kraftigt, så E og dermed U falder. I vektordiagrammet peger jX_s·I næsten i U's retning, så der skal en stor E til.
</details>

<details markdown="1"><summary>Hvad gør AVR'en, og hvor ser du det i dine målinger?</summary>

Den måler klemspændingen og regulerer magnetiseringen, så U holdes konstant. Det er reguleringskarakteristikken: den nødvendige I_m stiger med lasten, mest ved induktiv last.
</details>

<details markdown="1"><summary>Hvorfor måler I den remanente spænding både før og efter forsøget?</summary>

For at se hysteresen. Efter en høj magnetisering er der typisk mere restmagnetisme. Ændringen viser, at jernets tilstand afhænger af historikken.
</details>

<details markdown="1"><summary>Hvorfor dimensioneres generatoren efter S og drivmaskinen efter P?</summary>

Generatorens opvarmning afhænger af strømmen, og strømmen følger S. Drivmaskinen leverer kun den aktive effekt, den reaktive koster ikke brændstof (ud over tabene).
</details>

<details markdown="1"><summary>Hvorfor må magnetiseringsstrømmen ikke overstige mærkepladens I_ex?</summary>

Feltviklingen opvarmes, og magnetiseringskredsen er ikke beskyttet i labbet. Desuden giver jernets mætning ingen nævneværdig ekstra spænding.
</details>

## 5 · Ved bordet i laboratoriet

Ølgod-momentbænk, 2,2 kW drivmotor (max 2 kW last), 4-polet generator, 400 V ved 1.500 o/min og ca. 0,4 A magnetisering. Stjernepunktet er ikke jordet, og magnetisering og stator er ubeskyttede.

1. **Start drivmotoren** i rpm-mode og kør op til 1.500 o/min.
2. **Mål remanensen**, før magnetiseringen tilsluttes.
3. **Magnetiseringskarakteristik:** I_m op fra 0 A og aldrig ned igen undervejs (hysterese), aldrig over I_ex.
4. **Belastningskarakteristik** ved 400 V og 1.500 o/min for R-, L- og C-last.
5. **THDu i tomgang** og remanens igen efter afrigning.

Sig undervejs, hvad du forventer, før du måler. Det er det, censor gerne vil høre.

## 6 · Faldgruber

- Poler i stedet for polpar i f = p · n / 60.
- Skruet op og ned i I_m under magnetiseringskarakteristikken, så hysteresen blander kurverne.
- Glemt at holde omdrejningstallet konstant, når E skal sammenlignes.
- Forklaret det kapacitive spændingsløft som en målefejl.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Synkrongeneratoren har et DC-magnetiseret polhjul, der drejer i en 3-faset stator. Frekvensen er p · n / 60, og spændingen følger magnetiseringen. Pr. fase er E = U + jX_s · I. Statorstrømmens felt, ankerreaktionen, svækker hovedfeltet kraftigt ved induktiv last og styrker det ved kapacitiv last, så klemspændingen falder eller stiger. AVR'en regulerer magnetiseringen, så spændingen holdes. Magnetiseringskarakteristikken starter i remanensen og knækker ved mætning. Generatoren dimensioneres efter S, drivmaskinen efter P.
</details>
</div>
