id: leder-eksamen
navn: Alt du skal bruge til eksamen: Ledere, effekt og energi
ikon: leder
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at beregne afsat effekt og energi i en leder ud fra oplyst data."

Hvis du kun når én ting: kunne regne en leders modstand ud fra ρ, l og S, rette den for temperaturen, og derfra finde P = R · I², W = P · t og strømtætheden J = I/S. Brug svejsekablet fra opgavesæt 1 som dit eksempel.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | R = ρ · l / S | Lederens modstand |
| 2 | R₂ = R₁(1 + α(T₂ − T₁)) | Modstand ved anden temperatur |
| 3 | J = I / S | Strømtæthed |
| 4 | P = R · I² = U · I | Afsat effekt (strømvarmetab) |
| 5 | W = P · t, 1 kWh = 3,6 MJ | Energi |
| 6 | M = F · r, ω = 2πn, P = M · ω | Mekanisk effekt |
| 7 | η = P2 / P1 | Virkningsgrad |
| 8 | Q = I · t, U_kl = E − I · R_i | Akkumulator |

## 2 · Det du skal kunne forklare

### Hvad lederens modstand afhænger af

**Pointe:** modstanden stiger med længden og falder med tværsnittet. Materialet giver ρ, og temperaturen ændrer den.

**Hvorfor:** en længere leder er flere modstande i serie. Et større tværsnit er flere ledere i parallel. Varme får atomerne i metallet til at svinge mere, så elektronerne støder oftere ind i dem.

**Tal du kan nævne:** 5 m kobber på 10 mm² er 8,75 mΩ. Ved 90 °C er det 11,2 mΩ, altså 28 % mere.

### Strømtæthed og opvarmning

**Pointe:** P = R · I² betyder, at dobbelt strøm giver fire gange så meget varme. Strømtætheden fortæller, hvor hårdt lederen belastes pr. mm².

**Kæden:** større strøm → mere varme → højere temperatur → større R → endnu mere varme. Derfor skal kablet vælges, så temperaturen holder sig under isolationens grænse.

### Effekt, arbejde og energi

**Pointe:** effekt er, hvor hurtigt energien bruges. Energi er effekt gange tid. På elregningen står kWh, i fysik står J.

### EMK, ladning og akkumulatoren

**Pointe:** EMK er den spænding, batteriet laver indvendigt. Klemspændingen er det, du måler udvendigt, og den falder med I · R_i under belastning.

**Kapacitet:** Ah er en ladningsmængde. Virkningsgraden findes som afgivet mod tilført (Ah eller Wh). En stigende indre modstand er tegnet på et slidt batteri.

## 3 · Det du skal kunne tegne

1. En leder med l, S og strømretning, og hvordan R ændrer sig, når l eller S fordobles.
2. R som funktion af temperaturen: en ret linje med hældning α · R₁.
3. Batteriets ækvivalentdiagram: E i serie med R_i, klemmerne og belastningen R.
4. Klemspændingen som funktion af strømmen: en ret linje, der starter i E og falder med hældningen R_i.
5. Et Sankey-diagram: P1 ind, tab ud, P2 ud.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Beregn afsat effekt og energi i et kobberkabel på 25 m, 2,5 mm², med 16 A i 8 timer.</summary>

R = 0,0175 · 25 / 2,5 = 0,175 Ω. P = 0,175 · 16² = 44,8 W. W = 44,8 · 8 = 358 Wh = 0,358 kWh = 1,29 MJ. J = 16 / 2,5 = 6,4 A/mm². Bliver kablet varmt, stiger R, og tabet bliver lidt større.
</details>

<details markdown="1"><summary>Hvorfor stiger modstanden med temperaturen?</summary>

I et metal svinger atomerne mere, jo varmere det er. Elektronerne støder oftere ind i dem, og det giver større modstand. Kobber har α ≈ 0,004, altså 0,4 % pr. grad.
</details>

<details markdown="1"><summary>Hvad er forskellen på EMK og klemspænding?</summary>

EMK er kildens indre spænding, målt uden last. Klemspændingen er spændingen ved klemmerne under belastning: U_kl = E − I · R_i.
</details>

<details markdown="1"><summary>Hvordan finder du et batteris indre modstand?</summary>

Mål spændingen uden last (E) og med en kendt strøm (U_kl). R_i = (E − U_kl) / I.
</details>

<details markdown="1"><summary>Hvad koster det at have et komfur på 8,8 kW tændt i 2 timer ved 2,30 kr./kWh?</summary>

W = 8,8 · 2 = 17,6 kWh = 63,4 MJ. Pris = 17,6 · 2,30 = 40,48 kr.
</details>

## 5 · Faldgruber

- Tværsnittet sat ind i m² i stedet for mm², når ρ er i Ω·mm²/m.
- R regnet ved 20 °C, selv om lederen er varm.
- Minutter brugt som timer i W = P · t.
- ω regnet med 2πf i stedet for 2πn for en motor.
- Trykfejlen P = R · I² · N fra PP11 skrevet af.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

En leders modstand er R = ρ·l/S. Kobber har ρ = 0,0175 Ω·mm²/m og α = 0,004 pr. grad, så modstanden stiger med temperaturen: R₂ = R₁(1 + α·ΔT). Strømtætheden er J = I/S, og det afsatte tab er P = R·I², som bliver til varme. Energien er W = P·t, og 1 kWh er 3,6 MJ. Mekanisk effekt er P = M·ω med ω = 2πn. Virkningsgraden er η = P2/P1. Et batteri har en EMK E og en indre modstand R_i, så klemspændingen falder under belastning: U_kl = E − I·R_i. Kapaciteten i Ah er en ladningsmængde, Q = I·t.
</details>
</div>
