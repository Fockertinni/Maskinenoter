id: symmetrisk-eksamen
navn: Alt du skal bruge til eksamen: 3-faset symmetrisk belastning
ikon: trefase
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at forklare beregning af fase- og netlederstrømme for f.eks. to symmetriske belastninger."

Hvis du kun når én ting: kunne tage to laster (fx en Y-koblet varmelast og en Δ-koblet motor), regne fasestrømmen i hver last, netstrømmen fra hver, og lægge netstrømmene sammen vektorielt med wattstrøm og wattløs strøm.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | U_n = √3 · U_f | 400 = √3 · 230 |
| 2 | Y: I_n = I_f | Stjerne |
| 3 | Δ: I_n = √3 · I_f | Trekant |
| 4 | P = √3 · U_n · I_n · cos φ | Altid netværdier |
| 5 | S² = P² + Q² | Effekttrekanten |
| 6 | I = √((ΣI·cos φ)² + (ΣI·sin φ)²) | Flere laster i samme fase |
| 7 | P = W1 + W2, Q = √3 (W2 − W1) | Aron |
| 8 | C_Δ = Q_C / (3ωU_n²) | Kondensatorbatteri i Δ |

## 2 · Det du skal kunne forklare

### Fase- og netstrømme for to laster

**Sådan:**

1. Find fasestrømmen i hver last: I_f = U_f / Z_f (U_f = 230 V i Y, 400 V i Δ).
2. Find netstrømmen fra hver last: Y: I_n = I_f. Δ: I_n = √3 · I_f.
3. Del hver netstrøm op: I_w = I_n · cos φ og I_wl = I_n · sin φ.
4. Læg wattstrømmene sammen og de wattløse strømme sammen.
5. I_samlet = √(ΣI_w² + ΣI_wl²) og cos φ_samlet = ΣI_w / I_samlet.

**Tal du kan nævne:** varmelegemer 3 × 23 Ω i Y (10 A) og en Δ-motor (9,3 A, cos φ = 0,8). Strømmen i motorviklingen er 5,37 A. Netstrømmen er 18,3 A, ikke 19,3 A.

### Y og Δ

**Pointe:** i Y får hver last 230 V, i Δ 400 V. Samme last giver 3 gange effekten i Δ.

**Hvorfor:** P ∝ U² og (400/230)² = 3. Strømmen i ledningen stiger også 3 gange: √3 fordi grenstrømmen er √3 større, og √3 fordi to grene mødes i hver linje.

### Wattmetermetoderne

**Pointe:** 1 wattmeter kun ved symmetri og adgang til N. Aron i et 3-ledernet ved al last. 3 wattmetre i et 4-ledernet ved al last.

**Det negative wattmeter:** ved cos φ < 0,5 er cos(30° + φ) negativ. Coasterens pumpe viste 1.880 og −280 W, cos φ = 0,39.

### Fasekompensering

**Pointe:** Q_C = P (tan φ₁ − tan φ₂). Samme Q_C kræver 3 gange mindre C i Δ, fordi kondensatoren får 400 V.

## 3 · Det du skal kunne tegne

1. Y- og Δ-kobling med U_f, U_n, I_f og I_n markeret.
2. Vektordiagrammet: U_1N, U_2N, U_3N med 120° imellem og netspændingerne som trekant.
3. Strømmene i Y (φ efter hver fasespænding) og i Δ (grenstrømme efter netspændingerne, netstrømmen som forskel).
4. Aron-koblingen og 1- og 3-wattmeterkoblingen.
5. Effekttrekanten før og efter kompensering.

<details markdown="1"><summary>Tjek din tegning af Δ-strømmene</summary>

I_12 ligger φ efter U_12, I_31 ligger φ efter U_31. I_L1 = I_12 − I_31: vend I_31 og læg den til I_12. Resultatet er √3 gange længere og drejet 30° bagud i forhold til I_12.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor kan du ikke bare lægge netstrømmene fra to laster sammen?</summary>

De har forskellig faseforskydning. Varmelasten er i fase med spændingen, motorens strøm ligger efter. De skal lægges sammen vektorielt.
</details>

<details markdown="1"><summary>Hvad viser en tang om to af tre faser ved symmetrisk last?</summary>

Det samme som om én fase, fordi I1 + I2 = −I3, og alle tre er lige store.
</details>

<details markdown="1"><summary>Hvordan finder du S med Aron-koblingen?</summary>

P = W1 + W2 og Q = √3 (W2 − W1) ved symmetrisk last. S = √(P² + Q²). S kan ikke findes som P/η, for virkningsgraden handler om motorens tab, ikke om den reaktive effekt.
</details>

<details markdown="1"><summary>Hvorfor er mærkepladen vigtig, før du kobler en motor?</summary>

Den viser viklingsspændingen. "230/400 V Δ/Y" skal i Y på 400 V. Kobles den i Δ, får viklingerne 400 V, √3 for meget, og motoren brænder.
</details>

<details markdown="1"><summary>Hvorfor viser de to Aron-wattmetre det samme ved rent resistiv last?</summary>

φ = 0, så W1 = W2 = U_n · I_n · cos 30°. Summen er √3 · U_n · I_n.
</details>

## 5 · Faldgruber

- 230 V brugt i √3-formlen.
- √3 ganget på spændingen i Δ i stedet for på strømmen.
- Strømme fra to laster lagt sammen som tal.
- S regnet som P/η.
- Et negativt wattmeter "rettet" ved at vende ledningerne.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Et 3 × 400/230 V net har tre fasespændinger med 120° imellem. I Y får lasten 230 V og netstrømmen er fasestrømmen. I Δ får lasten 400 V og netstrømmen er √3 gange fasestrømmen. P = √3 · U_n · I_n · cos φ i begge. Ved symmetri er summen af strømmene nul. Har jeg to laster, deler jeg hver netstrøm i wattstrøm og wattløs strøm, lægger dem sammen hver for sig og bruger Pythagoras. Effekten måles med 1 wattmeter ved symmetri, Aron i et 3-ledernet og 3 wattmetre i et 4-ledernet. Et kondensatorbatteri i Δ skal have 3 gange mindre C end i Y.
</details>
</div>
