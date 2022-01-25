import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../../src/assets/style/Home/style.css"
const pages = ["Home", "About", "Features", "Pricing", "Gallery", "Team"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const TopBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="asdasd" />
          </Link>
        </Navbar.Brand>
<<<<<<< HEAD
        <Nav className="me-auto">
          
          <Link to="/home">Home</Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
=======

        <Nav className="me-auto nav-TopBar">
          <Link className="nav-link" to="/home"> Home</Link>
          <Link className="nav-link" to="/"> About</Link>
          <Link className="nav-link" to="/"> Features</Link>
          <Link className="nav-link" to="/"> Pricing</Link>
          <Link className="nav-link" to="/"> Gallery</Link>
          <Link className="nav-link" to="/"> Team</Link>
          <Link className="nav-link" to="/place"> Place </Link>

>>>>>>> origin/maday
        </Nav>
        <LoginModal/>
      </Container>
    </Navbar>
  );
};
export default TopBar;
