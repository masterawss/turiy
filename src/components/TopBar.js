import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LoginModal from './LoginModal';

const pages = ['Home', 'About', 'Features', 'Pricing', 'Gallery', 'Team'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TopBar = () => {
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <LoginModal></LoginModal>
      </Container>
    </Navbar>
  );
};
export default TopBar;