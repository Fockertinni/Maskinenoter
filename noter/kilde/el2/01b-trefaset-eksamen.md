id: trefaset-eksamen
navn: Alt du skal bruge til eksamen: Trefaset belastning
ikon: trefase
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise ved bordet i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Du må have lærebøger og UV-materialer fra CN, papir, blyant, passer og lommeregner med. **Egne noter og rapporter må ikke medbringes**, så alt herunder skal sidde i hovedet.

Hvis du kun når én ting: kunne tegne vektordiagrammet for et 3-faset net, forklare forskellen på Y og Δ med tal, og forklare hvorfor stjernepunktet flytter sig, når nullen forsvinder. Det binder hele emnet sammen.

## 1 · De vigtigste formler

Kan du disse ti udenad, kan du regne alt i emnet.

| # | Formel | Hvornår |
|---|---|---|
| 1 | U_L = √3 · U_f | Stjerne: 400 V = √3 · 230 V |
| 2 | I_L = √3 · I_f | Trekant: linjestrømmen er √3 gange grenstrømmen |
| 3 | P = √3 · U_L · I_L · cos φ | Altid netværdier, både Y og Δ |
| 4 | Q = √3 · U_L · I_L · sin φ og S² = P² + Q² | Reaktiv og tilsyneladende effekt |
| 5 | P_Δ = 3 · P_Y og Z_Δ = 3 · Z_Y | Samme modstande: Δ giver 3 gange effekten |
| 6 | I = √(I_w² + I_b²) | Resistiv og induktiv strøm lægges vektorielt sammen |
| 7 | X_L = 2πfL, Q = U² / X_L | Spolen i Lab 1, aktivitet 2 |
| 8 | I_N = I_1 + I_2 + I_3 (komplekst) | Nulstrøm ved usymmetrisk last med nul |
| 9 | U_N'N = Σ(U_i · Y_i) / Σ Y_i | Millman: stjernepunktsforskydning uden nul |
| 10 | P = W1 + W2, Q = √3 · (W_b − W_a) | Aron. Q-formlen kun ved symmetrisk last |

> **Den ene formel, der fanger flest**
> P = √3 · U_L · I_L · cos φ bruger netspænding og linjestrøm. Sætter du 230 V og grenstrøm ind, mangler du en faktor √3. Bruger du fasestørrelser, hedder det P = 3 · U_f · I_f · cos φ.

## 2 · Det du skal kunne forklare

Til en mundtlig eksamen skal du kunne sige pointen i én sætning og så forklare hvorfor. Øv dig i at sige dem højt.

### Stjerne og trekant

**Pointe:** i stjerne ligger 230 V over hver last, i trekant ligger 400 V. Derfor giver samme modstand 3 gange så meget effekt i trekant.

**Hvorfor:** effekten følger U². (400 / 230)² = (√3)² = 3. Strømmen i ledningen stiger også 3 gange: √3 fordi grenstrømmen er √3 større, og √3 fordi to grene mødes i hver linje.

**Tal du kan nævne:** 320 Ω pr. gren i Δ på 400 V giver 1,25 A i grenen, 2,17 A i linjen og 1.500 W i alt. De samme modstande i Y giver 500 W.

**Mærkepladen:** "400 V Δ / 690 V Y" kobles i Δ på 400 V. "230 V Δ / 400 V Y" kobles i Y. Forkert kobling giver √3 for høj viklingsspænding.

### Symmetrisk last og nul

**Pointe:** ved symmetrisk last er summen af de tre strømme nul, så nullen fører ingen strøm.

**Hvorfor:** tre lige store strømme forskudt 120° danner en lukket trekant, når man lægger dem sammen som vektorer.

### Usymmetrisk last med nul

**Pointe:** nullen holder hver fase på 230 V og fører differensstrømmen.

**Hvorfor:** nullen forbinder lastens stjernepunkt fast til forsyningens. Med 200/160/320 Ω bliver strømmene 1,15 / 1,44 / 0,72 A, og nulstrømmen ca. 0,63 A. Den er ikke 1,44 − 0,72, fordi strømmene står 120° fra hinanden.

**Ekstra point:** ved ikke-lineære laster (LED, PC, frekvensomformere) kan nulstrømmen blive større end fasestrømmen, fordi 3. harmoniske er i fase i alle tre faser og lægges sammen i nullen.

### Usymmetrisk last uden nul

