id: hydraulik
navn: Hydraulikventiler
ikon: hydraulik
intro: Trykbegrænsning og trykreduktion, bremseventilen, og 2-vejs, 3-vejs og variabel pumpe til mængderegulering, med fokus på energitab.
---
# Noter

> **Kilder**
> K18 · Hydraulik for driftsteknikere (LT) · Lektion 46–55

Hydraulikventiler deles i **trykbegrænsning**, **trykreduktion**, **bremseventiler** og **mængderegulering**. Alle virker principielt med en ventilkegle på et stempel, hvor olietrykket på den ene side holdes i balance af en justerbar fjeder.

## Trykventiler

| Ventil | Føler på | Ved stigende tryk | Placering |
|---|---|---|---|
| Trykbegrænsning (sikkerheds-, aflastnings-, chokventil) | Tilgangstryk | Åbner mere → mere flow til tank | Dræn fra hovedrør til tank, eller omløb fra tryk- til sugeside |
| Trykreduktion | Afgangstryk | Lukker mere → mindre flow | I hovedrøret (in line), med dræn ved fjederen |

Begge er **proportionalregulatorer**: trykket stiger lidt med flowet (en acceptabel afvigelse). Fjederspændingen bestemmer det tryk, der holdes.

## Bremseventil

- **Problem:** en byrde kan presse olien ud af cylinderen hurtigere, end pumpen kan fylde den anden side. Så bestemmer byrden sænkehastigheden ("man taber lasten"), og der kan opstå kavitation.
- **Løsning:** bremseventilen åbner først for drænet fra +-kammeret, når trykket i −-kammeret (via signalledning) overvinder fjederen. Løber byrden fra, falder trykket, og ventilen lukker.

## Mængderegulering

En hydraulikmotor eller -cylinder hastighedsreguleres kun via volumenstrømmen. Med en simpel drøvleventil bestemmer belastningen hastigheden: tungere byrde = højere tryk = mere dræn gennem trykbegrænsningen = lavere hastighed.

| | 2-vejs mængderegulering | 3-vejs mængderegulering | Pumpe med variabelt deplacement |
|---|---|---|---|
| Princip | Trykfaldet over drøvling A holdes konstant af ventil B i serie | Trykfaldet over A holdes konstant ved at dræne overskud fra pumpen til tank via B | Pumpen leverer præcis det nødvendige volumen |
| Pumpetryk | Altid max (trykbegrænsningens indstilling, fx 300 bar, selvom lasten kun kræver 100) | Kun det, belastningen kræver | Kun det, belastningen kræver |
| Energitab | Stort: i trykbegrænsningsventilen og i B | Mindre: tabet i drøvleventilen er væk, trykbegrænsningen er kun sikkerhed | Minimalt |
| Tilslutninger | 1 tilgang, 1 afgang | 1 tilgang, 1 afgang til cylinder, 1 til tank | – |
| Ulempe | Spild bliver til varme | – | Dyrere i anskaffelse og vedligehold |

**I 2-vejs:** stiger belastningen, stiger tilgangstrykket, og trykfaldet over A falder → B åbner mere → hastigheden fastholdes (næsten). Åbnes A mere, kræves større flow for samme trykfald → højere hastighed.

> **Energitab bliver til varme**
> Effekten afsat i en ventil er trykfald gange flow. Står pumpen på 300 bar, mens lasten kun kræver 100, går forskellen til varme i olien.

<div class="genkald" markdown="1">
### Test dig selv

1. Forklar forskellen på en trykbegrænsnings- og en trykreduktionsventil ud fra, hvad de føler på.
2. Hvorfor er 3-vejs mere energieffektiv end 2-vejs?
3. Tegn bremseventilens kredsløb.

<details markdown="1"><summary>Svar</summary>

1. Trykbegrænsning føler på tilgangstrykket og åbner til tank, når det stiger. Trykreduktion føler på afgangstrykket og lukker, når det stiger.
2. Pumpen arbejder kun mod det tryk, lasten kræver, i stedet for altid at stå på max. Overskuddet drænes ved lavt tryk.
3. Pumpe → retningsventil → +-kammer. −-kammer → bremseventil → tank, med en signalledning fra +-siden, der åbner bremseventilen mod fjederen.
</details>
</div>

# Formler

```
P = Δp · Q          effekt afsat i en ventil (bliver til varme)
                    Δp i Pa, Q i m³/s → P i W
                    1 bar = 10⁵ Pa,  1 l/min = 1/60.000 m³/s
```

## Eksempel

En 2-vejs mængderegulering: pumpen står på 300 bar, lasten kræver 100 bar, og flowet er 40 l/min. Hvor stor effekt går tabt i ventilerne?

<details markdown="1"><summary>Vis udregning</summary>

Δp = 200 bar = 2 · 10⁷ Pa. Q = 40/60.000 = 6,67 · 10⁻⁴ m³/s.
P = 2 · 10⁷ · 6,67 · 10⁻⁴ = **13.300 W ≈ 13,3 kW**, som bliver til varme i olien.
</details>

# Quiz

Q: Hvad føler en trykbegrænsningsventil på?
R: Tilgangstrykket
A: Afgangstrykket
A: Flowet
A: Temperaturen
F: Den åbner mere til tank, når tilgangstrykket stiger.

Q: Hvad gør en trykreduktionsventil, når afgangstrykket stiger?
A: Åbner mere
R: Lukker mere
A: Dræner til tank
A: Intet
F: Den sidder i hovedrøret og føler på afgangstrykket.

Q: Hvad er problemet, som bremseventilen løser?
A: For højt pumpetryk
R: At en byrde presser olien ud hurtigere, end pumpen kan fylde, så man "taber lasten"
A: Kavitation i pumpen ved start
A: For lav hastighed ved løft
F: Bremseventilen åbner kun for drænet, når der er tryk på den anden side fra pumpen.

Q: Hvilken mængderegulering har det største energitab?
R: 2-vejs
A: 3-vejs
A: Pumpe med variabelt deplacement
A: De er ens
F: I 2-vejs står pumpen altid på trykbegrænsningens indstilling, og overskuddet går til varme.

Q: Δp = 200 bar og Q = 40 l/min. Hvad er effekttabet i kW? (1 decimal)
N: 13,3 ; 0,1 ; kW
L: P = Δp · Q = 2 · 10⁷ Pa · (40/60.000) m³/s = 13.333 W ≈ 13,3 kW.
F: Pas på enhederne: bar → Pa og l/min → m³/s.

Q: Hvordan reguleres hastigheden af en hydraulikcylinder?
A: Med trykket
R: Med volumenstrømmen
A: Med oliens temperatur
A: Med fjederspændingen
F: Trykket bestemmer kraften. Flowet bestemmer hastigheden.

Q: Hvad er ulempen ved en pumpe med variabelt deplacement?
A: Stort energitab
R: Dyrere i anskaffelse og vedligehold
A: Kan ikke holde hastigheden
A: Kræver tre tilslutninger
F: Den er til gengæld den mest energieffektive.
