# React + Vite


## Project review

This is a small React single-page application scaffolded with Vite that discovers and displays anime data from the Jikan (MyAnimeList) API.

### Technologies
- React (function components + hooks: useState, useEffect)
- Vite (dev server and build)
- react-router-dom (routing and <NavLink>)
- Tailwind-style utility classes for layout and styling (used in class names)
- Browser Fetch API for network requests

### How API fetching works
- Each data-driven component (for example `src/components/Anime.jsx` and `src/components/TopAnime.jsx`) performs its own fetch inside a `useEffect` hook.
- Pattern used:
	1. set local state: `const [data, setData] = useState([])` and `const [loading, setLoading] = useState(true)`
	2. call `fetch(url)` and check `response.ok`.
	3. parse JSON with `await response.json()` and update state: `setData(parsed.data)` and `setLoading(false)`.
	4. components render a loading message while `loading` is true and map the array to `MovieCard` elements when data is available.

### How the data is used in the UI
- The app uses a tab system (`TabButtons` + `DisplayData`) where `DisplayData` holds an array of component references (`[Anime, Manga, TopAnime]`) and renders the selected component by index: `const Selected = Data[activeTabIndex]; <Selected />`.
- Each selected component maps API results into card components (`MovieCard`) and shows images and titles (for example `anime.images.jpg.image_url` and `anime.title`).
- Navigation uses `NavLink` for top-level route navigation; ensure the app is wrapped in `BrowserRouter` and routes are defined with `<Routes>`/`<Route>`.

### Run locally
1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Open the address Vite reports (typically http://localhost:5173).

### Notes & small suggestions
- Import hooks explicitly: `import React, { useState, useEffect } from 'react'` (several files rely on this).
- Put the `key` prop on the outer element returned by `map` (you use `mal_id`, which is good).
- Prefer semantic `<button>` for tab controls for keyboard/accessibility instead of bare `<a onClick=...>`.
- Consider a small `useFetch` hook to centralize fetch/error/loading logic and show a friendly error UI when fetch fails.

If you want, I can add a short `useFetch` hook and refactor one component as an example, or update the tab buttons to use `<button>` and keyboard handlers.

