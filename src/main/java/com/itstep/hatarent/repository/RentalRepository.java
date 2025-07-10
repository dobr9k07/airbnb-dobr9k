package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;

public interface RentalRepository extends JpaRepository<Rental, Long> {
    @Query(value = """
        SELECT * 
        FROM hatarent.rentals
        WHERE latitude BETWEEN :minLat AND :maxLat
          AND longitude BETWEEN :minLon AND :maxLon
          AND (
              6371 * acos(
                  cos(radians(:centerLat)) * 
                  cos(radians(CAST(latitude AS DOUBLE))) * 
                  cos(radians(CAST(longitude AS DOUBLE)) - radians(:centerLon)) + 
                  sin(radians(:centerLat)) * 
                  sin(radians(CAST(latitude AS DOUBLE)))
              )
          ) <= :radius
        """, nativeQuery = true)
    Page<Rental> findRentalsWithinRadius(
        @Param("centerLat") BigDecimal centerLat,
        @Param("centerLon") BigDecimal centerLon,
        @Param("radius") BigDecimal radius,
        @Param("minLat") BigDecimal minLat,
        @Param("maxLat") BigDecimal maxLat,
        @Param("minLon") BigDecimal minLon,
        @Param("maxLon") BigDecimal maxLon,
        Pageable pageable
    );
}
