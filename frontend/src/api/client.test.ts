import { afterEach, describe, expect, it, vi } from 'vitest';
import { api, ApiError } from './client';

function mockFetch(response: Partial<Response> & { json?: () => Promise<unknown> }) {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response));
}

afterEach(() => vi.unstubAllGlobals());

describe('api client', () => {
  it('mengembalikan JSON saat sukses', async () => {
    mockFetch({ ok: true, status: 200, json: async () => ({ status: 'ok' }) });
    await expect(api.get('/api/ping')).resolves.toEqual({ status: 'ok' });
  });

  it('melempar ApiError berisi pesan dan error per-field', async () => {
    mockFetch({
      ok: false,
      status: 400,
      json: async () => ({ message: 'Data tidak valid', errors: { name: 'tidak boleh kosong' } }),
    });
    const error = await api.post('/api/animals', {}).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(ApiError);
    expect((error as ApiError).status).toBe(400);
    expect((error as ApiError).fieldErrors.name).toBe('tidak boleh kosong');
  });

  it('mengubah kegagalan jaringan menjadi pesan yang ramah', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));
    await expect(api.get('/api/ping')).rejects.toThrow(/Tidak dapat terhubung/);
  });

  it('tidak membaca body untuk 204', async () => {
    mockFetch({ ok: true, status: 204 });
    await expect(api.remove('/api/animals/1')).resolves.toBeUndefined();
  });
});
