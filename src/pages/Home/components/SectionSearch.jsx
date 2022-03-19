import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";

export default function SectionSearch(){
    return (
        <div className="container">
            <Row className="justify-content-md-center">
                <Col sm="12" lg="4">
                    <Card >
                        <Card.Body>
                            <div className="text-center mb-2">
                                <strong>¿Cuál será tu próxima aventura?</strong>
                            </div>
                            <div className="p-2 rounded" style={{backgroundColor: '#F5F5F5',}}>
                                <FontAwesomeIcon icon={faSearch} />
                                <input className="ml-2 outline-none" style={{border: 'none', backgroundColor: 'transparent', marginLeft: '10px', width: '90%' }} placeholder="Buscar sitio ..." />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}