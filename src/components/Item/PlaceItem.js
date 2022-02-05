import { Badge, Card, Stack } from "react-bootstrap";
import { faStar, faUsers} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
export default function PlaceItem({place}){
    return (
        <Link to={'place/'+place.id}>
            <Card>
                <Card.Body>
                    <Stack direction="horizontal" gap={4}>
                        <img 
                            style={{width: '120px', height: '124px', objectFit: 'cover'}} 
                            src={place.imageUrl} className="rounded float-start" alt="..."/>
                        <div className="p-2">
                            <div>
                                <strong>Nombre del lugar</strong>
                            </div>
                            <br/>
                            <div className="my-1">
                                <div>
                                    <FontAwesomeIcon style={{color: 'orange'}} icon={faStar} />
                                    <span className="text-muted ml-3">4.8 (30 reviews)</span>
                                </div>
                                <br/>
                                <div>
                                    <FontAwesomeIcon style={{color: 'gray'}} icon={faUsers} />
                                    <span className="text-muted ml-3">15 guías</span>
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
        </Link>
    )
}