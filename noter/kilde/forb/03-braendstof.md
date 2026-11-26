id: braendstof
navn: Brændstofsystemer og common rail
ikon: braendstof
intro: Det eksterne og interne brændstofsystem, viskositetsregulering, skift mellem DO og HFO, og hvorfor common rail giver bedre forbrænding.
---
# Noter

> **Kilder**
> K40.4, K50.4 (kun figurer), K29 · JW s. 95–126 · Lektion 27, 29–30 og 58

Brændstofsystemet er delt i to: et **eksternt**, der opbevarer og klargør brændstoffet, og et **internt**, der leverer det til motoren i rette mængde, viskositet og renhed.

## Eksternt system

1. **Lagertank:** alle tanke er dampopvarmede, så HFO kan pumpes.
2. **Transferpumpe → settlingstank:** vand og tunge urenheder bundfældes og drænes.
3. **Centrifuge → servicetank:** grundig rensning for vand og cat fines.
4. **Boosterpumpe** forsyner det interne system.

> **Bunkring**
> Pejl lagertanken før og efter (og tanken, der leveres fra, for der snydes ofte). Masse = volumen ud fra tankdimensioner · massefylde. Tag flere repræsentative prøver gennem hele leveringen. Gem nogle, og send andre til analyse. Det er vigtigt ved en tvist.

## Internt system (Kongsberg)

Forvarmer olien til korrekt indsprøjtningsviskositet, finfiltrerer og leverer en kontinuerlig strøm ved korrekt tryk. Kan køre HFO (op til 700 cSt ved 50 °C), DO eller en blanding. Systemet er **tryksat for at undgå skum og kavitation** i højtrykspumpen. DO bruges kun ved unormale forhold eller større eftersyn.

1. 2 forsyningspumper suger fra HFO- eller DO-servicetank via en justerbar 3-vejs blandeventil (kontraventiler hindrer sammenblanding). Ca. 4 bar.
2. Flow- og forbrugsmåler med bypass.
3. Fuel-Water Emulsion Control Unit tilsætter vand for at sænke NOx. Husk: samme effekt kræver mere brændstof.
4. 2 cirkulationspumper (1 i drift) → dampopvarmet forvarmer, styret af viskositetsregulator.
5. Trykholdeventil (5–10 bar) holder trykket i cirkulationsledningen.
6. Venting box afgasser olien, når trykket sænkes. Kan drænes til spildolietank.
7. Fjernbetjent nødafspærringsventil til hovedmotoren (betjenes uden for maskinrummet).

Pumpekapaciteten overstiger altid det samlede maksimale forbrug. Steam tracing og forvarmer forsynes via reduktionsventil (0–10 bar).

## Viskositetsregulering

Viskositeten er setpunkt for dampventilen til forvarmeren:

- **Direkte:** én PID-sløjfe.
- **Kaskade:** en master sætter setpunkt for en slave, der føler på rørmetaltemperaturen. Kaskade er mere stabil og mindre følsom for svingninger i damptrykket.

## Procedurer

- **Start på DO:** 3-vejsventil 100 % DO → tjek niveau og dræn tank → klargør vej til venting box (flowmåler-bypass lukket) → luk dræn på venting box → start forsyningspumpe manuelt. Herefter: åbn forvarmer og back flush-filter, tjek at nødstopventilen er åben, åbn afspærringsventiler, returtryk 7–8 bar, retur til venting box, viskositetsregulator i manuel, damp lukket, start cirkulationspumpe, sæt pumper i auto standby.
- **DO → HFO:** HFO-separator i drift → niveau og temperatur i HFO-servicetank, dræn vand → klargør vej til 3-vejsventilen → åbn damp til forvarmer og steam tracing (5–8 barg) → viskositetsregulator i manuel → skift gradvist til HFO, mens viskositeten holdes inden for grænserne.
- **HFO → DO:** sænk temperaturen langsomt → bland DO gradvist i → overvåg temperaturfaldet.

> **Advarsler**
> Opvarmet DO får for lav viskositet → dårlig smøring af pumpestempel og dysenål → de kan sætte sig fast. For hurtigt temperaturfald → sammentrækning af stempel og foring i højtrykspumpen → fastsiddende stempel. Intet forbrug → stop forsyningspumperne (de skades af høj temperatur). Hurtigere skift via retur til servicetank kan få injektornåle til at sætte sig fast.

## Common rail (K29)

