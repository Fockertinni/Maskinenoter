id: jording-eksamen
navn: Alt du skal bruge til eksamen: Jording, målebroer og fordelingssystemer
ikon: jord
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og hvad du skal vise i laboratoriet.
---
# Noter

> **Sådan foregår eksamen**
> Individuel mundtlig fremlæggelse på baggrund af en praktisk prøve i stærkstrømslaboratoriet. Egne noter og rapporter må ikke medbringes, så alt herunder skal sidde i hovedet.

Hvis du kun når én ting: kunne tegne 3-punktsmålingen med potentialebjerget og forklare, hvorfor spændingsspyddet står ved ca. 62 %, og hvorfor 3 %-kravet viser, om målingen er gyldig. Og kunne forklare, hvorfor skibe bruger IT-net.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | R_x = R_2 · R_3 / R_4 | Wheatstone-bro i balance |
| 2 | Z = U / I, R = P / I², X_L = √(Z² − R²) | Spole målt med U, I og P |
| 3 | L = X_L / (2πf), cos φ = R / Z | Samme måling |
| 4 | a ≈ 5 · d | Afstand til strømspyddet |
| 5 | (R_max − R_min) / R_min · 100 % ≤ 3 % | Målinger ved 55/60/65 % af a |
| 6 | R = ρ · l / A, R_drift ≈ 1,25 · R_20 | Ledermodstand |
| 7 | ΔU = b · I_B · (R cos φ + X sin φ) | Spændingsfald, b = 2 (1-faset) eller √3 |

> **Fælden**
> 3 %-afvigelsen regnes i forhold til den **mindste** værdi, og opfyldes den ikke, skal afstanden a **fordobles**, ikke bare flyttes lidt.

## 2 · Det du skal kunne forklare

### Målebroer

**Pointe:** ved balance går der ingen strøm i diagonalen, og den ukendte modstand findes ud fra forholdet mellem de kendte.

**Hvorfor præcis:** resultatet afhænger hverken af forsyningsspændingen eller instrumentets nøjagtighed, kun af de kendte modstande. 4-leder-måling (Thomson) bruges til meget små modstande, så ledningernes modstand ikke tæller med. Kompensationsmåling belaster ikke måleobjektet.

### Potentialebjerget

**Pointe:** strømmen fra en jordelektrode spreder sig i halvkugleskaller, så spændingen falder stærkt tæt ved elektroden og flader ud længere væk.

**Hvorfor farligt:** står man på skrånende potentiale, er der spænding mellem fødderne (skridtspænding). Det sker ved nedfaldne højspændingsledninger og lynnedslag.

### 3-punktsmetoden

**Pointe:** strøm sendes fra elektroden til strømspyddet C ved a ≈ 5 · d, og spændingen måles med spændingsspyddet P ved 55, 60 og 65 % af a.

**Hvorfor 62 %:** her udligner potentialet fra elektroden og fra strømspyddet hinanden, så målingen giver elektrodens modstand til neutral jord (Tagg 1964).

**Hvorfor tre målinger:** er de tre næsten ens (højst 3 % afvigelse), står P i det flade stykke mellem de to potentialebjerge. Ellers overlapper bjergene, og a skal fordobles.

**R_C og R_P:** hjælpespyddenes egne overgangsmodstande. Er de for høje, bliver målingen usikker. Vand jorden, eller slå spyddene dybere.

**For høj R_E:** længere spyd, flere spyd i parallel (mindst én spydlængde imellem), ringjord eller bedre jordforhold.

### Fordelingssystemer

| System | Ved første jordfejl | Brug |
|---|---|---|
| TN | Stor fejlstrøm, sikringen kobler ud | Landinstallationer |
| TT | Lille fejlstrøm, RCD nødvendig | Ældre og landlige installationer |
| IT | Kun lille kapacitiv strøm, driften fortsætter, IMD alarmerer | Skibe, hospitaler |

**Pointe om IT:** en jordfejl stopper ikke styremaskinen eller pumperne. Men en anden jordfejl på en anden fase giver kortslutning gennem skroget, så den første skal findes hurtigt.

### Personfaren

- Ca. 30 mA gennem kroppen kan give hjerteflimmer.
- Berøringsspændingen må ikke overstige 50 V AC vedvarende.
- RCD 30 mA til personbeskyttelse. Type B fanger også glat DC efter frekvensomformere.

