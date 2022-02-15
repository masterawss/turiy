import * as React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../../src/assets/style/Home/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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

        <Nav className="me-auto nav-TopBar">
          <Link className="nav-link" to="/home"> Explorar</Link>
        </Nav>
        <LoginModal/>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <FontAwesomeIcon icon={faUser} /> &nbsp;
             John Doe
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/profile/user/1/show">Perfil</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};
export default TopBar;
