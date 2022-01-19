export default function Marker({ place }){
    return (
        <div className="row justify-content-center align-items-center">
            {
                place.isVisited && 
                <div className="col-12" style={{ backgroundColor: 'red'}}>
                    <img style={{ width: '120px'}} src="https://www.pngfind.com/pngs/m/6-67846_humo-de-cobarcho-efectos-de-humo-png-transparent.png" alt=""/>
                </div>
            }
            <div className="col-12" style={{ backgroundColor: 'blue'}}>
                <img style={{ marginTop: '-60px', width: '80px', filter: place.isVisited ? 'grayscale(1)' : 'grayscal(0)'}} src={place.markerUrl} alt="" />
            </div>
        </div>
    )
}