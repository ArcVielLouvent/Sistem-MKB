package com.josjis.mkb.exception;

/**
 * Induk semua kesalahan aturan bisnis kebun binatang.
 * Extends Exception => CHECKED exception: pemanggil WAJIB menangani (try/catch) atau meneruskan (throws).
 *
 * TODO (PBO): turunkan class ini untuk aturan bisnis kalian, contoh:
 *   EnclosureFullException, IncompatibleEnclosureException, InsufficientStockException.
 * GlobalExceptionHandler sudah menerjemahkan semua turunannya menjadi HTTP 409.
 */
public abstract class ZooException extends Exception {

    private static final long serialVersionUID = 1L;

    protected ZooException(String message) {
        super(message);
    }
}
