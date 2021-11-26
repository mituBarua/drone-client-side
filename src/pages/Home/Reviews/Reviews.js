import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-ridge-12828.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container className="my-5 pb-5">
      <h2 className="my-5"> WORDS FROM OUR CLIENTS</h2>

      <Slider {...settings}>
       
          {reviews.map((review) => (
            <Review review={review}></Review>
          ))}
       
      </Slider>
    </Container>
  );
};

export default Reviews;
