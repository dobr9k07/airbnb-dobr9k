package com.itstep.hatarent.model;

import com.itstep.hatarent.util.SqlSetJavaType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.HashSet;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "rentals")
public class Rental {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;

  @NotNull @Size(max = 200) private String name;
  @NotNull @Size(max = 200) private String description;
  @NotNull
  @Column(precision = 19, scale = 2)
  private BigDecimal price_per_night;
  @Type(value = SqlSetJavaType.class)
  private HashSet<String> features;
  @NotNull private BigDecimal latitude;
  @NotNull private BigDecimal longitude;
}
