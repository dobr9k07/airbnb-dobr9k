package com.itstep.hatarent;

import com.itstep.hatarent.service.HatarentUserDetailsService;
import com.itstep.hatarent.util.JwtRequestFilter;
import com.itstep.hatarent.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class HatarentSecurityConfig {
  @Autowired
  private JwtUtil jwtUtil;

  @Autowired
  private HatarentUserDetailsService hatarentUserDetailsService;

  @Bean
  public SecurityFilterChain
  securityFilterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(
      auth
        -> auth.requestMatchers("/api/register", "/api/login",
          "/swagger-ui/**", "/v3/api-docs*/**")
        .permitAll()
        .anyRequest()
        .authenticated())
      .logout(LogoutConfigurer::permitAll);

    http.csrf(AbstractHttpConfigurer::disable);

    //      .logout(logout -> logout
    //        .logoutUrl("/logout")
    //        .logoutSuccessUrl("/login?logout")
    //        .invalidateHttpSession(true)
    //        .deleteCookies("JSESSIONID")
    //      );

    http.addFilterBefore(jwtRequestFilter(),
      UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }

  @Bean
  public JwtRequestFilter
  jwtRequestFilter() {
    return new JwtRequestFilter(jwtUtil, hatarentUserDetailsService);
  }

  @Bean
  public AuthenticationManager authenticationManager(
    AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}

