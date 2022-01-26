import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecondNav from '../../components/SecondNav';
import { InfoCard } from "../../components/Place/InfoCard";
import { MapShowPlace } from "../../components/Place/MapShowPlace";
import { PublicationCard } from "../../components/Place/PublicationCard";

export default function Index(){
  return (

    <Container>
      <Row>
        <Col >
          <InfoCard />
        </Col>

        <Col xs={6}>
          <SecondNav link1="Publicaciones" link2="Reseña"/>
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
