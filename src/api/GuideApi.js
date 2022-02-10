import db from 'db/users.json'

export async function getGuides(){
    return db;
}
export async function getGuide(id){
    // FILTRAR RESULTADOS
    let users = db.filter(user => user.id == id )

    // RETORNAR RESULTADOS
    return users;
}