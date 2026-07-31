# Heöfon — Archive of Radiance

A responsive React JSX lore encyclopedia built from the supplied **HEÖFON campaign primer** and the complete **Book of Sol**.

This remake is data-driven rather than a collection of short hardcoded summary pages. It currently includes:

- 34 searchable archive entries
- The complete seven-book, 140-verse Book of Sol
- Automatic cross-linking for names, places, institutions, ranks, festivals, and scripture
- Hover previews for lore links
- Deep links that open an article and scroll to a named section
- A global search overlay with `/` and `Ctrl/Cmd + K` shortcuts
- A category-filtered encyclopedia index
- Article infoboxes, generated contents lists, related entries, and source labels
- Responsive desktop, tablet, and mobile layouts
- WebP artwork extracted from the supplied Heöfon document

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

Create a production build with:

```bash
npm run build
```

## Important project files

```text
src/
├── components/
│   ├── Layout.jsx          Global navigation, mobile drawer, hash scrolling
│   ├── SearchDialog.jsx    Search across articles and all seven sacred books
│   ├── RichText.jsx        Automatically links known lore terms
│   ├── LoreLink.jsx        Link hover-preview card
│   └── ArticleCard.jsx     Reusable archive cards
├── data/
│   ├── articles.js         Main encyclopedia database
│   ├── bookOfSol.js        All 140 verses and book commentary
│   ├── linkIndex.js        Automatic term and deep-link targets
│   └── navigation.js       Sidebar navigation
├── pages/
│   ├── Home.jsx
│   ├── ArchiveIndex.jsx
│   ├── ArticlePage.jsx
│   └── BookOfSol.jsx
└── styles.css              Full site design and responsive layout
```

## Canon and expansion labels

Each article section carries a small source label:

- **Campaign Primer** — directly grounded in the supplied Heöfon document
- **Book of Sol** — grounded in the supplied sacred text
- **Archive Expansion** — newly written setting detail that expands the supplied material
- **Archive Interpretation** — a conclusion or implication drawn from established material
- **Textual Tension** — a comparison where the primer and scripture appear to conflict
- **Source Gap** — information intentionally left open because the source does not establish it

This keeps the site richly detailed without silently presenting every expansion as text copied from the documents.

## Add or edit an article

Articles live in `src/data/articles.js` and use this general structure:

```js
{
  slug: "crown-district",
  title: "The Crown District",
  category: "Places",
  summary: "Short card and search description.",
  aliases: ["Crown District"],
  hero: "/images/heofon-sky.webp",
  infobox: [
    ["Location", "Highest point of Heöfon"],
  ],
  sections: [
    {
      id: "overview",
      title: "Political, Religious, and Ceremonial Heart",
      source: "Campaign Primer",
      paragraphs: ["Full article text goes here."],
    },
  ],
  related: ["suns-palace", "temple-of-sol"],
}
```

The `slug` becomes the URL:

```text
/wiki/crown-district
```

The section `id` becomes a deep link:

```text
/wiki/crown-district#overview
```

## Add a name-specific deep link

Use `src/data/linkIndex.js` when a term should link to a section rather than an article root:

```js
"sunny lou raybeam": "/wiki/three-dawns#sunny-lou-raybeam"
```

Now any normal paragraph rendered through `RichText` turns that full name into a link that opens the Three Dawns article and scrolls to Sunny's section.

## Images

Place site art in `public/images/` and refer to it from article data as:

```js
hero: "/images/crown-district.webp"
```

Recommended source sizes:

- Page hero or location art: `1920 × 1080` or `1920 × 900`
- Character portraits: `1200 × 1600`
- General item, symbol, creature, or spell art: `1200 × 1200`
- Emblems with transparency: `1024 × 1024` PNG or SVG
- Maps intended for zooming: at least `3000 × 3000`

WebP is recommended for painted artwork, while PNG or SVG is better for transparent emblems and interface icons.
