package com.itstep.hatarent.dto.credential;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AuthenticationRequest {
  private String email;
  private String password;
}
