# Heöfon — Archive of Radiance

A responsive React JSX lore-wiki starter built from the Heöfon campaign document.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Important files

- `src/data/lore.js` — central navigation and automatic lore-link dictionary.
- `src/components/AutoLoreText.jsx` — converts known lore terms into links.
- `src/components/Layout.jsx` — fixed desktop navigation and mobile drawer.
- `src/pages/` — individual wiki pages and anchor sections.
- `src/styles/global.css` — complete visual theme and responsive styling.

## Deep links

Use ordinary React Router links with hashes:

```jsx
<Link to="/three-dawns#sunny">Sunny Lou Raybeam</Link>
```

The layout automatically scrolls to the matching section after navigation.

## Add a new automatic lore term

Add it to `linkMap` in `src/data/lore.js`:

```js
'king’s tree': { to: '/governance#kings-tree' }
```

Then wrap lore paragraphs with `<AutoLoreText>`.
