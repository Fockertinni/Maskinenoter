id: eksamen2026
navn: Eksamen 2026
ikon: kort
intro: De 13 eksamenstemaer med eksempelopgaven og alle punkterne fra temalisten som spørgsmål. Læs spørgsmålet, svar selv højt, og tryk så for at se svaret.
---
# Kort

## 1 · DC-kredse

### 1.1 Forklar beregningen af et givent DC-kredsløb med batteri

Fremgangsmåden, vist med opgavesæt 1, opgave 3 (U = 45 V, R1–R5 = 1–5 Ω):

1. **Tegn kredsen** og sæt strømretninger og spændingspile på. Batteriet er en EMK E med en indre modstand R_i i serie.
2. **Vælg metode:** serie/parallel-reduktion, hvis kredsen kan reduceres. Ellers Kirchhoff (masker og knuder), superposition eller Thevenin.
3. **Thevenin:** fjern belastningen. U_Th = tomgangsspændingen mellem a og b (her 29,0 V). R_Th = modstanden set fra a-b med kilderne kortsluttet (her 6,42 Ω).
4. **Belast:** I = U_Th / (R_Th + R_b). Med 5 Ω: U_ab = 29,0 · 5 / 11,42 = 12,7 V.
5. **Kontrollér** med Kirchhoffs spændingslov eller et potentialdiagram: rundt i en maske skal summen være nul.

### 1.2 Resistanser i serie eller parallel

Serie: R = R1 + R2 + …, samme strøm, spændingerne deles. Parallel: 1/R = 1/R1 + 1/R2 + …, samme spænding, strømmene deles. To i parallel: R1 · R2 / (R1 + R2). Den samlede parallelmodstand er altid mindre end den mindste.

### 1.3 Kirchhoffs love

**Strømloven:** summen af strømme ind i en knude er lig summen ud (ladning hober sig ikke op). **Spændingsloven:** rundt i en lukket maske er ΣE = Σ(R · I) (du kommer tilbage til samme potential). Med n knuder og m grene: n − 1 knudeligninger og m − (n − 1) maskeligninger.

### 1.4 Spændings- og strømdeling

Spændingsdeler (serie): U_x = U · R_x / R_total. Strømdeler (to grene i parallel): I_1 = I · R_2 / (R_1 + R_2). Strømmen vælger mest den lette vej.

### 1.5 Superposition

Med flere kilder regner du én kilde ad gangen, mens de andre er kortsluttet (men deres indre modstand bliver). Til sidst lægges delstrømmene sammen med fortegn. Opgavesæt 1, opgave 5: I_RB = 0,071 + 1,997 = 2,07 A. I_E1 bliver negativ (−0,55 A), så E1 bliver opladet.

### 1.6 Thevenin

Enhver lineær kreds set fra to klemmer kan erstattes af én spændingskilde U_Th i serie med R_Th. U_Th måles i tomgang. R_Th findes med kilderne kortsluttet, eller som U_Th / I_kortslutning. Fordel: du kan hurtigt regne mange forskellige belastninger.

### 1.7 Potentialdiagram

Vælg et nulpunkt og gå rundt i kredsen. En kilde giver et spring op (fra − til +), en modstand et fald på R · I i strømmens retning. Ender du samme sted, som du startede, er regningen rigtig.

### 1.8 Batterier og elementer

Et element er en galvanisk celle: to forskellige metaller i en elektrolyt giver en EMK. Batteri = flere celler. Serie: spændingerne lægges sammen. Parallel: kapaciteten og strømmen lægges sammen (cellerne skal have samme spænding). Klemspænding U_kl = E − I · R_i.

> **Usikker**
> Slides kalder den positive pol anoden. Ved afladning er den positive pol katoden (reduktion), ved opladning anoden. Det afhænger af, hvilken konvention læreren bruger. Spørg, hvis det kommer op.

## 2 · AC-kredse

### 2.1 Tegn og forklar ækvivalentskemaet for en serie- eller parallelkreds

