// import { Grid, Item } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { amber, green, grey, lightGreen } from 'material-ui-colors';
import bg from '../../assets/img/bg1.png'
import person from '../../assets/img/person1.png'
import MenuLateral from './MenuLateral';
import { useParams } from "react-router-dom";
function Form(props) {


  
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
                   <form class="form-signin" action="" method="post" name="form">
             <label for="username">Nombres</label>
             <input class="form-styling" type="text" name="username" value="Ricardo Ignacio"/>
             <label for="password">Apellidos</label>
             <input class="form-styling" type="text" name="lastname" value="Contreras Luna"/>
   
             <label for="password">Telefono</label>
             <input class="form-styling" type="text" name="phone" value="+51 96567675"/>
   
             <label for="password">Correo</label>
             <input class="form-styling" type="text" name="mail" value="rignacio@gmail.com"/>
   
   
             <input type="checkbox" id="checkbox"/>
             <label for="checkbox" ><span class="ui"></span>Aceptar Notificaciones</label>
             <div class="btn-animate">
               <a class="btn-signin" >Actualizar Configuraciones</a>
             </div>
                   </form>
           
                   <form class="form-signup" action="" method="post" name="form">
             <label for="fullname">Full name</label>
             <input class="form-styling" type="text" name="fullname" placeholder=""/>
             <label for="email">Email</label>
             <input class="form-styling" type="text" name="email" placeholder=""/>
             <label for="password">Password</label>
             <input class="form-styling" type="text" name="password" placeholder=""/>
             <label for="confirmpassword">Confirm password</label>
             <input class="form-styling" type="text" name="confirmpassword" placeholder=""/>
             <a ng-click="checked = !checked" class="btn-signup">Sign Up</a>
                   </form>
              </div></Col>
       <Col><aside class="profile-card">
     
     <header>
       
       
       <a href="#">
         <img src="https://previews.123rf.com/images/lightfieldstudios/lightfieldstudios1708/lightfieldstudios170801600/83495240-hombre-sonriente-mirando-a-c%C3%A1mara-aislada-en-blanco.jpg"></img>
       </a>
   
      
       <h1>Ricardo Ignacio</h1>
       
      
       <h2>Another Web Designer</h2>
       
     </header>
     
     
     <div class="profile-bio">
       
       <p>Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive Layouts, Web Standards Compliance, Performance Optimization, Cross Device Troubleshooting.</p>
       
     </div>
     
   
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

export default Form;
