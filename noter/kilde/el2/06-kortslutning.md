id: kortslutning
navn: Kortslutning og koblingsciffer
ikon: kortslutning
intro: Koblingsbetegnelser som Dyn11, urskive-metoden og cirkelslag, betingelser for paralleldrift, inrush og kortslutningsstrømmenes størrelse og fordeling bag en Dyn-transformer.
---
# Noter

> **Kilder**
> UV 21–24 · Bog 3 kap. 2.5–2.6 · UV6A · UV6C · UV12 · Lab 6

Koblingsbetegnelsen (fx Dyn11) fortæller, hvordan viklingerne er forbundet, og hvor mange 30°-trin sekundærspændingen ligger efter primærspændingen. **Den bestemmer, om to transformere kan parallelkobles, og hvordan en kortslutningsstrøm fordeler sig.**

## Koblinger og betegnelse

- Y / y = stjerne, D / d = trekant, Z / z = zigzag. Stort bogstav er højspændingssiden, lille bogstav lavspændingssiden. N / n = udført stjernepunkt.
- **Koblingsciffer = faseforskydning bagud / 30°.** Dyn5 = 150° bagud, Dyn11 = 330° bagud (= 30° foran), Yy0 = i fase.
- I Danmark bruges Dyn5 eller Dyn11 til distribution (små transformere evt. Yzn5/Yzn11).

> **Hvorfor ikke Yy til distribution?**
> Ved usymmetrisk last (fase-nul) kan primærstrømmen i den belastede fase kun vende tilbage gennem de to andre primærviklinger. Feltet i de ubelastede ben udlignes ikke, og stjernepunktet forskydes kraftigt. Trekant (eller zigzag) på primærsiden løser problemet, fordi en enfaset last på sekundærsiden kun belaster én primærvikling. Δ-viklingen fanger også 3. harmoniske strømme, så de ikke går ud i højspændingsnettet.

## Bestem koblingscifferet (urskive-metoden)

1. Tegn primærsidens fasespændingsvektorer med A pegende mod kl. 12.
2. Viklinger på samme ben er i fase (eller i modfase). Tegn sekundærsidens vektorer parallelt med de primære viklinger, de sidder på samme ben som.
3. Sekundærens fasespændingsvektor a peger nu på koblingscifferet.

<div class="m" data-m="ciffer"></div>

**Målemetode i labbet (cirkelslag):** forbind A og a, sæt lav spænding (100 V) på, og mål spændingerne mellem primær- og sekundærklemmer (B–b, C–c, B–c, C–b osv.). Tegn primærtrekanten i målestok, og slå cirkler med passeren fra B og C med de målte spændinger som radius. Skæringspunkterne giver b og c, og dermed sekundærtrekantens placering og cifferet.

## Paralleldrift af transformere

Betingelser:

1. Samme omsætningsforhold (ellers cirkulerende strøm allerede i tomgang).
2. Samme koblingsciffer, eller cifre der kan gøres ens ved at ombytte klemmer (se grupperne).
3. Samme fasefølge.
4. Næsten samme e_k (max ca. ±10 %), ellers fordeles lasten forkert. Transformeren med lavest e_k tager mest.
5. Effektforholdet helst ikke over ca. 1:3.

| Gruppe | Koblingscifre | Kan parallelkobles indbyrdes ved klemombytning |
|---|---|---|
| I | 0, 4, 8 | Ja (cyklisk ombytning af faser) |
| II | 6, 10, 2 | Ja |
| III | 1, 5 | Ja, og med gruppe IV ved at bytte to faser på begge sider |
| IV | 7, 11 | Ja, og med gruppe III |

En Dyn5 og en Dyn11 kan altså parallelkobles, hvis man bytter to faser på både primær- og sekundærsiden af den ene. Gruppe I og II kan aldrig parallelkobles med III og IV.

> **I labbet**
> Før sekundærsiderne forbindes, måles spændingen mellem de klemmer, der skal sammen. 0 V er korrekt. En spænding betyder fejlkobling, som ville give kortslutning.

## Indkobling og inrush

