package com.galvanize.flight_review_backend;

import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review, Long> {

    Iterable<Review> findByUser(String user);
    Iterable<Review> findByFlight(String flight);

}