import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import images from "../../assets/style/images";

export const CollageGuide = () => {
  return (
    <Container>
      <Row>
        <Col>
            <img  className="img1-collageguide" src={images.machuPichuImg}/>
        </Col>
      </Row>
      <Row>
        <Col xs={4}><img  className="img2-collageguide" src={images.villadeleiva}/> </Col>
        <Col ><img  className="img2-collageguide" src={images.bogota}/></Col>
       
      </Row>
    </Container>
  );
};
