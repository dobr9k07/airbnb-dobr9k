package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.rentalImage.RentalImageStripedDto;
import com.itstep.hatarent.service.RentalImageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name = "RentalImage", description = "Запросы связанные с фотографиями жилья")
@RequestMapping("/api/rentalImage")
public class RentalImageController {
  private RentalImageService rentalImageService;

  @Operation(summary = "Get a rental image by its id")
  @GetMapping("")
  public List<RentalImageStripedDto> getRentalImagesByRentalId(Long id) {
    return rentalImageService.getRentalsImagesByRentalId(id);
  }
}
