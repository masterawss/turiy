// import { Grid, Item } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { amber, green, grey, lightGreen } from 'material-ui-colors';
import bg from '../../assets/img/bg1.png'
import person from '../../assets/img/person1.png'
function Hero() {
  return (
    <>
        <div style={{background: `url(${bg}) no-repeat center right`, backgroundSize: '50%'}}>
            <Container>
                <Row className="align-items-center py-4">
                    <Col>
                        <h2 style={{color: green[700]}} >
                            <strong>Vive tu aventura</strong>
                        </h2>
                        <div style={{fontStyle: 'normal',
                            fontWeight: 900,
                            fontSize: '48px',
                            lineHeight: '65px'}}>
                            Desbloquea los lugares de la 
                            <strong style={{ color: lightGreen[500]}}>&nbsp;vida real </strong>
                        </div>

                        <h5 className="py-4" style={{color: grey[500]}}>
                            Anímate a probar este juego de 
                            <span style={{ color: amber[500]}}> mundo abierto </span>
                            explorando el mapa del mundo real.
                        </h5>
                        <h5 style={{color: grey[500]}}>
                            ¡Descubre los lugares que la vida tiene para ofrecerte!
                        </h5>
                    </Col>
                    <Col >
                        <div className="text-center">
                            <img src={person} alt="2" style={ {maxHeight:'400px'} }/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default Hero;
