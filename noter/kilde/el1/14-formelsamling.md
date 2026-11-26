id: formelsamling
navn: Samlet formelsamling
ikon: formler
intro: Alle formler fra Elektroteknik 1 samlet på ét sted og ordnet efter de 13 eksamenstemaer. God til repetition og til opslag, når du regner opgaver.
---
# Formler

> **Husk**
> Formelsamlingen er til opslag. Tjek selv i studieordningen, hvilke hjælpemidler der er tilladt til eksamen. Det står ikke i materialet.

## 1 · DC-kredse

| Formel | Bemærkning |
|---|---|
| U = R · I | Ohms lov |
| ΣI_ind = ΣI_ud | Kirchhoffs strømlov |
| ΣE = Σ(R · I) | Kirchhoffs spændingslov, rundt i en maske |
| R = R1 + R2 + … | Serie |
| 1/R = 1/R1 + 1/R2 + … | Parallel. To: R1R2/(R1 + R2) |
| U_x = U · R_x / R_total | Spændingsdeler |
| I_x = I · R_andre / (R1 + R2) | Strømdeler, to grene |
| U_th = tomgangsspænding, R_th = indre modstand set fra a-b | Thevenin |
| I = U_th / (R_th + R_b) | Thevenin belastet |
| U_kl = E − I · R_i | Kilde med indre modstand |

## 2 · AC-kredse

| Formel | Bemærkning |
|---|---|
| X_L = 2πfL | Induktiv reaktans |
| X_C = 1 / (2πfC) | Kapacitiv reaktans |
| Z = √(R² + (X_L − X_C)²) | Serie |
| cos φ = R / Z | Serie |
| 1/Z = √((1/R)² + (1/X_L − 1/X_C)²) | Parallel |
| cos φ = Z / R | Parallel |
| f₀ = 1 / (2π√(LC)) | Resonans |
| Z̄ = R + jX = Z∠φ | Kompleks |

## 3 · Kondensatoren

| Formel | Bemærkning |
|---|---|
| C = Q / U | [F] |
| C = ε₀ · ε_r · A / d | Pladekondensator, ε₀ = 8,85·10⁻¹² F/m |
| E = U / d | Feltstyrke [V/m] |
| F = Q1 · Q2 / (4π · ε₀ · ε_r · r²) | Coulombs lov |
| W = ½ · C · U² | Energi |
| C = C1 + C2 | Parallel |
| 1/C = 1/C1 + 1/C2 | Serie |
| τ = R · C | Op- og afladning, 63 % efter 1τ |
| u_C = U(1 − e^(−t/τ)) | Opladning |
| Q_C = P(tan φ1 − tan φ2) | Fasekompensering |
| C = Q_C / (ω · U²) | Enfaset |
| C_Δ = Q_C / (3 · ω · U_n²), C_Y = Q_C / (3 · ω · U_f²) | 3-faset, C_Y = 3 · C_Δ |

## 4 · Magnetisme

| Formel | Bemærkning |
|---|---|
| Φ = B · A | Flux [Wb] |
| H = N · I / l | Feltstyrke [A/m] |
| B = μ₀ · μ_r · H | μ₀ = 4π·10⁻⁷ H/m |
| F_m = N · I = Φ · R_m | Magnetomotorisk kraft |
| R_m = l / (μ₀ · μ_r · A) | Reluktans |
| N · I = H_Fe · l_Fe + H_luft · l_luft | Kreds med luftgab |
| H_luft = B / μ₀ | Luftgab |

## 5 · Blandede forbindelser

| Formel | Bemærkning |
|---|---|
| Z̄ = Z̄1 + Z̄2 | Serie, kompleks |
| Z̄ = Z̄1 · Z̄2 / (Z̄1 + Z̄2) | Parallel, kompleks |
| Ī = Ū / Z̄ | Ohms lov på kompleks form |
| a + jb = r∠θ, r = √(a² + b²), θ = arctan(b/a) | Omregning |

## 6 · 3-faset symmetrisk

