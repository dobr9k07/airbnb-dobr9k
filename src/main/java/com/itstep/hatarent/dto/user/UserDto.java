package com.itstep.hatarent.dto.user;

import java.time.LocalDateTime;


public class UserDto {
  private Long id;
  private String email;
  private String password_hash;
  private LocalDateTime created_at;
  private boolean is_admin;
}
