// import { Grid, Item } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { amber, green, grey, lightGreen } from 'material-ui-colors';
import bg from '../../assets/img/bg1.png'
import person from '../../assets/img/person1.png'
function MenuLateral() {
  return (
    <>
 
 <div class="vertical-menu">
  <a href="validacion1" >Guia de Turismo</a>
  <a href="perfil1" class="active">Datos del Usuario</a>
 
</div> 
    </>
  );
}

export default MenuLateral;