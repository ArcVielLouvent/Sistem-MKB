# Database: Neon atau Supabase

Backend hanya butuh **Postgres**; keduanya bisa dipakai. Rekomendasi: **Neon** (Postgres murni, setup paling singkat).
Satu database dipakai bersama satu kelompok; untuk eksperimen pribadi gunakan branch Neon atau Postgres lokal.

Backend membaca tiga variabel lingkungan: `DATABASE_URL` (format JDBC), `DATABASE_USERNAME`, `DATABASE_PASSWORD`.

## Neon
1. Buat project di <https://neon.tech>, lalu buka **Connect** pada dashboard.
2. Connection string berbentuk `postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require`. JDBC tidak memakai
   user/password di dalam URL, jadi pecah menjadi:
   ```
   DATABASE_URL=jdbc:postgresql://HOST/DBNAME?sslmode=require
   DATABASE_USERNAME=USER
   DATABASE_PASSWORD=PASSWORD
   ```
3. Jika string dari Neon memuat `channel_binding=require`, hapus parameter itu dari `DATABASE_URL`.
4. Host berakhiran `-pooler` memakai connection pooling; boleh dipakai untuk backend.

## Supabase
1. Buat project di <https://supabase.com>, buka **Connect** dan salin parameter koneksi Postgres.
2. Gunakan **Session pooler** (port 5432) jika jaringanmu tidak mendukung IPv6:
   ```
   DATABASE_URL=jdbc:postgresql://<host-pooler>:5432/postgres?sslmode=require
   DATABASE_USERNAME=postgres.<project-ref>
   DATABASE_PASSWORD=<password database>
   ```
3. *Transaction pooler* (port 6543) hanya jika perlu; tambahkan `prepareThreshold=0` pada URL.
4. Format pasti (host/user) bisa berbeda per project, ikuti yang tertera di dashboard.

## Skema
- Default `JPA_DDL_AUTO=update`: Hibernate membuat/menyesuaikan tabel dari entity. Praktis untuk tugas kuliah.
- Hindari `update` jika data penting; pertimbangkan Flyway bila skema sudah stabil.
- Tes otomatis memakai H2 sehingga tidak menyentuh database cloud.
