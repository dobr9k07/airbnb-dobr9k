package com.itstep.hatarent.config;

import com.itstep.hatarent.model.*;
import com.itstep.hatarent.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@org.springframework.context.annotation.Profile("dev")
public class TestDataInitializer implements org.springframework.boot.CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    @Transactional
    public void run(String... args) {
        if (userRepository.count() > 0) {
            return;
        }

        // Create Users
        User admin = userRepository.save(User.builder()
                .email("admin@example.com")
                .password_hash("admin_hash")
                .is_admin(true)
                .build());

        User user1 = userRepository.save(User.builder()
                .email("user1@example.com")
                .password_hash("user1_hash")
                .is_admin(false)
                .build());

        User user2 = userRepository.save(User.builder()
                .email("user2@example.com")
                .password_hash("user2_hash")
                .is_admin(false)
                .build());

        User user3 = userRepository.save(User.builder()
                .email("user3@example.com")
                .password_hash("user3_hash")
                .is_admin(false)
                .build());

        User user4 = userRepository.save(User.builder()
                .email("user4@example.com")
                .password_hash("user4_hash")
                .is_admin(false)
                .build());

        // Create Profiles
        Profile adminProfile = profileRepository.save(com.itstep.hatarent.model.Profile.builder()
                .user(admin)
                .name("Admin")
                .surname("User")
                .picture_path("/images/admin.jpg")
                .about("System administrator")
                .rewards(new HashSet<>(Set.of("Admin Badge")))
                .build());

        Profile user1Profile = profileRepository.save(com.itstep.hatarent.model.Profile.builder()
                .user(user1)
                .name("John")
                .surname("Doe")
                .picture_path("/images/john.jpg")
                .about("Loves travel")
                .rewards(new HashSet<>(Set.of("Traveler of the Year")))
                .build());

        Profile user2Profile = profileRepository.save(com.itstep.hatarent.model.Profile.builder()
                .user(user2)
                .name("Jane")
                .surname("Smith")
                .picture_path("/images/jane.jpg")
                .about("Enjoys hiking")
                .rewards(new HashSet<>(Set.of("Hiker Badge")))
                .build());

        Profile user3Profile = profileRepository.save(com.itstep.hatarent.model.Profile.builder()
                .user(user3)
                .name("Alice")
                .surname("Johnson")
                .picture_path("/images/alice.jpg")
                .about("Photography enthusiast")
                .rewards(new HashSet<>(Set.of("Photographer Award")))
                .build());

        Profile user4Profile = profileRepository.save(com.itstep.hatarent.model.Profile.builder()
                .user(user4)
                .name("Bob")
                .surname("Brown")
                .picture_path("/images/bob.jpg")
                .about("Foodie and adventurer")
                .rewards(new HashSet<>(Set.of("Explorer Medal")))
                .build());

        // Create Rentals
        Rental rental1 = rentalRepository.save(Rental.builder()
                .name("Sea View Apartment")
                .description("Beautiful place by the sea")
                .price_per_night(new BigDecimal("99.99"))
                .features(new HashSet<>(Set.of("pet friendly", "wifi")))
                .latitude(new BigDecimal("46.482526"))
                .longitude(new BigDecimal("30.723309"))
                .images(new HashSet<>(Set.of("image1.jpg", "image2.jpg")))
                .users(List.of(user1, user2))
                .build());

        Rental rental2 = rentalRepository.save(Rental.builder()
                .name("Mountain Cabin")
                .description("Quiet cabin in the woods")
                .price_per_night(new BigDecimal("120.00"))
                .features(new HashSet<>(Set.of("fireplace", "hiking trails")))
                .latitude(new BigDecimal("48.710"))
                .longitude(new BigDecimal("24.632"))
                .images(new HashSet<>(Set.of("cabin1.jpg", "cabin2.jpg")))
                .users(List.of(user2, user3))
                .build());

        Rental rental3 = rentalRepository.save(Rental.builder()
                .name("City Center Loft")
                .description("Modern loft in the heart of the city")
                .price_per_night(new BigDecimal("150.00"))
                .features(new HashSet<>(Set.of("gym", "pool")))
                .latitude(new BigDecimal("50.4501"))
                .longitude(new BigDecimal("30.5234"))
                .images(new HashSet<>(Set.of("loft1.jpg", "loft2.jpg")))
                .users(List.of(user1, user3))
                .build());

        Rental rental4 = rentalRepository.save(Rental.builder()
                .name("Beach House")
                .description("Spacious house near the beach")
                .price_per_night(new BigDecimal("200.00"))
                .features(new HashSet<>(Set.of("ocean view", "bbq")))
                .latitude(new BigDecimal("45.5236"))
                .longitude(new BigDecimal("-122.6750"))
                .images(new HashSet<>(Set.of("beachhouse1.jpg", "beachhouse2.jpg")))
                .users(List.of(user2, user4))
                .build());

        Rental rental5 = rentalRepository.save(Rental.builder()
                .name("Countryside Retreat")
                .description("Peaceful getaway in the countryside")
                .price_per_night(new BigDecimal("85.50"))
                .features(new HashSet<>(Set.of("garden", "fire pit")))
                .latitude(new BigDecimal("47.6062"))
                .longitude(new BigDecimal("-122.3321"))
                .images(new HashSet<>(Set.of("retreat1.jpg", "retreat2.jpg")))
                .users(List.of(user3, user4))
                .build());

        // Create Bookings
        bookingRepository.save(Booking.builder()
                .user(user1)
                .rental(rental1)
                .startDate(LocalDate.now().plusDays(1))
                .duration(5)
                .accepted_at(LocalDateTime.now())
                .build());

        bookingRepository.save(Booking.builder()
                .user(user2)
                .rental(rental2)
                .startDate(LocalDate.now().plusDays(3))
                .duration(3)
                .accepted_at(LocalDateTime.now())
                .build());

        bookingRepository.save(Booking.builder()
                .user(user3)
                .rental(rental3)
                .startDate(LocalDate.now().plusDays(7))
                .duration(2)
                .accepted_at(LocalDateTime.now())
                .build());

        bookingRepository.save(Booking.builder()
                .user(user4)
                .rental(rental4)
                .startDate(LocalDate.now().plusDays(10))
                .duration(7)
                .accepted_at(LocalDateTime.now())
                .build());

        bookingRepository.save(Booking.builder()
                .user(user1)
                .rental(rental5)
                .startDate(LocalDate.now().plusDays(15))
                .duration(4)
                .accepted_at(LocalDateTime.now())
                .build());

        bookingRepository.save(Booking.builder()
                .user(user2)
                .rental(rental1)
                .startDate(LocalDate.now().plusDays(20))
                .duration(6)
                .accepted_at(LocalDateTime.now())
                .build());

        // Create Reviews
        reviewRepository.save(Review.builder()
                .userProfile(user1Profile)
                .rental(rental1)
                .rating((byte) 5)
                .description("Amazing place!")
                .build());

        reviewRepository.save(Review.builder()
                .userProfile(user2Profile)
                .rental(rental2)
                .rating((byte) 4)
                .description("Very cozy and quiet.")
                .build());

        reviewRepository.save(Review.builder()
                .userProfile(user3Profile)
                .rental(rental3)
                .rating((byte) 3)
                .description("Good location but a bit noisy.")
                .build());

        reviewRepository.save(Review.builder()
                .userProfile(user4Profile)
                .rental(rental4)
                .rating((byte) 5)
                .description("Perfect for a family vacation.")
                .build());

        reviewRepository.save(Review.builder()
                .userProfile(user1Profile)
                .rental(rental5)
                .rating((byte) 4)
                .description("Lovely retreat, great value!")
                .build());

        reviewRepository.save(Review.builder()
                .userProfile(user2Profile)
                .rental(rental1)
                .rating((byte) 4)
                .description("Great view, but a bit pricey.")
                .build());

        reviewRepository.save(Review.builder()
                .userProfile(user3Profile)
                .rental(rental2)
                .rating((byte) 5)
                .description("Loved the hiking trails!")
                .build());

        reviewRepository.save(Review.builder()
                .userProfile(user4Profile)
                .rental(rental5)
                .rating((byte) 5)
                .description("A hidden gem!")
                .build());

        System.out.println("📦 Test data loaded!");
    }
}
