import { Badge, Card, Stack } from "react-bootstrap";
import { faStar, faUsers} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default function PlaceItem({place}){
    return (
        <Link to={'/place/'+place.id}>
            <Card>
                <Card.Body>
                    <Stack direction="horizontal" gap={4}>
                        <img 
                            style={{width: '120px', height: '124px', objectFit: 'cover'}} 
                            src={place.images[0]} className="rounded float-start" alt="..."/>
                        <div className="p-2">
                            <div>
                                <strong>{place.title}</strong>
                            </div>
                            <br/>
                            <div className="my-1">
                                <div>
                                    <FontAwesomeIcon style={{color: 'orange'}} icon={faStar} />
                                    <span className="text-muted ml-3"> {place.stars} ({place.reviews?.length || 0} reviews)</span>
                                </div>
                                <br/>
                                <div>
                                    <FontAwesomeIcon style={{color: 'gray'}} icon={faUsers} />
                                    <span className="text-muted ml-3"> {place.guides?.length || 0} guías</span>
                                </div>
                            </div>
                            <br/>
                            {place.categories.map(category => 
                                <Badge key="category" pill bg="primary">
                                    {category}
                                </Badge>    
                            )}
                        </div>
                    </Stack>
                </Card.Body>
            </Card>
        </Link>
    )
}