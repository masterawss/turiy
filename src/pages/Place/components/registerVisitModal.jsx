import { Modal } from "bootstrap"
import { Button } from "react-bootstrap";
import Input from '../../../components/Form/Input';

export const registerVisitModal = ({showModalVisit, setShowModalVisit}) => {
  return (
    <Modal show={showModalVisit} onHide={() => setShowModalVisit(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar visita</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Input label="Descripción"></Input> */}
        {/*
          description
          date
          images
        */}
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
  )
}