import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import SecondNav from '../../components/SecondNav';
// import { InfoCard } from "../../components/Place/InfoCard";
// import { MapShowPlace } from "../../components/Place/MapShowPlace";
import { PublicationCard } from "../../components/Place/PublicationCard";
import { getGuides } from "api/GuideApi";

export default function Index(){
    const [guides, setGuies] = useState([]);
    useEffect(() => {
        getGuides().then((guides) => {
            setGuies(guides);
        });
    }, []);
  return (
    <div>
        {guides.map((guide)=>(
            <PublicationCard guide={guide} key={guide.id} />
        ))}
    </div>
  );
};
