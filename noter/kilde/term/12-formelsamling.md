id: formelsamling
navn: Samlet formelsamling
ikon: formler
intro: Alle formler fra Grundlæggende termodynamik samlet på ét sted og ordnet efter emne. God til repetition og til at slå op i, når du regner opgaver.
---
# Formler

> **Husk**
> Formelsamlingen er til opslag. Tjek i læringsmålene, hvilke hjælpemidler du må have med til eksamen.

## Temperatur og temperaturskalaer

#### Omregning mellem skalaer
```
T [K]  = t [°C] + 273,15
t [°C] = T [K] − 273,15
t [°F] = t [°C] · 1,8 + 32
t [°C] = (t [°F] − 32) / 1,8
```

#### Temperaturforskelle
```
Δt [K] = Δt [°C]
Δt [°F] = 1,8 · Δt [°C]
```

#### Faste punkter
```
Absolut nul:          0 K = −273,15 °C = −459,67 °F
Is smelter (1 atm):   273,15 K = 0 °C = 32 °F
Vand koger (1 atm):   373,15 K = 100 °C = 212 °F
```

## Termometre og temperaturmåling

#### Pt100
```
R = R0 · (1 + α · t)          R0 = 100 Ω, α = 0,00385 /°C
t = (R / R0 − 1) / α
Følsomhed: 0,385 Ω/°C
Klasse A: ±(0,15 + 0,002·|t|) °C
Klasse B: ±(0,3 + 0,005·|t|) °C
```

#### NTC-termistor
```
R = R25 · e^(B · (1/T − 1/298,15))     T i kelvin
```

#### Termoelement type K (tilnærmet)
```
U ≈ 41 µV/°C · (t_mål − t_ref)
t_vist = U / k + t_ref        (med koldt loddested-kompensering)
```

#### Ledningsfejl ved 2-leder Pt100
```
Δt = R_ledning / 0,385 Ω/°C
```

## Måling og måleusikkerhed

#### Statistik på en måleserie
```
x̄ = Σx / n
s = √( Σ(x − x̄)² / (n − 1) )
u_A = s / √n
```

#### Samlet og udvidet usikkerhed
```
u_c = √(u₁² + u₂² + …)       (uafhængige bidrag)
U = k · u_c                  k = 2 ≈ 95 %
Resultat: x̄ ± U (k = 2)
```

#### Opløsning som usikkerhedsbidrag (rektangulær fordeling)
```
u = (opløsning / 2) / √3
```

## Tryk

#### Tryk
```
p = F / A              [Pa = N/m²]
p_abs = p_o + p_atm    p_atm ≈ 1,013 bar
```

#### Hydrostatisk tryk
```
p = ρ · g · h
Δp = ρ · g · Δh        (U-rør)
10 m vand ≈ 1 bar
```

#### Enheder
```
1 bar = 10⁵ Pa = 100 kPa
1 MPa = 10 bar
1 atm = 1,01325 bar = 760 mmHg
1 psi ≈ 0,0690 bar
```

#### Hydraulik
```
F = p · A        A = π · D² / 4
```

## Varmeudvidelse

#### Lineær udvidelse
```
ΔL = α · L₀ · Δt
L = L₀ · (1 + α · Δt)
```

#### Volumenudvidelse
```
ΔV = β · V₀ · Δt
β ≈ 3 · α     (faste stoffer)
```

#### Termisk spænding (fastholdt emne)
```
σ = E · α · Δt
```

#### Typiske værdier
```
α stål ≈ 12 · 10⁻⁶ /K     α Al ≈ 23 · 10⁻⁶ /K     α Cu ≈ 17 · 10⁻⁶ /K
β olie ≈ 0,0007 /K        β vand ≈ 0,0002 /K (20 °C)
```

## Varme og varmekapacitet

#### Varmemængde
```
Q = m · c · Δt            [kJ]
1 kWh = 3,6 MJ
```

#### Varmeeffekt i en strøm
```
Φ = ṁ · c · Δt            [kW]
ṁ = ρ · V̇                 (V̇ i m³/s)
```

#### Blanding (intet tab)
```
t = (m₁c₁t₁ + m₂c₂t₂) / (m₁c₁ + m₂c₂)
```

#### Tid og effekt
```
t = Q / P
```

