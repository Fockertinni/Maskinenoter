id: centrifuger
navn: Centrifuger og separation
ikon: centrifuge
intro: Stokes' lov, hvorfor en centrifuge separerer ca. 6000 gange bedre end en settlingstank, purifier mod clarifier, gravity disc, tallerkenstakken og Alcap.
---
# Noter

> **Kilder**
> K31 · Lektion 35

En centrifuge separerer ca. **6000 gange kraftigere** end en settlingstank, fordi tyngdeaccelerationen g erstattes af r·ω².

## Stokes' lov

Faldhastigheden for en partikel i en væske stiger med partikelstørrelsen i anden potens og med massefyldeforskellen, og den falder med viskositeten.

- Stor massefyldeforskel → bedre separation.
- Lav massefylde og viskositet af væsken → bedre separation.
- **Derfor opvarmes olien** før separation: større massefyldeforskel og lavere viskositet.
- I en settlingstank er hastigheden meget lille, så olien skal blive længe i tanken.

## Purifier mod clarifier

| | Purifier | Clarifier |
|---|---|---|
| Fjerner | Faste partikler og vand | Kun faste partikler |
| Vandudløb | Åbent, vandlås | Lukket. Vand fjernes kun med slammet ved skud |
| Interface | Justeres med gravity disc | Ingen |
| Placering | Først | Efter purifier i serie ("sikkerhedsnet") |

Begge har en grænse på **991 kg/m³ ved 15 °C**.

## Interface og gravity disc

Interfacet er skillelinjen mellem olie og vand i den roterende skål. Dets radius bestemmes af massefylderne og udløbsradierne. Olieudløbets radius er fast, så interfacet flyttes ved at ændre vandudløbets radius: **gravity disc**. Den skiftes ved ny brændstoftype (ny massefylde), ofte ved trial and error.

> **Forkert gravity disc**
> Vandlåsen brydes, og olie løber ud med vandet til slamtanken.

**Selvrensning ("skud"):** luk for olie og vand → tøm skålen → bunden falder, og slammet skydes ud med stor kraft → skålen lukker → vand åbnes (genskaber vandlåsen) → olie åbnes.

## Tallerkenstakken

Olien strømmer laminart ind mod centrum mellem tallerkenerne (hastighed W). Centrifugalkraften giver partiklen en hastighed V ud mod periferien. Resultanten skal ramme den øvre tallerken, før partiklen når ud med den rene olie. Ved tallerkenoverfladen er hastigheden 0, så partiklen glider ud til slamrummet. **Lavere flow (mindre W) → partiklen rammer tidligere → bedre rensning.**

## Alcap (Alfa Laval)

En clarifier med automatisk vanddræn, til brændstof med høj massefylde.

1. Forvarmet olie tilføres kontinuerligt. Vand og slam samles ved periferien.
2. Når vandet når tallerkenstakken, slipper spor af vand ud med den rene olie.
3. Transduceren MT 50 i olieudløbet måler vandindholdet.
4. Over grænsen åbner en magnetventil vanddrænet, og interfacet flyttes ud.
5. Ved skud: olietilførslen lukkes, vand fortrænger resten af olien til rent-olie-siden, og skålen åbner.

## Separation i praksis

- **Cat fines** (aluminiumoxider fra raffineringen) ødelægger højtrykspumper, injektorer og cylindre.
- ISO 8217 tillader max 80 ppm. Motorfabrikanter vil helst have max 15 ppm. Separatorer kan fjerne partikler ned til 2 µm.
- Optimerende faktorer: temperatur, viskositet, feed rate, tallerkenstak, massefylde af olie og vand, partikelstørrelse og -antal, vandindhold og kemiske egenskaber.
- **Tommelfingerregel:** jo lavere kapacitet, desto renere brændstof. Derfor er separatorer overdimensionerede og kører ved en procentdel af max.

<div class="genkald" markdown="1">
### Test dig selv

1. Udled Z, og forklar, hvorfor centrifugen er ca. 6000 gange bedre.
2. Hvad sker der med en forkert gravity disc?
3. Forklar Alcap-princippet trin for trin.
4. Hvorfor giver lavere flow renere olie?

<details markdown="1"><summary>Svar</summary>

