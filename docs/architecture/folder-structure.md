# Folder Structure

Arsitektur folder mengikuti pola Next.js App Router yang disederhanakan:
* `app/`: Berisi `page.tsx`, `layout.tsx` dan `actions/` (untuk Server Actions).
* `components/`: Berisi semua komponen UI terpisah (termasuk shadcn/ui components).
* `lib/`: Berisi konfigurasi eksternal, khususnya `supabase/`.
* `types/`: Berisi interface TypeScript dan deklarasi tipe data.
* `docs/`: Sebagai source of truth untuk dokumentasi project.