| Formel | Bemærkning |
|---|---|
| U_L = √3 · U_f, I_L = I_f | Stjerne |
| U_L = U_f, I_L = √3 · I_f | Trekant |
| P = √3 · U_L · I_L · cos φ | Altid netværdier |
| Q = √3 · U_L · I_L · sin φ | |
| S = √3 · U_L · I_L | |
| P = W1 + W2 | Aron |

## 7 · Y-Δ og stjerne uden nul

| Formel | Bemærkning |
|---|---|
| Z_Y = Z_Δ / 3 | Symmetrisk |
| R_a = R_ab · R_ca / (R_ab + R_bc + R_ca) | Δ → Y |
| R_ab = (R_a R_b + R_b R_c + R_c R_a) / R_c | Y → Δ |
| U_0 = (Ū1 Ȳ1 + Ū2 Ȳ2 + Ū3 Ȳ3) / (Ȳ1 + Ȳ2 + Ȳ3) | Stjernepunktets forskydning |
| Ū_fase = Ū_net,fase − Ū_0 | Spænding over hver last |

## 8 · Usymmetrisk med nul

| Formel | Bemærkning |
|---|---|
| Ī_N = Ī1 + Ī2 + Ī3 | Kirchhoff i stjernepunktet |
| 230∠0°, 230∠−120°, 230∠120° | Fasespændinger L1, L2, L3 |
| Ī = Ū / Z̄ | Hver fase for sig |

## 9 · Håndregler og induktion

| Formel | Bemærkning |
|---|---|
| F = B · I · l | Kraft på leder |
| E = B · l · v | Induceret spænding |
| e = −N · dΦ/dt | Induktionsloven, minus = Lenz |
| e = −L · di/dt | Selvinduktion |
| L = μ · A · N² / l | Spolens induktans |
| τ = L / R, W = ½ · L · I² | Ind- og udkobling |

## 10 · DC-motoren

| Formel | Bemærkning |
|---|---|
| E = U − I_a(R_a + R_v) − ΔU_b | Shunt |
| E = U − I_a(R_a + R_v + R_s) − ΔU_b | Serie |
| I = I_a + U / R_sh | Shunt |
| E = k_E · Φ · n | Modspænding |
| M = k_M · Φ · I_a | Moment |
| E · I_a = M · ω | Indre effekt |
| R_start = (U − ΔU_b) / I_start − R_a | Igangsætter |

## 11 · Ledere, effekt og energi

| Formel | Bemærkning |
|---|---|
| R = ρ · l / S | ρ_Cu = 0,0175 Ω·mm²/m |
| R₂ = R₁ · (1 + α(T₂ − T₁)) | α_Cu = 0,004 /°C |
| J = I / S | Strømtæthed |
| P = R · I² = U · I | Effekt |
| W = P · t | 1 kWh = 3,6 MJ |
| M = F · r, ω = 2πn, P = M · ω | Mekanik |
| η = P2 / P1 | Virkningsgrad |
| Q = I · t, R_i = (E − U_kl) / I | Akkumulator |

## 12 · Halvledere og solceller

| Formel | Bemærkning |
|---|---|
| E = h · c / λ | Fotonenergi [J], 1 eV = 1,602·10⁻¹⁹ J |
| asr = U_målt / K | Pyranometer |
| AM = 1 / cos θ | Luftmasse |
| R_opt ≈ U_oc / I_sc | Groft |
| η = U_mpp · I_mpp / (asr · A) | Virkningsgrad |
| STC: 1.000 W/m², celle 25 °C, AM 1,5 | Datablad |
| NOCT: 800 W/m², omgivelser 20 °C, 1 m/s | |

## 13 · Vekselspænding og effekt

| Formel | Bemærkning |
|---|---|
| U_max = √2 · U_eff | Spidsværdi |
| U_mid = (2/π) · U_max | Middelværdi |
| ξ = U_eff / U_mid = 1,11 | Formfaktor |
| T = 1/f, ω = 2πf | |
| P = U · I · cos φ, Q = U · I · sin φ, S = U · I | Enfaset |
| I_W = I cos φ, I_WL = I sin φ | Watt- og wattløs strøm |
| S̄ = Ū · Ī* | Kompleks effekt |
