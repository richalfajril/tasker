export const dictionaries = {
  en: {
    // Categories and Status (Kept as is per agreement)
    bugs: "Bugs",
    adjust: "Adjust",
    findings: "Findings",
    ongoing: "Ongoing",
    done: "Done",

    // UI Elements
    newTask: "New Task",
    searchPlaceholder: "Search tasks...",
    emptyState: "No tasks found.",
    loading: "Loading tasks...",
    
    // Form Labels
    title: "Title",
    category: "Category",
    priority: "Priority",
    labels: "Labels",
    labelsPlaceholder: "frontend, urgent",
    dueDate: "Due Date",
    description: "Description",
    
    // Priorities
    high: "High",
    medium: "Medium",
    low: "Low",
    
    // Actions
    saveChanges: "Save Changes",
    saving: "Saving...",
    cancel: "Cancel",
    createTask: "Create Task",
    editTask: "Edit Task",
    deleteTask: "Delete Task",
    deleteConfirm: "Are you sure you want to delete this task?",
    deleteWarning: "This action cannot be undone.",
    viewDescription: "View Description",
    close: "Close",
    pickDate: "Pick a date",
    
    // Toasts
    taskCreated: "Task created successfully",
    taskUpdated: "Task updated successfully",
    taskDeleted: "Task deleted successfully",
    statusUpdated: "Task status updated",
    
    // Time relative
    due: "Due",
    updated: "Updated"
  },
  id: {
    // Categories and Status (Kept as is per agreement)
    bugs: "Bugs",
    adjust: "Adjust",
    findings: "Findings",
    ongoing: "Ongoing",
    done: "Done",

    // UI Elements
    newTask: "Tugas Baru",
    searchPlaceholder: "Cari tugas...",
    emptyState: "Tidak ada tugas ditemukan.",
    loading: "Memuat tugas...",
    
    // Form Labels
    title: "Judul",
    category: "Kategori",
    priority: "Prioritas",
    labels: "Label",
    labelsPlaceholder: "frontend, mendesak",
    dueDate: "Batas Waktu",
    description: "Deskripsi",
    
    // Priorities
    high: "Tinggi",
    medium: "Sedang",
    low: "Rendah",
    
    // Actions
    saveChanges: "Simpan Perubahan",
    saving: "Menyimpan...",
    cancel: "Batal",
    createTask: "Buat Tugas",
    editTask: "Edit Tugas",
    deleteTask: "Hapus Tugas",
    deleteConfirm: "Apakah Anda yakin ingin menghapus tugas ini?",
    deleteWarning: "Tindakan ini tidak dapat dibatalkan.",
    viewDescription: "Lihat Deskripsi",
    close: "Tutup",
    pickDate: "Pilih tanggal",
    
    // Toasts
    taskCreated: "Tugas berhasil dibuat",
    taskUpdated: "Tugas berhasil diperbarui",
    taskDeleted: "Tugas berhasil dihapus",
    statusUpdated: "Status tugas diperbarui",
    
    // Time relative
    due: "Tenggat",
    updated: "Diperbarui"
  }
};

export type Language = 'id' | 'en';
export type Dictionary = typeof dictionaries.en;
export type DictionaryKey = keyof Dictionary;
