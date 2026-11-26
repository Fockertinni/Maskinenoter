id: regulering
navn: Regulering og omdrejningsregulator
ikon: regulering
intro: P- og PI-regulatoren forklaret med vandtårnet og den hydrauliske omdrejningsregulator, varig afvigelse og hvorfor parallelkoblede generatorer skal have speeddroop.
---
# Noter

> **Kilder**
> K16 (Woodward-regulatoren kun som figurer) · Lektion 56

En regulator sammenligner **setpunkt** (ønskeværdi) med **øjebliksværdi** (indgangssignal) og giver et udgangssignal, der påvirker processen. P-regulatoren efterlader en varig afvigelse. PI-regulatoren fjerner den.

Eksempler: radiatortermostaten (holder 21 °C) og en generators drivmotor, der øger brændstoffet, når belastningen sænker omdrejningstal og frekvens.

## P-regulator (proportional)

**Vandtårnet:** en svømmer (W) styrer via en vægtstang X–Y–Z tilgangsventilen. Stiger forbruget, falder vandstanden, og ventilen åbner mere, indtil tilgang = afgang. Men det sker på et **lavere niveau**.

- **Varig afvigelse:** P-regulatoren kan ikke holde værdien 100 % konstant, kun inden for et interval. Ventilen kan kun stå mere åben, hvis vandstanden står lavere.
- **Forstærkning** = ZY/YX. Flyttes Y mod højre, bliver afvigelsen mindre, men risikoen for ustabil regulering (svingninger) større.
- Flyttes Y lodret, ændres setpunktet.
- Det er den mest anvendte regulatortype.

**Hydraulisk omdrejningsregulator:** svingklodser presser med centrifugalkraften mod en fjeder (11). Falder omdrejningstallet (mere last), presser fjederen punkt 1 ned → glideren (13) går ned → trykolie løfter stemplet i cylinder (6) → mere brændstof → punkt 3 op → glideren tilbage i midtstilling. Resultat: lidt lavere omdrejningstal end før (varig afvigelse).

## PI-regulator

I-delen bliver ved med at regulere, til afvigelsen er væk. Den kan ikke bruges alene, da den pendler.

**Opbygning:** en oliefyldt cylinder (8) på stempelstangen, en fjeder (10) og en drøvleventil (9). Efter P-reaktionen presser fjederen olien langsomt gennem ventil 9, så punkt 3 sænkes gradvist → mere brændstof → omdrejningstallet stiger, indtil vægtstangen igen er vandret. **Ingen varig afvigelse.** Fjederspændingen i (11) er setpunktet.

## Statik og speeddroop

| Drift | Indstilling | Hvorfor |
|---|---|---|
| Én generator alene | Isokron (PI uden droop): konstant frekvens ved alle laster | Ingen lastdeling nødvendig |
| Flere generatorer parallelt | Speeddroop: højere last → lavere setpunkt | Til en bestemt frekvens hører en bestemt last. Uden droop fordeles lasten tilfældigt, og en generator kan blive aflastet og udkoble på retureffekt |

Statikken viser sammenhængen mellem belastning og omdrejningstal. Frekvensen finjusteres manuelt.

> **Kobling til EL2**
> Det samme ses i laboratorieøvelsen om synkronisering og paralleldrift: frekvensstatikken bestemmer, hvordan den aktive effekt fordeler sig, når en generator kobles fra.

<div class="genkald" markdown="1">
### Test dig selv

1. Forklar varig afvigelse med vandtårnet.
2. Hvad sker der ved for høj forstærkning?
3. Hvorfor skal parallelkoblede generatorer have speeddroop?
4. Hvorfor kan en I-regulator ikke bruges alene?

<details markdown="1"><summary>Svar</summary>

1. Ventilen åbnes af, at svømmeren synker. For at holde ventilen mere åben (større forbrug) skal vandstanden blive stående lavere.
2. Regulatoren overreagerer, og værdien svinger omkring setpunktet (ustabil regulering).
3. Med droop hører en bestemt last til en bestemt frekvens, så lasten fordeles fast mellem maskinerne. Uden droop kan én maskine tage al lasten, og en anden kan gå i retureffekt.
4. Den reagerer langsomt og bliver ved, til afvigelsen er væk, så den skyder over og pendler.
</details>
</div>

# Quiz

Q: Hvad er den varige afvigelse i en P-regulator?
A: En fejl i måleudstyret
R: At værdien efter en lastændring stabiliserer sig et stykke fra setpunktet
A: At regulatoren svinger
A: At setpunktet ændrer sig over tid
F: P-regulatoren har brug for en afvigelse for at holde ventilen i en ny stilling.

Q: Hvad sker der, når forstærkningen øges (Y flyttes mod højre i vandtårnet)?
R: Mindre varig afvigelse, men større risiko for svingninger
A: Større varig afvigelse og mere stabil regulering
A: Setpunktet ændres
A: Regulatoren bliver til en PI-regulator
F: Afvejningen mellem præcision og stabilitet er kernen i P-regulering.

Q: Hvad fjerner I-delen i en PI-regulator?
A: Svingningerne
R: Den varige afvigelse
A: Behovet for et setpunkt
A: Forsinkelsen
F: I-delen bliver ved med at ændre udgangen, så længe der er en afvigelse.

Q: Hvordan skal en generator, der kører alene på nettet, indstilles?
R: Isokron (uden droop), så frekvensen er konstant ved alle laster
A: Med stort speeddroop
A: Som ren I-regulator
A: Med manuel brændstofstyring
F: Der er ingen andre at dele lasten med, så frekvensen skal bare holdes.

Q: Hvad kan ske, hvis to parallelkoblede generatorer begge kører isokront?
A: Intet, de deler lasten ligeligt
R: Lasten fordeles tilfældigt, og en generator kan blive aflastet og udkoble på retureffekt
A: Frekvensen stiger
A: Spændingen falder
F: Speeddroop giver hver maskine en fast sammenhæng mellem last og frekvens.

Q: I den hydrauliske omdrejningsregulator, hvad sker der, når lasten stiger?
A: Svingklodserne går ud, og brændstoffet mindskes
R: Omdrejningstallet falder, svingklodserne går ind, glideren går ned, og stemplet giver mere brændstof
A: Fjederen slækkes, og setpunktet stiger
A: Drøvleventilen lukker
F: Med kun P-del ender omdrejningstallet lidt lavere end før.
