package com.itstep.hatarent.dto.booking;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.itstep.hatarent.model.Booking;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BookingDto {
  @Schema(description = "ID бронированния")
  private Long id;
  @Schema(description = "ID гостя")
  private Long guest;
  @Schema(description = "ID жилья")
  private Long rental;
  @Schema(description = "Дата начала бронированния")
  @Future
  private LocalDate startDate;
  @Schema(description = "Длина бронированния в днях")
  @Positive
  private int duration;
  @Schema(description = "Время принятия бронированния")
  private LocalDateTime accepted_at;
  @Schema(description = "Время создания бронированния")
  private LocalDateTime createdAt;

  public BookingDto(Booking entity) {
    this.id = entity.getId();
    this.guest = entity.getUser().getId();
    this.rental = entity.getRental().getId();
    this.startDate = entity.getStartDate();
    this.duration = entity.getDuration();
    this.accepted_at = entity.getAccepted_at();
    this.createdAt = entity.getCreatedAt();
  }
}
