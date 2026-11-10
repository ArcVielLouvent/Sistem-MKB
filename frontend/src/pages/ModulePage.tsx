import type { ModuleDef } from '../modules';

/** Placeholder untuk modul yang belum dikerjakan. Ganti dengan halaman nyata (tabel, form, dst.). */
export default function ModulePage({ module }: { module: ModuleDef }) {
  return (
    <section className="page">
      <header className="page-head">
        <div>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
        </div>
      </header>
      <div className="panel">
        <h2>Belum dikerjakan</h2>
        <p className="muted">
          Endpoint backend: <code>{module.endpoint}</code>
        </p>
        <ol>
          <li>Buat entity, repository, service, dan controller di backend.</li>
          <li>Tambahkan tipe response di <code>src/types.ts</code>.</li>
          <li>Buat halaman ini memakai <code>api</code> dari <code>src/api/client.ts</code>.</li>
        </ol>
      </div>
    </section>
  );
}
