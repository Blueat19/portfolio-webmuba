import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../images/logoblue.png';
import cart_icon from "../assets/cart_icon.png";
import "../components/Header.css";

export default function Header() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach((link) => {
      link.style.padding = '10px 15px';
      link.style.color = 'rgb(8,58,149)';
      link.style.fontWeight = 'bold';
      link.style.fontSize = '18px';
    });
  }, []);

  return (
    <> 
      <div style={{ zIndex: 1 }}></div>
      <Navbar bg="white" variant="dark" expand="lg" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="d-flex justify-content-center nav-logo">
              <img src={Logo} alt="Logo" width={"140px"} height={"140px"} style={{ alignSelf: "center", marginRight: "10px" }} />
              <p style={{ color: "black", fontWeight: 'bold', fontSize: '24px', alignSelf: 'center', marginTop: '10px' }}>SW</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#0d6efd' }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-menu">
              <Nav.Link as={Link} to="/" style={{ color: "#0d6efd" }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: "#0d6efd" }}>About</Nav.Link>
              <Nav.Link as={Link} to="/webd" style={{ color: "#0d6efd" }}>WebDesign</Nav.Link>
              <Nav.Link as={Link} to="/business" style={{ color: "#0d6efd" }}>Business Suite</Nav.Link>
              <Nav.Link as={Link} to="/marketing" style={{ color: "#0d6efd" }}>Marketing</Nav.Link>
              <Nav.Link as={Link} to="/banner" style={{ color: "#0d6efd" }}>Banner Design</Nav.Link>
              <Nav.Link as={Link} to="/gaming" style={{ color: "#0d6efd" }}>Gaming</Nav.Link>
              <div className="nav-login-cart">
                <Link style={{ textDecoration: "none" }} to="/cart">
                  <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">0</div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

