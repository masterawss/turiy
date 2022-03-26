import * as React from "react";
import { Badge} from "react-bootstrap";
import { ImgProfile } from "./ImgProfile";
export const InfoCard = ({user}) => {

  
  return (
    <div className="nkn-vertical-align">
      <div className="text-center">
        <ImgProfile style={{width: "120px", height: "120px"}} user={user}></ImgProfile>
        <div className="mt-3">
          <h5>{ user.name }</h5>
          <Badge>
            {user.type}
          </Badge>
        </div>
      </div>
    </div>
  );
};
