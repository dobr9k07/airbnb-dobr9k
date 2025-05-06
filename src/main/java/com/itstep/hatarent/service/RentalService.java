package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.RentalDto;
import com.itstep.hatarent.model.Rental;
import com.itstep.hatarent.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    public List<RentalDto> getAllRentals() {
        List<Rental> rentals = rentalRepository.findAll();
        return rentals.stream().map(RentalDto::new).toList();
    }
}
