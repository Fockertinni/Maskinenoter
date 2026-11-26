id: kortslutning-eksamen
navn: Alt du skal bruge til eksamen: Kortslutning og koblingsciffer
ikon: kortslutning
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise ved bordet i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Egne noter og rapporter må ikke medbringes, så alt herunder skal sidde i hovedet. Husk passeren, du skal måske slå cirkler.

Hvis du kun når én ting: kunne forklare hvad Dyn11 betyder, finde et koblingsciffer på urskiven og regne I_k3 = I_N · 100 / e_k. Og kunne sige de fem betingelser for paralleldrift.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | Faseforskydning = ciffer · 30° bagud | Dyn5 = 150°, Dyn11 = 330° (30° foran) |
| 2 | I_N = S_N / (√3 · U_N) | Mærkestrøm |
| 3 | I_k3 = I_N · 100 / e_k | Kortslutning direkte på klemmerne |
| 4 | S_k = S_N · 100 / e_k | Kortslutningseffekt |
| 5 | I_k2 = (√3 / 2) · I_k3 ≈ 0,87 · I_k3 | 2-faset kortslutning |
| 6 | i_p = κ · √2 · I_k, 1 ≤ κ ≤ 2 | Stødstrøm (første top) |
| 7 | I_k = c · U_f / Z_total | Med net, transformer og kabel |

**Grupperne:** I = 0, 4, 8 · II = 2, 6, 10 · III = 1, 5 · IV = 7, 11.

> **Fælden**
> Koblingscifferet angiver hvor meget **sekundærsiden ligger efter** primærsiden, målt i 30°-trin. 11 er altså 30° foran, ikke 30° efter.

## 2 · Det du skal kunne forklare

### Koblingsbetegnelsen

**Pointe:** stort bogstav er HS, lille er LS, n er udført nul, og tallet er faseforskydningen i 30°-trin.

**Hvorfor Dyn til distribution og ikke Yy:** ved enfaset last på sekundærsiden kan primærstrømmen i en Yy kun løbe tilbage gennem de to andre primærviklinger. Feltet udlignes ikke, og stjernepunktet forskydes. Med trekant på primærsiden belaster en enfaset last kun én primærvikling. Δ fanger også 3. harmoniske.

### Urskive-metoden

1. Primærens A peger mod kl. 12.
2. Sekundærviklingerne tegnes parallelt med de primære viklinger på samme ben.
3. Sekundærens a peger på cifferet.

**Cirkelslag i labbet:** forbind A og a, sæt 100 V på, mål spændingerne mellem klemmerne, og slå cirkler fra B og C. Skæringspunkterne giver b og c.

### Paralleldrift

**De fem betingelser:** samme omsætningsforhold, samme koblingsciffer (eller i samme gruppe), samme fasefølge, næsten samme e_k (±10 %), effektforhold højst ca. 1:3.

**Hvorfor samme e_k:** transformerne har samme spændingsfald, så den med lavest impedans tager mest strøm. **Hvorfor samme omsætning:** ellers løber der en cirkulationsstrøm allerede i tomgang.

**Dyn5 og Dyn11:** kan parallelkobles ved at bytte to faser på begge sider af den ene. Gruppe I/II kan aldrig kobles med III/IV.

**Sikkerhed:** mål spændingen mellem de klemmer, der skal forbindes. 0 V er korrekt.

### Inrush

**Pointe:** indkobling i spændingens nulgennemgang kan give fluxen op til ca. 2 × Φ_max, så kernen mætter, og strømmen bliver mange gange I_N.

**Hvorfor:** fluxen er integralet af spændingen. Starter den fra 0 i nulgennemgangen, når den en hel halvperiodes areal. Ved spændingsmaksimum starter den symmetrisk.

**Ekstra point:** inrush er rig på 2. harmoniske, og differentialbeskyttelse blokerer på dem, så den ikke fejludløser.

### Kortslutningsstrømmene

**Pointe:** kortslutning på klemmerne begrænses kun af transformerens egen impedans, så I_k3 = I_N · 100 / e_k.

**Tal du kan nævne:** 2 kVA og e_k = 5 % giver 57,7 A (20 gange I_N). En 1.000 kVA på 400 V med 6 % giver 24 kA.

