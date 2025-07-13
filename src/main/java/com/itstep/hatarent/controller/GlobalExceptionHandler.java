package com.itstep.hatarent.controller;

import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.NoSuchFileException;
import java.util.NoSuchElementException;

@RestControllerAdvice
public class GlobalExceptionHandler {
 @ExceptionHandler(NoSuchElementException.class)
 public ResponseEntity<String> noSuchElementException(NoSuchElementException ex) {
   return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
 }

 @ExceptionHandler(NoSuchFileException.class)
 public ResponseEntity<String> noSuchFileException(NoSuchFileException ex) {
   return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
 }

 @ExceptionHandler(BadRequestException.class)
 public ResponseEntity<String> wrongRequestException(Exception ex) {
   return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
 }

 @ExceptionHandler(Exception.class)
 public ResponseEntity<String> genericException(Exception ex) {
   return new ResponseEntity<>("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
 }
}
