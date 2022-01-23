import * as React from "react";
import user from '../assets/img/user.jpeg';
const User = () => {
  return (
    <div className="nkn-vertical-align">
        <div className="nkn-vertical-align nkn-mb-medium">
            <img src={user} alt="Image of user" className="img-guide"/>                        
        </div>
        <div className="rate-guide">
            <h6 className="guide-name">Pedro Quiñones P.</h6>
            <p> <strong>Turista</strong> </p>
        </div>
    </div>
    
  );
};
export default User;
