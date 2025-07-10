package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.review.ReviewDto;
import com.itstep.hatarent.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ReviewService {
  @Autowired
  private ReviewRepository reviewRepository;

  public List<ReviewDto> getReviewByRentalIdAndPageNumber(Long rentalId, int pageNumber) {
    return reviewRepository.findByRentalId(rentalId, PageRequest.of(pageNumber, 10)).getContent()
      .stream().map(ReviewDto::new).toList();
  }
}
