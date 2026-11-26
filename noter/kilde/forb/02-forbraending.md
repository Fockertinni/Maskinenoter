id: forbraending
navn: Forbrændingsprocessen og fejl
ikon: flamme
intro: Hvordan en oliedråbe brænder, hvorfor tændingstidspunktet skal ligge lidt efter TDC, det forsatte diagram og hvordan du aflæser fejl i forbrændingen.
---
# Noter

> **Kilder**
> K04, K12, K24, K24.1 · Lektion 21 og 25

Maksimaltrykket skal ligge **nogle grader efter TDC**: før TDC modarbejder trykket stemplet, i TDC giver det intet moment, og for sent er trykket faldet.

## Forbrænding af en oliedråbe (K04)

Olien fordamper fra dråbens overflade og antænder, når temperatur og blanding er rigtig.

- Røgbæltet (CO₂, H₂O, rest-O₂, N₂) danner en barriere mellem brændstof og ilt.
- Hastighed på dråben (og luft i modsat retning) "slider" røglaget væk.
- Små dråber giver stor samlet overflade og kort udbrændingstid.
- **Oliekoks:** rester, hvor de lette dele er brændt væk. Årsag: for lidt tid.
- **Sod:** rester med både lette og tunge dele. Årsag: for lav temperatur (store dråber eller kolde flader).

## Tændingstidspunktet (K12)

Omkring TDC indsprøjtes brændstof, som opvarmes, fordamper, reagerer og antænder. Tiden indtil antændelse er **tændingsforhalingen**. Trykket stiger kraftigt, fordi volumen næsten ikke når at ændre sig.

| Tændingstidspunkt | Konsekvens |
|---|---|
| Før TDC | Øget kompressionsarbejde, mindre ekspansionsarbejde, for højt maksimaltryk. Lav ydelse, højt lejetryk. Skal undgås |
| Præcis i TDC | Størst muligt tryk, men krumtapvinkel 0° giver ingen arm og intet arbejde. Alt havner som lejetryk |
| Efter TDC (optimalt) | Kraften får en arm (op til ca. 45°). Men større vinkel giver større volumen og lavere tryk. Optimum ligger nogle grader efter TDC |

Tidlig indsprøjtning giver højere maksimaltryk, sen indsprøjtning lavere.

## Forsat diagram og forbrændingens faser (K24)

1. **a:** brændselsventilen åbner (indsprøjtningen varer til d).
2. **a–b:** tændingsforhaling. Længden afhænger af oliens sammensætning, kompressionstryk, lufttemperatur og forstøverhullernes størrelse og antal.
3. **b–c:** ustyret forbrænding. Olien fra forhalingen brænder sammen med noget af den nye, og trykket stiger til max.
4. **c:** maksimalt forbrændingstryk (skel mellem ustyret og styret).
5. **c–d:** styret forbrænding.
6. **d–e:** efterforbrænding.

- Skift af brændselsolie kan kræve justering af brændstofpumpernes kamme: frem, hvis p_max er for lav, tilbage, hvis den er for høj. Udeluk først andre årsager.
- **MAN B&W S-MC (langslagsmotor):** antændelse 2–3° efter TDC, og p_max må højst være 35 bar over kompressionstrykket. Derfor kan trækdiagrammet vise to maksima.

## Fejl i forbrændingen (K24.1)

Til bedømmelse tages normalt et diagram, et forsat diagram og et diagram med forbrændings- og kompressionstryk. En 45°-linje gennem punkt 0 (enden af atmosfærelinjen) giver en hurtig vurdering af diagramarealet.

| Fejl | Tegn | Mulige årsager |
|---|---|---|
| For tidlig tænding | p_max højere, ekspansionslinje lavere, udstødningstemp. lavere. Forbrænding starter før TDC | Olie med højere cetantal (lavere CCAI). Pumpestempel for højt. Forkert indstillet brændstofkam eller VIT |
| For sen tænding | p_max lavere, ekspansionslinje højere, udstødningstemp. højere, ydelse lavere | Olie med lavere cetantal (højere CCAI). Pumpestempel sunket (slid). Forkert kam eller VIT. Utæt brændstofpumpe (både ydelse og udst.temp. falder) |
| Utæthed eller luftmangel | Kompressions-, forbrændings- og ekspansionslinje alle lavere. Udstødningstemp. højere, ydelse lavere | Utætte stempelringe eller udstødningsventil. Snavset filter eller luftkøler, for lidt ventilation. Tilsmudset turbolader. Blokeret udstødning. Meget lav barometerstand. Hjælpeblæser ude af drift |
| Efterforbrænding | Forbrændingen fortsætter sent | Brændstofventil savler (lukker ikke tæt, eller fjederen er i resonans). Defekt kontraventil i pumpen. Gas eller damp i brændstofsystemet |

