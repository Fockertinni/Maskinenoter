id: generator
navn: Synkrongenerator
ikon: generator
intro: Opbygning og magnetisering, f = p·n/60, ækvivalentskema og ankerreaktion, de tre karakteristikker, remanens, THDu og asynkrongeneratoren.
---
# Noter

> **Kilder**
> UV 5–8 · Bog 3 kap. 1, 4.1.1–4.1.6 og 4.5 · Lab 2

Synkrongeneratoren laver spænding ved, at et DC-magnetiseret polhjul drejer inde i en 3-faset statorvikling. **Frekvensen bestemmes af omdrejningstallet, spændingen af magnetiseringen**, og belastningens art afgør, om klemspændingen falder eller stiger.

## Opbygning

- **Stator (anker):** 3-faset vikling i noter. Her induceres spændingen.
- **Rotor (polhjul):** DC-magnetiseringsvikling. Fuldpolsrotor til turbogeneratorer (2–4 poler, høj hastighed) eller udprægede poler til dieselgeneratorer og vandkraft (mange poler).
- **Dæmpervikling:** kortslutningsstave i polskoene. Dæmper pendlinger og hjælper ved asymmetri.
- **Magnetisering på marinegeneratorer:** børsteløs. En lille vekselstrøms-magnetiseringsgenerator på samme aksel og roterende dioder. AVR'en styrer magnetiseringsgeneratorens statorfelt.

## Grundformler

```
f = p · n / 60          n_s = 60 · f / p          (p = antal polpar)
E = 4,44 · f · N · Φ · k_w
```

En 4-polet generator (p = 2) skal køre 1.500 o/min for at give 50 Hz. EMK'en er proportional med frekvensen (omdrejningerne) og fluxen (magnetiseringsstrømmen), indtil jernet mættes.

## Ækvivalentskema og ankerreaktion

Pr. fase: en konstant EMK E i serie med statormodstanden R og synkronreaktansen X_s = X_σ (spredning) + X_a (ankerreaktion).

```
E = U + I · (R + jX_s) ≈ U + jX_s · I
```

**Ankerreaktion** er statorstrømmens eget felt, som påvirker hovedfeltet:

| Last | Ankerfeltet i forhold til hovedfeltet | Klemspænding ved konstant I_m |
|---|---|---|
| Resistiv | Tværfelt, forskyder og svækker lidt | Falder svagt |
| Induktiv | Næsten modsat rettet, svækker kraftigt | Falder meget |
| Kapacitiv | Understøtter hovedfeltet | Stiger (begrænset af mætning) |

I vektordiagrammet tegnes U vandret, I med vinklen φ, og jX_s·I står vinkelret på I. E er summen. Vinklen mellem E og U er **lastvinklen δ** (polhjulsvinklen).

<details markdown="1"><summary>Forudsig først: skal E være større eller mindre end U ved induktiv last? Og ved kapacitiv?</summary>

Ved induktiv last peger jX_s·I næsten i samme retning som U, så E skal være langt større end U. Ved kapacitiv last peger den modsat, så E kan være mindre end U. Skru på φ i modellen.
</details>

<div class="m" data-m="generator"></div>

Med I = 1 pu, X_s = 1 pu og cos φ = 0,8 induktiv (φ = 37°) bliver E ≈ 1,79 pu og δ ≈ 27°. Magnetiseringen skal altså næsten fordobles i forhold til tomgang for at holde spændingen.

## Karakteristikker

- **Magnetiseringskarakteristik (tomgang):** E = f(I_m) ved nominel n. Starter i den remanente spænding, stiger lineært og knækker, når jernet mættes. Hysterese giver forskellig kurve op og ned.
- **Belastningskarakteristik (ydre karakteristik):** U = f(I) ved konstant I_m og n. Tre kurver: resistiv (svagt faldende), induktiv (stærkt faldende) og kapacitiv (stigende).
- **Reguleringskarakteristik:** den I_m, der kræves for at holde U konstant ved stigende last. Det er AVR'ens opgave.

## Remanent spænding

Restmagnetisme i polhjulets jern giver en lille spænding uden magnetisering. Den er nødvendig, for at en selvmagnetiseret generator kan bygge spænding op.

Størrelsen efter et forsøg afhænger af, hvor på hysteresekurven man slap. Blev magnetiseringen slået fra efter høj strøm, stiger den typisk. Afmagnetisering eller vendt polaritet kan sænke den. Mistet remanens løses ved at "flashe" feltet med DC.

## THDu i generatoren

Generatorens spænding er ikke en ren sinus. Noterne, viklingsfordelingen og polskoenes form giver overharmoniske. Derfor måles en THDu også i tomgang. THD-formlen står under Frekvensomformer.

## Effekt

```
S_N = √3 · U_N · I_N          P_2 = √3 · U_N · I_N · cos φ
```

Generatoren dimensioneres efter S (strøm og opvarmning). Drivmaskinen dimensioneres efter P.

## Asynkrongeneratoren