**Serie** (opgavesæt 2, opgave 4: R = 35 Ω, spole 50 Ω og 0,2 H, C = 25,85 µF, 230 V 50 Hz):

1. Ækvivalentskemaet: spolen er en ideel L i serie med sin modstand. Alle R lægges sammen: R = 85 Ω. X_L = 62,8 Ω, X_C = 123,2 Ω.
2. Z = 85 − j60,3 = 104,2 Ω ∠ −35,4°. I = 230 / 104,2 = 2,21 A.
3. Kredsen er kapacitiv (under resonans på 70 Hz), så strømmen ligger 35,4° før spændingen.

**Parallel:** samme spænding over alle grene. Regn strømmene I_R = U/R, I_L = U/X_L, I_C = U/X_C og læg dem sammen vektorielt: I = √(I_R² + (I_L − I_C)²).

Et serieskema kan omregnes til et parallelt med samme Z og φ, men så er R og X andre værdier.

### 2.2 Impedanser i serie eller parallel

Serie: Z̄ = Z̄1 + Z̄2 (læg R og X sammen hver for sig). Parallel: Z̄ = Z̄1 · Z̄2 / (Z̄1 + Z̄2) eller via admittanser Ȳ = 1/Z̄. Brug kompleks regning, når grenene både har R og X.

### 2.3 Kirchhoffs love i AC

De gælder også i AC, men med vektorer (komplekse tal). Summen af strømmene i en knude er nul som vektorsum, ikke som talsum. To strømme på 0,79 og 0,56 A kan give 0,87 A.

### 2.4 Thevenin i AC

Samme fremgangsmåde som DC, men U_Th og Z_Th er komplekse.

### 2.5 Strøm-spændingsvektordiagrammer

Serie: læg strømmen vandret (den er fælles). U_R ligger langs I, U_L 90° foran, U_C 90° bagud. U er vektorsummen. Parallel: læg spændingen vandret, og tegn grenstrømmene ud fra den.

## 3 · Kondensatoren

### 3.1 Skitser et strøm-spændingsdiagram ud fra fasekompensering

Lysstofrøret i opgavesæt 2, opgave 6 (230 V, P = 28 W):

1. Tegn U vandret.
2. Tegn I₂ = 0,25 A med φ₂ = 60,9° bagud (cos φ = 28 / (230 · 0,25) = 0,487).
3. Del I₂ i en wattstrøm 0,122 A langs U og en wattløs strøm 0,218 A nedad.
4. Tegn I_C = 0,131 A lodret opad (90° før U).
5. I₁ = I₂ + I_C = 0,15 A. Den aktive strøm er uændret. Kun den wattløse er blevet mindre.
6. C = I_C / (U · ω) = 1,81 µF.

### 3.2 Kondensatoren som komponent

To ledende plader adskilt af en isolator (dielektrikum). Den lagrer ladning og energi i et elektrisk felt. DC: spærrer, når den er ladet. AC: leder, med X_C = 1/(2πfC), og strømmen ligger 90° før spændingen.

### 3.3 Elektrisk felt, elektrisk flux og kapacitans

E = U / d [V/m]. Kapacitans C = Q / U = ε₀ · ε_r · A / d. Med to lag dielektrikum (opgavesæt 1, opgave 2.1) er D den samme i begge lag, så E er størst i laget med lavest ε_r (luften). Luften tager den største del af spændingen og bryder først igennem.

### 3.4 Kondensatorer i serie og parallel (C og X_C)

Parallel: C = C1 + C2 (større areal). Serie: 1/C = 1/C1 + 1/C2 (større afstand). For X_C er det omvendt: i serie lægges X_C sammen.

### 3.5 Op- og afladning

τ = R · C. Opladning: u_C = U(1 − e^(−t/τ)), 63 % efter 1τ, fuld efter 5τ. Strømmen starter på U/R og falder til nul. Afladning: u_C = U · e^(−t/τ).

### 3.6 X_C i kabler og luftledninger

Et kabel er en lang kondensator. Det trækker en ladestrøm I_C = U / X_C, også i tomgang. Kabler har langt større kapacitans end luftledninger (tætte ledere, højere ε_r). Lange kabler kan give spændingsstigning i tomgang.

