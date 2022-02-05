import * as React from "react";
import Card from 'react-bootstrap/Card';
import "../assets/style/Place/place.css";
import sanAndres from "../assets/img/sanAndres.jpg"

const PlaceSavedCard = () => {
  return (
    <Card className="nkn-m-medium fle-row">  
      <Card.Img variant="top" src={sanAndres} className="img-place"/>      
      <Card.Body>
          <Card.Title>
            San Andres
          </Card.Title>
          <Card.Text className="nkn-text-justify">
          Al contrario del pensamiento popular, el texto de Lorem Ipsum no s Lorem Ipsum 
          </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default PlaceSavedCard;
