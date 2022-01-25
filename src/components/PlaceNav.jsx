import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PlaceNav = () => {
  return (
    <Navbar>
      <Container>
        <Nav className="me-auto">
          <Link className="nav-link" to="">
           <strong>Publicaciones</strong> 
          </Link>
          <Link className="nav-link" to="">
            Reseñas
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
