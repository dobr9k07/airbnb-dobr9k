package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.RentalImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RentalImageRepository extends JpaRepository<RentalImage, Long> {
  List<RentalImage> findByRental_Id(Long id);
}
