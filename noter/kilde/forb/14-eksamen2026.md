---
id: eksamen2026
navn: Eksamen 2026
ikon: eksamen
intro: Alle 30 prøvespørgsmål til den mundtlige eksamen med underspørgsmål. Læs spørgsmålet, svar selv højt, og tryk så for at se svaret.
---

# Kort

## 1 · Motorprincipper
sider: 3, 4

### 1.1 Beskriv forbrændingsmotorers arbejdsprincipper (Diesel/Otto, To-takt/firtakt)

| | Otto | Diesel |
|---|---|---|
| Indsuget og komprimeret | Blanding af luft og brændstof | Kun luft |
| Tænding | Ekstern (tændrør) | Selvantændelse i den varme luft |
| Kompressionsforhold, typisk | 8–12 | 12–22 |
| Idealiseret varmetilførsel | Ved konstant volumen | Ved konstant tryk (i praksis begge: Seiliger) |
| Ydelsesregulering | Blandingsmængde (spjæld) | Brændstofmængde |

**Firetakt:** Indsugning, kompression, arbejde og udstødning. Én arbejdsproces tager to omdrejninger. Ventiler styrer gasskiftet (Figur 1).

**Totakt:** Én arbejdsproces pr. omdrejning. Gasskiftet sker omkring nederste dødpunkt (ND) gennem skylleporte i foringen og udstødsventil i toppen, altså længdeskylning (Figur 2). Det kræver skylleluft med overtryk.

### 1.2 Beskriv sekvenserne (kompression, tænding, forbrænding og udstødning) for Diesel/Otto, To-takt/firtakt motoren

**Firetakt:**

1. Indsugning (OD→ND): indsugningsventilen er åben. Diesel suger luft, Otto suger blanding.
2. Kompression (ND→OD): ventilerne er lukkede, og tryk og temperatur stiger. Lige før øverste dødpunkt (OD) tænder gnisten (Otto), eller brændstoffet indsprøjtes (Diesel).
3. Arbejde (OD→ND): forbrænding omkring OD og derefter ekspansion, som driver stemplet ned.
4. Udstødning (ND→OD): udstødsventilen åbner før ND, og stemplet skubber røggassen ud. Ventiloverlap ved OD skyller kompressionsrummet.

**Totakt:**

1. Opadgående slag: skylleportene dækkes, udstødsventilen lukker, og luften komprimeres. Tænding eller indsprøjtning sker lige før OD.
2. Nedadgående slag: forbrænding og ekspansion. Udstødsventilen åbner før ND (blowdown), derefter frilægges skylleportene, og frisk luft skyller røggassen ud.

I en totakts Ottomotor tilføres gassen efter skylningen eller sammen med luften.

### 1.3 Beskriv temperaturstigning og trykstigning igennem takterne og vurder betydningen for motorens effektivitet

Vejledende værdier for en turboladet dieselmotor:

| Tilstand | Tryk | Temperatur |
|---|---|---|
| Start kompression | 2–5 bar | 40–80 °C |
| Slut kompression | 100–180 bar | 500–700 °C |
| Forbrænding (maks.) | 150–230 bar | 1500–2000 °C |
| Udstødsventil åbner | 8–15 bar | 700–900 °C |
| Efter udstødsventil | ca. ladetryk | 300–450 °C |

```
p₂ = p₁ · ε^κ        T₂ = T₁ · ε^(κ−1)        η_Otto = 1 − 1 / ε^(κ−1)
```

Højt kompressionsforhold og høj forbrændingstemperatur giver stor temperaturforskel og dermed høj termisk virkningsgrad. Grænserne er materialestyrke, termisk belastning, NOx-dannelse og for Otto bankning.

### 1.4 Beskriv energiomdannelse fra kemisk energi i brændstoffet til et mekanisk arbejde i form af rotationsbevægelse på krumtapakslen

1. Kemisk energi i brændstoffet frigøres som varme ved forbrændingen: Q = ṁ · hn.
2. Varmen øger gassens tryk og temperatur.
3. Trykket giver en kraft på stemplet: F = p · A.
4. Kraften udfører arbejde under ekspansionen: W = ∫p dV (indiceret arbejde).
5. Plejlstang og krumtap omsætter den frem- og tilbagegående bevægelse til rotation: M = Ft · r.
6. Effekten på akslen er P = M · 2π · n.

Undervejs tabes energi til udstødsgas, kølevand, smøreolie og stråling (termiske tab) samt friktion og drevne hjælpemaskiner (mekaniske tab).

### 1.5 En motors slagvolumen er 1 m³ og dens kompressionsforhold (epsilon) er 11. Beregn motorens kompressionsvolumen og cylindervolumen

```
ε = (Vs + Vc) / Vc   ⇒   Vc = Vs / (ε − 1) = 1 / (11 − 1) = 0,1 m³

Vcyl = Vs + Vc = 1 + 0,1 = 1,1 m³
```

## 2 · Flydende brændstof
sider: 5, 6

### 2.1 Forklar begrebet nedre brændværdi og beskriv hvordan det kan anvendes i forbrændingsmotorer

Nedre brændværdi (hn, hi) er den varme, 1 kg brændstof afgiver ved fuldstændig forbrænding, når røggassens vand forbliver damp. Den bruges, fordi vandet normalt ikke kondenserer i en motor.

Den indgår i tilført effekt, virkningsgrad og specifikt brændstofforbrug, og når forbrug sammenlignes mellem olier (korrektion til ISO-reference 42.700 kJ/kg).

```
P_tilført = ṁ_bf · hn          ηe = Pe / (ṁ_bf · hn) = 3600 / (be · hn)
```

I den sidste formel er be i kg/kWh og hn i kJ/kg. Bruges MJ/kg, skrives 3,6 i stedet for 3600.

### 2.2 Forklar formlen hi = hn = 1200·H + 337·C − 126·O + 93·S − 25·F

Formlen beregner nedre brændværdi i kJ/kg ud fra elementaranalysen. Bogstaverne er masseprocent.

- **H (brint)** og **C (kulstof)** giver det største bidrag. Brint giver ca. 3,5 gange mere pr. kg end kulstof.
- **S (svovl)** giver et lille positivt bidrag.
- **O (ilt)** trækker fra, fordi brændstoffet allerede er delvist iltet.
- **F (fugt)** trækker fra, fordi vandet skal fordampes og ikke brænder.

```
Eksempel: 85 % C, 12 % H, 2 % S og 1 % fugt
hn = 1200·12 + 337·85 + 93·2 − 25·1
   = 14.400 + 28.645 + 186 − 25 = 43.206 kJ/kg
```

### 2.3 Forklar hvad indholdet af vanadium hhv. cat-fines har af betydning for motorens drift, og herunder hvordan disse søges fjernet

**Vanadium** er kemisk bundet i olien. Ved forbrænding dannes vanadiumoxider, som sammen med natrium giver askeforbindelser med lavt smeltepunkt (fra ca. 500–600 °C). De klæber på udstødsventiler og turbine og giver højtemperaturkorrosion og belægninger. Vanadium kan ikke centrifugeres fra. Man begrænser skaden ved at vaske natrium (saltvand) ud i separatoren, holde ventiltemperaturen lav, bruge roterende ventiler og eventuelt magnesiumadditiv.

**Cat-fines** er hårde partikler af aluminium- og siliciumoxid fra katalytisk krakning. De giver slid på brændstofpumper, dyser, stempelringe og foringer. De fjernes ved bundfældning og dræning i settlingtank, centrifugering ved ca. 98 °C med lav gennemstrømning og finfiltrering. Specifikationen tillader her 80 mg/kg Al+Si. Før motoren bør der typisk højst være ca. 15 mg/kg.

### 2.4 En brændolie har ved 38 grader Celcius en densitet på 991,0 kg/m³. Beregn om denne olie vil leve op til kravene til RMG380 iht. specifikationen

Kravet er højst 991,0 kg/m³ ved 15 °C. Olien er målt ved 38 °C, så den skal regnes om til 15 °C. Den er tungere ved 15 °C.

```
ρ15 = ρ38 + 0,65 · (38 − 15) = 991,0 + 15,0 = 1006 kg/m³
```

**Nej.** 1006 > 991 kg/m³, så olien opfylder ikke RMG380. Den ligger inden for densitetskravet til RMK (1010).

> **Usikker** Korrektionen 0,65 kg/m³ pr. °C er en antaget standardværdi. Brug den værdi eller tabel, I har fået i undervisningen, hvis den er en anden.

### 2.5 Olien har en viskositet på 310 cSt ved 50 °C. Undersøg i vedstående diagram den laveste temperatur olien kan pumpes ved

Gå ind i diagrammet ved 50 °C mellem linjerne 180 og 380 cSt (tæt på 380). Følg en parallel linje op til pumpegrænsen ved ca. 1000 cSt, og aflæs temperaturen: **ca. 32–33 °C**.

I praksis holdes tanken lidt varmere, typisk omkring 40 °C, og mindst ca. 10 °C over flydepunktet.

> **Usikker** Aflæst på diagrammet, så tag et par grader med i begge retninger.

### 2.6 Forklar begrebet cetantal, og angiv hvad det har betydning for i motorens forbrænding

Cetantallet angiver brændstoffets tændvillighed målt mod referencebrændstoffer (cetan = 100).

- **Højt cetantal** giver kort tændingsforsinkelse, jævn trykstigning, rolig gang, bedre koldstart og mindre bankning.
- **Lavt cetantal** giver, at meget brændstof samles før antændelsen, med hård trykstigning og større mekanisk og termisk belastning.

For tunge olier vurderes tændkvaliteten med CCAI. Højere CCAI betyder dårligere tænding.

## 3 · Gasformige brændstoffer
sider: 7

### 3.1 Beskriv ud fra Figur 1 princippet for hhv. Otto, Dual fuel og Gas-diesel

**A – Otto (gnisttændt gasmotor):** Gas tilsættes luften ved indsugningen ved lavt tryk. Den magre blanding komprimeres og tændes af tændrør, ofte i et forkammer.

**B – Dual fuel:** Gas blandes med luften i indsugningen ved lavt tryk og komprimeres. En lille mængde pilotolie indsprøjtes nær OD, selvantænder og tænder gasblandingen. Motoren kan også køre på olie alene.

**C – Gas-diesel:** Kun luft komprimeres. Nær OD indsprøjtes pilotolie og gas under højt tryk (ca. 300 bar) direkte i cylinderen. Forbrændingen sker som i en dieselmotor med meget lille metanslip, men med højere NOx end Otto-princippet.

### 3.2 Beskriv fordele og ulemper ved at nogle gasmotorer kræver pilot-olie for at fungere

| Fordele | Ulemper |
|---|---|
| Kraftig og sikker tændkilde, stabil forbrænding af mager blanding | Ekstra brændstofsystem, pumper og dyser |
| Ingen tændrør | CO₂, partikler og evt. SOx fra olien |
| Brændstoffleksibilitet og backup på olie | To brændstoffer skal bunkres og opbevares |
| Velegnet til store cylindre | Risiko for tilstopning og koksning af pilotdyser |

### 3.3 Sammenlign anvendelsen af hhv. naturgas (CH₄) og ammoniak (NH₃) i relation til opbevaring, energitæthed (kJ/kg), arbejdsmiljø og -sikkerhed og skadelig udstødsgas

| | Metan / LNG | Ammoniak |
|---|---|---|
| Opbevaring | Flydende ved ca. −162 °C i isolerede tanke, boil-off skal håndteres | Flydende ved ca. −33 °C (1 bar) eller ca. 9 bar ved 20 °C; angriber kobber og zink |
| Energi pr. kg | ca. 50.000 kJ/kg | ca. 18.600 kJ/kg |
| Sikkerhed | Brand og eksplosion (5–15 vol.%), kvælning, kuldeskader | Giftig og ætsende selv i små koncentrationer; brændbar ca. 15–28 vol.%; kraftig lugt |
| Skadelig udstødsgas | CO₂ (lavere end olie), NOx, metanslip; næsten ingen SOx og partikler | Ingen CO₂ eller sod fra selve ammoniakken; NOx, N₂O og ammoniakslip; pilotolie giver lidt CO₂ |

### 3.4 Beskriv ved beregning hvor stort rumfanget af flydende metan skal være, hvis det skal have samme energimængde som en kubikmeter HFO

Tabel: flydende metan 425 kg/m³ og 50.000, ammoniak 700 kg/m³ og 12.000, HFO 980 kg/m³ og 42.000.

```
E_HFO = 1 m³ · 980 kg/m³ · 42 MJ/kg = 41.160 MJ

V_CH4 = 41.160 / (425 · 50) = 1,94 m³
```

Der skal altså ca. **1,94 m³** flydende metan til, uden isolering og tankgeometri.

> **Usikker** Tabellens enheder hænger ikke sammen. Den skriver MJ/m³, men 50.000 (metan) er en værdi i kJ/kg, mens ammoniaks 12.000 snarere passer til MJ/m³ (pr. kg ca. 18.600 kJ/kg). Her er 50.000 og 42.000 regnet som kJ/kg. Regnes tabellens enhed bogstaveligt, fås 42.000/50.000 = 0,84 m³, hvilket er fysisk urealistisk. Spørg eventuelt underviseren.

