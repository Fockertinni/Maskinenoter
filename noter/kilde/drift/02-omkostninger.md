id: omkostninger
navn: Indtægter og omkostninger
ikon: omkostning
intro: Forskellen på indtægt, indbetaling, udgift, omkostning og udbetaling, omkostningstyper, afskrivning, offeromkostning og sunk cost.
---
# Noter

> **Pensum**
> Lærebog kap. 4 · Lektion 2–3 · Eksamensvægt: indgår i næsten alle opgaver

Kapitel 4 giver begreberne til alle senere beregninger. Det vigtigste er at kunne skelne mellem *hvornår* noget er en indtægt eller omkostning, og *hvornår* pengene faktisk går ind eller ud.

## Pengene ind

- **Indtægt:** værdien af det solgte i perioden (faktureringskriteriet eller produktionskriteriet).
- **Indbetaling:** når pengene faktisk kommer ind.

## Pengene ud

- **Udgift:** når varen eller ydelsen modtages.
- **Omkostning:** når den forbruges.
- **Udbetaling:** når der betales.

> **Eksempel (lærebogen s. 83)**
> Varer købes i februar for 20.000 kr. med 60 dages kredit. Halvdelen sælges i marts og halvdelen i maj. Udgift: februar 20.000. Udbetaling: april 20.000. Omkostning: marts 10.000 og maj 10.000.

## Omkostningstyper

- **Variable omkostninger (VO):** varierer direkte med produktionen, fx råvarer, akkordløn og energi i produktionen.
- **Kapacitetsomkostninger (KO):** uafhængige af produktionens størrelse og kan ikke ændres på kort sigt.
    - *Kontante KO:* betales stort set samtidig med forbruget (husleje, funktionærløn).
    - *Beregnede KO:* aktivets kostpris fordeles over årene (afskrivninger).
- **Springvist varierende omkostninger:** KO stiger i spring, når kapaciteten udvides (en ekstra maskine, en ekstra vagt).
    - *Reversible:* kan fjernes igen ved lavere aktivitet (lejet lager, vikarer).
    - *Irreversible:* kan ikke fjernes igen (købt maskine, ombygning).

## Variable omkostningers forløb

| Forløb | DOMK når mængden stiger | Årsager |
|---|---|---|
| Proportionalt | Konstant (DOMK = VE) | Standardantagelsen i opgaver |
| Degressivt | Falder | Mængderabat, bedre udnyttelse, stordriftsfordele |
| Progressivt | Stiger | Overarbejde, fejl, pladsmangel |

## Andre begreber

- **Offeromkostning (alternativomkostning):** den fortjeneste, man giver afkald på ved at vælge et alternativ fra.
- **Sunk cost:** en irreversibel omkostning, der allerede er afholdt. Den skal **aldrig** indgå i en beslutning.

> **Faldgrube**
> Til eksamen står sunk cost ofte som "udviklingsomkostninger på X kr." eller "reklamekampagnen er bestilt". Kun fremtidige betalinger, der afhænger af beslutningen, skal med.

<div class="genkald" markdown="1">
### Test dig selv

1. Giv to eksempler på springvist varierende omkostninger på et skib eller et værk. Er de reversible?
2. Hvorfor er DOMK = VE ved proportionale omkostninger?
3. En lækagereparation har kostet 80.000 kr. Nu foreslås en ny pumpe. Skal de 80.000 kr. med i beregningen?

<details markdown="1"><summary>Svar</summary>

1. En ekstra vagtordning (reversibel, den kan afskaffes igen) og en ekstra kedel eller pumpe, der købes (irreversibel).
2. Når hver ekstra enhed koster det samme, er ændringen i VO pr. ekstra enhed lig med VO pr. enhed.
3. Nej. De 80.000 kr. er sunk cost. Kun fremtidige betalinger, der afhænger af beslutningen, skal med.
</details>
</div>

# Formler

```
VE   = VO / afsætning          variabel enhedsomkostning
KE   = KO / afsætning          kapacitetsomkostning pr. enhed
SE   = VE + KE                 samlet enhedsomkostning
DOMK = ΔVO / Δx                differensomkostning
```

```
Lineær afskrivning = (Anskaffelse – Scrapværdi) / Levetid
Saldoafskrivning   = Saldo primo · p
                     p = 1 – (Scrap / Anskaffelse)^(1/n)
```

## Eksempel 1: afskrivning

