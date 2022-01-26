import * as React from "react";
import "../../assets/style/Place/place.css";
import user from '../../assets/img/user.jpeg';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ReviewCard = () => {
  return (
    <Card className="nkn-my-medium">        
        <Card.Body>
            <Card.Title>
                <div className="nkn-space-between">
                    <div className="nkn-vertical-align">
                        <img src={user} alt="Image of user" className="user-img"/>
                        <h4 className="user-name">Maday</h4>
                    </div>
                    <div className="rate-review">
                        <FontAwesomeIcon icon={faStar} className="rate-review-icon"/>4.2
                    </div>
                </div>
            </Card.Title>
            <Card.Text>
            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
            simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de
            la literatura del Latin, que data del año 45 antes de Cristo
            </Card.Text>
        </Card.Body>
    </Card>
  );
};
export default ReviewCard;
