package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.booking.BookingDto;
import com.itstep.hatarent.dto.booking.CreateBookingDto;
import java.time.LocalDateTime;
import com.itstep.hatarent.dto.booking.UpdateBookingDto;
import com.itstep.hatarent.model.Booking;
import com.itstep.hatarent.repository.BookingRepository;
import com.itstep.hatarent.repository.RentalRepository;
import com.itstep.hatarent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
  @Autowired
  private BookingRepository bookingRepository;
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private RentalRepository rentalRepository;

  public BookingDto getGuestBookingById(Long id) {
    return new BookingDto(bookingRepository.findById(id).orElseThrow());
  }

  // public void addBooking(CreateBookingDto booking) {
  //   Booking entity = Booking.builder().user(userRepository.findById(booking.getGuest()).orElseThrow())
  //     .rental(rentalRepository.findById(booking.getRental()).orElseThrow())
  //     .startDate(booking.getStartDate())
  //     .duration(booking.getDuration())
  //     .build();
  //   bookingRepository.save(entity);
  // }

   public List<BookingDto> getBookingsByRentalId(Long id) {
     return bookingRepository.findByRental_Id(id).orElseThrow().stream().map(BookingDto::new).toList();
   }

   public List<BookingDto> getBookingsByUserId(Long id) {
     return bookingRepository.findByUser_Id(id).orElseThrow().stream().map(BookingDto::new).toList();
   }


  public void addBooking(CreateBookingDto booking, Long guestId) {
    Booking entity = Booking.builder().user(userRepository.findById(guestId).orElseThrow())
      .rental(rentalRepository.findById(booking.getRental()).orElseThrow())
      .startDate(booking.getStartDate())
      .duration(booking.getDuration())
      .build();
    bookingRepository.save(entity);
  }

  public void updateBookingById(Long id, UpdateBookingDto booking) {
    Booking entity = bookingRepository.findById(id).orElseThrow();
    entity.setDuration(booking.getDuration());
    entity.setStartDate(booking.getStartDate());
    entity.setAccepted_at(null);
    bookingRepository.save(entity);
  }

  public void acceptBookingById(Long id) {
    Booking entity = bookingRepository.findById(id).orElseThrow();
    entity.setAccepted_at(LocalDateTime.now());
    bookingRepository.save(entity);
  }

  public void deleteBookingById(Long id) {
    bookingRepository.deleteById(id);
  }

//  public boolean isAssociatedWithUser(Long id, User userDetails) {
//    Long userId = userRepository.findByEmail(userDetails.getUsername()).orElseThrow().getId();
//    return bookingRepository.findById(id).stream().anyMatch(booking -> booking.getUser().getId().equals(userId));
//  }

  public boolean isAssociatedWithUser(Long id, Long userId) {
    return bookingRepository.findById(id).stream().anyMatch(booking -> booking.getUser().getId().equals(userId));
  }
}
