package com.itstep.hatarent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {
	org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class})
public class HatarentApplication {

	public static void main(String[] args) {
		SpringApplication.run(HatarentApplication.class, args);
	}

}
