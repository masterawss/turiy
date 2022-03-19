import { CardMembershipTwoTone } from "@mui/icons-material";
import { getPlace } from "api/PlaceApi";
import { InfoCard } from "./components/InfoCard";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Outlet, useParams } from "react-router-dom";
import { SectionGuiasDisponibles } from "./components/SectionGuiasDisponibles";
import { SectionTab } from "./components/SectionTab";

export default function Show(){
    const { id } = useParams();

    const [place, setPlace] = useState(null);
    useEffect(() => {
        getPlace(id).then((place) => {
            console.log(place);
            setPlace(place);
        });
    },[]);
    
  return (
    <Container className="py-4"> 
      {
        place
        ? (
          <>
            <InfoCard place={place} />
            <Row className="mt-4">
              <Col xs={9}>
                <Card>
                  <Card.Body>
                    <SectionTab place={place}/>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <SectionGuiasDisponibles place={place}/>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )
        : <strong>Cargando</strong>
      }
      
    </Container>
  );
};
