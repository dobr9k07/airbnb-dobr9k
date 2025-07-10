package com.itstep.hatarent.model;

import com.itstep.hatarent.util.Rating;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;

@Entity
@Table(name = "reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {
  @NotNull
  private final LocalDateTime created_at = LocalDateTime.now();
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @NotNull
  @OneToOne
  @PrimaryKeyJoinColumn(name = "profile_id")
  private Profile userProfile;
  @NotNull
  @OneToOne
  private Rental rental;
  @NotNull
  @Type(value = Rating.class)
  private Byte rating;
  @NotNull
  private String description;
}
