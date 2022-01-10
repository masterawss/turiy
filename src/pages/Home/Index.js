import '../../assets/style/Home/style.css'
import GoogleMapReact from 'google-map-react';
import SectionResults from "../../components/Home/SectionResults";
import SectionSearch from "../../components/Home/SectionSearch";
export default function Index(props){

    const {
        center = {
          lat: -6.489425,
          lng: -76.376167
        },
        zoom = 11,
        ...restProps
    } = props;

    const Marker = ({ place }) => <div className="row justify-content-center align-items-center">
            {
                place.isVisited && 
                <div className="col-12" style={{ backgroundColor: 'red'}}>
                    <img style={{ width: '120px'}} src="https://www.pngfind.com/pngs/m/6-67846_humo-de-cobarcho-efectos-de-humo-png-transparent.png" alt=""/>
                </div>
            }
            <div className="col-12" style={{ backgroundColor: 'blue'}}>
                <img style={{ marginTop: '-60px', width: '80px', filter: place.isVisited ? 'grayscale(1)' : 'grayscal(0)'}} src={place.imageUrl} alt="" />
            </div>
    </div>;
    
    if(!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

    return (
    <>
        <div style={{ height: '92.4vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA4Zx1bfk5gqw4aBMjbAQJJxPfxJo3WWcs' }}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                {
                    getPlaces().map((place, i) => 
                        (<Marker
                            place={place}
                            key={i}
                            lat={place.lat}
                            lng={place.lng}
                        />)
                    )
                }
            </GoogleMapReact>
        </div>
        <div className="fixed-top mt-5 pt-4">
            <SectionSearch></SectionSearch>
        </div>
        <SectionResults ></SectionResults>
    </>
    );

    function success(position) {
        console.log(position);
        center.lat = position.coords.latitude
        center.lng = position.coords.longitude
    }

    function getPlaces(){
        return [
            {
                lat: -6.489425,
                lng: -76.376167,
                txt: 'Holis',
                imageUrl: 'https://w7.pngwing.com/pngs/54/73/png-transparent-cartoon-island-cartoon-cartoon-character-beach-happy-birthday-vector-images.png',
                isVisited: false
            },
            {
                lat: -6.589425,
                lng: -76.276167,
                txt: 'Holis',
                imageUrl: 'https://image.pngaaa.com/962/1546962-middle.png',
                isVisited: true
            },
            {
                lat: -6.479425,
                lng: -76.296167,
                txt: 'Holis',
                imageUrl: 'https://image.pngaaa.com/962/1546962-middle.png',
                isVisited: false
            },
        ]
    }

    function error() {
        alert('Unable to retrieve your location');
    }

}