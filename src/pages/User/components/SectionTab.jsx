import { useEffect, useState } from "react"
import { Button, Modal, Tab, Tabs } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RegisterReseñaForm } from "./RegisterReseñaForm"
import { ReviewItem } from "./ReviewItem"

export const SectionTab = ({user, reviews}) => {
  const [showModalReseña, setShowModalReseña] = useState(false)

  const [newReviews, setNewReviews] = useState([])

  const {user: authUser, isLoggedIn} = useSelector((state) => state.auth)

  const handleCreatedSuccessfully = (review) => {
    setShowModalReseña(false)
    const neData = [...newReviews]
    neData.unshift(review)
    setNewReviews(r => neData)
  }


  const [hasAlreadyReview, setHasAlreadyReview] = useState(false)

  useEffect(() => {
    console.log(authUser);
    let hasReview = (reviews || []).filter(r => r.user._id === authUser._id)
    if (hasReview.length !== 0) {
      setHasAlreadyReview(true)
    }
    let hasNewReview = newReviews.filter(r => r.user._id === authUser._id)
    if (hasNewReview.length !== 0) {
      setHasAlreadyReview(true)
    }
  }, [newReviews, reviews]);


  return (
    <>
      <Tabs variant="pills" defaultActiveKey="reviews" id="uncontrolled-tab-example" className="mb-3">
        {/* <Tab eventKey="publicaciones" title="Publicaciones">
          Publicaciones
        </Tab> */}
        {
          user.type === "Guide" &&
          <Tab eventKey="reviews" title="Reviews">
            <div style={{ background: "#f5f5f5" }} className="text-center p-4 mb-3">
              {
                !hasAlreadyReview ?
                  <>
                    <div className="mb-2">
                      Cuéntanos cuál fue tu experiencia con el guía
                    </div>
                    <Button onClick={() => setShowModalReseña(true)} className="ms-auto mr-2" variant="success">Dejar una reseña</Button>
                  </>
                :
                  <>
                    <div className="mb-2">
                      Gracias por calificar al guía.
                    </div>
                  </>
              }

              <Modal show={showModalReseña} onHide={() => setShowModalReseña(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Registrar reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <RegisterReseñaForm createdSuccessfully={handleCreatedSuccessfully} idGuide={user.id}/>
                </Modal.Body>
              </Modal>
              
            </div>
            {
              newReviews && newReviews.map((review,i) => (
                <ReviewItem review={review} key={i}/>
              ))
            }
            {
              reviews && reviews.map((review,i) => (
                <ReviewItem review={review} key={i}/>
              ))
            }
          </Tab>
        }
      </Tabs>
    </>
  )
}