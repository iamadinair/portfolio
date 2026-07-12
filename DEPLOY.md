# Deploying to Cloudflare Pages

Two ways to do this: through GitHub, recommended since it auto-deploys on every push,
or a direct upload with no GitHub involved. Both are free on Cloudflare's plan.

## Option A - Git-connected (recommended)

1. **Push this project to a GitHub repo.**
   ```bash
   cd aditya-nair-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   gh repo create aditya-nair-portfolio --public --source=. --push
   ```
   (No `gh` CLI? Create an empty repo on github.com, then:
   `git remote add origin <your-repo-url>` and `git push -u origin main`.)

2. **Connect it in Cloudflare.**
   - Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
   - Authorize GitHub and pick the `aditya-nair-portfolio` repo.

3. **Build settings**, Cloudflare should auto-detect Astro, but confirm:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`

4. Click **Save and Deploy**. First build takes 1–2 minutes. You'll land on a
   `*.pages.dev` URL immediately.

5. **Every future `git push` to `main` auto-redeploys.** No extra steps.

## Option B - Direct upload (no GitHub)

1. Build locally:
   ```bash
   npm install
   npm run build
   ```
2. In the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Upload assets**.
3. Drag in the `dist/` folder.
4. Done, you get a `*.pages.dev` URL. Re-upload `dist/` manually whenever you
   want to update the live site.

## Custom domain (e.g. adityanair.dev)

1. Buy the domain (Cloudflare Registrar, Namecheap, etc., doesn't matter where).
2. In your Pages project → **Custom domains** → **Set up a custom domain**.
3. Enter your domain. If it's already on Cloudflare DNS, the CNAME is added
   automatically. If it's registered elsewhere, either:
   - move DNS to Cloudflare (free, and the easiest path), or
   - add the CNAME record Cloudflare gives you at your current registrar,
     pointing your domain (or a subdomain like `www`) at
     `aditya-nair-portfolio.pages.dev`.
4. SSL certificate is issued automatically, usually live within minutes.

## Updating the site later

- Edit whatever you need in `src/data/*.js`.
- Git-connected setup: commit and push, Cloudflare rebuilds automatically.
- Direct upload setup: run `npm run build` again and re-upload `dist/`.
