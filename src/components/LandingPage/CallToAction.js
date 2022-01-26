import { Button } from "react-bootstrap";
import banner1 from "../../assets/img/banner1.png";
import { Link } from 'react-router-dom';
function CallToAction() {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner1})`, textAlign: 'center',fontWeight: 'bold', color: 'white', paddingTop: '100px', paddingBottom: '100px' }}>
                {/* <img src={banner1}></img> */}
                <h3>
                    <strong>Explora el mundo ahora</strong>
                </h3>
                
                <Button className="px-4" >
                    <div style={{ fontWeight: 'bold', fontSize: 23, px: 4}}>
                        Ingresar
                    </div>
                </Button>
            </div>
        </>
    )
}

export default CallToAction;