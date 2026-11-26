id: faget
navn: Faget, laboratoriet og rapporter
ikon: sikkerhed
intro: Hvad faget kræver til eksamen, de ni sikkerhedsregler i stærkstrømslaboratoriet, udstyret på bænkene og hvordan målerapporter og rapporter skal skrives.
---
# Noter

> **Kilder**
> Studieplan for M5 Elektroteknik 2 · sikkerhedsinstruktionen i labvejledningerne · Martins samlede noter

M5 Elektroteknik 2 (10 ECTS) afsluttes med en **individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet**. Derfor skal sikkerhedsreglerne og udstyret sidde på rygraden, ikke kun teorien.

## Om faget

**Formål:** viden om elektriske komponenter, materialer, materiel og maskiner, og kompetence til at måle på dem, behandle måledata, rapportere på dansk og engelsk og deltage i drift, vedligehold og fejlfinding af el-anlæg om bord og i land.

| Krav | Indhold |
|---|---|
| Forudsætning for eksamen | Deltaget i alle labøvelser, rapporter, obligatoriske opgaver I–III og lysquiz godkendt eller betinget godkendt |
| Hjælpemidler til eksamen | Lærebøger og UV-materialer fra CN, papir, blyant, passer og lommeregner |
| Må ikke medbringes | Egne noter og rapporter |
| STCW | A-III/1, A-III/2 og A-III/6 (drift, vedligehold og fejlfinding af elektriske anlæg og generatorer) |

### Emner og labøvelser

| UV-gang | Emne | Labøvelse | Rapport | Litteratur |
|---|---|---|---|---|
| 1–4 | 3-faset vekselstrøm | 1: Symmetrisk og usymmetrisk last | Målerapport | FL1 5.5, UV8 5.4, Bog 2 kap. 6.5–6.10 + 7.5 |
| 5–8 | Synkrongeneratoren | 2: AC-generatorundersøgelse | Målerapport | Bog 3 kap. 1, 4.1.1–4.1.6, 4.5 |
| 9–12 | Vekselstrømsmotorer | 3: Asynkronmotoren | Rapport på engelsk | Bog 3 kap. 4.2, 4.4, 4.6.2, 8.1, SUV1–2, UV2 |
| 13–16 | Målebroer, materialer, systemer | 4: Overgangsmodstand til jord | Rapport | UV9 6.2.3, 6.3, 10.4, UV1, UV4, UV7 |
| 17–20 | Transformere I | 5: Tomgangs- og kortslutningsforsøg | Rapport | Bog 3 kap. 2.1–2.5.1, 2.7, UV6B |
| 21–24 | Transformere II | 6: Koblingsciffer og Ik | Målerapport | Bog 3 kap. 2.5–2.6, UV6A, UV6C, UV12 |
| 25–28 | Generator, indkobling og drift | 7: Synkronisering og paralleldrift | Rapport | Bog 3 kap. 4.1.7–4.1.8, Bog 2 kap. 5, UV4, UV7 |
| 29–32 | Frekvensomformer og halvledere | 8: Reluktansmotor med frekvensomformer | Målerapport | SH s. 15–49, 118–157, FL1 kap. 6, UV11, UV2 |
| Selvstudie | Tilstandsbaseret vedligehold, lysteknik | – | Obl. opgave + lysquiz | UV10, UV3 |

### Læringsmål i kort form

- **Viden:** lysteknik, lineære og ulineære forbrugere, strømfortrængning og THDi/THDu, 3-fasede maskiner (asynkron, synkron, transformer), frekvensomformerens opbygning, ækvivalentskemaer, samspillet drivmaskine–generator–magnetisering–synkronisering–beskyttelse, el-anlægs opbygning (systemspændinger, jording, nød- og reserveforsyning).
- **Færdigheder:** regne på DC, 1-, 2- og 3-fasede kredse (symmetrisk og usymmetrisk), tegne vektordiagrammer, bruge komplekse tal, vælge måleinstrumenter og vurdere måleusikkerhed, tegne diagrammer efter IEC 60617, analysere maskiners driftsegenskaber og fejlfinde.

