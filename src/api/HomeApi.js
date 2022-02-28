import env from "react-dotenv";
export const getNearbyPlaces = async ({lat, lng}) => {
    return fetch(`${env.API_URL}home/get-nearby-places`, {
            method: 'POST',
            body: JSON.stringify({lat, lng}),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(e => { alert('sadad'); console.log("RESSSEEE",e)})
}