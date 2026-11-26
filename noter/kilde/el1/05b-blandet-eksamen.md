id: blandet-eksamen
navn: Alt du skal bruge til eksamen: Blandede AC-kredse
ikon: sinus
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at tegne strøm-spændingsdiagram."

Hvis du kun når én ting: kunne tegne vektordiagrammet for to seriegrene i parallel (U som reference, Thales-cirklen, I1, I2 og I) og forklare, hvorfor U_cd er korden mellem de to midtpunkter.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | Z = R + jX_L eller R − jX_C | Én gren |
| 2 | Z = (Z1⁻¹ + Z2⁻¹)⁻¹ | Grene i parallel |
| 3 | I = U / Z og I = I1 + I2 | Strømme (vektorielt) |
| 4 | U_cd = U_ca − U_ad | Spænding mellem grenenes midtpunkter |
| 5 | φ = vinkel(U) − vinkel(I) | Faseforskydning |
| 6 | Z_fa = R1 + Z_eb + jX_L1 | Parallelkreds i serie med andet |

## 2 · Det du skal kunne forklare

### Beregningsgangen

**Pointe:** reducer kredsen fra inderst til yderst, find den samlede strøm, og gå baglæns.

**Sådan:** reaktanser først. Hver gren som et komplekst tal. Parallel med (Z1⁻¹ + Z2⁻¹)⁻¹. I = U/Z. Spændingen over parallelkredsen, så grenstrømmene. Kontrollér med Kirchhoff.

### Vektordiagrammet for parallelforbundne seriekredse

**Pointe:** U er reference. I spolegrenen ligger I1 efter U, i kondensatorgrenen ligger I2 før U. I er vektorsummen.

**Spændingerne:** i hver gren står U_R og U_X vinkelret, så midtpunkterne c og d ligger på Thales-cirklen over U. U_cd er linjen mellem c og d.

**Tal du kan nævne:** opgavesæt 2, opgave 7: I1 = 0,79 A og I2 = 0,56 A, men den samlede strøm er kun 0,87 A, fordi de næsten står 100° fra hinanden. U_cd = 98 V, næsten hele netspændingen.

### Vektordiagrammet for serieforbundne parallelkredse

**Pointe:** I1 er fælles for seriedelen og er reference. Spændingerne U_R1, U_eb og U_L1 lægges spids til hale til U. Parallelkredsens to strømme findes ud fra U_eb.

## 3 · Det du skal kunne tegne

1. Kredsløbet med a, b, c og d markeret og strømpile.
2. Vektordiagram for parallelforbundne seriekredse: U lodret, Thales-cirklen, U_R1 og U_L i den ene gren, U_R2 og U_C i den anden, I1, I2 og I, og U_cd.
3. Vektordiagram for en serieforbundet parallelkreds: I1, U_R1, U_eb, U_L1 og U, og I2 og I3 ud fra U_eb.
4. Vælg målestok for strømme og spændinger hver for sig, og skriv den på.

<details markdown="1"><summary>Tjek din tegning af opgave 7</summary>

U = 100 V lodret. Spolegrenen: U_R1 = 78,6 V drejet 38° fra U mod højre, U_L = 61,8 V vinkelret derpå. Kondensatorgrenen: U_R2 = 44,9 V drejet 63° mod venstre, U_C = 89,4 V vinkelret. c og d ligger på hver sin side af U på cirklen. I1 = 0,79 A til højre for U, I2 = 0,56 A til venstre, I = 0,87 A næsten langs U.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor kan den samlede strøm være mindre end en af grenstrømmene?</summary>

Grenstrømmene har forskellige vinkler. En induktiv og en kapacitiv grenstrøm har modsat rettede reaktive dele, som ophæver hinanden.
</details>

<details markdown="1"><summary>Hvordan ser du på vektordiagrammet, om kredsen er induktiv eller kapacitiv?</summary>

Ligger den samlede strøm efter spændingen (med uret fra U), er kredsen induktiv. Ligger den før, er den kapacitiv.
</details>

<details markdown="1"><summary>Hvad bruger man en bro som c–d til?</summary>

Til at sammenligne to impedanser. Er U_cd = 0, er grenene i balance, og en ukendt impedans kan bestemmes ud fra de kendte. Det er princippet i målebroer.
</details>

<details markdown="1"><summary>Hvorfor må du ikke lægge X_L1 til som et reelt tal i en seriekreds?</summary>

Spolen er drejet 90°. Den skal lægges til imaginærdelen (jX_L1), ellers bliver både |Z| og φ forkerte.
</details>

## 5 · Faldgruber

- X_C skrevet med plus.
- Vinklen på U eller I brugt som φ i stedet for forskellen.
- Strømme lagt sammen som tal.
- Samme målestok brugt til spændinger og strømme uden at skrive det på.
- Glemt at regne baglæns til grenstrømmene.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

En blandet AC-kreds reduceres som i DC, bare med komplekse tal: en spole er +jX_L og en kondensator −jX_C. Grene i parallel regnes med (Z1⁻¹ + Z2⁻¹)⁻¹. Jeg finder den samlede strøm, går baglæns og finder grenstrømmene, og kontrollerer med Kirchhoff. I vektordiagrammet er reference den størrelse, der er fælles: spændingen for parallelle grene, strømmen for serieled. I hver gren står U_R og U_X vinkelret, så midtpunkterne ligger på Thales-cirklen, og U_cd er korden mellem dem. φ er vinklen fra strømmen til spændingen.
</details>
</div>
