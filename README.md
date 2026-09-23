# Benson Maina — Portfolio

A modern, dark-themed developer portfolio built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, ready to deploy to Netlify, Vercel,
GitHub Pages, or any static host.

## Project structure

```
src/
├── components/     # One component per section (Navbar, Hero, About, ...)
├── data/           # Content arrays — edit these instead of the components
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   └── services.js
├── hooks/
│   └── useReveal.js   # Scroll-reveal animation hook
├── App.jsx
├── App.css          # All component styles + design tokens
├── index.css         # Reset + base styles
└── main.jsx
```

## What to customize before going live

- **Projects** — `src/data/projects.js`. Replace the `github` and `demo`
  URLs with your real links. Set `demo: null` to hide the Live Demo button
  for a project that isn't deployed yet. Add new projects by adding new
  objects to the array — the grid and filters update automatically.
- **GitHub links** — currently point to `github.com/bensonmaina` in
  `Hero.jsx`, `Contact.jsx`, `Footer.jsx`, and `GitHubSection.jsx`. Update
  these once your GitHub username is finalized.
- **Contact form** — `src/components/Contact.jsx` validates and shows a
  confirmation message, but doesn't send email yet since there's no
  backend. Connect it to a service like
  [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com)
  by replacing the `handleSubmit` function.
- **Skills / Services / Experience** — edit the corresponding files in
  `src/data/`.

## Notes

- Skill levels in `src/data/skills.js` are on a simple 1–5 scale used only
  to size the progress bars — not percentages.
- The contact phone number and email in `Contact.jsx` and `Hero.jsx` are
  already set to the ones you provided.
