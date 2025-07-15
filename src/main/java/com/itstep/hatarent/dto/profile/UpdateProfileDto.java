package com.itstep.hatarent.dto.profile;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateProfileDto {
  @Schema(description = "Имя пользователя", example = "Паша")
  private String name;
  @Schema(description = "Фамилия пользователя", example = "Добрый")
  private String surname;
  @Schema(description = "Информация про пользователя", example = "Люблю програмировать")
  private String about;
}
