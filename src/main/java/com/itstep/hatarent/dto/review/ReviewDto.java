package com.itstep.hatarent.dto.review;

import com.itstep.hatarent.model.Review;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReviewDto {
  private String userName;
  private String date;
  private String text;
  private Byte rating;

  public ReviewDto(Review entity) {
    this.userName = entity.getUserProfile().getName();
    this.date = entity.getCreated_at().toString();
    this.text = entity.getDescription();
    this.rating = entity.getRating();
  }
}