### 3.5 Beskriv forskellen på et brændstofs øvre og nedre brændværdi og hvorfor den øvre brændværdi kan være interessant for brændstoffer uden svovl

Øvre brændværdi medregner kondensationsvarmen fra vanddampen i røggassen. Nedre gør ikke.

```
hø = hn + r · (9H + F)        r ≈ 2500 kJ/kg      (H og F som massedele)
```

Uden svovl dannes ingen svovlsyre. Røggassen kan derfor køles under vandets dugpunkt uden alvorlig syrekorrosion, så kondensationsvarmen kan udnyttes i en kondenserende veksler. Metan har ca. 25 % brint, så gevinsten er omkring 11 %.

## 4 · Smøreolie
sider: 8, 9

### 4.1 Beskriv smøreprincipper for en totakts- og firetakts dieselmotor

Smøringen går gennem tre faser: **grænsesmøring** (metalkontakt, fx ved start og i dødpunkterne), **blandet/partiel smøring** og **hydrodynamisk smøring** (en oliekile adskiller fladerne helt). Friktionskoefficienten følger Stribeck-kurven med viskositet × hastighed / belastning. I lejet ligger akslen i bunden ved stilstand, løftes ved start og bæres af oliefilmen i drift.

**Totakt (krydshoved):** To adskilte systemer. Systemolie smører lejer og krydshoved og køler stemplet. Cylinderolie doseres gennem smørestudser i foringen og forbruges (total loss). Pakdåsen adskiller dem. Krydshovedlejet vipper kun og får derfor højt olietryk.

**Firetakt (trunk):** Ét fælles system. Tryksmøring af lejer, sprøjte- eller tryksmøring af cylinderen og olieskrabering til at fjerne overskud. Store motorer kan have ekstra cylindersmøring.

### 4.2 Beskriv hvilke funktioner smøreolien har i en totakts dieselmotor

- Mindske friktion og slid
- Køle stempelkrone og lejer
- Tætne mellem stempelringe og foring
- Neutralisere svovlsyre (cylinderolie med base number)
- Rense og holde forbrændingsrester svævende
- Beskytte mod korrosion og dæmpe stød
- Virke som hydraulikolie (ME-motorer: indsprøjtning og udstødsventil)

### 4.3 Beskriv krav til olier, filtrering og centrifugering og tilsætning af additiver

**Olier:** Korrekt viskositet (systemolie typisk SAE 30, cylinderolie SAE 50), termisk og oxidationsstabilitet, vandudskillende evne og BN tilpasset brændstoffets svovl. Systemolie har lavt BN (ca. 5–10), cylinderolie typisk 15–140.

**Filtrering:** Fuldstrømsfilter, ofte automatisk returskyllende (typisk 25–50 µm), og magnetfilter.

**Centrifugering:** Kontinuerligt i delstrøm ved ca. 85–95 °C og lav gennemstrømning, så hele oliemængden passerer flere gange i døgnet. Fjerner vand og partikler.

**Additiver:** Detergenter, dispergenter, alkaliske additiver (BN), antioxidanter, antislid, antiskum, korrosionsinhibitorer, VI-forbedrere og flydepunktsnedsættere.

### 4.4 Beskriv hvilke fysiske parametre, der er med til at definere begrebet viskositet og påvirke viskositetens størrelse

Viskositet er væskens modstand mod forskydning.

```
τ = F / A = η · dv/dy          ν = η / ρ
```

η er dynamisk viskositet (Pa·s), ν kinematisk viskositet (m²/s, 1 cSt = 1 mm²/s).

- **Temperaturen** påvirker mest: højere temperatur giver lavere viskositet. Viskositetsindekset angiver hvor meget.
- **Tryk** øger viskositeten.
- **Brændstof** i olien sænker den. **Sod, oxidation og vandemulsion** øger den.
- Olier med polymerer afhænger også af forskydningshastigheden.

### 4.5 I et leje udvikles 30 kW ved friktion. Olien tilgår med 45 °C, varmefylde 2 kJ/(kg·°C), massefylde 890 kg/m³, og der strømmer 10 tons olie pr. time. Beregn oliens temperatur ved afgang

```
ṁ = 10.000 / 3600 = 2,78 kg/s

Δt = Φ / (ṁ · c) = 30 / (2,78 · 2) = 5,4 °C

t_afgang = 45 + 5,4 = 50,4 °C
```

Massefylden skal ikke bruges, fordi flowet er opgivet i masse.

## 5 · Luftforbrug
sider: 10, 11

### 5.1 Beskriv metoden til beregning af luftforbrug ved afbrænding af brændstof (Lmin)

Man opstiller reaktionsligningerne for de brændbare stoffer:

| Reaktion | Ilt pr. kg stof |
|---|---|
| C + O₂ → CO₂ | 32/12 = 2,67 kg |
| 2H₂ + O₂ → 2H₂O | 32/4 = 8 kg |
| S + O₂ → SO₂ | 32/32 = 1 kg |

Ilt i brændstoffet trækkes fra, og luften har 23,2 masseprocent ilt (c, h, s, o er massedele):

```
O_min = 2,67c + 8h + s − o          L_min = O_min / 0,232   [kg luft/kg brændstof]
```

For dieselolie er Lmin ca. 14 kg/kg. Figuren viser forskellen: Otto har en homogen blanding, Diesel har brændstoffet koncentreret ved dysen i et overskud af luft.

### 5.2 Redegør for metoder til omregning af luftmasse til volumen

```
V = m · R · T / p,   R_luft = 287 J/(kg·K)        eller        V = m / ρ
```

Ved normaltilstand (0 °C, 1,013 bar) er ρ = 1,293 kg/m³. Alternativt bruges molvolumen 22,4 m³/kmol og M = 29 kg/kmol. T skal være i kelvin og p absolut.

### 5.3 Redegør for begrebet luftoverskud, dets betydning og metoder til måling og efterfølgende beregning af luftoverskud

```
λ = L_virkelig / L_min = ṁ_luft / (ṁ_bf · L_min)          λ ≈ 21 / (21 − O₂ [%])
```

Diesel kræver λ > 1 (typisk ca. 1,8–2,5 i cylinderen, højere i udstødningen på totaktsmotorer pga. skylleluft), fordi blandingen sker sent. For lidt luft giver sod, CO og høje temperaturer. For meget giver større røggastab.

**Måling:** O₂ (eller CO₂: λ ≈ CO₂max / CO₂) i tør røggas, eller måling af luft- og brændstofflow.

### 5.4 Det støkiometriske luftforbrug er 14 kg luft/kg brændstof. Efter forbrændingen er 28 kg luft i overskud i udstødningsgassen. Beregn luftoverskudskoefficienten og mængden af udstødningsgas pr. kg brændstof

```
λ = (14 + 28) / 14 = 3

m_røg = 1 + 42 = 43 kg pr. kg brændstof
```

Der ses bort fra aske.

## 6 · Firetakts dieselmotoren
sider: 12, 13

### 6.1 Navngiv de mest gængse hovedkomponenter i 4-takts dieselmotoren, samt angiv deres hovedfunktion

| Komponent | Hovedfunktion |
|---|---|
| Bundramme og bundkar | Bærer krumtapakslen og samler smøreolien |
| Motorstativ/blok | Bærer cylindrene og optager kræfterne |
| Krumtapaksel og hovedlejer | Omdanner plejlkraften til drejningsmoment |
| Plejlstang og lejer | Forbinder stempel og krumtap |
| Stempel med stempelbolt og ringe | Overfører gaskraften og tætner |
| Cylinderforing | Glideflade og forbrændingsrummets væg; køles med vand |
| Topstykke | Lukker cylinderen; bærer ventiler, brændstofventil og starteluftventil |
| Indsugnings- og udstødsventiler | Styrer gasskiftet |
| Kamaksel, stødstænger og vippearme | Styrer ventiler og brændstofpumper |
| Brændstofpumpe og brændstofventil | Doserer, sætter tryk på og forstøver brændstoffet |
| Turbolader og ladeluftkøler | Øger luftmængden til cylinderen |
| Udstøds- og ladeluftreceiver | Fordeler gas og luft |

### 6.2 Beskriv stempelringenes funktion i en 4-takts dieselmotor

**Kompressionsringe** (1 i figuren): tætner mod gastrykket, leder varme fra stemplet til foringen og støtter oliefilmen.

**Olieskraberinge** (2): skraber overskydende olie af foringen og tilbage til bundkarret, så olieforbrug og koksdannelse begrænses.

### 6.3 Beskriv de forhold der adskiller trunk- og krydshovedmotor

| Forhold | Trunkmotor | Krydshovedmotor |
|---|---|---|
| Forbindelse | Plejlstang direkte til stemplet | Stempel – stempelstang – krydshoved – plejlstang |
| Sidekræfter | Optages af stempelskørtet mod foringen | Optages af glidesko og styreflader |
| Smøring | Fælles smøreolie | Adskilt system- og cylinderolie (pakdåse) |
| Typisk | Firetakt, middel/høj hastighed | Totakt, lav hastighed, lang slaglængde |
| Størrelse | Lav og kompakt | Høj og tung, høj virkningsgrad, tåler dårlig olie |

### 6.4 En 6-cylindret 4-takt trunkdieselmotor har slaglængde 0,6 m, boring 0,2 m og stempelmiddelhastighed 7 m/s. Beskriv hvordan du kan beregne kamakslens omdrejningshastighed

Stemplet bevæger sig to slaglængder pr. omdrejning. På en firetaktsmotor kører kamakslen med halv hastighed. Boring og cylinderantal skal ikke bruges.

```
cm = 2 · s · n   ⇒   n = 7 / (2 · 0,6) = 5,83 s⁻¹ = 350 o/min

n_kam = n / 2 = 175 o/min
```

## 7 · To-takts dieselmotoren
sider: 14

### 7.1 Beskriv ud fra figuren navn og formål med komponenterne 3, 5 og 11 på to-takts dieselmotoren

| Nr. | Navn | Formål |
|---|---|---|
| 3 | Pakdåse (stempelstangens stopbøsning) | Tætner om stempelstangen, så skylleluft og forbrændingsrester holdes ude af krumtaphuset, og systemolie holdes ude af skyllerummet |
| 5 | Krydshovedets glidesko | Overfører sidekræfterne fra krydshovedet til styrefladerne, så stempelstangen kun bevæger sig lodret |
| 11 | Kamaksel (ved brændstofpumpen) | Driver brændstofpumper og udstødsventilernes hydrauliske aktuatorer i takt med krumtappen |

### 7.2 Beskriv hvordan og hvornår udstødsventilen åbner og lukker

På MC-motoren trykker en knast en hydraulisk stempelpumpe. Olietrykket åbner ventilen mod en luftfjeder, som lukker den igen, når trykket aflastes. En oliebremse dæmper lukningen, og vinger på spindlen drejer ventilen. På ME-motorer styres olien elektronisk.

Ventilen åbner typisk ca. 110–120° efter OD, før skylleportene (blowdown). Den lukker ca. 250–270° efter OD, efter portene er lukket, hvorefter kompressionen begynder.

### 7.3 Beskriv systemsmøreoliens vej til og fra lejer og stempelkrone

1. Bundtank → smøreoliepumpe → køler → filter.
2. En gren går til hovedlejer, trykleje og kamdrev.
3. En gren går via teleskoprør (eller leddelt rør) til krydshovedet.
4. Fra krydshovedet smøres krydshovedlejer og glidesko. Krumtapslejet forsynes gennem en boring i plejlstangen.
5. Stempelkøleolien går op gennem stempelstangen til kronen, køler ved rystekøling og løber retur gennem stangen.
6. Afgangen passerer temperatur- og flowovervågning, løber til bundrammen og tilbage til bundtanken.

### 7.4 Beskriv to-takts dieselmotorens behov for hjælpeblæsere ved igangsætning

Ved start og lav last er der for lidt røggasenergi til, at turboladeren kan skabe skylletryk. En totaktsmotor kan ikke selv suge luft, så elektriske hjælpeblæsere skal levere skylleluften.

De starter og stopper automatisk efter skylletrykket, typisk omkring 25–40 % last. Kontraventiler sørger for den rigtige strømningsvej.

### 7.5 Forklar betydningen af ladeluftkøleren for motorens driftsparametre og beskriv hvad der sker med luften, når den passerer igennem dieselmotorens luftsystem

Luftfilter → kompressor (tryk og temperatur stiger til ca. 150–220 °C) → ladeluftkøler (køles til ca. 35–50 °C) → vandudskiller → kontraklapper/hjælpeblæser → skylleluftreceiver → skylleporte → kompression og forbrænding → udstødsventil → udstødsreceiver → turbine → evt. udstødskedel.

Kølingen øger massefylden og dermed luftmassen, så der kan brændes mere brændstof. Den sænker termisk belastning, udstødstemperatur og NOx og forbedrer forbruget. Køler man under dugpunktet, dannes kondensat, som skal drænes for at undgå slid og korrosion.

### 7.6 Beskriv stempelringenes funktion i en to-takts dieselmotor

Ringene tætner mod forbrændingstrykket, leder varme til foringen og fordeler cylinderolien. De skal kunne passere skylleportene. Den øverste ring har ofte kontrollerede lækspor, som fordeler trykket til de næste ringe. Olieskrabningen mod systemolien sker i pakdåsen.

