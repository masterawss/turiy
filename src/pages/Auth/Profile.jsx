import { getAuthUser } from "api/AuthApi";
import { useEffect, useState } from "react";
import { Card, Col, Container, Nav, Row, Tab,Form,Button } from "react-bootstrap"
import { TabGuide } from "./components/TabGuide"
export const Profile = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    getAuthUser().then((user) => {
      console.log('USER', user);
      setUser(user);
    });
  },[]);

  return (
    <>
      <Container className="py-4">
        {
          !!user && 
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Datos de usuario</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Guía de turismo</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Card>
                  <Card.Body>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                      <Row className="align-items-center mx-5">
                       <Col>
                        <Form>
                         <h4>Informacion de Usuario</h4>
                         <Form.Group className="mb-3" controlId="formBasicUsuario">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Nombre de Usuario" defaultValue={user.name}  />
                            <Form.Text className="text-muted">
                               Usuario registrado.
                            </Form.Text>
                         </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Correo</Form.Label>
                           <Form.Control type="text" placeholder="Correo" defaultValue={user.email} disabled />
                        
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Tipo Usuario</Form.Label>
                           <Form.Control type="text" placeholder="Correo" defaultValue={user.type} disabled />
                           
                         </Form.Group>
                           <div className="d-grid gap-2">
                            <Button type="submit" variant="primary" >
                            Editar Cuenta
                            </Button>
                          </div>
                       </Form>
                       </Col>
                       <Col>
                       <div className="text-center">
                         <img style={{width: '250px'}} src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion_114360-757.jpg?w=740&t=st=1648521396~exp=1648521996~hmac=12467da3b8b0c5c25cbb4cebf5b343c4402c94785b24951bbc8c4fa70595f908" alt="" />
                         <h5>Genera ingresos enseñando lo maravilloso que es el mundo.</h5>

                          <p className="my-4">
                           Aplica por tan solo <strong>S/. 40.00</strong> mensuales.
                          </p>
                        </div>
                       </Col>
                      </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <TabGuide user={user}></TabGuide>
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Container>
        }
      </Container>
    </>
  )
}