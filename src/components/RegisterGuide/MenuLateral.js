// import { Grid, Item } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { amber, green, grey, lightGreen } from 'material-ui-colors';
import bg from '../../assets/img/bg1.png'
import person from '../../assets/img/person1.png'
function MenuLateral() {
  return (
    <>
 
 <div class="vertical-menu">
  <a href="../../../profile/guide_register/1/create" >Guia de Turismo</a>
  <a href="../../../profile/user/1/show" class="active">Datos del Usuario</a>
 
</div> 
    </>
  );
}

export default MenuLateral;