Kobles en ubelastet transformer ind i spændingens nulgennemgang, skal fluxen bygges op fra 0 og kan nå næsten 2 × Φ_max (plus remanens). Kernen går i dyb mætning, og magnetiseringsstrømmen bliver mange gange fuldlaststrømmen i de første perioder, før den klinger af. **Indkobling ved spændingsmaksimum giver mindst inrush.**

Inrush-strømmen er rig på 2. harmoniske. Differentialbeskyttelse (UV6C) bruger netop 2. harmoniske til at blokere, så relæet ikke fejludløser ved indkobling.

## Kortslutningsstrømme

Ved en kortslutning direkte på sekundærklemmerne begrænses strømmen kun af transformerens egen impedans:

```
I_k3 = I_N · 100 / e_k        S_k = S_N · 100 / e_k        I_k3 = U_f / Z_T
I_k2 = (√3 / 2) · I_k3 ≈ 0,87 · I_k3
i_p  = κ · √2 · I_k           (κ mellem 1 og 2)
```

- **Stødstrøm:** sker kortslutningen i spændingens nulgennemgang, får strømmen et DC-led, og første top kan teoretisk blive 2 · √2 · I_k. I praksis er i_p = κ · √2 · I_k, hvor κ afhænger af R/X.
- **I_k3 er normalt størst** og bestemmer kortslutningsfastheden (tavler og afbrydere).
- **Den mindste I_k** (ofte 1-faset i enden af kablet) bestemmer, om sikringen når at udløse.
- Medregnes net og kabler: Z_total = Z_net + Z_T + Z_kabel (henført til samme spænding), og I_k = c · U_f / Z_total.

<details markdown="1"><summary>Forudsig først: en 1.000 kVA transformer på 400 V med e_k = 6 %. Er I_k3 omkring 2, 24 eller 240 kA?</summary>

I_N = 1.000.000 / (√3 · 400) = 1.443 A. I_k3 = 1.443 · 100 / 6 = 24,1 kA. Sæt værdierne ind i modellen og se også stødstrømmen.
</details>

<div class="m" data-m="kortslut"></div>

### Fordeling i en Dyn-transformer

Henført til samme spænding er I'k3 = I_k3 / n.

| Fejl på sekundærsiden | Sekundære fasestrømme | Primære linjestrømme |
|---|---|---|
| 3-faset | I_k3 i alle tre | I'k3 i alle tre |
| 2-faset (fx b–c) | I_k2 i to faser, 0 i den tredje | I'k3 i én linje, I'k3/2 i de to andre |
| 1-faset (fx a–n) | I_k1 ≈ I_k3 i én fase | I'k3/√3 i to linjer, 0 i den tredje |

Pointen er, at Δ-viklingen fordeler en usymmetrisk fejl ud over flere primære ledere, så nettet ser en mere symmetrisk belastning.

## Lab 6 kort

Samme 2 kVA Dyn-transformer. Variotransformeren skrues op fra 0 V, til der måles I_2,1/1 = I_k3 på sekundærsiden. Målerapport.

1. 3-, 2- og 1-faset kortslutning på sekundærsiden. Mål alle tre strømme på begge sider med tang, og sammenlign med tabellen.
2. Koblingsciffer ved U_n = 100 V. Tegn med cirkelslag, og find a, b og c.
3. Paralleldrift med gruppen overfor. Find den korrekte tilslutning, mål med voltmeter mellem klemmerne før sammenkobling, og vis processen vektorielt.

