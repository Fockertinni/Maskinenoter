# Maskinenoter.dk

Mine noter og interaktive modeller fra maskinmesteruddannelsen. Siden er ren HTML, CSS og JavaScript uden build-trin, og den hostes på GitHub Pages på maskinenoter.dk (se `CNAME` og `.nojekyll`).

## Sådan er siden bygget op

- `index.html` er hele siden. Den skifter skærm via adressen:
  - `#m5` er et semester
  - `#m5-el2` er et fag
  - `#m5-el2-trefaset` er et emne
  - `#m5-quiz` og `#m5-el2-quiz` er samlede quizzer (pladsholdere indtil videre)
- Alt indhold står i listen `SEMESTRE` øverst i scriptet i `index.html`.
- `modeller/el2/` indeholder EL2-labsene:
  - `lab1.html` til `lab8.html` er de guidede simulatorer. `?vis=sim` tilføjer en tilbage-knap til forsiden.
  - `lab1-noter.html` til `lab8-noter.html` indeholder noter (med modellerne inde i teksten), forståelse og quiz. Med `?vis=noter`, `?vis=forstaa` eller `?vis=test` vises kun den del.
  - Gamle links som `lab1.html#noter` eller `lab1.html?vis=test` sendes automatisk videre til noter-filen.
  - `index.html` er oversigten over alle otte øvelser.

## Tilføj et emne

Find faget i `SEMESTRE`, og tilføj én post til dets `emner`:

```js
{ id: "isolation", navn: "Isolation", ikon: "el",
  intro: "Et par sætninger om emnet.",
  dele: {
    noter: "noter/el2/isolation.html",
    formler: null,
    simulation: null,
    modeller: null,
    forstaaelse: null,
    quiz: null,
  } },
```

- `id` må kun indeholde små bogstaver og tal (ingen bindestreg). Den bliver en del af adressen.
- Kun de dele, der har et link, bliver vist som felter. `null` betyder, at delen ikke findes endnu.
- Et emne uden nogen dele vises som et nedtonet felt.
- Til EL2-labs findes genvejen `el2Lab(n)`, som giver alle dele for lab nr. n.

## Tilføj et fag

Tilføj én post til semestrets `fag`:

```js
{ id: "pa1", navn: "Procesanalyse og automation 1", ikon: "auto",
  laeringsmaal: "https://...",   // valgfri
  quiz: null,                    // link til en samlet quiz for faget, eller null
  emner: [] },
```

Et fag uden emner vises nedtonet og kan ikke åbnes. Det bliver aktivt, så snart det får sit første emne.

## Tilføj et semester

Tilføj én post til `SEMESTRE`, fx `{ n: 10, quiz: null, fag: [ ... ] }`. `NU` øverst angiver det semester, der er markeret i semesterbaren.

## Ikoner

Brug en af nøglerne i `IKON`:

- Fag: `el`, `energi`, `motoranlaeg`, `auto`, `oekonomi`, `ledelse`, `studie`, `vaerksted`, `praktik`, `koel`
- Emner: `trefase`, `generator`, `motor`, `jord`, `transformer`, `kortslutning`, `synkron`, `frekvens`

Vil du have et nyt ikon, så tilføj en linje til `IKON` med SVG-stier i et 24×24-gitter.
