package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {
  Optional<List<Booking>> findByRental_Id(Long id);
  Optional<List<Booking>> findByUser_Id(Long id);
}
