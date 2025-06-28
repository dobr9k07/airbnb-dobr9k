package com.itstep.hatarent.dto.booking;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class UpdateBookingDto {

  private LocalDate startDate;
  private int duration;
}
