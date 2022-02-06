import '../../assets/style/Home/style.css'
import GoogleMapReact from 'google-map-react';
import SectionSearch from "components/Home/SectionSearch";
import { useEffect, useState } from 'react';
import Marker from 'components/Marker';
import { getPlaces } from 'api/PlaceApi';
import PlaceItem from 'components/Item/PlaceItem';
import { getMapStyle } from 'utils/mapStyle';

export default function Index(props){

    const [mapData, setMapData] = useState({
        center: {
            lat: -6.489425,
            lng: -76.376167
        },
        zoom: 11,
    })

    const [places, setPlaces] = useState([])
    useEffect(() => {
        getPlaces().then(places => {
            setPlaces(places)
        })
    }, []);

    useEffect(() => {
        getCurrentPosition()
    }, []);

    

    return (
    <>
        <div style={{ height: '92.4vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA4Zx1bfk5gqw4aBMjbAQJJxPfxJo3WWcs' }}
            defaultCenter={mapData.center}
            defaultZoom={mapData.zoom}
            options={{ styles: getMapStyle() }}
            >
                {places.map((place) => 
                    <Marker
                        place={place}
                        key={place.id}
                        lat={place.coordinates.lat}
                        lng={place.coordinates.lng} />
                )}
            </GoogleMapReact>
        </div>
        <div className="fixed-top mt-5 pt-4">
            <SectionSearch></SectionSearch>
        </div>
        <div className="fixed-bottom scroll-x p-4" >
            {places.map((place, i) => 
                <div key={place.id} style={{marginRight: '10px'}}>
                    <PlaceItem place={place}></PlaceItem>
                </div>
            )}
        </div>
    </>
    );

    function getCurrentPosition(){
        if(!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                setMapData({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                })
            }, (error) => {alert('Unable to retrieve your location')});
        }
    }
}