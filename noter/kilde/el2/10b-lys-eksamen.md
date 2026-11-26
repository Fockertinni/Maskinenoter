id: lys-eksamen
navn: Alt du skal bruge til eksamen: Lysteknik
ikon: lys
intro: De vigtigste formler og begreber, det du skal kunne forklare, og de spørgsmål du kan forvente til lysquizzen og eksamen.
---
# Noter

> **Selvstudie**
> Emnet er selvstudie med obligatorisk opgave og lysquiz på Wiseflow. UV3 og UV10 var ikke med i materialet, så tjek tallene mod UV-materialet.

Hvis du kun når én ting: kunne skelne lumen, candela og lux, og regne E = I · cos³α / h².

## 1 · De vigtigste formler og enheder

| # | Formel eller enhed | Hvornår |
|---|---|---|
| 1 | Lysstrøm Φ i lumen (lm) | Al lyset fra kilden |
| 2 | Lysstyrke I i candela (cd = lm/sr) | Lyset i én retning |
| 3 | Belysningsstyrke E i lux (lx = lm/m²) | Lyset, der rammer en flade |
| 4 | Luminans L i cd/m² | Hvor lys en flade ser ud |
| 5 | Lysudbytte η = Φ / P i lm/W | Effektivitet |
| 6 | E = I / r² | Vinkelret indfald |
| 7 | E = I · cos α / r² | Skråt indfald |
| 8 | E_vandret = I · cos³α / h² | Lampe i højden h over et bord |
| 9 | E_m = n · Φ · UF · MF / A | Rumbelysning |

> **Fælden**
> I cos³α / h² bruges **højden** h, ikke den skrå afstand r. Bruger du r, er det kun cos α.

## 2 · Det du skal kunne forklare

### Begreberne

**Pointe:** lumen er al lyset, candela er lyset i én retning, lux er lyset pr. kvadratmeter på fladen, og luminans er det, øjet ser.

**Eksempel:** to lamper med samme lumen kan give forskellig lux på bordet, hvis den ene samler lyset i en kegle (høj candela nedad).

### Afstand og vinkel

**Pointe:** E falder med afstanden i anden, og når lyset rammer skråt, fordeles det over et større areal.

**Hvorfor cos³α:** én cos α fra den skrå indfaldsvinkel og to fra, at r² = h² / cos²α.

**Tal:** 1.000 cd i 2 m højde giver 250 lx lige under og 128 lx 1,5 m til siden.

### Rumbelysning

**Pointe:** E_m = n · Φ · UF · MF / A. UF er den del af lyset, der når arbejdsfladen, MF tager højde for snavs og aldring.

**Tal:** 12 armaturer à 4.000 lm, UF 0,6, MF 0,8 på 60 m² giver 384 lx.

### Lyskilderne

| Lyskilde | lm/W | Det skal du kunne sige |
|---|---|---|
| Glødelampe/halogen | 10–25 | Termisk stråler, Ra = 100, kort levetid |
| Lysstofrør | 60–100 | Kræver forkobling, lav cos φ med spole, derfor kondensator |
| LED | 100–200 | Lang levetid, dæmpbar, driveren er en ulineær last |

- **Farvetemperatur:** varmhvid 2.700–3.000 K, neutral 4.000 K, dagslys 5.000–6.500 K.
- **Ra:** mindst 80 på arbejdspladser.

### Stroboskopeffekt

**Pointe:** lys, der flimrer med 100 Hz, kan få roterende maskiner til at se stillestående ud. Farligt i maskinrum.

**Afhjælpning:** elektronisk forkobling eller armaturer fordelt på tre faser.

## 3 · Koblinger til resten af faget

- **Lysstofrør** med konventionel forkobling er en induktiv last, som fasekompenseres (lysrørspanel 09 i labbet).
- **LED-drivere** er ulineære laster, der giver harmoniske og kan overbelaste nullen.
- **Trefaset fordeling** af armaturer mod stroboskopeffekt.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvad er forskellen på lumen og lux?</summary>

Lumen er hele lysmængden fra kilden. Lux er lumen pr. kvadratmeter, der rammer en flade.
</details>

<details markdown="1"><summary>Lampen hejses fra 2 m til 4 m. Hvad sker der med E under lampen?</summary>

Den falder til en fjerdedel, fordi E = I / h².
</details>

<details markdown="1"><summary>Hvorfor har lysstofrør med spole dårlig cos φ, og hvad gør man ved det?</summary>

Forkoblingsspolen er induktiv og trækker reaktiv strøm. Man sætter en kompenseringskondensator på, eller bruger elektronisk forkobling.
</details>

<details markdown="1"><summary>Hvorfor er LED-belysning et problem for nullen?</summary>

Driverne er ulineære og giver 3. harmoniske, som er i fase i alle tre faser og lægges sammen i nullen.
</details>

<details markdown="1"><summary>Hvad er candela defineret ud fra?</summary>

Stråling ved 540 THz (grønt lys, hvor øjet er mest følsomt) med 1/683 W pr. steradian.
</details>

## 5 · Faldgruber

- Lumen, candela og lux blandet sammen.
- r brugt i stedet for h i cos³α-formlen.
- MF glemt i rumbelysningen.
- Stroboskopeffekt forklaret som "flimmer, der er irriterende" i stedet for en sikkerhedsrisiko ved roterende maskiner.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Lysstrøm i lumen er al lyset fra kilden, lysstyrke i candela er lyset i én retning, og belysningsstyrke i lux er lyset pr. kvadratmeter på en flade. E falder med afstanden i anden og med cos α ved skråt indfald, og for en lampe over et bord er E = I cos³α / h². Rumbelysning regnes som antal gange lumen gange UF og MF delt med arealet. LED har det højeste lysudbytte, men driveren giver harmoniske. Lysstofrør med spole skal kompenseres, og flimmer på 100 Hz giver stroboskopeffekt ved roterende maskiner.
</details>
</div>
