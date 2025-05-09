package com.itstep.hatarent.model;

import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Set;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
@Table(name = "users", uniqueConstraints = @UniqueConstraint(
                           name = "users_email", columnNames = {"email"}))
public class User {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;

  @Column(length = 319)
  @NotNull private String email;
  @Column(length = 255)
  @NotNull private String password_hash;
  @NotNull private LocalDateTime created_at;
  @NotNull private boolean is_admin;

  @ManyToMany
  @JoinTable(
    name = "usersRental",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "rental_id"))
  private Set<Rental> rentals;
}
