import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlaceNav } from "../../components/PlaceNav";
import { InfoCard } from "../../components/ShowCard/InfoCard";
import { MapShowPlace } from "../../components/ShowCard/MapShowPlace";
import { PublicationCard } from "../../components/ShowCard/PublicationCard";

export const Place = () => {
  return (

    <Container>
      <Row>
        <Col >
          <InfoCard />
        </Col>

        <Col xs={6}>
          <PlaceNav />
          
          <PublicationCard/>
          <PublicationCard/>
          <PublicationCard/>

        </Col>

        <Col>
            <MapShowPlace/>
        </Col>
      </Row>
    </Container>
  );
};
