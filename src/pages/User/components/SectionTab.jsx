import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Modal, Tab, Tabs } from "react-bootstrap"
import { ImgProfile } from "./ImgProfile"
import { RegisterReseñaForm } from "./RegisterReseñaForm"

export const SectionTab = ({user, reviews}) => {
  const [showModalReseña, setShowModalReseña] = useState(false)
  return (
    <>
      <Tabs variant="pills" defaultActiveKey="publicaciones" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="publicaciones" title="Publicaciones">
          Publicaciones
        </Tab>
        {
          user.type === "Guide" &&
          <Tab eventKey="reviews" title="Reviews">
            <div style={{ background: "#f5f5f5" }} className="text-center p-4 mb-3">
              <div className="mb-2">
                Cuéntanos cuál fue tu experiencia con el guía
              </div>
              <Button onClick={() => setShowModalReseña(true)} className="ms-auto mr-2" variant="success">Dejar una reseña</Button>

              <Modal show={showModalReseña} onHide={() => setShowModalReseña(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Registrar reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <RegisterReseñaForm idGuide={user.id}/>
                </Modal.Body>
              </Modal>
              
            </div>
            {
              reviews && reviews.map((review,i) => (
                <div key={i}>
                  <div  className="d-flex justify-content-between align-items-start">
                    <div>
                      {
                        review.user && 
                        <ImgProfile  style={{width: "55px"}} user={review.user}></ImgProfile>
                      }
                    </div>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{review.user?.name}</div>
                      <div>
                        <FontAwesomeIcon color="#f2b015"  icon={faStar} /> {review.stars || '-'}
                      </div>
                    </div>
                  </div>
                  <p>{review.review}</p>
                </div>
              ))
            }
          </Tab>
        }
      </Tabs>
    </>
  )
}