## Sikkerhedsregler i stærkstrømslaboratoriet

Sikkerhedsinstruktionen er den samme i alle otte øvelser.

1. Alt udstyr med jordklemme forbindes til forsyningens PE med grøn-gule sikkerhedsprøveledninger.
2. Jordforbindelsens kontinuitet kontrolleres med **Elma Contilight** (stilling 200 mA): prøvestandens tavle → udstyrets stel → metalbord → hovedtavle.
3. Forsyningen er afsikret med max **10 A diazed** og går gennem en **RCD type B** fra hovedtavlen med nødstop og nødstopsrelæ. Der er nødstop ved hver prøvestand.
4. Alt udstyr kontrolleres visuelt for mekanisk og elektrisk skade inden tilslutning.
5. Underviseren godkender opstillingen, før der tændes.
6. Tilslutning, ændring og nedtagning sker kun i spændingsløs tilstand. Ved variotransformer: skru til 0 V og mål, at spændingen er væk.
7. Under spænding må der kun afprøves og måles.
8. Strømme måles med tangamperemeter, hvor vejledningen siger det.
9. Uisolerede krokodillenæb og prøvespidser bruges aldrig i stærkstrømslaboratoriet.

> **Kend det ubeskyttede**
> Generatorens magnetiseringskreds og statorvikling, DC-generatorerne på momentbænkene og øvelsestransformeren er ikke beskyttet mod overbelastning og kortslutning. Flere kører isoleret (ujordet stjernepunkt) uden isolationsovervågning. Beregn derfor altid max-strømme i forberedelsen.

**Tangens pil skal pege mod forbrugeren.** For en generator er nettet forbrugeren. Vender pilen forkert, får P forkert fortegn.

<details markdown="1"><summary>Forudsig først: hvorfor RCD type B og ikke type A?</summary>

Labbet har frekvensomformere og ensrettere. En fejlstrøm efter en ensretter kan være glat DC, og den kan mætte kernen i en type A, så den ikke udløser. Type B registrerer også glat DC.
</details>

## Laboratorieudstyr

| Udstyr | Data og brug |
|---|---|
| Bordtavle AB-5.11 | 3 × 230/400 V AC + 2 × 220 V DC |
| Terco MV1103 / Noratel variac | 3 × 0–400 V, 8 A |
| Noratel Transformer 08 | 3-faset 400/400 V, Dyn (2 kVA øvelsestransformer) |
| Voltcraft LPS 1305 | DC 0–30 V / 0–5 A (generatormagnetisering) |
| Danotherm ZRF 55/600 | 3-faset modstandslast: 57,5 / 115 / 230 / 460 Ω pr. fase, max 3,5 kW |
| Terco MV1101 Load Reactor | 3-faset spole, trin 0–11, 400 V Y / 230 V Δ |
| Terco MV1102 Load Capacitor | 3-faset kondensatorlast, ca. 2,8–3,3 kvar |
| Langlois C20 / variabel spole | Kondensatordekade 0,5–10 µF; spole 0,15–1,4 H, R = 12 Ω |
| Maskinsæt NR.2 | ABB 1,5 kW asynkronmotor + Terco DC-maskine |
| Terco MV1040 | Digitalt moment- og omdrejningsmeter, styrer DC-maskinens felt |
| Ølgod momentbænk | Drivmotor (2,2 kW) + generator, betjeningspult |
| Emerson Unidrive SP / ABB-drev | Frekvensomformere |
| Metrix PX120 | Effektmåler (10 A / 600 V) |
| Chauvin Arnoux CA8335 | Power quality / THD-meter |
| Elma BM251s / Elma 9400 | Multimeter / tangamperemeter |
| Metrel MI3101 Eurotest | Installationstester, jordmodstand |
| Elma Contilight | Gennemgangstester (200 mA) |

## Rapporter

