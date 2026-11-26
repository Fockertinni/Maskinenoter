id: turbo
navn: Turboladning og beregninger
ikon: turbo
intro: Hvorfor turboladning giver mere effekt og lavere forbrug, luftens vej gennem anlægget, impuls- mod jævntryksladning, og et fuldt gennemregnet eksempel med effekter og virkningsgrader.
---
# Noter

> **Kilder**
> K30 · JW s. 63–68 · Lektion 39–40

Turboladning øger **fyldningsgraden**: mere skylleluft i cylinderen giver plads til mere brændstof, højere effektivt middeltryk, højere bremseeffekt og lavere specifikt brændstofforbrug.

## Luftens og gassens vej

1. Kompressoren suger luft fra maskinrummet gennem filter og lyddæmper.
2. Komprimering: tryk og temperatur stiger, og massefylden falder (fordi temperaturen stiger).
3. Skylleluftkøleren sænker temperaturen, så massefylden (og fyldningen) stiger.
4. Water mist catcher fanger udskilt vand, som drænes.
5. Skylleluftreceiver → skylleluftporte (2-takt) eller indsugningsventiler (4-takt).
6. Udstødningsgas → udstødningsreceiver → turbine (entalpifald → rotation) → udstødskedel.

Skyllelufttrykket skal være højere end trykket i udstødningsreceiveren, ellers kan cylinderen ikke skylles.

> **Vand i skylleluften**
> Varm luft kan rumme mere vanddamp, højt tryk mindre. Eksempel: 20 °C og 60 % RF = 8,7 g/kg. Ved 3 bar kan luften højst rumme 4,9 g/kg → 3,8 g vand pr. kg luft udskilles i køleren. Dråber, der når cylinderen, fordamper eksplosivt på foringen og ødelægger oliefilmen → øget slid.

## Lejer, tætning og køling

- Glidelejer og trykleje (aksialkræfter), eller sfæriske rullelejer (både radiale og aksiale).
- Olie fra hovedsmøresystemet eller et separat system.
- Labyrintpakdåser med låseluft, så udstødningsgas ikke slipper ud eller når smøreolien.
- Evt. vandkøling ved lejerne (water jacket), men så lidt som muligt, da køling gør processerne mindre adiabatiske og sænker effektiviteten.

## Vedligehold

- **Luftfilter:** skiftes ved max trykfald. Vaskes normalt ikke (mister filtreringsevne).
- **Vandvask** af kompressor og turbine under drift ved lav last: dråberne "eksploderer" på metallet og slår belægninger af.
- Turbinesiden kan også renses med **nøddeskaller** blæst ind med trykluft.
- **Skylleluftkøler:** renses på luftsiden ved stop med opløsningsmiddel og skylles med vand. Temperaturerne over køleren viser tilsmudsningsgraden.

## Turboladersystemer

- Parallelle turboladere skal give samme afgangstryk, ellers staller den svage.
- **Cut-out (TCV):** kobler en turbolader fra ved lav last, så de andre får mere gas.
- **CBV (Cylinder Bypass Valve):** reducerer luftmængden ved lav last.
- **Air waste-gate eller bypass:** afblæser eller leder luft uden om receiveren ved for stor kompressorkapacitet. Hindrer for højt kompressionstryk.
- **Exhaust waste-gate:** leder gas uden om turbinen, fx for mere effekt i udstødskedlen (påvirker turbo og motor).

| | Impulsturboladning | Jævntryksturboladning |
|---|---|---|
| Tilslutning | Hver udstødningsventil direkte til turboladeren (typisk 3 cylindre pr. lader) | Korte rør til fælles receiver |
| Gastilførsel | Impulser ved hver ventilåbning | Jævnt tryk |
| Energiomsætning | Mindre effektiv, lange rør, stort trykfald | God, lille trykfald |
| Lastskift | Reagerer hurtigt | Langsom trykopbygning, kræver el-drevne hjælpeblæsere ved start og lav last |
| Middeltryk og forbrug | Lidt højere specifikt forbrug | Udstødningsventilen kan åbne senere → højere middeltryk og termisk virkningsgrad |

Skylleluftreceiveren har CO₂-udløsning mod skylleluftbrand (gnister fra gennemslag). På røggassiden kan der sidde en SCR-reaktor til NOx-reduktion.

## Virkningsgrader

- **η_is,T og η_is,C:** hvor tæt turbine og kompressor kommer på den tabsfri (isentropiske) proces.
- **η_m:** mekaniske tab (lejefriktion, berøring mellem roterende og faste dele).
- **η_tot:** alle tab i forhold til de isentropiske processer.
- Turbinetab: hvirveltab, gnidningstab og lækagetab.

> **Trykfejl i kompendiet**
> Kompendiet skriver η_is,T i kompressorformlen. Det skal være η_is,C. Formlen er rettet på formelsiden.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor køles skylleluften?
2. Hvorfor kræver jævntryksladning hjælpeblæsere?
3. Tegn T-s-diagrammet for kompressor og turbine, og markér den isentropiske og den virkelige proces.
4. Hvorfor er kompressorens virkelige effekt større end den isentropiske?

<details markdown="1"><summary>Svar</summary>

