# Documentation Rules

## Purpose

Seluruh requirement dan spesifikasi project wajib terdokumentasi di dalam folder:

```txt
docs/
```

Folder ini menjadi source of truth untuk pengembangan project.

---

# Main PRD

Buat file utama:

```txt
docs/prd.md
```

File ini berisi:

* overview project
* objective
* scope
* tech stack
* database
* deployment
* feature list
* success criteria

File ini bersifat high-level.

---

# Split PRD Into Feature Documents

Setelah membuat:

```txt
docs/prd.md
```

PRD wajib dipecah menjadi file-file kecil berdasarkan fitur.

Struktur:

```txt
docs/

├── prd.md
│
├── features/
│
│   ├── task-management.md
│   ├── task-status.md
│   ├── task-categories.md
│   ├── tabs-ongoing-done.md
│   ├── create-task.md
│   ├── update-task.md
│   ├── delete-task.md
│   ├── toggle-task.md
│   ├── ui-layout.md
│   ├── database-schema.md
│   └── server-actions.md
│
├── architecture/
│
│   ├── folder-structure.md
│   ├── component-structure.md
│   ├── supabase.md
│   └── deployment.md
│
├── stack/
│
│   ├── frontend.md
│   ├── backend.md
│   ├── database.md
│   ├── validation.md
│   └── deployment.md
│
└── decisions/
    ├── no-authentication.md
    ├── single-page.md
    └── use-server-actions.md
```

---

# Feature Files

Setiap fitur HARUS memiliki file markdown sendiri.

Contoh:

```txt
docs/features/create-task.md
```

Isi:

* purpose
* user flow
* requirements
* validations
* edge cases
* UI behavior
* acceptance criteria

---

# File Template

Setiap file feature mengikuti format:

```md
# Feature Name

## Purpose

...

## User Flow

...

## Requirements

...

## Validation

...

## Edge Cases

...

## UI Behavior

...

## Acceptance Criteria

...
```

---

# Architecture Documents

Semua keputusan arsitektur harus berada di:

```txt
docs/architecture/
```

Contoh:

### folder-structure.md

Berisi:

* app/
* components/
* lib/
* types/

### component-structure.md

Berisi hubungan antar komponen.

### supabase.md

Berisi:

* schema
* env variables
* client/server configuration

### deployment.md

Berisi:

* Vercel
* environment variables
* build command

---

# Decisions Folder

Semua keputusan penting harus dibuat menjadi ADR sederhana.

Lokasi:

```txt
docs/decisions/
```

Contoh:

## no-authentication.md

Reason:

Project internal dan sederhana.

Decision:

Tidak menggunakan auth.

---

## single-page.md

Reason:

Scope kecil.

Decision:

Semua fitur berada pada route:

```txt
/
```

---

## use-server-actions.md

Reason:

Mengurangi API boilerplate.

Decision:

Menggunakan Next.js Server Actions.

---

# Update Rules

SETIAP kali menambahkan fitur baru:

1. Update:

```txt
docs/prd.md
```

2. Tambahkan file baru di:

```txt
docs/features/
```

3. Jika ada perubahan arsitektur:

tambahkan atau update file pada:

```txt
docs/architecture/
```

4. Jika ada keputusan baru:

tambahkan file pada:

```txt
docs/decisions/
```

---

# Important

JANGAN membuat satu file PRD yang sangat besar.

Lebih baik memiliki banyak file kecil yang fokus pada satu fitur.

Setiap markdown harus:

* singkat
* mudah dibaca
* mudah dicari
* mudah diubah
* berdiri sendiri

---

# Agent Workflow

Ketika menerima requirement baru:

1. Update:

```txt
docs/prd.md
```

2. Pecah requirement menjadi feature-feature kecil.

3. Buat file markdown per fitur.

4. **Implementation Plan & Approval**: Sebelum mengimplementasikan sesuatu (menulis kode), wajib buat **Implementation Plan** terlebih dahulu. 
   - Jika ada pertanyaan terbuka (Open Questions) di dalam plan tersebut, STOP dan biarkan user menjawab pertanyaan tersebut.
   - Setelah user menjawab, UPDATE Implementation Plan tersebut dengan jawaban yang telah disepakati.
   - STOP kembali dan tunggu sampai user secara eksplisit menyetujui (klik "proceed") sebelum memulai eksekusi penulisan kode.

5. Implementasikan code berdasarkan file feature tersebut.

6. Jika implementasi berubah, update dokumentasi terlebih dahulu.

7. **Unplanned Adjustments**: Jika ada penyesuaian atau revisi (adjustment) di tengah jalan, wajib dokumentasikan perubahan tersebut ke dalam versi di `ROADMAP.md` dan `CHANGELOG.md` yang fokusnya paling sesuai dengan konteks revisi (misal: revisi UI/UX dimasukkan ke versi dengan fokus Usability).

Dokumentasi adalah source of truth.

Code mengikuti dokumentasi, bukan sebaliknya.

---

# Database Changes Workflow

Database changes require:

1. Documentation updates.
2. Migration creation.
3. Database inspection through MCP.
4. Type synchronization.
