import { Card, Container } from "react-bootstrap"

export const Success = () => {
  return (
    <>
      <Container className="py-4">
        <Card>
          <Card.Body style={{padding: '100px 200px 100px 200px'}}>
            <div className="text-center">
              <img style={{width: "400px"}} src="https://img.freepik.com/vector-gratis/equipo-empleados-felices-ganando-premios-celebrando-exito-gente-negocios-disfrutando-victoria-obteniendo-trofeo-copa-oro-ilustracion-vector-recompensa-premio-campeones-s_74855-8601.jpg?t=st=1647721648~exp=1647722248~hmac=fc1139540676e254ba4df69925a5b02ebe8c8ea9c003089e26d73051bc998826&w=996" alt="" />
              <h3>Ahora eres un guía oficial en Turiy</h3>
              <p className="my-3">
                Desde ahora te concedemos el poder de generar de experiencias únicas.
                Recuerda, un gran poder conlleva una gran responsabilidad ;)
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}