### 3.7 Fasekompensering

Kondensatorens strøm ligger 180° modsat spolens wattløse strøm og ophæver den. Q_C = P(tan φ₁ − tan φ₂). Gevinst: mindre strøm, mindre tab, mindre kabler. Aktiv effekt uændret.

## 4 · Magnetisme

### 4.1 Forklar beregningen af reluktans og fluxtæthed i en oplyst magnetisk kreds

Eksempel: jernkerne l_Fe = 400 mm, μ_r = 2.000, luftgab 1 mm, A = 4 cm², ønsket B = 1 T.

1. Φ = B · A = 1 · 4·10⁻⁴ = 0,4 mWb.
2. R_m,Fe = l / (μ₀ μ_r A) = 0,4 / (4π·10⁻⁷ · 2.000 · 4·10⁻⁴) = 0,398·10⁶ A/Wb.
3. R_m,luft = 0,001 / (4π·10⁻⁷ · 4·10⁻⁴) = 1,99·10⁶ A/Wb.
4. N · I = Φ(R_Fe + R_luft) = 159 + 796 = 955 A.
5. Pointen: luftgabet på 1 mm kræver fem gange så mange ampervindinger som 400 mm jern.

Omvendt: kendes N · I, regn Φ = N·I / ΣR_m og B = Φ / A.

### 4.2 Magnetisk flux og fluxtæthed

Flux Φ [Wb] er den samlede mængde feltlinjer. Fluxtæthed B = Φ / A [T] er linjer pr. m². H = N · I / l [A/m] er "trykket" og B = μ₀ μ_r H.

### 4.3 Jerntab

**Hysteresetab:** domænerne vendes 2 gange pr. periode. Tabet er arealet af hysteresesløjfen, ∝ f. Mindskes med blødt magnetisk materiale (siliciumjern). **Hvirvelstrømstab:** den skiftende flux inducerer strømme i jernet, ∝ f². Mindskes med tynde, isolerede plader.

### 4.4 Magnetiske kredsløb med og uden luftgab

Den magnetiske kreds regnes som en elektrisk: N·I svarer til E, Φ til I og R_m til R. Delene ligger i serie. Luftgab har μ_r = 1, så selv et lille gab dominerer. Luftgab gør kredsen mere lineær og forhindrer mætning.

### 4.5 AC-spole med jernkerne

Ækvivalentskema: kobbermodstanden R_Cu i serie, og en parallel med R_Fe (jerntab) og X_m (magnetisering). Effekten P = P_Cu + P_Fe. Opgavesæt 2, opgave 9: 250 W, heraf 203 W kobbertab og 47 W jerntab.

## 5 · Parallelforbundne seriekredse og serieforbindelse med parallelkredse

### 5.1 Tegn strøm-spændingsdiagrammet

Opgavesæt 2, opgave 7 (100 V, 50 Hz):

1. Regn hver gren som en serieimpedans: Z̄1 = R1 + jX_L, Z̄2 = R2 − jX_C.
2. Strømmene I1 = 0,79 A (induktiv) og I2 = 0,56 A (kapacitiv).
3. Tegn U vandret. I1 bagud, I2 foran. ΣI = 0,87 A, næsten i fase med U.
4. Tegn grenspændingerne: U_R1 langs I1, U_L 90° foran I1. Tilsvarende for gren 2. Hver gren skal summe til U.
5. U_cd = 98 V er afstanden mellem midtpunkterne i de to grenes spændingstrekanter.

### 5.2 AC-kredse med R, X_L og X_C

Hver gren regnes med Z̄ = R + j(X_L − X_C). Spoler giver +j, kondensatorer −j.

### 5.3 Strøm-spændingsvektordiagrammer

Parallelgrene: fælles spænding, tegn den vandret. Serieforbindelse: fælles strøm, tegn den vandret. I en blandet kreds starter du med det, der er fælles for den del, du tegner.

### 5.4 Beregning af blandet forbindelse

