package com.galvanize.flight_review_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FlightReviewBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightReviewBackendApplication.class, args);
	}

}
