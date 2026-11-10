/**
 * Lapisan DOMAIN: entity + aturan bisnis. Di sinilah konsep PBO dinilai.
 *
 * <p>BaseEntity sudah tersedia (abstract class, id + createdAt/updatedAt). Entity lain mewarisinya.
 *
 * <p>TODO (lihat docs/PBO-CHECKLIST.md):
 * <ul>
 *   <li>Animal (abstract) -> Mammal / Bird / Reptile  : inheritance, abstract, polymorphism</li>
 *   <li>Feedable, Treatable                            : interface</li>
 *   <li>Enclosure (kandang)                            : association/aggregation, aturan kapasitas</li>
 *   <li>Staff -> Keeper / Veterinarian                 : inheritance, override</li>
 *   <li>Visitor, Ticket                                : association</li>
 *   <li>StockItem (gudang)                             : encapsulation, custom exception</li>
 *   <li>FeedingSession + FeedingItem                   : composition</li>
 * </ul>
 */
package com.josjis.mkb.domain;
