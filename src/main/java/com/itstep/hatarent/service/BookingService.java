package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.booking.BookingDto;
import com.itstep.hatarent.dto.booking.CreateBookingDto;
import com.itstep.hatarent.dto.booking.UpdateBookingDto;
import com.itstep.hatarent.model.Booking;
import com.itstep.hatarent.repository.BookingRepository;
import com.itstep.hatarent.repository.RentalRepository;
import com.itstep.hatarent.repository.UserRepository;
import org.apache.commons.lang3.NotImplementedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
  @Autowired
  private BookingRepository bookingRepository;
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private RentalRepository rentalRepository;


//  public List<BookingDto> getAllBookings(){
//    return bookingRepository.findAll().stream().map(BookingDto::new).toList();
//  }
//
//  public Optional<List<BookingDto>> getBookingsByRentalId(Long id) {
//    return Optional.of(bookingRepository.findByRental_Id(id).stream().map(BookingDto::new).toList());
//  }

  public Optional<BookingDto> getBookingById(Long id) {
    return Optional.of(new BookingDto(bookingRepository.findById(id).orElseThrow()));
  }

  public void addBooking(CreateBookingDto booking) {
    Booking entity = Booking.builder().user(userRepository.findById(booking.getGuest()).orElseThrow())
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
    bookingRepository.save(entity);
  }

  public void deleteBookingById(Long id) {
    bookingRepository.deleteById(id);
  }
}