## 8 · Motorens indicerede ydelse
sider: 15

### 8.1 Hvilke konkrete varmetab opstår ved omdannelsen af brændstoffets tilførte kemiske effekt til indiceret effekt?

| Tab (stor totaktsmotor, ca.) | Andel af tilført effekt |
|---|---|
| Udstødsgas | 23–28 % |
| Ladeluftkøler | 12–18 % |
| Cylinderkølevand (foring, dæksel, ventil) | 5–8 % |
| Smøre- og stempelkøleolie | 2–5 % |
| Stråling og konvektion | ca. 1 % |
| Ufuldstændig forbrænding | under 1 % |

### 8.2 Hvilke faktorer påvirker motorens indicerede effekt?

**Direkte:** indiceret middeltryk, slagvolumen, omdrejningstal, cylinderantal og takttal.

**Middeltrykket** afhænger af brændstofmængde, luftmængde (ladetryk og -temperatur), indsprøjtningstidspunkt, forstøvning, brændstofkvalitet, kompressionstryk, tæthed af ringe og ventiler og omgivelsesforhold.

### 8.3 Beskriv hvorfor man har indført begrebet indiceret middeltryk, i stedet for direkte at anvende det varierende cylindertryk til at beregne og beskrive motorens indicerede ydelse

Cylindertrykket varierer hele tiden og kan ikke indgå direkte i en simpel formel. Middeltrykket er det konstante tryk, som over ét slag ville give samme arbejde som kredsprocessen. Det gør beregningen enkel, viser belastningen og kan sammenlignes mellem cylindre og motorer uanset størrelse.

### 8.4 Hvad er forskellen på beregningen af den indicerede effekt for henholdsvis en firetaktsmotor og en totaktsmotor ud fra det indicerede middeltryk? Forklar også årsagen til denne forskel

```
P_i,2T = pi · Vs · n · z          P_i,4T = pi · Vs · (n/2) · z

(p i Pa, V i m³, n i s⁻¹)
```

Totaktsmotoren har et arbejdsslag pr. omdrejning, firetaktsmotoren kun ét hver anden omdrejning.

### 8.5 En 12-cylindret 2-takt dieselmotor: diameter 900 mm, slaglængde 2560 mm, 90 o/min, fjederskala 0,4 mm/bar, pV-diagram areal 380 mm² og længde 65 mm. Beregn og forklar (A) det indicerede middeltryk i bar og (B) den indicerede effekt i kW

**A.** Diagrammets middelhøjde er areal divideret med længde. Divideret med fjederskalaen fås trykket:

```
pi = A / (l · kf) = 380 / (65 · 0,4) = 14,6 bar
```

**B.** Først slagvolumen, derefter effekten:

```
Vs = π/4 · 0,9² · 2,56 = 1,629 m³

Pi = 14,62·10⁵ · 1,629 · 90/60 · 12 = 42,8·10⁶ W ≈ 42.840 kW
```

## 9 · Dieselmotorens effektive ydelse
sider: 16, 17

### 9.1 Redegør for de mulige mekaniske tab, der opstår under dieselmotorens drift og beskriv årsagen til tabene opstår

| Tab | Årsag |
|---|---|
| Stempel og ringe mod foring (største) | Glidning, ringtryk, blandet smøring i dødpunkterne |
| Hoved-, krumtaps- og krydshovedlejer, trykleje | Forskydning i oliefilmen |
| Glidesko | Sidekræfter og glidning |
| Kamaksel, tandhjul/kæde, ventildrev | Kontakttryk og friktion |
| Direkte drevne pumper | Effekt tages fra akslen |
| Luft- og olieplask i krumtaphus | Strømningsmodstand |

### 9.2 Beskriv hvordan dieselmotorens belastningsgrad kan defineres ud fra motorens aktuelle bremseeffekt og MCR

MCR (Maximum Continuous Rating) er den største effekt, motoren må levere vedvarende.

```
Belastningsgrad = Pe / P_MCR · 100 %
```

### 9.3 Redegør for, hvilke fysiske størrelser symbolerne i Figur 1 repræsenterer. Forklar deres indbyrdes sammenhæng og årsagen til denne sammenhæng

- **P Fuel:** tilført effekt med brændstoffet (ṁ · hn)
- **Pi:** indiceret effekt på stemplet
- **Pe:** effektiv effekt (bremseeffekt) på krumtapakslen
- **ηt:** termisk (indiceret) virkningsgrad
- **ηm:** mekanisk virkningsgrad
- **ηø:** økonomisk (total) virkningsgrad

```
ηt = Pi / P_fuel        ηm = Pe / Pi        ηø = Pe / P_fuel = ηt · ηm
```

Tabene sker i rækkefølge: først termiske tab fra brændstof til stempel, derefter mekaniske tab fra stempel til aksel. Derfor ganges virkningsgraderne.

### 9.4 Dieselmotoren på Figur 2 er en femcylindret totakts dieselmotor ved 57,7 o/min. Beregn motorens bremseeffekt ved brug af drejningsmomentet og effektive middeltryk på grundlag af simulatorens skærmbillede

Skærmbilledet viser M = 1653,1 kNm. Boring 900 mm og slag 2916 mm giver Vs = 1,855 m³.

**Via moment:**

```
Pe = M · 2π · n = 1653,1 · 2π · 57,7/60 = 9989 kW
```

**Via effektivt middeltryk:** pe vises ikke på skærmen og beregnes af momentet. De 16,9 bar (MIP) er det indicerede tryk ved MCR og må ikke bruges her.

```
pe = 2π · M / (z · Vs) = 2π · 1653,1·10³ / (5 · 1,855) = 11,2·10⁵ Pa = 11,2 bar

Pe = pe · Vs · n · z = 11,2·10⁵ · 1,855 · 57,7/60 · 5 ≈ 9990 kW
```

Kontrol: brændstofforbrug 1,86 t/h divideret med 186,25 g/kWh giver også ca. 9987 kW. (Måleren Shaft Power viser 9,83 MW.)

### 9.5 Beregn også belastningsgraden for motoren på Figur 2

```
9989 / 18.000 · 100 = 55,5 %
```

## 10 · Motorens teoretiske kredsproces
sider: 18

### 10.1 Forklar og benævn de fem delprocesser, der indgår i Seiliger-processen

| Proces | Navn | Hvad sker der |
|---|---|---|
| 1→2 | Isentrop kompression | Luften komprimeres uden varmeudveksling |
| 2→3 | Isokor varmetilførsel | Første del af forbrændingen ved konstant volumen, trykket stiger |
| 3→4 | Isobar varmetilførsel | Resten af forbrændingen ved konstant tryk, stemplet går ned |
| 4→5 | Isentrop ekspansion | Gassen ekspanderer og udfører arbejde |
| 5→1 | Isokor varmebortførsel | Udstødning og skylning, varmen afgives |

### 10.2 Angiv hvor på figuren temperaturen er hhv. højest og lavest

**Højest i punkt 4** (slut på varmetilførslen). **Lavest i punkt 1** (start på kompressionen).

### 10.3 Aflæs skyllelufttrykket og forklar hvad der vil ske med punkt 1–5, hvis dette tryk øges med 10 % (og alle andre parametre fastholdes)

Skylletrykket er trykket i punkt 1: **ca. 3,5 bar**. 10 % mere giver ca. 3,85 bar.

Antages samme temperatur i punkt 1, samme ε, trykforhold p3/p2 og volumenforhold V4/V3, så:

- Trykket i alle punkter 1–5 stiger 10 %.
- Volumener og temperaturer er uændrede.
- Luftmasse, tilført varme og arbejde stiger 10 %. Virkningsgraden er uændret.

Holdes brændstofmængden i stedet fast, stiger p1 og p2, mens T3–T5 falder, fordi varmen fordeles på mere luft.

> **Usikker** Trykket er aflæst på figuren, og svaret afhænger af, hvad man antager bliver holdt fast. Sig antagelsen højt til eksamen.

### 10.4 Beregn kompressionsforholdet med baggrund i figuren og forklar hvordan du har gjort

Volumenet aflæses i punkt 1 (ca. 166,5) og punkt 2 (ca. 12). Aksen hedder slagvolumen, men viser hele cylindervolumenet inkl. kompressionsrummet.

```
ε = V1 / V2 = 166,5 / 12 ≈ 13,9
```

> **Usikker** Værdierne er aflæst på figuren.

### 10.5 Gør rede for tilførsel og bortledning af varme og arbejde under hver delproces

| Proces | Navn | Varme | Arbejde |
|---|---|---|---|
| 1→2 | Isentrop kompression | Ingen | Tilføres gassen (W ind) |
| 2→3 | Isokor varmetilførsel | Q23 tilføres | Intet |
| 3→4 | Isobar varmetilførsel | Q34 tilføres | Afgives |
| 4→5 | Isentrop ekspansion | Ingen | Afgives (W ud) |
| 5→1 | Isokor varmebortførsel | Q2 bortføres | Intet |

Nettoarbejdet W0 er arealet inde i kurven:

```
W0 = Q23 + Q34 − Q2
```

### 10.6 Forklar ud fra udtrykket ηt,0 = 1 − (t5 − t1)·(t3 − t2) / (κ·(t4 − t3)) hvordan du kan opnå en høj termisk virkningsgrad

Det korrekte Seiliger-udtryk er:

```
ηt,0 = 1 − (T5 − T1) / ((T3 − T2) + κ · (T4 − T3))
```

Brøken skal være lille: lav T5 − T1 (lille bortført varme) i forhold til den tilførte varme. Det opnås med **højt kompressionsforhold**, **stor andel varme ved konstant volumen** (højt maksimaltryk) og **kort isobar forbrænding**, så ekspansionen bliver lang.

> **Usikker** Udtrykket i opgaven har en trykfejl. Som det står, giver det en temperatur og ikke et dimensionsløst tal. Svaret bruger det korrekte udtryk ovenfor.

### 10.7 Beskriv de to størrelser som den termiske virkningsgrad angiver forholdet imellem

Det udnyttede nettoarbejde og den tilførte varme:

```
ηt,0 = W0 / Q1 = (Q1 − Q2) / Q1        Q1 = Q23 + Q34
```

## 11 · Forbrændingsprocessen i dieselmotoren
sider: 19

### 11.1 Beskriv forbrændingsprocessen i cylinderen

1. **Tændingsforsinkelse:** indsprøjtningen starter nær OD. Brændstoffet opvarmes og fordamper uden mærkbar trykstigning.
2. **Forblandet forbrænding:** det opblandede brændstof antænder samtidig og giver en hurtig trykstigning.
3. **Diffusionsforbrænding:** brændstoffet brænder, efterhånden som det indsprøjtes og blandes med luft.
4. **Efterforbrænding:** rester og sod brænder under ekspansionen.

### 11.2 Beskriv brændstoffets opvarmning-fordampning-antændelse, tændingsforsinkelsen, opblanding af ilt og fuel, forstøvningens betydning

Dysen forstøver brændstoffet til små dråber. Små dråber giver stor overflade, så de hurtigt optager varme fra den komprimerede luft og fordamper. Dampen blandes med ilten, hjulpet af luftens hvirvel og strålens bevægelse, og selvantænder, hvor blandingsforholdet og temperaturen er egnede.

**Tændingsforsinkelsen** er tiden fra indsprøjtningsstart til antændelse. Den bliver kortere med højere temperatur, tryk og cetantal og bedre forstøvning.

Dårlig forstøvning (slidte dyser, lavt tryk, for høj viskositet) giver sod, efterforbrænding og høj udstødstemperatur. Strålerne skal have tilpas gennemtrængning uden at ramme foring og stempel.

### 11.3 Beskriv forbrændingsprocessen på forsat diagram

Det forsatte diagram (Figur 2) optages faseforskudt 90°, så forløbet omkring OD strækkes ud. Den stiplede kurve er ren kompression og ekspansion uden forbrænding. Punkterne tolkes sådan:

- **a:** indsprøjtningen begynder; a–b er tændingsforsinkelsen
- **b:** antændelse; trykket forlader kompressionskurven
- **b–c:** hurtig trykstigning til maksimaltrykket ved c
- **c–d–e:** fortsat styret forbrænding og afslutning af indsprøjtningen
- **efter e:** ekspansion og efterforbrænding

Man aflæser kompressionstryk, maksimaltryk, trykstigning og tændingstidspunkt.

### 11.4 Hvordan ændres pV-diagrammet og forsat-diagrammet ved dellast set i forhold til fuldlast?

| | Fuldlast | Dellast |
|---|---|---|
| Ladetryk og kompressionstryk | Højt | Lavere |
| Maksimaltryk | Højt | Lavere (VIT/elektronisk styring holder det oppe i øvre lastområde) |
| Indsprøjtningens varighed | Lang | Kort |
| pV-diagrammets areal og pi | Stort | Mindre |
| Forsat diagram | Tydelig, høj trykstigning | Lavere kompressionstop og mindre trykstigning |

### 11.5 Indikatordiagrammet fra én cylinder i en totakts dieselmotor har et areal svarende til 1940 kJ. Motoren har 10 cylindre og 97 o/min. Bestem den indicerede effekt i kW og beskriv beregningsmetoden

Arealet er arbejdet pr. cylinder pr. arbejdsproces. En totaktsmotor har én proces pr. omdrejning, så arbejdet ganges med omdrejninger pr. sekund og antal cylindre.

