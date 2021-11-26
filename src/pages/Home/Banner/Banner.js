import React from "react";
import { Button, Carousel, Dropdown } from "react-bootstrap";
import img1 from "../../../images/banner/slider1.jpg";
import img2 from "../../../images/banner/slider2.jpg";
import img3 from "../../../images/banner/slider3.jpg";

import "./Banner.css";
const Banner = () => {
  return (
    <div >
      <Carousel fade className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h1>It's still magic even If you know how It's done</h1>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h1>Success is where preparation & opportunity meet</h1>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h1>Success is the maximum utilization of the ability that you have</h1>
             <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
};

export default Banner;