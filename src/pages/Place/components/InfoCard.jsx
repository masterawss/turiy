import React from "react";
// import images from "../../assets/style/images";
import { Card, Col, Row } from "react-bootstrap";

export const InfoCard = ({place}) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
              <Col xs={6}>
                  <Card.Img style={{height: '350px', borderRadius: '20px', objectFit: 'cover'}} variant="top" src={place.images[0]} />
              </Col>
              <Col xs={6}>
                  <Card.Body>
                      <Card.Title>{place.title}</Card.Title>
                      <Card.Text>
                          {place.description}
                      </Card.Text>
                  </Card.Body>
              </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
