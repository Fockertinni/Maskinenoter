id: investering
navn: Investering og TCO
ikon: investering
intro: Kan en investering betale sig, og hvad sker der, hvis forudsætningerne ændrer sig? Kapitalværdi, intern rente, annuitet, payback, inflation, levetid og Total Cost of Ownership.
---
# Noter

> **Pensum**
> Lærebog kap. 9, Hansen m.fl. kap. 4 (inflation), FORCE-artiklen om TCO · Lektion 10–13 · Eksamensvægt: **meget høj**

En investering er en udbetaling nu, der giver et afkast (merindtjening eller besparelse) **senere**. For en maskinmester handler det om nyt udstyr, vedligehold, energioptimering og energirenovering.

## Begreber

- Investeringssum (I₀), nettoindbetalinger (afkast pr. år), levetid (n), scrapværdi (S) og kalkulationsrente (r).
- **OPEX** (Operating Expense): drift, energi og vedligehold, fx løn, materialer og fremmede ydelser.
- **CAPEX** (Capital Expense): investeringer, der afskrives. Det gælder nyinvesteringer, modifikationer, der ændrer funktionen, og ekstraordinært vedligehold.

## Hvad skal med i betalingsrækken?

| Med | Ikke med |
|---|---|
| Alle ind- og udbetalinger, der *skyldes* investeringen | **Afskrivninger** (kun en eventuel skatteeffekt) |
| Faste omkostninger, der *ændres*, med deres ændring | Faste omkostninger, der ikke påvirkes |
| Offeromkostninger | **Sunk costs** |
| Scrapværdi (positiv eller negativ) i sidste år | |
| Arbejdskapital (fx lagerbinding): ud i starten, ind til sidst | |
| Installation og indkøring, lagt til I₀ i år 0 | |

## Kalkulationsrenten

Det minimumsafkast, virksomheden kræver: alternativrente, markedsrente eller lånerente plus et risikotillæg (afhænger af investeringshorisonten) giver den nominelle kalkulationsrente. Inflation skal også overvejes.

## Metoder

| Metode | Lønsom når | Excel |
|---|---|---|
| Kapitalværdi (NPV) | KV ≥ 0 | `NUTIDSVÆRDI` + I₀ |
| Intern rente (IRR) | Intern rente > kalkulationsrente | `IA` |
| Annuitet | Årlig nettoindbetaling ≥ kapitaltjeneste | `YDELSE` |
| Statisk payback | Kort tilbagebetalingstid (ingen diskontering) | Akkumulér |
| Dynamisk payback | Tilbagebetalt inden levetiden (diskonteret) | Akkumulér nutidsværdier |

- Positiv KV ⇔ intern rente > kalkulationsrente. Det kan bruges til begrundede svar uden yderligere beregning.
- Payback siger noget om **risiko og likviditet**, men ignorerer det, der sker efter tilbagebetalingen.

## Følsomhed og kritisk værdi

- **Følsomhedsanalyse:** ændr én forudsætning ad gangen (investeringssum, indtægter, omkostninger, levetid, scrapværdi, rente), mens resten holdes konstant. Er investeringen stadig lønsom?
- **Kritisk værdi ("what-if"):** den værdi af en forudsætning, der giver KV = 0. I Excel: *Data → What-if-analyse → Målsøgning*.

## Inflation

- *Løbende priser* (beløbene vokser med inflationen) → **nominel** kalkulationsrente.
- *Faste priser* (dagens prisniveau) → **real** kalkulationsrente.
- Gøres det rigtigt, giver begge metoder **samme kapitalværdi**. Realinvesteringer opgøres ofte i faste priser.

## Teknisk og økonomisk levetid

- **Teknisk levetid:** så længe anlægget fysisk kan køre.
- **Økonomisk levetid:** så længe det er fordelagtigt at bruge det. Den er ofte **kortere** på grund af stigende vedligehold, faldende effektivitet, offeromkostninger, et vigende marked, forældelse (PLC-kurven) og nyt, bedre udstyr. Ved kædeinvesteringer vælges den levetid, der giver de laveste samlede omkostninger for hele kæden.

## TCO: Total Cost of Ownership (LCC)

- Alle omkostninger i hele levetiden: anskaffelse, installation, energi, drift, vedligehold, nedetid og bortskaffelse eller scrap.
- **TCO-isbjerget:** ca. 20 % er anskaffelse, og ca. 80 % er afledte følgeomkostninger. For en almindelig elmotor er anskaffelsesprisen kun ca. 1 % af levetidsomkostningerne.
- Ved sammenligning af alternativer vælges den laveste nutidsværdi af omkostningerne.

## Ikke-monetære kriterier og beslutningsadfærd

