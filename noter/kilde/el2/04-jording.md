id: jording
navn: Jording, målebroer og fordelingssystemer
ikon: jord
intro: Wheatstone-bro og kompensationsmåling, jordelektrodens overgangsmodstand med 3-punktsmetoden, TN, TT og IT, personfaren, materialer og spændingsfald i installationer.
---
# Noter

> **Kilder**
> UV 13–16 · UV9 6.2.3, 6.3 og 10.4 · UV1 · UV4 · UV7 · Lab 4

Emnet handler om tre ting: at måle modstande præcist (broer og kompensation), at kontrollere at en jordelektrode virker, og hvordan systemets jording afgør personfaren ved en fejl.

## Målebroer og kompensationsmåling

- **Wheatstone-bro (DC):** fire modstande i en firkant med et nulinstrument i diagonalen. Ved balance går der ingen strøm i diagonalen, og den ukendte modstand findes af forholdet: R_x = R_2 · R_3 / R_4. Fordelen er, at resultatet ikke afhænger af forsyningsspændingen eller instrumentets nøjagtighed, kun af de kendte modstande.
- **Thomson-bro og 4-leder-måling:** til meget små modstande, hvor ledningsmodstand og overgangsmodstand ellers ville dominere. Strømmen sendes i to ledninger, og spændingen måles i to andre.
- **AC-broer:** samme princip med impedanser. Balance kræver både størrelse og vinkel: Z_x · Z_4 = Z_2 · Z_3. Bruges til at måle L og C.
- **Kompensationsmåling:** en kendt, justerbar spænding stilles op imod den ukendte, til strømmen gennem nulinstrumentet er 0. Så belastes måleobjektet ikke.

**Spole målt med U, I og P:** Z = U / I, R = P / I², X_L = √(Z² − R²), L = X_L / (2πf) og cos φ = R / Z.

<details markdown="1"><summary>Prøv selv: en spole måles til 50 V, 2 A og 40 W ved 50 Hz. Find R, X_L og L.</summary>

Z = 50 / 2 = 25 Ω. R = 40 / 2² = 10 Ω. X_L = √(25² − 10²) = 22,9 Ω. L = 22,9 / 314,16 = 0,073 H. cos φ = 10 / 25 = 0,4.
</details>

## Overgangsmodstand til jord

Når en jordelektrode fører strøm, spreder strømmen sig i halvkugleskaller rundt om den. Spændingen falder stærkt tæt på elektroden og flader ud mod neutral jord. Kurven kaldes **potentialebjerget**. Den er farlig ved nedfaldne højspændingsledninger og lynnedslag (skridtspænding).

**3-punktsmetoden (Metrel Eurotest):**

- **R_E** er elektroden, der måles. Forbindelsen til hovedjordskinnen afbrydes først.
- **C** (strømspyd, H) placeres i afstanden a ≈ 5 × elektrodens dybde d.
- **P** (spændingsspyd, S) placeres ved 55, 60 og 65 % af a. Ca. 62 % af afstanden giver den sande værdi (Tagg, 1964).
- **R_C og R_P** er hjælpeelektrodernes egne overgangsmodstande. Instrumentet viser dem, så man kan vurdere, om målingen er gyldig. Er de for høje, er målingen usikker: vand jorden, eller slå spyddene dybere.

Krav til neutral jord:

```
afvigelse = (R_max − R_min) / R_min · 100 % ≤ 3 %
```

Opfyldes kravet ikke, ligger hjælpeelektroderne inden for elektrodens potentialeområde. Så fordobles afstanden. Hjælpeelektroderne placeres på lige linje og væk fra vandrør og andre jordingsanlæg.

<details markdown="1"><summary>Forudsig først: hvad sker der med de tre målinger, hvis strømspyddet sættes for tæt på?</summary>

Potentialebjergene fra elektroden og strømspyddet overlapper, så der er intet fladt stykke i midten. De tre målinger ved 55/60/65 % bliver forskellige, og 3 %-kravet fejler. Træk a ned i modellen og se.
</details>

<div class="m" data-m="jord"></div>

Modellen bruger halvkugleformede elektroder i ensartet jord. Den viser mekanismen, ikke de præcise tal for et rigtigt spyd.

**Hvis R_E er for høj:** længere eller dybere spyd, flere spyd i parallel (med mindst én spydlængdes afstand), ringjord eller fundamentsjord, og bedre jordforhold.

## Lab 4 kort

Fem spyd i haven: A = 2 m galvaniseret stål, B–E = 2, 3, 4 og 5 m kobberbelagt stål. Rapport, max 2 sider.