| Type | Øvelser | Krav |
|---|---|---|
| Målerapport | Lab 1, 2, 6, 8 | 2 sider: én side med tabeller og grafer, én side med svar på spørgsmål og observationer. Ingen abstract eller teoriafsnit |
| Rapport | Lab 3, 4, 5, 7 | Teknikas formkrav. Lab 3 skrives på engelsk. Flere er begrænset til max 2 sider ekskl. forside |

- **Peer review-fokus:** Er abstract bygget rigtigt op? Svarer konklusionen på formålet? Dækker diskussionen alt i konklusionen? Er formkravene overholdt?
- **Forberedelse til hver øvelse:** et Excel-måleskema, der regner resultaterne live i labbet, og de beregnede max-strømme.
- **GAI-regler:** AI må bruges til forståelse og forklaringer, ikke til tekst, diagrammer eller beregninger i obligatoriske afleveringer.

<div class="genkald" markdown="1">
### Test dig selv

1. Nævn de ni sikkerhedsregler uden at kigge.
2. Hvilke dele af udstyret er ikke beskyttet mod kortslutning, og hvad betyder det for din forberedelse?
3. Hvad er forskellen på en målerapport og en rapport?

<details markdown="1"><summary>Svar</summary>

1. PE på alt udstyr · kontinuitet med Contilight · 10 A diazed og RCD type B med nødstop · visuel kontrol · underviser godkender · kun ændringer i spændingsløs tilstand · under spænding kun afprøve og måle · strøm med tang · aldrig uisolerede krokodillenæb.
2. Generatorens magnetisering og stator, DC-generatorerne og øvelsestransformeren. Du skal selv regne max-strømme ud på forhånd, fordi intet værn stopper dig.
3. Målerapporten er 2 sider med tabeller, grafer og svar uden abstract og teori. Rapporten følger Teknikas formkrav med abstract, diskussion og konklusion.
</details>
</div>

# Quiz

Q: Hvilken type RCD sidder foran prøvestandene i stærkstrømslaboratoriet?
A: Type AC
A: Type A
R: Type B
A: Ingen, der er kun sikringer
F: Type B registrerer også glat DC-fejlstrøm, som kan opstå efter frekvensomformere og ensrettere.

Q: Hvad gør du, før du ændrer en opstilling, der forsynes fra en variotransformer?
A: Trykker nødstop og går i gang
R: Skruer til 0 V og måler, at spændingen er væk
A: Fjerner PE-ledningen først
A: Beder underviseren slå RCD'en fra
F: Tilslutning, ændring og nedtagning må kun ske i spændingsløs tilstand, og det skal måles.

Q: Hvordan skal tangamperemeterets pil vende, når du måler på en generator, der leverer til nettet?
A: Mod generatoren
R: Mod nettet
A: Det er ligegyldigt
A: Op ad
F: Pilen skal pege mod forbrugeren, og for en generator er nettet forbrugeren. Så bliver P positiv ved levering.

Q: Hvad må du medbringe til eksamen i Elektroteknik 2?
A: Egne noter og rapporter
R: Lærebøger og UV-materialer fra CN, papir, blyant, passer og lommeregner
A: Kun lommeregner
A: Alt undtagen computer
F: Egne noter og rapporter må ikke medbringes.

Q: Hvorfor skal du beregne max-strømme i forberedelsen til en øvelse?
A: Fordi det giver point i rapporten
R: Fordi flere dele af udstyret ikke er beskyttet mod overbelastning og kortslutning
A: Fordi RCD'en ellers udløser
A: Fordi tangamperemeteret ikke kan måle over 1 A
F: Generatorens magnetisering, DC-generatorerne og øvelsestransformeren har ingen værn, der stopper dig.

Q: Hvilken labøvelse skal rapporteres på engelsk?
A: Lab 1
A: Lab 2
R: Lab 3
A: Lab 7
F: Lab 3 (asynkronmotoren) skrives på engelsk, max 2 sider.
