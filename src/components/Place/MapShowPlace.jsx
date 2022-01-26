import React from "react";
import { Card } from "react-bootstrap";
import images from "../../assets/style/images";
import "../../assets/style/Home/style.css"

export const MapShowPlace = () => {
  return (
    <>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img className="img-mapShowPlace" variant="top" src={images.VisitMap} />

          
        </Card.Body>
      </Card>
    </>
  );
};
