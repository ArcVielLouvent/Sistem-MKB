import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { MODULES } from './modules';

afterEach(() => vi.unstubAllGlobals());

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  it('menampilkan menu untuk semua modul', () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({ status: 'ok', service: 'sistem-mkb' }) }));
    renderAt('/');
    for (const module of MODULES) {
      expect(screen.getByRole('link', { name: module.label })).toBeInTheDocument();
    }
  });

  it('beranda menunjukkan backend terhubung', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({ status: 'ok', service: 'sistem-mkb' }) }));
    renderAt('/');
    expect(await screen.findByText(/Terhubung ke sistem-mkb/)).toBeInTheDocument();
  });

  it('beranda menampilkan pesan jika backend mati', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));
    renderAt('/');
    expect(await screen.findByRole('alert')).toHaveTextContent(/Tidak dapat terhubung/);
  });

  it('halaman modul menampilkan endpoint-nya', () => {
    renderAt('/hewan');
    expect(screen.getByRole('heading', { name: 'Manajemen hewan' })).toBeInTheDocument();
    expect(screen.getByText('/api/animals')).toBeInTheDocument();
  });
});
