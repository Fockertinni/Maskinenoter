id: prisopt
navn: Pris- og aktivitetsoptimering
ikon: optimering
intro: Hvilken pris og afsætning giver det største dækningsbidrag? Differensmetoden, monopolpunktet, prisdifferentiering, eksport ved knap kapacitet og bidrags- mod fordelingskalkulation.
---
# Noter

> **Pensum**
> Lærebog kap. 6 · Lektion 4–6 · Eksamensvægt: **høj**

Kernen er **differensmetoden**: produktionen øges, så længe en ekstra enhed giver mere i omsætning (DOMS), end den koster (DOMK).

## Prisfastsættelse

- **Tre perspektiver:** konkurrencebaseret, omkostningsbaseret og værdibaseret. I praksis kombineres de. Differensmetoden er primært konkurrence- og omkostningsbaseret.
- **Hvordan forbedres resultatet?** Hæv prisen, sælg mere, sænk VE eller sænk KO. Ofte gøres flere ting på én gang.

## Optimum afhænger af markedet

- **Fuldkommen konkurrence:** Ved proportionale eller degressive omkostninger producerer man så meget som muligt inden for kapaciteten, fordi DB stiger med mængden. Kun ved progressive omkostninger er der et optimum (P = DOMK).
- **Ufuldkommen konkurrence:** Optimum ligger i **monopolpunktet**, hvor DOMS = DOMK.

DOMS-linjen er dobbelt så stejl som prisafsætningskurven, fordi en prisnedsættelse for at sælge én enhed mere gælder for *alle* enheder, ikke kun den sidste.

## Afsætningsmæssige sammenhænge (s. 155–157)

- Ved to produkter beregnes DB for hvert produkt og derefter det **samlede DB**. Man vælger det alternativ, hvor det samlede DB er størst.
- **Substituerende:** Prisnedsættelse på A trækker salg fra B. B's tabte DB skal trækkes fra.
- **Komplementære:** Salg af C giver også salg af D (fx 1 C → 4 D). D's DB skal lægges til. Ser man på C alene, vælger man en forkert pris.

## Prisdifferentiering

- **Uden kapacitetsgrænse:** optimér hvert marked for sig med DOMS_i = VE.
- **Med kapacitetsgrænse:** fordel mængden, så DOMS (eller DIFB) er ens på markederne.
- **Eksport til fast pris:** hjemmemarkedets DOMS sættes lig eksportprisen minus transport.

## Bidrags- mod fordelingskalkulation

- **Fordelingsmetoden:** KO fordeles på produkterne med en fordelingsnøgle (arbejdsløn, stk., omsætning, m²). Det kan få et produkt til at ligne en underskudsforretning.
- **Bidragsmetoden:** kun DB pr. produkt betragtes. **Et produkt med positivt DB skal beholdes**, medmindre man derved kan spare reversible KO, der er mindst lige så store som DB.
- **Fortuna-eksemplet:** Vare A ser tabsgivende ud med fordeling (KO = 75 % af lønnen), men giver DB på 4 × 100.000 = 400.000 kr. Fortsæt, medmindre KO kan reduceres med mindst 400.000 kr.

> **Dødsspiralen**
> Et produkt nedlægges, men KO forsvinder ikke. Så skal færre produkter bære de samme KO, de ligner også tabsgivende produkter, og man nedlægger flere.

<div class="genkald" markdown="1">
### Test dig selv

1. Udled DOMS for p = a − bx uden at kigge.
2. Hvorfor er DOMS-linjen dobbelt så stejl som prisafsætningskurven?
3. Fordelingskalkulationen viser underskud på produkt B, men DB_B = 300.000. Hvad skal der til, før B bør nedlægges?

<details markdown="1"><summary>Svar</summary>

1. OMS = p · x = a·x − b·x². Differentieret: DOMS = a − 2b·x.
2. For at sælge én enhed mere skal prisen sættes ned på alle enheder. Den ekstra omsætning er derfor prisen minus tabet på de øvrige enheder.
3. At nedlæggelsen kan spare reversible KO på mindst 300.000 kr. (eller at kapaciteten kan bruges på noget med større DB).
</details>
</div>

# Formler

```
Lineær prisafsætningsfunktion:   p(x) = a – b·x
   b = –ΔP / Δx        (find ud fra to punkter i tabellen)
   a = p + b·x

Omsætning:   OMS  = p·x = a·x – b·x²
DOMS:        DOMS = a – 2b·x
DOMK:        DOMK = VE          (proportionale omkostninger)

Monopolpunkt (DOMS = DOMK):
   x* = (a – VE) / (2b)
   p* = a – b·x* = (a + VE) / 2

DB = (p – VE) · x
Tabelform: DIFB = DOMS – DOMK pr. trin. Gå videre, så længe DIFB > 0.
```

## Eksempel 1: monopol mod outsourcing (E2025 opg. 1, SEALMAX)

