package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.rental.CreateRentalDto;
import com.itstep.hatarent.dto.rental.RentalDto;
import com.itstep.hatarent.service.RentalService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name = "Rental", description = "Запросы связанные с жильем")
@RequestMapping("/api/rental")
public class RentalController {
    private RentalService rentalService;

    @GetMapping("")
    public RentalDto getRentalById(Long id) {
        return rentalService.getRentalById(id);
    }

    @PostMapping("")
    public CreateRentalDto AddRental(@RequestBody CreateRentalDto rental) {
        //rentalService.addRental(rental);
        return rental;
    }
}
