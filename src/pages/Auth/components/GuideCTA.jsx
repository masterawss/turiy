import GuideImg from 'assets/img/guide.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const GuideCTA = () => {
  return (
    <>
      <img style={{width: '100%'}} src={GuideImg} alt="" />

      <div className="text-center my-4">
        <h3>Aún no eres guía de turismo</h3>

        <p>
        Conviertete en un uno y ayuda a las personas a conocer el mundo
        </p>

        <Button variant="info">
          <Link to="/register-guide">
            Conviértete en guía de turismo
          </Link>
        </Button>
      </div>
    </>
  )
}