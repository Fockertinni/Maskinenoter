id: budget
navn: Budgettering
ikon: budget
intro: Resultat-, likviditets- og balancebudget. Budgetprocessen, regneregler og den indirekte metode til likviditetsbudgettet med et fuldt gennemregnet eksempel.
---
# Noter

> **Pensum**
> Lærebog kap. 8 · Lektion 7–9 · Eksamensvægt: **meget høj** (35 % i E2025)

Budgettet er virksomhedens handlingsplan i tal. Der er tre sammenhængende budgetter:

| Budget | Viser | Spørgsmål |
|---|---|---|
| **Resultatbudget** | Indtægter og omkostninger | Tjener vi penge? |
| **Likviditetsbudget** | Ind- og udbetalinger | Kan vi betale regningerne? |
| **Balancebudget** | Aktiver og passiver ultimo | Hvad er virksomheden værd? |

Regnskabsåret er altid 12 måneder, men skæringsdatoen kan variere.

## Budgetprocessen (figur 8.1 og 8.3)

- **Passiv budgetfase:** udgangspunktet er sidste års (forventede) resultatopgørelse. Den justeres for allerede besluttede eller ydre ændringer (prisstigninger, løn, inflation, efterspørgsel) og giver et **foreløbigt resultatbudget**.
- **Aktiv budgetfase:** nye handlingsalternativer vurderes med alternativkalkuler (ny pris, kampagne, nyt produkt, investering). Lønsomme alternativer tages med i det endelige budget.
- **Budgetkontrol:** regnskabet sammenlignes med budgettet. Afvigelserne beregnes i både kr. og %, og årsagerne bruges til at forbedre fremtidige planer og budgetter.

> **Til eksamen**
> "Hvilken fase er virksomheden i?" Er der *ingen nye alternativer*, er det den **passive** fase.

## Regneregler i budgetopgaver

- Omsætning = gl. omsætning · (1 + prisændring) · (1 + afsætningsændring).
- Variable omkostninger = gl. VO · (1 + kostprisændring) · (1 + afsætningsændring).
- **Salgsprovision er altid en % af omsætningen.** Den følger derfor både pris og mængde.
- Lønstigninger påvirker *timelønnen*. Afsætningsændringen påvirker *antal timer*. Begge ganges på.
- Nyt aktiv: afskrivning = (pris − scrap) / levetid lægges oven i de gamle afskrivninger.

## Likviditetsbudget, indirekte metode

Pensum bruger beholdningsforskydningsmodellen: man starter med indtjeningsbidraget og retter for de penge, der bindes eller frigøres i lager, debitorer og kreditorer.

> **Huskeregel**
> Mere bundet i aktiver = minus. Mere gæld til andre = plus.

Afskrivninger er ikke en betaling, så de indgår ikke. Derfor starter man fra IB (før afskrivninger). Renter er en betaling og trækkes fra under driften.

Er likviditeten for lav, kan man øge indtjeningen, give kunderne kortere kredit, øge lagerets omsætningshastighed, få længere kredit hos leverandørerne, udskyde omkostninger eller øge kassekreditten.

## Balancebudget: sådan findes posterne

- Anlægsaktiver ultimo = primo + anskaffelser − afskrivninger.
- Varelager, debitorer og kreditorer: fra beregningerne til likviditetsbudgettet.
- Likvid beholdning: virksomhedens krav (står i opgaven).
- Egenkapital ultimo = primo + årets resultat − privatforbrug eller udbytte.
- Lån ultimo = primo − afdrag.
- **Kassekredit ultimo = kassekredit-maks. − likviditetsreserve ultimo + likvid beholdning ultimo.**
- Kontrol: Aktiver = Passiver. Hvis ikke, ligger fejlen næsten altid i likviditetsbudgettet.

<div class="genkald" markdown="1">
### Test dig selv

1. Opstil resultatbudgettets trappe fra hukommelsen.
2. Hvorfor trækkes renter under drift, mens afskrivninger *ikke* indgår i likviditetsbudgettet?
3. Varedebitorerne stiger med 500. Hvad sker der med likviditeten, og hvorfor?

<details markdown="1"><summary>Svar</summary>

