package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.profile.CreateProfileDto;
import com.itstep.hatarent.dto.profile.ProfileDto;
import com.itstep.hatarent.dto.profile.UpdateProfileDto;
import com.itstep.hatarent.model.Profile;
import com.itstep.hatarent.service.ProfileService;
import com.itstep.hatarent.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;


@RestController
@AllArgsConstructor
@Tag(name = "Profile", description = "Запросы связанные с профилями пользователей")
@RequestMapping("/api/profile")
public class ProfileController {
  private ProfileService profileService;
  private UserService userService;

  @GetMapping("/by-id")
  public ProfileDto getProfileById(Long id) {
    return profileService.getProfileById(id);
  }

  @GetMapping("/")
  public ProfileDto getUserProfile(Authentication authentication) {
    User userDetails = (User) authentication.getPrincipal();
    return profileService.getProfileByUserId(userService.getUserIdByPrincipal(userDetails));
  }

  // @PostMapping("/admin/")
  // public CreateProfileDto addProfile(@RequestBody CreateProfileDto profile) {
  //   profileService.addProfile(profile);
  //   return profile;
  // }

  // @PutMapping("/admin/")
  // public Long updateProfileForce(Long id, @RequestBody UpdateProfileDto profile) {
  //   profileService.updateProfileById(id, profile);
  //   return id;
  // }

  @PutMapping("")
  public Long updateUserProfile(@RequestBody UpdateProfileDto profile, Authentication authentication) {
    User userDetails = (User) authentication.getPrincipal();
    Long userId = userService.getUserIdByPrincipal(userDetails);
    Long profileId = profileService.getProfileIdByUserId(userId);
    profileService.updateProfileById(profileId, profile);
    return profileId;
  }

  // @DeleteMapping("/admin/")
  // public Long deleteProfileById(Long id) {
  //   profileService.deleteProfileById(id);
  //   return id;
  // }
}
