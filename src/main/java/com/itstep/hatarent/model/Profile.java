package com.itstep.hatarent.model;

import com.itstep.hatarent.util.SqlSetJavaType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.hibernate.annotations.Type;

import java.util.Set;

@Entity
@Getter
@Table(name = "profiles")
public class Profile {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
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

  @Type(value = SqlSetJavaType.class)
  private Set<String> rewards;
}
