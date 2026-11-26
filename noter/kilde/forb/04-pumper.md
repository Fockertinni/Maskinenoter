id: pumper
navn: Pumper og kompressorer
ikon: pumpe
intro: Strømnings- og deplacementpumper, pumpekurve og rørkarakteristik, kavitation, ejektoren og stalling i centrifugalkompressoren.
---
# Noter

> **Kilder**
> K15 · Lektion 28

Pumper deles i **strømningspumper** (centrifugalpumpe, ejektor) og **deplacementpumper**. Ved en centrifugalpumpe bestemmer rørsystemet trykket. Ved en deplacementpumpe er flowet (næsten) fast uanset modtryk.

| | Strømningspumpe | Deplacementpumpe |
|---|---|---|
| Adskillelse tryk/suge | Ingen mekanisk adskillelse | Mekanisk adskillelse |
| Pumpevirkning | Strømmende medie skaber trykdifferens | Volumenændringer |
| Ved blokeret afgang | Tomgangstryk (max H), intet flow | Trykket stiger, til motoren stopper eller røret sprænger → kræver trykaflastningsventil |
| Kurve | Q falder med stigende modtryk | Ideelt lodret, lækagetab giver let fald |
| Krav | Skal spædes, hvis den er tom for væske | Kun smørende medier, aldrig uden flow |

## Centrifugalpumpen

- Løberen (impelleren) kaster vandet ud mod periferien med stor hastighed.
- Huset udvider sig i strømningsretningen (diffusor), så hastighed omsættes til tryk (Bernoulli).
- I centrum falder trykket, så atmosfæretrykket presser nyt vand ind.
- **Kavitation:** lavt tryk på sugesiden sænker kogepunktet. Hold sugetrykket højt og temperaturen lav.
- Ved stop kan vand løbe baglæns gennem pumpen.
- En luftfyldt pumpe suger ikke an. Spæd den før start.

**Pumpekurve og rørkarakteristik:** Pumpekurven viser løftehøjden H (m vandsøjle) mod Q. Højere modtryk giver mindre flow. Rørkarakteristikken viser det nødvendige trykfald mod flow. Mere flow giver større trykfald. **Skæringen er driftspunktet.** Et ændret omdrejningstal parallelforskyder pumpekurven, mens rørkarakteristikken er uændret.

## Ejektoren

Et drivmiddel (damp, luft, vand) accelereres i en dyse, så trykket falder under atmosfæretryk. Mediet presses op i røret og blandes med drivmidlet til afgangen.

## Deplacementpumpe (lamelpumpe)

En excentrisk rotor med to fjederbelastede plader. Rummet bag pladen vokser (suger ved A) og skrumper (presser ud ved B). Flowet er deplacementet gange omdrejningstallet.

## Centrifugalkompressor og stalling

Virker som centrifugalpumpen, men på gas, fx turboladerens kompressor. Kurven har et toppunkt, så der til venstre for toppen er et ustabilt område, hvor driftspunktet ikke er entydigt.

- Toppunkterne ved forskellige omdrejningstal ligger på en parabel: **stallgrænsen**. Driftspunktet skal ligge et stykke til højre for den.
- Mere luft end motoren bruger løfter anlægskarakteristikken. Tilsmudsning gør den stejlere. I begge tilfælde flytter driftspunktet mod toppen.
- Når afgangstrykket er lig receivertrykket, kan kompressoren ikke levere. Luften strømmer baglæns, og leveringen genoptages pludseligt.
- **Stalling (surging):** voldsomme vibrationer, svingende rotoromdrejninger, støj og skader på sigt.

**Typiske årsager**

- To parallelle turboladere: én turbine mister kraft (fx tilsmudsede skovle) → lavere omdrejninger og afgangstryk → receivertrykket er højest → den staller.
- Én turbolader: for hurtig lastreduktion. Afgangstrykket falder hurtigt, men receiveren holder trykket længere → tilbagestrømning.

<div class="genkald" markdown="1">
### Test dig selv

1. Tegn pumpekurve og rørkarakteristik, og vis, hvad der sker med driftspunktet ved øget rørmodstand.
2. Hvorfor skal en deplacementpumpe have en trykaflastningsventil?
3. Forklar stalling med kompressorkurven.

<details markdown="1"><summary>Svar</summary>

1. Rørkarakteristikken bliver stejlere, så skæringen flytter op og til venstre: højere tryk, mindre flow.
2. Den leverer et næsten fast volumen uanset modtryk. Lukkes afgangen, stiger trykket, til noget går i stykker.
3. Kurven har et toppunkt. Kommer driftspunktet til venstre for toppen, er det ikke entydigt. Afgangstrykket falder under receivertrykket, luften løber baglæns, og leveringen genoptages i stød.
</details>
</div>

# Formler

```
Q = D · n            deplacementpumpe
                     D = deplacement (volumen pr. omdrejning), n = omdrejningstal
```

```
p = ρ · g · H        tryk fra en væskesøjle (løftehøjde H i m)
```

# Quiz

Q: Hvad sker der, hvis afgangen fra en centrifugalpumpe lukkes?
R: Pumpen giver tomgangstryk (max H), men intet flow
A: Trykket stiger, til røret sprænger
A: Pumpen kavitererer straks
A: Flowet fortsætter gennem lækager
F: I en strømningspumpe er der ingen mekanisk adskillelse, så vandet hvirvler bare rundt. Det er deplacementpumpen, der kan sprænge røret.

Q: Hvor ligger driftspunktet for en centrifugalpumpe?
A: I pumpekurvens toppunkt
R: Hvor pumpekurven skærer rørkarakteristikken
A: Ved max flow
A: Hvor virkningsgraden er størst
F: Pumpen leverer netop det tryk, rørsystemet kræver ved det flow.

Q: Rørmodstanden øges (fx en ventil drøvles). Hvad sker der med driftspunktet?
A: Mere flow, lavere tryk
R: Mindre flow, højere tryk
A: Uændret
A: Pumpekurven parallelforskydes
F: Rørkarakteristikken bliver stejlere. Pumpekurven ændres kun af omdrejningstallet.

Q: Hvordan undgår du kavitation i en centrifugalpumpe?
A: Lav sugetryk og høj temperatur
R: Højt sugetryk og lav temperatur
A: Højere omdrejningstal
A: Drøvle på sugesiden
F: Lavt tryk sænker kogepunktet, så vandet koger lokalt. Derfor placeres søvandspumper under vandlinjen.

Q: En lamelpumpe har et deplacement på 50 cm³ pr. omdrejning og kører 1.450 o/min. Hvad er flowet i liter pr. minut?
N: 72,5 ; 0,1 ; l/min
L: Q = D · n = 50 cm³ · 1.450 /min = 72.500 cm³/min = 72,5 l/min.
F: 1 liter = 1.000 cm³.

Q: Hvad kaldes grænsen, som kompressorens driftspunkt skal holde sig til højre for?
A: Rørkarakteristikken
R: Stallgrænsen (surge line)
A: Choke-grænsen
A: Isentropen
F: Toppunkterne ved forskellige omdrejningstal ligger på en parabel. Til venstre for den er driften ustabil.

Q: To parallelle turboladere, hvor den ene turbine er tilsmudset. Hvorfor staller den?
R: Den kører langsommere og giver lavere afgangstryk end receivertrykket, som den anden holder oppe
A: Den får for meget luft
A: Dens lejer bliver for varme
A: Udstødningstrykket stiger
F: Parallelle turboladere skal give samme afgangstryk. Den svage kan ikke levere mod receiveren, og luften løber baglæns.