```
Pi = W · n · z = 1940 · 97/60 · 10 = 31.363 kW ≈ 31,4 MW
```

## 12 · Energifordeling 1
sider: 20

### 12.1 Beskriv hvilke termiske effekter (termiske tab), der ikke anvendes til at give en kraft på motorens stempel

Varme i udstødsgassen, ladeluftkøleren, cylinderkølevandet, stempelkøleolien, stråling og konvektion fra motoren samt en lille mængde uforbrændt brændstof.

### 12.2 Beskriv hvordan disse effekter har indflydelse på motorens termiske virkningsgrad og hvorfor de er nødvendige for motoren

```
ηt = Pi / P_fuel = 1 − ΣΦ_tab / P_fuel
```

Jo større tab, jo lavere virkningsgrad. Tabene kan ikke undgås: en varmekraftmaskine skal afgive varme ved lavere temperatur. Kølingen holder materialer og oliefilm inden for temperaturgrænserne. Ladeluftkølingen giver mere luftmasse, og udstødsenergien driver turboladeren og evt. udstødskedlen.

### 12.3 Beskriv hvilke størrelser, der skal kendes eller måles, når effekterne skal bestemmes/beregnes, og hvordan de indgår i beregningen

| Effekt | Måles/kendes | Beregning |
|---|---|---|
| Tilført | Brændstofflow, brændværdi | Φ = ṁbf · hn |
| Cylinderkøling | Vandflow, t ind/ud, c ≈ 4,18 | Φ = ṁ · c · Δt |
| Stempel- og smøreolie | Olieflow, t ind/ud, c ≈ 2,0 | Φ = ṁ · c · Δt |
| Ladeluft | Luftflow, t før/efter, cp ≈ 1,01 (eller vandsiden) | Φ = ṁ · cp · Δt |
| Udstødsgas | ṁrøg = ṁluft + ṁbf, t røg, t omg., cp ≈ 1,1 | Φ = ṁrøg · cp · (t røg − t omg) |
| Stråling | Restled eller skøn ca. 1 % | Φ = tilført − Pe − øvrige |

c og cp i kJ/(kg·K), flow i kg/s.

### 12.4 Beskriv hvad figurerne viser om energifordeling i motoren og hvordan de kan anvendes i en driftssituation

De er Sankey-diagrammer, hvor bredden svarer til effektens størrelse. A er tilført brændstofeffekt, og den nederste pil er nyttig effekt.

- **Venstre figur:** simpel balance. D (største tab) er udstødsgassen, B køling, C smøreolie, F stråling og E den effektive effekt.
- **Højre figur:** viser også energi, der føres tilbage i processen (C, D, E, J, K). Et eksempel er turboladeren, som returnerer udstødsenergi til ladeluften. B, F og H forlader systemet.

I drift sammenlignes den aktuelle fordeling med prøvestandsdata. Afvigelser peger på fx snavsede kølere, slidt turbolader eller dårlig indsprøjtning, og diagrammet viser potentialet for spildvarmeudnyttelse.

> **Usikker** Figurerne har ingen forklaring på bogstaverne, så fordelingen af bogstaver er en tolkning.

## 13 · Energifordeling 2
sider: 21, 22

### 13.1 Beskriv hvilke effekter (mekaniske tab) der ikke anvendes til at give hovedakslen et drejningsmoment

Friktion mellem stempelringe og foring, i hoved-, krumtaps-, krydshoved- og trykleje, ved glidesko og pakdåse, i kamaksel og drev samt effekt til direkte drevne pumper og strømningstab i krumtaphuset.

### 13.2 Beskriv hvordan disse effekter har indflydelse på motorens mekaniske virkningsgrad og hvorfor de er nødvendige i motoren

```
ηm = Pe / Pi = (Pi − P_mek) / Pi
```

Tabene sænker ηm (typisk 0,90–0,95 ved fuld last for en stor totaktsmotor). De følger af, at dele skal bevæge sig mod hinanden, ringene skal tætne, og ventiler og pumper skal drives. Da tabene er næsten konstante, falder ηm ved lav last.

### 13.3 Beskriv hvilke størrelser der skal kendes eller måles, når effekterne skal bestemmes/beregnes, og hvordan de indgår i beregningen

Indiceret effekt findes af indikatordiagram (pi), omdrejningstal, slagvolumen og cylinderantal. Effektiv effekt findes af moment og omdrejningstal (eller generatoreffekt og generatorvirkningsgrad).

```
Pi = pi · Vs · n · z        Pe = M · 2π · n        P_mek = Pi − Pe
```

### 13.4 Beskriv hvorfor der skal fjernes varmeenergi i smøreoliekøleren og hvordan varmeenergien fjernes

Olien optager friktionsvarme fra lejer og varme fra stempelkronen. Uden køling falder viskositeten, oliefilmen bryder sammen, og olien oxiderer.

Varmen overføres i en (plade)varmeveksler til LT-ferskvand eller søvand. En trevejsventil lader noget olie gå uden om køleren og holder tilgangstemperaturen på ca. 45 °C.

### 13.5 Vurder på baggrund af figurerne om energitabet i smøreolien er termiske eller mekaniske tab

**Begge dele.** Figurerne viser, at olien gennem stempelstangen køler stempelkronen: det er varme fra forbrændingen og dermed et **termisk** tab. Olien til krydshovedleje, glidesko og krumtapleje fjerner friktionsvarme: et **mekanisk** tab. På en krydshovedmotor udgør stempelkølingen den største del af olieflowet.

### 13.6 Beskriv hvordan du praktisk kan beregne den effekt som smøreolien fjerner fra stemplet i cylinder 3

Aflæs flow og temperaturer på skærmbilledet MD 23: G = 80,79 t/h, ind 45,00 °C, ud 48,61 °C. Antaget c = 2,0 kJ/(kg·K).

```
Φ = ṁ · c · Δt = 80,79/3,6 · 2,0 · (48,61 − 45,00) ≈ 162 kW
```

> **Usikker** Oliens varmefylde er ikke opgivet. 2,0 kJ/(kg·K) er antaget.

## 14 · Brændstofsystem
sider: 23

### 14.1 Beskriv brændstofsystemets opbygning og komponenternes funktion

Simulatoren MD 11, i strømningsrækkefølge:

| | Komponent | Funktion |
|---|---|---|
| 1 | HFO- og DO-servicetank, omskifterventil | Forsyning og valg af brændstof |
| 2 | Strainere og forsyningspumper (ca. 3,4 bar) | Beskytter pumper og sætter forsyningstryk |
| 3 | Flowmåler og emulsionsenhed (FWE) | Forbrugsmåling; evt. vandemulsion mod NOx |
| 4 | Venting box med afluftningsventil | Blander returolie med frisk olie og fjerner gas og damp |
| 5 | Cirkulationspumper (ca. 8,8 bar) | Højt tryk hindrer kogning; overkapacitet holder temperaturen |
| 6 | Dampforvarmere (ca. 120 °C) | Sænker viskositeten |
| 7 | Returskylle- og bypassfilter | Fjerner partikler; slam til sludgetank |
| 8 | Viskosimeter og regulator | Måler og styrer viskositeten (15 cSt) |
| 9 | Brændstofpumper (cyl. 1–5), trykholdeventil | Indsprøjtning; overskud retur til venting box |

Der er også grene til hjælpemotorerne (DG1/2) og en lækagedetektor.

### 14.2 Beskriv hvordan viskositeten kan reguleres og forklar vigtigheden af korrekt viskositet af brændolien til brændstofpumperne

Viskosimeteret sender signal til viskositetsregulatoren. I kaskade ændrer den sætpunktet for temperaturregulatoren, som styrer dampventilen til forvarmeren. Typisk ønskes 10–15 cSt.

- **For høj viskositet** giver dårlig forstøvning, høje tryk og stor belastning på pumper og kam.
- **For lav viskositet** giver lækage i pumpen, dårlig smøring og risiko for fastbrænding af stemplet.

### 14.3 Forklar hvordan skift af brændstoftype foregår

**HFO til DO:** reducer evt. last efter fabrikantens anvisning, luk gradvist ned for dampen, og skift trevejsventilen, mens temperaturen ændres langsomt (højst ca. 2 °C/min). Undgå varm tynd gasolie og termisk chok.

**DO til HFO:** forvarm HFO-tanken, skift ventilen, øg temperaturen gradvist, og aktiver viskositetsreguleringen.

Kontrollér kompatibilitet, tilpas cylinderoliens BN og dosering, logfør skiftet, og afslut det før indsejling i et ECA-område.

### 14.4 En brændstofpumpe indsprøjter 100 g dieselolie (890 kg/m³) pr. pumpeslag. Der skiftes til heavy fuel (950 kg/m³). Hvor mange gram heavy fuel indsprøjtes pr. pumpeslag, når pumpens index ikke ændres?

Samme index giver samme volumen:

```
m_HFO = m_DO · ρ_HFO / ρ_DO = 100 · 950 / 890 = 106,7 g
```

Det forudsætter, at densiteterne gælder ved pumpetemperaturen, og at lækagen er ens.

## 15 · Smøreoliesystemer
sider: 24, 25

### 15.1 Redegør for ulemperne ved, at smøreolien har henholdsvis for lav og for høj viskositet

| For lav | For høj |
|---|---|
| Oliefilmen bliver for tynd, metalkontakt og slid | Stor indre friktion, effekttab og varme |
| Risiko for lejehavari | Træg oliefordeling, især ved koldstart |
| Øget lækage og lavere olietryk | Højt trykfald i filtre og kølere, dårlig pumpning |
| Dårligere tætning | Dårligere køling og separation |

### 15.2 Beskriv med udgangspunkt i figuren, hvordan smøreolien fordeles i forskellige strømme efter tilførslen til krydshovedet, og hvilke motordele de enkelte strømme smører eller køler

Opgaven kalder figuren "Figur 2", men i oplægget er den mærket Figur 4 (smøreoliens strømningsvej i en krydshovedmotor).

Olien kommer gennem teleskoprøret til krydshovedet og deles:

- til krydshovedlejernes lejepander (smøring)
- ud til glideskoenes kanaler (smøring af styrefladerne)
- ned gennem boringen i plejlstangen til krumtapslejet
- op gennem stempelstangen til stempelkronen (køling), retur gennem stangen og ud ad afgangsrøret for køleolie

### 15.3 Brug figuren og bestem den specifikke cylinderoliedosering ved et svovlindhold på 1 %, 2 % og 3 %. Beregn derefter motorens cylinderolieforbrug pr. minut ved 40.000 kW

Doseringsdiagrammet er mærket Figur 3 i oplægget.

```
Forbrug pr. minut = dosering · effekt / 60
```

| Svovl | Dosering (g/kWh) | Forbrug (kg/h) | Forbrug (g/min) |
|---|---|---|---|
| 1 % | 0,68 | 27,2 | 453 |
| 2 % | 0,68 | 27,2 | 453 |
| 3 % | ca. 1,02–1,04 | ca. 41 | ca. 680–690 |

> **Usikker** Doseringerne er aflæst på diagrammet, især værdien ved 3 %.

### 15.4 Hvor mange separate smøreoliesystemer findes der i simulatoren?

**Tre:** hovedmotorens systemolie, kamakselolien og cylinderolien.

### 15.5 Redegør for smøreoliens strømningsvej i hvert af de separate smøreoliesystemer, og forklar hovedkomponenternes funktion

**Systemolie:** bundtank (58 m³) → strainere → hovedpumper → køler og bypass med trevejsventil (45 °C) → returskylle-/bypassfilter → stempelkøling og lejer → retur til bundtanken. En delstrøm går til LO-separatoren.

**Kamakselolie:** tank (1,5 m³) → strainere → pumper → trevejsventil og køler (50 °C) → filtre → kamaksel → retur til tanken. En trykreguleringsventil (4 bar) leder overskud tilbage.

**Cylinderolie:** lagertank (8,5 m³) → transferpumpe og filter → dagtank (0,21 m³) → lubrikatorer → cylindre, hvor olien forbruges.

Pumper skaber flow og tryk, strainere og filtre fjerner partikler, kølere og trevejsventiler styrer temperaturen, og tanke giver reserve og afluftning.

### 15.6 Beregn, hvor stor en procentdel af den samlede systemsmøreolie der anvendes til stempelkøling

Skærmen viser 393,64 t/h til stempelkøling (2,32 bar) og 52,21 t/h til lejer.

```
393,64 / (393,64 + 52,21) · 100 = 393,64 / 445,85 · 100 = 88,3 %
```

## 16 · Centrifuger og rensning
sider: 26, 27

### 16.1 Beskriv ved hjælp af Figur 1, hvordan centrifuger separerer stoffer der er blandet med olie

Urenset olie ledes ind yderst ved A og strømmer indad og opad mellem to koniske tallerkener. Centrifugalkraften giver en partikel X en udadrettet hastighed v, mens olien bærer den indad med hastigheden w. Resultanten er vp.

Rammer partiklen den øverste tallerken før B', er den udskilt. Den glider udad til slamrummet. Vand og snavs er tungest og samles yderst, mens ren olie løber ud inderst. Tallerkenerne gør bundfældningsvejen kort.

