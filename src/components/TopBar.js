import * as React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../../src/assets/style/Home/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "api/AuthApi";
import { useSelector } from "react-redux";
const pages = ["Home", "About", "Features", "Pricing", "Gallery", "Team"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const TopBar = () => {

  const {user, isLoggedIn} = useSelector((state) => state.auth)

  // const [loggedIn, setLoggedIn] = React.useState(false)
  // const [user, setUser] = React.useState('')
  // React.useLayoutEffect(() => {
  //   getUser().then(user =>{
  //     setUser(user)
  //     setLoggedIn(true)
  //   })
  //   .catch(e => setLoggedIn(false))
  // }, [])

  return (
    <Navbar bg="light" variant="light">
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
                  <Dropdown.Item href="/profile/user/1/show">Perfil</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Configuración</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )
          : <LoginModal/>
        }

      </Container>
    </Navbar>
  );
};
export default TopBar;
