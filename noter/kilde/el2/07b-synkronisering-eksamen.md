id: synkronisering-eksamen
navn: Alt du skal bruge til eksamen: Synkronisering og paralleldrift
ikon: synkron
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise ved bordet i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Egne noter og rapporter må ikke medbringes, så alt herunder skal sidde i hovedet.

Hvis du kun når én ting: de fire synkroniseringsbetingelser, og at **drivmaskinen styrer P og magnetiseringen styrer Q** i paralleldrift. Det er kernen i at køre et skibs hovedtavle.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | f = p · n / 60 | Frekvens og omdrejninger |
| 2 | E ∝ Φ · n | Hastighed og spænding hænger sammen i ø-drift |
| 3 | P = 3 · E · U_f · sin δ / X_s | Effekt og lastvinkel |
| 4 | S = √3 · U · I, P = S · cos φ, Q = S · sin φ | Effekter ved måling |
| 5 | Statik = (f_tomgang − f_fuldlast) / f_N · 100 % | Typisk 3–5 % |

> **Fælden**
> Mere magnetisering giver **ikke** mere P i paralleldrift, kun mere Q. Vil du have mere P, skal governorens setpunkt op.

## 2 · Det du skal kunne forklare

### Ø-drift

**Pointe:** alene på nettet bestemmer lasten P og Q, og generatoren leverer, hvad der trækkes.

**Hvorfor efterregulering:** lasten bremser drivmaskinen (frekvensen falder) og giver spændingsfald. Hastighed og spænding påvirker hinanden, fordi E ∝ Φ · n.

### De fire synkroniseringsbetingelser

| Betingelse | Fejl giver |
|---|---|
| Samme spænding | Reaktiv udligningsstrøm |
| Samme frekvens | Effektpendling og mekanisk stød |
| Samme fasevinkel | Kraftigt strøm- og momentstød |
| Samme fasefølge | Kortslutning |

**Praksis:** synkronoskopet drejer langsomt med uret (generatoren lidt hurtigere), generatoren 5–10 V over nettet, og indkobling lige før kl. 12.

**Hvorfor lidt hurtigere:** så generatoren straks tager lidt P og ikke går i motordrift, hvor bakeffektrelæet kan udløse. **Hvorfor før kl. 12:** afbryderen har en lukketid.

### Instrumenterne

- **Synkronoskop:** viseren drejer med differensfrekvensen. Med uret = generatoren er hurtigst.
- **Lamper:** mørkkobling (mørke ved synkronisme) eller rotationskobling (lyset løber rundt).
- **Fasefølgeviser:** kun ved nyopstilling eller ændringer.
- **Automatisk synkronisering** (fx DEIF) kobler ind, når betingelserne har holdt et kort tidsrum.

### Lastfordeling

| Man ændrer | Paralleldrift | Ø-drift |
|---|---|---|
| Governor op | Mere P | Frekvensen stiger |
| Magnetisering op | Mere Q (overmagnetiseret) | Spændingen stiger |
| Magnetisering ned | Optager Q | Spændingen falder |

**Hvorfor:** et stort net holder frekvens og spænding fast. Mere drivmoment trykker polhjulet frem (større δ) og giver mere P. Mere magnetisering ændrer kun den reaktive strøm.

**V-kurven:** ankerstrømmen mod magnetiseringen ved fast P, med minimum ved cos φ = 1.

**Polslip:** bliver δ for stor (over 90° teoretisk), falder generatoren ud af synkronisme.

### Statik

**Pointe:** governor og AVR har en faldende karakteristik, så flere generatorer deler lasten stabilt.

**Hvorfor:** uden statik er fordelingen ikke entydig, og regulatorerne "slås" om lasten. Med samme statik deler de forholdsvis ens.

**I labbet:** når generatoren kobles fra, stiger dens frekvens, fordi governoren nu er på tomgangsdelen af statikkurven.

### Udkobling og beskyttelse

- Aflast P og Q til nær nul, før afbryderen åbnes. Ellers overspeed og brat effekttab på nettet.
- Udkobling under negativ P udløser bakeffektrelæet.
- Beskyttelse: overstrøm, kortslutning, bakeffekt, over- og underspænding og -frekvens, differential. Load shedding kobler uvigtige forbrugere fra.

