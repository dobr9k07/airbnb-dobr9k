package com.itstep.hatarent.controller;

import com.itstep.hatarent.dto.credential.AuthenticationRequest;
import com.itstep.hatarent.model.User;
import com.itstep.hatarent.service.HatarentUserDetailsService;
import com.itstep.hatarent.service.UserService;
import com.itstep.hatarent.util.JwtUtil;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

  @PostMapping("register")
  public ResponseEntity<String> register(@RequestBody AuthenticationRequest request) {
    if (userService.isEmailTaken(request.getEmail())) {
      return ResponseEntity.badRequest().body("Email is taken");
    }

    User user = new User();
    user.setEmail(request.getEmail());
    user.setPassword_hash(passwordEncoder.encode(request.getPassword()));

    userService.registerUser(user);
    return ResponseEntity.ok("User is now registered");
  }

  @PostMapping("/login")
  public String loginUser(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
    authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
    );

    final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());

    return jwtUtil.generateToken(userDetails);
  }

}

