import React from "react";
import { Button } from "react-bootstrap";
import img from "../../../images/banner/singlebanner.jpg";
import './Introduction.css';
const Introduction = () => {
  return (
    <div className="my-5 pt-5 container">
      <h1>Introduction</h1>
      <div className="my-5 singleBanner">
        <img src={img} alt="singleBanner" />
        <h2 className="mt-5">CINEMATIC MADE AUTOMATIC</h2>
        <p className="mt-4">
          And you know where you were then. Girls were girls and men were men.
          Mister we could use a man like Herbert Hoover again. So get a witch's
          shawl on a broomstick you can crawl on. Were gonna pay a call on the
          Addams Family. Goodbye gray sky there's nothing can hold me when I
          hold you. Feels so right it cant be wrong
        </p>
        <Button className="contact-btn my-4">Contact Us</Button>
      </div>
    </div>
  );
};

export default Introduction;
