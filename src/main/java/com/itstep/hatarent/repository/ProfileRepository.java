package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.Profile;
import com.itstep.hatarent.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
  Optional<Profile> findByUser_Id(Long userId);

  Optional<Profile> findByUser(User user);
}