Reducér indefra og ud: parallelgrenene samles til én Z̄_p, som lægges i serie med resten. Find totalstrømmen, og regn baglæns spændinger og grenstrømme.

> **Usikker**
> I besvarelsen af opgave 7 var fortegnet på Z2 forkert. Med rettet fortegn bliver Z = 114,8 Ω ∠ −1,0° og I = 0,871 A. Se emnet om blandede forbindelser.

## 6 · 3-faset symmetrisk belastning

### 6.1 Forklar beregningen af fase- og netlederstrømme for to symmetriske belastninger

Varmelegemer 3 × 23 Ω i Y og en Δ-motor med netstrøm 9,3 A og cos φ = 0,8 på 3 × 400 V:

1. Varmelegemer (Y): I_f = I_L = 230 / 23 = 10 A, i fase med fasespændingen.
2. Motor (Δ): netstrøm 9,3 A. Strømmen i hver vikling: I_f = 9,3 / √3 = 5,37 A.
3. Netstrømmene skal lægges sammen som vektorer: aktiv del 10 + 9,3 · 0,8 = 17,44 A, reaktiv del 9,3 · 0,6 = 5,58 A.
4. I_L = √(17,44² + 5,58²) = 18,3 A, ikke 19,3 A.

### 6.2 Wattmetermetoder (1, 2 og 3 wattmetre)

**1 wattmeter:** kun symmetrisk last. P = 3 · W. **2 wattmetre (Aron):** 3-leder net, vilkårlig last. P = W1 + W2. Ved symmetrisk last også Q = √3(W2 − W1). Under cos φ = 0,5 viser det ene negativt. **3 wattmetre:** 4-leder net, vilkårlig last. P = W1 + W2 + W3.

### 6.3 Strøm-spændingsvektordiagrammer

Tegn de tre fasespændinger 120° fra hinanden og netspændingerne som forskellen mellem dem (30° foran). Hver strøm ligger φ efter sin fasespænding.

### 6.4 Fasekompensering

Q_C = P(tan φ₁ − tan φ₂). Δ: C = Q_C / (3ωU_n²). Y: C = Q_C / (3ωU_f²), tre gange større. Δ giver mindre kondensatorer. Færgen (opgavesæt 3, opgave 7) skulle bruge 1,23 Mvar.

## 7 · Stjerne-trekant transformation og Y-forbundet belastning uden nul

### 7.1 Vis beregningen af stjernepunktets forskydning

R1 = 80, R2 = 125, R3 = 45 Ω i Y uden nul på 3 × 400 V:

1. Δ-omregn: R12 = 427,2, R23 = 240,3, R31 = 153,8 Ω.
2. Strømmene i Δ: I_12 = 400∠30°/427,2 osv.
3. Netstrømmene ved Kirchhoff: I1 = I_12 − I_31 = 3,17 A ∠ −15,2° osv.
4. Spændingerne over hver R: 254 V, 285 V og 168 V. Ikke 230 V.
5. Forskydning: U_X0 = U_1N − U_R1 = 68 V ∠ 102°.

Alternativt direkte: Ū_0 = Σ(Ū_f · Ȳ) / ΣȲ.

### 7.2 Y-D transformation

Δ → Y: R_a = R_ab · R_ca / (R_ab + R_bc + R_ca). Y → Δ: R_ab = (R_a R_b + R_b R_c + R_c R_a) / R_c. Symmetrisk: Z_Y = Z_Δ / 3.

### 7.3 Strøm-spændingsvektordiagrammer

Tegn netspændingstrekanten. Ved symmetri ligger stjernepunktet i midten. Ved usymmetri uden nul flytter det mod den fase med den største impedans. Spændingerne over lasterne er fra hver hjørnespids til det forskudte stjernepunkt.

## 8 · Usymmetrisk belastning af 3-faset net med nul

### 8.1 Benyt Kirchhoffs strømlov på beregnede og oplyste fasestrømme

