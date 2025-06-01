package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
  List<Booking> findByRental_Id(Long id);
  //List<Booking> findByUser(Long id);
}
