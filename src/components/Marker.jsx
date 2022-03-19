import { ImageMarker } from "assets/style/Home/style.component";
import {
    openModal
} from 'store/landing/modalLandingSlice'
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Marker({ place }){
    const [isVisited] = useState(Math.ceil(Math.random() >= 0.5));
    const dispatch = useDispatch()
    const handleShowModal = () => dispatch(openModal(place));
    return (
        <ImageMarker 
            onClick={handleShowModal} 
            src={place.images[0]} alt="props" 
            isVisited={isVisited}>
        </ImageMarker>
    )
}