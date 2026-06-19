# Create Task

## Purpose
Memungkinkan user untuk menambahkan catatan task baru.

## User Flow
Klik tombol `+ New Task` -> Muncul Dialog form -> Isi input -> Klik Save.

## Requirements
- Form Input: Title (wajib), Category (wajib), Description (opsional).
- Default status: `ongoing`.

## UI Behavior
- Menggunakan komponen `Dialog`.
- Menampilkan toast notification via `Sonner` setelah berhasil.

## Validation
Validasi form menggunakan `Zod`.
