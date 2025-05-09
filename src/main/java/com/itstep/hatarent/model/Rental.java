package com.itstep.hatarent.model;

import com.itstep.hatarent.util.SqlSetJavaType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import lombok.Getter;
import org.hibernate.annotations.Type;

@Entity
@Getter
@Table(name = "rentals")
public class Rental {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;

  @NotNull @Size(max = 20) private String name;
  @NotNull @Size(max = 200) private String description;
  @NotNull
  @Column(precision = 19, scale = 4)
  private BigDecimal price_per_night;
  @Type(value = SqlSetJavaType.class)
  private HashSet<String> features;
  @Column(precision = 9, scale = 6)
  @NotNull private BigDecimal latitude;
  @Column(precision = 9, scale = 6)
  @NotNull private BigDecimal longitude;

  @ManyToMany
  @JoinTable(
    name = "usersRental",
    joinColumns = @JoinColumn(name = "rental_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id")
  )
  private Set<Rental> users;
}
