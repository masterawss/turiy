import * as React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import {LoginModal} from "components/LoginModal";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "../../src/assets/style/Home/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "store/auth/authSlice";

const TopBar = () => {

  const {user, isLoggedIn} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const logout = () => {
    dispatch(logoutAction)
    navigate('/', {replace: true})
  }

  return (
    <Navbar bg="white" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="asdasd" />
          </Link>
        </Navbar.Brand>

        { isLoggedIn 
          ? (
            <>
              <Nav className="me-auto nav-TopBar">
                <Link className="nav-link" to="/home"> Explorar</Link>
              </Nav>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <FontAwesomeIcon icon={faUser} /> &nbsp;
                  {user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >
                    <Link to="/profile">Perfil</Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
                  <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )
          : <>
            <LoginModal/>
          </>
          
        }

      </Container>
    </Navbar>
  );
};
export default TopBar;
