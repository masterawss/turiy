// import './App.css';
import SecondNav from "../../../components/SecondNav";
import PlaceSavedCard from "../../../components/PlaceSavedCard";
import User from "../../../components/User";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Review(){
    return (
        <>
            <Container className="nkn-mt-large">
                <Row>
                    <Col md={3}>
                        <User></User>
                    </Col>
                    <Col md={9}>
                        <SecondNav/>
                        <div className="nkn-flex t-flex-wrap">
                            <PlaceSavedCard></PlaceSavedCard>
                            <PlaceSavedCard></PlaceSavedCard>
                        </div>
                        
                    </Col>
                </Row>
            </Container>          
        </>
    );
}