// import './App.css';
import SecondNav from "../../../components/SecondNav";
import ReviewCard from "../../../components/ReviewCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Review(){
    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} lg={3}>
                        Datos guia
                    </Col>
                    <Col sm={6} lg={6}>
                        <SecondNav/>
                        <ReviewCard/>
                        <ReviewCard/>
                    </Col>
                    <Col sm={12} lg={3}>
                        <section>
                            <h5>GUIAS DISPONIBLES</h5>
                        </section>
                        
                    </Col>
                </Row>
            </Container>          
        </>
    );
}