- Arbejdsmiljø, sikkerhed, ekstern miljøbelastning, beskæftigelse, CSR, grøn profil og klima. Omstillingen til en lavemissionsøkonomi kan gøre investeringer med negativ KV nødvendige.
- De bløde værdier kan prissættes ("vi vil betale 100.000 kr. for bedre arbejdsmiljø") og lægges til KV.
- Beslutninger er sjældent helt rationelle: magt og forhandling mellem interessenter, manglende information, bias, oversimplificering og for megen optimisme. Alternativer søges *sekventielt* og *lokalt*.

<div class="genkald" markdown="1">
### Test dig selv

1. KV = 20.000 kr., intern rente = 12 %, dynamisk payback = 3,5 år, r = 10 %, levetid 5 år. Forklar hver af de tre værdier.
2. Tegn et "sildeben" (tidslinje) for en robot til 5 mio. kr., og skriv alle relevante ind- og udbetalinger på (uden tal).
3. Hvorfor indgår afskrivninger ikke i en investeringskalkule?
4. Hvornår bruger man den reale, og hvornår den nominelle kalkulationsrente?

<details markdown="1"><summary>Svar</summary>

1. KV: investeringen giver 20.000 kr. mere i nutidskroner end kravet på 10 %. Intern rente: den forrenter sig med 12 %, som er over kravet. Payback: pengene er tjent hjem (med rente) efter 3,5 år, altså før levetiden på 5 år.
2. År 0: køb, installation, indkøring, evt. arbejdskapital. År 1–5: besparelser (løn, energi, kassation), ekstra vedligehold, service, energi til robotten. Sidste år: scrapværdi og frigivet arbejdskapital.
3. Afskrivningen er ikke en betaling. Selve købet står allerede i år 0, så afskrivningen ville tælle investeringen med to gange.
4. Real rente til faste priser (dagens prisniveau). Nominel rente til løbende priser, hvor beløbene vokser med inflationen.
</details>
</div>

# Formler

```
Nutidsværdi:        PV = B_t / (1 + r)^t
Kapitalværdi:       KV = –I₀ + Σ B_t/(1+r)^t + S/(1+r)^n

Nutidsværdi af fast årlig betaling Y:
                    PV = Y · (1 – (1+r)^–n) / r
```

```
Annuitetsfaktor:    α(n,r) = r / (1 – (1+r)^–n)
Kapitaltjeneste:    KT = I₀ · α(n,r) – S · r / ((1+r)^n – 1)
Annuitetsmetoden:   årlig nettoindbetaling – KT ≥ 0  → lønsom
```

```
Inflation:   (1 + i_n) = (1 + i_r) · (1 + q)
             i_r = (i_n – q) / (1 + q)
             i_n = nominel rente, i_r = real rente, q = inflation
Løbende pris i år t:   B_t(løbende) = B_t(fast) · (1 + q)^t
```

## Eksempel 1: kapitalværdi (opgave 9.4, ZAKKEN, r = 10 %)

Maskine 450.000 + installation 30.000 + indkøring 20.000. Levetid 5 år, scrapværdi 50.000 kr. Nettobesparelser år 1–5: 117, 181, 149, 117, 85 (1.000 kr.).

<details markdown="1"><summary>Vis udregning</summary>

I₀ = **500.000 kr.** Nettobetalinger: −500, 117, 181, 149, 117, 135 (85 + scrap 50).
KV = −500 + 117/1,1 + 181/1,1² + 149/1,1³ + 117/1,1⁴ + 135/1,1⁵ ≈ **+32.000 kr. → lønsom.**
Ikke-økonomiske forhold: arbejdsmiljø, miljøbelastning og beskæftigelse.
</details>

## Eksempel 2: energiinvestering (E2019 opg. 3, varmeveksler)

I₀ = 150.000 + 55.000 = 205.000 kr., n = 15 år, S = 5.000 kr., r = 10 %. Besparelse 7.500 Nm³ gas · 5,50 kr. pr. år.

<details markdown="1"><summary>Vis udregning</summary>

- Besparelse: 7.500 · 5,50 = 41.250 kr./år.
- KV ≈ **+110.000 kr.**, intern rente ≈ **18,6 %**, dynamisk payback lidt over 7 år.
- Annuitet: KT = 205.000 · 0,1315 − 5.000 · 0,0315 ≈ 26.795. 41.250 − 26.795 = **+14.455 kr./år → lønsom.**
</details>

## Eksempel 3: kedeludskiftning med bløde værdier (E2025 opg. 3)

Gaskedel: 140.000 + 80.000 = 220.000 kr./år i drift. Elkedel: 120.000 + 10.000 = 130.000 kr./år. I₀ = 300.000 + 150.000 = 450.000 kr., n = 6, r = 12 %, S = 0. Arbejdsmiljø og sikkerhed værdisættes til 100.000 kr.