### 16.2 Beskriv hvilke fysiske parametre der har indflydelse på effektiviteten af separationen og hvorfor de har en betydning

```
v = d² · (ρp − ρolie) · ω² · r / (18 · η)
```

| Parameter | Betydning |
|---|---|
| Partikelstørrelse d | Størst virkning (kvadratisk); små partikler er svære |
| Densitetsforskel | Drivkraften; ingen forskel giver ingen separation |
| Viskositet η | Sænkes med opvarmning, så hastigheden stiger |
| Omdrejningshastighed ω og radius r | Bestemmer centrifugalaccelerationen |
| Flow | Lavere flow giver længere opholdstid |
| Antal tallerkener, vinkel og areal | Mere areal giver større kapacitet |
| Renhed og slamtømning | Tilsmudsede tallerkener forringer separationen |

### 16.3 Beskriv forskellen på Figur 2 og Figur 3, hvorfor der er to typer og hvordan de kan anvendes i oliesystemer

**Figur 2 – purifikator:** tre faser. 1 tilgang, 2 ren olie, 3 vandafgang, 4 betjeningsvand. Den bruger en vandlås og fjerner både frit vand og partikler. En gravitationsskive eller regulering holder skillefladen.

**Figur 3 – klarifikator:** to faser. 1 tilgang, 2 ren olie, 3 betjeningsvand. Den fjerner faste partikler; vand og slam samles i skillerummet.

Purifikatoren bruges ved væsentligt vandindhold, klarifikatoren som efterrensning. De kan køres i serie (purifikator → klarifikator) for HFO eller parallelt for større kapacitet og lavere flow. Moderne anlæg (fx ALCAP) kører som klarifikator med vandføler og automatisk dræn og kan klare olier med høj densitet.

### 16.4 Vurder om den nedre brændværdi af en heavy fuel olie, der centrifugeres, ændres, og hvis den gør, hvordan og hvorfor

**Ja, pr. kg stiger den en smule.** Vand og aske fjernes, så andelen af brændbart stof bliver større, og der skal ikke bruges varme på at fordampe vandet.

```
Eksempel: 1 % vand i en olie med tør brændværdi 40.500 kJ/kg
hn = 0,99 · 40.500 − 25 = 40.070 kJ/kg
```

Altså ca. 430 kJ/kg (1,1 %) mindre end den rensede. Den samlede energi stiger ikke; massen bliver mindre.

### 16.5 Beskriv hvorfor HF-olien på simulatorbilledet af HFO-separatoren har en temperaturindstilling på 98 °C, og hvordan denne temperatur opretholdes under drift

Høj temperatur giver lav viskositet og god densitetsforskel til vandet, altså hurtigere separation. Man bliver under 100 °C, så vandet i vandlås og olie ikke koger.

På skærmen måler temperaturregulatoren (sætpunkt 98 °C) olien efter dampforvarmeren og styrer dampventilen. Flowregulatoren holder gennemstrømningen jævn. ALCAP-styringen afventer korrekt temperatur, recirkulerer olien, indtil den er nået, og alarmerer ved for høj eller lav temperatur.

## 17 · Kølevandssystemer og varmeveksling
sider: 28

### 17.1 Beskriv vejen af vandet igennem HTFW-systemet, og vis hvilke pumper der er aktive

Motorafgang (ca. 79 °C) → ferskvandsgenerator (delvis omledning) → deaerator med ekspansionstank → ned gennem returledningen (232 t/h) → trevejsventil → HTFW-pumpe → forvarmer (uden flow på dampen) → motortilgang (ca. 74 °C).

**Kun HTFW-pumpe 1 kører.** Pumpe 2 og aux-pumpen er standby. Trevejsventilen står på 100 % recirkulation, så der tilføres intet LT-vand (0 t/h). I LT-kredsen kører LTFW-pumpe 1.

### 17.2 Hvilken pumpetype vil du forvente er anvendt som "HTFW Pumps", og hvorfor bruger man disse typer?

**Centrifugalpumper.** De giver stort og jævnt flow ved moderat tryk, er enkle, robuste, billige og lette at vedligeholde, tåler drosling og kræver ingen sikkerhedsventil.

### 17.3 Forklar hvad der vil ske i systemet, hvis lavere last på motoren får temperaturen af afgangsvandet til at falde

HTFW-regulatoren (sætpunkt 80 °C) åbner mindre for koldt LT-vand og recirkulerer mere. På billedet er ventilen allerede på 100 % recirkulation (78,96 °C < 80 °C). Falder temperaturen yderligere, må ferskvandsgeneratoren aftage mindre varme (mere bypass), og til sidst skal forvarmeren have damp.

### 17.4 Hvilket system fjerner varme fra FW Coolers 1?

**Søvandssystemet** (køleren henviser til billede 001).

### 17.5 Beregn den effekt der overføres i FW Cooler 1 og FW Cooler 2

**Cooler 1:** 403,02 t/h, ind 38,36 °C, ud 30,95 °C, c = 4,18 kJ/(kg·K).

```
Φ1 = 403,02/3,6 · 4,18 · (38,36 − 30,95) ≈ 3468 kW
```

**Cooler 2:** 0 kW, da flowet er 0 (lukket ventil; de 23,10 °C er stillestående vand).

Kontrol: blandes 403,02 t/h ved 30,95 °C med 282,43 t/h bypass ved 38,36 °C, fås 34,00 °C, som er LT-sætpunktet.

### 17.6 Forklar hvorfor nogen af kølerne er rørvarmevekslere og andre er pladevarmevekslere

| Pladeveksler | Rørveksler |
|---|---|
| Kompakt, høj varmeovergang | Tåler højere tryk og temperatur |
| God til store flows og små temperaturforskelle | Mindre følsom for snavs |
| Kan udvides og adskilles; titan mod søvand | Robust til små flows og hjælpekølere |
| FW-kølere og hovedmotorens LO-kølere | Kamaksel-, servo- og kompressorkølere m.fl. |

### 17.7 Forklar hvorfor der ofte findes både et HT og et LT ferskvandskølesystem i forbindelse med dieselmotorer

**HT-kredsen** (ca. 70–90 °C) køler motoren uden termisk chok og koldkorrosion, og varmen kan udnyttes i ferskvandsgeneratoren.

**LT-kredsen** (ca. 34–36 °C) køler smøreolie, ladeluft og hjælpeudstyr.

Kun få centrale kølere har søvand, så korrosion og vedligehold mindskes.

### 17.8 Angiv hvorfor man bør være opmærksom på kvaliteten af ferskvandskølevandet, og angiv hvilke ioner der er uheldige at have i vandet

Dårligt vand giver korrosion, kedelsten (dårlig varmeovergang) og kavitationsskader.

Uheldige ioner er **klorid (Cl⁻)** og **sulfat (SO₄²⁻)**, der fremmer korrosion, samt **calcium (Ca²⁺)** og **magnesium (Mg²⁺)**, der danner belægninger.

Brug destilleret vand med inhibitor (fx nitritbaseret), og kontrollér pH, klorid og inhibitorniveau jævnligt.

## 18 · Turboladning
sider: 29

### 18.1 Beskriv hvorfor turboladning anvendes til dieselmotordrift, og beskriv ved brug af Figur 1 luftens og røggassens strømning og tilstandsændringer igennem motoren

Mere luftmasse i cylinderen giver mulighed for mere brændstof: højere effekt pr. størrelse og vægt og bedre virkningsgrad med energi, der ellers går tabt.

| Trin (Figur 1) | Tilstandsændring |
|---|---|
| Kompressor | p stiger (ca. 3–4 bar abs.), T stiger |
| Ladeluftkøler | T falder, massefylde stiger, lille trykfald |
| Vandudskiller og skylleluftreceiver | Kondensat fjernes, trykket udjævnes |
| Cylinder | Skylning, kompression, forbrænding, ekspansion |
| Udstødsreceiver | Varm gas (ca. 350–450 °C) med lidt lavere tryk end skylleluften |
| Turbine | p og T falder; arbejdet driver kompressoren |

### 18.2 Beskriv ved anvendelse af Figur 2, hvilke muligheder der er for at tilpasse motorens luftforbrug ved forskellige belastninger og belastningsændringer

- **Ladeluftbypass** (kompressorafgang til turbinetilgang): øger flowet gennem laderen ved dellast og holder afstand til surge.
- **Udstøds-wastegate:** leder gas uden om turbinen ved høj last, så ladetrykket begrænses. Laderen kan dermed optimeres til dellast.
- **Luft-wastegate:** blæser ladeluft af, når trykket bliver for højt, fx ved kold omgivelsesluft.

Ved belastningsændringer bruges desuden hjælpeblæsere, brændstofbegrænser, variabel turbine eller udkobling af en lader.

### 18.3 Beskriv hvilke fejl der kan opstå omkring en turbolader og hvordan disse fejl kan afhjælpes

| Fejl | Afhjælpning |
|---|---|
| Snavset luftfilter eller kompressor | Rens filter; vandvask af kompressor |
| Belægninger i turbine og dysering | Vask eller granulatrensning ifølge manual (ofte reduceret last) |
| Surging | Reducer last, åbn bypass, rens køler/filter/turbine, tjek cylinderbalance |
| Vibration og ubalance | Rens, inspicér og udskift skovle, afbalancér |
| Lejeskade | Kontrollér olietryk, temperatur og kvalitet; udskift |
| Fremmedlegemeskader | Kontrollér beskyttelsesgitter, ringe og ventiler |
| Tilstoppet ladeluftkøler | Rens luft- og vandside |

### 18.4 Beskriv hvilke fysiske størrelser du skal anvende for at beregne effekter og virkningsgrader på turboladeren

Masseflow af luft og gas, absolutte tryk og temperaturer før og efter kompressor (1, 2) og turbine (3, 4), cp, κ og evt. omdrejningstal.

```
Pk = ṁl · cp,l · (T2 − T1)              Pt = ṁg · cp,g · (T3 − T4)

T2s = T1 · (p2/p1)^((κ−1)/κ)

ηk = (T2s − T1) / (T2 − T1)              ηt = (T3 − T4) / (T3 − T4s)

ηTL = ṁl · cp,l · (T2s − T1) / (ṁg · cp,g · (T3 − T4s))
```

### 18.5 Beskriv hvad Figur 3 viser, og hvordan den kan anvendes

Den viser luftens vandindhold (g/kg) som funktion af relativ fugtighed ved 20 °C og 1, 2 og 3 bar. Højere tryk giver plads til mindre vand: ved 100 % ca. 14,7, 7,4 og 4,9 g/kg.

Den bruges til at bestemme kondensmængden. Eksempel: indsugning ved 1 bar og 80 % giver ca. 11,7 g/kg. Køles luften ved 3 bar til 20 °C, kan den holde ca. 4,9 g/kg. **Der udskilles ca. 6,8 g pr. kg luft.** Ved en reel kølerafgang over 20 °C bliver mængden mindre.

## 19 · Emissioner
sider: 30, 31

### 19.1 Forklar, hvordan kulmonoxid (CO), kuldioxid (CO₂), svovloxider (SOₓ), kvælstofoxider (NOₓ), partikler (PM) og lattergas (N₂O) dannes under forbrændingen i en dieselmotor

| Stof | Dannelse |
|---|---|
| CO | Ufuldstændig forbrænding ved lokal iltmangel eller afkøling af flammen |
| CO₂ | Fuldstændig forbrænding af kulstof; følger brændstofforbruget |
| SOx | Brændstoffets svovl iltes til SO₂ og lidt SO₃ (med vand: svovlsyre) |
| NOx | Mest termisk NOx: luftens N₂ og O₂ reagerer over ca. 1500–1800 K (Zeldovich); lidt fra brændstofkvælstof |
| PM | Sod fra fede zoner, aske, sulfater og uforbrændt olie |
| N₂O | Små mængder ved forbrænding og i katalysatorer; især relevant ved ammoniak |

### 19.2 Hvilke primære metoder kan anvendes til at reducere de skadelige stoffer fra udstødningsgassen?

Primære metoder virker på selve forbrændingen: senere eller delt indsprøjtning, common rail, optimerede dyser, Miller-timing, vand i brændstof eller ladeluft, EGR, lavsvovl-brændstof, lavere cylinderolieforbrug, god vedligeholdelse og lavere last og fart.

Efterbehandling (sekundære metoder) er SCR, scrubber og partikelfilter.

### 19.3 Forklar detaljeret, hvordan udstødningsgasrecirkulation (EGR) og selektiv katalytisk reduktion (SCR) fungerer

**EGR:** En del af udstødsgassen (typisk op til 30–40 %) tages før turbinen, vaskes i en scrubber, køles, afvandes og trykkes med en blæser ind i ladeluften. Iltkoncentrationen falder, og gassens varmekapacitet øges. Derved sænkes flammetemperaturen og NOx (op til Tier III-niveau). Vaskevandet renses, tilsættes NaOH, og slam opsamles.

**SCR (Figur 1):** NH₃ (eller urea) pumpes fra tanken til doseringsenheden og indsprøjtes i røggassen før katalysatoren. NOx-analysatoren giver signal til styringen, som tilpasser doseringen. Trykluft sodblæser katalysatoren. Derefter følger kedel og lyddæmper.

