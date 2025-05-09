package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.ProfileDto;
import com.itstep.hatarent.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {
  @Autowired
  private ProfileRepository profileRepository;

  public List<ProfileDto> getAllProfiles(){
    return profileRepository.findAll().stream().map(ProfileDto::new).toList();
  }
}
