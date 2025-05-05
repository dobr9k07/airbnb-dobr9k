package com.itstep.hatarent.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;



import java.math.BigDecimal;
import java.util.Set;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "rentals")
public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max=200)
    private String name;
    @NotNull
    @Size(max=200)
    private String description;
    @NotNull
    @Column(precision = 19, scale = 2)
    private BigDecimal price_per_night;
    @ElementCollection
    private Set<String> features;
    @NotNull
    private BigDecimal latitude;
    @NotNull
    private BigDecimal longtitude;
}
