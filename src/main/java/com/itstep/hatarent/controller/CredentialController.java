package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.credential.AuthenticationRequest;
import com.itstep.hatarent.model.User;
import com.itstep.hatarent.service.HatarentUserDetailsService;
import com.itstep.hatarent.service.UserService;
import com.itstep.hatarent.util.JwtUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@Tag(name = "Credential", description = "Запросы для логина/регистрации")
@RequestMapping("/api")
public class CredentialController {

  private UserService userService;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private HatarentUserDetailsService userDetailsService;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private JwtUtil jwtUtil;

  @Operation(summary = "Регистрация", description = "Зарегистрировать пользователя, получить JWT")
  @ApiResponses(value = {
          @ApiResponse(responseCode = "201", description = "Пользователя зарегистрированно, получен JWT"),
          @ApiResponse(responseCode = "409", description = "Пользователь с такой почтой уже сувществует", content = @Content),
      })
  @PostMapping("register")
  public ResponseEntity<String> register(@Valid @RequestBody AuthenticationRequest auhtenticationRequest) {
    if (userService.isEmailTaken(auhtenticationRequest.getEmail())) {
      return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    User user = User.builder()
      .email(auhtenticationRequest.getEmail())
      .password_hash(passwordEncoder.encode(auhtenticationRequest.getPassword()))
      .build();

    userService.registerUser(user);

    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(generateToken(auhtenticationRequest));
  }

  @Operation(summary = "Логин", description = "Авторизовать пользователя, получить JWT")
  @ApiResponses(value = {
          @ApiResponse(responseCode = "200", description = "Пользователя зарегистрированно, получен JWT"),
          @ApiResponse(responseCode = "403", description = "Неправильные данные авторизации", content = @Content),
      })
  @PostMapping("/login")
  public ResponseEntity<String> loginUser(@Valid @RequestBody AuthenticationRequest authenticationRequest) throws Exception {
    return ResponseEntity.ok(generateToken(authenticationRequest));
  }

  public String generateToken(AuthenticationRequest authenticationRequest) {
    authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
    );

    final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());

    return jwtUtil.generateToken(userDetails);
  }

}

