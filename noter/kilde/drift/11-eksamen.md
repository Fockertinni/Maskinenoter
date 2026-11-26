id: eksamen
navn: Eksamen, Excel og formelsamling
ikon: eksamen
intro: Sådan foregår den skriftlige prøve, de Excel-funktioner du skal kunne, hele formelsamlingen og en oversigt over gamle eksamensopgaver sorteret efter emne.
---
# Noter

Formålet med faget er, at du kan træffe økonomiske beslutninger som maskinmester på ledelsesniveau: driftsoptimering, budgettering, investering og finansiering.

## Eksamen

- 4 timers individuel skriftlig prøve. Hele besvarelsen laves i det **Excel-ark, der følger med opgavesættet**. Derudover afleveres en PDF, der henviser til Excel-arket.
- Du må medbringe lærebøger og egne noter, også regneark med løsninger på opgaver. Du må **ikke** kopiere færdige regneark ind i besvarelsen.
- Søgemaskiner og AI er ikke tilladt. Lokal filsøgning på computeren er tilladt. Skærmen overvåges (Device Monitor).
- Karakter efter 7-trinsskalaen ud fra en helhedsbedømmelse. Eksamensperiode: januar eller juni.
- Opgavesættet angiver forventet tidsforbrug i %. E2025 havde fire opgaver med fordelingen 15 / 35 / 15 / 35 %: monopol/outsourcing, budget, investering og TCO.

## Læringsmål (fra modulbeskrivelsen)

- **Viden:** forklare ejerskabs- og afsætningsforhold med fagets terminologi. Forklare økonomistyring og hvordan teorien bruges i maskinmesterfaget. Placere økonomiske poster korrekt i resultat-, likviditets- og balancebudget.
- **Færdigheder:** analysere budget, driftsoptimering, investering og finansiering. Optimere aktiviteter med DB-analyser, også ved kapacitetsbegrænsning. Beregne rentabilitet, også med ikke-monetære kriterier. Beregne konsekvenser af egen- og fremmedfinansiering. Organisere, beregne og formidle i Excel.
- **Kompetencer:** reflektere over eget læringsbehov.

## Litteratur

- Lærebog og opgavebog: *Erhvervsøkonomi – Videregående uddannelser*, 6. udg., 2025 (Sørensen, Sundvang & Bang).
- Bukh, Flyger & Melander: *Økonomisk virksomhedsbeskrivelse*, kap. 5 (eksternt regnskab).
- Hansen m.fl.: *Økonomisk styring & virksomhedsanalyse*, kap. 4 (inflation).
- Hedegaard: *Strategisk investering og finansiering*, kap. 7 (ESG og forretningsmæssig bæredygtighed).
- FORCE Technology: artikel om Total Cost of Ownership.

## Excel-funktioner

| Formål | Dansk Excel | Engelsk Excel | Bemærk |
|---|---|---|---|
| Nutidsværdi | `=NUTIDSVÆRDI(r; B1:Bn)` | `NPV` | **Uden** år 0. Læg I₀ til bagefter: `=NUTIDSVÆRDI(…)+B0` |
| Intern rente | `=IA(B0:Bn)` | `IRR` | **Med** år 0 |
| Annuitetsydelse og kapitaltjeneste | `=YDELSE(r; n; -nv; fv)` | `PMT` | fv = scrapværdi (med fortegn) |
| Effektiv rente (annuitet) | `=RENTE(n; -ydelse; provenu)` | `RATE` | |
| Nutidsværdi af fast beløb | `=NV(r; n; -ydelse)` | `PV` | |
| Kritisk værdi | Data → What-if → **Målsøgning** | Goal Seek | Sæt KV = 0 ved at ændre en inputcelle |
| Optimum (avanceret) | Data → **Problemløser** | Solver | Maks. DB med kapacitetsbetingelse |

