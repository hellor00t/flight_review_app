package com.galvanize.flight_review_backend;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@CrossOrigin
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

//    getReviewByFlight()
    @GetMapping("/user/{review}/all")
    public Iterable<Review> getReviewsByUser(@PathVariable String review) {
        Iterable<Review> reviews = this.repository.findByUser(review);
        return reviews;
    }


    @GetMapping("/flight/{flight}/all")
    public Iterable<Review> getReviewsByFlight(@PathVariable String flight) {
        Iterable<Review> flights = this.repository.findByFlight(flight);
        return flights;
    }

    @PostMapping("")
    public Review postReview(@RequestBody Review review) {
        this.repository.save(review);
        return review;
    }

    @PatchMapping("{id}")
    public Review updateReview(@PathVariable Long id, @RequestBody Review bodyData) {
        Review orig = this.repository.findById(id).get();
        if (bodyData.getFlight() != null) {
            orig.setFlight(bodyData.getFlight());
        }
        if (bodyData.getUser() != null) {
            orig.setUser(bodyData.getUser());
        }
        if (bodyData.getFlightRating() != 0) {
            orig.setFlightRating(bodyData.getFlightRating());
        }
        if (bodyData.getPhoto_src() != null) {
            orig.setPhoto_src(bodyData.getPhoto_src());
        }
        if (bodyData.getReviewRating() != 0) {
            orig.setReviewRating(bodyData.getReviewRating());
        }
        if (bodyData.getUser() != null) {
            orig.setUser(bodyData.getUser());
        }
        if (bodyData.getComment() != null) {
            orig.setComment(bodyData.getComment());
        }
        return this.repository.save(orig);
    }


    @DeleteMapping("{id}")
    public String deleteReview(@PathVariable Long id) {
        this.repository.delete(this.repository.findById(id).get());
        return "Review removed from database";
    }

}