1. Lær Metrel MI3101 at kende ud fra kvikmanualen.
2. Mål R_E ved 55/60/65 % af a = 5 × d, og kontrollér 3 %-kravet. Gentag på ét spyd ved a = 2,5 × d og 10 × d.
3. Optag potentialebjerget for ét spyd: 5–20 %, 55–65 % og 85–95 % af a. Tegn kurven.
4. Forklar R_C og R_P, betydningen af hjælpespyddenes længde og af afstanden a.

> **Sikkerhed**
> Uisolerede krokodillenæb må ikke berøres under måling og må aldrig bruges i stærkstrømslaboratoriet.

## Fordelingssystemer (systemjording)

Første bogstav er forsyningens forbindelse til jord. Andet bogstav er de udsatte deles forbindelse.

| System | Forsyning | Udsatte dele | Ved første jordfejl | Typisk brug |
|---|---|---|---|---|
| TN-S / TN-C-S | Stjernepunkt direkte jordet | Forbundet til jordet nul via PE | Stor fejlstrøm, sikring eller afbryder kobler ud | Landinstallationer, dansk forsyning |
| TT | Stjernepunkt jordet | Egen lokal jordelektrode | Lille fejlstrøm, RCD er nødvendig | Ældre og landlige installationer |
| IT | Isoleret (eller højimpedant) | Jordet lokalt | Kun lille kapacitiv strøm, driften kan fortsætte. Isolationsovervågning (IMD) alarmerer | Skibe (fx 440 V uden nul), hospitaler, proces |

IT-nettet om bord giver forsyningssikkerhed: en enkelt jordfejl stopper ikke styremaskinen eller pumperne. Men fejlen skal findes hurtigt. **En anden jordfejl på en anden fase giver en fase-fase-kortslutning gennem skroget.**

## Den personlige fare

- Det er strømmen gennem kroppen, der er farlig. Ca. 30 mA kan give hjerteflimmer, og risikoen stiger med tid og strømvej (hånd–hånd eller hånd–fødder over hjertet).
- Berøringsspændingen må ikke overstige 50 V AC vedvarende. Derfor skal beskyttelsesudstyret udkoble hurtigt nok (DS/HD 60364-4-41).
- **RCD (fejlstrømsafbryder)** sammenligner udgående og tilbagegående strøm. 30 mA til personbeskyttelse. Type A: AC og pulserende DC. Type B: også glat DC, nødvendig efter frekvensomformere. Udkoblingstiden testes, og en fejlstrøm ≥ 5 × I_Δn giver hurtigst udkobling.
- **Sløjfeimpedans:** skal være lav nok til, at sikringen udløser inden for den tilladte tid. I et IT-net kan den ikke måles direkte på grund af IMD'en.

## Materialer og materiel

- **Ledere:** kobber (ca. 0,0175 Ω·mm²/m ved 20 °C) og aluminium (ca. 0,028, lettere og billigere). Modstanden stiger med temperaturen. Ved 70–90 °C driftstemperatur regnes R ≈ 1,25 · R_20.
- **Isolation:** PVC (70 °C), PEX/XLPE (90 °C) og gummi. Isolationsklasserne A, E, B, F og H angiver maks. temperatur i maskiner. Hver 8–10 °C over grænsen halverer ca. levetiden.
- **Beskyttelsesudstyr:** smeltesikringer (gG/aM), kredsbrydere (MCB/MCCB med termisk og magnetisk udløser), motorværn, RCD/RCBO og overbelastningsrelæer.
- **Kapslingsklasse (IP-kode):** 1. ciffer er beskyttelse mod faste genstande og støv, 2. ciffer mod vand (fx IP55, IP56 på dæk).

## Spændingsfald i installationer

```
ΔU = b · I_B · (R · cos φ + X · sin φ)
```

b = 2 for 1-fasede kredse (fase-nul), b = √3 for 3-faset netspænding (b = 1, når man regner fasespændingsfald). Kravet er typisk 3–8 % alt efter installationstype. cos φ sættes til 0,8 i industri og 1,0 i boliger, hvis den ikke er oplyst.

<details markdown="1"><summary>Prøv selv: 3-faset kreds, 20 A, 50 m kobber 2,5 mm², cos φ = 0,8, X ses bort fra. Hvor mange procent er spændingsfaldet?</summary>

R_20 = 0,0175 · 50 / 2,5 = 0,35 Ω. Ved driftstemperatur R = 1,25 · 0,35 = 0,44 Ω. ΔU = √3 · 20 · 0,44 · 0,8 = 12,1 V, som er 3,0 % af 400 V.
</details>

> **Mere til labøvelse 4**
> [Labnoterne](../../modeller/el2/lab4-noter.html?vis=noter) har hele forberedelsen og måleskemaet, [simulatoren](../../modeller/el2/lab4.html?vis=sim) lader dig øve opstillingen, og [Test dig selv](../../modeller/el2/lab4-noter.html?vis=test) har flere regneopgaver med trin-for-trin løsning.

