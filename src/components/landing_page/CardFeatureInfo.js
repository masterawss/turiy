import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Box, Card, CardContent, Icon, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";

// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';

function CardFeatureInfo({feature}){
    return (
        <>
            <div style={{ backgroundColor: grey[50], boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)', shadowColor:grey[50], borderRadius: '20px' }} >
                <CardContent>
                    <Avatar sx={{ bgcolor: feature.color, width: 80, height: 80, borderRadius: '25px' }} variant="rounded">
                        {feature.icon}
                    </Avatar>
                    <Typography fontWeight="bold" sx={{mt: 3}} variant="h5" component="div">
                        {feature.title}
                    </Typography>
                    <Typography sx={{mt: 2, color: grey[600]}} variant="body1">
                        {feature.desc}
                    </Typography>
                </CardContent>
            </div>
        </>
    );
}

export default CardFeatureInfo;
