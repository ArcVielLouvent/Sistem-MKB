# sistem-MKB — Sistem Manajemen Kebun Binatang

Template tugas besar PBO kelompok **JosJis**. Repo ini berisi kerangka yang sudah bisa dijalankan
(koneksi database, API dasar, frontend, CI/CD, aturan repo). Logika domain dan modul dikerjakan kelompok.

| Lapisan | Teknologi |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Backend | Java 21 + Spring Boot 3 (Web, Data JPA, Validation, Actuator, springdoc) |
| Database | PostgreSQL di Neon atau Supabase |
| CI/CD | GitHub Actions (tes, build Docker, publish image ke GHCR) |

## Struktur

```
backend/    Spring Boot (domain, repository, service, controller, dto, exception, config)
frontend/   React + TS (api client, daftar modul, halaman placeholder)
docs/       DATABASE.md, PBO-CHECKLIST.md, ARCHITECTURE.md
.github/    workflow CI/CD, ruleset branch, template PR & issue
```

## Prasyarat

JDK 21, Maven 3.9+, Node 22+, dan database Postgres (Neon/Supabase atau Docker).

## Mulai cepat

1. **Database** — ikuti `docs/DATABASE.md` (Neon/Supabase), atau jalankan Postgres lokal: `docker compose up db`.
2. **Konfigurasi** — salin `.env.example` menjadi `.env` lalu isi. Backend membaca variabel lingkungan
   (`DATABASE_URL`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `CORS_ALLOWED_ORIGINS`).
3. **Backend**
   ```bash
   cd backend
   export $(grep -v '^#' ../.env | xargs)   # Windows: isi variabel di run configuration IDE
   mvn spring-boot:run
   ```
   Cek: <http://localhost:8080/api/ping>, <http://localhost:8080/actuator/health>, <http://localhost:8080/swagger-ui.html>
4. **Frontend**
   ```bash
   cd frontend
   cp .env.example .env
   npm install
   npm run dev
   ```
   Buka <http://localhost:5173>. Beranda menampilkan status koneksi ke backend.

   > Setelah `npm install` pertama, **commit `frontend/package-lock.json`**. Sejak itu CI dan Docker otomatis
   > memakai `npm ci` sehingga versi dependensi sama di semua anggota kelompok.

Seluruh stack sekaligus: `docker compose up --build`.

## Perintah penting

| Tujuan | Perintah |
|---|---|
| Tes backend | `cd backend && mvn verify` |
| Tes frontend | `cd frontend && npm test` |
| Lint / typecheck / build | `npm run lint` · `npm run typecheck` · `npm run build` |

Tes backend memakai H2 (profil `test`), jadi tidak butuh koneksi ke Neon/Supabase.

## CI/CD

- `ci.yml` — setiap push/PR: build + tes backend, lint + typecheck + tes + build frontend, lalu cek build Docker.
- `cd.yml` — setiap merge ke `main`: image `backend` dan `frontend` dikirim ke `ghcr.io`. Job deploy masih TODO.
- `pr-title.yml` — judul PR harus mengikuti Conventional Commits.
- `dependabot.yml` — pembaruan dependensi mingguan.

## Aturan repo

Aturan kerja ada di [CONTRIBUTING.md](CONTRIBUTING.md). Untuk mengaktifkan proteksi branch `main`:
**Settings → Rules → Rulesets → New ruleset → Import a ruleset**, pilih `.github/rulesets/protect-main.json`.
Status check `Backend (Maven)`, `Frontend (React)`, dan `Judul PR` baru bisa dipilih setelah workflow berjalan sekali.

## Mengerjakan modul

1. Cek `docs/PBO-CHECKLIST.md` untuk konsep PBO yang harus muncul dan tentukan pembagiannya.
2. Backend: buat entity di `domain`, lalu repository, service, DTO, controller (petunjuk ada di `package-info.java` tiap package).
3. Frontend: tambahkan tipe di `src/types.ts`, ganti `ModulePage` untuk modul tersebut dengan halaman buatan sendiri.
4. Buat tes, buka PR, tunggu CI hijau.
