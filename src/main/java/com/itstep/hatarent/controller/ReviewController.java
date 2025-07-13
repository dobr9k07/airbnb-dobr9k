package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.review.ReviewDto;
import com.itstep.hatarent.model.Review;
import com.itstep.hatarent.service.ReviewService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name = "Review", description = "Запросы связанные с отзывами")
@RequestMapping("/api/review/reviewByRentalId")
public class ReviewController {
  private ReviewService reviewService;

  @GetMapping("")
  public List<Review> getReviewsByRentalIdAndPageNumber(Long id, Integer pageNumber) {
    return reviewService.getReviewByRentalIdAndPageNumber(id, pageNumber);
  }

  @PutMapping("")
  public Long addReviewByRentalId(Long id, @RequestBody ReviewDto review) {
    return id;
  }
}
