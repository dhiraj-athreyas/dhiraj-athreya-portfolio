# Dhiraj Athreya — AI/ML Engineer Portfolio

This is a static Vite + React + TypeScript portfolio designed as a **Stealth Systems Console**. It is prepared for Vercel and stores all of its visual assets inside `client/public/portfolio-assets`, so the published site is independent of the original development environment.

## Deploy to Vercel

1. Sign in to [Vercel](https://vercel.com) using the same GitHub account.
2. Select **Add New → Project** and import `dhiraj-athreya-portfolio`.
3. Leave the detected framework as **Vite**. The included `vercel.json` provides the correct install command, build command, and output directory.
4. Click **Deploy**. Vercel will create a production URL under `vercel.app`.

## Future edits

Update the source files, commit the change, and push to GitHub. Vercel will automatically create a preview deployment for branch updates and publish changes pushed to the production branch (normally `main`).

```bash
git add .
git commit -m "Describe the portfolio update"
git push origin main
```

### Main content locations

| Purpose | Location |
| --- | --- |
| Portfolio projects, roles, metrics, stack | `client/src/data/portfolio.ts` |
| Page structure and sections | `client/src/pages/Home.tsx` |
| Main visual system | `client/src/index.css` |
| Portrait hero treatment | `client/src/pages/Home.portrait.css` |
| Images and logo | `client/public/portfolio-assets/` |

## Local development

Install dependencies and start the development server with:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Use `pnpm check` for type checking and `pnpm build` to create the production output.
