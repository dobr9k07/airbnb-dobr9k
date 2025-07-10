package com.itstep.hatarent.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "booking")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

  @NotNull
  private final LocalDateTime createdAt = LocalDateTime.now();
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

}
