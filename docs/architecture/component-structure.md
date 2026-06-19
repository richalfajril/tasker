# Component Structure

Hubungan antar komponen berpusat pada halaman utama (`app/page.tsx`):
- `<Header />`: Menampilkan judul dan tombol tambah task.
- `<Tabs />`: Membagi tampilan menjadi Ongoing dan Done.
- `<TaskCard />`: Komponen reusable untuk menampilkan satuan task.
- `<BugSection />`, `<AdjustSection />`, `<FindingsSection />`: Mengelompokkan TaskCard berdasarkan kategori.
- Dialogs (`<CreateTaskDialog />`, `<EditTaskDialog />`, `<DeleteTaskDialog />`): Menangani interaksi user untuk memanipulasi data.
