package com.itstep.hatarent.service;

import com.itstep.hatarent.model.Review;
import com.itstep.hatarent.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
  @Autowired
  private ReviewRepository reviewRepository;

  public List<Review> getReviewByRentalIdAndPageNumber(Long rentalId, int pageNumber) {
    return reviewRepository.findByRentalId(rentalId, PageRequest.of(pageNumber, 10)).getContent();
  }
}
