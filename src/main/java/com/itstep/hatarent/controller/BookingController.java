package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.booking.BookingDto;
import com.itstep.hatarent.dto.booking.CreateBookingDto;
import com.itstep.hatarent.dto.booking.UpdateBookingDto;
import com.itstep.hatarent.service.BookingService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Tag(name = "Booking", description = "Запросы связанные с бронированием")
@RequestMapping("/api/booking")
public class BookingController {
  private BookingService bookingService;

  @GetMapping("/{id}")
  public BookingDto getBookingById(Long id) {
    return bookingService.getBookingById(id).orElseThrow();
  }

  @PostMapping("")
  public CreateBookingDto addBookingById(CreateBookingDto booking) {
    bookingService.addBooking(booking);
    return booking;
  }

  @PutMapping("/{id}")
  public Long updateBookingById(Long id, UpdateBookingDto booking) {
    bookingService.updateBookingById(id, booking);
    return id;
  }

  @DeleteMapping("/{id}")
  public Long deleteBookingById(Long id) {
    bookingService.deleteBookingById(id);
    return id;
  }
}
