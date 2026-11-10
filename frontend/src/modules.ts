export interface ModuleDef {
  path: string;
  label: string;
  group: string;
  title: string;
  description: string;
  /** Endpoint REST di backend untuk modul ini. */
  endpoint: string;
}

/**
 * Daftar modul aplikasi. Menambah modul = menambah satu entri di sini
 * (menu dan route dibuat otomatis oleh App.tsx).
 * Saat modul sudah dikerjakan, ganti ModulePage di App.tsx dengan halaman buatan sendiri.
 */
export const MODULES: ModuleDef[] = [
  { path: '/hewan', label: 'Hewan', group: 'Satwa', title: 'Manajemen hewan', description: 'Data satwa, kategori, dan status kesehatan.', endpoint: '/api/animals' },
  { path: '/kandang', label: 'Kandang', group: 'Satwa', title: 'Manajemen kandang', description: 'Kapasitas, lokasi, dan penghuni kandang.', endpoint: '/api/enclosures' },
  { path: '/pakan', label: 'Pakan', group: 'Operasional', title: 'Manajemen pakan', description: 'Jadwal dan catatan pemberian pakan.', endpoint: '/api/feedings' },
  { path: '/kesehatan', label: 'Kesehatan', group: 'Operasional', title: 'Kesehatan hewan', description: 'Rekam medis dan pemeriksaan dokter hewan.', endpoint: '/api/health-records' },
  { path: '/gudang', label: 'Gudang', group: 'Operasional', title: 'Manajemen gudang', description: 'Stok pakan dan perlengkapan.', endpoint: '/api/stock' },
  { path: '/staf', label: 'Staf', group: 'Orang', title: 'Manajemen staf', description: 'Petugas kandang dan dokter hewan.', endpoint: '/api/staff' },
  { path: '/pengunjung', label: 'Pengunjung', group: 'Orang', title: 'Manajemen pengunjung', description: 'Data pengunjung.', endpoint: '/api/visitors' },
  { path: '/tiket', label: 'Tiket', group: 'Orang', title: 'Tiket', description: 'Penjualan dan jenis tiket.', endpoint: '/api/tickets' },
];
