import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Vitest tidak menjalankan cleanup otomatis tanpa `globals`, jadi DOM dibersihkan manual setelah tiap tes.
afterEach(() => cleanup());
