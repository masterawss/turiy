import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ImgProfile } from "pages/User/components/ImgProfile"
import { Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

export const SectionGuiasDisponibles = ({place}) => {
  console.log(place.guides);
  return (
    <>
      <h5 className="mb-4">Guías disponibles</h5>
      {
        !!place.guides && place.guides.map( guide => (
          <Link style={{color: 'inherit', textDecoration: 'inherit'}} to={'/user/'+guide.id} key={guide.id}>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <ImgProfile  style={{width: "55px"}} user={guide}></ImgProfile>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{guide.name}</div>
                <div>
                  <FontAwesomeIcon icon={faStar} /> {guide.stars || '-'}
                </div>
              </div>
            </div>
          </Link>
        ))
      }
      {
        (!place.guides || place.guides.length === 0) && 
        <>
          <Alert variant="secondary">
            Aún hay guías para este sitio 😕
          </Alert>
        </>
      }
    </>
  )
}