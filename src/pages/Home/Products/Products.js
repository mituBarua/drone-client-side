import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product/Product";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-ridge-12828.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>OUR SIGNIFICANT PRODUCTS</h2>
      <Container>
        <Row className="py-3 my-2">
          {products.slice(0, 6).map((product) => (
            <Col md="4" sm="6" className="my-2">
              <Product key={product.id} product={product}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