**Største og mindste:** I_k3 dimensionerer kortslutningsfastheden. Den mindste (ofte 1-faset i enden af kablet) bestemmer, om sikringen når at udløse.

**Stødstrøm:** sker fejlen i nulgennemgangen, får strømmen et DC-led, og første top kan blive næsten 2 · √2 · I_k.

### Fordelingen i en Dyn-transformer

| Fejl på LS | Primære linjestrømme |
|---|---|
| 3-faset | I'k3 i alle tre |
| 2-faset | I'k3 i én, I'k3/2 i to |
| 1-faset | I'k3/√3 i to, 0 i én |

**Pointe:** Δ-viklingen fordeler en usymmetrisk fejl ud over flere primære ledere.

## 3 · Det du skal kunne tegne

1. **Urskiven** for Dyn5 og Dyn11 med primær- og sekundærvektorer.
2. **Cirkelslag:** primærtrekanten i målestok og cirkler fra B og C.
3. **Viklingsdiagrammet** for en Dyn, så du kan vise hvilke viklinger der sidder på samme ben.
4. **Strømfordelingen** for 1-faset fejl gennem Δ-viklingen.
5. **Inrush-strømmen** som høje, ensidige toppe der klinger af.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvad betyder Dyn11?</summary>

Trekant på HS, stjerne på LS med udført nul, og LS ligger 11 · 30° = 330° efter HS, altså 30° foran.
</details>

<details markdown="1"><summary>Kan en Dyn11 og en Yy0 parallelkobles?</summary>

Nej. 11 er i gruppe IV, 0 i gruppe I. Der er 30° mellem dem, og ingen klemombytning kan rette det.
</details>

<details markdown="1"><summary>To transformere har e_k 4 % og 6 %. Hvad sker der?</summary>

Den med 4 % tager mest last og kan blive overbelastet, før den anden er fuldt udnyttet.
</details>

<details markdown="1"><summary>Hvorfor er I_k2 mindre end I_k3?</summary>

Ved 2-faset fejl driver netspændingen (√3 · U_f) strømmen gennem to faseimpedanser: I_k2 = √3 · U_f / (2 · Z) = (√3/2) · I_k3.
</details>

<details markdown="1"><summary>Hvornår er inrush mindst?</summary>

Ved indkobling i spændingsmaksimum, fordi fluxen her skal være nul og starter symmetrisk.
</details>

<details markdown="1"><summary>Hvorfor er en 1-faset fejl bag en Dyn ikke så slem for nettet?</summary>

Strømmen løber i én trekantvikling, som hænger på to primære linjer. Fejlen fordeles på to ledere med I'k3/√3.
</details>

## 5 · Ved bordet i laboratoriet

Samme 2 kVA Dyn-transformer. Variotransformeren skrues op fra 0 V, til der løber I_k3 på sekundærsiden.

1. **3-, 2- og 1-faset kortslutning:** mål alle strømme på begge sider med tang og sammenlign med tabellen.
2. **Koblingsciffer ved 100 V:** forbind A og a, mål og tegn med cirkelslag.
3. **Paralleldrift:** find den rigtige tilslutning, mål 0 V mellem klemmerne, og vis det vektorielt.

## 6 · Faldgruber

- Koblingscifferet læst som "foran" i stedet for "bagud".
- Kortslutningen monteret med spænding på.
- Sekundærsiderne forbundet uden at måle 0 V først.
- I_k3 regnet med 230 V i stedet for I_N · 100 / e_k.
- Glemt at det er den mindste I_k, der bestemmer om sikringen udløser.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Koblingsbetegnelsen som Dyn11 fortæller viklingernes kobling og hvor mange 30°-trin sekundærsiden ligger efter. Cifferet findes med urskiven eller ved cirkelslag. To transformere kan parallelkobles med samme omsætning, samme ciffer eller gruppe, samme fasefølge, næsten samme e_k og højst 1:3 i effekt. Kortslutningsstrømmen på klemmerne er I_N gange 100 delt med e_k, den 2-fasede er 0,87 gange den, og stødstrømmen kan blive næsten 2√2 gange I_k. Trekantviklingen fordeler usymmetriske fejl på flere ledere og fanger 3. harmoniske. Indkobling i nulgennemgangen giver inrush.
</details>
</div>
