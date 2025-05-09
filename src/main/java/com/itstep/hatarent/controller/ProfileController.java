package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.ProfileDto;
import com.itstep.hatarent.dto.RentalDto;
import com.itstep.hatarent.service.ProfileService;
import com.itstep.hatarent.service.RentalService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/profile")
public class ProfileController {
  private ProfileService profileService;

  @GetMapping("")
  public List<ProfileDto> getProfiles() {
    return profileService.getAllProfiles();
  }
}
