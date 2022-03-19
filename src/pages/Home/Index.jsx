import '../../assets/style/Home/style.css'
import GoogleMapReact from 'google-map-react';
import SectionSearch from "pages/Home/components/SectionSearch";
import { useEffect, useState } from 'react';
import Marker from 'components/Marker';
import { getPlaces } from 'api/PlaceApi';
import PlaceItem from 'pages/Home/components/PlaceItem';
import { getMapStyle } from 'utils/mapStyle';
import ModalPlace from 'pages/Home/components/ModalPlace';
import { useCurrentPositionPlaces } from 'hook/Home/useCurrentPositionPlaces';

export default function Index(props){

    const [mapData, setMapData] = useState({
        center: {
            lat: -6.489425,
            lng: -76.376167
        },
        zoom: 11,
    })
    
    const [places, loading] = useCurrentPositionPlaces({current_position: mapData.center, zoom: mapData.zoom})

    return (
    <>
        <div style={{ height: '92.4vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA4Zx1bfk5gqw4aBMjbAQJJxPfxJo3WWcs' }}
                defaultCenter={mapData.center}
                defaultZoom={mapData.zoom}
                options={{ styles: getMapStyle() }}
            >
                { loading || places.map((place) => 
                        <Marker
                            place={place}
                            key={place.id}
                            lat={place.coordinates.lat}
                            lng={place.coordinates.lng} />
                    )
                }
            </GoogleMapReact>
        </div>
        <div className="fixed-top mt-5 pt-4" style={{zIndex: 0}}>
            <SectionSearch></SectionSearch>
        </div>
        <div className="fixed-bottom scroll-x p-4" >
            {loading
                ? <strong>Cargando</strong>
                : places.map((place, i) => 
                    <div key={place.id} style={{marginRight: '10px'}}>
                        <PlaceItem place={place}></PlaceItem>
                    </div>
            )}
        </div>
        <ModalPlace />
    </>
    );

    
}