import { PublicationCard } from "../../components/Place/PublicationCard";
import Container from 'react-bootstrap/Container';
import SecondNav from "../../components/SecondNav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from "../../components/Place/User";
import { useEffect, useState } from "react";
import { getGuides } from "api/GuideApi";

export default function Visitados(){
    const [guides, setGuies] = useState([]);
    useEffect(() => {
        getGuides().then((guides) => {
            setGuies(guides);
        });
    }, []);
    return (
        <>
        <Container className="nkn-mt-large">
            <Row>
                <Col md={3}>
                    <User></User>
                </Col>
                <Col md={9}>
                    <SecondNav link1="Lugares visitados" link2="Guardados"/>
                    {guides.map((guide)=>(
                        <PublicationCard guide={guide} key={guide.id} />
                    ))}  
                </Col>
            </Row>
        </Container>           
        </>        
    );
}