En maskine købes for 500.000 kr., levetid 4 år, scrapværdi 120.000 kr. Regn den lineære afskrivning og saldoprocenten selv først.

<details markdown="1"><summary>Vis udregning</summary>

- Lineært: (500.000 − 120.000) / 4 = **95.000 kr./år**.
- Saldo: p = 1 − (120/500)^(1/4) = 1 − 0,24^0,25 ≈ **30 %**. År 1: 0,30 · 500.000 = 150.000. År 2: 0,30 · 350.000 = 105.000 osv. Efter 4 år er saldoen ca. 120.000.
</details>

## Eksempel 2: offeromkostning

En elektriker kan tjene 500.000 kr./år, men læser i stedet til maskinmester med 60.000 kr. i SU og 2.000 kr. til bøger. Kost og logi koster 100.000 kr.

<details markdown="1"><summary>Vis udregning</summary>

- Omkostning: kost og logi på 100.000 kr. skal betales uanset valget, så den er ikke relevant for valget.
- Offeromkostning ved at studere: 500.000 − 60.000 + 2.000 = **442.000 kr./år**.
</details>

## Eksempel 3: sunk cost

Udvikling af et kursus har kostet 100.000 kr. Afholdelsen koster 75.000 kr., videreudvikling 50.000 kr., og en kunde vil betale 200.000 kr. Skal kurset holdes?

<details markdown="1"><summary>Vis udregning</summary>

- Forkert: 100.000 + 75.000 + 50.000 = 225.000 > 200.000, altså nej.
- Rigtigt: 75.000 + 50.000 = 125.000 < 200.000, altså **ja, fortsæt**. De 100.000 kr. er sunk cost.
</details>

# Quiz

Q: Varer købes i februar med 60 dages kredit og sælges i marts. Hvornår er der en **udbetaling**?
A: Februar
A: Marts
R: April
A: Maj
F: Udgiften er i februar (varen modtages), omkostningen i marts (varen forbruges), og udbetalingen sker, når kreditten udløber 60 dage efter: april.

Q: Hvilken af disse er en beregnet kapacitetsomkostning?
A: Husleje
A: Funktionærløn
R: Afskrivning på en maskine
A: Råvarer
F: Beregnede KO er aktivets kostpris fordelt over levetiden. Husleje og funktionærløn er kontante KO, råvarer er variable.

Q: Hvordan forløber DOMK ved progressive variable omkostninger, når mængden stiger?
A: Konstant
A: Faldende
R: Stigende
A: Først stigende, så faldende
F: Progressive omkostninger skyldes fx overarbejde, fejl og pladsmangel. Hver ekstra enhed bliver dyrere.

Q: En maskine koster 500.000 kr., har levetid 4 år og scrapværdi 120.000 kr. Hvad er den lineære afskrivning pr. år?
N: 95000 ; 1 ; kr.
L: (500.000 − 120.000) / 4 = 95.000 kr.
F: Kun det beløb, der faktisk tabes over levetiden (anskaffelse minus scrap), fordeles.

Q: Samme maskine (500.000 kr., scrap 120.000 kr., 4 år) afskrives med saldometoden. Hvad er saldoprocenten p i %? (Afrund til hele procent.)
N: 30 ; 0,6 ; %
L: p = 1 − (120.000/500.000)^(1/4) = 1 − 0,24^0,25 = 1 − 0,700 = 0,30 → 30 %.
F: Med p = 30 % falder saldoen 500 → 350 → 245 → 171,5 → 120 (1.000 kr.).

Q: Udvikling har kostet 100.000 kr. At gennemføre koster 125.000 kr., og kunden betaler 200.000 kr. Hvad er beslutningen?
A: Nej, for 225.000 > 200.000
R: Ja, for 125.000 < 200.000. Udviklingen er sunk cost
A: Ja, men kun hvis prisen hæves til 225.000
A: Det kan ikke afgøres uden KO
F: De 100.000 kr. er brugt uanset hvad. Kun de fremtidige 125.000 kr. afhænger af beslutningen.

Q: Hvad er en offeromkostning?
A: En omkostning, der allerede er afholdt
R: Den fortjeneste, man giver afkald på ved at vælge et alternativ fra
A: En variabel omkostning, der stiger i spring
A: Omkostningen ved at ofre et aktiv (scrapværdi)
F: Den første mulighed er sunk cost. Offeromkostningen er værdien af det bedste fravalgte alternativ.
