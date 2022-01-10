import { Badge, Card, Stack } from "react-bootstrap";
import { faStar, faUsers} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function PlaceItem(){
    return (
        <Card>
            <Card.Body>
                <Stack direction="horizontal" gap={4}>
                    <img 
                        style={{width: '120px', height: '124px', objectFit: 'cover'}} 
                        src="https://static.eldiario.es/clip/622bc8d8-cf25-4945-b0a2-f289d5414664_16-9-aspect-ratio_default_0.jpg" class="rounded float-start" alt="..."/>
                    <div className="p-2">
                        <div>
                            <strong>Nombre del lugar</strong>
                        </div>
                        <br/>
                        <div className="my-1">
                            <div>
                                <FontAwesomeIcon icon={faStar} />
                                4.8 (30 reviews)
                            </div>
                            <br/>
                            <div>
                                <FontAwesomeIcon icon={faUsers} />
                                15 guías
                            </div>
                        </div>
                        <br/>
                        <Badge pill bg="primary">
                            Primary
                        </Badge>
                    </div>
                </Stack>
            </Card.Body>
        </Card>
    )
}