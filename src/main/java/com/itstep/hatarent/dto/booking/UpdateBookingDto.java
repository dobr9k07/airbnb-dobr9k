package com.itstep.hatarent.dto.booking;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class UpdateBookingDto {
  @Schema(description = "Дата начала бронированния")
  @Future
  private LocalDate startDate;
  @Schema(description = "Длина бронированния в днях")
  @Positive
  private int duration;
}
