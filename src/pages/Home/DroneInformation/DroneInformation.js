import React from "react";
import { Col, Row ,Button} from "react-bootstrap";
import droneinfo from "../../../images/imggren.jpg";
import './DroneInfomation.css';
const DroneInformation = () => {
  return (
    <>
      <Row className="my-5">
        <Col md={6} className="p-0">
          <img className="w-100" src={droneinfo} alt="droneInfo" />
        </Col>
        <Col md={6} className="bg">
          <div className="info-details">
            <h4>Take It Anywhere, Film In Any Condition</h4>
            <p className="line-height">
              And when the odds are against him and their dangers work to do.
              You bet your life Speed Racer he will see it through. On the most
              sensational inspirational celebrational Muppetational is what we
              call the Muppet Show. If you have a problem if no one else can
              help and if you can find them maybe you can hire well we're movin'
              on up to the east side to a deluxe apartment in the sky. Makin
              their way the only way they know how. That's just a little bit
              more than the law will allow.
            </p>
            <Button variant="primary">Contact Us</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DroneInformation;
