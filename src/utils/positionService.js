export function getCurrentPosition(){
    if(!navigator.geolocation) {
        let error_message = 'Su navegador no soporta la geolocalización'
        // alert(error_message);
        throw new Error(error_message)
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            return {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        }, (error) => {
            alert('No se puede obtener su ubicación actual')
            throw (error)
        });
    }
}