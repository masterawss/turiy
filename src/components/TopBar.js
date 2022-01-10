import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LoginModal from './LoginModal';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
const pages = ['Home', 'About', 'Features', 'Pricing', 'Gallery', 'Team'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const TopBar = () => {
  
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="asdasd"/>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <LoginModal></LoginModal>
      </Container>
    </Navbar>
  );
};
export default TopBar;