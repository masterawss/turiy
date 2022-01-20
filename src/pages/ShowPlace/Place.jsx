import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlaceNav } from "../../components/PlaceNav";
import { InfoCard } from "../../components/ShowCard/InfoCard";
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
        </Col>

        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};