### Generatoren ved kortslutning

**Pointe:** strømmen klinger af fra subtransient (X"_d, dæmpervikling) over transient (X'_d) til stationær (X_d). Afbrydere dimensioneres efter den subtransiente.

## 3 · Det du skal kunne tegne

1. **Synkronoskopet** med viser og retningen for "for hurtig".
2. **Vektordiagrammet** for U og E med lastvinklen δ, før og efter mere drivmoment.
3. **Frekvensstatikken:** f mod P for to generatorer, og hvordan lasten fordeles.
4. **V-kurven:** I_a mod I_m med minimum ved cos φ = 1.
5. **Kortslutningsstrømmen** fra en generator med de tre faser.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvordan synkroniserer du en generator til tavlen?</summary>

Op på omdrejninger, spændingen op med magnetiseringen, kontrollér fasefølge, hold U 5–10 V over nettet, lad synkronoskopet dreje langsomt med uret, og kobl ind lige før kl. 12.
</details>

<details markdown="1"><summary>Du skruer op for magnetiseringen i paralleldrift. Hvad sker der?</summary>

Generatoren leverer mere reaktiv effekt og bliver overmagnetiseret. P og frekvens er uændrede, og strømmen stiger.
</details>

<details markdown="1"><summary>Hvad sker der, hvis du kobler ind ved kl. 6?</summary>

Spændingerne er i modfase, og forskellen er dobbelt fasespænding. Det giver et voldsomt strøm- og momentstød, der kan ødelægge aksel og kobling.
</details>

<details markdown="1"><summary>Hvorfor stiger frekvensen, når du kobler fra i labbet?</summary>

Statikken. Governoren har en faldende karakteristik, og uden last kører den på tomgangsdelen med højere frekvens.
</details>

<details markdown="1"><summary>Hvad er bakeffekt, og hvorfor er det farligt?</summary>

Generatoren går i motordrift og trækker effekt fra nettet. Drivmaskinen kan tage skade, og de andre generatorer overbelastes. Bakeffektrelæet kobler den fra.
</details>

<details markdown="1"><summary>Hvorfor skal magnetiseringen kunne holde strømmen oppe ved kortslutning?</summary>

Ellers falder strømmen, før beskyttelsen når at virke selektivt. Compound eller PMG holder magnetiseringen, selvom klemspændingen falder.
</details>

## 5 · Ved bordet i laboratoriet

Ølgod-momentbænk med frekvensomformerstyret drivmotor. Generatoren magnetiseres fra en DC-forsyning. Tangens pil mod nettet, så positiv P = levering til nettet.

1. **Opstart:** hovedafbryder, reset nødstop, indkobling, frigiv og kør.
2. **Synkronisering:** ca. 1.500 o/min, U til 400 V, kontrollér fasefølge, synkronoskopet langsomt med uret, U 5–10 V over, indkobling lige før kl. 12.
3. **Last:** op til 600 W med setpunktet, derefter 600 var med magnetiseringen. Notér P, Q, S, U, I og cos φ.
4. **Udkobling:** aflast til 100–150 W, kobl fra og observér statikken.

Sig højt, hvad du forventer, før du drejer på noget. Fx: "Nu skruer jeg op for setpunktet, så P stiger, men frekvensen holdes af nettet."

## 6 · Faldgruber

- Magnetiseringen brugt til at styre P.
- Koblet ind med generatoren langsommere end nettet.
- Koblet fra under last.
- Tangens pil mod generatoren, så P får forkert fortegn.
- Glemt at forklare forskellen på ø-drift og paralleldrift.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

I ø-drift bestemmer lasten P og Q, og generatoren efterreguleres for frekvens og spænding. Før indkobling til en tavle skal spænding, frekvens, fasevinkel og fasefølge passe. Generatoren skal være lidt hurtigere og lidt over i spænding, og man kobler ind lige før kl. 12. I paralleldrift styrer drivmaskinen P via lastvinklen, og magnetiseringen styrer Q. Statik sørger for, at generatorerne deler lasten stabilt. Aflast før udkobling, ellers overspeed eller bakeffekt.
</details>
</div>