En asynkronmaskine, der trækkes over synkron hastighed (negativt slip), leverer effekt til nettet. Den kan ikke selv lave sit magnetfelt, men trækker reaktiv effekt fra nettet (eller fra kondensatorer i ø-drift). Bruges i vindmøller og små vandkraftværker. Kipmomentet er højere i generatordrift end i motordrift.

## Lab 2 kort

Ølgod-momentbænk med 2,2 kW drivmotor (max 2 kW last på grund af 0,2 kW tab), 4-polet generator, nominel spænding ved 1.500 o/min og ca. 0,4 A magnetisering. Stjernepunktet er ikke jordet (isoleret drift), og magnetisering og stator er ubeskyttede.

1. Start drivmotoren (rpm-mode, setpunkt op til 1.500).
2. Mål den remanente spænding, før magnetiseringen tilsluttes.
3. Optag magnetiseringskarakteristikken. I_m op fra 0 A, aldrig over mærkepladens I_ex. Størst ændring mellem 0 og 0,7 A.
4. Optag belastningskarakteristikken ved 400 V og 1.500 o/min for R-, L- og C-last.
5. Mål THDu i tomgang.
6. Mål den remanente spænding igen efter afrigning, og forklar ændringen ud fra hysteresekurven.

> **Mere til labøvelse 2**
> [Labnoterne](../../modeller/el2/lab2-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab2.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab2-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad bestemmer frekvensen, og hvad bestemmer spændingen?
2. Hvorfor falder klemspændingen mest ved induktiv last?
3. Tegn magnetiseringskarakteristikken og markér remanens, lineært område og mætning.
4. Hvad er AVR'ens opgave set ud fra reguleringskarakteristikken?

<details markdown="1"><summary>Svar</summary>

1. Frekvensen af omdrejningstallet (f = p·n/60). Spændingen af magnetiseringen (flux) og omdrejningstallet.
2. Ankerfeltet står næsten modsat hovedfeltet og svækker det kraftigt.
3. Kurven starter i en lille spænding ved I_m = 0, stiger lineært og flader ud, når jernet mættes. Kurven ned ligger lidt over kurven op (hysterese).
4. At øge I_m, når lasten stiger (mest ved induktiv last), så U holdes konstant.
</details>
</div>

# Formler

### Frekvens og omdrejninger
```
f   = p · n / 60
n_s = 60 · f / p          p = antal polpar
```

### EMK
```
E = 4,44 · f · N · Φ · k_w
```

### Ækvivalentskema pr. fase
```
E = U + I · (R + jX_s) ≈ U + jX_s · I
X_s = X_σ + X_a
```

### Effekt
```
S_N = √3 · U_N · I_N
P_2 = √3 · U_N · I_N · cos φ
P   = 3 · E · U_f · sin δ / X_s      (lastvinkel δ)
```

# Quiz

Q: En generator har 6 poler. Hvilket omdrejningstal giver 50 Hz? (o/min)
N: 1000 ; 1 ; o/min
L: p = 3 polpar. n = 60 · f / p = 60 · 50 / 3 = 1.000 o/min.
F: Husk at p er polpar, ikke poler.

Q: En 4-polet generator kører 1.440 o/min. Hvilken frekvens giver den? (Hz)
N: 48 ; 0,1 ; Hz
L: f = p · n / 60 = 2 · 1.440 / 60 = 48 Hz.
F: Frekvensen følger omdrejningstallet direkte.

Q: Hvilken last giver det største spændingsfald ved konstant magnetisering?
A: Resistiv
R: Induktiv
A: Kapacitiv
A: Det er ens for alle
F: Ankerfeltet modvirker hovedfeltet næsten direkte ved induktiv last.

Q: Hvad sker der med klemspændingen ved kapacitiv last og konstant I_m?
A: Den falder kraftigt
A: Den er uændret
R: Den stiger, begrænset af mætning
A: Den bliver nul
F: Ankerfeltet understøtter hovedfeltet.

Q: Hvorfor er remanent spænding vigtig?
A: Den bestemmer frekvensen
R: Uden den kan en selvmagnetiseret generator ikke bygge spænding op
A: Den beskytter mod kortslutning
A: Den sænker THDu
F: Mister generatoren remanensen, skal feltet "flashes" med DC.

Q: Hvad skal drivmaskinen dimensioneres efter?
A: S (tilsyneladende effekt)
R: P (aktiv effekt)
A: Q (reaktiv effekt)
A: Magnetiseringsstrømmen
F: Generatoren dimensioneres efter S (strøm og opvarmning), drivmaskinen efter P.

Q: Hvad har en asynkrongenerator brug for, som en synkrongenerator laver selv?
A: Et højere omdrejningstal end synkront
R: Reaktiv effekt til magnetiseringen
A: En dæmpervikling
A: Børster
F: Den trækker Q fra nettet eller fra kondensatorer i ø-drift. Den skal også køre over synkron hastighed, men det er driften, ikke en mangel.