**Pointe:** stjernepunktet forskydes mod fasen med mindst impedans, og fasen med størst impedans får højest spænding.

**Hvorfor:** uden nul skal de tre strømme summere til nul. Det kan de kun, hvis spændingerne over lasterne ændrer sig, så den lille modstand får mindre spænding og den store mere. Med 200/160/320 Ω flytter stjernepunktet ca. 44 V, og faserne får 229 / 197 / 271 V.

**Hvorfor falder P?** Spændingen flyttes væk fra de små modstande, som tog mest effekt, og over på den store. P falder fra ca. 760 W til ca. 733 W.

**Praksis:** en afbrudt nul i en landinstallation giver samme fænomen. Apparater på den let belastede fase kan få op mod 400 V og brænde af.

### Kirchhoff med tangamperemeter

**Pointe:** tangen måler summen af de strømme, der går gennem den.

- 3-leder: tang om L1+L2+L3 viser 0. Om to ledere viser den strømmen i den tredje.
- 4-leder: L1+L2+L3 viser nulstrømmen. L1+L2+L3+N viser 0.

### Wattmetermetoderne

**Pointe:** metoden vælges efter nettet og lasten.

| Metode | Kræver | Må bruges ved |
|---|---|---|
| 1 wattmeter, P = 3 · W | Adgang til N | Kun symmetrisk last |
| 3 wattmetre | 4-leder | Al last |
| 2 wattmetre (Aron) | 3-leder | Al last |

**Hvorfor virker Aron?** I et 3-ledernet er I1 + I2 + I3 = 0, så den tredje strøm er givet af de to andre. To wattmetre er nok.

**Det negative wattmeter:** ved cos φ under 0,5 viser det ene wattmeter negativt, fordi cos(30° + φ) bliver negativ. Det er ikke en fejl. Visningerne lægges sammen med fortegn.

## 3 · Det du skal kunne tegne

Tegn dem på papir, til du kan gøre det uden at tænke.

1. **Stjerne- og trekantkobling** med U_f, U_L, I_f og I_L markeret.
2. **Vektordiagram for et symmetrisk net:** U1, U2 og U3 med 120° imellem, og netspændingerne som trekanten mellem spidserne.
3. **Strømmene ved usymmetrisk last med nul,** lagt sammen spids til hale, så I_N bliver den manglende side.
4. **Stjernepunktsforskydningen uden nul:** spændingstrekanten ligger fast, N' trækkes mod den mindste modstand, og pilene fra N' til hjørnerne er spændingerne over lasterne.
5. **Aron-koblingen:** strømspoler i L1 og L2, spændingsspoler mod L3.
6. **Resistiv og induktiv strøm i parallel:** I_w vandret, I_b 90° nedad, I som hypotenusen.

<details markdown="1"><summary>Tjek din tegning af stjernepunktsforskydningen</summary>

Med R1 = 200, R2 = 160 og R3 = 320 Ω ligger N' tættest på L2's hjørne (mindst modstand). Pilen fra N' til L3 er længst (271 V), pilen til L2 kortest (197 V).
</details>

## 4 · Spørgsmål du kan forvente

Svar højt, før du åbner.

<details markdown="1"><summary>Hvorfor er netspændingen √3 gange fasespændingen?</summary>

Netspændingen er forskellen mellem to fasespændinger, der står 120° fra hinanden. I vektordiagrammet danner de en ligebenet trekant med 120° i toppen, og grundlinjen bliver 2 · 230 · cos 30° = √3 · 230 = 400 V.
</details>

<details markdown="1"><summary>Hvorfor bruger effektformlen √3 både i stjerne og trekant?</summary>

I Y er I_f = I_L og U_f = U_L / √3. I Δ er U_f = U_L og I_f = I_L / √3. I begge tilfælde bliver 3 · U_f · I_f = √3 · U_L · I_L.
</details>

<details markdown="1"><summary>Hvad sker der, hvis nullen knækker i en bolig?</summary>

Lasten bliver en usymmetrisk stjerne uden nul. Stjernepunktet flytter sig mod den tungest belastede fase, og apparaterne på den let belastede fase kan få op mod 400 V. Apparater kan brænde af.
</details>

<details markdown="1"><summary>Hvorfor kan du ikke bruge 1-wattmetermetoden i aktivitet 3 og 4?</summary>

