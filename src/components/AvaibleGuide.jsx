import * as React from "react";
import user from '../assets/img/user.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const AvaibleGuide = () => {
  return (
    <div className="nkn-flex">
        <div className="nkn-vertical-align nkn-mb-medium">
            <img src={user} alt="Image of user" className="img-guide"/>                        
        </div>
        <div className="rate-guide">
            <h6 className="guide-name">Maritza</h6>
            <FontAwesomeIcon icon={faStar} className="rate-review-icon"/>4.2
        </div>
    </div>
    
  );
};
export default AvaibleGuide;
