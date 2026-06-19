# TECH_STACK.md

## Frontend

* Next.js 15
* TypeScript strict mode
* TailwindCSS v4
* shadcn/ui
* installed shadcn/ui skills

## Backend

* Server Actions

## Database Tooling

* Supabase PostgreSQL
* Supabase MCP
* Supabase migrations

## Validation

* Zod

## Notification

* Sonner

## Utilities

* date-fns

## Icons

* lucide-react

## Deployment

* Vercel

---

## Forbidden Technologies

* Redux
* Zustand
* MobX
* Prisma
* Drizzle
* MongoDB
* React Query
* tRPC
* Express
* Axios

### Why they are intentionally not used:
* **Redux, Zustand, MobX**: The application state is simple enough to rely on Server Components, Server Actions, `useOptimistic`, and `useTransition`.
* **Prisma, Drizzle**: We use Supabase PostgreSQL directly, keeping the database layer simple and utilizing Supabase clients.
* **MongoDB**: We use a relational database structure with PostgreSQL.
* **React Query, tRPC**: Next.js Server Actions and Server Components provide built-in data fetching and mutations without needing external data fetching libraries.
* **Express**: We use the Next.js App Router and Server Actions.
* **Axios**: We use the native `fetch` API.
