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

## Feature comments (optional)

The **Geek Out → Features** section can accept anonymous or named comments via [Supabase](https://supabase.com) (no sign-in). New comments stay hidden until you approve them in the Supabase dashboard.

1. Create a free Supabase project.
2. In **SQL Editor**, run the script in [`supabase/feature_comments.sql`](supabase/feature_comments.sql).
3. Copy `.env.example` to `.env.local` and add your project URL + **anon** public key.
4. For production, add the same two values as GitHub repo **Settings → Secrets and variables → Actions**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. To publish a comment: **Table Editor → feature_comments →** set `approved` to `true`.

Without those env vars, the comment block is hidden and the rest of the site works as before.

## Stack

- Next.js (static export) · TypeScript · Tailwind CSS · Framer Motion · Supabase (comments)

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Build static site to `out/`    |
