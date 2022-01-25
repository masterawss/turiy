import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PlaceNav } from '../../components/PlaceNav';
import { InfoCard } from '../../components/ShowCard/InfoCard';
import { PublicationCard } from '../../components/ShowCard/PublicationCard';

export const ShowGuide = () => {
  return (
    <Container>
    <Row>
        <Col>
            <InfoCard />
        </Col>

        <Col xs={9}>
            <PlaceNav />

            <PublicationCard />
        </Col>
    </Row>
</Container>
  );
};
