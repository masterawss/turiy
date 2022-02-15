// import { Grid, Item } from '@mui/material';
import { faDirections, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { amber, indigo, teal } from 'material-ui-colors';
import { Col, Container, Row } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import CardFeatureInfo from './CardFeatureInfo';
function FeaturesSection() {

    const features = [
        {
            icon: <FontAwesomeIcon style={{fontSize: '30px'}} icon={faMapMarkedAlt} />,
            color: teal[400],
            title: 'Juego de mundo abierto',
            desc: 'Observa el mapa del mundo real como de un minimapa de juego de mundo abierto.'
        },
        {
            icon: <FontAwesomeIcon style={{fontSize: '30px'}} icon={faMapMarkerAlt} />,
            color: amber[400],
            title: 'Explora lugares',
            desc: 'Observa el mapa del mundo real como de un minimapa de juego de mundo abierto.'
        },
        {
            icon: <FontAwesomeIcon style={{fontSize: '30px'}} icon={faDirections} />,
            color: indigo[600],
            title: 'Guía a otros',
            desc: 'Observa el mapa del mundo real como de un minimapa de juego de mundo abierto.'
        },
    ]
    return (
        <>
            <Container >
                <Row>
                    {features.map((feat,i) => (
                        <Col lg={4} md={4} sm={6} xs={12} key={i}>
                            {/* <CSSTransition  timeout={500} classNames={{
                                    enterActive: 'animate__bounceIn',
                                    exitActive: 'animate__bounceOut'
                                    }} 
                                    // onEnter={showImage}
                                    // onEntered={removeOpacity}
                                    // onExited={hideImage}
                                    // className={`animate__animated my-4 ${imageClasses}`}
                                >
                            </CSSTransition> */}
                            <div className="animate__bounceIn">

                                <CardFeatureInfo key={i} feature={feat}></CardFeatureInfo>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default FeaturesSection;
