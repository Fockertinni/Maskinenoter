id: dc-eksamen
navn: Alt du skal bruge til eksamen: DC-kredse
ikon: batteri
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at forklare beregning af et givent DC-kredsløb m. batteri." (fra listen over de 13 eksamenstemaer)

Hvis du kun når én ting: kunne tage en kreds med to kilder, vælge metode (superposition, maskeligninger eller Thevenin), regne strømmene og bagefter kontrollere dem med Kirchhoff. Kontrollen er det, der overbeviser censor.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | U = R · I og P = R · I² | Altid |
| 2 | R_serie = R1 + R2 | Samme strøm |
| 3 | R_par = (R1⁻¹ + R2⁻¹)⁻¹ | Samme spænding |
| 4 | U1 = U · R1 / (R1 + R2) | Spændingsdeler |
| 5 | I1 = I · R2 / (R1 + R2) | Strømdeler (modsat modstand i tælleren) |
| 6 | ΣI = 0 og ΣE = Σ R·I | Kirchhoffs 1. og 2. lov |
| 7 | I = E_Th / (R_Th + R_L) | Thevenin |
| 8 | U_kl = E − I · R_i | Batteri med indre modstand |

## 2 · Det du skal kunne forklare

### Kirchhoffs love

**Pointe:** strøm forsvinder ikke i et knudepunkt, og spændingen rundt i en lukket maske summerer til nul.

**Hvorfor:** ladning bevares (1. lov), og potentialet i et punkt har kun én værdi, så du ender samme sted, når du går rundt (2. lov).

### Superposition

**Pointe:** i en lineær kreds kan du regne én kilde ad gangen og lægge strømmene sammen.

**Sådan:** behold én kilde, kortslut de andre (behold deres indre modstand), regn strømmene, gentag, og læg sammen med fortegn. Effekt må ikke lægges sammen, fordi P følger I².

### Thevenin

**Pointe:** set fra to klemmer opfører enhver lineær kreds sig som én kilde E_Th bag én modstand R_Th.

**Sådan:** E_Th er tomgangsspændingen. R_Th er modstanden set ind i kredsen med kilderne kortsluttet. Kontrollér med kortslutningsstrømmen I_k = E_Th / R_Th.

**Tal du kan nævne:** opgavesæt 1, opgave 3 gav E_Th = 29,0 V og R_Th = 6,42 Ω. Med 5 Ω bliver U_ab = 12,7 V både i den rigtige kreds og i Thevenin-kredsen.

### Batteri i kredsen

**Pointe:** et batteri, der får en højere spænding påtrykt udefra, bliver opladet, og strømmen løber ind i plus.

**Tal:** i opgavesæt 1, opgave 5 ligger 14,5 V over belastningen. E1 = 12 V er lavere, så I_E1 bliver −0,55 A, altså ladestrøm.

## 3 · Det du skal kunne tegne

1. En serie- og en parallelkobling med U og I markeret.
2. En kreds med to kilder og tre grene, med strømpile og omløbsretning i to masker.
3. Superpositionens to delkredse ved siden af hinanden.
4. Thevenin-ækvivalenten: E_Th, R_Th og belastningen mellem a og b.
5. Et potentialdiagram for én maske.

## 4 · Spørgsmål du kan forvente

Svar højt, før du åbner.

<details markdown="1"><summary>Hvordan finder du R_Th i en kreds med to batterier?</summary>

Kortslut begge spændingskilder, men lad deres indre modstande sidde. Regn så modstanden set ind fra a og b med serie- og parallelreglerne.
</details>

<details markdown="1"><summary>Hvordan kan du se, om dine strømme er rigtige?</summary>

Brug Kirchhoffs 1. lov i et knudepunkt (summen skal være 0) og 2. lov rundt i en maske (spændingerne skal gå op). Med knudepunktsspændingen kan du også regne hver grenstrøm direkte som (E − U) / R.
</details>

<details markdown="1"><summary>Hvad betyder det, at en strøm bliver negativ i superpositionen?</summary>

At den løber modsat den retning, du antog. For et batteri betyder det, at det bliver opladet i stedet for at afgive strøm.
</details>

<details markdown="1"><summary>Hvorfor er belastningen med maksimal effekt ikke den bedste i praksis?</summary>

Ved R_L = R_Th går halvdelen af effekten tabt i kildens indre modstand. I et forsyningsnet vil man have høj virkningsgrad, så R_L skal være meget større end R_Th.
</details>

<details markdown="1"><summary>Hvad sker der med strømmen og kapaciteten, når du kobler batterier i serie og i parallel?</summary>

Serie: spændingerne lægges sammen, kapaciteten i Ah er uændret. Parallel: kapaciteten lægges sammen, spændingen er uændret, men cellerne skal være ens, ellers lader den ene den anden.
</details>

<details markdown="1"><summary>Hvad er forskellen på anode og katode i et batteri?</summary>

Ved afladning er anoden den negative elektrode, hvor der sker oxidation (fx zink eller grafit i Li-ion). Katoden er den positive elektrode, hvor der sker reduktion (fx manganoxid eller lithiumkoboltoxid).
</details>

## 5 · Faldgruber

- Den forkerte modstand i tælleren i strømdeleren.
- Kilden afbrudt i stedet for kortsluttet i superposition og Thevenin.
- Effekter lagt sammen med superposition.
- Fortegn på delstrømmene glemt, når de lægges sammen.
- Den indre modstand fjernet sammen med kilden.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

En DC-kreds løses med Ohms lov og Kirchhoffs to love: strømmen ind i et knudepunkt er lig strømmen ud, og spændingerne rundt i en maske går op. Serie deler spændingen, parallel deler strømmen. Med flere kilder bruger jeg superposition: én kilde ad gangen, de andre kortsluttet, og strømmene lægges sammen med fortegn. Vil jeg kun kende belastningen, laver jeg en Thevenin-ækvivalent: E_Th er tomgangsspændingen, R_Th er modstanden set ind med kilderne kortsluttet. Et batteri med lavere EMK end spændingen over sig bliver opladet. Til sidst kontrollerer jeg altid med Kirchhoff.
</details>
</div>
