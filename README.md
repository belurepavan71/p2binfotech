# P2B Infotech — Company Portfolio Website

A Next.js 14 (App Router) + Tailwind CSS site for **P2B Infotech**, a startup
offering IaaS, PaaS, SaaS and e-commerce platforms for fintech, edtech and
healthcare companies — plus a database-backed **Careers** section with a
password-protected admin panel for managing job openings.

## What's included

- Animated marketing site: header, hero, about, vision, services, industries,
  products, team, client feedback carousel, contact, footer
- **`/careers`** — public job listings pulled live from a database
- **`/admin`** — username/password-protected dashboard to add, edit,
  publish/unpublish and delete job openings
- PostgreSQL database via **Prisma**
- Gradient brand system (teal → violet) used on CTAs and the Vision section

## 1. Install Node.js

You need **Node.js 18.18 or newer**. Check with:
```bash
node -v
```

## 2. Get a PostgreSQL database

The easiest free options (either works, and both give you a connection
string that works for local development *and* production):

- **[Neon](https://neon.tech)** — sign up, create a project, copy the
  connection string it gives you.
- **[Vercel Postgres](https://vercel.com/storage/postgres)** — if you'll
  deploy on Vercel anyway, you can create this from your Vercel dashboard
  and it wires up the environment variable for you automatically.

Either way you'll end up with a connection string that looks like:
```
postgresql://user:password@host/dbname?sslmode=require
```

## 3. Configure environment variables

1. Unzip this project and open a terminal in the project folder.
2. Copy the example env file:
   ```bash
   cp .env.example .env
   ```
3. Open `.env` and fill in:
   - `DATABASE_URL` — the connection string from step 2
   - `AUTH_SECRET` — any long random string (generate one with
     `openssl rand -base64 32`, or just mash the keyboard)
   - `ADMIN_USERNAME` / `ADMIN_PASSWORD` — the login you'll use for `/admin`
     the first time you seed the database

## 4. Install, set up the database, and run

```bash
npm install
npx prisma db push      # creates the Job and AdminUser tables
npm run db:seed         # creates your admin account + sample job listings
npm run dev
```

Open **http://localhost:3000** for the site, and
**http://localhost:3000/admin** to manage job openings (sign in with the
`ADMIN_USERNAME` / `ADMIN_PASSWORD` you set in `.env`).

> Changing the admin password later: there's no in-app "change password"
> screen yet. Update `ADMIN_PASSWORD` in `.env` and re-run `npm run db:seed`
> — it updates the existing account rather than creating a duplicate.

## Project structure

```
app/
  page.js                 # homepage — assembles all sections
  careers/page.js          # public job listings (reads from DB)
  careers/[slug]/page.js   # public job detail + apply
  admin/page.js            # admin dashboard (protected)
  admin/login/page.js      # admin login
  admin/jobs/new/page.js   # add job form
  admin/jobs/[id]/edit/    # edit job form
components/
  Header.js, Footer.js, Logo.js
  Hero.js, About.js, Vision.js, Services.js, Domains.js,
  Products.js, Team.js, Testimonials.js, Contact.js
  admin/JobForm.js, admin/JobRowActions.js
lib/
  prisma.js                # Prisma client
  auth.js                  # session token sign/verify (jose)
  actions/auth.js          # login/logout server actions
  actions/jobs.js          # job create/update/delete/publish server actions
prisma/
  schema.prisma            # Job + AdminUser models
  seed.js                  # creates admin user + sample jobs
middleware.js               # protects /admin routes
```

## Editing content

Marketing-page copy lives in small arrays at the top of each component file
(e.g. `SERVICES` in `Services.js`, `TEAM` in `Team.js`, `FEEDBACK` in
`Testimonials.js`) — edit those to change text without touching layout code.

Job openings are **not** edited in code — add, edit, publish/unpublish and
delete them from `/admin` once the app is running.

Brand colors and fonts are defined once in `tailwind.config.js`
(`theme.extend.colors` / `fontFamily`), and the gradient system lives in
`app/globals.css` (`.bg-gradient-brand`, `.text-gradient-brand`,
`.bg-mesh-brand`) — change those in one place to restyle the whole site.

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Add the same environment variables from your `.env` file in the Vercel
   project settings (**Settings → Environment Variables**):
   `DATABASE_URL`, `AUTH_SECRET`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`.
   - If you used Vercel Postgres, `DATABASE_URL` is added automatically.
5. Click **Deploy**.
6. After the first deploy, run the database setup once against your
   production database (from your local machine, with `.env` pointed at the
   production `DATABASE_URL`):
   ```bash
   npx prisma db push
   npm run db:seed
   ```

Alternatively, from the project folder:
```bash
npm i -g vercel
vercel
```
and follow the prompts.

## Build for production (optional check)

```bash
npm run build
npm run start
```

## Useful commands

```bash
npm run db:studio   # opens Prisma Studio — a GUI to browse/edit your data
npm run db:push     # applies schema changes to the database
npm run db:seed     # (re-)creates the admin account and sample jobs
```
