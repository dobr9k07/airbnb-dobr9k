package com.itstep.hatarent.dto.booking;

import com.itstep.hatarent.model.Booking;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class BookingDto {

  private Long id;
  private Long guest;
  private Long rental;
  private LocalDate startDate;
  private int duration;
  private LocalDateTime accepted_at;
  private LocalDateTime createdAt;

  public BookingDto(Booking entity){
    this.id = entity.getId();
    this.guest = entity.getUser().getId();
    this.rental = entity.getRental().getId();
    this.startDate = entity.getStartDate();
    this.duration = entity.getDuration();
    this.accepted_at = entity.getAccepted_at();
    this.createdAt = entity.getCreatedAt();
  }
}
