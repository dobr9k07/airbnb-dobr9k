package com.itstep.hatarent.model;

import com.itstep.hatarent.dto.booking.BookingDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "booking")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne
  @NotNull
  private User user;

  @ManyToOne
  @NotNull
  private Rental rental;

  @NotNull
  private LocalDate startDate;

  @NotNull
  private int duration;

  @NotNull
  private LocalDateTime accepted_at;

  @NotNull
  private LocalDateTime createdAt = LocalDateTime.now();

}
