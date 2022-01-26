// import './App.css';
import SecondNav from "../../components/SecondNav";
import { InfoCard } from "../../components/Place/InfoCard";
import { MapShowPlace } from "../../components/Place/MapShowPlace";
import ReviewCard from "../../components/Place/ReviewCard";
import AvaibleGuide from "../../components/Guide/AvaibleGuide";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Review(){
    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} lg={3}>
                        <InfoCard/>
                    </Col>
                    <Col sm={6} lg={6}>
                        <SecondNav link1="Publicaciones" link2="Reseña"/>
                        <ReviewCard/>
                        <ReviewCard/>
                    </Col>
                    <Col sm={12} lg={3}>
                        <MapShowPlace></MapShowPlace>
                        <section>
                            <h5>GUIAS DISPONIBLES</h5>
                            <AvaibleGuide name="Maritza"></AvaibleGuide>
                            <AvaibleGuide name="Imasumac"></AvaibleGuide>
                        </section>
                        
                    </Col>
                </Row>
            </Container>          
        </>
    );
}