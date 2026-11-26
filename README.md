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
- `noter/pa1/` indeholder emnerne til Procesanalyse og automation 1. Hver fil (fx `plc.html`) har tre dele: Noter (med modellerne inde i teksten), Forståelse og Quiz. Med `?vis=noter`, `?vis=forstaa` eller `?vis=test` vises kun den del. Fælles stil og værktøjer ligger i `pa1.css` og `pa1.js`. Genvejen `pa1("plc")` i `index.html` giver alle tre dele.

## Driftsøkonomi, Forbrændingsmotoranlæg og Elektroteknik 2

- `noter/drift/`, `noter/forb/` og `noter/el2/` er bygget af scriptet `noter/kilde/byg.py` ud fra markdown-filerne i `noter/kilde/drift/`, `noter/kilde/forb/` og `noter/kilde/el2/`. Ret altid i markdown-filen og kør `python3 noter/kilde/byg.py` (kræver `pip install markdown`). De færdige HTML-filer ligger i repoet, så siden stadig ikke har noget build-trin.
- Hver emnefil har tre dele: Noter, Formler og Quiz. Med `?vis=noter`, `?vis=formler` eller `?vis=quiz` vises den del. `noter/<fag>/quiz.html` er en samlet quiz for hele faget.
- Øverst i hver markdown-fil står `id`, `navn`, `ikon` og `intro`. Under `# Quiz` står spørgsmålene i et lille format, der er forklaret øverst i `byg.py`.
- EL2-noterne har interaktive modeller inde i teksten. I markdown skrives fx `<div class="m" data-m="stjerne"></div>`, og `noter/el2/modeller.js` tegner modellen. Listen over modeller står i den fil.
- Genvejen `emne("drift", "budget")` i `index.html` giver alle tre dele. Skriv `emne("forb", "smoering", false)`, hvis emnet ikke har formler.

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
- Delen `eksamen` ("Alt du skal bruge til eksamen") er en eksamensside for emnet, fx `noter/el2/trefaset-eksamen.html`, bygget af byg.py fra `noter/kilde/el2/01b-trefaset-eksamen.md`. Den vises først på emnesiden.
- Til EL2-emner med labøvelse findes genvejen `el2Lab(n, "id")`. Den giver teorinoter, formler og quiz fra `noter/el2/<id>.html` og labnoter, simulation og forståelse fra lab nr. n.

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
- Emner: `trefase`, `generator`, `motor`, `jord`, `transformer`, `kortslutning`, `synkron`, `frekvens`, `plc`, `relae`, `ladder`, `sekvens`, `timer`, `sikkerhed`

Vil du have et nyt ikon, så tilføj en linje til `IKON` med SVG-stier i et 24×24-gitter.

## Havbaggrund på alle sider
Alle undersider (noter, formler, labnoter, simulation, forståelse, quiz) henter `hav.css` fra roden, så de har samme mørke vandbaggrund som forsiden. En ny side skal have denne linje lige efter `<title>`:

```html
<link rel="stylesheet" href="../../hav.css"><script>document.documentElement.dataset.theme="dark"</script>
```

Skabelonen `noter/kilde/skabelon.html` har den allerede.

## Skjult indhold og gennemsyn
Øverst i datadelen af `index.html` står `const FRIGIVET = [...]`. Kun de dele, der står der, vises på den live side. Lige nu er alle dele frigivet. Fjern en del fra listen for at skjule den igen.

- Frigiv en del for alle emner: tilføj den i `FRIGIVET`, fx `["simulation", "noter"]`.
- Frigiv dele for ét emne: skriv `frigivet: ["noter", "quiz"]` på emnet i `SEMESTRE`.
- Frigiv quizzen for et helt fag: skriv `frigivet: ["quiz"]` på faget.
- Se alt, også det skjulte: åbn `https://maskinenoter.dk/?gennemse`. Browseren husker det, til du trykker "Slå fra" eller åbner `?gennemse=nej`.

Bemærk: de skjulte filer ligger stadig på serveren, så den der kender den præcise adresse, kan åbne dem. De er bare ikke linket fra siden.
