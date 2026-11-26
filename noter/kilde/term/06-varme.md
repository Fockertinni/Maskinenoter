id: varme
navn: Varme og varmekapacitet
ikon: flamme
intro: Varme som energi, specifik varmekapacitet, Q = m · c · Δt, blandingstemperatur, varmeeffekt i en strøm af væske og kalorimetri.
---
# Noter

> **Kilder**
> Ikke dækket af slides i materialet. Noterne bygger på standardteori.

Varme er energi, der strømmer på grund af en temperaturforskel. Den strømmer altid af sig selv fra varmt til koldt, og den måles i joule (J). I maskinrummet bruger man ofte kJ, MJ og kWh.

```
1 kWh = 3,6 MJ = 3.600 kJ
```

## Specifik varmekapacitet

Den specifikke varmekapacitet c fortæller, hvor meget energi der skal til for at opvarme 1 kg af stoffet 1 K.

```
Q = m · c · Δt        [kJ] = [kg] · [kJ/(kg·K)] · [K]
```

| Stof | c [kJ/(kg·K)] |
|---|---|
| Vand | 4,19 |
| Is | 2,1 |
| Vanddamp (ca.) | 2,0 |
| Smøreolie | ca. 1,9–2,0 |
| Luft (ved konstant tryk), c_p | 1,005 |
| Aluminium | 0,90 |
| Stål | 0,46 |
| Kobber | 0,385 |

Vand har en usædvanlig høj varmekapacitet. Det er grunden til, at vand er så godt et kølemiddel: det kan optage meget varme uden at blive ret meget varmere.

### Gennemregnet eksempel

En varmtvandsbeholder på 200 L skal varmes fra 15 °C til 60 °C med en 3 kW-varmelegeme. Hvor meget energi skal der til, og hvor lang tid tager det? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

m = 200 kg (1 L vand ≈ 1 kg). Q = 200 · 4,19 · 45 = 37.710 kJ = 37,7 MJ = 10,5 kWh.

t = Q / P = 37.710 kJ / 3 kW = 12.570 s = **3,5 timer** (uden varmetab).
</details>

## Varmeeffekt i en strøm

I en varmeveksler eller et kølesystem strømmer væsken hele tiden. Så regner man med massestrøm ṁ (kg/s) i stedet for masse, og får en effekt (kW):

```
Φ = ṁ · c · Δt        [kW] = [kg/s] · [kJ/(kg·K)] · [K]
```

**Eksempel:** 2 kg/s kølevand opvarmes 10 K i motorens køler: Φ = 2 · 4,19 · 10 = 83,8 kW. Det er den varme, kølevandet fjerner fra motoren.

## Blandingstemperatur

Når to stoffer blandes eller bringes i kontakt uden varmetab, afgiver det varme varme, til de har samme temperatur. **Afgivet varme = optaget varme.**

```
m₁ · c₁ · (t₁ − t) = m₂ · c₂ · (t − t₂)

t = (m₁c₁t₁ + m₂c₂t₂) / (m₁c₁ + m₂c₂)
```

<div class="m" data-m="blanding"></div>

**Forudsig først:** 1 kg stål på 200 °C kommes i 2 kg vand på 20 °C. Bliver sluttemperaturen tæt på 110 °C?

<details markdown="1"><summary>Vis svar</summary>

Nej. Vandets varmekapacitet er 2 · 4,19 = 8,38 kJ/K, stålets kun 0,46 kJ/K. Vandet "vinder": t = (8,38 · 20 + 0,46 · 200) / 8,84 = 29,4 °C.
</details>

## Kalorimetri

Med et blandingsforsøg kan man bestemme et ukendt stofs c: varm emnet op til en kendt temperatur, læg det i en kendt mængde vand, mål sluttemperaturen, og løs ligningen for c₂. I praksis skal man også regne med beholderens varmekapacitet (kalorimeterets vandværdi) og varmetabet.

# Formler

### Varmemængde
```
Q = m · c · Δt            [kJ]
1 kWh = 3,6 MJ
```

### Varmeeffekt i en strøm
```
Φ = ṁ · c · Δt            [kW]
ṁ = ρ · V̇                 (V̇ i m³/s)
```

### Blanding (intet tab)
```
t = (m₁c₁t₁ + m₂c₂t₂) / (m₁c₁ + m₂c₂)
```

### Tid og effekt
```
t = Q / P
```

### Typiske c-værdier [kJ/(kg·K)]
```
vand 4,19   is 2,1   damp 2,0   olie ca. 1,9   luft c_p 1,005
stål 0,46   aluminium 0,90   kobber 0,385
```

# Quiz

Q: Hvor meget energi skal der til at varme 50 kg vand fra 10 °C til 70 °C? (kJ)
N: 12570 ; 20 ; kJ
L: Q = 50 · 4,19 · 60 = 12.570 kJ.
F: Q = m · c · Δt.

Q: Hvad er 12.570 kJ i kWh? (2 decimaler)
N: 3,49 ; 0,02 ; kWh
L: 12.570 / 3.600 = 3,49 kWh.
F: 1 kWh = 3.600 kJ.

Q: Kølevand strømmer med 1,5 kg/s og opvarmes fra 70 til 82 °C. Hvor stor er varmeeffekten? (kW, 1 decimal)
N: 75,4 ; 0,3 ; kW
L: Φ = 1,5 · 4,19 · 12 = 75,4 kW.
F: Med massestrøm får man effekt i stedet for energi.

Q: 3 kg vand på 80 °C blandes med 1 kg vand på 20 °C. Hvad bliver sluttemperaturen? (°C)
N: 65 ; 0,2 ; °C
L: Samme c: t = (3 · 80 + 1 · 20) / 4 = 260 / 4 = 65 °C.
F: Når stofferne er ens, går c ud.

Q: Hvorfor er vand et godt kølemiddel?
A: Fordi det er billigt og koger ved 100 °C
R: Fordi det har høj specifik varmekapacitet og kan optage meget varme pr. kg
A: Fordi det leder strøm
A: Fordi det udvider sig meget
F: 4,19 kJ/(kg·K) er ca. ni gange mere end stål.

Q: Hvilket stof skal der mindst energi til at opvarme 1 K pr. kg?
A: Vand
A: Aluminium
A: Stål
R: Kobber
F: Kobber har c = 0,385 kJ/(kg·K), den laveste i tabellen.

Q: 2 kg aluminium på 150 °C lægges i 5 kg vand på 15 °C. Hvad bliver sluttemperaturen? (°C, 1 decimal)
N: 25,7 ; 0,2 ; °C
L: m₁c₁ = 5 · 4,19 = 20,95 kJ/K, m₂c₂ = 2 · 0,90 = 1,80 kJ/K. t = (20,95 · 15 + 1,80 · 150) / 22,75 = (314,25 + 270) / 22,75 = 25,7 °C.
F: Vandet dominerer, fordi dets varmekapacitet er meget større.
