package com.josjis.mkb.exception;

/** Extends RuntimeException => UNCHECKED exception: tidak wajib ditangani di setiap pemanggil. Dipetakan ke HTTP 404. */
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
