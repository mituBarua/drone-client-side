import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [allManageProducts, setAllManageProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://murmuring-ridge-12828.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setAllManageProducts(data));
  }, []);
 
  return (
    <>
      <h2>Manage All Product</h2>
    
        <Container>
        <Row className="py-3 my-2">
          {allManageProducts.map((allManageProduct) => (
            <Col md="4" className="my-2">
              <ManageProduct key={allManageProduct.id} allManageProduct={allManageProduct}/>
            </Col>
          ))}
        </Row>
        </Container>
      
    </>
  );
};

export default ManageProducts;
