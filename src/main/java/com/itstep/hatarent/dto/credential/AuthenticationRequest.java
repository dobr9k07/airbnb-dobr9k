package com.itstep.hatarent.dto.credential;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AuthenticationRequest {
  @Schema(description = "Почта пользователя")
  @Email
  private String email;
  @Schema(description = "Пароль пользователя")
  @Size(min = 6, max = 20)
  private String password;
}