1. Skriv hver strøm som vektor med vinkel ud fra sin spænding: fase L1 230∠0°, L2 230∠−120°, L3 230∠120°. En 2-faset last på L1–L2 har spænding 400∠30°.
2. Træk φ fra spændingens vinkel for induktive laster.
3. Strømmen i hver faseleder er summen af strømmene til de laster, der hænger på den (med fortegn for 2-fasede laster).
4. Nulstrøm: Ī_N = Ī1 + Ī2 + Ī3 (komplekst).
5. Opgavesæt 3, opgave 5: 12,2 / 7,2 / 10,9 A og I_N = 5,0 A.

### 8.2 1-, 2- og 3-fasede belastninger

1-faset: mellem fase og nul, 230 V. 2-faset: mellem to faser, 400 V, ingen nulstrøm. 3-faset symmetrisk: ingen nulstrøm. Placér 1-fasede laster, så de fordeles jævnt.

### 8.3 Strøm-spændingsdiagrammer og knudepunktsligninger

I stjernepunktet: Ī_N = Ī1 + Ī2 + Ī3. For en 2-faset last på L1–L2 tæller strømmen positivt i L1 og negativt i L2. Tegn alle strømme fra origo og læg dem sammen hoved til hale.

> **Usikker**
> PP7 skriver I2 = I23 + (−I21). Det skal være −I12. Se emnet om stjerne uden nul.

## 9 · Magnetisk felt og håndregler

### 9.1 Forklar felt-, strøm- og kraftretninger med håndregler i et givent eksempel

1. Hovedfeltet går fra N til S.
2. Lederens felt: proptrækkerreglen. ⊗ (ind) giver felt med uret.
3. Hvor felterne peger samme vej, bliver feltet stærkt. Lederen skubbes mod den svage side.
4. Kontrollér med motorreglen: venstre hånd, feltet ind i håndfladen, fingrene i strømmens retning, tommelfingeren viser kraften.
5. Størrelse: F = B · I · l.

### 9.2 Spoleregel, generatorregel og motorregel

Spoleregel (højre hånd): fingrene følger strømmen, tommelfingeren viser N. Motorregel (venstre): felt i håndfladen, fingre = strøm, tommel = kraft. Generatorregel (højre): felt i håndfladen, tommel = bevægelse, fingre = induceret strøm.

### 9.3 Proptrækkerreglen

Skru en proptrækker i strømmens retning. Drejeretningen er feltets retning. Strøm ind i papiret: felt med uret.

### 9.4 Lenz' lov

Den inducerede strøm modarbejder den ændring, der skabte den. Derfor minus i e = −N·dΦ/dt, og derfor skal en generator drives hårdere, når den belastes.

### 9.5 Induktion

Ændres fluxen gennem en spole, induceres e = −N · dΦ/dt. En leder, der bevæges i et felt: E = B · l · v.

### 9.6 Selvinduktion

En spole modarbejder ændringer i sin egen strøm: e = −L · di/dt. L = μ · A · N² / l. Energien i feltet er ½LI².

### 9.7 Ind- og udkobling af spoler

τ = L / R. Indkobling: i stiger til 63 % efter 1τ. Udkobling uden diode: di/dt bliver enorm og giver gnister. Med friløbsdiode dør strømmen ud med τ.

## 10 · DC-motoren

### 10.1 Opstil DC-motorens spændingsligning med oplyst data

Shuntmotor fra opgavesæt 1, opgave 6: U = 220 V, I = 2,0 A, R_sh = 1.200 Ω, R_av = 24 Ω, ΔU_b = 2 V.

1. Tegn ækvivalentdiagrammet: R_sh parallelt med ankergrenen (R_av, E, børster).
2. I_sh = 220 / 1.200 = 0,183 A. I_a = 2,0 − 0,183 = 1,82 A.
3. E = U − I_a · R_av − ΔU_b = 220 − 1,82 · 24 − 2 = 174 V.
4. Serie: E = U − I_a(R_a + R_v + R_s) − ΔU_b.

### 10.2 Opbygning

Stator med hovedpoler (feltvikling eller permanente magneter) og vendepoler. Rotor (anker) med vikling i noter, kommutator og børster.

