// import places_db from 'db/places.json'
import places_db from '../db/places.json'

export async function getPlaces(){
    return places_db;
}
export async function getPlace(id){
    // FILTRAR RESULTADOS
    let place = places_db.filter(place => place.id == id )
    // RETORNAR RESULTADOS
    return place[0];
}