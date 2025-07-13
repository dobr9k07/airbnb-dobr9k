package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.booking.BookingDto;
import com.itstep.hatarent.dto.booking.CreateBookingDto;
import com.itstep.hatarent.dto.booking.UpdateBookingDto;
import com.itstep.hatarent.dto.user.UserDto;
import com.itstep.hatarent.model.Booking;
import com.itstep.hatarent.model.Rental;
import com.itstep.hatarent.service.BookingService;
import com.itstep.hatarent.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;

import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@AllArgsConstructor
@Tag(name = "Booking", description = "Запросы связанные с бронированием")
@RequestMapping("/api/booking")
public class BookingController {
  private BookingService bookingService;
  private UserService userService;

  @GetMapping("")
  public BookingDto getBookingById(Long id, Authentication authentication) {
    org.springframework.security.core.userdetails.User userDetails =
      (org.springframework.security.core.userdetails.User) authentication.getPrincipal();

    if (!bookingService.isAssociatedWithUser(id, userService.getUserIdByPrincipal(userDetails))) {
      throw new AccessDeniedException("Access denied");
    };

    return bookingService.getBookingById(id);
  }

  @PostMapping("")
  public CreateBookingDto addBooking(@RequestBody CreateBookingDto booking, Authentication authentication) {
    bookingService.addBooking(booking, userService.getUserIdByPrincipal((User) authentication.getPrincipal()));
    return booking;
  }

  @PutMapping("")
  public Long updateBookingById(Long id, @RequestBody UpdateBookingDto booking) {
    bookingService.updateBookingById(id, booking);
    return id;
  }

  @DeleteMapping("")
  public Long deleteBookingById(Long id) {
    bookingService.deleteBookingById(id);
    return id;
  }
}
