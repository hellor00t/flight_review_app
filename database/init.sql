CREATE database `flight_reviews`;
USE `flight_reviews`;
CREATE TABLE `reviews` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) DEFAULT NULL,
  `flight` varchar(255) DEFAULT NULL,
  `flight_rating` int NOT NULL,
  `photo_src` varchar(255) DEFAULT NULL,
  `review_rating` int NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO reviews (comment, flight, flight_rating, photo_src, review_rating, user)
VALUES ('test comment', 'FA 177', '5', 'http://localhost:8080/images/test.jpg', '4', 'anonymous'); 