<div class="genkald" markdown="1">
### Test dig selv

1. Hvorfor er en Wheatstone-bro uafhængig af forsyningsspændingen?
2. Hvorfor placeres spændingsspyddet ved ca. 62 % af a?
3. Hvorfor kan et skib sejle videre med én jordfejl, og hvorfor skal den alligevel findes hurtigt?
4. Hvorfor skal der RCD type B efter en frekvensomformer?

<details markdown="1"><summary>Svar</summary>

1. Ved balance er der ingen strøm i diagonalen, og resultatet afhænger kun af forholdet mellem de kendte modstande.
2. Der udligner potentialet fra elektroden og fra strømspyddet hinanden, så målingen giver elektrodens sande modstand til neutral jord.
3. I et IT-net giver første jordfejl kun en lille kapacitiv strøm. En anden jordfejl på en anden fase giver en fase-fase-kortslutning gennem skroget.
4. En fejl efter ensretteren kan give glat DC-fejlstrøm, som en type A ikke opdager.
</details>
</div>

# Formler

### Målebroer
```
Wheatstone:  R_x = R_2 · R_3 / R_4
AC-bro:      Z_x · Z_4 = Z_2 · Z_3     (størrelse og vinkel)
```

### Spole målt med U, I og P
```
Z = U / I        R = P / I²        X_L = √(Z² − R²)
L = X_L / (2πf)  cos φ = R / Z
```

### Jordmåling
```
a ≈ 5 · d                         (afstand til strømspyd)
P ved 55, 60 og 65 % af a
afvigelse = (R_max − R_min) / R_min · 100 % ≤ 3 %
```

### Ledere
```
R = ρ · l / A          ρ_Cu ≈ 0,0175   ρ_Al ≈ 0,028   Ω·mm²/m
R_drift ≈ 1,25 · R_20
```

### Spændingsfald
```
ΔU = b · I_B · (R · cos φ + X · sin φ)
b = 2 (1-faset)   b = √3 (3-faset, netspænding)   b = 1 (fasespænding)
```

# Quiz

Q: En Wheatstone-bro er i balance med R_2 = 100 Ω, R_3 = 470 Ω og R_4 = 200 Ω. Hvad er R_x? (Ω)
N: 235 ; 0,5 ; Ω
L: R_x = R_2 · R_3 / R_4 = 100 · 470 / 200 = 235 Ω.
F: Ved balance er der ingen strøm i nulinstrumentet.

Q: En spole måles til 50 V, 2 A og 40 W. Hvad er X_L? (Ω, 1 decimal)
N: 22,9 ; 0,1 ; Ω
L: Z = 25 Ω, R = 40 / 4 = 10 Ω, X_L = √(625 − 100) = 22,9 Ω.
F: Wattmeteret måler kun effekten i R.

Q: Spydet er 2 m dybt. Hvor langt væk skal strømspyddet stå?
A: 2 m
A: 5 m
R: Ca. 10 m
A: 62 m
F: a ≈ 5 × d = 10 m. Spændingsspyddet står så ved 5,5, 6 og 6,5 m.

Q: Ved 55/60/65 % måles 41,0 / 41,6 / 42,5 Ω. Er 3 %-kravet opfyldt? Angiv afvigelsen. (%, 1 decimal)
N: 3,7 ; 0,1 ; %
L: (42,5 − 41,0) / 41,0 · 100 % = 3,7 %. Kravet er ikke opfyldt, så afstanden a fordobles.
F: Afvigelsen regnes i forhold til den mindste værdi.

Q: Hvilket fordelingssystem bruges typisk om bord på skibe?
A: TN-S
A: TT
R: IT
A: TN-C
F: IT-nettet kan fortsætte driften ved første jordfejl, og IMD'en alarmerer.

Q: Hvad sker der ved en anden jordfejl på en anden fase i et IT-net?
A: IMD'en alarmerer igen, intet andet
R: Der opstår en fase-fase-kortslutning gennem skroget
A: Spændingen falder til 230 V
A: RCD'en udløser altid
F: Derfor skal første fejl findes hurtigt.

Q: Hvad er grænsen for vedvarende berøringsspænding (AC)?
A: 25 V
R: 50 V
A: 120 V
A: 230 V
F: DS/HD 60364-4-41. Beskyttelsen skal udkoble hurtigt nok til, at den ikke overskrides.

Q: Hvad betyder 2. ciffer i IP55?
A: Beskyttelse mod støv
R: Beskyttelse mod vand
A: Mekanisk slagstyrke
A: Isolationsklasse
F: 1. ciffer er faste genstande og støv, 2. ciffer er vand.
