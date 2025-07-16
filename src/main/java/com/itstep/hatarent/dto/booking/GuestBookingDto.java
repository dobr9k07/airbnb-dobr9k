package com.itstep.hatarent.dto.booking;

import com.itstep.hatarent.model.Booking;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class GuestGetBookingDto {
  @Schema(description = "ID жилья")
  private Long rental;
  @Schema(description = "Дата начала бронированния")
  private LocalDate startDate;
  @Schema(description = "Длина бронированния в днях")
  private int duration;
  @Schema(description = "Время принятия бронированния")
  private LocalDateTime accepted_at;
  @Schema(description = "Время создания бронированния")
  private LocalDateTime createdAt;

  public GuestGetBookingDto(Booking entity) {
    this.rental = entity.getRental().getId();
    this.startDate = entity.getStartDate();
    this.duration = entity.getDuration();
    this.accepted_at = entity.getAccepted_at();
    this.createdAt = entity.getCreatedAt();
  }
}
