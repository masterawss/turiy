import * as React from "react";
import FotoGuide from '../../assets/img/user.jpeg';
const InfoGuide = () => {
  return (
    <div className="nkn-vertical-align">
        <div className="nkn-vertical-align nkn-mb-medium">
            <img src={FotoGuide} alt="Image of user" className="img-guide"/>                        
        </div>
        <div className="rate-guide">
            <h6 className="guide-name">Pedro Quiñones P.</h6>
            <p> <strong>Turista</strong> </p>
        </div>
    </div>
    
  );
};
export default InfoGuide;