### Materialer og materiel

- Kobber ca. 0,0175 og aluminium ca. 0,028 Ω·mm²/m. Ved driftstemperatur ca. 25 % højere modstand.
- PVC 70 °C, PEX 90 °C. 8–10 °C over isolationsklassens grænse halverer ca. levetiden.
- IP-kode: 1. ciffer støv og faste genstande, 2. ciffer vand.

## 3 · Det du skal kunne tegne

1. **Wheatstone-broen** med nulinstrumentet i diagonalen.
2. **3-punktsopstillingen:** elektrode, P og C på lige linje med afstandene.
3. **Potentialebjerget** fra elektroden ud til C, med det flade stykke omkring 62 %.
4. **Den målte R som funktion af P's placering:** stigende kurve med et fladt plateau. For lille a fjerner plateauet.
5. **TN, TT og IT** med fejlstrømmens vej ved en jordfejl.

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Spyddet er 3 m dybt. Hvor sætter du spyddene?</summary>

Strømspyddet ved a = 15 m. Spændingsspyddet ved 8,25, 9 og 9,75 m (55, 60 og 65 %).
</details>

<details markdown="1"><summary>Du måler 41,0 / 41,6 / 42,5 Ω. Er målingen gyldig?</summary>

(42,5 − 41,0) / 41,0 = 3,7 %. Nej, kravet er 3 %. Fordobl afstanden a og mål igen.
</details>

<details markdown="1"><summary>Hvad sker der med målingen, når a = 2,5 · d?</summary>

Potentialebjergene overlapper, så der er intet fladt stykke. De tre målinger bliver forskellige, og 3 %-kravet fejler.
</details>

<details markdown="1"><summary>Hvorfor afbryder du forbindelsen til hovedjordskinnen før målingen?</summary>

Ellers måler du parallelforbindelsen med resten af jordingsanlægget og vandrør, ikke den ene elektrode.
</details>

<details markdown="1"><summary>Hvorfor bruger skibe IT-net?</summary>

Forsyningssikkerhed. Første jordfejl giver kun en lille kapacitiv strøm, så vigtige forbrugere kører videre. IMD'en alarmerer, så fejlen kan findes, før en anden fejl giver kortslutning.
</details>

<details markdown="1"><summary>En spole måles til 50 V, 2 A og 40 W. Hvad er R, X_L og L?</summary>

Z = 25 Ω, R = 40 / 4 = 10 Ω, X_L = √(625 − 100) = 22,9 Ω, L = 22,9 / 314 = 0,073 H.
</details>

## 5 · I laboratoriet

Lab 4 foregår ude i haven med fem spyd (A = 2 m galvaniseret stål, B–E = 2, 3, 4 og 5 m kobberbelagt) og Metrel MI3101.

1. Sæt spyddene på lige linje, væk fra vandrør og andre jordanlæg.
2. Mål ved 55, 60 og 65 % af a = 5 · d, og kontrollér 3 %-kravet.
3. Gentag ved a = 2,5 · d og 10 · d, og forklar forskellen.
4. Optag potentialebjerget for ét spyd.
5. Kig på R_C og R_P og vurdér, om målingen er gyldig.

> **Sikkerhed**
> Uisolerede krokodillenæb må ikke berøres under måling og må aldrig bruges i stærkstrømslaboratoriet.

## 6 · Faldgruber

- Glemt at afbryde forbindelsen til hovedjordskinnen.
- 3 %-afvigelsen regnet i forhold til den største eller midterste værdi.
- Afstanden kun flyttet lidt i stedet for fordoblet, når kravet fejler.
- IT-net forklaret som "uden jord" i stedet for med isoleret stjernepunkt og jordede udsatte dele.
- RCD type A nævnt efter en frekvensomformer.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Små modstande måles præcist med broer, fordi resultatet kun afhænger af de kendte modstande. En jordelektrodes overgangsmodstand måles med 3-punktsmetoden: strømspyd ved fem gange spyddets dybde og spændingsspyd ved 55, 60 og 65 procent. Afviger de tre målinger højst 3 procent, står spændingsspyddet uden for begge potentialebjerge, og målingen er gyldig. TN-net kobler ud ved første jordfejl, TT kræver RCD, og IT-nettet om bord kører videre ved første fejl, men den skal findes, før en anden fejl giver kortslutning gennem skroget.
</details>
</div>
