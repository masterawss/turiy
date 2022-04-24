import { getPlace } from "api/PlaceApi";
import { InfoCard } from "./components/InfoCard";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SectionGuiasDisponibles } from "./components/SectionGuiasDisponibles";
import { SectionTab } from "./components/SectionTab";

export default function Show(){
    const { id } = useParams();

    const [place, setPlace] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [isAlreadyVisited, setIsAlreadyVisited] = useState(false);
    useEffect(() => {
      getPlace(id).then(({place, reviews, isAlreadyVisited: isVisited}) => {
        // console.log('REVIEWS',reviews);
        setPlace(place);
        setReviews(reviews);
        setIsAlreadyVisited(isVisited)
      });
    },[id]);
    
  return (
    <Container className="py-4"> 
      {
        place
        ?
          <>
            <InfoCard place={place} isAlreadyVisited={isAlreadyVisited} />
            <Row >
              <Col className="mt-4" lg={9} md={12}>
                <Card>
                  <Card.Body>
                    <SectionTab reviews={reviews} place={place}/>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4">
                <Card>
                  <Card.Body>
                    <SectionGuiasDisponibles place={place}/>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        : <strong>Cargando</strong>
      }
    </Container>
  );
};
