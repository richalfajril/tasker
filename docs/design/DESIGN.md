# DESIGN.md

# Purpose

File ini merupakan source of truth untuk seluruh tampilan UI dan UX.

Semua komponen, layout, warna, spacing, dan interaksi harus mengikuti dokumen ini.

Utamakan:

* sederhana
* cepat digunakan
* mudah dibaca
* konsisten
* minim distraksi

---

# Design Philosophy

Prinsip utama:

> Functional First

Prioritas:

1. Readability
2. Simplicity
3. Consistency
4. Speed
5. Beauty

Jangan membuat UI yang terlalu kompleks.

Hindari:

* glassmorphism berlebihan
* gradient berlebihan
* animasi berlebihan
* dekorasi yang tidak memiliki fungsi

---

# Component Library

Gunakan:

* shadcn/ui
* installed shadcn/ui skills

Gunakan komponen bawaan sebanyak mungkin melalui installed shadcn/ui skills.

Jangan membuat custom component jika sudah tersedia pada shadcn.

---

# Theme

Support:

* light mode
* dark mode

Gunakan semantic color.

Jangan menggunakan hardcoded color.

Gunakan:

```txt id="5f8l8w"
primary
secondary
muted
accent
destructive
border
background
foreground
```

---

# Layout

Single page application.

Container:

```txt id="z32f9j"
max-width: 1200px
mx-auto
```

Spacing utama:

```txt id="zyhhjj"
gap-6
space-y-6
```

Padding halaman:

```txt id="8hvrte"
px-4 md:px-6
py-6
```

---

# Hierarchy

Urutan tampilan:

```txt id="hjnc44"
Header

Tabs
(Ongoing | Done)

Bug Section

Adjust Section

Findings Section
```

Urutan section tidak boleh diubah.

---

# Header

Menampilkan:

* title
* subtitle
* add task button

Layout:

```txt id="l7r8kn"
Title
Subtitle

               + New Task
```

---

# Tabs

Gunakan:

Tabs dari shadcn.

Default:

```txt id="9djv75"
Ongoing
```

Tab:

```txt id="1q3m92"
Ongoing
Done
```

---

# Sections

Urutan:

## Bugs

Paling atas.

Badge:

destructive

Icon:

Bug

---

## Adjust

Posisi kedua.

Badge:

blue

Icon:

Wrench

---

## Findings

Posisi ketiga.

Badge:

green

Icon:

Lightbulb

---

# Cards

Gunakan:

Card component dari shadcn.

Struktur:

```txt id="e3bpx9"
Checkbox

Title

Description

Badge category

Created date

Updated date

Actions
Edit Delete
```

---

# Card Style

Rounded:

```txt id="s4x8x4"
rounded-xl
```

Spacing:

```txt id="w95fxf"
p-5
```

Shadow:

```txt id="mq6ms9"
shadow-sm
```

Hover:

```txt id="wmlf2n"
hover:bg-muted/50
```

Transition:

```txt id="dhpcqy"
transition-all
```

Jangan menggunakan shadow besar.

---

# Colors

Bugs

Gunakan:

```txt id="j6jsw4"
destructive
```

---

Adjust

Gunakan:

```txt id="jwx6xa"
blue
```

---

Findings

Gunakan:

```txt id="5n5wm9"
green
```

---

# Buttons

Primary action:

```txt id="i7f50k"
default
```

Secondary action:

```txt id="n9mrtt"
outline
```

Danger action:

```txt id="8sqv0l"
destructive
```

Ukuran default:

```txt id="nkm5rz"
size=sm
```

---

# Dialog

Gunakan:

Dialog dari shadcn.

Untuk:

* create task
* edit task

Lebar:

```txt id="jfb5xa"
max-w-lg
```

---

# Delete Confirmation

Gunakan:

AlertDialog

Jangan langsung menghapus data tanpa konfirmasi.

---

# Empty State

Jika section kosong tampilkan:

```txt id="j0jv8g"
No tasks available.
```

Style:

* muted text
* centered
* sederhana

Jangan menggunakan ilustrasi besar.

---

# Loading State

Gunakan:

Skeleton component.

Hindari:

```txt id="f07uv1"
Loading...
```

polos.

---

# Responsive Rules

Desktop:

3 section vertikal.

Mobile:

tetap vertikal.

Jangan membuat horizontal scrolling.

---

# Typography

Title:

```txt id="zrx0uc"
text-3xl
font-bold
```

Subtitle:

```txt id="b7f1ts"
text-muted-foreground
```

Card title:

```txt id="v7ehvj"
font-semibold
```

Description:

```txt id="2o7e0n"
text-sm
text-muted-foreground
```

Timestamp:

```txt id="43weqg"
text-xs
```

---

# Icons

Gunakan:

lucide-react

Contoh:

```txt id="ls0e2u"
Bug
Wrench
Lightbulb
Plus
Pencil
Trash2
Check
Circle
```

Jangan mencampur icon library lain.

---

# Notifications

Gunakan:

Sonner

Untuk toast notifications ketika success, error, atau info.

---

# Animations

Minimal.

Gunakan hanya:

```txt id="4k4l3n"
transition-all
duration-200
```

Hindari:

* bounce
* spin
* floating
* parallax

Animasi harus memiliki fungsi.

---

# Accessibility

Semua tombol harus memiliki:

* aria-label

Checkbox harus dapat digunakan dengan keyboard.

Kontras warna harus cukup.

Gunakan semantic HTML.

---

# UX Principles

User harus dapat:

1. Membuat task kurang dari 10 detik.
2. Mengedit task kurang dari 5 detik.
3. Menandai task selesai dengan satu klik.
4. Memahami kategori tanpa membaca dokumentasi.

---

# Do Not

Jangan membuat:

* sidebar
* navbar kompleks
* dashboard multi-page
* charts
* hero section
* glassmorphism
* floating action button
* nested cards

Sederhana lebih baik.

---

# Golden Rule

Jika terdapat dua pilihan desain:

Pilih yang:

* lebih sederhana
* lebih mudah dipelihara
* lebih cepat dipahami user
* lebih konsisten dengan shadcn/ui
