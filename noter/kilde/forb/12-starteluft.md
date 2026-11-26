id: starteluft
navn: Starteluft og motorstart
ikon: starteluft
intro: Startmetoder, start med direkte trykluft, starteluftventilen, sikkerhed mod utilsigtet start, Kongsberg-systemet og manøvresystemet.
---
# Noter

> **Kilder**
> K40.5 · JW s. 168–178 · Lektion 59

Ved start skal krumtapakslen i rotation, så kompressionen opvarmer luften nok til at antænde brændstoffet. En kold cylinder tager varme fra luften, så der indsprøjtes først, når delene er varmet op.

**Startmetoder:** elektrisk startmotor, luftmotor, spændt fjeder (hånd eller hydraulik), håndsving (små motorer) og direkte trykluft i cylinderen (store motorer). Kritiske motorer (redningsbåd, nødgenerator) har flere uafhængige metoder.

## Start med direkte trykluft

- Trykluft (ca. 40 bar) ledes gennem en starteluftventil i topstykket ind på stempeltoppen.
- Kun stempler på vej ned i arbejdsslaget får luft, og kun til de nærmer sig BDC. Det styres af **starteluftfordeleren**.
- **Starteluftventilen:** kegle og stempel med stor diameter. En fjeder holder den lukket, når rummet over stemplet er trykløst. Styreluft åbner den.

## Sikkerhed

| Element | Funktion |
|---|---|
| Hoved-starteluftventil | Lukkes manuelt før arbejde på motoren og blokerer start. "Auto", når motoren må startes |
| Tørnegear | Fastlåser krumtapakslen (skruen kan drejes af bølger, både, is) og drejer den langsomt ved inspektion. Start med indkoblet tørnegear = totalhavari. En pneumatisk sikring forhindrer det |
| Indikatorhaner | Åbnes efter stop ved længere stilstand, så intet tryk kan opbygges |
| Kontraventil i hovedrør | Hindrer forbrændingsgas (fra en utæt starteluftventil) i at nå startelufttankene |
| Overtryksventil | Åbner ved for højt tryk i hovedfordelingsrøret |

> **Før start**
> Giv starteluft med reduceret tryk og åbne indikatorhaner. Se efter udsprøjtende væske (væske på stempeltoppen kan blokere og give hydraulisk lås). Luk hanerne. **Slow turning:** reduceret tryk, til krumtappen har drejet én omgang, derefter fuldt tryk. Ingen rotation inden for en given tid → start afbrydes, og der gives alarm.

## Kongsberg-systemet

- 3 kompressorer: 2 hovedkompressorer og 1 nødkompressor (fra nødstrømtavlen).
- 2-trins kompression med mellemkøling (LT-ferskvand). Det sparer energi.
- 2 startelufttanke forsyner hoved- og hjælpemotorer med starte- og manøvreluft.
- Kondensvand skal drænes regelmæssigt, ellers falder luftkapaciteten.
- **Søfartsstyrelsens krav:** reversible motorer 12 starter uden påfyldning, ikke-reversible 6. Reversible motorer skal kunne starte i begge retninger under manøvrering, så de skal bruge dobbelt så mange.

## Manøvresystemet

Starter motoren og skifter omdrejningsretning (frem/bak). Ved reversering stoppes motoren først og startes i modsat retning. Det bruger meget starteluft.

1. Main starting valve (luft ved start).
2. Slow turning valve (luft ved slow turning).
3. Kontraventil.
4. Overtryksventil.
5. Pneumatisk tørnegear-sikring.
6. Komponent, der ændrer indsprøjtningstidspunktet ved reversering.

Udstødningsventilernes trykluft til lukkefunktionen leveres også fra manøvresystemet. Følg altid fabrikantens opstartsprocedure.

<div class="genkald" markdown="1">
### Test dig selv

1. Forklar starteluftventilens virkemåde.
2. Nævn fem sikkerhedsforanstaltninger mod utilsigtet start.
3. Hvorfor kræver reversible motorer dobbelt så mange starter?
4. Hvorfor slow turning før start?

<details markdown="1"><summary>Svar</summary>

1. Fjederen holder keglen lukket. Når fordeleren sender styreluft til rummet over stemplet, presses ventilen op, og startluften strømmer ind på stempeltoppen.
2. Lukket hoved-starteluftventil, indkoblet tørnegear med pneumatisk sikring, åbne indikatorhaner, kontraventil i hovedrøret, overtryksventil (plus spærring i manøvresystemet).
3. De skal kunne stoppe og starte i modsat retning under manøvrering, og hver reversering bruger en start.
4. For at opdage væske i cylindrene ved lavt tryk, før fuldt starttryk kan give hydraulisk lås og havari.
</details>
</div>

# Quiz

Q: Hvornår får en cylinder starteluft?
A: Når stemplet er på vej op i kompressionsslaget
R: Når stemplet er på vej ned i arbejdsslaget, indtil det nærmer sig BDC
A: Hele tiden under start
A: Kun i TDC
F: Starteluftfordeleren styrer det, så luften skubber stemplet den rigtige vej.

Q: Hvad holder starteluftventilen lukket?
R: En fjeder
A: Starteluften
A: Styreluften
A: Forbrændingstrykket
F: Styreluft over det store stempel åbner ventilen mod fjederen.

Q: Hvad sker der, hvis man starter med indkoblet tørnegear?
A: Motoren starter langsomt
R: Totalhavari. Derfor er der en pneumatisk sikring
A: Intet, tørnegearet kobler selv ud
A: Startluften blæses af
F: Tørnegearet låser krumtapakslen fast.

Q: Hvad er formålet med kontraventilen i hovedrøret?
A: At holde trykket i tankene
R: At hindre forbrændingsgas fra en utæt starteluftventil i at nå startelufttankene
A: At beskytte mod overtryk
A: At dræne kondensvand
F: Varm gas i startluftsystemet kan antænde olierester og give eksplosion.

Q: Hvor mange starter uden påfyldning kræver Søfartsstyrelsen for en reversibel motor?
A: 6
R: 12
A: 18
A: 24
F: Ikke-reversible motorer skal klare 6.

Q: Hvorfor gives der starteluft med reduceret tryk og åbne indikatorhaner før start?
A: For at varme cylindrene op
R: For at se, om der er væske i cylindrene, der kan give hydraulisk lås
A: For at tjekke kompressionstrykket
A: For at smøre foringerne
F: Sprøjter der væske ud af en hane, skal årsagen (fx utæt kølevand eller brændstofventil) findes før start.

Q: Hvorfor kompresseres starteluften i to trin med mellemkøling?
A: For at få tørrere luft
R: Det er tættere på isoterm kompression og bruger mindre energi
A: For at nå højere temperatur
A: Fordi én kompressor ikke kan nå 40 bar
F: Mellemkølingen sænker temperaturen, så andet trin skal komprimere en luft med højere massefylde.
