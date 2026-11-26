id: udvidelse
navn: Varmeudvidelse
ikon: udvid
intro: Lineær udvidelse og volumenudvidelse, udvidelseskoefficienter, bimetal, termiske spændinger og hvordan man tager højde for udvidelse i rørsystemer.
---
# Noter

> **Kilder**
> Gruppefremlæggelsen "Typer af termometre", slide 4–5 (metaludvidelse, varmeudvidelseskoefficient, bimetal). Resten er standardteori.

Når et stof bliver varmere, bevæger molekylerne sig mere og fylder mere. Stoffet udvider sig. Hvor meget, afhænger af materialet, og det angives med en **udvidelseskoefficient.**

## Lineær udvidelse

For en stang, et rør eller en aksel er det længden, der betyder noget:

```
ΔL = α · L₀ · Δt
```

α er den lineære udvidelseskoefficient i 1/K. Den fortæller, hvor stor en del af længden stangen vokser med pr. grad.

| Materiale | α [10⁻⁶ /K] |
|---|---|
| Invar (Fe-Ni) | ca. 1,5 |
| Glas | ca. 9 |
| Stål | 11–13 (brug 12) |
| Rustfrit stål (austenitisk) | ca. 16 |
| Kobber | ca. 17 |
| Messing | ca. 19 |
| Aluminium | ca. 23 |

<div class="m" data-m="udvid"></div>

### Gennemregnet eksempel

En 10 m lang damprørsledning af stål monteres ved 20 °C og kører ved 120 °C. Hvor meget bliver den længere? Regn først.

<details markdown="1"><summary>Vis udregning</summary>

ΔL = 12 · 10⁻⁶ · 10 m · 100 K = 0,012 m = **12 mm.**

Det lyder lidt, men kan røret ikke bevæge sig, skal 12 mm optages et sted, ellers bøjer røret eller river beslagene løs.
</details>

## Volumenudvidelse

For væsker og for hele legemer er det rumfanget, der vokser:

```
ΔV = β · V₀ · Δt        β ≈ 3 · α for faste stoffer
```

Væsker udvider sig meget mere end metaller. Olie har β ≈ 0,0007 /K, og vand ca. 0,0002 /K ved 20 °C (stigende med temperaturen).

> **Praksis**
> Derfor har et lukket varmeanlæg en ekspansionsbeholder, og derfor må en olietank aldrig fyldes helt. 1.000 L olie, der varmes 30 K, vokser 0,0007 · 1000 · 30 = 21 L.

> **Vands anomali**
> Vand har sin største massefylde ved ca. 4 °C. Under 4 °C udvider det sig igen, og når det fryser, vokser rumfanget ca. 9 %. Det er derfor, frostsprængte rør og motorblokke opstår.

## Bimetal

To metaller med forskellig α valset sammen. Ved opvarmning bøjer strimlen mod metallet med **mindst** udvidelse, fordi det andet bliver længst. Bruges i termostater, bimetaltermometre og termiske motorværn.

## Termiske spændinger

Kan et emne ikke udvide sig frit, opstår der en spænding. Tøjningen, der "mangler", er α · Δt, og med Hookes lov:

```
σ = E · α · Δt
```

For stål (E = 210.000 MPa) giver 50 K: σ = 210.000 · 12 · 10⁻⁶ · 50 = 126 MPa. Det er over halvdelen af flydegrænsen for almindeligt konstruktionsstål (235 MPa). Se også emnet **Stivhed og materialelære.**

## Sådan tager man højde for udvidelse

- **Kompensatorer** (bælge) og **U-bøjninger** i rørføringer.
- **Glidebeslag** og faste punkter, så røret kan bevæge sig i den rigtige retning.
- **Krympning:** en ring varmes op, så den kan skubbes på en aksel, og sidder fast, når den køler (krympepasning). Omvendt kan et leje køles i tøris.
- **Ventilspillerum** på en motor måles kold, fordi ventilen bliver længere, når den bliver varm.

# Formler

### Lineær udvidelse
```
ΔL = α · L₀ · Δt
L = L₀ · (1 + α · Δt)
```

### Volumenudvidelse
```
ΔV = β · V₀ · Δt
β ≈ 3 · α     (faste stoffer)
```

### Termisk spænding (fastholdt emne)
```
σ = E · α · Δt
```

### Typiske værdier
```
α stål ≈ 12 · 10⁻⁶ /K     α Al ≈ 23 · 10⁻⁶ /K     α Cu ≈ 17 · 10⁻⁶ /K
β olie ≈ 0,0007 /K        β vand ≈ 0,0002 /K (20 °C)
```

# Quiz

Q: En aluminiumsstang på 2 m opvarmes 80 K (α = 23 · 10⁻⁶ /K). Hvor meget bliver den længere? (mm, 2 decimaler)
N: 3,68 ; 0,02 ; mm
L: ΔL = 23 · 10⁻⁶ · 2000 mm · 80 = 3,68 mm.
F: Regn L₀ i mm, så får du svaret i mm direkte.

Q: Et stålrør kan ikke bevæge sig og opvarmes 40 K. Hvad bliver spændingen? (MPa, E = 210.000 MPa, α = 12 · 10⁻⁶)
N: 100,8 ; 1 ; MPa
L: σ = E · α · Δt = 210.000 · 12 · 10⁻⁶ · 40 = 100,8 MPa.
F: Termiske spændinger kan nemt blive store.

Q: Hvorfor har et lukket centralvarmeanlæg en ekspansionsbeholder?
A: For at fjerne luft
R: Fordi vandet udvider sig, når det bliver varmt, og ellers ville trykket stige voldsomt
A: For at holde temperaturen konstant
A: For at give pumpen tilløbstryk
F: Vand er næsten usammentrykkeligt, så selv en lille udvidelse i et lukket system giver et stort tryk.

Q: Hvordan hænger β og α sammen for et fast stof?
A: β = α
A: β = α / 3
R: β ≈ 3 · α
A: β = α²
F: Stoffet udvider sig i tre retninger.

Q: 500 L hydraulikolie varmes fra 20 til 60 °C (β = 0,0007 /K). Hvor meget vokser rumfanget? (L)
N: 14 ; 0,2 ; L
L: ΔV = 0,0007 · 500 · 40 = 14 L.
F: Derfor må tanken aldrig være helt fuld.

Q: Hvorfor skal man aldrig fylde en tank helt med kold olie?
A: Fordi olien bliver tykkere
R: Fordi olien udvider sig mere end tanken, når den bliver varm
A: Fordi luften skal kunne komme ud
A: Fordi tanken skrumper
F: Væsker udvider sig langt mere end stål.

Q: Ved hvilken temperatur har vand den største massefylde?
A: 0 °C
R: ca. 4 °C
A: 20 °C
A: 100 °C
F: Vands anomali. Is fylder ca. 9 % mere end vand.
