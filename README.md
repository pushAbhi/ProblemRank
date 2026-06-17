# ProblemRank

A small web app where people can browse and rank real business problems (instead of jumping straight to "build a solution"). Built with Next.js, Tailwind, and Prisma + Postgres.

---

## Tech stack

- **Next.js 16** (App Router) — pages live in `app/`
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — styles via `app/globals.css`, no separate config file (v4 uses `@theme` in CSS)
- **Prisma 7** + **Postgres** — schema in `prisma/schema.prisma`, client generated to `app/generated/prisma`
- **lucide-react** — icons

## Project structure

```
app/
  components/      # UI pieces (Navbar, HeroBanner, ProblemRow, CategoryCard, ...)
  page.tsx          # homepage
  layout.tsx        # root layout (fonts, analytics)
  globals.css        # Tailwind theme + global styles
lib/
  prisma.ts         # Prisma client singleton
prisma/
  schema.prisma      # database models (User, Post, Problem, Category, Tag)
public/
  logo.svg
```

---

## Getting started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd problemrank
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your database
You need a Postgres database. Create a `.env` file in the root:
```
DATABASE_URL="postgresql://user:password@host:port/dbname"
```
(`prisma.config.ts` and `lib/prisma.ts` both read this.)

### 4. Generate the Prisma client and push the schema
```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---
