id: synkronisering
navn: Synkronisering og paralleldrift
ikon: synkron
intro: Ø-drift, de fire synkroniseringsbetingelser og instrumenterne, lastfordeling af P og Q, lastvinkel, statik, udkobling, generatorudrustning og generatoren ved kortslutning.
---
# Noter

> **Kilder**
> UV 25–28 · Bog 3 kap. 4.1.7–4.1.8 · Bog 2 kap. 5 · UV4 · UV7 · Lab 7

Når en generator kører parallelt med andre, **styrer drivmaskinens brændstof eller moment den aktive effekt P, og magnetiseringen styrer den reaktive effekt Q.** Frekvens og spænding bestemmes af nettet. Det er kerneforståelsen for drift af et skibs hovedtavle.

## Ø-drift (én generator alene)

1. Start drivmaskinen, og bring den op på nominelt omdrejningstal.
2. Regulér spændingen op med magnetiseringen.
3. Kontrollér U og f, og kobl lasten ind.
4. Efterregulér. Lasten bremser drivmaskinen (frekvensen falder) og giver spændingsfald (spændingen falder). Hastighed og spænding påvirker hinanden, fordi E ∝ Φ · n.

I ø-drift bestemmer lasten P og Q. Generatoren leverer det, der trækkes.

## Synkroniseringsbetingelser

| Betingelse | Hvordan kontrolleres | Fejl giver |
|---|---|---|
| Samme spænding | Voltmetre (generatoren 5–10 V over nettet) | Stor reaktiv udligningsstrøm |
| Samme frekvens | Frekvensmetre. Synkronoskopet drejer langsomt | Effektpendling, mekanisk stød |
| Samme fasevinkel | Synkronoskop ved kl. 12, mørke lamper | Kraftigt strøm- og momentstød, kan beskadige aksel og kobling |
| Samme fasefølge | Fasefølgeviser (kun ved nyopstilling eller ændring) | Kortslutning |

**Praksis:** lad synkronoskopet dreje langsomt med uret (generatoren lidt hurtigere end nettet), og kobl ind lige før kl. 12. Så tager generatoren straks lidt P-last og går ikke i motordrift (bakeffekt).

<div class="m" data-m="synkronoskop"></div>

<details markdown="1"><summary>Prøv selv: hvilke indstillinger giver en pæn indkobling?</summary>

Frekvensforskel lidt positiv (fx +0,05 til +0,15 Hz), spændingen 5–10 V over nettet, og tryk, når viseren er lige før kl. 12. Prøv også at koble ind ved kl. 6 eller med generatoren for langsom, og læs, hvad der går galt.
</details>

## Synkroniseringsinstrumenter

- **Synkronoskop:** stator med 3-faset vikling fra nettet (drejefelt), rotor med 1-faset vikling fra generatoren. Viseren drejer med differensfrekvensen. Højre om betyder, at generatoren er for hurtig. Moderne udgaver er en ring af 36 LED'er med 10° mellemrum.
- **Synkroniseringslamper:** mørkkobling (alle lamper mørke ved synkronisme) eller rotationskobling (lyset "løber rundt", og retningen viser, om generatoren er for hurtig eller langsom).
- **Frekvensmeter:** tungefrekvensmeter (vibrerende ståltunger) eller digitalt.
- **Fasefølgeviser:** lille 3-faset motor eller elektronik, der viser drejefeltets omdrejningsretning.
- **Automatisk synkronisering** (fx DEIF) indkobler, når betingelserne har været opfyldt i et kort tidsrum.

## Lastfordeling efter indkobling

| Man ændrer | Virkning i paralleldrift | Virkning i ø-drift |
|---|---|---|
| Drivmaskinens setpunkt (governor/moment) op | Generatoren tager mere P. Frekvensen ændres næsten ikke | Frekvensen stiger |
| Magnetisering op | Generatoren leverer mere Q (overmagnetiseret, induktiv). Spændingen ændres næsten ikke | Spændingen stiger |
| Magnetisering ned | Generatoren optager Q (undermagnetiseret) | Spændingen falder |

