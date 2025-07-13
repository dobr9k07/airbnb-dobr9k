package com.itstep.hatarent.dto.user;

import com.itstep.hatarent.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class UserDto {
  private Long id;
  private String email;
  private String password_hash;
  private LocalDateTime created_at;
  private boolean is_admin;

  public UserDto(User entity) {
    id = entity.getId();
    email = entity.getEmail();
    password_hash = entity.getPassword_hash();
    created_at = entity.getCreated_at();
    is_admin = entity.is_admin();
  }
}