p(x) = 1.850 − x/120, VE = 430 kr., kapacitet 84.000 stk., leje af anlæg 4.750.000 kr./år. Udvikling for 1.500.000 kr. er allerede betalt. Alternativ: produktion i Vietnam med VE = 520 kr. og ingen kapacitetsgrænse. Hvad er bedst?

<details markdown="1"><summary>Vis udregning</summary>

- Udviklingen på 1,5 mio. kr. er **sunk cost** og indgår ikke.
- Egen produktion uden grænse: x* = (1.850 − 430) / (2/120) = 1.420 · 60 = 85.200 > 84.000. **Kapaciteten begrænser**, så x = 84.000 og p = 1.850 − 84.000/120 = **1.150 kr.**
- DB = (1.150 − 430) · 84.000 = 60.480.000. Efter leje: **55.730.000 kr.**
- Vietnam: x* = 1.330 · 60 = 79.800, p* = (1.850 + 520)/2 = 1.185, DB = 665 · 79.800 = **53.067.000 kr.**
- Egen produktion giver ca. 2,66 mio. kr. mere og er derfor bedst.
</details>

## Eksempel 2: eksport ved knap kapacitet (F2017 opg. 3, DANSEN)

p(x) = 755 − x/10, VE = 250 kr., kapacitet 5.000 stk. Eksport op til 4.000 stk. til 300 kr. minus 25 kr. i transport. Reklame for 250.000 kr. er bestilt.

<details markdown="1"><summary>Vis udregning</summary>

- Eksport-DB = 300 − 25 − 250 = 25 kr./stk.
- Uden grænse: hjemme x = (755 − 250) · 5 = 2.525, plus eksport 4.000 = 6.525 > 5.000. Kapaciteten er knap.
- Sæt DOMS hjemme = VE + eksport-DB = 275: 755 − x/5 = 275 → **x = 2.400, p = 515**. Eksport = 2.600 stk.
- DB = 265 · 2.400 + 25 · 2.600 = 636.000 + 65.000 = 701.000. MFB = 701.000 − 250.000 = **451.000 kr.**
- Reklamen er fast og bestilt. Den påvirker **ikke** fordelingen mellem markederne.
</details>

# Quiz

Q: Hvor ligger optimum ved ufuldkommen konkurrence og proportionale omkostninger?
A: Hvor prisen er højest
A: Hvor afsætningen er størst
R: Hvor DOMS = DOMK (monopolpunktet)
A: Hvor DB pr. stk. er størst
F: Så længe DOMS > DOMK, giver en ekstra enhed mere i omsætning, end den koster. Optimum er, hvor de to er lige store.

Q: p(x) = 1.850 − x/120 og VE = 430. Hvad er den optimale afsætning uden kapacitetsgrænse?
N: 85200 ; 1 ; stk.
L: DOMS = 1.850 − 2x/120 = 430 → x = 1.420 · 60 = 85.200 stk.
F: Husk at DOMS har dobbelt hældning: b = 1/120, så 2b = 1/60.

Q: Samme virksomhed har en kapacitet på 84.000 stk. Hvilken pris skal den tage?
N: 1150 ; 0,5 ; kr.
L: Kapaciteten er mindre end 85.200, så x = 84.000 og p = 1.850 − 84.000/120 = 1.850 − 700 = 1.150 kr.
F: Ved knap kapacitet sætter man den pris, der netop sælger hele kapaciteten.

Q: p(x) = 755 − x/10 og VE = 250. Hvad er monopolprisen p*?
N: 502,5 ; 0,5 ; kr.
L: p* = (a + VE)/2 = (755 + 250)/2 = 502,5 kr. (x* = 2.525 stk.)
F: Genvejen p* = (a + VE)/2 gælder for lineær afsætning og proportionale omkostninger.

Q: Fordelingskalkulationen viser underskud på et produkt med DB = 400.000 kr. Hvornår bør det nedlægges?
A: Med det samme, når det giver underskud
R: Kun hvis man derved kan spare reversible KO på mindst 400.000 kr.
A: Når DB pr. stk. er lavere end for de andre produkter
A: Aldrig
F: KO forsvinder sjældent med produktet. Nedlægges det alligevel, mister man 400.000 kr. i DB, og de andre produkter skal bære de samme KO (dødsspiralen).

Q: En reklamekampagne på 250.000 kr. er bestilt. Hvordan påvirker den fordelingen mellem hjemmemarked og eksport?
A: Hjemmemarkedet skal have mere, så reklamen tjenes hjem
R: Slet ikke. Den er fast og indgår kun i MFB
A: Eksporten skal sænkes med 250.000/DB-pr.-stk.
A: Reklamen lægges til VE
F: Faste omkostninger ændrer ikke, hvor DOMS = DOMK. De trækkes fra bagefter.

Q: Produkt C sælges sammen med 4 stk. af produkt D. Hvad skal med, når C's pris optimeres?
A: Kun C's DB
R: C's DB plus DB fra de 4 D'er, der følger med
A: C's DB minus D's DB
A: Kun det samlede DB for D
F: Komplementære varer: ser man på C alene, vælger man en forkert (for høj) pris.
