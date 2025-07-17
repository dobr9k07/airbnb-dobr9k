package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.booking.BookingDto;
import com.itstep.hatarent.dto.booking.CreateBookingDto;
import com.itstep.hatarent.dto.booking.UpdateBookingDto;
import com.itstep.hatarent.service.BookingService;
import com.itstep.hatarent.service.RentalService;
import com.itstep.hatarent.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@Tag(name = "Booking", description = "Запросы связанные с бронированием")
@RequestMapping("/api/booking")
public class BookingController {
  private BookingService bookingService;
  private UserService userService;
  private RentalService rentalService;

  @Operation(summary = "Получить информацию бронирования", description = "Получить информацию про бронирование по его ID")
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Бронирование получено"),
    @ApiResponse(responseCode = "404", description = "Бронирование не найдено", content = @Content),
  })
  @GetMapping("/")
  public ResponseEntity<BookingDto> getBookingById(@Parameter(description = "ID бронирования") Long id, Authentication authentication) {
    if (!bookingService.isAssociatedWithUser(id, userService.getUserIdByPrincipal((User) authentication.getPrincipal()))) {
      throw new AccessDeniedException("Access denied");
    }

    return ResponseEntity.ok(bookingService.getGuestBookingById(id));
  }

  @Operation(summary = "Получить бронирования пользователя", description = "Получить бронирования пользователя(из JWT токена)")
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Бронирования получено"),
    @ApiResponse(responseCode = "404", description = "Бронирования не найдено", content = @Content),
  })
  @GetMapping("/by-user")
  public ResponseEntity<List<BookingDto>> getBookingByUserId(Authentication authentication) {
    return ResponseEntity.ok(bookingService.getBookingsByUserId(userService.getUserIdByPrincipal((User) authentication.getPrincipal())));
  }

  @Operation(summary = "Получить бронирования по жилью", description = "Получить бронирования жилья по его ID")
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Бронирования получено"),
    @ApiResponse(responseCode = "404", description = "Бронирования не найдено", content = @Content),
  })
  @GetMapping("/by-rental-id")
  public ResponseEntity<List<BookingDto>> getAllBookingsByRentalId(@Parameter(description = "ID жилья") Long id, Authentication authentication) {
    if (!rentalService.isAssociatedWithUser(id, userService.getUserIdByPrincipal((User) authentication.getPrincipal()))) {
      throw new AccessDeniedException("Access denied");
    }

    return ResponseEntity.ok(bookingService.getBookingsByRentalId(id));
  }


  @Operation(
    summary = "Забронировать",
    description = "Забронировать жилье"
  )
  @ApiResponses(value = {
    @ApiResponse(responseCode = "201", description = "Забронированно", content = @Content),
    @ApiResponse(responseCode = "404", description = "Жилье не найдено", content = @Content)
  })
  @PostMapping("")
  public ResponseEntity<Void> addBooking(@RequestBody @Valid CreateBookingDto booking, Authentication authentication) {
    bookingService.addBooking(booking, userService.getUserIdByPrincipal((User) authentication.getPrincipal()));
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }

  @Operation(
    summary = "Изменнить бронирование",
    description = "Изменить данные бронирования - что бы изменть жилье бронирования удалите текущий и создайте новый; При изменении жилья, его принятие хозяином отменяеться"
  )
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Измененно", content = @Content),
    @ApiResponse(responseCode = "404", description = "Жилье не найдено", content = @Content)
  })
  @PutMapping("")
  public ResponseEntity<Void> updateBookingById(@Parameter(description = "ID бронирования") Long id, @RequestBody @Valid UpdateBookingDto booking, Authentication authentication) {
    if (!bookingService.isAssociatedWithUser(id, userService.getUserIdByPrincipal((User) authentication.getPrincipal()))) {
      throw new AccessDeniedException("Access denied");
    }
    bookingService.updateBookingById(id, booking);
    return ResponseEntity.ok().build();
  }

  @Operation(
    summary = "Принять бронирование",
    description = "Хозяин жилья может принять бронирование"
  )
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Измененно", content = @Content),
    @ApiResponse(responseCode = "404", description = "Жилье не найдено", content = @Content)
  })
  @PutMapping("/accept")
  public ResponseEntity<Void> acceptBookingById(@Parameter(description = "ID бронирования") Long id, Authentication authentication) {
    if (!rentalService.isAssociatedWithUser(id, userService.getUserIdByPrincipal((User) authentication.getPrincipal()))) {
      throw new AccessDeniedException("Access denied");
    }
    bookingService.acceptBookingById(id);
    return ResponseEntity.ok().build();
  }

  @Operation(
    summary = "Удалить бронирование",
    description = "Удалить бронирование по его ID"
  )
  @ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Удалено", content = @Content),
    @ApiResponse(responseCode = "404", description = "Бронирование не найдено", content = @Content),
  })
  @DeleteMapping("")
  public ResponseEntity<Void> deleteBookingById(@Parameter(description = "ID бронирования") Long id, Authentication authentication) {
    if (!bookingService.isAssociatedWithUser(id, userService.getUserIdByPrincipal((User) authentication.getPrincipal())) 
        && !!rentalService.isAssociatedWithUser(id, userService.getUserIdByPrincipal((User) authentication.getPrincipal()))) {
      throw new AccessDeniedException("Access denied");
    }
    bookingService.deleteBookingById(id);
    return ResponseEntity.ok().build();
  }
}
