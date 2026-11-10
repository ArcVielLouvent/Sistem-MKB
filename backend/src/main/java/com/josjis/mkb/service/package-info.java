/**
 * Lapisan SERVICE: alur kerja/use case. Anotasi {@code @Service} dan {@code @Transactional}.
 *
 * <p>Catatan penting: exception CHECKED (turunan ZooException) tidak memicu rollback secara default.
 * Pakai {@code @Transactional(rollbackFor = Exception.class)} pada method yang melemparnya.
 *
 * <p>TODO: AbstractCrudService generik, AnimalService, FeedingService, ZooFacade (Facade), dst.
 */
package com.josjis.mkb.service;
