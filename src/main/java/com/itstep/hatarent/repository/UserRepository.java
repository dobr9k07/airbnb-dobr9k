package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
