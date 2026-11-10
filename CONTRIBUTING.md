# Aturan kerja kelompok

## Branch
- `main` selalu bisa dijalankan dan dilindungi: tidak ada push langsung, wajib PR.
- Branch kerja dari `main` dengan format `jenis/modul-deskripsi`, contoh: `feat/animal-entity`, `fix/enclosure-capacity`.

## Commit & PR
- Format commit dan **judul PR**: [Conventional Commits](https://www.conventionalcommits.org/) — `feat(animal): tambah hierarki Animal`.
  Jenis yang dipakai: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`.
- Satu PR = satu hal. Usahakan kecil (di bawah ±400 baris).
- Minimal **1 approval** dan semua CI hijau sebelum merge. Diskusi di PR harus diselesaikan (resolved).
- Merge memakai *squash and merge* agar riwayat `main` rapi.

## Kode backend (Java)
- Lapisan: `controller` (tipis) → `service` (alur kerja) → `domain` (aturan bisnis) → `repository`.
- Aturan bisnis ditaruh di **domain/service**, bukan di controller.
- Field entity `private`; ubah lewat method yang memvalidasi (encapsulation).
- Jangan mengembalikan entity dari controller; pakai DTO (record) + anotasi validasi.
- Kesalahan bisnis = turunan `ZooException` (checked); data tidak ditemukan = `ResourceNotFoundException` (unchecked).
  Method `@Transactional` yang melempar exception checked wajib `rollbackFor = Exception.class`.
- Tiap fitur punya tes (unit untuk domain, `MockMvc` untuk endpoint).

## Kode frontend (TypeScript)
- `strict` aktif; dilarang `any` (dijaga ESLint).
- Semua panggilan API lewat `src/api/client.ts`. Tipe response ada di `src/types.ts`.
- Tampilkan state memuat, kosong, dan error untuk setiap halaman data.

## Keamanan
- Dilarang commit password, token, atau `.env`. Kredensial Neon/Supabase hanya di variabel lingkungan / GitHub Secrets.
- Jika kredensial terlanjur ter-commit, anggap bocor: ganti password di dashboard database.

## Definisi selesai
Fitur berjalan end-to-end, ada tes, CI hijau, konsep PBO terkait sudah dicentang di `docs/PBO-CHECKLIST.md`.
