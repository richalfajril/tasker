# Folder Structure

Arsitektur folder mengikuti pola Next.js App Router yang digabungkan dengan **Feature-Sliced / Domain-Based Structuring**:

* `app/`: Berisi `page.tsx` (Single Page Application), `layout.tsx`, dan `actions/` (untuk Server Actions murni).
* `components/`: Dibagi berdasarkan domain/fitur.
  * `tasks/`: Semua komponen spesifik untuk fitur Tasks (TaskBoard, dialogs, dsb).
  * `common/`: Komponen *reusable* yang bukan dari shadcn (misal: DatePicker khusus).
  * `ui/`: Komponen fundamental murni dari instalasi `shadcn/ui`.
* `lib/`: Berisi konfigurasi eksternal, khususnya *client* dan *server* `supabase/`.
* `types/`: Berisi interface TypeScript (seperti `Task`).
* `docs/`: Sebagai *source of truth* untuk seluruh dokumentasi project.
