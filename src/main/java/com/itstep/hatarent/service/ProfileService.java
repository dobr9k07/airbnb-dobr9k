package com.itstep.hatarent.service;


import com.itstep.hatarent.dto.profile.CreateProfileDto;
import com.itstep.hatarent.dto.profile.ProfileDto;
import com.itstep.hatarent.dto.profile.UpdateProfileDto;
import com.itstep.hatarent.model.Profile;
import com.itstep.hatarent.repository.ProfileRepository;
import com.itstep.hatarent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
  @Autowired
  private ProfileRepository profileRepository;
  @Autowired
  private UserRepository userRepository;

  public ProfileDto getProfileById(Long id) {
    return new ProfileDto(profileRepository.findById(id).orElseThrow());
  }

  public ProfileDto getProfileByUserId(Long id) {
    return new ProfileDto(profileRepository.findByUser_Id(id).orElseThrow());
  }

  public Long getProfileIdByUserId(Long id) {
    return profileRepository.findByUser_Id(id).orElseThrow().getId();
  }

  public void addProfile(CreateProfileDto profile) {
    Profile entity = Profile.builder()
      .name(profile.getName())
      .surname(profile.getSurname())
      .about(profile.getSurname())
      .user(userRepository.findById(profile.getUser()).orElseThrow())
      .build();
    profileRepository.save(entity);
  }

  public void updateProfileById(Long id, UpdateProfileDto profile) {
    Profile entity = profileRepository.findById(id).orElseThrow();
    entity.setName(profile.getName());
    entity.setSurname(profile.getSurname());
    entity.setAbout(profile.getAbout());
    profileRepository.save(entity);
  }

//  public void updateProfileByUserEmail(String email, UpdateProfileDto profile) {
//    Profile entity = profileRepository.findByUser(userRepository.findByEmail(email).orElseThrow()).orElseThrow();
//    entity.setName(profile.getName());
//    entity.setSurname(profile.getSurname());
//    entity.setAbout(profile.getAbout());
//    profileRepository.save(entity);
//  }

  public void deleteProfileById(Long id) {
    profileRepository.deleteById(id);
  }
}
