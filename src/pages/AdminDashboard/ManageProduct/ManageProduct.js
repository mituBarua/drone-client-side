import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const ManageProduct = ({ allManageProduct }) => {
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
  const [control, setConrol] = useState(false);
  const { _id, name, price, type, img } = allManageProduct;

  const handleDelete = (id) => {
    console.log(id)
    window.confirm("Are you sure ?");
    fetch(`https://murmuring-ridge-12828.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
  };
  return (
    <>
      <Card className="offer-card">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body>
          <div className="details">
            <h4>{name}</h4>
            <p>{price}</p>
            {type ? <p style={typeStyle}>{type} !</p> : ""}
            <Button onClick={() => handleDelete(_id)} variant="primary">
              Delete Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ManageProduct;
