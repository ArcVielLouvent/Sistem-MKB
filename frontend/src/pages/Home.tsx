import { useEffect, useState } from 'react';
import { api, messageOf } from '../api/client';
import type { PingResponse } from '../types';

type State = { kind: 'loading' } | { kind: 'ok'; service: string } | { kind: 'error'; message: string };

/** Beranda: sekaligus pengecekan bahwa frontend berhasil terhubung ke backend. */
export default function Home() {
  const [state, setState] = useState<State>({ kind: 'loading' });

  useEffect(() => {
    let active = true;
    api
      .get<PingResponse>('/api/ping')
      .then((result) => {
        if (active) setState({ kind: 'ok', service: result.service });
      })
      .catch((error: unknown) => {
        if (active) setState({ kind: 'error', message: messageOf(error) });
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="page">
      <header className="page-head">
        <div>
          <h1>Sistem Manajemen Kebun Binatang</h1>
          <p>Template tugas besar PBO. Pilih modul di menu untuk mulai mengerjakan.</p>
        </div>
      </header>
      <div className="panel">
        <h2>Status koneksi backend</h2>
        {state.kind === 'loading' ? <p className="muted">Memeriksa…</p> : null}
        {state.kind === 'ok' ? <p className="ok">Terhubung ke {state.service}.</p> : null}
        {state.kind === 'error' ? (
          <p role="alert" className="alert">
            {state.message}
          </p>
        ) : null}
      </div>
    </section>
  );
}
