import { NavLink } from 'react-router-dom';
import '../assets/style/secondNav.css';
var link1 ="";
var link2 ="";


const SecondNav = (props) => {
// export default function SecondNav(props){
  if(props.link1 === "Lugares visitados"){
    link1="/profile/visited";
  } else if (props.link1 === "Publicaciones"){
    link1="/place/publication";
  }
  if(props.link2 === "Guardados"){
    link2="/profile/saved";
  } else if (props.link2 === "Reseña"){
    link2="/place/review";
  }

  return (
    <div className='nav link'>  
      <NavLink 
        className={({ isActive }) => isActive ? "active " : ""}
        to={link1} >
          {props.link1}
      </NavLink>  
      <NavLink 
        className={({ isActive }) => isActive ? "active " : ""}
        to={link2} >
          {props.link2}
      </NavLink> 
      
    </div>
    
  );
};
export default SecondNav;