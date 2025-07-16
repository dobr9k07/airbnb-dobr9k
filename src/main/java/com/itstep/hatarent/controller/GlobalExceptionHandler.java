package com.itstep.hatarent.controller;

import java.nio.file.NoSuchFileException;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

import org.apache.coyote.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

  private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ExceptionHandler({NoSuchElementException.class, NoSuchFileException.class})
  public String handleNotFoundExceptions(Exception ex) {
    return ex.getMessage();
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler({BadRequestException.class, HttpMessageNotReadableException.class})
  public String handleBadRequest(final RuntimeException ex) {
    return ex.getMessage();
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleValidationExceptions(
    MethodArgumentNotValidException ex) {
      Map<String, String> errors = new HashMap<>();
      ex.getBindingResult().getAllErrors().forEach((error) -> {
          String fieldName = ((FieldError) error).getField();
          String errorMessage = error.getDefaultMessage();
          errors.put(fieldName, errorMessage);
      });
      return errors;
  }

  @ResponseStatus(HttpStatus.FORBIDDEN)
  @ExceptionHandler(AccessDeniedException.class)
  public String handleAccessDenied(final AccessDeniedException ex) {
    return ex.getMessage();
  }

  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ExceptionHandler(RuntimeException.class)
  public String handleGenericRuntimeException(final RuntimeException ex) {
    logger.error("Unhandled server error: ", ex);
    return "Server error";
  }
}
