package com.itstep.hatarent.dto.profile;

import com.itstep.hatarent.model.Profile;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
public class ProfileDto {
  private String picture_path;
  private Long user;
  private String name;
  private String surname;
  private String about;
  private Set<String> rewards;

  public ProfileDto(Profile entity) {
    this.picture_path = entity.getPicture_path();
    this.user = entity.getUser().getId();
    this.name = entity.getName();
    this.surname = entity.getSurname();
    this.about = entity.getAbout();
    this.rewards = entity.getRewards();
  }
}