```
4NO + 4NH₃ + O₂  →  4N₂ + 6H₂O
2NO₂ + 4NH₃ + O₂ →  3N₂ + 6H₂O
(NH₂)₂CO + H₂O   →  2NH₃ + CO₂        (urea bliver til ammoniak)
```

Typisk arbejdstemperatur er ca. 300–400 °C (afhængig af svovl). For lav temperatur giver ammoniumbisulfat, der tilstopper katalysatoren. Overdosering giver ammoniakslip. NOx kan reduceres ca. 80–90 %. På totaktsmotorer placeres den ofte før turbinen.

### 19.4 Hvilke alternative brændstoffer til motorer mener du kan reducere udledningen af disse forurenende stoffer? Begrund dit svar

| Brændstof | Fordele | Forbehold |
|---|---|---|
| LNG | Ca. 20–25 % mindre CO₂, næsten ingen SOx og PM, lavere NOx (Otto) | Metanslip |
| Metanol | Ingen svovl, lav PM og NOx; kan være CO₂-neutral (grøn) | Giftig, lavere energitæthed |
| Ammoniak | Ingen CO₂ eller sod fra brændstoffet | Giftig, NOx og N₂O, pilotolie |
| Brint | Ingen CO₂, SOx eller sod | Opbevaring, eksplosionsfare, NOx |
| Biobrændstof (HVO/FAME) | Lavt netto-CO₂, lavt svovl, drop-in | Tilgængelighed; FAME kan være ustabil; NOx |

Den samlede klimagevinst afhænger af, hvordan brændstoffet fremstilles.

### 19.5 Et brændstof indeholder 85 % C, 12 % H, 2 % S og 1 % fugt (masseprocent). (a) Hvor meget SO₂ og (b) hvor meget CO₂ dannes ved fuldstændig forbrænding af ét kg brændstof?

**a. SO₂** (M = 64, S = 32):

```
m_SO2 = 0,02 · 64/32 = 0,040 kg pr. kg brændstof
```

**b. CO₂** (M = 44, C = 12):

```
m_CO2 = 0,85 · 44/12 = 3,12 kg pr. kg brændstof
```

### 19.6 Beskriv hvordan man fjerner svovl fra røggassen. Brug eventuelt figur 8.9

Røggassen ledes op gennem en scrubber, mens vand sprøjtes ned i modstrøm og optager SO₂. Anlægget er en hybrid:

- **Åben kreds:** søvand pumpes til scrubberen. Vandets naturlige alkalitet neutraliserer syren, og det udledes efter overvågning (bl.a. pH, PAH og turbiditet).
- **Lukket kreds:** vand cirkulerer via cirkulationstank, pumpe og køler. Der doseres NaOH og ferskvand. En delstrøm renses i WCU; slam går til slamtank, og renset vand kan udledes.

```
SO₂ + 2NaOH → Na₂SO₃ + H₂O
```

Røggassen overvåges efter scrubberen.

## 20 · Dampsystemer
sider: 32

### 20.1 Beskriv vandets og dampens vej igennem dampanlægget på Figur 1

1. Kondensatpumpen sender kondensat til fødevandstanken.
2. Fødepumpen trykker vandet gennem economiseren i udstødskedlen til separeringsbeholderen i hjælpekedlen.
3. Cirkulationspumpen sender kedelvand gennem fordamperen; vand og damp returnerer til beholderen.
4. Mættet damp tages fra toppen. En trevejsventil fordeler den til forbrugere eller til overhederen.
5. Overhedet damp driver turbinen med generator.
6. Dampen kondenserer i den søvandskølede kondensator.

### 20.2 Beskriv hvordan du praktisk kan beregne røggastabet fra en oliefyret hjælpekedel

Mål brændstofflow, O₂ i røggassen, røggastemperatur og lufttemperatur. Find λ og røggasmængden:

```
λ ≈ 21 / (21 − O₂)              ṁ_røg = ṁ_bf · (1 + λ · L_min)

Φ_røg = ṁ_røg · cp · (t_røg − t_luft)

q_røg = Φ_røg / (ṁ_bf · hn) · 100 %
```

### 20.3 Beskriv hvorfor der ofte placeres en udstødskedel i et forbrændingsmotoranlæg, og giv eksempler på hvad udstødskedlen kan anvendes til

Udstødsgassen rummer ca. en fjerdedel af brændstofenergien. Genvinding sparer brændstof til hjælpekedlen og øger anlæggets samlede virkningsgrad.

Dampen bruges til forvarmning af brændstof, tanke og separatorer, opvarmning af apterering og varmt vand, lastopvarmning, ferskvandsproduktion og turbinegenerator. Kedlen dæmper også støj.

### 20.4 Beskriv hvordan du praktisk kan beregne kedelvirkningsgraden på en udstødskedel (Figur 2)

Nyttig effekt findes på vand- og dampsiden som summen af de tre hedeflader:

```
Φ_nytte = ṁf · (h_afg,eco − hf) + ṁ_ford · (hd − h_til,ford) + ṁ_oh · (h_afg,oh − h_til,oh)
```

Entalpierne slås op ud fra målt tryk og temperatur. Ved cirkulation skal afgangen fra fordamperen kendes (dampindhold), eller man bruger nettodampflowet.

```
ηk = Φ_nytte / (ṁ_røg · cp · (t_røg,ind − t_omg))

   ≈ (t_røg,ind − t_røg,ud) / (t_røg,ind − t_omg)
```

Den sidste form ser bort fra strålingstab. De mellemliggende temperaturer tx og ty viser fordelingen mellem economiser, fordamper og overheder.

### 20.5 Beskriv hvilke muligheder der findes til at regulere en udstødskedel

- Røggasspjæld, der leder gas uden om hedefladerne
- Ind- og udkobling af fordampersektioner
- Trevejsventiler om economiseren (Figur 2)
- Dumpning af overskudsdamp til kondensator via trykregulering
- Supplerende fyring i hjælpekedlen ved dampunderskud

Cirkulationen skal holdes i gang, og hedefladerne skal sodblæses for at undgå sodbrand.

## 21 · Hydraulik: ventiler og cylindre
sider: 33, 34

### 21.1 Figur 1 viser en processkitse af et simpelt hydraulikanlæg. Beskriv de enkelte komponenter og deres funktion i processen

| Komponent | Funktion |
|---|---|
| Tank | Opbevarer, køler, aflufter og bundfælder olien |
| Returfilter (og tankens luftfilter) | Renser returolien og luften til tanken |
| Pumpe | Leverer volumenstrømmen; trykket opstår ved belastningen |
| Trykbegrænsningsventil | Sikrer anlægget mod overtryk |
| Retningsventil (4/3) | Styrer cylinderens retning og stop |
| Drosselventil | Regulerer flowet og dermed hastigheden |
| Kontraventil | Fri strømning den ene vej uden om droslen |
| Dobbeltvirkende cylinder | Omdanner hydraulisk effekt til lineær bevægelse i begge retninger |

### 21.2 Figur 2 viser et symbol for en retningsventil. Fortæl hvordan retningsventilers funktion kan beskrives, og hvordan de kan aktiveres

Ventilen beskrives ved antal tilslutninger og stillinger: her **4/3** med P (pumpe), T (tank) og A/B (forbruger). Hver firkant er en stilling:

- **0 (midt):** alle porte lukkede, cylinderen holdes
- **I:** krydset forbindelse, P→B og A→T
- **II:** lige forbindelse, P→A og B→T

Fjedrene centrerer ventilen. Aktivering kan være manuel (håndtag, knap, pedal), mekanisk (rulle), pneumatisk, hydraulisk pilot, elektrisk (magnet) eller elektrohydraulisk.

### 21.3 Beskriv hvordan trykbegrænsningsventilen på Figur 1 indgår i anlægget, og beskriv hvilken effekt der afsættes i den

Den sidder parallelt med pumpen mellem trykledning og tank. Når trykket overstiger fjederindstillingen, åbner den og leder flow til tank, fx ved endestop eller drosling. Hele trykfaldet omdannes til varme:

```
P = Δp · Q_ventil              P [kW] = Δp [bar] · Q [l/min] / 600
```

### 21.4 Beskriv med udgangspunkt i Figur 3 hvordan en hydraulisk cylinder virker, og giv nogle eksempler på hvor de anvendes i praksis

Olie under tryk ledes ind på den ene side af stemplet, som bevæger sig, mens olien på den anden side løber retur. Cylinderrøret holdes mellem for- og baggavl af stagbolte.

Stempeltætningen adskiller kamrene, styr og bøsning støtter stangen, stangtætningen holder olien inde, og skraberingen holder snavs ude. Bremsetætning og bremseventil dæmper stemplet ved endestop.

**Anvendelse:** styremaskine, luger, kraner, ramper, ventilaktuatorer og stilbare propeller.

### 21.5 Beskriv hvordan du kan beregne stemplets kraft, hastighed og nødvendig volumenstrøm

```
A1 = π/4 · D²                  A2 = π/4 · (D² − d²)

F = (p1 · A1 − p2 · A2) · ηhm

v = Q · ηv / A                 Q = v · A / ηv
```

Formlerne gælder plusbevægelsen (stangen går ud). Ved indadgående bevægelse bytter siderne.

### 21.6 Beskriv hvordan den mekanisk/hydrauliske virkningsgrad og den volumetriske virkningsgrad beregnes, og hvad de udtrykker

```
ηhm = F_virkelig / F_teoretisk          ηv = v · A / Q_tilført

ηtot = ηhm · ηv = F · v / (Δp · Q)
```

- **ηhm** udtrykker tab af kraft til friktion i tætninger og styr samt trykmodstand.
- **ηv** udtrykker tab af flow til lækage.

## 22 · Trykventiler, mængderegulering og retningsventiler
sider: 35, 36

### 22.1 Beskriv anvendelsen af trykventiler i hydrauliksystemer

| Ventil | Anvendelse |
|---|---|
| Trykbegrænsning/sikkerhed | Begrænser maksimaltrykket |
| Reduktionsventil | Holder lavere tryk i en delkreds |
| Sekvensventil | Kobler næste funktion ind ved et bestemt tryk |
| Bremse-/modholdsventil | Holder en last og hindrer, at den løber løbsk |
| Aflastningsventil | Sætter pumpen trykløs, når flow ikke behøves |

### 22.2 Beskriv virkemåde og regulering af trykventiler

Olietrykkets kraft på kegle eller stempel balanceres af en fjeder (Figur 2a–2b). Når p · A overstiger fjederkraften, flytter ventilen sig. Indstillingen ændres med fjederforspændingen.

Med større flow skal ventilen åbne mere, fjederen presses mere sammen, og trykket stiger (Figur 2c). Pilotstyrede ventiler har fladere karakteristik og passer til store flows.

Begrænsningsventiler er normalt **lukkede** og føler **tilgangstrykket**. Reduktionsventiler er normalt **åbne** og føler **afgangstrykket**.

### 22.3 Beskriv funktionsprincip og anvendelse af mængdereguleringsventiler

```
Q = Cd · A · √(2 · Δp / ρ)
```

- **Drosselventil:** flowet afhænger af åbningsareal og trykfald og dermed af belastningen.
- **Trykkompenseret 2-vejs:** en kompensator holder Δp over droslen konstant, så flowet er uafhængigt af belastningen.
- **3-vejs (Fig. 7.6):** kompensatoren leder overskuddet til tank via BP. Balancen p1·A1 = p2·A2 + fjederkraft giver konstant Δp. Pumpen arbejder kun mod p2 + Δp, så tabet er mindre.

Anvendes til hastighedsstyring af cylindre og motorer.

### 22.4 Beskriv funktionsprincip og anvendelse af retningsventiler

En glider (eller et sæde) forbinder portene forskelligt i hver stilling. De bruges til start, stop og retningsskift. Typer er fx 2/2, 3/2, 4/2 og 4/3.

Midterstillingen kan være lukket (holder lasten), åben, tandem (pumpen trykløs) eller flydende. Proportionalventiler kan desuden dosere flowet.

### 22.5 I et hydraulikrør med indvendigt areal 0,008 m² reducerer en reduktionsventil trykket fra 500 bar til 480 bar. Olien strømmer med 1 m/s før ventilen. Beregn den effekt olien afsætter i ventilen i kW

```
Q = A · v = 0,008 · 1 = 0,008 m³/s

P = Δp · Q = 20·10⁵ · 0,008 = 16.000 W = 16 kW
```

## 23 · Hydraulikpumper
sider: 37, 38

### 23.1 Beskriv betydningen af at en hydraulikpumpe er en fortrængningspumpe/deplacementspumpe

Pumpen flytter et fast volumen pr. omdrejning. Flowet følger omdrejningstal og deplacement og er næsten uafhængigt af trykket (kun lækagen øges).

Trykket skabes af modstanden. Der skal derfor altid være en sikkerhedsventil, og man må ikke drosle til lukket uden den.

### 23.2 Beskriv hvordan du kan bestemme den volumetriske virkningsgrad ved forskellige tryk ved brug af Fig. 9.17 (datablad fra en Denison hydraulikpumpe)

Flowet ved 0 bar tages som teoretisk flow:

```
ηv = Qp / Q0 = (Qth − Qlæk) / Qth
```

Eksempel for den markerede pumpe T6C-010 (34,1 ml/omdr.):