1. Kold luft har større massefylde, så der kommer flere kg luft i cylinderen. Det giver plads til mere brændstof og lavere termisk belastning.
2. Ved start og lav last er der for lidt gasenergi til at bygge trykket op i den store receiver. Blæserne sikrer skyllelufttrykket.
3. Kompressor: fra p₁ op til p₂. Den virkelige proces ender til højre for isentropen (højere temperatur). Turbine: fra p₁ ned til p₂. Den virkelige ender til højre for isentropen (højere sluttemperatur).
4. Tabene (friktion i luften) bliver til varme, som opvarmer luften yderligere. Det kræver mere arbejde for at nå samme tryk.
</details>
</div>

# Formler

### Turbinen (G = udstødningsgas)
```
P_T    = ṁ_G · (h₁,T – h₂,T) = ṁ_G · c_p,G · (t₁,T – t₂,T)
P_is,T = ṁ_G · (h₁,T – h₂,is,T)
η_is,T = P_T / P_is,T
```

### Kompressoren (A = luft)
```
P_C    = ṁ_A · (h₂,C – h₁,C) = ṁ_A · (h₂,is,C – h₁,C) / η_is,C
P_is,C = ṁ_A · (h₂,is,C – h₁,C)
η_is,C = P_is,C / P_C
```

### Turboladeren samlet
```
η_m   = P_C / P_T
η_tot = P_is,C / P_is,T
```

## Eksempel: Kongsberg MC90, full ahead

| Side | t | p | ṁ | h ind | h ud | h ud, is |
|---|---|---|---|---|---|---|
| Kompressor | 37 → 171 °C | 1 → 3,05 bar | 43,3 kg/s | 539 kJ/kg | 675 kJ/kg | 656 kJ/kg (152 °C) |
| Turbine | 371 → 240 °C | 2,69 → 1,02 bar | 44,2 kg/s | 883 kJ/kg | 746 kJ/kg | 726 kJ/kg (220 °C) |

Beregn P_T, P_C, η_is,T, η_is,C, η_m og η_tot, før du åbner løsningen.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| P_T | 44,2 · (883 − 746) | ≈ 6.060 kW |
| P_C | 43,3 · (675 − 539) | ≈ 5.890 kW |
| η_is,T | (883 − 746) / (883 − 726) | 0,87 |
| η_is,C | (656 − 539) / (675 − 539) | 0,86 |
| η_m | 5.890 / 6.060 | 0,97 |
| η_tot | 43,3 · 117 / (44,2 · 157) | 0,73 |

Gassens massestrøm er større end luftens, fordi brændstoffet lægges til.
</details>

# Quiz

Q: Hvorfor køles skylleluften efter kompressoren?
A: For at beskytte receiveren
R: Så massefylden stiger, og der kommer mere luft i cylinderen
A: For at undgå kondensvand
A: For at sænke udstødningstemperaturen
F: Kold luft fylder mindre. Bemærk, at køleren netop *danner* kondensvand, som skal drænes.

Q: Turbinen: ṁ_G = 44,2 kg/s, h ind = 883 kJ/kg, h ud = 746 kJ/kg. Hvad er turbineeffekten? (kW, hele tal)
N: 6055 ; 10 ; kW
L: P_T = 44,2 · (883 − 746) = 44,2 · 137 = 6.055 kW (≈ 6.060 kW).
F: kg/s · kJ/kg = kJ/s = kW.

Q: Kompressoren: h ind = 539, h ud = 675, h ud,is = 656 kJ/kg. Hvad er den isentropiske virkningsgrad? (2 decimaler)
N: 0,86 ; 0,005 ;
L: η_is,C = (656 − 539) / (675 − 539) = 117/136 = 0,86.
F: For kompressoren står det isentropiske arbejde i tælleren, fordi det virkelige er størst.

Q: P_C = 5.890 kW og P_T = 6.060 kW. Hvad er den mekaniske virkningsgrad? (2 decimaler)
N: 0,97 ; 0,005 ;
L: η_m = P_C / P_T = 5.890 / 6.060 = 0,972.
F: Forskellen er lejefriktion og andre mekaniske tab.

Q: Luften indeholder 8,7 g vand/kg, men kan ved 3 bar kun rumme 4,9 g/kg. Hvor mange kg vand udskilles pr. time ved 43,3 kg/s luft? (hele kg)
N: 592 ; 3 ; kg/h
L: (8,7 − 4,9) = 3,8 g/kg · 43,3 kg/s = 164,5 g/s · 3.600 s/h = 592 kg/h.
F: Derfor er water mist catcher og dræn efter skylleluftkøleren vigtige.

Q: Hvilken turboladning kræver el-drevne hjælpeblæsere ved start og lav last?
A: Impulsturboladning
R: Jævntryksturboladning
A: Begge
A: Ingen af dem
F: Den store fælles receiver giver langsom trykopbygning, når der er lidt gasenergi.

Q: Hvad gør en cut-out-ventil (TCV)?
R: Kobler en turbolader fra ved lav last, så de andre får mere gas
A: Leder gas uden om turbinen til kedlen
A: Afblæser overskydende skylleluft
A: Lukker for skylleluften ved brand
F: Exhaust waste-gate leder gas uden om turbinen, og air waste-gate afblæser luft.

Q: Hvordan rengøres turbinesiden under drift?
A: Med opløsningsmiddel ved stop
R: Med vandvask ved lav last eller nøddeskaller blæst ind med trykluft
A: Ved at skifte luftfilteret
A: Med damp ved fuld last
F: Dråberne eller skallerne slår belægningerne af skovlene.
