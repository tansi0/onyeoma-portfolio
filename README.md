# Chukwubuonyeoma Ajufo — Portfolio

A minimal React + Vite portfolio for software, systems, AI and security engineering work.

## Run locally

Requirements:
- Node.js 20.19+ or 22.12+
- npm
- Git

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` creates the production output in `dist/`.

## Main files to edit

- `src/config/site.js` — name, email, GitHub, LinkedIn, CV toggle
- `src/data/work.js` — work history
- `src/data/projects.js` — project content
- `src/index.css` — design
- `public/` — favicon and optional `resume.pdf`

## Add your CV

1. Export the CV you want recruiters to download as a PDF.
2. Rename it to `resume.pdf`.
3. Place it in `public/resume.pdf`.
4. Set `showResume: true` in `src/config/site.js`.

## Netlify

This repo includes `netlify.toml`.

Netlify settings:
- Build command: `npm run build`
- Publish directory: `dist`
- Production branch: `main`

The redirect rule in `netlify.toml` prevents 404 errors when a visitor opens a React Router URL directly.

See `DEPLOYMENT_GUIDE.md` for the full process.
