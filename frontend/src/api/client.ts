const BASE_URL: string = (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:8080';

/** Error dari backend: membawa status HTTP dan pesan per-field (hasil validasi). */
export class ApiError extends Error {
  readonly status: number;
  readonly fieldErrors: Record<string, string>;

  constructor(message: string, status: number, fieldErrors: Record<string, string> = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: { 'Content-Type': 'application/json', ...init.headers },
    });
  } catch {
    throw new ApiError('Tidak dapat terhubung ke server. Pastikan backend sedang berjalan.', 0);
  }

  if (!response.ok) {
    let message = `Permintaan gagal (${response.status})`;
    let fieldErrors: Record<string, string> = {};
    try {
      const body = (await response.json()) as { message?: string; errors?: Record<string, string> };
      if (body.message) message = body.message;
      if (body.errors) fieldErrors = body.errors;
    } catch {
      // body bukan JSON: pakai pesan bawaan
    }
    throw new ApiError(message, response.status, fieldErrors);
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) => request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) => request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),
  remove: (path: string) => request<void>(path, { method: 'DELETE' }),
};

export function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : 'Terjadi kesalahan tak terduga';
}
