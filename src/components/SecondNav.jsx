import * as React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var link1 ="";
var link2 ="";


const SecondNav = (props) => {
  
  if(props.link1 === "Lugares visitados"){
    link1="/profile/visited";
  } else if (props.link1 === "Publicaciones"){
    link1="";
  }
  if(props.link2 === "Guardados"){
    link2="/profile/saved";
  } else if (props.link2 === "Reseña"){
    link2="/place/review";
  }

  return (
    <Nav className="me-auto">    
      <Link to={link1} className="nav-link">{props.link1}</Link>  
      <Link to={link2} className="nav-link">{props.link2}</Link> 
    </Nav>
  );
};
export default SecondNav;