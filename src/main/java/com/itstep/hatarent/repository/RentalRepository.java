package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<Rental, Long> {

}
