import React from "react";
import images from "../../assets/style/images";
import { Card } from "react-bootstrap";

export const InfoCard = () => {
  return (
    <>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>MACHU PICHU</Card.Title>
          <Card.Img variant="top" src={images.machuPichuImg} />
          <Card.Text>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Card.Text>

          <Card.Title>Información a tener en cuenta</Card.Title>

          <Card.Text>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </Card.Text>

          <Card.Title>Otra Información</Card.Title>

          <Card.Text>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
