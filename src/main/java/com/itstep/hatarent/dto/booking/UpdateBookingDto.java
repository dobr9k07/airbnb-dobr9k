package com.itstep.hatarent.dto.booking;

import com.itstep.hatarent.model.Booking;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class UpdateBookingDto {

  private LocalDate startDate;
  private int duration;
}