<details markdown="1"><summary>Vis udregning</summary>

Besparelse 90.000 kr./år. Annuitetsfaktor for nutidsværdi: (1 − 1,12⁻⁶)/0,12 = 4,1114.
KV = −450.000 + 90.000 · 4,1114 ≈ **−79.970 kr.** Rent økonomisk er den ikke lønsom.
Med de bløde værdier: −79.970 + 100.000 ≈ **+20.000 kr.** Investeringen kan derfor anbefales.
</details>

## Eksempel 4: TCO i faste og løbende priser (E2025 opg. 4, metoden)

Nominel rente 4 % og inflation 2 %.

<details markdown="1"><summary>Vis metoden</summary>

- Real rente = (0,04 − 0,02)/1,02 ≈ **1,96 %**.
- *Faste priser:* alle årlige omkostninger (brændstof eller el = km · forbrug · pris, forsikring, ejerafgift, vedligehold) står i dagens priser og diskonteres med 1,96 %. Nypris i år 0 og brugtpris (indbetaling) i år 10.
- *Løbende priser:* hver årlig betaling ganges med 1,02^t og diskonteres med 4 %. Resultatet bliver det samme.
- Drift: benzinbil 20.000 km / 17 km/l · 14 kr. ≈ 16.471 kr./år. Elbil 20.000 · 0,145 kWh · 2 kr. = 5.800 kr./år.
</details>

# Quiz

Q: Hvilken post skal **ikke** med i en investerings betalingsrække?
A: Scrapværdien
A: Installation og indkøring
R: Afskrivninger
A: Ekstra lagerbinding (arbejdskapital)
F: Afskrivninger er ikke betalinger. Købet står allerede i år 0.

Q: Kapitalværdien er positiv ved en kalkulationsrente på 10 %. Hvad ved du så om den interne rente?
A: Den er under 10 %
R: Den er over 10 %
A: Den er præcis 10 %
A: Intet
F: Den interne rente er den rente, hvor KV = 0. Er KV > 0 ved 10 %, skal renten op over 10 %, før KV bliver 0.

Q: Nominel rente 4 %, inflation 2 %. Hvad er den reale rente i %? (2 decimaler)
N: 1,96 ; 0,01 ; %
L: i_r = (0,04 − 0,02)/1,02 = 0,0196 = 1,96 %.
F: Tommelfingerreglen 4 − 2 = 2 % er tæt på, men den præcise formel dividerer med (1 + q).

Q: En besparelse på 90.000 kr./år i 6 år ved r = 12 % (faktor 4,1114). I₀ = 450.000 kr. Hvad er KV? (hele kr.)
N: -79973 ; 30 ; kr.
L: KV = −450.000 + 90.000 · 4,11141 = −450.000 + 370.027 = −79.973 kr.
F: Negativ KV: ikke lønsom på de økonomiske tal alene. Bløde værdier kan vende beslutningen.

Q: Hvilken kalkulationsrente bruger du, når alle beløb står i dagens priser?
R: Den reale
A: Den nominelle
A: Den interne rente
A: Lånerenten
F: Faste priser → real rente. Løbende priser → nominel rente. Gøres det rigtigt, bliver KV ens.

Q: En varmeveksler sparer 7.500 Nm³ gas om året til 5,50 kr./Nm³. Hvad er den årlige besparelse?
N: 41250 ; 1 ; kr.
L: 7.500 · 5,50 = 41.250 kr./år.
F: Den årlige besparelse er nettoindbetalingen i betalingsrækken.

Q: Hvad siger payback-metoden primært noget om?
A: Lønsomheden over hele levetiden
R: Risiko og likviditet
A: Den interne rente
A: Den økonomiske levetid
F: Payback ignorerer alt efter tilbagebetalingen og siger derfor ikke noget om den samlede lønsomhed.

Q: Hvorfor er den økonomiske levetid ofte kortere end den tekniske?
A: Fordi afskrivningerne slutter
R: Fordi stigende vedligehold, faldende effektivitet og nyt, bedre udstyr gør det dyrere at fortsætte end at udskifte
A: Fordi scrapværdien bliver negativ
A: Fordi kalkulationsrenten stiger
F: Anlægget kan stadig køre, men det kan betale sig at udskifte det.

Q: Hvad viser TCO-isbjerget?
A: At anskaffelsesprisen er ca. 80 % af de samlede omkostninger
R: At anskaffelsen kun er ca. 20 %, og følgeomkostningerne ca. 80 %
A: At energi er den mindste post
A: At scrapværdien opvejer anskaffelsen
F: For en elmotor er købsprisen kun ca. 1 % af levetidsomkostningerne. Energien dominerer.
