package com.itstep.hatarent.service;

import com.itstep.hatarent.model.Profile;
import com.itstep.hatarent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
  @Autowired
  private UserRepository userRepository;
}
