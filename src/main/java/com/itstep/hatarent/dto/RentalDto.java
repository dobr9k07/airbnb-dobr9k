package com.itstep.hatarent.dto;

import com.itstep.hatarent.model.Rental;
import java.math.BigDecimal;
import java.util.HashSet;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class RentalDto {
  private String name;
  private String description;
  private BigDecimal price_per_night;
  private HashSet<String> features;
  @Data
  @AllArgsConstructor
  static
  class Location {
    private BigDecimal latitude;
    private BigDecimal longitude;
  }
  private Location location;

  public RentalDto(Rental entity) {
    this.name = entity.getName();
    this.description = entity.getDescription();
    this.price_per_night = entity.getPrice_per_night();
    this.features = entity.getFeatures();
    this.location = new Location(entity.getLatitude(), entity.getLongitude());
  }
}
