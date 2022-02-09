import guie_db from 'db/users.json'

export async function getGuides(){
    return guie_db;
}

export async function getGuide(id){
     // FILTRAR RESULTADOS
    let guie = guie_db.filter(guie => guie.id == id )
    // RETORNAR RESULTADOS
    return guie;
}
  

    