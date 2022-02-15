import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlaceNav } from "../../../components/PlaceNav";
import PlaceSavedCard from "../../../components/PlaceSavedCard";
import { InfoCard } from "../../../components/ShowCard/InfoCard";

export const ShowGuide = () => {
  return (
    <Container>
      <Row>
        <Col>
          <InfoCard />
        </Col>

        <Col xs={9}>
          <PlaceNav />
          
          <Row>
            <Col>
            <PlaceSavedCard />
            </Col>
           
            <Col>
            <PlaceSavedCard />
            </Col>
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
