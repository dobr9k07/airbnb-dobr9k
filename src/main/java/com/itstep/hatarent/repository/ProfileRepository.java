package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
