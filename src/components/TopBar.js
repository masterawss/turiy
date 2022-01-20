import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
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
        <Nav className="me-auto">
          <Link className="nav-link" to="/home"> Home</Link>
          <Link className="nav-link" to="/place"> Place </Link>

        </Nav>
        <LoginModal/>
      </Container>
    </Navbar>
  );
};
export default TopBar;