### 10.3 Kommutering og ankerreaktion

Kommutatoren vender strømmen i lederne, når de passerer den neutrale zone, så momentet altid går samme vej. Ankerstrømmen laver et tværfelt, der forskyder den neutrale zone (ankerreaktion), og det giver gnister. Vendepolerne ophæver tværfeltet.

### 10.4 Serie-, shunt- og permanentmagnetmotor

Serie: stort startmoment, løber løbsk ubelastet. Shunt: næsten konstant hastighed, løber løbsk ved feltafbrydelse. Permanentmagnet: konstant felt uden feltvikling, små motorer, ligner shunt.

### 10.5 Tab, virkningsgrad og EMK

Tab: kobbertab (I²R), børstetab (ΔU_b · I_a), jerntab og mekaniske tab. η = P2 / P1. EMK (modspændingen) E = k_E · Φ · n begrænser strømmen under drift.

> **Usikker**
> PP10 nævner ikke jerntabet i tabslisten. Det er med i alle lærebøger og i opgavesæt 2, opgave 1.

## 11 · Ledere, strømvarmetab, effekt, arbejde og energi

### 11.1 Beregn afsat effekt og energi i en leder ud fra oplyst data

Svejsekablet fra opgavesæt 1, opgave 4 (Cu, 10 mm², 8,75 mΩ ved 20 °C, 50 A, 240 min):

1. l = R · S / ρ = 8,75·10⁻³ · 10 / 0,0175 = 5,0 m.
2. P = R · I² = 0,00875 · 2.500 = 21,9 W ved start.
3. Ved 11,2 mΩ: P = 28 W, og T = 20 + (11,2/8,75 − 1) / 0,004 = 90 °C.
4. Energi over 4 timer: mellem 21,9 · 4 = 88 Wh og 28 · 4 = 112 Wh, altså ca. 0,1 kWh (0,36 MJ).

> **Usikker**
> Opgaven spørger ikke efter energien. Den sidste linje er et overslag, fordi modstanden stiger undervejs.

### 11.2 Lederens resistans (resistivitet, ledertemperatur, strømtæthed)

R = ρ · l / S. R₂ = R₁(1 + α(T₂ − T₁)), α_Cu = 0,004 /°C. J = I / S [A/mm²].

### 11.3 Strømvarmetab

P = R · I² [W]. Dobbelt strøm giver fire gange så meget varme. (PP11 skriver fejlagtigt P = R · I² · N.)

### 11.4 Moment og vinkelhastighed

M = F · r [Nm]. ω = 2π · n [rad/s] med n i omdr./s. P = M · ω.

### 11.5 Effekt, arbejde, energi og virkningsgrad

W = F · s [J]. P = W / t. W = P · t, 1 kWh = 3,6 MJ. η = P2 / P1. Komfuret: 8,8 kW i 2 timer = 17,6 kWh = 63,4 MJ = 40,48 kr.

### 11.6 Elektromotorisk kraft og ladningsmængder

E = W / Q [V = J/C]: den energi, kilden giver hver coulomb. Q = I · t [C = As]. 1 Ah = 3.600 C.

### 11.7 Akkumulator: kapacitet, virkningsgrad, indre modstand og klemspænding

Kapacitet i Ah (ladning). Virkningsgrad: afgivet Ah/tilført Ah (85–90 % for bly) eller Wh (70–80 %). U_kl = E − I · R_i. R_i = (E − U_kl) / I, stiger med alder og kulde.

## 12 · Halvledere, dioder, lysdioder og solceller

### 12.1 Opstil beregningen af virkningsgrad ud fra oplyste data

Opgavesæt 3, opgave 8: pyranometer 125,8 mV, K = 148 mV/(kW/m²), MPP ved 27,4 V og 7,3 A, P_STC = 260 W, η_STC = 15,98 %.

