Oke, ini aku buatin `todo.md` yang rapi dan bisa langsung kamu pakai sebagai checklist biar pengerjaan submission kamu terarah 👇

# 📌 TODO LIST - Aplikasi Catatan React (Dicoding)

## ✅ Kriteria Utama 1: RESTful API

- [ ] Gunakan API: [https://notes-api.dicoding.dev/v1](https://notes-api.dicoding.dev/v1)
- [ ] Implement fitur:
  - [ ] Registrasi user (API)
  - [ ] Login user (API)
  - [ ] Ambil daftar catatan
  - [ ] Ambil detail catatan
  - [ ] Tambah catatan
  - [ ] Hapus catatan
  - [ ] Arsip / Unarsip catatan (opsional)
  - [ ] Ambil daftar arsip (opsional)

---

## ✅ Kriteria Utama 2: Registrasi & Autentikasi

- [ ] Halaman Register:
  - [ ] Input nama
  - [ ] Input email
  - [ ] Input password
  - [ ] Input confirm password (opsional)

- [ ] Halaman Login:
  - [ ] Input email
  - [ ] Input password

- [ ] Simpan access token ke localStorage
- [ ] Simpan data user (nama/email) ke state
- [ ] Tampilkan info user di UI
- [ ] Tombol Logout:
  - [ ] Hapus token dari localStorage
  - [ ] Reset state user

---

## ✅ Kriteria Utama 3: Proteksi Fitur

- [ ] Proteksi route:
  - [ ] Jika belum login → redirect ke login/register

- [ ] Halaman yang diproteksi:
  - [ ] Daftar catatan
  - [ ] Detail catatan
  - [ ] Tambah catatan

- [ ] Pastikan hanya data milik user yang tampil

---

## ✅ Kriteria Utama 4: Ubah Tema

- [ ] Buat ThemeContext
- [ ] Implement dark/light mode
- [ ] Tombol toggle tema
- [ ] Simpan tema di localStorage
- [ ] Load tema saat aplikasi pertama kali dibuka

---

## ✅ Kriteria Utama 5: Hooks

- [ ] Gunakan useState
- [ ] Gunakan useEffect
- [ ] Gunakan Hooks di:
  - [ ] Halaman Login
  - [ ] Halaman Register

---

## ✅ Kriteria Utama 6: Fitur Dasar Catatan

- [ ] Minimal 2 halaman:
  - [ ] Halaman daftar catatan
  - [ ] Halaman detail catatan

- [ ] Tambah catatan
- [ ] Hapus catatan

---

# 🌟 Kriteria Opsional

## 🔄 Loading Indicator

- [ ] Tampilkan loading saat fetch API
- [ ] Bisa berupa:
  - [ ] Spinner
  - [ ] Text "Loading..."
  - [ ] Skeleton UI

---

## 🌐 Ubah Bahasa (i18n)

- [ ] Buat LanguageContext
- [ ] Toggle Bahasa (ID / EN)
- [ ] Simpan pilihan bahasa di localStorage
- [ ] Terapkan ke UI (text berubah sesuai bahasa)

---

# 🚀 BONUS (Opsional tapi keren)

- [ ] Error handling (alert/toast)
- [ ] Not found page (404)
- [ ] UI lebih clean (pakai Tailwind / CSS custom)
- [ ] Reusable components (Button, Input, Card)

---

# 🎯 Target Akhir

- [ ] Semua fitur berjalan tanpa error
- [ ] UI nyaman digunakan
- [ ] Lolos semua kriteria utama
- [ ] (Optional) Dapat nilai tinggi 🔥

Kalau mau, aku bisa bantu kamu breakdown jadi **struktur folder React + routing + context + API flow** biar kamu tinggal implement step-by-step tanpa bingung 👍
