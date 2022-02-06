import { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";

import {
    selectModalOpened,
    closeModal,
    selectPlace
} from 'store/landing/modalLandingSlice'
import { useDispatch, useSelector } from "react-redux";
import { getPlace } from "api/PlaceApi";

export default function ModalPlace (){
    const modalState = useSelector(selectModalOpened)
    const placeState = useSelector(selectPlace)
    const dispatch = useDispatch();

    const handleClose = () => dispatch(closeModal());

    return (
        <Modal show={modalState} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{placeState.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <img alt="place" style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '20px'}} src={placeState.images[0]} />
                <div className="my-4">
                    {placeState.categories.map(cat => 
                        <Badge bg="primary" >{ cat }</Badge>
                    )}
                </div>
                <p>
                    {placeState.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Ver lugar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}