id: formelsamling
navn: Samlet formelsamling
ikon: formler
intro: Alle formler fra Elektroteknik 2 samlet på ét sted og ordnet efter emne. God til repetition og til at slå op i, når du regner opgaver.
---
# Formler

> **Husk**
> Formelsamlingen er til opslag. Til eksamen må du kun have lærebøger og UV-materialer med, ikke egne noter.

## 3-faset vekselstrøm

| Formel | Bemærkning |
|---|---|
| U_L = √3 · U_f | Stjerne |
| I_L = √3 · I_f | Trekant |
| P = √3 · U_L · I_L · cos φ | Altid netværdier |
| Q = √3 · U_L · I_L · sin φ | |
| S² = P² + Q² | Uden harmoniske |
| Z_Δ = 3 · Z_Y | Samme effekt |
| P = W1 + W2 | Aron, 3-leder, vilkårlig last |
| Q = √3 · (W_b − W_a) | Aron, kun symmetrisk last |
| X_L = 2πfL, X_C = 1 / (2πfC) | Reaktans |

## Synkronmaskinen

| Formel | Bemærkning |
|---|---|
| n = 60 · f / p | p = polpar |
| E = 4,44 · f · N · Φ · k_w | |
| E = U + jX_s · I | Pr. fase |
| P = 3 · E · U_f · sin δ / X_s | Lastvinkel δ |

## Asynkronmotoren

| Formel | Bemærkning |
|---|---|
| s = (n_1 − n_2) / n_1 | |
| f_2 = s · f_1 | Rotorfrekvens |
| P_Cu2 = s · P_δ | P_δ = luftgabseffekt |
| P_mek = (1 − s) · P_δ | |
| M = 9,55 · P_2 / n | Nm, W, o/min |
| η = P_2 / P_1 | |
| Q_C = P · (tan φ_1 − tan φ_2) | Kompensering |
| C_Y = Q_C / (3 · ω · U_f²) | C_Δ = C_Y / 3 |

## Transformeren

| Formel | Bemærkning |
|---|---|
| n = U_1 / U_2 = N_1 / N_2 = I_2 / I_1 | |
| Z' = n² · Z | Henføring til primær |
| I_N = S_N / (√3 · U_N) | |
| R_Fe = U_f² / P_0,fase, X_h = U_f² / Q_0,fase | Tomgangsforsøg |
| P_0 = P_0N · (U / U_N)² | Tomgangsforsøg |
| Z_1 = U_1k,f / I_1N, R_1 = Z_1 cos φ_k, X_1 = Z_1 sin φ_k | Kortslutningsforsøg |
| e_k = U_1k / U_1N · 100 % | e_k² = e_r² + e_x² |
| η = P_2 / (P_2 + P_0 + x² · P_k) | x = I / I_N |
| x_ηmax = √(P_0 / P_k) | |
| ΔU ≈ I · (R cos φ + X sin φ) | DS/HD 60364 |
| ε ≈ x · (e_r cos φ + e_x sin φ) | Procent |

## Kortslutning

| Formel | Bemærkning |
|---|---|
| I_k3 = I_N · 100 / e_k | Stiv forsyning |
| I_k2 = (√3 / 2) · I_k3 | |
| i_p = κ · √2 · I_k | Stødstrøm, κ ≤ 2 |

## Jording og installation

| Formel | Bemærkning |
|---|---|
| (R_max − R_min) / R_min · 100 % ≤ 3 % | 55/60/65 % af a = 5 · d |
| R_x = R_2 · R_3 / R_4 | Wheatstone-bro |
| ΔU = b · I_B · (R cos φ + X sin φ) | b = 2 (1-faset), √3 (3-faset) |

## Frekvensomformer og harmoniske

| Formel | Bemærkning |
|---|---|
| THD = √(Σ I_h²) / I_1 · 100 % | h ≥ 2 |
| I_RMS = I_1 · √(1 + THD²) | |
| S² = P² + Q² + D² | Med forvrængning |
| PF = cos φ_1 · I_1 / I_RMS | |
| U_d = 1,35 · U_L · cos α | 6-puls bro |

## Lysteknik

| Formel | Bemærkning |
|---|---|
| E = I / r² · cos α | lux |
| E_vandret = I · cos³α / h² | Lampe i højden h |
| E_m = n · Φ · UF · MF / A | Rumbelysning |
