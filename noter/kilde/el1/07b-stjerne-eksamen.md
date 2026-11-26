id: stjerne-eksamen
navn: Alt du skal bruge til eksamen: Y-Δ-transformation og stjernelast uden nul
ikon: trefase
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at vise beregning af stjernepunktets forskydning."

Hvis du kun når én ting: kunne vise hele vejen fra tre stjernemodstande til U_X0: Y → Δ, grenstrømme, netstrømme, spændinger over stjernemodstandene og U_X0 = U_10 − U_1X, med kontrollen fra de to andre faser.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | R12 = (R10R20 + R20R30 + R30R10) / R30 | Y → Δ (nævner: modstanden over for) |
| 2 | R10 = R12R31 / (R12 + R23 + R31) | Δ → Y |
| 3 | I_12 = U_12 / R12 | Grenstrøm i trekanten |
| 4 | I1 = I_12 − I_31 | Netstrøm (Kirchhoff i hjørnet) |
| 5 | U_1X = I1 · R10 | Spænding over stjernemodstanden |
| 6 | U_X0 = U_10 − U_1X | Stjernepunktets forskydning |
| 7 | U_X0 = Σ(U_i0/Z_i) / Σ(1/Z_i) | Millman (direkte) |

## 2 · Det du skal kunne forklare

### Hvorfor flytter stjernepunktet sig?

**Pointe:** uden nul skal de tre strømme summere til nul. Ved usymmetrisk last kan det kun ske, hvis spændingerne over lasterne bliver forskellige.

**Hvorfor:** den lille impedans vil trække meget strøm. For at holde summen på nul trækkes stjernepunktet mod den fase, så den får mindre spænding, og den store impedans får mere.

**Praksis:** en knækket nul i en bolig. Apparater på den let belastede fase kan få op mod 400 V og brænde af.

### Beregningen med Y-Δ-transformation

1. Omregn de tre stjernemodstande til en trekant.
2. Trekanten ligger på netspændingerne (400 V med vinklerne 30°, −90° og 150°, når U_10 er 0°).
3. Grenstrømme, så netstrømme i hjørnerne.
4. Spændingen over hver stjernemodstand er netstrøm gange modstand.
5. U_X0 = U_10 − U_1X. Gentag for fase 2 og 3 som kontrol.

**Tal du kan nævne:** 80/125/45 Ω gav U_X0 = 68 V. R2 (125 Ω) fik 285 V og R3 (45 Ω) kun 168 V.

### Afbrudt fase

**Pointe:** mister en Y-last én fase, sidder de to andre modstande i serie på netspændingen. Mister en Δ-last én fase, ligger den ene gren stadig på 400 V, og de to andre i serie på 400 V. Begge giver halv effekt for resistiv last.

## 3 · Det du skal kunne tegne

1. Stjernen med R10, R20, R30 og den ækvivalente trekant med R12, R23, R31.
2. Spændingstrekanten (L1, L2, L3) med nulpunktet N i midten.
3. Lastens stjernepunkt X forskudt fra N mod den mindste modstand, og pilene U_1X, U_2X, U_3X fra X til hjørnerne.
4. Vektoren U_X0 fra N til X.
5. Netstrømmene som forskelle af grenstrømmene.

<details markdown="1"><summary>Tjek din tegning</summary>

Med 80/125/45 Ω ligger X tættest på L3 (45 Ω). Pilen fra X til L2 er længst (285 V), pilen til L3 kortest (168 V). U_X0 peger fra N op mod venstre (102°).
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvorfor bruger man Y-Δ-transformation i stedet for at regne direkte på stjernen?</summary>

I trekanten ligger hver modstand direkte på en kendt netspænding, så strømmene er lette at regne. I stjernen uden nul kender man ikke spændingen over hver modstand, før man kender stjernepunktet.
</details>

<details markdown="1"><summary>Hvad viser et voltmeter mellem lastens stjernepunkt og N, når lasten er symmetrisk?</summary>

0 V. Ved symmetri ligger stjernepunktet i nulpunktet, også uden nul.
</details>

<details markdown="1"><summary>Hvordan måler du tre ukendte stjernemodstande uden at åbne stjernen?</summary>

Mål mellem hvert par klemmer. Hver måling er to modstande i serie. Tre ligninger med tre ubekendte: læg dem sammen og del med 2 for at få summen, og træk så hver måling fra.
</details>

<details markdown="1"><summary>Hvorfor falder effekten, når nullen fjernes?</summary>

Spændingen flyttes væk fra de små modstande, der tog mest effekt (P = U²/R), og over på den store. Med 80/125/45 Ω faldt P fra 2,28 til 2,08 kW.
</details>

## 5 · Faldgruber

- Forkert nævner i Y → Δ (det er modstanden over for grenen).
- I2 = I_23 + I_12 (fortegnsfejl, som også står på sliden).
- 230 V brugt på trekanten i stedet for 400 V.
- Vinklerne på netspændingerne glemt (U_12 ligger 30° foran U_10).
- Ingen kontrol af U_X0 fra de andre faser.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

En usymmetrisk stjernelast uden nul kan ikke sende differensstrømmen tilbage, så strømmene skal summere til nul. Derfor flytter lastens stjernepunkt sig mod den mindste impedans, og den største impedans får den højeste spænding. Jeg regner det ved at omregne stjernen til en trekant (fælles tæller, nævner = modstanden over for), regne grenstrømmene på 400 V, netstrømmene i hjørnerne, spændingen over hver stjernemodstand og til sidst U_X0 = U_10 − U_1X. Det skal give det samme fra alle tre faser. Millmans formel giver U_X0 direkte. En knækket nul i en installation giver samme fænomen.
</details>
</div>
