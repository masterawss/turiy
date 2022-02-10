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


    const mystyle = {
      width: "100%",
    borderradius: "56px"
    };

 


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
         
         <header style={{textAlign:"center"}}>
           
           
          
         <img src="https://thumbs.dreamstime.com/b/hombre-sonriendo-de-la-mano-en-cabeza-respirando-profundamente-disfrutando-vida-mirando-al-cielo-azul-sintiendo-profundo-aliento-191739623.jpg" style={mystyle}></img>
           <h1>Turiy</h1>
           
          
           <span >Recuerda que puedes postularte para ser guia y compartir tus conocimientos con el mundo</span>
           
         </header>
         
     
         
       
        
         
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