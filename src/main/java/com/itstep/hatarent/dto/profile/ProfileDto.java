package com.itstep.hatarent.dto.profile;

import com.itstep.hatarent.model.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
public class ProfileDto {
  @Schema(description = "Имя пользователя", example = "Паша")
  private String name;
  @Schema(description = "Фамилия пользователя", example = "Добрый")
  private String surname;
  @Schema(description = "Информация про пользователя", example = "Люблю програмировать")
  private String about;
  @Schema(description = "Награды пользователя", example = "[\"good host\", \"respectful\"]", type = "set")
  private Set<String> rewards;

  public ProfileDto(Profile entity) {
    this.name = entity.getName();
    this.surname = entity.getSurname();
    this.about = entity.getAbout();
    this.rewards = entity.getRewards();
  }
}