> **Tæthedskontrol**
> Tag et kompressionsdiagram. Cylinderen er tæt nok, hvis forholdet mellem absolut kompressionstryk og absolut skyllelufttryk er som på prøveturen.

> **Hvorfor varmere udstødning ved sen tænding?**
> Forbrændingen sker senere i ekspansionen, så mindre af varmen bliver til arbejde på stemplet, og mere forlader cylinderen med gassen.

<div class="genkald" markdown="1">
### Test dig selv

1. Tegn et forsat diagram og markér a–e.
2. Hvad sker der med p_max og udstødningstemperaturen ved for sen tænding, og hvorfor?
3. Forklar forskellen på oliekoks og sod.
4. Hvorfor giver tænding præcis i TDC intet arbejde?

<details markdown="1"><summary>Svar</summary>

1. a: ventilen åbner. a–b: forhaling. b–c: ustyret forbrænding med stejl trykstigning. c: p_max. c–d: styret forbrænding. d–e: efterforbrænding.
2. p_max falder, fordi forbrændingen sker, mens volumen vokser. Udstødningstemperaturen stiger, fordi varmen frigives sent og ikke når at blive til arbejde.
3. Oliekoks: de lette dele er brændt, men der var for lidt tid. Sod: både lette og tunge dele er tilbage, fordi temperaturen var for lav.
4. Krumtapvinklen er 0°, så kraften har ingen arm. M = F · a = 0. Kraften går til lejerne.
</details>
</div>

# Formler

```
C  + O₂ → CO₂
4H + O₂ → 2H₂O
```

```
M = F · a              moment = kraft · arm (krumtap)
Effekt = M · ω         ω = 2π·n / 60
```

# Quiz

Q: Hvor skal maksimaltrykket ideelt ligge?
A: Nogle grader før TDC
A: Præcis i TDC
R: Nogle grader efter TDC
A: Omkring 90° efter TDC
F: Efter TDC får kraften en arm. For sent er volumen vokset, og trykket er faldet.

Q: Hvad kaldes tiden fra brændselsventilen åbner, til olien antænder?
R: Tændingsforhalingen
A: Efterforbrændingen
A: Den styrede forbrænding
A: Indsprøjtningstiden
F: Forhalingen (a–b) afhænger af oliens sammensætning, kompressionstryk, lufttemperatur og forstøverhullerne.

Q: Diagrammet viser lavere p_max, højere ekspansionslinje og højere udstødningstemperatur. Hvad er fejlen?
A: For tidlig tænding
R: For sen tænding
A: Utæthed eller luftmangel
A: Efterforbrænding
F: Ved utæthed er alle linjer lavere, også kompressionslinjen. Her er det kun p_max, der falder.

Q: Kompressions-, forbrændings- og ekspansionslinjen er alle lavere, og udstødningstemperaturen er højere. Hvad tyder det på?
A: For tidlig tænding
A: For sen tænding
R: Utæthed eller luftmangel
A: Olie med højt cetantal
F: Lavere kompressionstryk betyder, at der mangler luft i cylinderen: utætte ringe eller ventil, snavset filter, luftkøler eller turbolader.

Q: Hvad er årsagen til sod?
A: For lidt tid
R: For lav temperatur, fx store dråber eller kolde flader
A: For meget luft
A: For højt cetantal
F: Oliekoks skyldes for lidt tid. Sod skyldes for lav temperatur.

Q: En brændstofventil savler. Hvilken fejl giver det?
A: For tidlig tænding
A: Utæthed
R: Efterforbrænding
A: Lavere kompressionstryk
F: Olie drypper ind efter, at ventilen skulle have lukket, og brænder sent i ekspansionen.

Q: P_max er for lav efter skift af brændselsolie, og andre årsager er udelukket. Hvad justerer du?
R: Brændstofpumpernes kamme frem
A: Brændstofpumpernes kamme tilbage
A: Skyllelufttrykket op
A: Kølevandstemperaturen ned
F: Tidligere indsprøjtning giver højere p_max. Er p_max for høj, flyttes kammene tilbage.

Q: En kraft på 2.000 kN virker med en arm på 0,4 m. Hvad er momentet?
N: 800 ; 0,5 ; kNm
L: M = F · a = 2.000 · 0,4 = 800 kNm.
F: I TDC er armen 0, og momentet derfor 0, uanset hvor stor kraften er.
