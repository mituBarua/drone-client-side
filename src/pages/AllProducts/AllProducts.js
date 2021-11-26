import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AllProduct from "../AllProduct/AllProduct";
import Footer from "../Shared/Footer/Footer";
import SharedHeader from "../Shared/SharedHeader/SharedHeader";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-ridge-12828.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div>
      <SharedHeader></SharedHeader>
      <h3 className="my-4">Our All Products</h3>
      <Container>
        <Row className="py-3 my-2">
          {allProducts.map((allProduct) => (
            <Col md={4} sm={6} className="my-2">
              <AllProduct
                key={allProduct.id}
                allProduct={allProduct}
              ></AllProduct>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
