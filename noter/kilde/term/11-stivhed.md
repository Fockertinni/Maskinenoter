id: stivhed
navn: Stivhed og materialelære
ikon: stiv
intro: Spænding og tøjning, Hookes lov og elasticitetsmodulet (Young's modulus), spændings-tøjningskurven for metaller, stivhed contra styrke og trækprøven.
---
# Noter

> **Kilder**
> Gruppefremlæggelsen "Stivhed – Materialelære" (Gruppe A): Young's modulus med tabel, typisk stress/strain-kurve for metaller og hvordan man måler stivhed (trækprøve med ekstensometer). Formler og tal er suppleret med standardteori.

Stivhed er, hvor meget et materiale modstår at blive deformeret. Et stift materiale strækker sig kun lidt under en given belastning. Stivhed er **ikke** det samme som styrke: glas er stift, men svagt, og gummi er blødt, men kan holde til meget tøjning.

## Spænding og tøjning

For at kunne sammenligne materialer uafhængigt af emnets størrelse regner man med spænding og tøjning i stedet for kraft og forlængelse.

```
Spænding:  σ = F / A          [N/mm² = MPa]
Tøjning:   ε = ΔL / L₀        [uden enhed, ofte i %]
```

## Hookes lov og elasticitetsmodulet

I det elastiske område er spændingen proportional med tøjningen. Proportionalitetskonstanten er **elasticitetsmodulet E** (Young's modulus):

```
σ = E · ε        E = σ / ε
```

E er materialets stivhed. Det er hældningen på den rette linje i begyndelsen af spændings-tøjningskurven. I det elastiske område går emnet tilbage til sin oprindelige længde, når kraften fjernes.

| Materiale | E [GPa] (fra slides) |
|---|---|
| Gummi | 0,01–0,1 |
| TPU (3D-print) | 0,02–0,05 |
| Nylon PA12 | 1,4–1,8 |
| ABS | 1,5–2,5 |
| PLA | 2,5–3,5 |
| Aluminium | ca. 70 |
| Titan | ca. 110 |
| Stål | ca. 200 (i regneopgaver ofte 210) |

> **Enheder**
> 1 GPa = 1.000 MPa = 1.000 N/mm². Stål har altså E ≈ 210.000 N/mm². Regn med kraft i N og areal i mm², så får du spændingen i MPa direkte.

**Forudsig først:** en stålstang og en aluminiumsstang med samme mål belastes med samme kraft. Hvilken strækker sig mest, og hvor meget mere?

<details markdown="1"><summary>Vis svar</summary>

Aluminium, ca. 3 gange så meget (210 / 70 = 3). Spændingen er den samme, men aluminium er 3 gange mindre stift.
</details>

## Spændings-tøjningskurven for metaller

<div class="m" data-m="stiv"></div>

Kurven fra en trækprøve har nogle vigtige punkter:

| Punkt | Betydning |
|---|---|
| Elastisk område | Ret linje, σ = E · ε. Deformationen går tilbage |
| Flydegrænse R_e (eller R_p0,2) | Her begynder blivende (plastisk) deformation. Konstruktioner dimensioneres efter den |
| Plastisk område | Materialet hærdes og kan tage lidt mere spænding |
| Trækstyrke R_m | Største spænding, materialet kan tåle |
| Indsnævring | Stangen bliver tynd ét sted (halsdannelse) |
| Brud | Brudforlængelsen A [%] er et mål for sejhed (duktilitet) |

R_p0,2 bruges for materialer uden tydelig flydegrænse (fx aluminium og rustfrit stål): den spænding, der giver 0,2 % blivende tøjning.

| Stål | R_e [MPa] | R_m [MPa] |
|---|---|---|
| S235 | 235 | 360–510 |
| S355 | 355 | 470–630 |

## Stivhed af en stang

Stivheden af et helt emne afhænger både af materialet og af geometrien:

```
ΔL = F · L₀ / (E · A)        k = F / ΔL = E · A / L₀
```

En lang og tynd stang er mindre stiv end en kort og tyk, selv af samme materiale.

### Gennemregnet eksempel

En stålstang (E = 210.000 MPa, R_e = 235 MPa) er 2 m lang med tværsnit 200 mm². Den belastes med 30 kN. Find spænding, tøjning, forlængelse og sikkerhed mod flydning. Regn først.

<details markdown="1"><summary>Vis udregning</summary>

| Størrelse | Udregning | Resultat |
|---|---|---|
| σ | 30.000 N / 200 mm² | 150 MPa |
| ε | 150 / 210.000 | 0,000714 = 0,071 % |
| ΔL | 0,000714 · 2.000 mm | 1,43 mm |
| Sikkerhed | 235 / 150 | 1,57 |

Stangen er elastisk og går tilbage til 2.000 mm, når kraften fjernes.
</details>

## Hvordan måler man stivhed? (trækprøven)

Slides viser en trækprøvemaskine med et ekstensometer.

1. En standardiseret prøvestav spændes fast i to kæber.
2. Maskinen trækker med stigende kraft, og en kraftmåler registrerer F.
3. **Ekstensometret** klemmer på staven over en kendt målelængde og måler forlængelsen meget præcist.
4. Ud fra F, A₀, ΔL og L₀ tegnes spændings-tøjningskurven, og E findes som hældningen i det elastiske område.

Andre metoder: hårdhedsprøvning (Brinell, Vickers, Rockwell) siger noget om styrken, og slagprøvning (Charpy) om sejheden. Elasticitetsmodulet kan også findes ved ultralyd, fordi lydens hastighed afhænger af E og massefylden.

## Sammenhæng med termodynamik

Et emne, der ikke kan udvide sig frit, får en termisk spænding σ = E · α · Δt (se **Varmeudvidelse**). Derfor betyder både stivheden og udvidelseskoefficienten noget, når man designer rør, cylinderforinger og stempler.

# Formler

### Spænding og tøjning
```
σ = F / A              [MPa = N/mm²]
ε = ΔL / L₀
```

### Hookes lov
```
σ = E · ε
ΔL = F · L₀ / (E · A)
k = E · A / L₀          (stangens stivhed, N/mm)
```

### Sikkerhed
```
n = R_e / σ
σ_tilladt = R_e / n
```

### Termisk spænding
```
σ = E · α · Δt
```

### Typiske værdier
```
E stål ≈ 210 GPa   E Al ≈ 70 GPa   E Ti ≈ 110 GPa
S235: R_e = 235 MPa    S355: R_e = 355 MPa
1 GPa = 1.000 MPa = 1.000 N/mm²
```

# Quiz

Q: En stang med tværsnit 100 mm² belastes med 20 kN. Hvad er spændingen? (MPa)
N: 200 ; 0,5 ; MPa
L: σ = 20.000 N / 100 mm² = 200 N/mm² = 200 MPa.
F: N/mm² er det samme som MPa.

Q: Hvad er elasticitetsmodulet et mål for?
A: Styrke
R: Stivhed
A: Hårdhed
A: Sejhed
F: E er hældningen i det elastiske område: hvor meget spænding der skal til pr. tøjning.

Q: En stålstang på 3 m (E = 210.000 MPa) har σ = 140 MPa. Hvor meget forlænges den? (mm)
N: 2 ; 0,02 ; mm
L: ε = 140 / 210.000 = 0,000667. ΔL = 0,000667 · 3.000 = 2,0 mm.
F: ΔL = σ · L₀ / E.

Q: Hvad sker der, når spændingen overstiger flydegrænsen?
A: Stangen brister straks
R: Stangen får en blivende forlængelse
A: Stangen bliver stivere
A: Ingenting, den går tilbage
F: Over R_e er deformationen plastisk. Brud sker først ved R_m og videre.

Q: Samme kraft på en aluminiumsstang og en stålstang med samme mål. Hvor mange gange mere strækker aluminium sig? (E_stål = 210, E_Al = 70 GPa)
N: 3 ; 0,05 ;
L: 210 / 70 = 3.
F: Tøjningen er omvendt proportional med E.

Q: Hvad måler ekstensometret i en trækprøve?
A: Kraften
R: Forlængelsen over en kendt målelængde
A: Temperaturen
A: Tværsnittet
F: Kraften måles af maskinens kraftmåler. Ekstensometret måler tøjningen præcist.

Q: Hvad er R_p0,2?
A: Trækstyrken ved 0,2 % brudforlængelse
R: Den spænding, der giver 0,2 % blivende tøjning
A: Elasticitetsmodulet ved 0,2 % tøjning
A: 20 % af trækstyrken
F: Bruges som flydegrænse for materialer uden tydeligt flydepunkt.

Q: En S235-stang belastes til 94 MPa. Hvad er sikkerheden mod flydning? (1 decimal)
N: 2,5 ; 0,05 ;
L: n = 235 / 94 = 2,5.
F: n = R_e / σ.
