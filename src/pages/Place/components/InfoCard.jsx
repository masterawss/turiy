import React, { useState } from "react";
import { Badge, Button, Card, Col, Modal, Row, Stack } from "react-bootstrap";
import { RegisterVisitForm } from "./RegisterVisitForm";
export const InfoCard = ({place}) => {

  const [isVisitado, setIsVisitado] = useState(false)

  const [showModalVisit, setShowModalVisit] = useState(false)

  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col md={6}>
              {
                !!place.images &&
                <Card.Img style={{height: '350px', borderRadius: '20px', objectFit: 'cover'}} variant="top" src={place.images[0]} /> 
              }
            </Col>
            <Col md={6}>
              <Card.Body>
                <Stack className="mb-3" direction="horizontal" gap={3}>
                  <Card.Title>{place.title}</Card.Title>
                  {
                    isVisitado ?
                      <Badge bg="success" className="ms-auto p-2">Visitado 😄</Badge>
                    :
                    <Button onClick={() => setShowModalVisit(true)} className="ms-auto mr-2" variant="success">Registrar visita</Button>
                  }

                </Stack>
                <Card.Text>
                  {place.description}
                </Card.Text>
                {place.categories.map(category => 
                  <Badge key="category" pill bg="primary">
                    {category}
                  </Badge>
                )}
                {/* <div className="mt-4">
                  <Button className="ms-auto mr-2" variant="success">Ya lo visité 😁</Button>
                  <Button variant="info">Guardar</Button>
                </div> */}
              </Card.Body>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={showModalVisit} onHide={() => setShowModalVisit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar visita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterVisitForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalVisit(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => setShowModalVisit(false)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      
    </>
  );
};
