import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  let typeStyle = {
    position: "absolute",
    top: "13px",
    right: "59px",
    bottom: "0",
    textTransform: "uppercase",
    backgroundColor: "#ff7f47",
    height: "30px",
    width: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
  };

  const { id, name, price, type, img } = product;
  return (
    <div>
      <Card className="offer-card">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body>
          <div className="details">
            <h4>{name}</h4>
            <h5>{price}</h5>
            {type ? <p style={typeStyle}>{type} !</p> : ""}

            <Link to={`/productDetails/${id}`}>
              <Button variant="primary">Purchase Now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
