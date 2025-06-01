package com.itstep.hatarent.dto.rentalImage;

import com.itstep.hatarent.model.RentalImage;
import lombok.Data;

@Data
public class RentalImageStripedDto {
  private String imagePath;
  private Integer imagePosition;

  public RentalImageStripedDto(RentalImage entity) {
    this.imagePath = entity.getImagePath();
    this.imagePosition = entity.getImagePosition();
  }
}
