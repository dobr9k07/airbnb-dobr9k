package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.Location;
import com.itstep.hatarent.dto.rental.CreateRentalDto;
import com.itstep.hatarent.dto.rental.RentalDto;
import com.itstep.hatarent.dto.rental.UpdateRentalDto;
import com.itstep.hatarent.model.Rental;
import com.itstep.hatarent.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    public RentalDto getRentalById(Long id) {
      return new RentalDto(rentalRepository.findById(id).orElseThrow());
    }

    public void addRental(CreateRentalDto rental) {
      Location location = rental.getLocation();
      Rental entity = Rental.builder()
        .name(rental.getName())
        .description(rental.getDescription())
        .price_per_night(rental.getPrice_per_night())
        .longitude(location.getLongitude())
        .latitude(location.getLatitude())
        .build();
      rentalRepository.save(entity);
    }

    public void updateRentalById(Long id, UpdateRentalDto rental) {
      Rental entity = rentalRepository.findById(id).orElseThrow();
      entity.setName(rental.getName());
      entity.setDescription(rental.getDescription());
      entity.setPrice_per_night(rental.getPrice_per_night());
      entity.setFeatures(rental.getFeatures());
      rentalRepository.save(entity);
    }

    public void deleteRentalById(Long id) {
      rentalRepository.deleteById(id);
    }

}
