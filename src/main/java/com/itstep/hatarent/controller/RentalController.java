package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.rental.CreateRentalDto;
import com.itstep.hatarent.dto.rental.RentalDto;
import com.itstep.hatarent.dto.rental.UpdateRentalDto;
import com.itstep.hatarent.service.RentalService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name = "Rental", description = "Запросы связанные с жильем")
@RequestMapping("/api/rental")
public class RentalController {
  private RentalService rentalService;

  @GetMapping("")
  public RentalDto getRentalById(Long id) {
    return new RentalDto(rentalService.getRentalById(id));
  }

  @PostMapping("")
  public CreateRentalDto AddRental(@RequestBody CreateRentalDto rental) {
    rentalService.addRental(rental);
    return rental;
  }

  @PutMapping("")
  public UpdateRentalDto UpdateRentalById(Long id, @RequestBody UpdateRentalDto rental) {
    rentalService.updateRentalById(id, rental);
    return rental;
  }

  @DeleteMapping("")
  public Long DeleteRentalById(Long id) {
    rentalService.deleteRentalById(id);
    return id;
  }

  @GetMapping("/by_location")
  public List<RentalDto> getRentalsByLocation(BigDecimal latitude,
                                              BigDecimal longitude,
                                              BigDecimal radius,
                                              Pageable page) {
    return rentalService.getRentalsByCoordinates(latitude, longitude, radius, page).stream().map(RentalDto::new).toList();
  }
}
