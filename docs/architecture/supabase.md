# Supabase Configuration

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
