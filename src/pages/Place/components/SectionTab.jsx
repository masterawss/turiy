import { Alert, Tab, Tabs } from "react-bootstrap"
import {CardPublication} from 'components/CardPublication'
import {CardReview} from 'components/CardReview'
import { useParams } from "react-router-dom"
export const SectionTab = ({place}) => {
  return (
    <>
      <Tabs variant="pills" defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="about" title="Información del sitio">
          <h5>Acerca del sitio</h5>
          <p>
            {place.description}
          </p>
          <h5>Información adicional</h5>
          <p>
            {place.extra_info}
          </p>
        </Tab>
        <Tab eventKey="publicaciones" title="Publicaciones">
          {
            place.publications && place.publications.map(publication => (
              <CardPublication publication={publication}/>
            ))
          }
          {
            place.publications || 
            <Alert variant="info">
              Aún no hay publicaciones para este sitio. Anímate, sé el primero :)
            </Alert>
          }
        </Tab>
        <Tab eventKey="reseñas" title="Reseñas">
          {
            place.reviews && place.reviews.map(review => (
              <CardReview review={review}/>
            ))
          }
          {
            place.reviews || 
            <Alert variant="info">
              Aún no hay reviews para este sitio. Anímate, sé el primero :)
            </Alert>
          }
        </Tab>
      </Tabs>
    </>
  )
}