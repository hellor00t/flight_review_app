package com.galvanize.flight_review_backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewRepository repository;

    public ReviewController(ReviewRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Review> all() {
        return this.repository.findAll();
    }

}