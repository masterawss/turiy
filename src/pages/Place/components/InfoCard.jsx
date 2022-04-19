import React from "react";
import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap";

export const InfoCard = ({place}) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col xs={6}>
              {
                !!place.images &&
                <Card.Img style={{height: '350px', borderRadius: '20px', objectFit: 'cover'}} variant="top" src={place.images[0]} /> 
              }
            </Col>
            <Col xs={6}>
              <Card.Body>
                <Stack className="mb-3" direction="horizontal" gap={3}>
                  <Card.Title>{place.title}</Card.Title>
                  <Button className="ms-auto" variant="success">Registrar como visitado</Button>
                  <Button variant="info">Guardar</Button>
                </Stack>
                <Card.Text>
                  {place.description}
                </Card.Text>
                {place.categories.map(category => 
                  <Badge key="category" pill bg="primary">
                    {category}
                  </Badge>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