Ved en kamdrevet pumpe afhænger indsprøjtningstrykket af stempelhastigheden og dermed omdrejningstallet. Forstøvningen er derfor ikke optimal ved alle belastninger. Højere strålehastighed giver finere forstøvning, mere homogen blanding, roligere forbrænding, lavere temperatur og bedre virkningsgrad.

- **Princip:** et fælles rør i hele motorens længde holdes konstant på 1500–2000 bar. Elektronisk styrede ventiler åbner til hver brændstofventil.
- **Fordele:** online justering af indsprøjtningens tidspunkt, mængde og antal. Lavere forbrug. Let skift mellem økonomi- og emissionsdrift.
- **2-takt:** kamakslen skal kun betjene udstødningsventilen. Gøres den hydraulisk, kan kamakslen helt udelades.
- **MAN's løsning:** intet fælles højtryksrør. Hydrauliksystemet (smøreolie) driver i stedet en hydraulisk brændstofpumpe pr. cylinder. Starteluftfordeler og cylindersmøring styres elektronisk.

<div class="genkald" markdown="1">
### Test dig selv

1. Tegn brændstofvejen fra lagertank til motor.
2. Hvorfor er det interne system tryksat?
3. Forklar kaskaderegulering af viskositeten.
4. Hvorfor skal et brændstofskift ske langsomt?

<details markdown="1"><summary>Svar</summary>

1. Lagertank → transferpumpe → settlingstank → centrifuge → servicetank → forsyningspumper → flowmåler → venting box → cirkulationspumper → forvarmer → viskosimeter → filter → motor, med retur til venting box.
2. For at undgå skum og kavitation i højtrykspumpen, når den varme olie suges ind.
3. Masteren måler viskositeten og giver et temperatursetpunkt til slaven. Slaven måler rørmetaltemperaturen og styrer dampventilen. Slaven retter hurtigt op på svingninger i damptrykket, før de når viskositeten.
4. Et hurtigt temperaturfald trækker pumpestempel og foring sammen forskelligt, så stemplet kan sætte sig fast.
</details>
</div>

# Quiz

Q: Hvorfor er det interne brændstofsystem tryksat?
A: For at øge indsprøjtningstrykket
R: For at undgå skum og kavitation i højtrykspumpen
A: For at sænke viskositeten
A: For at kunne blande DO og HFO
F: Den varme olie vil ellers afgive gas og danne bobler på pumpens sugeside.

Q: Hvad er setpunktet for dampventilen til forvarmeren?
A: Olietemperaturen
R: Viskositeten
A: Damptrykket
A: Flowet
F: Viskositeten skal være rigtig ved indsprøjtning. Temperaturen er kun midlet til at nå den.

Q: Hvad er fordelen ved kaskaderegulering af viskositeten?
A: Den er billigere
R: Den er mere stabil og mindre følsom for svingninger i damptrykket
A: Den kræver ingen viskosimeter
A: Den kan køre uden damp
F: Slaven føler på rørmetaltemperaturen og retter hurtigt for forstyrrelser fra dampsiden.

Q: Hvad sker der, hvis DO bliver opvarmet som HFO?
A: Den brænder bedre
R: Viskositeten bliver for lav, og pumpestempel og dysenål smøres dårligt og kan sætte sig fast
A: Den danner sod
A: Den får højere cetantal
F: Derfor sænkes temperaturen langsomt ved skift fra HFO til DO.

Q: Hvad gør vandemulsion (FWE) ved brændstofforbruget?
A: Sænker det
R: Øger det, fordi samme effekt kræver mere brændstof
A: Ingen ændring
A: Halverer NOx og forbruget
F: Vandet sænker forbrændingstemperaturen og dermed NOx, men vandet skal også opvarmes og fordampes.

Q: Hvad er hovedfordelen ved common rail i forhold til kamdrevne pumper?
A: Færre cylindre
R: Indsprøjtningstrykket er uafhængigt af omdrejningstallet, så forstøvningen er god ved alle laster
A: Lavere tryk i systemet
A: Ingen behov for brændstofventiler
F: Railen holdes på 1500–2000 bar uanset last, og tidspunkt og mængde kan justeres online.

Q: Hvad er rækkefølgen i det eksterne system?
R: Lagertank → settlingstank → centrifuge → servicetank
A: Lagertank → centrifuge → settlingstank → servicetank
A: Settlingstank → lagertank → servicetank → centrifuge
A: Servicetank → centrifuge → lagertank → settlingstank
F: Først bundfældes det groveste i settlingstanken, så renser centrifugen grundigt, og servicetanken forsyner motoren.
