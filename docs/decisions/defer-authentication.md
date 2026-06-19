# Defer Authentication

## Context

Proyek ini telah direncanakan untuk menambahkan fitur autentikasi pada versi v2.0.0. Namun, mengingat bahwa saat ini aplikasi berjalan murni sebagai *Single-Page Application* dan *scope* utama belum membutuhkan pengelolaan multi-user yang kompleks, penerapan autentikasi (login/register) dirasa masih prematur.

## Decision

Menunda (defer) penerapan fitur autentikasi ke iterasi yang lebih jauh di masa mendatang. Aplikasi akan tetap beroperasi sebagai aplikasi 1-halaman tanpa sistem *login* untuk saat ini.

Sebagai gantinya, versi Pra-v2.0.0 akan difokuskan pada refaktorisasi arsitektur folder (Feature-Based Structuring) untuk memastikan repositori komponen tetap rapi dan *scalable*.

## Consequences

- Tidak diperlukan pembuatan tabel autentikasi di database Supabase untuk saat ini.
- Tidak diperlukan pengelolaan *Session/Cookie Middleware* di Next.js.
- Mempermudah dan mempercepat pengembangan *core feature* tanpa hambatan verifikasi akses.
