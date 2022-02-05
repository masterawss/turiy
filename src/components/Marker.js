import imageUrl from '../assets/logo.svg';

export default function Marker({ place }){
    // const marker = <img src={imageUrl} />;
    return (
        <div className="row justify-content-center align-items-center">
            {
                place.isVisited && 
                <div className="col-12" style={{ backgroundColor: 'red'}}>
                    <img src={imageUrl} alt="props" />
                </div>
            }
            <div className="col-12" >
                <img style={{ marginTop: '-60px', filter: place.isVisited ? 'grayscale(1)' : 'grayscal(0)'}} src={imageUrl} alt="" />
            </div>
        </div>
    )
}