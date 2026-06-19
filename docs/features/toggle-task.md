# Toggle Task Status

## Purpose
Memindahkan task dari Ongoing ke Done, atau sebaliknya.

## User Flow
Klik checkbox pada card task.

## Requirements
- Checked -> Status berubah jadi `done` -> Pindah ke tab Done.
- Unchecked -> Status berubah jadi `ongoing` -> Pindah ke tab Ongoing.

## UI Behavior
Menggunakan optimistic update agar perpindahan seketika di UI sebelum menunggu response server.
