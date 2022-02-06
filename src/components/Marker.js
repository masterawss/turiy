import { ImageMarker } from "assets/style/Home/style.component";
import {
    openModal
} from 'store/landing/modalLandingSlice'
import { useDispatch } from "react-redux";

export default function Marker({ place }){
    const isVisited = true;
    const dispatch = useDispatch()
    const handleShowModal = () => dispatch(openModal(place));
    return (
        <ImageMarker 
            style={{cursor: 'pointer'}} 
            onClick={handleShowModal} 
            src={place.images[0]} alt="props" 
            isVisited={isVisited}>
        </ImageMarker>
    )
}