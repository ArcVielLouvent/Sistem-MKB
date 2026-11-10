/**
 * Tipe data response API. Samakan dengan DTO Response di backend.
 * TODO: tambahkan tipe per modul, contoh:
 *
 * export interface Animal { id: number; name: string; species: string; }
 */
export interface PingResponse {
  status: string;
  service: string;
}
