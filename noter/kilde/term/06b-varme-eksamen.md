id: varme-eksamen
navn: Alt du skal bruge til eksamen: Varme og varmekapacitet
ikon: flamme
intro: De vigtigste formler, det du skal kunne forklare, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen for Grundlæggende termodynamik stod ikke i materialet. Tjek læringsmålene. Siden er bygget, så du kan både regne og forklare emnet mundtligt.

Hvis du kun når én ting: kunne bruge Q = m · c · Δt og Φ = ṁ · c · Δt, og forklare forskellen på energi og effekt.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | Q = m · c · Δt | Opvarmning af en masse (kJ) |
| 2 | Φ = ṁ · c · Δt | Varmeeffekt i en strøm (kW) |
| 3 | t = (m₁c₁t₁ + m₂c₂t₂) / (m₁c₁ + m₂c₂) | Blanding uden tab |
| 4 | t = Q / P | Opvarmningstid |
| 5 | 1 kWh = 3,6 MJ | Enheder |
| 6 | c_vand = 4,19 kJ/(kg·K) | Huskeværdi |

## 2 · Det du skal kunne forklare

### Specifik varmekapacitet

**Pointe:** den energi, der skal til for at opvarme 1 kg stof 1 K.

**Hvorfor vand er et godt kølemiddel:** c = 4,19 er meget højt. Vandet optager meget varme med lille temperaturstigning.

### Energi og effekt

**Pointe:** energi (kJ, kWh) er en mængde. Effekt (kW) er energi pr. tid. Q = m · c · Δt giver energi, Φ = ṁ · c · Δt giver effekt.

### Blanding

**Pointe:** afgivet varme = optaget varme. Sluttemperaturen ligger tættest på det stof med størst m · c.

### Kalorimetri

**Pointe:** ukendt c bestemmes ved at lægge et opvarmet emne i en kendt mængde vand og måle sluttemperaturen.

## 3 · Det du skal kunne tegne

1. **Energibalance for blanding:** to kasser med m, c, t og en pil med Q fra den varme til den kolde.
2. **Kølevandskreds** med ṁ, t_ind og t_ud ved motoren.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvor lang tid tager det at varme 200 L vand fra 15 til 60 °C med 3 kW?</summary>

Q = 200 · 4,19 · 45 = 37.710 kJ. t = 37.710 / 3 = 12.570 s = 3,5 h.
</details>

<details markdown="1"><summary>Kølevandet fra motoren: 2 kg/s, 70 → 80 °C. Hvor meget varme fjernes?</summary>

Φ = 2 · 4,19 · 10 = 83,8 kW.
</details>

<details markdown="1"><summary>Hvorfor bliver vandet kun lidt varmere, når du lægger et varmt stålemne i?</summary>

Stål har c = 0,46, vand 4,19. Pr. kg kan vandet optage ni gange så meget varme pr. grad. 1 kg stål på 200 °C i 2 kg vand på 20 °C giver kun 29 °C.
</details>

<details markdown="1"><summary>Hvordan bestemmer du c for et ukendt metal?</summary>

Kalorimetri: varm emnet op (fx i kogende vand til 100 °C), læg det i kendt vandmængde, mål sluttemperaturen, og løs m₂c₂(t₂ − t) = m₁c₁(t − t₁) for c₂.
</details>

## 5 · Faldgruber

- kJ og kW blandet sammen.
- Liter brugt som kg for andet end vand (olie har ρ ≈ 870 kg/m³).
- Varmetab ignoreret uden at sige det.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Varme er energi, der strømmer fra varmt til koldt. Den energi, der skal til for at opvarme et stof, er Q = m · c · Δt, hvor c er den specifikke varmekapacitet. Vand har c = 4,19 kJ/(kg·K), hvilket er meget højt og gør vand til et godt kølemiddel. I en strøm regnes effekten Φ = ṁ · c · Δt i kW. Ved blanding uden tab er afgivet varme lig optaget varme, og sluttemperaturen ligger tættest på stoffet med størst m · c. 1 kWh er 3,6 MJ.
</details>
</div>
