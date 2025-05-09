package com.itstep.hatarent.dto;

import com.itstep.hatarent.model.Profile;
import lombok.Data;

import java.util.Set;

@Data
public class ProfileDto {
  private Long user_id;
  private String picture_path;
  private String name;
  private String surname;
  private String about;
  private Set<String> rewards;

  public ProfileDto(Profile entity) {
    this.user_id = entity.getUser().getId();
    this.picture_path = entity.getPicture_path();
    this.name = entity.getName();
    this.surname = entity.getSurname();
    this.about = entity.getAbout();
    this.rewards = entity.getRewards();
  }
}
