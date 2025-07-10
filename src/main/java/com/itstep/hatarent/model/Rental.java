package com.itstep.hatarent.model;

import com.itstep.hatarent.util.StringSet;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "rentals")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Rental {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  @Size(max = 20)
  private String name;
  @NotNull
  @Size(max = 200)
  private String description;
  @NotNull
  @Column(precision = 19, scale = 4)
  private BigDecimal price_per_night;
  @Type(value = StringSet.class)
  private HashSet<String> features;
  @Column(precision = 9, scale = 6)
  @NotNull
  private BigDecimal latitude;
  @Column(precision = 9, scale = 6)
  @NotNull
  private BigDecimal longitude;
  @Column(columnDefinition = "json")
  private Set<String> images;


  @ManyToMany
  @JoinTable(
    name = "usersRental",
    joinColumns = @JoinColumn(name = "rental_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id")
  )
  private List<User> users;

  @OneToMany
  private List<Booking> bookings;
}
