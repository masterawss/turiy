import { getAuthUser } from "api/AuthApi";
import { useEffect, useState } from "react";
import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap"
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
                        asdadad
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