import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import SecondNav from '../../components/SecondNav';
import { InfoCard } from "../../components/Place/InfoCard";
import AvaibleGuide from "../../components/Guide/AvaibleGuide";
import {MapShowPlace} from "../../components/Place/MapShowPlace";
import { getPlace } from "api/PlaceApi";
import React, { useEffect, useState } from "react";


export default function Index(){
    const { id } = useParams();
    
    const [place, setPlace] = useState({});
    useEffect(() => {
        getPlace(id).then((place) => {
            setPlace(place);
        });
    },[]);
    
  return (

    <Container>
      <Row>
        <Col >
            {
                Object.keys(place).length === 0 
                ? <strong>Cargando</strong>
                : <InfoCard place={place} key={place.id} />
            }
        </Col>
 
        <Col xs={6}>
          <SecondNav link1="Publicaciones" link2="Reseña"/>
          <Outlet></Outlet>
        </Col>

        <Col>
            <MapShowPlace/>
            <section>
                <h5>GUIAS DISPONIBLES</h5>
                <AvaibleGuide name="Maritza"></AvaibleGuide>
                <AvaibleGuide name="Imasumac"></AvaibleGuide>
            </section>
        </Col>
      </Row>
    </Container>
  );
};
