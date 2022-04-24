import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ImgProfile } from "./ImgProfile"

export const ReviewItem = ({review}) => {
  return (
    <div>
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
  )
}