id: finansiering
navn: Finansiering
ikon: finansiering
intro: Hvordan skaffes pengene til en investering, og hvad koster det reelt? Egen- og fremmedfinansiering, låntyper, hovedstol og effektiv rente.
---
# Noter

> **Pensum**
> Lærebog kap. 10 · Eksamensvægt: mellem

Lån sammenlignes på **effektiv rente** (hvad koster det) og på **ydelsesprofil** (hvad betyder det for likviditeten).

## Finansieringskilder

- **Egenfinansiering:** egenkapital, opsparet overskud, nye ejerindskud (aktieemission).
- **Fremmedfinansiering:** banklån, realkredit, kassekredit, leverandørkredit og leasing.

## Kurs, hovedstol og rente

- Lån stiftes ofte til en kurs under 100. Hovedstolen bliver derfor større end det beløb, man får udbetalt (provenuet). Stiftelsesomkostninger og tinglysning lægges oveni.
- **Nominel rente** er renten af hovedstolen.
- **Effektiv rente** er den reelle årlige omkostning, når kurstab og gebyrer er medregnet. Ved kurs under 100 er den højere end den nominelle, fordi man betaler rente og afdrag af mere, end man fik udbetalt.

## Låntyper

| Låntype | Afdrag | Ydelse | Kendetegn |
|---|---|---|---|
| **Serielån** | Konstant (H/n) | Faldende | Renten falder med restgælden. Ofte billigst i effektiv rente |
| **Annuitetslån** | Stigende | **Konstant** | Mest rente i starten. Forudsigelig likviditet |
| **Stående lån** | Intet før udløb | Kun renter | Hele hovedstolen betales ved udløb. Bedst for likviditeten undervejs, men ofte dyrest |

> **Valget**
> Ud fra en *omkostningsbetragtning* vælges den laveste effektive rente. Ud fra en *likviditetsbetragtning* vælges ofte det stående lån. Til en energiinvestering med jævne årlige besparelser passer et annuitetslån godt, fordi den faste ydelse kan matche besparelsen.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor er den effektive rente højere end den nominelle, når kursen er under 100?
2. Hvilken låntype vil du anbefale til en energiinvestering med jævne årlige besparelser, og hvorfor?
3. Hvilket lån har den højeste ydelse i år 1: serie- eller annuitetslån med samme rente og løbetid?

<details markdown="1"><summary>Svar</summary>

1. Man forrenter og tilbagebetaler hovedstolen, men har kun fået provenuet udbetalt. Kurstabet og gebyrerne er en ekstra omkostning.
2. Annuitetslån: den faste ydelse kan betales af den faste besparelse, så likviditeten bliver forudsigelig. Serielånet kan være billigere, men har høj ydelse i starten.
3. Serielånet. Det har samme rente i år 1 (af hele hovedstolen), men et større afdrag.
</details>
</div>

# Formler

```
Hovedstol      H = (Provenu + Stiftelses-/tinglysningsomk.) / (Kurs/100)

Serielån:      afdrag = H/n,   ydelse_t = H/n + r · restgæld_t
Annuitetslån:  ydelse = H · r / (1 – (1+r)^–n)
Stående lån:   ydelse = H · r,  i sidste år + H

Effektiv rente: betalingsrække med +Provenu i år 0 og –ydelser år 1..n
                → IA(række)   (eller RENTE(n; –ydelse; provenu) for annuitet)
```

## Eksempel (F2019 opg. 6, SAILOR)

Virksomheden skal have 5 mio. kr. udbetalt. Stiftelsesomkostninger 25.000 kr. Løbetid 7 år. Tre tilbud:

| Lån | Rente | Kurs |
|---|---|---|
| Serielån | 5,0 % | 97,0 |
| Annuitetslån | 5,5 % | 97,5 |
| Stående lån | 5,5 % | 96,5 |

Beregn hovedstolen for hvert lån, og find den effektive rente med `IA`.

<details markdown="1"><summary>Vis udregning</summary>

| Lån | Hovedstol | Effektiv rente |
|---|---|---|
| Serielån | 5.025.000 / 0,970 = 5.180.412 | **6,0 %** |
| Annuitetslån | 5.025.000 / 0,975 = 5.153.846 | 6,4 % |
| Stående lån | 5.025.000 / 0,965 = 5.207.254 | 6,2 % |

Omkostningsmæssigt er **serielånet** billigst. Likviditetsmæssigt er det **stående lån** bedst.
</details>

# Quiz

Q: Du skal have 5.000.000 kr. udbetalt, stiftelsesomkostningerne er 25.000 kr., og kursen er 97. Hvad bliver hovedstolen? (hele kr.)
N: 5180412 ; 2 ; kr.
L: H = (5.000.000 + 25.000) / 0,97 = 5.180.412 kr.
F: Kurstabet og omkostningerne gør, at du skylder mere, end du får.

Q: Hvilken låntype har konstant ydelse?
A: Serielån
R: Annuitetslån
A: Stående lån
A: Kassekredit
F: Annuitetslånets ydelse er fast. Afdraget stiger, mens renten falder.

Q: Hvilken låntype er typisk bedst for likviditeten i lånets løbetid?
A: Serielån
A: Annuitetslån
R: Stående lån
A: De er ens
F: Der betales kun renter undervejs, men hele hovedstolen skal betales ved udløb, og lånet er ofte dyrest.

Q: Et annuitetslån har hovedstol 1.000.000 kr., rente 5 % og løbetid 10 år. Hvad er den årlige ydelse? (hele kr.)
N: 129505 ; 2 ; kr.
L: Ydelse = 1.000.000 · 0,05 / (1 − 1,05⁻¹⁰) = 1.000.000 · 0,129505 = 129.505 kr.
F: I Excel: `=YDELSE(5%; 10; -1000000)`.

Q: Et serielån på 700.000 kr. over 7 år med 5 % rente. Hvad er ydelsen i år 1?
N: 135000 ; 1 ; kr.
L: Afdrag 700.000/7 = 100.000. Rente 5 % af 700.000 = 35.000. Ydelse 135.000 kr.
F: I år 2 er renten kun 5 % af 600.000, så ydelsen falder til 130.000.

Q: Hvad er den effektive rente?
A: Den rente, der står i låneaftalen
R: Den reelle årlige omkostning, når kurstab og gebyrer er medregnet
A: Renten efter skat
A: Renten fratrukket inflation
F: Den findes som den interne rente af lånets betalingsrække: +provenu i år 0 og −ydelser derefter.
