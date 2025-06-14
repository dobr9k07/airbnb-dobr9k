package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.profile.CreateProfileDto;
import com.itstep.hatarent.dto.profile.ProfileDto;
import com.itstep.hatarent.dto.profile.UpdateProfileDto;
import com.itstep.hatarent.service.ProfileService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Tag(name = "Profile", description = "Запросы связанные с профилями пользователей")
@RequestMapping("/api/profile")
public class ProfileController {
  private ProfileService profileService;

  @GetMapping("/{id}")
  public ProfileDto getProfileById(Long id) {
    return profileService.getprofileById(id).orElseThrow();
  }

  @PostMapping("")
  public CreateProfileDto addProfileById(CreateProfileDto profile) {
    profileService.addProfile(profile);
    return profile;
  }

  @PutMapping("/{id}")
  public Long updateProfileById(Long id, UpdateProfileDto profile) {
    profileService.updateProfileById(id, profile);
    return id;
  }

  @DeleteMapping("/{id}")
  public Long deleteProfileById(Long id) {
    profileService.deleteProfileById(id);
    return id;
  }
}
