// import './App.css';
import SecondNav from "../../components/SecondNav";
import InfoGuide from "../../components/InfoGuide";
import ReviewCard from "../../components/Place/ReviewCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Guide(){
    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} lg={3}>
                        <InfoGuide></InfoGuide>
                    </Col>
                    <Col sm={6} lg={6}>
                        <SecondNav link1="Tours" link2="Reseña"/>
                        <ReviewCard/>
                        <ReviewCard/>
                    </Col>
                </Row>
            </Container>          
        </>
    );
}