1. Se formelsiden: Omsætning − VO = DB − salgsfremmende = MFB − kontante KO = IB − afskrivninger = resultat før renter − renter = resultat før skat − skat = årets resultat.
2. Renter betales. Afskrivninger er en beregnet omkostning uden betaling. Pengene gik ud, da aktivet blev købt.
3. Likviditeten falder med 500, fordi flere penge er bundet hos kunderne, som endnu ikke har betalt.
</details>
</div>

# Formler

### Resultatbudgettets trappe
```
  Omsætning
– Variable omkostninger (VO, inkl. salgsprovision)
= Dækningsbidrag (DB)                    [handel: bruttofortjeneste]
– Salgsfremmende omkostninger (reklame)
= Markedsføringsbidrag (MFB)
– Kontante kapacitetsomkostninger
= Indtjeningsbidrag (IB)
– Afskrivninger
= Resultat før renter
– Renteomkostninger
= Resultat før skat
– Skat (22 %)
= Årets resultat  → udbytte / overført overskud / privatforbrug
```

### Likviditetsbudget (indirekte metode)
```
DRIFTENS LIKVIDITETSVIRKNING
  Indtjeningsbidrag                            +
  Δ Varelager       (primo – ultimo)           + hvis lageret falder
  Δ Varedebitorer   (primo – ultimo)           + hvis debitorerne falder
  Δ Varekreditorer  (ultimo – primo)           + hvis kreditorerne stiger
  Δ Anden kortfristet gæld (ultimo – primo)
  Renteomkostninger                            –
  Skat betalt i året / restskat                –
= Driftens likviditetsvirkning
INVESTERINGERNES LIKVIDITETSVIRKNING
  Køb af anlægsaktiver                         –   (salg +)
FINANSIERINGENS LIKVIDITETSVIRKNING
  Afdrag på lån / nedsat kassekreditmaks.      –
  Nye lån                                      +
  Privatforbrug / udbytte                      –
= SAMLET LIKVIDITETSVIRKNING
+ Likvid beholdning primo
+ Disponibel kassekredit primo (maks. – træk)
= Budgetteret likviditetsreserve ultimo
```

### Omsætningshastigheder og ultimobeholdninger (360 dage)
```
Debitorers oms.hast.   = 360 / kredittid (dage)
Kreditorers oms.hast.  = 360 / skyldtid (dage)

Varelager ultimo  = Vareforbrug / lagerets oms.hast.
                    (produktionsvirksomhed: samlede variable prod.omk.)
Debitorer ultimo  = Omsætning / debitorers oms.hast.
Varekøb           = Vareforbrug + Lager ultimo – Lager primo
Kreditorer ultimo = Varekøb / kreditorers oms.hast.
```

### Nøgletal
```
Dækningsgrad          = DB / Omsætning · 100
Bruttoavanceprocent   = Bruttofortjeneste / Omsætning · 100
Overskudsgrad         = Resultat før renter / Omsætning · 100
Aktivernes oms.hast.  = Omsætning / Aktiver
Afkastningsgrad       = Resultat før renter / Aktiver · 100   (= OG · AOH)
Egenkapitalens forr.  = Årets resultat / Egenkapital · 100
```

## Eksempel: opgave 8.8, BoDesign (handelsvirksomhed, i 1.000 kr.)

Sidste år: omsætning 6.400, vareforbrug 4.900. Næste år: priserne stiger 8 %, indkøbspriserne 6 %, og mængden 5 %. KO 440, afskrivninger 280, renter 360. Lagerets oms.hast. 3, kunderne får 45 dages kredit, leverandørerne giver 90 dage. Primo: lager 2.040, debitorer 900, kreditorer 1.380, likvider 40, kassekredit maks. 2.000 med træk 1.400. Investering 790, privatforbrug 600.

Regn resultatbudgettet først, så ultimobeholdningerne og til sidst likviditeten.

<details markdown="1"><summary>Vis resultatbudget</summary>

Omsætning 6.400 · 1,08 · 1,05 = **7.258**. Vareforbrug 4.900 · 1,06 · 1,05 = **5.454**. Bruttofortjeneste 1.804. KO 440. **IB 1.364.** Afskrivninger 280. Renter 360. **Resultat 724.**
</details>