| o/min | p (bar) | Q (l/min) | ηv |
|---|---|---|---|
| 1000 | 140 | 29,1 | 85,3 % |
| 1000 | 240 | 25,6 | 75,1 % |
| 1500 | 140 | 46,2 | 90,4 % |
| 1500 | 240 | 42,6 | 83,4 % |

Lækagen (ca. 5 l/min ved 140 bar og 8,5 l/min ved 240 bar) kan kontrolleres i kurven "Internal leakage". Den afhænger af tryk og viskositet, men næsten ikke af omdrejningstallet.

> **Usikker** Tallene er aflæst i databladet for T6C-010. Tjek at det er den pumpe, figuren markerer.

### 23.3 Beskriv hvordan du kan bestemme den hydrauliske effekt og den tilførte effekt ved forskellige tryk ved brug af Fig. 9.17

```
P_hyd = p · Q / 600  [kW]   (p i bar, Q i l/min)

ηtot = P_hyd / P_tilf          ηhm = ηtot / ηv
```

Den tilførte effekt aflæses direkte i databladets højre kolonner.

| o/min | p (bar) | P_hyd (kW) | P_tilf (kW) | ηtot | ηhm |
|---|---|---|---|---|---|
| 1000 | 140 | 6,8 | 8,9 | 76 % | 89 % |
| 1000 | 240 | 10,2 | 15,1 | 68 % | 90 % |
| 1500 | 140 | 10,8 | 13,4 | 80 % | 89 % |
| 1500 | 240 | 17,0 | 22,3 | 76 % | 92 % |

### 23.4 Beskriv ved brug af Figur 3 og Figur 4 hvordan et hydraulikanlæg med load sensing (LS) fungerer, og hvordan det påvirker pumpens tilførte effekt

En variabel pumpe får besked om belastningstrykket p2 via LS-ledningen efter droslen. LS-ventilen (med fjeder) justerer deplacementet, så pumpetrykket er p2 + Δp. Dermed er trykfaldet over droslen konstant, og pumpen leverer netop det flow V2, som droslen er åbnet til. En trykbegrænsningsventil på LS-ledningen sætter maksimaltrykket.

```
P_LS = V2 · (p2 + Δp)          P_nytte = V2 · p2          P_tab = V2 · Δp
```

Et anlæg med fast pumpe og overstrømningsventil bruger V1 · p1 (den stiplede firkant i Figur 4). LS reducerer den tilførte effekt og varmeudviklingen kraftigt, især ved dellast. Pumpens akseleffekt er P_LS divideret med virkningsgraden.

## 24 · Hydraulikmotorer
sider: 39, 40

### 24.1 Beskriv hvad der kendetegner en hydraulisk deplacementsmotor (Fig. 1)

Den optager et bestemt olievolumen pr. omdrejning. **Hastigheden bestemmes af flowet, og momentet af trykfaldet.**

Fig. 10.11 viser en aksialstempelmotor med skrå akse (bent axis): stemplerne i den vinklede cylinderblok driver udgangsakslen, og vinklen kan justeres af en reguleringsenhed, så deplacementet er variabelt.

```
n = Q · ηv / D          M = Δp · D / (2π) · ηhm
```

### 24.2 Beskriv hvordan hydraulikmotoren kan reguleres

- **Flow:** variabel pumpe, flowventil eller bypass ændrer hastigheden.
- **Deplacement:** mindre vinkel og D giver højere hastighed og lavere moment.
- **Tryk:** trykventil begrænser momentet.
- **Retning og bremsning:** retningsventil og modholdsventil.

### 24.3 Hvilke parametre beskriver den volumetriske virkningsgrad for en hydraulikmotor, og hvordan opstår de fysiske størrelser, der beskriver den? Brug Figur 2

```
ηv = V_th / V_e = D · n / (V_th + V_læk)
```

V_th (den stiplede linje) er det volumen, deplacement og omdrejningstal kræver. V_e er det faktisk tilførte flow. Forskellen er lækage gennem spalter ved stempler, fordelerplade og lejer til drænet. Den vokser med trykket og med lavere viskositet.

### 24.4 Forklar hvordan et muslingediagram for en hydraulikmotor anvendes (Figur 3)

Akserne er omdrejningstal og moment (daNm). Diagrammet har kurver for trykfald, flow, afgiven effekt og total virkningsgrad ("muslingerne"). Kendes to størrelser, aflæses de øvrige.

Det bruges til at vælge motor og driftspunkt med høj virkningsgrad. Område A er kontinuerlig drift, B kun intermitterende. Over 100 bar og over 60 l/min må ikke forekomme samtidig.

### 24.5 Hvis motoren kører med 250 o/min ved et tryk på 80 bar, hvilke parametre kan aflæses og beregnes?

| Størrelse | Værdi |
|---|---|
| Moment | ca. 17 daNm = 170 Nm |
| Flow | ca. 50 l/min |
| Total virkningsgrad (kurverne) | lidt over 70 % |
| Område | A, kontinuerlig drift |

```
P_ud = M · 2π · n / 60 = 170 · 26,2 ≈ 4,5 kW

P_ind = 80 · 50 / 600 = 6,7 kW          ηtot = 4,5 / 6,7 ≈ 67 %
```

Forskellen mellem 67 % og kurvernes ca. 70 % kan skyldes aflæsningsusikkerheden.

> **Usikker** Alle værdier er aflæst på diagrammet og er omtrentlige.

### 24.6 Beskriv ud fra diagrammet Fig. 10.3, hvordan den volumetriske virkningsgrad for motoren kan bestemmes/beregnes

Brug deplacementet D ≈ 198 cm³/omdr. for OMP 200. Aflæs sammenhørende n og Q:

```
ηv = D · n / Q = 0,198 · 250 / 50 ≈ 0,99
```

Følger man flowlinjen 50 l/min fra lavt til højt tryk, falder omdrejningstallet. Ved 100 bar (ca. 242 o/min) fås ca. 96 %.

> **Usikker** Deplacementet er en katalogværdi og står ikke i diagrammet. Aflæsningen er følsom: nogle få o/min ændrer resultatet et par procentpoint.

## 25 · Omdrejningshastighedsregulering af dieselmotorer
sider: 41, 42

### 25.1 Beskriv reguleringsprincip generelt og for dieselmotorer. Tag udgangspunkt i Figur 1 og 2

Regulering er en lukket sløjfe: mål, sammenlign med ønsket værdi, korriger med et stelorgan.

**Figur 1:** niveauet W er den regulerede størrelse, og afløbet B er forstyrrelsen. Når afløbet øges, synker niveauet og svømmeren (X). Vægtstangen drejer om Y, Z løftes, og tilførslen A åbnes mere. Ligevægten findes ved et lidt lavere niveau (blivende afvigelse).

**Figur 2:** en hydraulisk regulator. Svængklodserne (12), drevet af motoren, måler omdrejningstallet. Fjederen (11) giver den ønskede værdi.

Ved stigende belastning falder omdrejningstallet. Svængklodserne klapper ind, og punkt 1 går ned. Punkt 2 og styreglideren (13) følger med. Trykolie (4) ledes under kraftstemplet (6), og olien ovenover løber til afløb (5). Stemplet går op og giver mere brændstof (7). Samtidig løfter punkt 3 armen (14), så glideren føres tilbage til midterstilling (tilbageføring). Ved faldende belastning sker det modsatte.

### 25.2 Beskriv begrebet statik (Figur 3)

Statik (droop) er det blivende fald i omdrejningstal fra tomgang til fuld last:

```
δ = (n_tomgang − n_fuldlast) / n_nom · 100 %
```

Typisk 3–5 %. Isokron regulering (0 %) holder konstant omdrejningstal.

Statik giver stabilitet og stabil lastfordeling mellem parallelkoblede generatorer. Lasten flyttes ved at ændre omdrejningsindstillingen (fjederspændingen), som parallelforskyder droop-linjen.

### 25.3 En dieselmotor driver en generator, der er parallelkoblet på et elnet. Motoren tilfører generatoren 1800 kW ved et effektivt middeltryk på 18 bar. Brændstoftilførslen reduceres, så belastningen falder til 1500 kW. Beregn det effektive middeltryk

Nettet fastholder omdrejningstallet. Da Pe = pe · Vs · n · z · i, er pe proportional med effekten:

```
pe2 = 18 · 1500 / 1800 = 15 bar
```

## 26 · Common rail i dieselmotor
sider: 43

### 26.1 Forklar, hvad et common rail-system er, og hvordan det fungerer i en dieselmotor

Trykdannelse og indsprøjtningsstyring er adskilt. Højtrykspumper holder brændstof under konstant, reguleret tryk i et fælles rør (rail, ofte 1000–2000 bar). Elektronisk styrede ventiler bestemmer, hvornår og hvor længe hver dyse får brændstof.

På figuren (MAN 32/44CR) driver knastakslen pumperne, og rail-enhederne er forbundet i serie.

### 26.2 Hvilke fordele har motorens common rail-system?

- Indsprøjtningstryk uafhængigt af omdrejningstal og last, god forstøvning også ved lav last
- Frit valg af tidspunkt og varighed, evt. flere indsprøjtninger
- Mindre røg, lavere forbrug og bedre afvejning mod NOx
- Jævnere last mellem cylindre, enklere tilpasning og diagnostik

### 26.3 Beskriv brændstoffets vej gennem brændstofsystemet i en motor med common rail-system

1. Servicetank → føde- og cirkulationspumpe → forvarmer, viskosimeter og filter
2. Indløb → regulerbar drosselventil → sugeventil
3. Højtrykspumpe → trykventil (kontraventil) → rail-enheder
4. Styreventil → indsprøjtningsventil → cylinder
5. Læk- og styreolie → retur til brændstofsystemet

En trykbegrænsningsventil sikrer railen, og en skylleventil tillader cirkulation af varmt brændstof før start (HFO) og trykaflastning.

### 26.4 Forklar forskellen mellem et common rail-system og et traditionelt mekanisk styret indsprøjtningssystem

| | Mekanisk | Common rail |
|---|---|---|
| Pumpe | En pr. cylinder, doserer og timer | Fælles trykforsyning |
| Tryk | Afhænger af omdrejningstal og last | Frit reguleret |
| Timing | Knast og skråkant (evt. VIT) | Elektronisk |
| Mængde | Pumpestemplets drejning | Ventilens åbningstid og railtryk |

### 26.5 Hvilke sensorsignaler bruger et common rail-system til at styre brændstofindsprøjtningen, og hvilken funktion har hvert af disse signaler?

| Signal | Funktion |
|---|---|
| Krumtapposition og omdrejninger | Timing og hastighedsregulering |
| Knastposition | Finder cylinder og arbejdstakt |
| Railtryk | Regulerer drosselventilen; indgår i dosering |
| Belastning og ønsket omdrejningstal | Brændstofmængde |
| Ladelufttryk og -temperatur | Røgbegrænsning og timing |
| Brændstoftemperatur og viskositet | Korrektion af mængde |
| Kølevand, smøreolie, udstødning | Korrektioner og beskyttelse |

### 26.6 Betyder et højere railtryk i et common rail-system altid bedre?

**Nej.** Højere tryk giver finere forstøvning, hurtigere forbrænding og mindre sod. Men det kan give mere NOx, højere maksimaltryk, større pumpeeffekt, mere slid og lækage samt brændstof på cylindervæggene ved lavt lufttryk. Det optimale tryk afhænger af driftspunktet.

## 27 · Starteluftsystem og motorstart
sider: 44, 45

### 27.1 Aflæs lufttrykket i alle startluftbeholdere

| Beholder | Tryk |
|---|---|
| Start 1 (12 m³) | 25,32 bar |
| Start 2 (12 m³) | 27,11 bar |
| Nødstartbeholder (4 m³) | 29,95 bar |

"Figur 1" og "Figur 2" i spørgsmålene er figurerne mærket 6 (startluft) og 7 (manøvresystem).

### 27.2 Kontrollér ud fra figuren om motoren er klar til start

Luftsiden ser klar ud:

- Start 1 er åben til hovedmotoren med 25,25 bar, og begge kompressorer lader den (134,5 + 134,5 ≈ 269)
- Styreluften er 7,10 bar
- Start 2 er lukket af og står med 27,11 bar som reserve
- Alle drænventiler er lukkede

Trykket er under de ca. 30 bar fulde tryk, men stiger. Dræn kondensat før start. Manøvresystemet skal også kontrolleres: torneværk udkoblet, blokeringsventiler åbne og luft til stede.

> **Usikker** Ventilstillingerne er tolket ud fra farven: grå = åben, sort = lukket.

### 27.3 Hvad er formålet med håndpumpen (hand pump) omtrent midt på figuren?

Den er forbundet til nødstartbeholderen. Man kan dermed manuelt opbygge eller supplere trykket uden elektricitet (dødt skib), så en hjælpemotor kan startes. I figuren er den slukket, og ventilen er lukket.

### 27.4 Forklar hvorfor der er drænledninger (Drain) forskellige steder i systemet, og aflæs om der er flow i nogen af drænene

Fugt kondenserer efter kompression og køling, og der kan følge olie med. Kondensatet skal ud ved mellemkølere, efterkølere, rør og beholdere for at undgå korrosion, vandslag, ventilfejl, mindre beholdervolumen og brand eller eksplosion fra olie.

**Alle dræn viser G 0,00, så der er intet flow.**

