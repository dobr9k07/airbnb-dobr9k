package com.itstep.hatarent.service;

import com.itstep.hatarent.model.Profile;
import com.itstep.hatarent.model.User;
import com.itstep.hatarent.repository.ProfileRepository;
import com.itstep.hatarent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ProfileRepository profileRepository;

//  public UserDto getUserByEmail(String email) {
//    return new UserDto(userRepository.findByEmail(email).orElseThrow());
//  }

  public Long getUserIdByPrincipal(org.springframework.security.core.userdetails.User user) {
    return userRepository.findByEmail(user.getUsername()).orElseThrow().getId();
  }

  public boolean isEmailTaken(String email) {
    return userRepository.findByEmail(email).isPresent();
  }

  public void registerUser(User user) {
    userRepository.save(user);
    Profile userProfile = Profile.builder().user(user)
      .name("Name")
      .surname("Surname")
      .about("Tell something about you")
      .build();
    profileRepository.save(userProfile);
  }
}
