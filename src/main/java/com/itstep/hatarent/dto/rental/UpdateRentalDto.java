package com.itstep.hatarent.dto.rental;

import com.itstep.hatarent.dto.Location;
import com.itstep.hatarent.model.Rental;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
public class UpdateRentalDto {
  private String name;
  private String description;
  private BigDecimal price_per_night;
  private HashSet<String> features;
  private Location location;
  private Set<String> images;

  public UpdateRentalDto(Rental entity) {
    this.name = entity.getName();
    this.description = entity.getDescription();
    this.price_per_night = entity.getPrice_per_night();
    this.features = entity.getFeatures();
    this.location = new Location(entity.getLatitude(), entity.getLongitude());
    this.images = entity.getImages();
  }
}
