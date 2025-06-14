package com.itstep.hatarent.dto.profile;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateProfileDto {
  private String name;
  private String surname;
  private String about;
}
