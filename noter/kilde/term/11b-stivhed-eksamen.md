id: stivhed-eksamen
navn: Alt du skal bruge til eksamen: Stivhed og materialelære
ikon: stiv
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensformen**
> Eksamensformen for Grundlæggende termodynamik stod ikke i materialet. Tjek læringsmålene. Siden er bygget, så du kan både regne og forklare emnet mundtligt.

Hvis du kun når én ting: kunne tegne spændings-tøjningskurven, forklare forskellen på stivhed og styrke, og hvordan E måles i en trækprøve.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | σ = F / A | Spænding (N/mm² = MPa) |
| 2 | ε = ΔL / L₀ | Tøjning |
| 3 | σ = E · ε | Hookes lov, elastisk område |
| 4 | ΔL = F · L₀ / (E · A) | Forlængelse af en stang |
| 5 | n = R_e / σ | Sikkerhed mod flydning |
| 6 | E_stål ≈ 210 GPa, E_Al ≈ 70 GPa | Huskeværdier |

## 2 · Det du skal kunne forklare

### Stivhed og styrke

**Pointe:** stivhed (E) er modstand mod elastisk deformation. Styrke (R_e, R_m) er, hvor meget spænding der skal til, før materialet flyder eller brister.

**Eksempel:** glas er stift, men skørt. Gummi er blødt, men kan strækkes meget.

### Young's modulus

**Pointe:** hældningen på den rette linje i spændings-tøjningskurven. En materialekonstant, som næsten ikke afhænger af legering eller varmebehandling.

**Tal fra slides:** gummi 0,01–0,1 GPa, plast 1,5–3,5 GPa, aluminium 70, titan 110, stål ca. 200 GPa.

### Kurvens punkter

**Pointe:** elastisk område, flydegrænse R_e, plastisk område med hærdning, trækstyrke R_m, indsnævring og brud.

### Trækprøven

**Pointe:** en standardprøvestav trækkes med stigende kraft. Kraftmåleren giver F, ekstensometret giver ΔL over en kendt målelængde. E er hældningen i det elastiske stykke.

## 3 · Det du skal kunne tegne

1. **Spændings-tøjningskurven for stål** med R_e, R_m, elastisk og plastisk område og brud.
2. **Trækprøvemaskine** med kæber, prøvestav og ekstensometer.

<details markdown="1"><summary>Tjek din kurve</summary>

Ret, stejl linje fra origo til R_e (ca. 0,1 % tøjning for S235). Derefter et fladt flydeområde, en buet stigning op til R_m (ved 15–20 % tøjning) og et fald til brud efter indsnævringen. Aluminium har ingen tydelig flydegrænse, så man bruger R_p0,2.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>En stålstang, 2 m, 200 mm², belastes med 30 kN. Hvad sker der?</summary>

σ = 150 MPa, ε = 0,071 %, ΔL = 1,43 mm. Under R_e = 235, så elastisk. Sikkerhed 1,57.
</details>

<details markdown="1"><summary>Hvorfor bliver en aluminiumskonstruktion mere bøjet end en ens stålkonstruktion?</summary>

E_Al er ca. 1/3 af E_stål. Samme spænding giver 3 gange så stor tøjning.
</details>

<details markdown="1"><summary>Hvad betyder det, at stål er sejt?</summary>

Det har stor brudforlængelse (A ≈ 20 % eller mere) og kan deformeres plastisk, før det brister. Det giver en advarsel før brud.
</details>

<details markdown="1"><summary>Hvordan hænger stivhed sammen med termodynamik?</summary>

Et fastholdt emne, der opvarmes, får spændingen σ = E · α · Δt. Jo stivere materialet er, jo større spænding.
</details>

## 5 · Faldgruber

- kN ikke omregnet til N.
- GPa og MPa blandet (faktor 1.000).
- Stivhed og styrke brugt som samme ord.

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

Spænding er σ = F/A i MPa, og tøjning er ε = ΔL/L₀. I det elastiske område gælder Hookes lov σ = E · ε, og elasticitetsmodulet E (Young's modulus) er materialets stivhed: ca. 210 GPa for stål og 70 GPa for aluminium. Over flydegrænsen R_e bliver deformationen blivende, og ved trækstyrken R_m er materialet ved sin grænse. Stivhed er ikke styrke. E måles i en trækprøve, hvor kraften og forlængelsen over en målelængde registreres med et ekstensometer, og E er hældningen i det elastiske stykke.
</details>
</div>
