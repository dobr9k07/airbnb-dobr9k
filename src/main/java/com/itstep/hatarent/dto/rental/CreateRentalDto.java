package com.itstep.hatarent.dto.rental;

import com.itstep.hatarent.dto.Location;
import com.itstep.hatarent.model.Rental;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class CreateRentalDto {
  private String name;
  private String description;
  private BigDecimal price_per_night;
  private Location location;

  public CreateRentalDto(Rental entity) {
    this.name = entity.getName();
    this.description = entity.getDescription();
    this.price_per_night = entity.getPrice_per_night();
    this.location = new Location(entity.getLatitude(), entity.getLongitude());
  }
}
