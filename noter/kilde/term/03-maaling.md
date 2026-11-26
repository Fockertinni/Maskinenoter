id: maaling
navn: Måling og måleusikkerhed
ikon: maal
intro: Hvad en måling er, måleresultat og usikkerhed, systematiske og tilfældige fejl, middelværdi, spredning, standardusikkerhed og kalibrering.
---
# Noter

> **Kilder**
> Klasseopgaven henviser til metrologi.dk, "A1 – Introduktion til målinger" kap. 1–8. Selve PDF'en var ikke med i materialet, så noterne bygger på standardteori (GUM-metoden), som A1 følger.

En måling er en sammenligning med en kendt reference. Et måleresultat er først komplet, når der står en usikkerhed på: "80,1 °C ± 0,3 °C" siger, hvor sikkert tallet er, "80,1 °C" alene gør ikke.

## Begreber

| Begreb | Betydning |
|---|---|
| Målestørrelse | Det, der måles, fx temperaturen i kølevandet ud af motoren |
| Måleværdi | Det tal, instrumentet viser |
| Måleusikkerhed | Et interval, som den sande værdi med en given sandsynlighed ligger i |
| Nøjagtighed | Hvor tæt måleværdien er på den sande værdi |
| Præcision (gentagelighed) | Hvor tæt gentagne målinger ligger på hinanden |
| Opløsning | Den mindste ændring, instrumentet kan vise, fx 0,1 °C |
| Kalibrering | Sammenligning med en bedre reference, som giver korrektion og usikkerhed |
| Sporbarhed | En ubrudt kæde af kalibreringer tilbage til den nationale standard |

> **Nøjagtighed og præcision er ikke det samme**
> Tænk på en skydeskive. Præcis, men unøjagtig: alle skud sidder samlet, men ved siden af centrum (systematisk fejl). Nøjagtig, men upræcis: skuddene spredt omkring centrum (tilfældig fejl).

## Fejltyper

- **Systematiske fejl** giver samme afvigelse hver gang: forkert kalibreret føler, ledningsmodstand på en 2-leder Pt100, termometer der ikke er nedsænket nok. De fjernes ikke ved at måle flere gange, men ved kalibrering og korrektion.
- **Tilfældige fejl** svinger fra måling til måling: støj, aflæsning, små temperaturudsving. De bliver mindre i middelværdien, jo flere målinger man tager.
- **Grove fejl** er fejl i udførelsen: forkert aflæst, forkert enhed, forkert kanal. De findes ved at tænke over, om resultatet er rimeligt.

## Middelværdi, spredning og usikkerhed

Ved n gentagne målinger:

```
Middelværdi:         x̄ = Σx / n
Spredning:           s = √( Σ(x − x̄)² / (n − 1) )
Standardusikkerhed:  u = s / √n           (type A)
Udvidet usikkerhed:  U = k · u            k = 2 giver ca. 95 %
```

Usikkerheden kan også komme fra andet end gentagne målinger (type B): kalibreringsbeviset, instrumentets opløsning eller databladets tolerance. Uafhængige bidrag lægges sammen kvadratisk:

```
u_c = √(u₁² + u₂² + u₃² + …)
```

<div class="m" data-m="usikkerhed"></div>

**Forudsig først:** hvad sker der med standardusikkerheden, hvis du firedobler antallet af målinger?

<details markdown="1"><summary>Vis svar</summary>

Den halveres, fordi u = s / √n og √4 = 2. Spredningen s på den enkelte måling ændrer sig ikke.
</details>

### Gennemregnet eksempel

Fem aflæsninger af kølevandstemperaturen: 80,2 · 79,8 · 80,5 · 80,1 · 79,9 °C. Termometrets kalibreringsbevis angiver en standardusikkerhed på 0,3 °C. Find resultatet med udvidet usikkerhed. Regn først.

<details markdown="1"><summary>Vis udregning</summary>

