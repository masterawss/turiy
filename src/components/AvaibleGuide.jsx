import * as React from "react";
import { Link } from 'react-router-dom';
import user from '../assets/img/user.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const AvaibleGuide = (props) => {
  return (
    <div className="nkn-flex">
        <div className="nkn-vertical-align nkn-mb-medium">
            <img src={user} alt="Image of user" className="img-guide"/>                        
        </div>
        <div className="rate-guide">
            <Link to="/guide" className="guide-name">
              <h5>{props.name}</h5>
            </Link>
            <FontAwesomeIcon icon={faStar} className="rate-review-icon"/>4.2
        </div>
    </div>
    
  );
};
export default AvaibleGuide;
