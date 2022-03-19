import { Alert } from "react-bootstrap"
import { GuideCTA } from "./GuideCTA"

export const TabGuide = ({user}) => {
  return (
    <>
      {
        user.type !== 'Guide' && 
        <GuideCTA></GuideCTA>
      }
      {
        user.type === 'Guide' && 
        <Alert varian="success">
          Felicidades, ya eres un guía. Continúa a ayudando a la gente a descrubrir lugares y nuevas experiencias
        </Alert>
      }
    </>
  )
}