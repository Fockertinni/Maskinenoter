id: lys
navn: Lysteknik
ikon: lys
intro: Selvstudie. Lysstrøm, lysstyrke, belysningsstyrke og luminans, afstandskvadratloven og cosinusloven, rumbelysning og lyskilderne fra glødelampe til LED.
---
# Noter

> **Kilder**
> Selvstudie med obligatorisk opgave og lysquiz på Wiseflow · UV3 og UV10
> UV-materialet var ikke med i Martins materiale, så afsnittet bygger på kursets emneliste og standardteori. Tjek det mod UV-materialet.

Lysteknik handler om at beskrive, hvor meget lys en kilde giver, hvordan det fordeler sig, og hvor meget der rammer arbejdsfladen.

## Grundbegreber

| Størrelse | Symbol | Enhed | Betydning |
|---|---|---|---|
| Lysstrøm | Φ | lumen (lm) | Den samlede synlige lysmængde fra kilden |
| Lysstyrke | I | candela (cd) = lm/sr | Lysstrøm pr. rumvinkel i en bestemt retning |
| Belysningsstyrke | E | lux (lx) = lm/m² | Lysstrøm, der rammer en flade |
| Luminans | L | cd/m² | Hvor lys en flade ser ud for øjet |
| Lysudbytte | η | lm/W | Lysstrøm pr. tilført effekt (effektivitet) |

Candela er SI-grundenhed: stråling ved 540 THz (grønt lys, hvor øjet er mest følsomt) med 1/683 W pr. steradian.

## Fotometriske love

**Afstandskvadratloven** (punktformig kilde, lyset rammer vinkelret):

```
E = I / r²
```

**Cosinusloven** (lyset rammer fladen skråt med vinklen α fra fladens normal):

```
E = I · cos α / r²        E_vandret = I · cos³α / h²
```

Den sidste form bruges, når lampen hænger i højden h over et vandret bord: r = h / cos α, så r² = h² / cos²α.

<details markdown="1"><summary>Forudsig først: lampen hejses fra 2 m til 4 m over bordet. Hvad sker der med E lige under lampen?</summary>

Den falder til en fjerdedel, fordi E = I / h². Prøv i modellen, og se også hvordan E falder, når du går til siden.
</details>

<div class="m" data-m="lys"></div>

**Gennemsnitlig belysning i et rum:**

```
E_m = n · Φ · UF · MF / A
```

n er antal lyskilder, UF udnyttelsesfaktoren (hvor meget af lyset der når arbejdsfladen), MF vedligeholdelsesfaktoren (snavs og aldring) og A arealet.

### Gennemregnet eksempel

Et værksted på 60 m² har 12 armaturer med 4.000 lm hver. UF = 0,6 og MF = 0,8. Hvad er E_m? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

E_m = 12 · 4.000 · 0,6 · 0,8 / 60 = 23.040 / 60 = 384 lx.
</details>

## Lyskilder

| Lyskilde | Princip | Lysudbytte | Bemærkninger |
|---|---|---|---|
| Glødelampe/halogen | Termisk stråler | Ca. 10–25 lm/W | Ra = 100, kort levetid |
| Lysstofrør | Gasudladning i kviksølvdamp. UV omdannes i et fluorescerende lag | Ca. 60–100 lm/W | Kræver forkobling (spole + starter eller elektronisk). Lav cos φ med konventionel spole, derfor kompenseringskondensator (lysrørspanel 09 i labbet) |
| LED | Halvlederdiode | Ca. 100–200 lm/W | Lang levetid, dæmpbar. Driveren er en ulineær last og giver harmoniske strømme |

- **Farvetemperatur (K):** varmhvid ca. 2.700–3.000 K, neutral 4.000 K, dagslys 5.000–6.500 K.
- **Farvegengivelse (Ra/CRI):** 0–100. Mindst 80 på arbejdspladser.

> **Stroboskopeffekt**
> Lys, der flimrer med 100 Hz, kan få roterende maskiner til at se stillestående ud. Det er farligt i et maskinrum. Undgås med elektronisk forkobling eller ved at fordele armaturerne på tre faser.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad er forskellen på lumen, candela og lux?
2. Hvorfor indgår cos³α og ikke cos α, når lampen hænger over et vandret bord?
3. Hvorfor har et lysstofrør med konventionel forkobling dårlig cos φ?
4. Hvordan undgår man stroboskopeffekt i et maskinrum?

<details markdown="1"><summary>Svar</summary>

1. Lumen er den samlede lysmængde, candela er lysstyrken i én retning (lm pr. steradian), og lux er hvor meget lys der rammer en flade (lm/m²).
2. Én cos α kommer fra den skrå indfaldsvinkel. De to andre kommer fra, at afstanden r er større end h: r² = h² / cos²α.
3. Forkoblingsspolen er en induktiv last, der trækker reaktiv strøm.
4. Elektronisk forkobling (højfrekvent drift) eller ved at fordele armaturerne på tre faser, så flimmeret ikke er i takt.
</details>
</div>

# Formler

### Enheder
```
1 cd  = 1 lm/sr
1 lx  = 1 lm/m²
η     = Φ / P            (lm/W)
```

### Punktkilde
```
E = I / r²                   (vinkelret indfald)
E = I · cos α / r²           (skråt indfald)
E_vandret = I · cos³α / h²   (lampe i højden h)
```

### Rumbelysning
```
E_m = n · Φ · UF · MF / A
```

# Quiz

Q: Hvilken enhed har belysningsstyrke?
A: Lumen
A: Candela
R: Lux
A: cd/m²
F: Lux er lumen pr. kvadratmeter, altså hvor meget lys der rammer en flade.

Q: En lampe med I = 1.000 cd hænger 2 m over bordet. Hvad er E lige under lampen? (lx)
N: 250 ; 1 ; lx
L: E = I / h² = 1.000 / 2² = 250 lx.
F: Afstandskvadratloven.

Q: Samme lampe. Hvad er E på bordet 1,5 m til siden? (lx)
N: 128 ; 1 ; lx
L: r = √(2² + 1,5²) = 2,5 m, cos α = 2 / 2,5 = 0,8. E = 1.000 · 0,8³ / 2² = 1.000 · 0,512 / 4 = 128 lx.
F: E falder både fordi afstanden vokser, og fordi lyset rammer skråt.

Q: Et rum på 60 m² har 12 armaturer à 4.000 lm, UF = 0,6 og MF = 0,8. Hvad er E_m? (lx)
N: 384 ; 1 ; lx
L: E_m = 12 · 4.000 · 0,6 · 0,8 / 60 = 384 lx.
F: MF tager højde for snavs og aldring af lyskilderne.

Q: Hvilken lyskilde har det højeste lysudbytte?
A: Glødelampe
A: Halogen
A: Lysstofrør
R: LED
F: LED ligger på ca. 100–200 lm/W.

Q: Hvad er den mindste anbefalede farvegengivelse (Ra) på en arbejdsplads?
A: 50
A: 65
R: 80
A: 100
F: Ra ≥ 80.

Q: Hvorfor er stroboskopeffekt farlig i et maskinrum?
A: Den giver hovedpine
R: Roterende maskiner kan se ud, som om de står stille
A: Den overbelaster nullen
A: Den ødelægger lysstofrørene
F: Lys, der flimrer med 100 Hz, kan "fryse" en aksel, der drejer med et multiplum af frekvensen.
