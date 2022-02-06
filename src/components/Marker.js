import { ImageMarker } from "assets/style/Home/style.component";
export default function Marker({ place }){
    // const marker = <img src={imageUrl} />;
    const isVisited = true;

    

    return (
        <div style={{backgroundColor: 'red'}}>
            <ImageMarker src={place.images[0]} alt="props" isVisited={isVisited}>
            </ImageMarker>
        </div>
    )
}