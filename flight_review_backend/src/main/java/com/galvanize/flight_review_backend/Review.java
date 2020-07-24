package com.galvanize.flight_review_backend;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String flight;
    private String user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFlight() {
        return flight;
    }

    public void setFlight(String flight) {
        this.flight = flight;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public int getFlightRating() {
        return flightRating;
    }

    public void setFlightRating(int flightRating) {
        this.flightRating = flightRating;
    }

    public int getReviewRating() {
        return reviewRating;
    }

    public void setReviewRating(int reviewRating) {
        this.reviewRating = reviewRating;
    }

    public String getPhoto_src() {
        return photo_src;
    }

    public void setPhoto_src(String photo_src) {
        this.photo_src = photo_src;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    private int flightRating;
    private int reviewRating;
    private String photo_src;
    private String comment;
}