<details markdown="1"><summary>Vis ultimobeholdninger</summary>

Lager = 5.454 / 3 = 1.818. Debitorer = 7.258 / (360/45) = 907. Varekøb = 5.454 + 1.818 − 2.040 = 5.232. Kreditorer = 5.232 / (360/90) = 1.308.
</details>

<details markdown="1"><summary>Vis likviditetsbudget og balance</summary>

IB +1.364, lager +222 (2.040 − 1.818), debitorer −7 (900 − 907), kreditorer −72 (1.308 − 1.380), renter −360 → drift **+1.147**.
Investering −790, privatforbrug −600 → samlet **−243**.
Plus likvider primo 40 og disponibel kassekredit 600 → **likviditetsreserve 397**.

Balance: Inventar 1.520 + 790 − 280 = 2.030. EK 1.390 − 600 + 724 = 1.514. Kassekredit 2.000 − 397 + 40 = 1.643. Total **4.795 = 4.795** ✓
</details>

# Quiz

Q: Virksomheden justerer sidste års tal for kendte prisstigninger, men vurderer ingen nye tiltag. Hvilken budgetfase er det?
R: Den passive budgetfase
A: Den aktive budgetfase
A: Budgetkontrol
A: Den strategiske fase
F: Ingen nye handlingsalternativer = passiv fase. Den aktive fase vurderer nye alternativer med alternativkalkuler.

Q: Hvad står mellem MFB og IB i resultatbudgettets trappe?
A: Afskrivninger
R: Kontante kapacitetsomkostninger
A: Renter
A: Salgsfremmende omkostninger
F: Omsætning − VO = DB − salgsfremmende = MFB − kontante KO = IB − afskrivninger = resultat før renter.

Q: Omsætningen var 6.400 (1.000 kr.). Priserne stiger 8 %, og mængden stiger 5 %. Hvad er den budgetterede omsætning? (1.000 kr., afrund til hele tal)
N: 7258 ; 1 ; 1.000 kr.
L: 6.400 · 1,08 · 1,05 = 7.257,6 ≈ 7.258.
F: Pris og mængde ganges på hver for sig. At lægge procenterne sammen (13 %) giver en lille fejl.

Q: Omsætningen er 7.258 (1.000 kr.), og kunderne får 45 dages kredit. Hvad er debitorerne ultimo? (1.000 kr., hele tal)
N: 907 ; 1 ; 1.000 kr.
L: Oms.hast. = 360/45 = 8. Debitorer = 7.258/8 = 907.
F: Jo længere kredit, desto lavere omsætningshastighed og desto flere penge bundet hos kunderne.

Q: Varekreditorerne stiger fra 1.380 til 1.450. Hvordan påvirker det likviditeten?
R: +70, fordi vi skylder leverandørerne mere og har beholdt pengene
A: −70, fordi gælden stiger
A: Ingen påvirkning, det er kun en balancepost
A: +70 under finansieringen
F: Mere gæld til andre = plus. Det er driftsgæld, så det står under driften.

Q: Hvorfor indgår afskrivninger ikke i likviditetsbudgettet?
A: Fordi de er fradragsberettigede
R: Fordi de ikke er en betaling. Pengene gik ud, da aktivet blev købt
A: Fordi de står under finansieringen
A: Det gør de, som plus
F: Derfor starter den indirekte metode fra IB, som er før afskrivninger.

Q: Kassekredit maks. 2.000, likviditetsreserve ultimo 397 og likvid beholdning ultimo 40. Hvad er kassekreditten (trækket) ultimo?
N: 1643 ; 1 ; 1.000 kr.
L: 2.000 − 397 + 40 = 1.643.
F: Reserven er det, der er tilbage på kreditten plus kontanterne. Beholder vi 40 i kassen, skal de også trækkes på kreditten.

Q: Hvad skal sammenlignes ved budgetkontrol?
A: Budgettet med sidste års budget
R: Regnskabet med budgettet, med afvigelser i kr. og %
A: Resultatbudgettet med likviditetsbudgettet
A: Balancen med resultatopgørelsen
F: Afvigelserne og deres årsager bruges til at forbedre de næste planer.
