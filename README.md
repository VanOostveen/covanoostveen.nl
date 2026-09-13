# covanoostveen.nl

Persoonlijke site: noten over rechtspraak, essays, bouwlogboek en publicatielijst. Statisch, uit markdown, zonder JavaScript, cookies of statistieken.

## Lokaal

```
npm install
npm run dev       # http://localhost:4321, toont ook concepten
npm run build     # naar dist/, concepten weggelaten
npm run preview
```

## Een stuk toevoegen

Maak een bestand in `src/content/stukken/`. De bestandsnaam wordt de URL (`hr-10a-renteaftrek.md` wordt `/noten/hr-10a-renteaftrek/`). Sjablonen staan in `sjablonen/`.

```yaml
---
titel: Hoge Raad verlaat de lijn van 2019 bij art. 10a
datum: 2026-09-20
type: noot            # noot | essay | werk | publicatie
samenvatting: Eén zin voor lijsten, zoekmachines en RSS.
ecli: ECLI:NL:HR:2026:1234
instantie: Hoge Raad
uitspraakdatum: 2026-09-12
concept: true         # weglaten of false zodra het gepubliceerd mag worden
---
```

Optioneel: `taal: en`, `genummerd: false` (noten zijn standaard genummerd, de rest niet), `canonical: https://...` als de canonieke versie elders staat, en bij type `publicatie` een blok `extern` met `bron`, `url` en `volledigeTekstVanaf`.

Committen en pushen naar `main` is publiceren; de workflow in `.github/workflows/deploy.yml` bouwt en zet de site live.

## Naam, functie en links

Staan op één plek: `src/data/profiel.ts`. Vul daar LinkedIn, e-mail en de opleidingslijst in.

## Eerste keer online zetten

1. Repo aanmaken op GitHub en pushen.
2. Settings, Pages, Source: GitHub Actions.
3. Bij de registrar van covanoostveen.nl: vier A-records voor de apex naar 185.199.108.153, 185.199.109.153, 185.199.110.153 en 185.199.111.153, en een CNAME voor `www` naar `vanoostveen.github.io`. Controleer de adressen in de GitHub-documentatie voordat je ze invoert.
4. Settings, Pages, Custom domain: covanoostveen.nl, en "Enforce HTTPS" aanzetten zodra het certificaat er is.

## Wat de build maakt

- `/feed.xml` en per sectie `/noten/feed.xml`, `/essays/feed.xml`, `/werk/feed.xml`, `/publicaties/feed.xml`
- `/sitemap-index.xml`
- JSON-LD (Article, Person, WebSite) en een canonical-link op elke pagina
- Alineanummers met ankers (`#al-3`) op elke noot
