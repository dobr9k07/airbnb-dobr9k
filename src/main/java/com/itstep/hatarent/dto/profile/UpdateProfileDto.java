package com.itstep.hatarent.dto.profile;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateProfileDto {
  @Schema(description = "Имя пользователя", example = "Паша")
  @Size(max = 10)
  private String name;
  @Schema(description = "Фамилия пользователя", example = "Добрый")
  @Size(max = 10)
  private String surname;
  @Schema(description = "Информация про пользователя", example = "Люблю програмировать")
  @Size(max = 200)
  private String about;
}