> **Mere til labøvelse 6**
> [Labnoterne](../../modeller/el2/lab6-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab6.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab6-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvad betyder hvert tegn i Dyn11?
2. Hvorfor kan en Dyn11 og en Yy0 aldrig parallelkobles?
3. Hvorfor indkobles en transformer helst ved spændingsmaksimum?
4. Hvorfor ser nettet en mere symmetrisk last ved en 1-faset fejl bag en Dyn-transformer?

<details markdown="1"><summary>Svar</summary>

1. D: trekant på HS. y: stjerne på LS. n: udført nul på LS. 11: LS ligger 11 · 30° = 330° bagud (30° foran).
2. 11 er i gruppe IV og 0 i gruppe I. Der er 30° mellem dem, og det kan ingen klemombytning rette.
3. Fluxen ligger 90° efter spændingen. Ved spændingsmaksimum skal fluxen netop være nul, så den starter symmetrisk uden DC-forskydning og mætning.
4. Den 1-fasede sekundærstrøm løber i én trekantvikling, som er forbundet til to primære linjer. Strømmen fordeles på to ledere i stedet for én.
</details>
</div>

# Formler

### Koblingsciffer
```
Faseforskydning = ciffer · 30° bagud
Dyn5 = 150°    Dyn11 = 330° (= 30° foran)    Yy0 = 0°
Grupper:  I = 0, 4, 8   II = 2, 6, 10   III = 1, 5   IV = 7, 11
```

### Kortslutning direkte på klemmerne
```
I_N  = S_N / (√3 · U_N)
I_k3 = I_N · 100 / e_k
S_k  = S_N · 100 / e_k
I_k3 = U_f / Z_T
I_k2 = (√3 / 2) · I_k3 ≈ 0,87 · I_k3
i_p  = κ · √2 · I_k          1 ≤ κ ≤ 2
```

### Med net og kabler
```
Z_total = Z_net + Z_T + Z_kabel       (henført til samme spænding)
I_k     = c · U_f / Z_total
```

# Quiz

Q: Hvor mange grader ligger sekundærspændingen efter primærspændingen i en Dyn5?
N: 150 ; 0,5 ; °
L: 5 · 30° = 150° bagud.
F: Hvert ciffer er 30°.

Q: En 2 kVA transformer på 400 V har e_k = 5 %. Hvad er I_k3 på sekundærsiden? (A, 1 decimal)
N: 57,7 ; 0,3 ; A
L: I_N = 2.000 / (√3 · 400) = 2,887 A. I_k3 = 2,887 · 100 / 5 = 57,7 A.
F: Med e_k = 5 % bliver kortslutningsstrømmen 20 gange I_N.

Q: Hvad er I_k2 for samme transformer? (A, 1 decimal)
N: 50 ; 0,3 ; A
L: I_k2 = 0,866 · 57,7 = 50,0 A.
F: Den 2-fasede strøm er altid √3/2 af den 3-fasede ved stiv forsyning.

Q: En 1.000 kVA, 400 V transformer har e_k = 6 %. Hvad er I_k3? (kA, 1 decimal)
N: 24,1 ; 0,1 ; kA
L: I_N = 1.000.000 / (√3 · 400) = 1.443 A. I_k3 = 1.443 · 100 / 6 = 24.060 A = 24,1 kA.
F: Tavlen skal være kortslutningsfast for mindst denne strøm.

Q: Hvilke koblingscifre kan parallelkobles med en Dyn11 ved at ombytte klemmer?
A: 0, 4 og 8
R: 7, og 1 og 5 ved at bytte to faser på begge sider
A: Kun 11
A: Alle ulige cifre
F: 11 er i gruppe IV (7, 11), som kan kobles med gruppe III (1, 5).

Q: To transformere i paralleldrift har e_k = 4 % og 6 %. Hvad sker der?
A: De deler lasten ligeligt
R: Transformeren med 4 % tager mest last
A: Transformeren med 6 % tager mest last
A: Der løber en cirkulationsstrøm i tomgang
F: Den med lavest impedans (e_k) tager mest. Cirkulationsstrøm i tomgang skyldes forskelligt omsætningsforhold.

Q: Hvorfor blokerer et differentialrelæ på 2. harmoniske?
A: For at måle frekvensen
R: Fordi inrush-strøm er rig på 2. harmoniske og ellers ville give fejludløsning
A: For at undgå 3. harmoniske i nettet
A: Fordi kortslutningsstrømme kun har 2. harmoniske
F: En ægte indre fejl har næsten ingen 2. harmoniske, inrush har mange.

Q: Hvilken kortslutningsstrøm bestemmer, om sikringen når at udløse?
A: Den største 3-fasede ved transformeren
R: Den mindste, ofte 1-faset i enden af kablet
A: Stødstrømmen
A: Inrush-strømmen
F: Den største bestemmer kortslutningsfastheden, den mindste bestemmer udløsningen.
