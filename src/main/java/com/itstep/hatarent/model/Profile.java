package com.itstep.hatarent.model;

import com.itstep.hatarent.util.StringSet;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import java.util.Set;

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
