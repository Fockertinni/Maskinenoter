id: kapacitet
navn: Kapacitetsstyring
ikon: kapacitet
intro: De rigtige ressourcer i det rigtige omfang på det rigtige tidspunkt. Når kapaciteten er knap, skal den bruges på det, der giver mest DB pr. enhed af den knappe faktor.
---
# Noter

> **Pensum**
> Lærebog kap. 7 · Lektion 6–7 · Eksamensvægt: **høj**

## Hvad er kapacitet?

- Kapacitet kan være **teknisk** (maskiner), **menneskelig** (personale, kompetencer) eller **økonomisk** (kapital, likviditet).
- Opgaverne er anskaffelse, udvikling og vedligeholdelse, afskaffelse, kapacitetsfordeling og kapacitetsudnyttelse. Omkostningerne er mere eller mindre irreversible.
- Gode spørgsmål: Er vi tvunget til at købe mere kapacitet end behovet? Kan kapaciteten deles med andre? Kan den erstattes af en mere fleksibel eller billigere løsning?

## Tre opgavetyper i kap. 7

1. **Ufuldkommen konkurrence:** flere produkter med pris og afsætning på tabelform → DIFB pr. knap time.
2. **Fuldkommen konkurrence:** faste priser → DB pr. knap time.
3. **Prisdifferentiering og eksport ved knap kapacitet:** en kombination af de to.

## Fremgangsmåde (tabelmetoden)

1. Lav en tabel pr. produkt og alternativ: pris, afsætning, VE, DB pr. stk., DB i alt og maskintimer.
2. **DIFB** = ændringen i DB fra forrige alternativ. **Δtimer** = ændringen i timer.
3. **DIFB pr. time** = DIFB / Δtimer.
4. Sortér alle trin efter DIFB pr. time (højeste først), og akkumulér timerne, til kapaciteten er brugt.
5. Det sidste alternativ, der kommer med for hvert produkt, giver afsætningsplanen.
6. Tabt DB ved knaphed = DIFB for de trin, der ikke kom med (hvis DIFB > 0).
7. **Overarbejde og udvidelse:** brug ekstra timer, så længe DIFB pr. time er større end merprisen pr. time.

> **Faldgrube**
> Prioritér efter DIFB pr. enhed af det, der er **knapt**. Er maskintimer knappe, er det DIFB pr. time. Er det selve antallet af stk. (fx en produktionsgrænse), er det DIFB pr. stk. Et produkt med højt DB pr. stk. kan godt bruge den knappe tid dårligt.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor prioriteres efter DIFB pr. *time* og ikke DIFB pr. *stk.*, når maskintid er knap?
2. Hvornår prioriterer man efter DIFB pr. stk.?
3. Giv tre eksempler på kapacitetsstyring fra din egen arbejdsplads.

<details markdown="1"><summary>Svar</summary>

1. Fordi det er timerne, der begrænser. Den time, der giver mest DB, skal bruges først, uanset hvor mange stk. den giver.
2. Når selve antallet af stk. er den knappe faktor.
3. Fx vagtplan og bemanding, planlægning af hovedeftersyn i lavlastperioder, valg af hvilke kedler eller motorer der kører ved en given last.
</details>
</div>

# Formler

```
DIFB              = DB(alternativ n) – DB(alternativ n–1)
DIFB pr. time     = DIFB / Δmaskintimer
DB pr. knap faktor = (p – VE) / tid pr. stk.
Lønsomt overarbejde: DIFB pr. time > overtidstillæg pr. time
```

## Eksempel 1: opgave 7.1, A/S CAFU (3.100 maskintimer)

Trinnene er allerede beregnet og sorteret. Hvor slutter planen, og hvad er det tabte DB?

| Prioritet | Trin | DIFB pr. time | Timer i trinnet |
|---|---|---|---|
| 1 | PRO-1 | 1.000 | 750 |
| 2 | COMBI-1 | 570 | 500 |
| 3 | AMA-1 | 500 | 800 |
| 4 | PRO-2 | 400 | 250 |
| 5 | AMA-2 | 350 | 400 |
| 6 | AMA-3 | 250 | 400 |
| 7 | COMBI-2 | 150 | 200 |
| 8 | PRO-3 | 100 | 250 |
| 9 | COMBI-3 | −90 | 200 |