Lasten er usymmetrisk, så de tre faser trækker forskellig effekt. P = 3 · W forudsætter, at alle faser er ens. I aktivitet 4 er der heller ikke noget nulpunkt at koble spændingsspolen til.
</details>

<details markdown="1"><summary>Det ene wattmeter viser negativt. Har du koblet forkert?</summary>

Ikke nødvendigvis. Ved symmetrisk last viser W_a = U · I · cos(30° + φ), som bliver negativ, når cos φ er under 0,5. Vend ikke ledningerne, men læg visningerne sammen med fortegn.
</details>

<details markdown="1"><summary>Hvorfor er den samlede strøm ikke 2,17 + 2,30 A i aktivitet 2?</summary>

Den resistive strøm er i fase med spændingen, den induktive ligger 90° efter. De lægges sammen vektorielt: √(2,17² + 2,30²) = 3,16 A.
</details>

<details markdown="1"><summary>En Y-koblet spole skal kobles om til Δ og give samme Q. Hvad skal der ske med L?</summary>

L skal være 3 gange større. I Δ får spolen 400 V i stedet for 230 V, altså 3 gange så meget Q ved samme X. For at holde Q skal X (og dermed L) gøres 3 gange større.
</details>

<details markdown="1"><summary>Hvordan kan du med én tang kontrollere, at du har målt rigtigt?</summary>

Kirchhoff: i et 3-ledernet skal tangen om alle tre faser vise 0. Om to faser skal den vise strømmen i den tredje. I et 4-ledernet skal L1+L2+L3 vise det samme som tangen om N.
</details>

## 5 · Ved bordet i laboratoriet

Den praktiske prøve er en opstilling som i Lab 1. Det, censor kigger efter:

1. **Sikkerheden først.** PE på alt udstyr, kontinuitet med Contilight, visuel kontrol, og underviseren godkender, før du tænder. Alle ændringer i spændingsløs tilstand.
2. **Beregn før du måler.** Forventede strømme og effekt ud fra modstandene, så du ved, om målingen er rimelig, og så du ikke overbelaster noget.
3. **Vælg den rigtige målemetode** og sig hvorfor (se tabellen i afsnit 2).
4. **Tangens pil mod forbrugeren**, og brug Kirchhoff som kontrol af dine strømme.
5. **Forklar afvigelser.** Netspændingen er sjældent præcis 400 V, og modstandene er ikke præcis de mærkede værdier. Regn efter med den målte spænding.

| Aktivitet | Opstilling | Metode | Det skal du kunne sige |
|---|---|---|---|
| 1 | Symmetrisk Δ, 320 Ω pr. gren | 1 wattmeter | P = 3 · W, tang om tre faser viser 0 |
| 2 | + Y-spole, X_L = 100 Ω | 1 wattmeter | Strømmene lægges vektorielt sammen, L = 0,318 H |
| 3 | Usymmetrisk Y med nul | 3 wattmetre | Nullen fører differensstrømmen, hver fase har 230 V |
| 4 | Samme uden nul | Aron | Stjernepunktet flytter sig, P falder |

## 6 · Faldgruber censor spørger ind til

- Strømme lagt sammen som tal i stedet for vektorer.
- √3 på den forkerte side i Δ (det er strømmen, ikke spændingen, der ganges med √3).
- 1-wattmetermetoden brugt på usymmetrisk last.
- 230 V pr. fase brugt i aktivitet 4, hvor nullen er fjernet.
- Et negativt wattmeter "rettet" ved at vende ledningerne.
- Glemt at regne effekten ud fra den målte spænding i stedet for 400 V.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

Sig det højt uden at kigge, og tjek bagefter.

<details markdown="1"><summary>Vis huskekortet</summary>

Et 3 × 400/230 V net har tre fasespændinger med 120° imellem, og netspændingen er √3 gange fasespændingen. I stjerne får lasten 230 V, i trekant 400 V, så samme modstand giver 3 gange effekten i trekant. Effekten er √3 · U_L · I_L · cos φ i begge koblinger. Ved symmetrisk last summerer strømmene til nul. Ved usymmetrisk last fører nullen differensstrømmen, og uden nul flytter stjernepunktet sig mod den mindste impedans, så den største impedans får mest spænding. Effekten måles med 1 wattmeter ved symmetri, 3 wattmetre i et 4-ledernet og Aron med 2 wattmetre i et 3-ledernet.
</details>
</div>
