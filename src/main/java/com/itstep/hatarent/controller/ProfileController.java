package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.profile.ProfileDto;
import com.itstep.hatarent.service.ProfileService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name = "Profile", description = "Запросы связанные с профилями пользователей")
@RequestMapping("/api/profile")
public class ProfileController {
  private ProfileService profileService;

  @GetMapping("")
  public List<ProfileDto> getProfiles() {
    return profileService.getAllProfiles();
  }
}