> **Gode vaner til eksamen**
> Lav ét inputområde med forudsætningerne og referér til cellerne. Skriv aldrig tal direkte i formlerne, så kan følsomhedsanalyser laves på sekunder. Angiv enhed (kr., 1.000 kr., stk.) i hver tabel. Skriv en kort konklusion med ord under hver beregning ("Investeringen er lønsom, da KV > 0"). Tegn indhyllingskurver som punktdiagram med lige linjer. Husk sunk costs: udviklings- og reklameomkostninger, der allerede er afholdt, skal **ikke** med.

## Gamle eksamensopgaver efter emne

| Emne | Opgaver (sæt – opg. – navn) |
|---|---|
| **Elasticitet** (kap. 3) | E2018-1 Maskinfabrikken · E2017-1 ALFA–BRAVO · APPLE–ORANGE · AMARTY–GERDONS |
| **Prisoptimering, matematisk** (kap. 6) | F2019-4 NEVADA/VOLA · F2018-2 TRANS/CARRY · F2017-2 BRUMLE · E2017-2 CHARLIE · E2016-1 ARGO · **E2025-1 SEALMAX** |
| **Indhyllingskurver** | F2019-3 SMART · E2019-2 GOVAN · F2018-4 Android · E2018-3 MULTITASK · F2017-1 Aksel · E2017-4 Ekko · E2016-2 ARGO |
| **Kapacitetsstyring** (kap. 7) | F2019-2 Furniture · E2019-5 KOMPLET · F2018-3 Egnima · E2018-2 COPENHAGEN CW · F2017-3 TANGO/DANSEN · E2017-3 DELTA · E2016-3 GAMMA |
| **Budget** (kap. 8) | F2019-1 Samhandel · E2019-1 PRODUKTER · F2018-5 Motor · E2018-4 PACO · F2017-4 Krumtappen · E2017-5 FOXTROT · E2016-5 DONE · **E2025-2 MARITEC** |
| **Investering og TCO** (kap. 9) | F2019-5 SAILOR/GENTO · E2019-3 ENERGA (varmeveksler) · F2018-1 Helse · E2018-5 TACE/TERMA · E2017-6 GOLF · E2016-4 DAMGÅRD · **E2025-3 kedel · E2025-4 TCO bil** |
| **Finansiering** (kap. 10) | F2019-6 SAILOR · E2019-4 SERVICE |

**Rækkefølge (interleaving):** Lav én opgave fra hver række på skift i stedet for alle budgetopgaver i træk. Start med E2025 som prøveeksamen på 4 timer, og tag tid.

**Teorispørgsmål, der går igen**

- Forskellen på fuldkommen og ufuldkommen konkurrence.
- Er virksomheden i den passive eller den aktive budgetfase?
- Fordele og ulemper ved ejerformen (A/S, ApS).
- Hvorfor laver man en følsomhedsberegning?
- Hvilke ikke-økonomiske forhold kan påvirke en investering?
- Hvad bør indgå i fastsættelsen af kalkulationsrenten?
- Er det lønsomt at prisdifferentiere, og hvorfor?
- Formålet med budgetkontrol.

# Formler

Hele formelsamlingen for faget på én side. Forklaringerne står under hvert emne.

### Resultat
```
DB  = Omsætning – VO            DG = DB / Omsætning · 100
MFB = DB – salgsfremmende omk.
IB  = MFB – kontante KO
Resultat før renter = IB – afskrivninger
```

### Omkostninger
```
VE = VO / x      KE = KO / x      DOMK = ΔVO / Δx
Lineær afskrivning = (K – S) / n
Saldoafskrivning   = saldo primo · p,   p = 1 – (S/K)^(1/n)
```

### Elasticitet
```
e_p = (ΔX/X) / (ΔP/P)    e_i = (ΔX/X) / (ΔI/I)    e_k = (ΔX_B/X_B) / (ΔP_A/P_A)
```

