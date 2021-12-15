import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import bg from '../assets/img/bg-travel-1.png'
export default function LoginModal(){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header onClick={handleShow}>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={bg} alt="s" style={{width: '100%'}}></img>
                    <div sx={{mt: paddingBottom: '100px'3}} variant="h5" component="h5">
                        <strong>Desbloquea tu mapa</strong>
                    </div>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        Inicia sesión para empezar a desbloquear lugares alrededor del mundo.
                        <strong>¡Explora tu alrededor ahora mismo!</strong>
                    </div>
                    <Row container spacing={2} sx={{mt:4}}>
                        <Col item sm={12} md={6}>
                            <Button color="error" sx={{width: '100%'}} variant="contained">Iniciar sesión con google</Button>
                        </Col>
                        <Col item sm={12} md={6}>
                            <Button color="info" sx={{width: '100%'}}  variant="contained">Iniciar sesión con facebook</Button>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}