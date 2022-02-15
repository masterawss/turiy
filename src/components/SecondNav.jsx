import { Nav, NavLink } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";

// import { NavLink } from 'react-router-dom';
import '../assets/style/secondNav.css';
var link1 ="";
var link2 ="";


const SecondNav = (props) => {


  const [items] = useState(
    [
      {
        route: 'publication',
        desc: 'Publicaciones'
      },
      {
        route: 'review',
        desc: 'Reviews'
      }
    ]
  );

  useEffect(() => {
    console.log('asdasd');
    <Navigate to={items[0].route} />;
  })

  const [currentRoute, setCurrentRoute] = useState('');

  const setCustomRoute = (route) => {
    // return <Navigate to={route} />;
    setCurrentRoute(route);
  }

// // export default function SecondNav(props){
//   if(props.link1 === "Lugares visitados"){
//     link1="/profile/visited";
//   } else if (props.link1 === "Publicaciones"){
//     link1="publication";
//   }
//   if(props.link2 === "Guardados"){
//     link2="/profile/saved";
//   } else if (props.link2 === "Reseña"){
//     link2="review";
//   }

  return (
    <>
      <ul className="nav nav-pills nav-fill">
        {
          items.map(item => 
            <li key={item.route} className="nav-item">
              <Link onClick={() => setCustomRoute(item.route)} to={item.route} className={'nav-link ' + (currentRoute == item.route ? 'active' : '')} aria-current={item.route} >{item.desc}</Link>
            </li>
          )
        }
      </ul>
    </>
  );
};
export default SecondNav;