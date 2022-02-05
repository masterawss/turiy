import db from 'db/places.json'

export async function getPlaces(){
    return db.places;
}
export async function getPlace(id){
    // FILTRAR RESULTADOS
    let place = db.places.filter(place => place.id == id )

    // RETORNAR RESULTADOS
    return place;
}