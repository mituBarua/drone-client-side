import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar
        className="nav-position"
        variant="light"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ms-auto custom-nav">
              <Nav.Link as={HashLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/allproduct">
                Explore
              </Nav.Link>

              <Nav.Link as={HashLink} to="/contact">
                Contact Us
              </Nav.Link>

              

              {user?.email ? (
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              ) : (
                ""
              )}

              <Navbar.Text className="user-name">
                <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
              {!user?.email ? (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) : (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
