import db from 'db/places.json'
export async function getGuides(){
    return db.users;
}
export async function getGuide(id){
    // FILTRAR RESULTADOS
    let users = db.users.filter(users => users.id == id )

    // RETORNAR RESULTADOS
    return users;
} 