# Product Requirement Document (PRD)

## Project Name

Tasker Development Notes

---

# 1. Overview

Aplikasi internal sederhana untuk mencatat progres pengembangan Project Tasker. Sistem digunakan sebagai task board untuk mendokumentasikan:

* Bug yang ditemukan
* Penyesuaian (Adjust)
* Temuan (Findings)

Tidak memerlukan autentikasi/login dan hanya terdiri dari satu halaman.

---

# 2. Objectives

* Mempermudah pencatatan perkembangan project.
* Memisahkan task berdasarkan kategori.
* Memisahkan task yang masih dikerjakan (Ongoing) dan yang sudah selesai (Done).
* Menyediakan tampilan sederhana dan cepat untuk kebutuhan internal.

---

# 3. Tech Stack

### Frontend

* Next.js 15
* TypeScript (strict mode)
* TailwindCSS v4
* shadcn/ui
* installed shadcn/ui skills

### Backend

* Next.js Server Actions

### Additional Tools

* Zod (Validation)
* Sonner (Notification)
* date-fns (Date formatting)
* lucide-react (Icons)

### Database

* Supabase PostgreSQL

### Deployment

* Vercel

---

# 4. Scope

## Tanpa Authentication

* Tidak ada login.
* Semua user dapat melihat dan mengelola task.

---

# 5. Main Page

Aplikasi hanya memiliki:

```
/
```

Seluruh fitur berada dalam satu halaman.

---

# 6. Task Status

Task memiliki dua status:

### Ongoing

Task yang masih dikerjakan.

### Done

Task yang sudah selesai atau sudah terimplementasi.

Task yang dicentang (checkbox) otomatis berpindah ke tab Done.

Task yang di-uncheck akan kembali ke tab Ongoing.

---

# 7. Categories

Terdapat 3 kategori:

## 1. Bugs

Prioritas paling atas.

Contoh:

* Error pada API
* Query lambat
* Validasi gagal

Warna card:

* Merah

---

## 2. Adjust

Perubahan atau penyesuaian fitur.

Contoh:

* Ubah UI dashboard
* Rename field
* Perbaikan layout

Warna card:

* Biru

---

## 3. Findings

Catatan atau insight yang ditemukan selama development.

Contoh:

* Potensi optimasi query
* Catatan integrasi API
* Improvement idea

Warna card:

* Hijau

---

# 8. Layout

## Header

```
Tasker Development Notes
```

---

## Switch Tabs

Menggunakan Tabs:

```
[ Ongoing ] [ Done ]
```

Default:

```
Ongoing
```

---

## Section Order

Urutan section wajib:

### Bugs

(card merah)

### Adjust

(card biru)

### Findings

(card hijau)

---

# 9. Task Card

Setiap task card berisi:

### Title

Judul task.

Contoh:

```
Fix pagination bug
```

### Description

Penjelasan singkat.

Contoh:

```
Pagination tidak update ketika filter berubah.
```

### Category

Enum:

```ts
type Category =
  | "bugs"
  | "adjust"
  | "findings";
```

### Status

Enum:

```ts
type Status =
  | "ongoing"
  | "done";
```

### Checkbox

* Checked → status menjadi Done.
* Unchecked → status kembali menjadi Ongoing.

### Timestamp

Menampilkan:

* Created At
* Updated At

---

# 10. CRUD Features

## Create Task

User dapat menambahkan:

* Title
* Description
* Category

Default status:

```
ongoing
```

---

## Read Task

Menampilkan daftar task berdasarkan:

* Tab aktif (Ongoing / Done)
* Kategori

---

## Update Task

User dapat mengubah:

* Title
* Description
* Category

Field updated_at otomatis berubah.

---

## Delete Task

Task dapat dihapus secara permanen.

Sebelum delete tampilkan dialog konfirmasi.

---

# 11. Database Schema

Table:

```sql
tasks
```

Columns:

| Column      | Type        |
| ----------- | ----------- |
| id          | uuid        |
| title       | text        |
| description | text        |
| category    | text        |
| status      | text        |
| created_at  | timestamptz |
| updated_at  | timestamptz |

---

## SQL

```sql
create table tasks (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    description text,
    category text check (
        category in ('bugs','adjust','findings')
    ),
    status text default 'ongoing' check (
        status in ('ongoing','done')
    ),
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);
```

---

# 12. Components

## Header

```tsx
<Header />
```

## Tabs

```tsx
<Tabs />
```

## Section

```tsx
<BugSection />
<AdjustSection />
<FindingsSection />
```

## Task Card

```tsx
<TaskCard />
```

## Add Task Dialog

```tsx
<CreateTaskDialog />
```

## Edit Task Dialog

```tsx
<EditTaskDialog />
```

## Delete Alert Dialog

```tsx
<DeleteTaskDialog />
```

---

# 13. UI Flow

### Add Task

```
+ New Task
↓
Dialog
↓
Save
↓
Data tersimpan di Supabase
↓
Refresh list
```

---

### Complete Task

```
Checkbox
↓
Status = done
↓
Masuk tab Done
```

---

### Reopen Task

```
Uncheck
↓
Status = ongoing
↓
Kembali ke tab Ongoing
```

---

# 14. Non Functional Requirements

* Responsive desktop dan mobile.
* Menggunakan Server Actions.
* Loading state.
* Empty state jika belum ada task.
* Optimistic update.
* Toast notification (Sonner) untuk create, update, delete.
* Menggunakan shadcn/ui components dan lucide-react.
* Dark mode support.
* Codebase TypeScript strict mode.

---

# 15. Future Enhancement

* Search task.
* Filter berdasarkan kategori.
* Sort berdasarkan tanggal update.
* Priority level (Low, Medium, High).
* Attachment screenshot.
* Activity log.
* Multi-user authentication.