1. Areal: A = 260 / (1.000 · 0,1598) = 1,627 m².
2. Indstråling: asr = 125,8 / 148 = 0,85 kW/m².
3. Indstrålet effekt: 850 · 1,627 = 1.383 W.
4. P_m = 27,4 · 7,3 = 200 W.
5. η = 200 / 1.383 = 14,46 %.

### 12.2 Forklar formålet med en friløbsdiode i forhold til et DC-relæ

Dioden sidder i spærreretning over relæspolen. Når strømmen afbrydes, vil spolen holde den i gang, og e = −L · di/dt giver en spændingsspids på hundredvis af volt. Dioden leder i det øjeblik, strømmen løber rundt gennem spole og diode og dør ud med τ = L/R. Spændingen bliver kun ca. 0,7 V, så kontakt eller transistor ikke ødelægges. Ulempe: relæet slipper langsommere.

### 12.3 PN-overgang og det elektriske felt

P-lag dopet med bor (huller), N-lag med fosfor (frie elektroner). Ved overgangen fylder elektroner huller, og der efterlades faste ioner: rumladningszonen. Ionerne laver et indbygget felt, der stopper yderligere vandring.

### 12.4 Dioden, LED og fotodiode

Diode: leder over ca. 0,7 V i lederetning, spærrer i spærreretning. LED: rekombination sender en foton ud, λ = h·c/E. Fotodiode: lys laver elektron-hul-par, feltet skiller dem, strømmen følger lyset.

### 12.5 Solcellens ækvivalentmodel

Strømkilde I_sc (∝ lys) parallelt med en diode D og en lækmodstand R_p, og en seriemodstand R_s ud til belastningen. Ideelt: R_p uendelig, R_s nul.

### 12.6 Solindstråling, pyranometer, Air Mass, STC og NOCT

asr = U_målt / K. AM = 1/cos θ. STC: 1.000 W/m², celle 25 °C, AM 1,5. NOCT: 800 W/m², omgivelser 20 °C, vind 1 m/s.

### 12.7 IV-kurve, R-optimal og P_m

IV-kurven går fra I_sc (U = 0) til U_oc (I = 0). P_m ligger i knækket (MPP). R_optimal ≈ U_oc / I_sc er et groft bud til valg af skydemodstand. Varme sænker U og P, lys hæver I.

> **Usikker**
> I afleveringen blev celletemperaturen 28,6 °C. Med α_Pmpp som relativt fald (−0,42 %/°C) bliver den ca. 47,6 °C. Se emnet om halvledere.

## 13 · Vekselspænding, strøm og effekter (enfaset)

### 13.1 Opstil beregningen af aktiv effekt

Tre veje, vist med en spole med jernkerne (230 V, 1,25 A, R_Cu = 130 Ω, opgavesæt 2, opgave 9):

1. **Med cos φ:** P = U · I · cos φ. Måles P = 250 W, er cos φ = 250 / 287,5 = 0,87.
2. **Med R:** P = R · I² for alle resistive dele. Her 130 · 1,25² = 203 W kobbertab plus 47 W jerntab.
3. **Med wattstrømmen:** P = U · I_W = 230 · 1,09 = 250 W.

For en serie-RL: Z = √(R² + X²), I = U/Z, cos φ = R/Z, P = U · I · cos φ = R · I².

### 13.2 Fremstilling af vekselspænding

En ledersløjfe drejer i et magnetfelt. Når lederne skærer feltet vinkelret, er spændingen størst. e = E_max · sin(ωt), ω = 2πf, T = 1/f = 20 ms ved 50 Hz.

### 13.3 Middelværdi, effektivværdi, peak-værdi og formfaktor

U_max = √2 · U_eff (230 → 325 V). U_mid = 0,637 · U_max (207 V). Formfaktor ξ = U_eff / U_mid = 1,11. Effektivværdien er den DC-spænding, der giver samme varme.

### 13.4 Effekt: S, P, Q, I_W og I_WL

P = U·I·cos φ [W], Q = U·I·sin φ [var], S = U·I [VA], S² = P² + Q². I_W = I·cos φ (i fase med U), I_WL = I·sin φ (90° på U). cos φ = P/S.
