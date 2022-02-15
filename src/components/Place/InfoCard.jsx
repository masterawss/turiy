import React from "react";
// import images from "../../assets/style/images";
import { Card } from "react-bootstrap";

export const InfoCard = ({place}) => {
  return (
    <>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{place.title}</Card.Title>
          {

          <Card.Img variant="top" src={place.images[0]} />
          }
          <Card.Text>
            {place.description}
          </Card.Text>

          <Card.Title>Información a tener en cuenta</Card.Title>

          <Card.Text>
            {place.extra_info}
          </Card.Text>

          <Card.Title>Otra Información</Card.Title>

          <Card.Text>
           {place.categories}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
