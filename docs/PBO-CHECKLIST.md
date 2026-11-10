# Checklist konsep PBO

Centang saat konsep sudah diterapkan **dan ada tesnya**. Isi kolom "Lokasi" dengan file/class yang menerapkannya
(berguna saat presentasi). Kolom "Ide" hanya usulan; kelompok bebas menentukan desainnya.

| ✔ | Konsep | Ide penerapan di kebun binatang | Lokasi |
|---|---|---|---|
| [ ] | Class & object | Entity: hewan, kandang, staf, pengunjung, tiket, stok | |
| [ ] | Atribut, constructor, `this` | Constructor yang memvalidasi input | |
| [ ] | Access modifier | Field `private`, method internal `protected`/package-private | |
| [ ] | `static` & `final` | Konstanta (kapasitas maks., harga), utility class `final` | |
| [ ] | Encapsulation | Setter yang memvalidasi; stok hanya berubah lewat method | |
| [ ] | Inheritance | `Animal` → `Mammal`/`Bird`/`Reptile`; `Staff` → `Keeper`/`Veterinarian` | |
| [ ] | Abstract class | `Animal`, `Person`, `Ticket` | |
| [ ] | Interface | `Feedable`, `Treatable` (+ default method) | |
| [ ] | Polymorphism (overriding) | `makeSound()`, `dailyFoodKg()`, `unitPrice()` | |
| [ ] | Overloading | Dua versi method pencarian/tambah dengan parameter berbeda | |
| [ ] | Association | Hewan → kandang, tiket → pengunjung | |
| [ ] | Aggregation | Kandang punya hewan, hewan tetap ada tanpa kandang | |
| [ ] | Composition | `FeedingSession` memiliki `FeedingItem` (dibuat di dalam pemiliknya) | |
| [ ] | Custom exception | Turunan `ZooException`: kandang penuh, stok kurang | |
| [ ] | `throw` / `throws` | Method aturan bisnis menyatakan `throws` | |
| [ ] | `try/catch/finally` | Penanganan di service/handler | |
| [ ] | Checked vs unchecked | `ZooException` (checked) vs `ResourceNotFoundException` (unchecked) | |
| [ ] | Generics | `AbstractCrudService<T, R>` | |
| [ ] | Collections | `List`/`Map`/`Set` pada relasi dan laporan | |
| [ ] | Design pattern | Facade (dashboard), Factory (membuat hewan sesuai kategori) | |
| [ ] | Relasi database | Foreign key sesuai ERD (`docs/ARCHITECTURE.md`) | |

## Pembagian modul

| Modul | Penanggung jawab | Status |
|---|---|---|
| Hewan | | |
| Kandang | | |
| Pakan | | |
| Kesehatan | | |
| Gudang | | |
| Staf | | |
| Pengunjung & Tiket | | |