1. I Stokes' lov står g. I centrifugen erstattes g af r·ω². Z = r·ω²/g. Med r = 0,2 m og 5000 o/min er Z ≈ 5600.
2. Interfacet flytter. For langt ud: olie i vandudløbet. For langt ind: vand i olien. Vandlåsen kan brydes, og olie løber til slamtanken.
3. Se listen: olie ind, vand samles ude, MT 50 måler vand i olieudløbet, magnetventil dræner vand, skud.
4. Olien bruger længere tid mellem tallerkenerne, så partiklen når at ramme tallerkenen, før den kommer ud.
</details>
</div>

# Formler

### Stokes' lov (tyngde)
```
V_g = d² · (ρ_p – ρ_v) / (18 · η) · g

d   = partikeldiameter (m)
ρ_p = partiklens massefylde, ρ_v = væskens massefylde (kg/m³)
η   = dynamisk viskositet (kg/m·s)
g   = 9,81 m/s²
```

### I centrifugen
```
ω = 2π · n / 60          (n i o/min)
a = r · ω²
Z = r · ω² / g           separationsfaktor
V = d² · Δρ / (18 · η) · r · ω² = V_g · Z
```

## Eksempel

Settlingstank: d = 8 µm, Δρ = 50 kg/m³, η = 10⁻³ kg/m·s. Centrifuge: r = 0,2 m, n = 5000 o/min. Find V_g, ω, Z og V.

<details markdown="1"><summary>Vis udregning</summary>

- V_g = (8·10⁻⁶)² · 50 / (18 · 10⁻³) · 9,81 = **1,75 · 10⁻⁶ m/s**.
- ω = 2π · 5000/60 = **523,6 rad/s**.
- Z = 0,2 · 523,6² / 9,81 ≈ **5590**.
- V = V_g · Z ≈ **0,0098 m/s**. Forholdet V/V_g ≈ 5600.
</details>

# Quiz

Q: Hvorfor opvarmes olien før separation?
A: For at fordampe vandet
R: Viskositeten falder, og massefyldeforskellen mellem olie og vand/partikler bliver større
A: For at brænde cat fines af
A: For at øge flowet
F: Begge dele øger separationshastigheden i Stokes' lov.

Q: Hvad er forskellen på en purifier og en clarifier?
R: Purifieren fjerner både vand og partikler og har vandlås. Clarifieren fjerner kun partikler
A: Clarifieren fjerner vand, purifieren partikler
A: Purifieren står altid efter clarifieren
A: Der er ingen forskel ud over størrelsen
F: Clarifieren står efter purifieren som sikkerhedsnet.

Q: Hvad bruges gravity disc til?
A: At regulere flowet
R: At placere interfacet mellem olie og vand ved at ændre vandudløbets radius
A: At styre skudintervallet
A: At måle vandindholdet
F: Den skiftes ved ny brændstoftype, fordi massefylden ændrer interfacets placering.

Q: Hvad er ω ved 5000 o/min? (rad/s, 1 decimal)
N: 523,6 ; 0,2 ; rad/s
L: ω = 2π · 5000 / 60 = 523,6 rad/s.
F: Husk at dividere med 60 for at komme fra minutter til sekunder.

Q: r = 0,2 m og ω = 523,6 rad/s. Hvad er separationsfaktoren Z? (hele tal)
N: 5589 ; 15 ;
L: Z = r · ω² / g = 0,2 · 274.157 / 9,81 = 5.589.
F: Centrifugen separerer altså ca. 5600 gange hurtigere end tyngdekraften alene.

Q: Hvad sker der, hvis flowet gennem separatoren øges?
A: Bedre rensning
R: Dårligere rensning, fordi partiklerne når ud med olien, før de rammer tallerkenen
A: Ingen ændring
A: Interfacet flytter ind
F: Tommelfingerregel: jo lavere kapacitet, desto renere brændstof.

Q: Hvor mange ppm cat fines tillader ISO 8217?
A: 15
A: 40
R: 80
A: 150
F: Motorfabrikanterne vil helst ned på 15 ppm, så separatoren skal fjerne en stor del.

Q: Hvordan registrerer Alcap, at vandet skal drænes?
A: Ved et fast tidsinterval
R: Transduceren MT 50 måler vandindhold i olieudløbet, og over grænsen åbnes vanddrænet
A: Ved at måle trykket i skålen
A: Ved at føle på olietemperaturen
F: Når vandet når tallerkenstakken, slipper spor ud med olien. Det er signalet.
