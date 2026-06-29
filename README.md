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
  api/             # route handlers
  page.tsx          # homepage
  auth.ts            # handles next-auth
  layout.tsx        # root layout (fonts, analytics)
  globals.css        # Tailwind theme + global styles
lib/
  prisma.ts         # Prisma client singleton
components/          # UI pieces (Navbar, HeroBanner, ProblemRow, CategoryCard, ...)
prisma/
  schema.prisma      # database models (User, Post, Problem, Category, Tag)
  seed.ts            # seeds prisma db
public/              # icons imgs
types/
  index.ts          # types and interfaces
```

---

## Getting started

### 1. Clone the repo
```bash
git clone https://github.com/pushAbhi/ProblemRank
cd problemrank
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your database and keys
Create a `.env` file in the root
Fill in the keys (DATABASE_URL + others).

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
