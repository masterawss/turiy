import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { PlaceNav } from "../../components/PlaceNav";
import SecondNav from '../../components/SecondNav';
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
          <SecondNav link1="Publicaciones" link2="Reseña"/>
          {/* <PlaceNav /> */}
          
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