<details markdown="1"><summary>Vis udregning</summary>

Akkumulerede timer: 750, 1.250, 2.050, 2.300, 2.700, **3.100** ← kapaciteten er brugt efter AMA-3.

Plan: AMA 8.000 stk. til 220 kr., COMBI 1.500 stk. til 420 kr., PRO 1.000 stk. til 1.500 kr. Samlet **DB = 1.775.000 kr.**

Tabt DB pga. knaphed: COMBI-2 (200 t · 150) + PRO-3 (250 t · 100) = **55.000 kr.** COMBI-3 tæller ikke med, fordi DIFB er negativ.
</details>

## Eksempel 2: opgave 7.2, MiljøKemi (overarbejde)

2.900 timer plus op til 900 timers overarbejde med 400 kr./t i tillæg. Grundplanen er F 14.400, G 9.000 og R 4.800. De næste trin er F-3 og R-2 (DIFB pr. time 480, i alt 400 timer) og R-3 (360).

<details markdown="1"><summary>Vis udregning</summary>

Overarbejde betaler sig, så længe DIFB pr. time > 400. F-3 og R-2 kommer med (480), R-3 gør ikke (360).
Merindtjening: (480 − 400) · 400 = **32.000 kr.**
</details>

## Eksempel 3: opgave 7.8, HANDY (eksport, kapacitet 10.000 stk.)

Her er antallet af stk. knapt, så der prioriteres efter DIFB pr. stk.: DK-1 100, DK-2 70, DK-3 50, England 45 (150 − 80 − 25), Frankrig 35, DK-4 30, DK-5 10.

<details markdown="1"><summary>Vis udregning</summary>

Plan: DK 4.000 stk. til 160 kr., England 5.000 og Frankrig 1.000 → **DB 580.000 kr.**
Udvidelse med 50 % (5.000 stk.): mer-DB = 3.000 · 35 + 1.000 · 30 + 1.000 · 10 = **145.000 kr.** Det er den maksimale årlige omkostning, udvidelsen må have.
</details>

# Quiz

Q: Maskintimerne er knappe. Hvad prioriterer du efter?
A: DB pr. stk.
R: DIFB pr. maskintime
A: Omsætning pr. produkt
A: Laveste VE
F: Det er timerne, der begrænser, så hver time skal bruges der, hvor den giver mest DB.

Q: Et trin giver DIFB = 60.000 kr. og bruger 150 ekstra maskintimer. Hvad er DIFB pr. time?
N: 400 ; 0,5 ; kr./t
L: 60.000 / 150 = 400 kr. pr. time.
F: Det er tallet, der sammenlignes på tværs af produkter og trin.

Q: Overtidstillægget er 400 kr./t. Et trin har DIFB pr. time = 480. Det bruger 400 timer. Hvad er merindtjeningen ved at køre overarbejde?
N: 32000 ; 1 ; kr.
L: (480 − 400) · 400 = 32.000 kr.
F: Kun forskellen mellem DIFB pr. time og tillægget er gevinst.

Q: Hvilke trin tæller med i det tabte DB pga. knaphed?
A: Alle trin, der ikke kom med
R: De trin, der ikke kom med, og som har positiv DIFB
A: Kun det første trin, der ikke kom med
A: Trin med negativ DIFB
F: Et trin med negativ DIFB ville man ikke tage med, selv med ubegrænset kapacitet, så det er ikke "tabt".

Q: Antallet af stk. er den knappe faktor (fx en samlet produktionsgrænse). Hvad prioriterer du efter?
R: DIFB pr. stk.
A: DIFB pr. maskintime
A: Laveste pris
A: Største omsætning
F: Prioritér altid efter DB pr. enhed af det, der er knapt.

Q: Eksport til England giver 150 kr./stk. VE er 80 kr. og transport 25 kr. Hvad er DIFB pr. stk.?
N: 45 ; 0,1 ; kr.
L: 150 − 80 − 25 = 45 kr. pr. stk.
F: Transporten er en variabel omkostning, der kun gælder eksportsalget.
