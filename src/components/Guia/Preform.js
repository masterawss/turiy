// import { Grid, Item } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { amber, green, grey, lightGreen } from 'material-ui-colors';
import bg from '../../assets/img/bg1.png'
import person from '../../assets/img/person1.png'
import MenuLateral from '../RegisterGuide/MenuLateral';

function Preform() {
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
    

   <div class="contenido_guia">
	   <div><img class="img_test" src="https://saaccionasostenibilidad.blob.core.windows.net/media/512080/guia-turismo-sostenible.jpg"></img></div>
	   <div>
   <h1 class="textos">Aun no eres guia de turismo</h1><br></br>
   <h3>Convierte en uno y ayuda a las personas a conocer el mundo</h3>
   </div>
   </div>

     </div>
     </div>
     </div>
   </div>
       </>
  );
}

export default Preform;
