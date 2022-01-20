import React from "react";
import { Card, Figure } from "react-bootstrap";
import images from "../../assets/style/images";

export const PublicationCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Maday</Card.Title>
        <Card.Text>
          Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
          simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de
          la literatura del Latin, que data del año 45 antes de Cristo
        </Card.Text>

      
          <Figure>
            <Figure.Image
              width={141}
              height={150}
              alt="171x180"
              src={images.machuPichuImg}
            />
          </Figure>
        

        <Figure>
          <Figure.Image
            width={141}
            height={150}
            alt="171x180"
            src={images.machuPichuImg}
          />
        </Figure>
      </Card.Body>
    </Card>
  );
};
