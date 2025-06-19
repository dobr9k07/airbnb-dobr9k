package com.itstep.hatarent;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.itstep.hatarent.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.itstep.hatarent.repository.BookingRepository;
import com.itstep.hatarent.repository.ProfileRepository;
import com.itstep.hatarent.repository.RentalImageRepository;
import com.itstep.hatarent.repository.RentalRepository;
import com.itstep.hatarent.repository.UserRepository;

import jakarta.transaction.Transactional;

@Component
@org.springframework.context.annotation.Profile("dev")
public class TestDBInitializer implements CommandLineRunner {
  
  @Autowired
  private BookingRepository bookingRepository;
  @Autowired
  private ProfileRepository profileRepository;
  @Autowired
  private RentalImageRepository rentalImageRepository;
  @Autowired
  private RentalRepository rentalRepository; 
  @Autowired
  private UserRepository userRepository; 

  @Override
  @Transactional
  public void run(String... args) {

    if (userRepository.count() > 0) return;

    // 1. Users
    User user1 = userRepository.save(User.builder()
      .email("test1@example.com")
      .password_hash("hash1")
      .created_at(LocalDateTime.now())
      .is_admin(false)
      .build());

    User user2 = userRepository.save(User.builder()
      .email("admin@example.com")
      .password_hash("hash2")
      .created_at(LocalDateTime.now())
      .is_admin(true)
      .build());

    // 2. Profiles
    profileRepository.save(Profile.builder()
      .user(user1)
      .name("John")
      .surname("Doe")
      .picture_path("/images/john.jpg")
      .about("Loves travel")
      .build());

    profileRepository.save(Profile.builder()
      .user(user2)
      .name("Admin")
      .surname("User")
      .picture_path("/images/admin.jpg")
      .about("System administrator")
      .build());

    Rental rental1 = rentalRepository.save(Rental.builder()
      .name("Sea View Apartment")
      .description("Beautiful place by the sea")
      .price_per_night(new BigDecimal("99.99"))
      .features(new java.util.HashSet<>(Set.of("pet friendly")))
      .latitude(new BigDecimal("46.482526"))
      .longitude(new BigDecimal("30.723309"))
      .users(List.of(user1))
      .build());

    Rental rental2 = rentalRepository.save(Rental.builder()
      .name("Mountain Cabin")
      .description("Quiet cabin in the woods")
      .price_per_night(new BigDecimal("120.00"))
      .latitude(new BigDecimal("48.710"))
      .longitude(new BigDecimal("24.632"))
      .users(List.of(user1, user2))
      .build());

//    rentalImageRepository.save(RentalImage.builder()
//      .rental(rental1)
//      .imagePath("/images/rental1_img1.jpg")
//      .imagePosition(1)
//      .build());
//
//    rentalImageRepository.save(RentalImage.builder()
//      .rental(rental2)
//      .imagePath("/images/rental2_img1.jpg")
//      .imagePosition(1)
//      .build());

    bookingRepository.save(Booking.builder()
      .user(user1)
      .rental(rental1)
      .startDate(LocalDate.now().plusDays(1))
      .duration(5)
      .accepted_at(LocalDateTime.now())
      .createdAt(LocalDateTime.now())
      .build());

    bookingRepository.save(Booking.builder()
      .user(user2)
      .rental(rental2)
      .startDate(LocalDate.now().plusDays(3))
      .duration(3)
      .accepted_at(LocalDateTime.now())
      .createdAt(LocalDateTime.now())
      .build());

    System.out.println("📦 Тестові дані завантажено!");
  }
}

