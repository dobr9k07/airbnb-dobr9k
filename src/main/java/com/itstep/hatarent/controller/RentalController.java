package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.RentalDto;
import com.itstep.hatarent.service.RentalService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/rental")
public class RentalController {
    private RentalService rentalService;

    @GetMapping("")
    public List<RentalDto> getRentals() {
        return rentalService.getAllRentals();
    }
}
