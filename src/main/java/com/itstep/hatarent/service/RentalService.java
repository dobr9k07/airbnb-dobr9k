package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.RentalDto;
import com.itstep.hatarent.model.Rental;
import com.itstep.hatarent.model.User;
import com.itstep.hatarent.repository.RentalRepository;
import org.apache.commons.lang3.NotImplementedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    public List<RentalDto> getAllRentals() {
      List<Rental> rentals = rentalRepository.findAll();
      return rentals.stream().map(RentalDto::new).toList();
    }

//    public List<String> getUserNames(Long id) {
//      Optional<Rental> rental = rentalRepository.findById(id);
//      if (rental.isEmpty()) {
//        throw new NotImplementedException();
//      }
//      Set<Rental> users = rental.get().getUsers();
//      List<String> userNames = users.stream().map(User::get)
//      return userNames;
//    }
}
