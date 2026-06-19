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
v1.0.0
```

Status:

```txt
In Development
```

---

# v1.0.0 - MVP

Target:

Menyediakan aplikasi sederhana untuk mencatat perkembangan project.

## Features

### Task CRUD

* [ ] Create task
* [ ] Read task
* [ ] Update task
* [ ] Delete task

---

### Categories

* [ ] Bugs
* [ ] Adjust
* [ ] Findings

Urutan section:

1. Bugs
2. Adjust
3. Findings

---

### Status

* [ ] Ongoing
* [ ] Done

Checkbox akan memindahkan task antar status.

---

### UI

* [ ] Single page
* [ ] Responsive layout
* [ ] Dark mode
* [ ] Empty state
* [ ] Loading state
* [ ] Toast notification

---

### Database

Supabase PostgreSQL

* [ ] tasks table
* [ ] created_at
* [ ] updated_at

---

### Deployment

* [ ] Deploy ke Vercel

---

# v1.1.0

Fokus:

Meningkatkan usability.

## Search

* [ ] Search berdasarkan title

---

## Filter

* [ ] Filter category
* [ ] Filter status

---

## Sorting

* [ ] Sort by updated_at
* [ ] Sort by created_at

---

## UX Improvement

* [ ] Keyboard shortcut
* [ ] Better loading state
* [ ] Skeleton UI

---

# v1.2.0

Fokus:

Meningkatkan produktivitas.

## Priority

Tambahkan:

* [ ] Low
* [ ] Medium
* [ ] High

---

## Labels

* [ ] Multiple labels

---

## Notes

* [ ] Rich description

---

## Due Date

* [ ] Deadline task

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
