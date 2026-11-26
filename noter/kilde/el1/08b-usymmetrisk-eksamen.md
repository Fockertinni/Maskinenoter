id: usymmetrisk-eksamen
navn: Alt du skal bruge til eksamen: Usymmetrisk belastning med nul
ikon: trefase
intro: De vigtigste formler, det du skal kunne forklare og tegne, de spørgsmål du kan forvente, og et huskekort.
---
# Noter

> **Eksamensopgaven til temaet**
> "En opgave kunne være at benytte Kirchhoffs strømlov på beregnede og oplyste fasestrømme."

Hvis du kun når én ting: kunne opstille en knudepunktsligning for hver faseleder og for nullen, når der sidder 1-, 2- og 3-fasede laster på samme net, og regne summerne vektorielt.

## 1 · De vigtigste formler

| # | Formel | Hvornår |
|---|---|---|
| 1 | U_12 = 400∠30°, U_23 = 400∠−90°, U_31 = 400∠150° | Netspændingernes vinkler, når U_1N = 0° |
| 2 | I = S / U | Strømmens størrelse |
| 3 | vinkel(I) = vinkel(U) − φ | Strømmens vinkel (φ > 0 induktiv) |
| 4 | I_L1 = ΣI på L1 | Kirchhoff i hver faseleder |
| 5 | I_N = −(I_L1 + I_L2 + I_L3) | Nulstrømmen |

## 2 · Det du skal kunne forklare

### Kirchhoff i et 4-ledernet

**Pointe:** strømmen i en faseleder er vektorsummen af strømmene til de laster, der hænger på den. Summen af alle fire ledere (L1, L2, L3, N) er nul.

**Sådan:**

1. Find størrelse og vinkel for hver lasts strøm ud fra den spænding, den sidder på.
2. En 2-faset last mellem L2 og L3 tæller + i L2 og − i L3.
3. En symmetrisk 3-faset last giver én strøm i hver fase og intet i nullen.
4. Læg sammen pr. faseleder (rektangulær form), og regn tilbage til polær form.
5. Kontrol: I_L1 + I_L2 + I_L3 + I_N = 0.

**Tal du kan nævne:** opgavesæt 3, opgave 5: motoren på L1–L2, den induktive last på L1–N og varmelegemet på L3–N gav 12,2 / 7,2 / 10,9 A og en nulstrøm på kun 5,0 A, selv om lasterne tilsammen trækker over 24 A.

### Hvor skal en 1-faset last sidde?

**Pointe:** for mindst nulstrøm skal en ny 1-faset last sidde på den fase, hvor dens strøm peger mest modsat den eksisterende nulstrøm. For jævn belastning af faserne skal den sidde på den mindst belastede fase.

### Hvorfor er nulstrømmen vigtig?

En for stor nulstrøm kan overbelaste nullederen, som ofte ikke er sikret. Ikke-lineære laster (LED, PC, frekvensomformere) laver 3. harmoniske, der lægges sammen i nullen.

## 3 · Det du skal kunne tegne

1. Forbindelsesskemaet med L1, L2, L3, N og de tre laster tegnet ind.
2. Vektordiagrammet: fasespændingerne og netspændingstrekanten, hver lasts strøm, faselederstrømmene spids til hale og nulstrømmen.
3. Målestok for strømme og spændinger.

<details markdown="1"><summary>Tjek din tegning af opgave 5</summary>

Motorens strøm ligger næsten langs U_1N (−2,9°) i L1 og modsat i L2 (177°). Den induktive last ligger på −49,5°. Varmelegemet ligger på 120° langs U_3N. I_L1 er summen af motor og induktiv last (12,2 A ∠ −24°). I_N er 5,0 A.
</details>

## 4 · Spørgsmål du kan forvente

<details markdown="1"><summary>Hvad er forskellen på en usymmetrisk last med og uden nul?</summary>

Med nul ligger stjernepunktet fast, hver 1-faset last får 230 V, og nullen fører differensstrømmen. Uden nul flytter stjernepunktet sig, og spændingerne over lasterne bliver forskellige (tema 7).
</details>

<details markdown="1"><summary>Hvorfor ligger strømmen fra en resistiv last mellem L1 og L2 på 30°?</summary>

Fordi den følger netspændingen U_12, som ligger 30° foran U_1N.
</details>

<details markdown="1"><summary>Hvordan kan du kontrollere dine fasestrømme med en tang?</summary>

Tang om L1 + L2 + L3 skal vise det samme som tang om N. Tang om alle fire ledere skal vise 0.
</details>

<details markdown="1"><summary>Hvad sker der, hvis nullen knækker i en installation med usymmetrisk last?</summary>

Lasterne mellem fase og nul sidder nu i serie mellem faserne. Stjernepunktet flytter sig, og den let belastede fase kan få op mod 400 V.
</details>

## 5 · Faldgruber

- P brugt i stedet for S til at finde strømmen.
- Vinklen på en 2-faset last sat til fasespændingens vinkel i stedet for netspændingens.
- Fortegnet glemt for den 2-fasede last i den anden faseleder.
- Strømme lagt sammen som tal.
- Fortegn på φ forkert (induktiv: strømmen efter).

<div class="genkald" markdown="1">
### Huskekort: emnet på ét minut

<details markdown="1"><summary>Vis huskekortet</summary>

I et 4-ledernet hænger der 1-fasede laster mellem fase og nul, 2-fasede mellem to faser og 3-fasede på alle tre. Hver lasts strøm har vinklen fra den spænding, den sidder på, minus φ. Netspændingerne ligger 30° foran fasespændingerne. Med Kirchhoffs strømlov er strømmen i hver faseleder vektorsummen af lastens strømme, og en 2-faset last tæller med plus i den ene og minus i den anden. Nullen fører kun de 1-fasede strømmes sum tilbage: I_N = −(I_L1 + I_L2 + I_L3). Ved at vælge den rigtige fase til hver last kan man holde nulstrømmen og ubalancen nede.
</details>
</div>
