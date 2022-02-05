// import './App.css';
import SecondNav from "../../../components/SecondNav";
import { InfoCard } from "../../../components/ShowCard/InfoCard";
import { MapShowPlace } from "../../../components/ShowCard/MapShowPlace";
import ReviewCard from "../../../components/ReviewCard";
import AvaibleGuide from "../../../components/AvaibleGuide";
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
                            <AvaibleGuide></AvaibleGuide>
                            <AvaibleGuide></AvaibleGuide>
                        </section>
                        
                    </Col>
                </Row>
            </Container>          
        </>
    );
}