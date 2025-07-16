package com.itstep.hatarent.model;

import java.util.Set;

import org.hibernate.annotations.Type;

import com.itstep.hatarent.util.StringSet;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @NotNull
  @OneToOne
  private User user;
  @Column(length = 100)
  private String picture_path;
  @NotNull
  @Column(length = 10)
  private String name;
  @NotNull
  @Column(length = 10)
  private String surname;
  @Column(length = 200)
  private String about;

  @Type(value = StringSet.class)
  private Set<String> rewards;
}
