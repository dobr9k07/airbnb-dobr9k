package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.profile.ProfileDto;
import com.itstep.hatarent.dto.profile.UpdateProfileDto;
import com.itstep.hatarent.service.ProfileService;
import com.itstep.hatarent.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
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

  @Operation(summary = "Получить профиль пользователя по ID", description = "Возвращяет профиль пользователя по указаному ID профиля (не пользователя)")
  @ApiResponses(value = {
          @ApiResponse(responseCode = "200", description = "Профиль найден"),
          @ApiResponse(responseCode = "404", description = "Профиль не найдено", content = @Content)
      })
  @GetMapping("/by-id")
  public ResponseEntity<ProfileDto> getProfileById(@Parameter(description = "ID профиля") Long id) {
    return ResponseEntity.ok(profileService.getProfileById(id));
  }

  @Operation(summary = "Получить профиль пользователя", description = "Возвращяет профиль текущего пользователя(аутентифицированного пользователя из JWT)")
  @ApiResponses(value = {
          @ApiResponse(responseCode = "200", description = "Профиль найден"),
          @ApiResponse(responseCode = "404", description = "Профиль не найдено", content = @Content)
      })
  @GetMapping("/")
  public ResponseEntity<ProfileDto> getUserProfile(Authentication authentication) {
    User userDetails = (User) authentication.getPrincipal();
    return ResponseEntity.ok(profileService.getProfileByUserId(userService.getUserIdByPrincipal(userDetails)));
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
  @Operation(summary = "Изменить профиль текущего пользователя", description = "Изменяет профиль текущего пользователя(аутентифицированного пользователя из JWT)")
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Профиль изменен", content = @Content),
    @ApiResponse(responseCode = "404", description = "Профиль не найдено", content = @Content)
  })
  @PutMapping("")
  public ResponseEntity<Void> updateUserProfile(@RequestBody @Valid UpdateProfileDto profile, Authentication authentication) {
    User userDetails = (User) authentication.getPrincipal();
    Long userId = userService.getUserIdByPrincipal(userDetails);
    Long profileId = profileService.getProfileIdByUserId(userId);

    profileService.updateProfileById(profileId, profile);
    return ResponseEntity.ok().build();
  }


  @Operation(summary = "Частично изменить профиль текущего пользователя", description = "Частично изменяет профиль текущего пользователя(аутентифицированного пользователя из JWT)")
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Профиль изменен", content = @Content),
    @ApiResponse(responseCode = "404", description = "Профиль не найдено", content = @Content)
  })
  @PatchMapping("")
  public ResponseEntity<Void> patchUserProfile(@RequestBody @Valid UpdateProfileDto profile, Authentication authentication) {
    User userDetails = (User) authentication.getPrincipal();
    Long userId = userService.getUserIdByPrincipal(userDetails);
    Long profileId = profileService.getProfileIdByUserId(userId);

    profileService.patchProfileById(profileId, profile);
    return ResponseEntity.ok().build();
  }

  // @DeleteMapping("/admin/")
  // public Long deleteProfileById(Long id) {
  //   profileService.deleteProfileById(id);
  //   return id;
  // }
}
