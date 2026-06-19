# Supabase Configuration

## Source of Truth Hierarchy

Documentation
↓
Migration files
↓
Supabase database
↓
TypeScript types
↓
Application code

## MCP Usage & Schema Validation Workflow

MCP is available to inspect and validate the live database schema.

1. Read documentation.
2. Inspect the live database via MCP.
3. Create migration files.
4. Apply migrations.
5. Re-inspect database.

## Migrations

Sistem database tidak lagi menggunakan file `database.sql` mandiri sebagai source of truth utama. Pendekatan utama sekarang adalah menggunakan file migrasi pada direktori:
`supabase/migrations/`

Contoh: `supabase/migrations/0001_create_tasks_table.sql`

File `database.sql` dapat dibiarkan sebagai referensi, namun **migrations are authoritative**.

## Client / Server Config
Ditempatkan di dalam folder `lib/supabase/`.
- `client.ts`: Digunakan oleh client components jika diperlukan.
- `server.ts`: Digunakan oleh Server Components dan Server Actions.
- `types.ts`: TypeScript definition hasil generate dari database.

## Schema
Tabel utama: `tasks`.
Environment variables yang dibutuhkan:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
