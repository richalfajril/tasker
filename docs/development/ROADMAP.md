# ROADMAP.md

# Tasker Development Notes

Roadmap pengembangan project.

---

# Guiding Principles

Prioritas:

1. Simplicity
2. Maintainability
3. Developer Experience
4. Performance

Hindari over-engineering.

---

# Technical Goals

* Type-safe code
* Minimal client components
* Server Actions only
* Maintainable architecture
* Migration-based schema management
* Documentation/database consistency
* Schema validation through MCP

---

# Current Version

```txt
v1.1.0
```

Status:

```txt
Completed
```

---

# v1.0.0 - MVP

Target:

Menyediakan aplikasi sederhana untuk mencatat perkembangan project.

## Features

### Task CRUD

* [x] Create task
* [x] Read task
* [x] Update task
* [x] Delete task

---

### Categories

* [x] Bugs
* [x] Adjust
* [x] Findings

Urutan section:

1. Bugs
2. Adjust
3. Findings

---

### Status

* [x] Ongoing
* [x] Done

Checkbox akan memindahkan task antar status.

---

### UI

* [x] Single page
* [x] Responsive layout
* [x] Dark mode
* [x] Empty state
* [x] Loading state
* [x] Toast notification

---

### Database

Supabase PostgreSQL

* [x] tasks table
* [x] created_at
* [x] updated_at

---

### Deployment

* [ ] Deploy ke Vercel

---

# v1.1.0

Fokus:

Meningkatkan usability.

## Search

* [x] Search berdasarkan title

---

## Filter

* [x] Filter category
* [x] Filter status (via Tabs)

---

## Sorting

* [x] Sort by updated_at
* [x] Sort by created_at

---

## UX Improvement

* [x] Keyboard shortcut
* [x] Better loading state
* [x] Skeleton UI

---

## Adjustments (Unplanned Features)

* [x] Gunakan Switchtab (Tabs) untuk kategori (Bugs/Adjust/Findings) di dalam tab Ongoing & Done
* [x] Tambahkan icon mata pada list untuk melihat detail deskripsi di modal

---

# v1.2.0

Fokus:

Meningkatkan produktivitas.

## Priority

Tambahkan:

* [x] Low
* [x] Medium
* [x] High

---

## Labels

* [x] Multiple labels

---

## Notes

* [x] Rich description

---

## Due Date

* [x] Deadline task

---

# v2.0.0

Fokus:

Kolaborasi.

## Authentication

* [ ] Login
* [ ] Register

---

## Multi User

* [ ] Team members

---

## Ownership

* [ ] Assign task ke user

---

## Activity Log

* [ ] History perubahan task

---

## Comments

* [ ] Comment pada task

---

# v2.1.0

Fokus:

Insight.

## Dashboard

* [ ] Total task
* [ ] Done task
* [ ] Ongoing task

---

## Statistics

* [ ] Task per category
* [ ] Completion rate

---

## Charts

* [ ] Weekly progress

---

# v3.0.0

Fokus:

Knowledge base.

## Attachments

* [ ] Upload image
* [ ] Upload file

---

## Markdown Support

* [ ] Markdown description

---

## References

* [ ] External links

---

## Findings Repository

Menyimpan seluruh findings sebagai knowledge base.

---

# Backlog

Belum diprioritaskan.

## Export

* [ ] CSV
* [ ] JSON

---

## Import

* [ ] CSV Import

---

## Notifications

* [ ] Email
* [ ] Discord
* [ ] Telegram

---

## AI Features

* [ ] Auto summarize findings
* [ ] Suggest category
* [ ] Generate release notes

---

# Out of Scope

Untuk MVP jangan implementasikan:

* Authentication
* Role permission
* Multi page
* Dashboard analytics
* Charts
* Realtime collaboration
* Websocket
* Redis
* Queue system

---

# Success Criteria

## v1

User dapat:

* membuat task
* mengedit task
* menghapus task
* menandai task selesai
* memindahkan task antara Ongoing dan Done

Semua dilakukan dalam satu halaman.

---

# Long-term Vision

Menjadi knowledge base sederhana untuk mencatat:

* bugs
* adjustments
* findings

selama proses pengembangan Project Tasker.
