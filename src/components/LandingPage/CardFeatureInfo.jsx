import { Card } from "react-bootstrap";
import {grey} from 'material-ui-colors';

// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';

function CardFeatureInfo({feature}){
    return (
        <>
            <Card  style={{ backgroundColor: grey[50], boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)', shadowColor:grey[50], borderRadius: '20px' }} >
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-center text-white mb-3" style={{ backgroundColor: feature.color, width: 80, height: 80, borderRadius: '25px' }}>
                        {feature.icon}
                    </div>
                    <h5>
                        <strong>{feature.title}</strong>
                    </h5>
                    <div sx={{mt: 2, color: grey[600]}} variant="body1">
                        {feature.desc}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardFeatureInfo;
