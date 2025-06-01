package com.itstep.hatarent.dto.rentalImage;

import com.itstep.hatarent.model.RentalImage;
import lombok.Data;

@Data
public class RentalImageDto {
  private Long id;
  private Long rentalId;
  private String imagePath;
  private Integer imagePosition;

  public RentalImageDto(RentalImage entity) {
    this.id = entity.getId();
    this.rentalId = entity.getRental().getId();
    this.imagePath = entity.getImagePath();
    this.imagePosition = entity.getImagePosition();
  }
}
