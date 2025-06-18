package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.Location;
import com.itstep.hatarent.dto.booking.CreateBookingDto;
import com.itstep.hatarent.dto.booking.UpdateBookingDto;
import com.itstep.hatarent.dto.rental.CreateRentalDto;
import com.itstep.hatarent.dto.rental.RentalDto;
import com.itstep.hatarent.model.Booking;
import com.itstep.hatarent.model.Rental;
import com.itstep.hatarent.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    public RentalDto getRentalById(Long id) {
      return new RentalDto(rentalRepository.findById(id).orElseThrow());
    }

    public void addRental(CreateRentalDto rental) {
    Location location = rental.getLocation();
    Rental entity = Rental.builder().name(rental.getName())
      .description(rental.getDescription())
      .price_per_night(rental.getPrice_per_night())
      .longitude(location.getLongitude())
      .latitude(location.getLatitude())
      .build();

    rentalRepository.save(entity);
  }

}
