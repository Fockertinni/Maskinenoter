id: gas-eksamen
navn: Alt du skal bruge til eksamen: Idealgasloven og tilstandsændringer
ikon: gas
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen for Grundlæggende termodynamik stod ikke i materialet. Tjek læringsmålene. Siden er bygget, så du kan både regne og forklare emnet mundtligt.

Hvis du kun når én ting: kunne bruge p · V = m · R · T med absolut tryk og temperatur, og tegne de fire tilstandsændringer i et pV-diagram.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | p · V = m · R · T | Masse, tryk eller rumfang af en gas |
| 2 | p₁V₁/T₁ = p₂V₂/T₂ | Samme gas før og efter |
| 3 | p · V^κ = konst., κ = 1,4 | Adiabatisk (ingen varme) |
| 4 | T₂/T₁ = (V₁/V₂)^(κ−1) | Kompressionstemperatur |
| 5 | W = ∫ p dV | Arbejde = areal under kurven |
| 6 | R_luft = 287 J/(kg·K) | Huskeværdi |

## 2 · Det du skal kunne forklare

### Idealgasloven

**Pointe:** tryk, rumfang og temperatur hænger sammen for en gas. Trykket er molekylernes stød på væggene.

**Hvorfor absolutte værdier:** ved 0 K og vakuum er der ingen stød. Formlen bygger på forhold, og de virker kun fra et rigtigt nulpunkt.

### De fire processer

| Proces | Konstant | Hvad sker der |
|---|---|---|
| Isobar | p | Opvarmning → gassen udvider sig |
| Isokor | V | Opvarmning → trykket stiger, intet arbejde |
| Isoterm | T | Kompression med fuld køling, p · V konstant |
| Adiabatisk | Q = 0 | Kompression uden køling, temperaturen stiger |

### Adiabatisk kompression i dieselmotoren

**Pointe:** luften komprimeres så hurtigt, at der ikke når at gå varme ud. Temperaturen stiger til 500–700 °C, og brændstoffet selvantænder.

**Tal:** ε = 15 fra 20 °C giver ca. 593 °C og 44 bar.

### Arbejde i pV-diagrammet

**Pointe:** arbejdet er arealet under kurven. Et kredsløb giver nettoarbejdet som arealet inden i kurven.

## 3 · Det du skal kunne tegne

1. **pV-diagram** med isobar (vandret), isokor (lodret), isoterm og adiabat fra samme startpunkt.
2. **Arealet under kurven** skraveret som arbejde.

<details markdown="1"><summary>Tjek din tegning</summary>

Fra samme punkt ved kompression ligger adiabaten over isotermen (stejlere), fordi temperaturen stiger. Isobaren er vandret, isokoren lodret.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvor meget luft er der i en 0,5 m³ flaske på 30 bar(o) og 20 °C?</summary>

m = 31,013 · 10⁵ · 0,5 / (287 · 293,15) = 18,4 kg.
</details>

<details markdown="1"><summary>Hvorfor stiger manometertrykket på en startluftflaske, når maskinrummet bliver varmt?</summary>

Isokor proces: V er konstant, så p/T er konstant. Fra 20 til 50 °C stiger det absolutte tryk med faktoren 323/293 = 1,10.
</details>

<details markdown="1"><summary>Hvorfor har en luftkompressor mellemkøler?</summary>

Kompressionen er tæt på adiabatisk, så luften bliver meget varm. Køling mellem trinene bringer processen tættere på isoterm, som kræver mindre arbejde og giver køligere, tættere luft.
</details>

<details markdown="1"><summary>Hvad er et normalkubikmeter?</summary>

Rumfanget ved 0 °C og 1,01325 bar. 1 Nm³ luft vejer 1,293 kg. Det gør gasmængder sammenlignelige uanset tryk og temperatur.
</details>

## 5 · Faldgruber

- Overtryk eller °C sat ind i gasloven.
- R = 8,314 brugt pr. kg i stedet for 287.
- Isoterm og adiabat byttet om.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Idealgasloven p · V = m · R · T gælder for luft og andre gasser med absolut tryk og temperatur, og for luft er R = 287 J/(kg·K). For samme gas før og efter gælder p₁V₁/T₁ = p₂V₂/T₂. Ved isobar er trykket konstant, ved isokor rumfanget (og arbejdet nul), ved isoterm temperaturen, og ved adiabatisk går der ingen varme ind eller ud, så p · V^1,4 er konstant og temperaturen stiger ved kompression. Det er sådan, en dieselmotor tænder brændstoffet. Arbejdet er arealet under kurven i pV-diagrammet.
</details>
</div>