#### Typiske c-værdier [kJ/(kg·K)]
```
vand 4,19   is 2,1   damp 2,0   olie ca. 1,9   luft c_p 1,005
stål 0,46   aluminium 0,90   kobber 0,385
```

## Faseovergange og vanddamp

#### Latent varme
```
Q = m · L_s       L_s (is) = 334 kJ/kg
Q = m · r         r (vand, 1 atm) = 2.257 kJ/kg
```

#### Våd damp
```
h = h' + x · r        r = h'' − h'
x = 0: kogende vand   x = 1: tør mættet damp
```

#### Varme i en strøm
```
Φ = ṁ · (h₂ − h₁)
```

#### Mætningstemperaturer (huskeværdier)
```
0,1 bar → 46 °C    1 bar → 100 °C    5 bar → 152 °C
10 bar → 180 °C    20 bar → 212 °C   (absolut tryk)
```

## Idealgasloven og tilstandsændringer

#### Idealgasloven
```
p · V = m · R · T          p og T absolutte
R_luft = 287 J/(kg·K)
ρ = p / (R · T)
```

#### Kombineret gaslov
```
p₁V₁ / T₁ = p₂V₂ / T₂
```

#### Tilstandsændringer
```
Isobar:      V₁/T₁ = V₂/T₂          W = p · (V₂ − V₁)
Isokor:      p₁/T₁ = p₂/T₂          W = 0
Isoterm:     p₁V₁ = p₂V₂            W = p₁V₁ · ln(V₂/V₁)
Adiabatisk:  p₁V₁^κ = p₂V₂^κ        W = (p₁V₁ − p₂V₂) / (κ − 1)
             T₂/T₁ = (V₁/V₂)^(κ−1) = (p₂/p₁)^((κ−1)/κ)
```

#### Luft
```
c_p = 1,005 kJ/(kg·K)    c_v = 0,718 kJ/(kg·K)
R = c_p − c_v = 0,287 kJ/(kg·K)    κ = c_p / c_v = 1,4
1 Nm³ luft = 1,293 kg (0 °C, 1,01325 bar)
```

## Energi, effekt og virkningsgrad

#### 1. hovedsætning
```
Lukket system:   Q = ΔU + W
Åbent system:    Φ − P = ṁ · (h₂ − h₁)
ΔU = m · c_v · Δt   (idealgas)
```

#### Effekt og arbejde
```
P = W / t        W = F · s        P = 2π · n · M  (n i o/s)
1 kWh = 3,6 MJ
```

#### Brændstof
```
Φ_b = ṁ_b · H_n
η = P / Φ_b
b = 3.600.000 / (η · H_n)   [g/kWh], H_n i kJ/kg
```

#### Virkningsgrad
```
η = P_ud / P_ind
η_total = η₁ · η₂ · η₃
Tab = P_ind − P_ud
```

#### Carnot
```
η_Carnot = 1 − T_kold / T_varm     (kelvin)
```

## Varmetransmission

#### Ledning
```
Φ = λ · A · Δt / d
```

#### Konvektion
```
Φ = h · A · Δt
```

#### Stråling
```
Φ = ε · σ · A · (T₁⁴ − T₂⁴)     σ = 5,67 · 10⁻⁸ W/(m²K⁴), T i kelvin
```

#### Sammensat væg
```
R = 1/h_i + Σ(d/λ) + 1/h_u
U = 1/R
Φ = U · A · Δt
t_overflade = t_u + q / h_u
```

#### Varmeveksler
```
Φ = U · A · Δt_m
Δt_m = (Δt₁ − Δt₂) / ln(Δt₁/Δt₂)
```

## Stivhed og materialelære

#### Spænding og tøjning
```
σ = F / A              [MPa = N/mm²]
ε = ΔL / L₀
```

#### Hookes lov
```
σ = E · ε
ΔL = F · L₀ / (E · A)
k = E · A / L₀          (stangens stivhed, N/mm)
```

#### Sikkerhed
```
n = R_e / σ
σ_tilladt = R_e / n
```

#### Termisk spænding
```
σ = E · α · Δt
```

#### Typiske værdier
```
E stål ≈ 210 GPa   E Al ≈ 70 GPa   E Ti ≈ 110 GPa
S235: R_e = 235 MPa    S355: R_e = 355 MPa
1 GPa = 1.000 MPa = 1.000 N/mm²
```
