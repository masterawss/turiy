import CallToAction from '../../components/LandingPage/CallToAction';
import Form from '../../components/RegisterGuide/Form.js'
import FeaturesSection from '../../components/LandingPage/FeaturesSection';
import '../../assets/style/RegisterGuide/Form.css'
import { getGuide } from 'api/GuideApi';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import MenuLateral from '../../components/RegisterGuide/MenuLateral';


export default function Index(props){
    const params = useParams();
    console.log(params.id)

    const [users, setUsers] = useState([])
    useEffect(() => {
        getGuide(params.id).then(users => {
            console.log(users);
            setUsers(users)
        })
    }, []);

 


    return (
        <>
        <div class="row">
         <div class="column">
         <div class="container">
         <div class="frame">
          
         <MenuLateral></MenuLateral>
         </div>
        </div>
         </div>
         <div class="column">
             <div class="container">
                <div class="frame1">
                     <div class="nav">
             <ul>
               <li class="signin-active"><a class="btn">Datos de Registro</a></li>
               
             </ul>
                      </div>
       
       
                      <Container>
         <Row>
             
           <Col><div ng-app ng-init="checked = false">

         


               
                      

                       {users.map((place, i) => 
                        <form class="form-signin" action="" method="post" name="form">
                        <label for="username">Nombres</label>
                        <input class="form-styling" type="text" name="username" value={place.name}></input>
                        <label for="password">Apellidos</label>
                        <input class="form-styling" type="text" name="lastname" value={place.provider}/>
       
                          <label for="password">Telefono</label>
                          <input class="form-styling" type="text" name="phone" value={place.phone}/>

       <label for="password">Correo</label>
       <input class="form-styling" type="text" name="mail" value={place.mail}/>


       <input type="checkbox" id="checkbox"/>
       <label for="checkbox" ><span class="ui"></span>Aceptar Notificaciones</label>
       <div class="btn-animate">
         <a class="btn-signin" >Actualizar Configuraciones</a>
       </div>
                         </form>
                             )}
                
                
                       
               
                   
                  </div></Col>
           <Col><aside class="profile-card">
         
         <header>
           
           
          
          
           <h1>Ricardo Ignacio</h1>
           
          
           <h2>Another Web Designer</h2>
           
         </header>
         
     
         
       
         <ul class="profile-social-links">
           
          
           <li>
             <a href="https://twitter.com/alishahab">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"></img>
             </a>
           </li>
           
           
           <li>
             <a href="http://themeforest.net/user/alishahab">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"></img>
             </a>
           </li>
           
         
           <li>
             <a href="https://codepen.io/alishahab">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"></img>
             </a>
           </li>
           
           
           
         </ul>
         
       </aside></Col>
         </Row>
         </Container>
                  
                </div>
             </div>
         </div>
       </div>
           </>
    );
}