import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tab, Tabs } from "react-bootstrap"
import { ImgProfile } from "./ImgProfile"

export const SectionTab = ({user, reviews}) => {
  return (
    <>
      <Tabs variant="pills" defaultActiveKey="publicaciones" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="publicaciones" title="Publicaciones">
          Publicaciones
        </Tab>
        {
          user.type === "Guide" &&
          <Tab eventKey="reviews" title="Reviews">

            {
              reviews && reviews.map((review,i) => (
                <div>
                  <div key={i} className="d-flex justify-content-between align-items-start">
                    <div>
                      <ImgProfile  style={{width: "55px"}} user={review.user}></ImgProfile>
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