import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecondNav from '../../components/SecondNav';
import { InfoCard } from "../../components/Place/InfoCard";
import { MapShowPlace } from "../../components/Place/MapShowPlace";
import { PublicationCard } from "../../components/Place/PublicationCard";

export default function Index(){
  return (
    <div>
        <PublicationCard/>
        <PublicationCard/>
    </div>
  );
};
