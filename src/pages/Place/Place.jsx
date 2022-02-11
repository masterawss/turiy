import React from "react";
import { useEffect, useState } from "react";
import { getPlaces } from "api/PlaceApi";
import { getGuides } from "api/GuideApi";

import { Col, Container, Row } from "react-bootstrap";
import AvaibleGuide from "../../components/AvaibleGuide";
import { PlaceNav } from "../../components/PlaceNav";
import { InfoCard } from "../../components/ShowCard/InfoCard";
import { MapShowPlace } from "../../components/ShowCard/MapShowPlace";
import { PublicationCard } from "../../components/ShowCard/PublicationCard";

export const Place = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        getPlaces().then((places) => {
            setPlaces(places);
        });
    }, []);

    
    const [guides, setGuies] = useState([]);
    useEffect(() => {
        getGuides().then((guides) => {
            setGuies(guides);
        });
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    {places.map((place) => (
                        <InfoCard place={place} key={place.id} />
                    ))}
                </Col>

                <Col xs={6}>
                    <PlaceNav />
                    {guides.map((guide)=>(
                        <PublicationCard guide={guide} key={guide.id} />
                    ))}
                    
                </Col>

                <Col>
                    <MapShowPlace />
                    <section>
                        <h5>GUIAS DISPONIBLES</h5>
                        <AvaibleGuide />
                        <AvaibleGuide />
                    </section>
                </Col>
            </Row>
        </Container>
    );
};
