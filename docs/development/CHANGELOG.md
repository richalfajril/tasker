# CHANGELOG.md

Semua perubahan penting pada project ini akan didokumentasikan di file ini.

Format mengikuti prinsip:

* Added
* Changed
* Fixed
* Removed

---

# [Unreleased]

## Added

* Diperkenalkannya tech stack baru sebagai single source of truth (Next.js 15, TailwindCSS v4, Zod, Sonner, lucide-react, installed shadcn/ui skills).

## Changed

* Belum ada.

## Fixed

* Belum ada.

## Removed

* Belum ada.

---

# [1.0.0] - Initial Release

Tanggal:

```txt id="9f3r9o"
2026-06-20
```

Status:

```txt id="o5tl1i"
In Development
```

## Added

### Project Setup

* Next.js 15
* TypeScript
* TailwindCSS v4
* shadcn/ui
* installed shadcn/ui skills
* Supabase PostgreSQL
* Vercel deployment

---

### Documentation

Menambahkan:

* PRD.md
* AGENTS.md
* DOCUMENTATION_RULES.md
* DESIGN.md
* ROADMAP.md
* CHANGELOG.md

---

### Database

Table:

```txt id="7e9dti"
tasks
```

Fields:

* id
* title
* description
* category
* status
* created_at
* updated_at

---

### Categories

Menambahkan kategori:

* bugs
* adjust
* findings

Urutan section:

1. Bugs
2. Adjust
3. Findings

---

### Status

Menambahkan:

* ongoing
* done

Task yang dicentang akan berpindah ke tab Done.

---

### CRUD

Menambahkan:

* Create Task
* Read Task
* Update Task
* Delete Task

---

### UI

Menambahkan:

* Single page layout
* Tabs Ongoing
* Tabs Done
* Card task
* Dialog create task
* Dialog edit task
* Delete confirmation
* Responsive layout
* Dark mode

---

### Server Actions

Menambahkan:

* createTask()
* updateTask()
* deleteTask()
* toggleTaskStatus()

---

## Changed

Belum ada.

---

## Fixed

Belum ada.

---

## Removed

Belum ada.

---

# Template Untuk Release Berikutnya

---

# [1.1.0]

Tanggal:

```txt id="dxo4up"
YYYY-MM-DD
```

## Added

* Search task.
* Filter category.
* Sorting task.

## Changed

* Improve loading state.

## Fixed

* Minor UI bugs.

## Removed

* Tidak ada.

---

# [1.2.0]

Tanggal:

```txt id="87w1aq"
YYYY-MM-DD
```

## Added

* Priority level.
* Labels.
* Due date.

## Changed

* Better task card layout.

## Fixed

* Improve responsiveness.

## Removed

* Tidak ada.

---

# [2.0.0]

Tanggal:

```txt id="fy7o8i"
YYYY-MM-DD
```

## Added

* Authentication.
* Multi-user support.
* Comments.
* Activity log.

## Changed

* Improve architecture.

## Fixed

* Performance improvements.

## Removed

* Legacy implementation.

---

# Rules

Setiap perubahan wajib dicatat.

Gunakan kategori:

## Added

Untuk fitur baru.

---

## Changed

Untuk perubahan perilaku atau refactor.

---

## Fixed

Untuk bug fix.

---

## Removed

Untuk fitur yang dihapus.

---

# Example

```md id="j84h83"
# [1.0.1]

## Fixed

- Fix toggle task status.
- Fix dark mode colors.

## Changed

- Improve spacing on mobile.
```

---

# Golden Rule

Jangan mengubah changelog lama.

Tambahkan entry baru di bagian atas.

Urutan:

Newest → Oldest.
