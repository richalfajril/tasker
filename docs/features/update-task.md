# Update Task

## Purpose
Memungkinkan user untuk mengubah informasi task yang sudah ada.

## User Flow
Klik ikon Edit pada card task -> Muncul Dialog form dengan data terisi -> Ubah input -> Klik Save.

## Requirements
- Fields editable: Title, Description, Category.
- System otomatis update kolom `updated_at`.

## Validation
Validasi form menggunakan `Zod`.
