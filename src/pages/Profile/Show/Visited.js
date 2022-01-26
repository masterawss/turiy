import { PublicationCard } from "../../../components/Place/PublicationCard";
import Container from 'react-bootstrap/Container';
import SecondNav from "../../../components/SecondNav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from "../../../components/Place/User";

export default function Visitados(){
    return (
        <>
        <Container className="nkn-mt-large">
            <Row>
                <Col md={3}>
                    <User></User>
                </Col>
                <Col md={9}>
                    <SecondNav link1="Lugares visitados" link2="Guardados"/>
                    <PublicationCard></PublicationCard>            
                    <PublicationCard></PublicationCard>  
                </Col>
            </Row>
        </Container>           
        </>        
    );
}