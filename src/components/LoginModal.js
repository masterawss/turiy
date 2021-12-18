import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import bg from '../assets/img/bg-travel-1.png'
export default function LoginModal(){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ingresar
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <img src={bg} alt="s" style={{width: '100%'}}></img>
                    <div sx={{paddingBottom: '100px'}} >
                        <strong>Desbloquea tu mapa</strong>
                    </div>
                    <div id="modal-modal-description">
                        Inicia sesión para empezar a desbloquear lugares alrededor del mundo.
                        <strong>¡Explora tu alrededor ahora mismo!</strong>
                    </div>
                    <Row >
                        <Col item sm={12} md={12}>
                            <Button variant="danger">Iniciar sesión con google</Button>
                        </Col>
                        <Col item sm={12} md={12}>
                            <Button variant="info">Iniciar sesión con facebook</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}