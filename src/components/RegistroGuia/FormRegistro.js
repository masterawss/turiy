// import { Grid, Item } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { amber, green, grey, lightGreen } from 'material-ui-colors';
import bg from '../../assets/img/bg1.png'
import person from '../../assets/img/person1.png'
import MenuLateral from '../RegisterGuide/MenuLateral';


function FormRegistro() {
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
           <li class="signin-active"><a class="btn">Formulario para convertirse en guia de turismo</a></li>
           
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
   

               <Container><Row><Col> <label for="password">Subir Documento de Identidad</label>
             <input  type="file" /></Col><Col>
             <label for="password">Seleccionar Ubicacion</label>
             <select class="form-styling"name="cars" id="cars">
  <option value="volvo">Arequipa</option>
  <option value="saab">Lima</option>
  <option value="mercedes">Tacna</option>
  <option value="audi">Cuzco</option>
</select>
</Col></Row></Container>
            
             <label for="password">Ingresar Descricion</label>
             <textarea class="tipo_area">
 
</textarea>
   
             <input type="checkbox" id="checkbox"/>
             <label for="checkbox" ><span ></span>Aceptar Terminos y condiciones de Uso</label>
             <div class="btn-animate">
               <a class="btn-signin" >Convertirse en GUia de turismo</a>
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
      
     </Row>
     </Container>
              
            </div>
         </div>
     </div>
   </div>
       </>
  );
}

export default FormRegistro;
