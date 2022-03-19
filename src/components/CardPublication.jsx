import React from "react";
// import "../../assets/style/Home/style.css";
import { Card, Figure } from "react-bootstrap";


export const CardPublication = ({guide}) => {
  return (
    <Card className="details-Card">
      <Card.Body>
        <Card.Title>{guide.name} <i>({guide.type})</i></Card.Title>
        <Card.Text>
          <Card.Subtitle>{guide.places_visited}</Card.Subtitle>
        {guide.comment}
        </Card.Text>

        <Figure>
          <Figure.Image
            className="img-publication"
            width={141}
            height={150}
            alt="171x180"
            src={guide.images[1]}
          />
        </Figure>
      </Card.Body>
    </Card>
  );
};