| Trin | Udregning | Resultat |
|---|---|---|
| Middelværdi | (80,2 + 79,8 + 80,5 + 80,1 + 79,9) / 5 | 80,10 °C |
| Afvigelser² | 0,01 + 0,09 + 0,16 + 0 + 0,04 | 0,30 |
| Spredning s | √(0,30 / 4) | 0,27 °C |
| Type A, u_A | 0,27 / √5 | 0,12 °C |
| Type B, u_B | fra kalibreringsbeviset | 0,30 °C |
| Samlet u_c | √(0,12² + 0,30²) | 0,32 °C |
| Udvidet U | 2 · 0,32 | 0,65 °C |

Resultat: **80,1 °C ± 0,6 °C (k = 2).** Læg mærke til, at kalibreringen dominerer. Flere aflæsninger hjælper næsten ikke.
</details>

> **Usikkert**
> Ved få målinger (n under ca. 10) bør man egentlig bruge en t-faktor i stedet for k = 2. Det står sandsynligvis i A1 kap. 6–8, som ikke var med.

## Angivelse af resultatet

- Usikkerheden afrundes til 1–2 betydende cifre, og måleværdien afrundes til samme decimal: 80,1 ± 0,6 °C, ikke 80,10 ± 0,646 °C.
- Skriv dækningsfaktoren: (k = 2) eller (ca. 95 %).

# Formler

### Statistik på en måleserie
```
x̄ = Σx / n
s = √( Σ(x − x̄)² / (n − 1) )
u_A = s / √n
```

### Samlet og udvidet usikkerhed
```
u_c = √(u₁² + u₂² + …)       (uafhængige bidrag)
U = k · u_c                  k = 2 ≈ 95 %
Resultat: x̄ ± U (k = 2)
```

### Opløsning som usikkerhedsbidrag (rektangulær fordeling)
```
u = (opløsning / 2) / √3
```

# Quiz

Q: Fire målinger: 20, 22, 21 og 21 °C. Hvad er middelværdien? (°C)
N: 21 ; 0,01 ; °C
L: (20 + 22 + 21 + 21) / 4 = 84 / 4 = 21 °C.
F: Middelværdien er summen divideret med antallet.

Q: En termometer viser altid 1,5 °C for meget. Hvilken fejltype er det?
A: Tilfældig fejl
R: Systematisk fejl
A: Grov fejl
A: Opløsningsfejl
F: Den er ens hver gang, så den forsvinder ikke ved at måle flere gange. Den fjernes ved kalibrering.

Q: Spredningen på den enkelte måling er 0,8 °C, og du tager 16 målinger. Hvad er standardusikkerheden på middelværdien? (°C)
N: 0,2 ; 0,01 ; °C
L: u = s / √n = 0,8 / √16 = 0,8 / 4 = 0,2 °C.
F: Flere målinger giver en sikrere middelværdi.

Q: To uafhængige usikkerhedsbidrag er 0,3 °C og 0,4 °C. Hvad er den samlede standardusikkerhed? (°C)
N: 0,5 ; 0,01 ; °C
L: u_c = √(0,3² + 0,4²) = √(0,09 + 0,16) = √0,25 = 0,5 °C.
F: Bidrag lægges sammen kvadratisk, ikke direkte (0,7 ville være forkert).

Q: Hvad betyder det, at et resultat er "80,1 °C ± 0,6 °C (k = 2)"?
A: Temperaturen er præcis 80,1 °C
A: Instrumentet viser med 0,6 °C opløsning
R: Den sande værdi ligger med ca. 95 % sandsynlighed mellem 79,5 og 80,7 °C
A: Temperaturen svinger 0,6 °C op og ned
F: Udvidet usikkerhed med k = 2 svarer til ca. 95 % dækning.

Q: Hvad er sporbarhed?
A: At man kan spore, hvem der målte
R: En ubrudt kæde af kalibreringer tilbage til en national eller international standard
A: At målingen gemmes i en log
A: At instrumentet har et serienummer
F: Sporbarhed er det, der gør, at en måling i Danmark kan sammenlignes med en i Tyskland.

Q: Målinger ligger tæt samlet, men alle 2 °C ved siden af den sande værdi. Hvordan beskrives det?
R: Præcis, men ikke nøjagtig
A: Nøjagtig, men ikke præcis
A: Både præcis og nøjagtig
A: Hverken præcis eller nøjagtig
F: Lille spredning (præcis), men en systematisk fejl (ikke nøjagtig).
