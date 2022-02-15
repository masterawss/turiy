import CallToAction from '../../components/LandingPage/CallToAction';
import Form from '../../components/RegisterGuide/Form.js'
import FeaturesSection from '../../components/LandingPage/FeaturesSection';
import '../../assets/style/RegisterGuide/Form.css'
import FormRegistro from '../../components/RegistroGuia/FormRegistro';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getGuide } from 'api/GuideApi';
import MenuLateral from '../../components/RegisterGuide/MenuLateral';

export default function Index(){

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
               <li class="signin-active"><a class="btn">Formulario para convertirse en guia de turismo</a></li>
               
             </ul>
                      </div>
       
       
                      <Container>
         <Row>
           <Col><div ng-app ng-init="checked = false">

           {users.map((place, i) => 
                       <form class="form-signin" action="" method="post" name="form">
                 <label for="username">Nombres</label>
                 <input class="form-styling" type="text" name="username" value={place.name}/>
                 <label for="password">Apellidos</label>
                 <input class="form-styling" type="text" name="lastname" value={place.provider}/>
       
    
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
                   <a class="btn-signin" href="/../../../profile/checkout" >Convertirse en GUia de turismo</a>
                 </div>
                       </form>

                   )}
               
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