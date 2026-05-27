# Personal Website

Scrapbook-style personal site built with Next.js, deployed to [kareenadoda.blog](https://kareenadoda.blog) via GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

Pushes to `main` automatically build and deploy via GitHub Actions.

1. Connect this folder to [kareenadoda/kareenadoda.github.io](https://github.com/kareenadoda/kareenadoda.github.io)
2. In the repo: **Settings → Pages → Build and deployment → Source**: set to **GitHub Actions**
3. Push to `main`

```bash
git remote add origin https://github.com/kareenadoda/kareenadoda.github.io.git
git push -u origin main
```

## Stack

- Next.js (static export) · TypeScript · Tailwind CSS · Framer Motion

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Build static site to `out/`    |
