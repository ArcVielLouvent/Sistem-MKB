# Arsitektur

## Alur request
```mermaid
flowchart LR
  UI[React + TS] -->|REST /api/*| C[Controller]
  C --> S[Service]
  S --> D[Domain / Entity]
  S --> R[Repository]
  R --> DB[(Postgres<br/>Neon / Supabase)]
  C -. DTO .-> UI
```

## Use case diagram
TODO: gambar use case (aktor: Admin, Petugas kandang, Dokter hewan, Pengunjung) lalu tempel gambarnya di sini.

## ERD
TODO: lengkapi entitas dan relasi. Kerangka awal (ubah sesuai desain kelompok):
```mermaid
erDiagram
  ENCLOSURE ||--o{ ANIMAL : "dihuni"
  ANIMAL ||--o{ HEALTH_RECORD : "diperiksa"
  ANIMAL ||--o{ FEEDING_SESSION : "diberi makan"
  FEEDING_SESSION ||--|{ FEEDING_ITEM : "terdiri dari"
  STOCK_ITEM ||--o{ FEEDING_ITEM : "dipakai"
  VISITOR ||--o{ TICKET : "membeli"
```

## Class diagram
TODO: gambar hierarki kelas (abstract class, interface, inheritance, composition) sesuai kode, lalu tempel di sini.
```mermaid
classDiagram
  class BaseEntity {
    <<abstract>>
    -Long id
    -Instant createdAt
  }
  BaseEntity <|-- Animal
  class Animal {
    <<abstract>>
  }
```
