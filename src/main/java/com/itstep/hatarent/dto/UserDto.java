package com.itstep.hatarent.dto;

import java.time.LocalDateTime;

public class UserDto {
  private String email;
  private String password_hash;
  private LocalDateTime created_at;
  private boolean is_admin;
}