> **Usikker** Z-værdierne (fx 10,99 og 5,00) kan tyde på opsamlet kondensat. Det er en tolkning.

### 27.5 Forklar princippet for start af en 5L90MC hovedmotor. Brug Figur 2

1. **Forudsætninger:** torneværk udkoblet (spærreventil 5), blokeringsventiler åbne, styre-, sikkerheds- og startluft til stede. Efter længere stilstand slow turning (2).
2. Ahead/astern vælges. Omstyringsmekanismen (6) og startluftfordeleren stilles.
3. **Startordre:** styreluft åbner hovedstartventilen (1), og startluft fylder manifolden.
4. Fordeleren sender pilotluft til startventilen på den cylinder, der netop har passeret topdødpunktet.
5. Ventilen åbner, luften driver stemplet ned, og cylindrene følger i tændingsrækkefølge.
6. Ved startomdrejningstallet lukkes luften, og brændstof frigives (punkteringsventilerne aflastes).

### 27.6 Forklar hvorfor der er tilførsel af luft fra to separate systemer til startluftventilerne

**Hovedluften** (ca. 30 bar, stort rør) udfører arbejdet på stemplet. **Pilotluften** (tynde ledninger via fordeleren) åbner og lukker blot ventilen.

Dermed kan en lille fordeler styre store ventiler hurtigt og præcist, og store luftmængder gives kun til den rigtige cylinder. Manøvrelogikken forsynes desuden af styreluft (7 bar).

### 27.7 Forklar hvordan sekvens og varighed af tilførslen af startluft til de forskellige cylindre styres, og angiv navnet på den styrende komponent

De styres af **startluftfordeleren**, der drives synkront med motoren (knastakslen). Knastskiven aktiverer pilotventilerne i tændingsrækkefølgen, og knastprofilen bestemmer varigheden.

Der åbnes omkring TDP og lukkes før udstødsventilen åbner. For en 5-cylindret totakter skal åbningen være over 360/5 = 72°, så motoren kan starte fra enhver stilling.

### 27.8 Forklar sammenhængen mellem manøvresystemet (Figur 2) og starteluftsystemet (Figur 1)

Startluftsystemet leverer to forsyninger: **startluft** (udgang 020, 25 bar) til hovedstartventilen og **styreluft** (udgang 018, 7,1 bar) til manøvresystemet.

Manøvresystemet bestemmer via sine ventiler og sikringer, hvornår startluften må komme til cylindrene. Tallene afviger lidt mellem figurerne, da de viser forskellige tidspunkter.

## 28 · DTU-dieselmotor
sider: 46, 47

### 28.1 Beskriv definitionen af et brændstofs flammepunkt

Den laveste temperatur, korrigeret til 101,3 kPa, hvor brændstoffets dampe kort kan antændes af en ydre tændkilde under standardiserede forhold. For brændstof i skibe kræver SOLAS normalt mindst 60 °C.

### 28.2 Forklar, hvordan PME-apparatet (Pensky-Martens lukket kop) bruges til at bestemme GTL-brændstoffets flammepunkt

1. Rengør og tør koppen, og fyld GTL til mærket.
2. Sæt låg, termometer og omrører på.
3. Opvarm jævnt (typisk 5–6 °C/min) under omrøring.
4. Fra ca. 23 °C under forventet flammepunkt føres prøveflammen ned i koppen for hver 1 °C (2 °C ved flammepunkt over 110 °C). Omrøringen stoppes imens.
5. Temperaturen ved første tydelige opblusning aflæses.
6. Korriger for lufttrykket:

```
Tk = T_målt + 0,25 · (101,3 − p [kPa])
```

### 28.3 Forklar, hvilke driftsparametre der skal kontrolleres på motorens operationspanel før start, og hvorfor

| Parameter | Hvorfor |
|---|---|
| Startlufttryk | Nok energi til start |
| Smøreolietryk og -temperatur (forsmøring), også til turbolader | Undgå lejeskader |
| HT-vandtryk og -temperatur (forvarmet) | Mindre termisk spænding og koldkorrosion |
| LT-vandtryk og -temperatur | Køling af ladeluft og smøreolie |
| Brændstoftryk og -temperatur | Korrekt viskositet og forsyning |
| Alarmer og nødstop | Ingen aktive blokeringer; lampetest |
| Local/remote | Korrekt betjeningssted |
| Omdrejninger (motor og turbo) | 0 før start |

### 28.4 Forklar ud fra figuren, hvilke motorkomponenter der køles af generatorsættets HT- og LT-kreds, og beskriv kølevandets strømning gennem begge kredse

"Figur 1–3" i spørgsmålet svarer til figurerne mærket 8–10.

**HT:** pumpe → HT-trin i ladeluftkøleren → cylinderforinger/kølekappe → cylinderdæksel → termostatventil (80 °C). Ventilen sender vandet tilbage til pumpen eller ud af kredsen.

**LT:** pumpe → LT-trin i ladeluftkøleren → smøreoliekøler → termostatventil (40 °C) → recirkulation eller afgang.

Koldt vand tilføres udefra til begge pumpers sugeside, og det varme vand går retur i en fælles ledning.

### 28.5 Beskriv fordele og ulemper ved at måle motorparametre med generatorsættets sensorbaserede målesystem sammenlignet med en mekanisk indikator

| | Fordele | Ulemper |
|---|---|---|
| Sensorbaseret | Kontinuerlig måling, logning, alarmer, mange parametre, ingen manuel håndtering | Pris, kalibrering, fejl i elektronik; viser kun cylindertryk, hvis der er tryktransducere |
| Mekanisk indikator | Enkel, billig, uafhængig af strøm, direkte pV-diagram | Manuel, én cylinder ad gangen, øjebliksbillede, unøjagtig ved høje omdrejninger (inerti), planimetrering |

## 29 · Simulatorøvelse C
sider: 48, 42

### 29.1 Beskriv hvordan du praktisk kan beregne effekt, der fjernes fra motorens smøreolie (hvilke formler og værdier på figuren)

Grundformel (G i t/h divideres med 3,6 for kg/s):

```
Φ = ṁ · c · ΔT
```

Smøreolie: flow 19,88 t/h, olie ind 48,99 °C, bundkar 54,73 °C.

```
Φ_LO = 19,88/3,6 · 2,0 · (54,73 − 48,99) = 63 kW
```

Kontrol på vandsiden (16,01 t/h; 36,14 → 39,69 °C) giver 66 kW, altså god overensstemmelse.

> **Usikker** Figuren til spørgsmålet viser en stoppet motor (0 kW, 0 o/min, forvarmning), så tabene kan ikke beregnes ud fra den. Tallene her er fra skærmbilledet af hjælpemotoren i drift (side 42, under Figur 3 til spørgsmål 25). Antaget: c_olie = 2,0 og c_vand = 4,18 kJ/(kg·K).

### 29.2 Beskriv hvordan motorens køling af cylindre praktisk kan beregnes (hvilke formler og værdier på figuren)

Cylinderkøling (HT): flow 30,56 t/h, ind 78,46 °C, ud 82,63 °C.

```
Φ_cyl = 30,56/3,6 · 4,18 · (82,63 − 78,46) = 148 kW
```

### 29.3 Beskriv hvordan motorens køling af skylleluft praktisk kan beregnes (hvilke formler og værdier på figuren)

LT-flow 6,17 + 17,84 t/h (køler og bypass), 36,14 → 37,07 °C. HT-trinnet afgiver varme til luften (82,63 → 82,15 °C), som trækkes fra.

```
Φ_LT = 24,01/3,6 · 4,18 · 0,93 = 25,9 kW

Φ_HT = 30,56/3,6 · 4,18 · 0,48 = 17,0 kW

Φ_luft = 25,9 − 17,0 = 8,9 kW
```

Luftsiden (1813,7 kg/h; 68,72 → 62,34 °C) giver kun ca. 3 kW.

> **Usikker** De små temperaturforskelle gør tallet usikkert.

### 29.4 Beskriv hvordan du praktisk kan beregne røggastabet (hvilke formler og værdier på figuren)

Luft 1813,7 + brændstof 63,2 kg/h = 0,521 kg/s. Røggas efter turbolader 298,17 °C. Antaget cp,røg = 1,1 kJ/(kg·K) og omgivelser 25 °C.

```
Φ_røg = 0,521 · 1,1 · (298,17 − 25) = 157 kW
```

### 29.5 Beskriv hvordan du praktisk kan beregne udstrålingstabet fra motoren

Det findes som rest i energibalancen. Resten indeholder også generatortab og målefejl. Antaget Hi = 42.700 kJ/kg.

```
Φ_br = 63,2/3600 · 42.700 = 750 kW

Φ_rest = 750 − 275 − 157 − 148 − 63 − 9 = 98 kW
```

### 29.6 Skitser et Sankeydiagram for hjælpemotorsystemet på figuren

| Post | kW | % |
|---|---|---|
| Tilført med brændstof | 750 | 100 |
| Elektrisk effekt | 275 | 36,7 |
| Røggas | 157 | 20,9 |
| Cylinderkøling | 148 | 19,7 |
| Smøreolie | 63 | 8,5 |
| Ladeluftkøling | 9 | 1,2 |
| Udstråling, generator og rest | 98 | 13,1 |

![Sankeydiagram for hjælpemotoren](eksamen2026/sankey-29.jpg){.lys}

### 29.7 Vis hvordan du vil beregne hjælpemotorens totale virkningsgrad (økonomiske virkningsgrad)

```
η = P / (ṁ_br · Hi) = 275 / 750 = 36,7 %
```

Det er generatorsættets virkningsgrad (elektrisk effekt). Motorens egen findes med akseleffekten P / η_generator.

Specifikt forbrug: 63.200 g/h / 274,87 kW ≈ 230 g/kWh.

## 30 · Brændstofpumpe og -ventil
sider: 49, 50

### 30.1 Beskriv brændstofpumpens opbygning, virkemåde og regulering af brændstofmængde. Brug figurerne 2 og 3

"Figur 1, 2 og 3" i spørgsmålene svarer til figurerne mærket 11, 12 og 13.

Pumpen (Figur 12) består af pumpecylinder med porte, stempel med skråkant og længdenot, trykventil, reguleringsstang (5), reguleringsbøsning (6), returfjeder (8) og rullestøder på knasten. Knasten giver et fast slag, og fjederen fører stemplet tilbage.

Positionerne i Figur 13:

1. **Fyldning:** stemplet er nede, og brændstof strømmer ind.
2. **Fødning:** stemplet har lukket portene, trykket stiger, og der leveres.
3. **Afslutning:** skråkanten frigør spildporten, og trykket falder.
4. **Fuld last:** lang effektiv slaglængde.
5. **Dellast:** kort effektiv slaglængde.
6. **Stop:** noten står ud for porten, så der ikke leveres.

Mængden reguleres ved at dreje stemplet med reguleringsstangen. Slaglængden er uændret, men den effektive slaglængde ændres.

> **Usikker** Komponentnumrene er tolket ud fra tegningerne.

### 30.2 Forklar hvordan brændstofpumpen kan regulere indsprøjtningstidspunktet. Brug Figur 1

VIT-indekset hæver eller sænker pumpeforingen via et gevind. Hæves foringen, lukker stemplet portene senere, og indsprøjtningen begynder senere. Sænkes den, begynder den tidligere.

Brændstofindekset drejer fortsat stemplet og styrer mængden. VIT bruges til at holde højt maksimaltryk ved dellast (typisk omkring 75–85 % last) og dermed spare brændstof.

### 30.3 Beskriv brændstofventilens arbejdsprincip. Brug Figur 4

Brændstoffet går gennem tilgangen med stavfilter (11–12) og en boring til rummet ved nålens koniske skulder. Når trykkraften overstiger fjederkraften, løftes nålen, og brændstoffet forstøves gennem dysehullerne. Arealet vokser ved løft, så åbningen sker hurtigt.

Når pumpen aflaster, lukker fjederen nålen skarpt. Åbningstrykket indstilles med skruen over fjederen. Lækolie ledes bort (13), og ventilen (14) bruges til udluftning.

> **Usikker** Komponentnumrene er tolket ud fra tegningen.

### 30.4 Beskriv årsager til at overskydende brændstof ledes tilbage til servicetanken

- Pumperne forsynes med et overskud og er altid fyldte med stabilt tryk
- Cirkulationen holder temperatur og viskositet, også ved stop (HFO størkner ikke)
- Luft og gas føres væk, og dampdannelse undgås
- Pumper og ventiler køles eller holdes jævnt varme
- Ubrugt brændstof genbruges

I mange anlæg går returen til en blande- og udluftningstank frem for direkte til servicetanken.

### 30.5 En 4-takt 6-cylindret dieselmotor får 1 g brændstof pr. indsprøjtning pr. cylinder. Krumtapakslen roterer med 720 o/min, og det indicerede middeltryk er 22 bar. Bestem motorens brændstofforbrug i kg/s, og beskriv fremgangsmåden

En firetakter indsprøjter én gang pr. to omdrejninger:

```
f = 720 / (60 · 2) = 6 indsprøjtninger/s pr. cylinder

ṁ = 6 · 6 · 0,001 = 0,036 kg/s   (129,6 kg/h)
```

Det indicerede middeltryk (22 bar) skal ikke bruges til forbruget.
