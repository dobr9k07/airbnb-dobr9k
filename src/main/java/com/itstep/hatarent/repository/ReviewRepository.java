package com.itstep.hatarent.repository;

import com.itstep.hatarent.model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

  Page<Review> findByRentalId(Long rentalId, Pageable pageable);
}