### Optimering (p = a – b·x, proportionale VO)
```
DOMS = a – 2b·x        DOMS = DOMK = VE
x* = (a – VE) / (2b)   p* = (a + VE) / 2
Eksport ved knap kapacitet: DOMS_hjemme = p_eksport – transport
```

### Indhyllingskurve
```
TO = KO + VE·x         skæring: x = ΔKO / ΔVE
```

### Kapacitet
```
DIFB = ΔDB             DIFB pr. time = DIFB / Δtimer
```

### Budget
```
Debitor-oms.hast.  = 360 / kredittid     Debitorer ult.  = Omsætning / oms.hast.
Kreditor-oms.hast. = 360 / skyldtid      Kreditorer ult. = Varekøb / oms.hast.
Lager ult. = Vareforbrug / oms.hast.     Varekøb = Vareforbrug + L_ult – L_pri
Kassekredit ult. = Maks – Likviditetsreserve + Likvid beholdning ult.
EK ult. = EK pri + Resultat – Privatforbrug/Udbytte
Afkastningsgrad = RFR / Aktiver          Overskudsgrad = RFR / Omsætning
AOH = Omsætning / Aktiver                EK-forrentning = Resultat / EK
```

### Investering
```
KV = –I₀ + Σ B_t·(1+r)^–t + S·(1+r)^–n
Kapitaltjeneste = I₀ · r/(1–(1+r)^–n) – S · r/((1+r)^n – 1)
i_r = (i_n – q) / (1 + q)
```

### Finansiering
```
Hovedstol = (Provenu + Omk.) / (Kurs/100)
Annuitetsydelse = H · r / (1 – (1+r)^–n)
```

# Quiz

Q: Hvilken Excel-funktion bruger du til intern rente, og skal år 0 med i området?
A: `NUTIDSVÆRDI`, uden år 0
R: `IA`, med år 0
A: `IA`, uden år 0
A: `YDELSE`, med år 0
F: `IA` skal have hele betalingsrækken inkl. investeringen i år 0. Det er `NUTIDSVÆRDI`, der skal have området *uden* år 0.

Q: Du har en betalingsrække i B0:B5 (B0 = −500.000). Hvilken formel giver kapitalværdien ved 10 %?
A: `=NUTIDSVÆRDI(10%; B0:B5)`
A: `=IA(B0:B5)`
R: `=NUTIDSVÆRDI(10%; B1:B5)+B0`
A: `=NV(10%; 5; B1)`
F: `NUTIDSVÆRDI` diskonterer første celle ét år. Tager du B0 med, bliver investeringen også diskonteret, og KV bliver forkert. Den typiske fejl.

Q: Hvordan finder du hurtigst den kritiske værdi for fx årlig besparelse, så KV = 0?
A: Prøv dig frem med forskellige tal
R: Data → What-if-analyse → Målsøgning
A: `=IA()` på besparelsen
A: Problemløser med maks. DB
F: Målsøgning sætter KV-cellen til 0 ved at ændre den inputcelle, du vælger. Det virker kun, hvis formlerne refererer til inputcellerne.

Q: Hvad må du **ikke** til eksamen?
A: Bruge egne regneark med løsninger som opslag
A: Søge lokalt efter filer på din computer
R: Kopiere et færdigt regneark ind i besvarelsen
A: Tage et billede af en håndtegnet kurve med mobilen til PDF'en
F: Egne løsninger må bruges som opslag, men de må ikke kopieres ind. AI og søgemaskiner er heller ikke tilladt.

Q: Hvorfor skal alle forudsætninger stå i ét inputområde i Excel?
A: Fordi censor kræver det
R: Så følsomhedsanalyser og målsøgning kan laves ved at ændre én celle
A: Fordi Excel ellers regner forkert
A: Så arket fylder mindre
F: Står tallene direkte i formlerne, skal du rette mange steder for hver følsomhedsberegning, og målsøgning virker ikke.
