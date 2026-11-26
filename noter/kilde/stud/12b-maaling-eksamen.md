id: maaling-eksamen
navn: Alt du skal bruge til eksamen: Måleusikkerhed
ikon: kapacitet
intro: Reglerne for worst case og geometrisk kombination, afrunding, de fire skemaer, og fælderne der koster point.
---
# Noter

> **Sådan bedømmes faget (usikkert)**
> Ingen eksamensbeskrivelse i materialet. Portfolio-opgaven i måling er en obligatorisk aflevering på max 4 sider (tillægsopgaven tæller ikke med i bedømmelsen).

Hvis du kun når én ting: sum → absolutte usikkerheder, produkt → relative. Worst case lægger sammen, geometrisk kombination tager kvadratroden af kvadraterne.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | ΔS = p/100 · S + n · opløsning | Usikkerhed fra databladet |
| 2 | ΔZ = ΔX + ΔY | WC, sum og differens |
| 3 | ΔZ/Z = ΔX/X + ΔY/Y | WC, produkt og kvotient |
| 4 | ΔZ = √(ΔX² + ΔY²) | GK, sum og differens |
| 5 | ΔZ/Z = √((ΔX/X)² + (ΔY/Y)²) | GK, produkt og kvotient |
| 6 | Xⁿ: n · ΔX/X | Potens, både WC og GK (n ganges på før kvadratet) |
| 7 | P = U · I = R · I² = U² / R | Effekt |

> **Fælden**
> I² er én måling. Brug (2 · ΔI/I)² i geometrisk kombination, ikke (ΔI/I)² to gange.

## 2 · De fire skemaer

1. **Anvendt udstyr** (tabel 1): betegnelse, symbol, fabrikat, model, serienr., måleområde, nøjagtighed, reference til datablad.
2. **Måleskema** (tabel 2): de 5 målte værdier med alle cifre, ΔS med 1 decimal mere end opløsningen, ΔS/S med 2–3 betydende cifre.
3. **Resultatskema, worst case** (tabel 3): et beregningseksempel **før** tabellen.
4. **Resultatskema, WC og GK** (tabel 4): eksempel på ΔR_kreds,geom og ΔP_R1,geom **før** tabellen, og en kort faktuel diskussion af de tre effekter.

## 3 · Det du skal kunne forklare

**Hvorfor GK er mindre end WC:** fejlene fra uafhængige instrumenter er tilfældige og trækker sjældent samme vej på samme tid.

**Hvorfor afrunde:** for mange cifre viser en præcision, målingen ikke har (falsk præcision).

**Hvorfor de tre effekter er forskellige:** de bruger forskellige målinger med forskellig usikkerhed. Og R1 er målt kold, mens U og I er målt varm.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>R_kreds = 34,2 Ω med R1 ± 0,51 og R2 ± 0,46 Ω. Angiv WC og GK.</summary>

WC: ± 0,97 → 34,2 ± 1,0 Ω (2,8 %). GK: √(0,51² + 0,46²) = 0,69 → 34,2 ± 0,7 Ω (2,0 %).
</details>

<details markdown="1"><summary>P = U² / R med U ± 0,354 % og R ± 2,31 %. Angiv WC og GK i procent.</summary>

WC: 2 · 0,354 + 2,31 = 3,02 %. GK: √((2 · 0,354)² + 2,31²) = √(0,50 + 5,34) = 2,42 %.
</details>

<details markdown="1"><summary>Hvorfor er min/max-metoden lettest til R1 // R2?</summary>

Fordi R1 og R2 indgår både i tæller og nævner. Reglerne for produkt og sum ville tælle den samme fejl flere gange. Indsæt alle minimumsværdier og alle maksimumsværdier og tag halvdelen af forskellen.
</details>

<details markdown="1"><summary>Hvad er en tangamperemeters fordel og ulempe her?</summary>

Fordel: man behøver ikke bryde kredsen. Ulempe: den er mindre nøjagtig end et multimeter i serie, og den dominerer usikkerheden i effektberegningerne.
</details>

## 5 · Faldgruber

- Lægge relative usikkerheder sammen ved en sum.
- Regne I² som to uafhængige målinger i GK.
- Afrunde i mellemregningerne.
- For mange cifre i resultatskemaet.
- Glemme referencer til beregningerne og databladene.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Et måleresultat skal have en usikkerhed. Fra databladet er den p procent af aflæsningen plus n gange opløsningen. Ved summer lægges absolutte usikkerheder sammen, ved produkter og kvotienter relative, og en potens ganges på den relative usikkerhed. Worst case lægger dem direkte sammen, geometrisk kombination tager kvadratroden af summen af kvadraterne og må bruges, når målingerne er uafhængige. I resultatskemaet får usikkerheden 1 til 2 betydende cifre, og værdien rundes af til samme decimal. De tre effekter i R1 stemmer overens inden for usikkerheden, og U gange I er mest præcis.
</details>
</div>