**V-kurven:** ankerstrømmen som funktion af magnetiseringen ved konstant P. Minimum ved cos φ = 1.

**Lastvinkel:** mere drivmoment trykker polhjulet længere frem i forhold til nettets spænding. Det giver større δ og større P. Bliver δ for stor (teoretisk over 90°), falder generatoren ud af synkronisme (polslip).

```
P = 3 · E · U_f · sin δ / X_s
```

<details markdown="1"><summary>Forudsig først: du skruer op for magnetiseringen på en generator i paralleldrift. Stiger P?</summary>

Nej. P bestemmes af drivmomentet. Mere magnetisering giver kun mere Q (og større strøm). Vil du have mere P, skal governorens setpunkt op.
</details>

## Statik (droop)

For at flere generatorer kan dele lasten stabilt, har både governor og AVR en faldende karakteristik.

- **Frekvensstatik:** frekvensen falder lidt med stigende P (fx 3–5 % fra tomgang til fuld last). Generatorer med samme statik deler den aktive last forholdsvis ens.
- **Spændingsstatik (reaktiv statik):** spændingen falder lidt med stigende Q, så den reaktive last fordeles.
- Uden statik (isokron) vil to generatorer "slås" om lasten.

Ved udkobling i labbet ses frekvensstatikken: når generatoren frakobles nettet, stiger dens frekvens og omdrejningstal, fordi governoren nu kører på tomgangsdelen af statikkurven.

## Udkobling

Aflast P (og Q) til nær nul, før afbryderen åbnes. Ellers får drivmaskinen pludselig et lastfald (overspeed), og nettet mister brat effekt. Udkobles der under negativ P (motordrift), udløser bakeffektrelæet.

## Generatorudrustning

- **Magnetiseringsudstyr:** børsteløs exciter og roterende dioder. AVR'en (automatisk spændingsregulator) måler klemspændingen og styrer exciterens felt. Ved kortslutning skal magnetiseringen kunne holde strømmen oppe (compound eller PMG), så beskyttelsen når at virke selektivt.
- **Governor** (hastighedsregulator) på drivmaskinen. Styrer P og frekvens.
- **Generatorafbryder (ACB)** med overstrøm, kortslutning og underspændingsværn.
- **Beskyttelsesrelæer:** overstrøm, kortslutning, bakeffekt (motordrift), over- og underspænding, over- og underfrekvens, differentialbeskyttelse på store maskiner.
- **Preferential tripping / load shedding:** ikke-vigtige forbrugere kobles fra ved overbelastning, så de vigtige holdes i drift.

## Generatoren ved kortslutning

Strømmen er højest i de første perioder og klinger af i tre faser:

| Fase | Bestemmes af | Varighed | Reaktans |
|---|---|---|---|
| Subtransient | Dæmperviklingen | Få perioder | X"_d |
| Transient | Feltviklingen | Op til ca. et sekund | X'_d |
| Stationær | Synkronreaktansen | Herefter | X_d |

Beskyttelse og afbrydere dimensioneres efter den subtransiente strøm.

## Lab 7 kort

Ølgod-momentbænk med frekvensomformerstyret drivmotor. Generatoren magnetiseres af en DC-forsyning (Voltcraft). Effekten måles med THD-meter, og tangens pil skal pege mod nettet, så positiv P betyder levering til nettet. Rapport, max 2 sider.

1. Opstart: hovedafbryder, reset nødstop, indkobling, frigiv og kør.
2. Ca. 1.500 o/min, juster U til 400 V, kontrollér fasefølgen, lad synkronoskopet dreje langsomt med uret med U 5–10 V over nettet, og tryk indkobling lige før kl. 12.
3. Last op til 600 W (hastigheds- eller momentsetpunkt) og derefter 600 var (magnetisering). Notér P, Q, S, U, I_b, I_m og cos φ ved hver ændring.
4. Aflast til 100–150 W, og udkobl. Observér frekvensstatikken.

