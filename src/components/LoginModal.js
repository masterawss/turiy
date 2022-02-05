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
                <Modal.Body className="p-5">
                    <img src={bg} alt="s" style={{width: '100%'}}></img>
                    <div sx={{paddingBottom: '100px'}} >
                        <h4 className="my-2">
                            <strong>Desbloquea tu mapa</strong>
                        </h4>
                    </div>
                    <div id="modal-modal-description" className="my-2">
                        Inicia sesión para empezar a desbloquear lugares alrededor del mundo.
                        <strong>¡Explora tu alrededor ahora mismo!</strong>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <Button variant="danger">Iniciar sesión con google</Button>
                        <Button variant="info">Iniciar sesión con facebook</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}