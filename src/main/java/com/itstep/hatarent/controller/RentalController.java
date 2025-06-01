package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.rental.RentalDto;
import com.itstep.hatarent.service.RentalService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name = "Rental", description = "Запросы связанные с жильем")
@RequestMapping("/api/rental")
public class RentalController {
    private RentalService rentalService;

    @GetMapping("")
    public List<RentalDto> getRentals() {
        return rentalService.getAllRentals();
    }
}