> **Mere til labøvelse 7**
> [Labnoterne](../../modeller/el2/lab7-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab7.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab7-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad styrer P, og hvad styrer Q i paralleldrift?
2. Hvorfor skal generatoren være lidt hurtigere end nettet ved indkobling?
3. Hvorfor skal generatorer have statik?
4. Hvad sker der, hvis man åbner afbryderen ved fuld last?

<details markdown="1"><summary>Svar</summary>

1. P styres af drivmaskinens moment (governor). Q styres af magnetiseringen (AVR).
2. Så den straks tager lidt P og ikke går i motordrift, hvor bakeffektrelæet kan udløse.
3. Uden en faldende karakteristik er lastfordelingen ikke entydig, og regulatorerne "slås" om lasten.
4. Drivmaskinen får et pludseligt lastfald og kan gå i overspeed, og nettet mister brat effekt.
</details>
</div>

# Formler

### Effekt og lastvinkel
```
P = 3 · E · U_f · sin δ / X_s
E ∝ Φ · n
```

### Statik
```
Frekvensstatik = (f_tomgang − f_fuldlast) / f_N · 100 %     (typisk 3–5 %)
```

### Kortslutning af generator
```
I"_k = E" / X"_d   (subtransient, størst)
I'_k = E' / X'_d   (transient)
I_k  = E / X_d     (stationær)
```

# Quiz

Q: Hvad sker der, når du øger governorens setpunkt på en generator i paralleldrift med et stort net?
A: Frekvensen stiger tydeligt
R: Generatoren tager mere aktiv effekt, frekvensen ændres næsten ikke
A: Generatoren leverer mere reaktiv effekt
A: Spændingen stiger
F: Nettet holder frekvensen. Mere drivmoment giver større lastvinkel og mere P.

Q: Hvad sker der, når du øger magnetiseringen på en generator i paralleldrift?
A: Den tager mere P
R: Den leverer mere Q og bliver overmagnetiseret
A: Frekvensen stiger
A: Den går i motordrift
F: Magnetiseringen styrer Q. I ø-drift ville spændingen stige i stedet.

Q: Synkronoskopet drejer mod uret. Hvad betyder det?
A: Generatoren er for hurtig
R: Generatoren er for langsom
A: Fasefølgen er forkert
A: Spændingen er for høj
F: Med uret betyder generatoren hurtigst. Skru lidt op for hastigheden.

Q: Hvornår trykker du indkobling?
A: Når viseren står ved kl. 6
R: Lige før kl. 12, mens viseren drejer langsomt med uret
A: Når viseren står stille ved kl. 3
A: Når lamperne lyser kraftigst
F: Afbryderen har en lukketid, så man trykker lidt før kl. 12. Ved mørkkobling skal lamperne være mørke.

Q: Hvad giver indkobling med forkert fasefølge?
A: En lille reaktiv strøm
A: Effektpendling
R: Kortslutning
A: Ingenting, AVR'en retter det
F: Derfor tjekkes fasefølgen ved nyopstilling og efter ændringer.

Q: En generator har 5 % frekvensstatik og 52,5 Hz i tomgang. Hvad er frekvensen ved fuld last? (Hz)
N: 50 ; 0,05 ; Hz
L: 5 % af 50 Hz = 2,5 Hz. 52,5 − 2,5 = 50 Hz.
F: Statikken regnes i forhold til nominel frekvens.

Q: Hvilket relæ udløser, hvis generatoren udkobles under negativ P?
A: Overstrømsrelæet
R: Bakeffektrelæet
A: Underfrekvensrelæet
A: Differentialrelæet
F: Negativ P betyder motordrift, hvor nettet driver generatoren.

Q: Hvilken kortslutningsstrøm dimensioneres afbrydere efter?
R: Den subtransiente
A: Den transiente
A: Den stationære
A: Nominel strøm
F: Den subtransiente strøm i de første perioder er størst.
