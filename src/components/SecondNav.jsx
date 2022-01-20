import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const pages = ['Home', 'About', 'Features', 'Pricing', 'Gallery', 'Team'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const SecondNav = () => {
  
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">          
          <Nav.Link>
            <Link to="/profile/show/visitados">Lugares visitados</Link>
          </Nav.Link>
          <Nav.Link href="#features">Guardados</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default SecondNav;