id: indhylning
navn: Indhyllingskurver
ikon: indhylning
intro: Hvilken kombination af anlæg, eller egen produktion mod indkøb, giver de laveste totale omkostninger ved en given mængde?
---
# Noter

> **Pensum**
> Undervisningsnote (pdf) · Eksamensvægt: mellem · Tegnes i Excel til eksamen

Indhyllingskurven er den nederste "kant" af alle totalomkostningskurverne. Den viser for hver mængde, hvilket anlæg (eller hvilken kombination) der er billigst.

## Sådan gør du

- Hvert anlæg tegnes som en ret linje: **TO = KO + VE·x**, op til anlæggets kapacitet.
- Et anlæg, der er betalt og uden KO, starter i (0, 0). Gamle anlægs KO er ofte **sunk cost**, så de sættes til 0.
- Er kapaciteten på ét anlæg ikke nok, kombineres anlæg. Det billigste i VE fyldes op først, og det næste anlæg lægges i forlængelse.
- Indhyllingskurven er det laveste punkt for hver mængde. Skæringspunkterne viser, hvornår man skifter anlæg.
- Et outsourcing-tilbud uden KO er en ret linje fra (0, 0) med hældningen = prisen pr. stk.

> **Til eksamen**
> Kurven skal tegnes i Excel som et punktdiagram (x = stk., y = kr.), og du skal **aflæse og beregne** valget ved bestemte mængder. Et billede af en håndtegning taget med mobilen må gerne med i PDF'en.

<div class="genkald" markdown="1">
### Test dig selv

1. Anlæg X: KO = 1 mio., VE = 755. Anlæg Y: KO = 2 mio., VE = 455. Hvornår kan Y betale sig?
2. Hvordan indtegnes et outsourcing-tilbud på 400 kr./stk. uden KO?
3. Hvorfor sættes KO for et gammelt, betalt anlæg ofte til 0?

<details markdown="1"><summary>Svar</summary>

1. Skæring: x = (2 − 1) mio. / (755 − 455) = 3.333 stk. Over 3.333 stk. er Y billigst.
2. Som en ret linje fra (0, 0) med hældning 400: TO = 400·x.
3. Fordi anskaffelsen er betalt og ikke kan ændres (sunk cost). Kun omkostninger, der afhænger af valget, skal med.
</details>
</div>

# Formler

```
TO_i(x) = KO_i + VE_i · x

Skæringspunkt mellem anlæg 1 og 2:
   x = (KO_2 – KO_1) / (VE_1 – VE_2)
```

## Eksempel (E2018 opg. 3, MULTITASK)

| Anlæg | KO | VE | Kapacitet |
|---|---|---|---|
| A (gammelt) | 0 | 10 | 4.000 |
| B | 10.000 | 6 | 5.000 |
| C | 20.000 | 3 | 5.000 |

Find skæringspunkterne og det billigste valg ved 1.000, 3.000 og 9.000 stk.

<details markdown="1"><summary>Vis udregning</summary>

Skæringspunkter: A/B = 10.000/4 = 2.500 stk. A/C = 20.000/7 ≈ 2.857 stk. B/C = 10.000/3 ≈ 3.333 stk.

- 1.000 stk.: **A** (10.000 kr. mod B 16.000 og C 23.000).
- 3.000 stk.: **B** (28.000 mod A 30.000 og C 29.000).
- 9.000 stk.: **2 × C** = 40.000 + 27.000 = 67.000 kr. Til sammenligning C + B = 69.000 og C + A = 75.000.
</details>

# Quiz

Q: Anlæg X: KO = 1 mio. kr., VE = 755. Anlæg Y: KO = 2 mio. kr., VE = 455. Ved hvor mange stk. er de lige dyre? (Afrund til hele stk.)
N: 3333 ; 1 ; stk.
L: x = (2.000.000 − 1.000.000) / (755 − 455) = 1.000.000/300 = 3.333 stk.
F: Over skæringspunktet vinder anlægget med lav VE, under vinder det med lav KO.

Q: A: KO 0, VE 10. B: KO 10.000, VE 6. Hvad er de totale omkostninger med B ved 3.000 stk.?
N: 28000 ; 1 ; kr.
L: TO = 10.000 + 6 · 3.000 = 28.000 kr.
F: Til sammenligning koster A 30.000 kr. ved 3.000 stk.

Q: Hvad er indhyllingskurven?
A: Kurven for det anlæg med lavest VE
R: Den nederste kant af alle totalomkostningskurver, dvs. den billigste løsning ved hver mængde
A: Summen af alle anlægs totalomkostninger
A: Kurven for det anlæg med lavest KO
F: For hver mængde aflæser man den laveste totalomkostning, uanset hvilket anlæg eller hvilken kombination der giver den.

Q: Et gammelt anlæg er fuldt betalt. Hvordan indtegnes det?
R: Fra (0, 0) med hældning = VE, fordi den gamle anskaffelse er sunk cost
A: Med KO = den oprindelige anskaffelsespris
A: Med KO = den bogførte værdi
A: Det skal ikke indtegnes
F: Kun omkostninger, der afhænger af valget, skal med.

Q: Kapaciteten på det billigste anlæg (laveste VE) er brugt op. Hvad gør man?
A: Skifter helt over til det næstbilligste anlæg
R: Fylder det billigste op og lægger det næste anlæg i forlængelse
A: Fordeler mængden ligeligt
A: Køber endnu et af det dyreste anlæg
F: Kurven fortsætter fra det punkt, hvor første anlæg er fuldt, med det næste anlægs KO og VE.

Q: Ved 9.000 stk. (A: KO 0/VE 10/kap. 4.000, B: 10.000/6/5.000, C: 20.000/3/5.000), hvad er de laveste totale omkostninger?
N: 67000 ; 1 ; kr.
L: 2 × C: 2 · 20.000 + 3 · 9.000 = 67.000 kr. (C + B = 69.000, C + A = 75.000.)
F: Det kan betale sig at købe en ekstra C, fordi den lave VE hurtigt tjener den ekstra KO hjem.
