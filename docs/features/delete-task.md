# Delete Task

## Purpose
Menghapus task yang tidak valid atau salah.

## User Flow
Klik ikon Delete pada card task -> Muncul AlertDialog konfirmasi -> Klik Confirm -> Data dihapus permanen.

## Requirements
- Wajib menggunakan konfirmasi (`AlertDialog`) sebelum menghapus.

## UI Behavior
- Tampilkan toast notification via `Sonner` setelah berhasil menghapus.
