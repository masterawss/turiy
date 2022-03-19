import { toast } from "react-toastify";
import axiosInstance from 'utils/axios'

export async function getPlace(id){
    // FILTRAR RESULTADOS
    return axiosInstance.get('places/'+id)
        .then(r => r.data)
        .catch(e => {
            toast.error('Ha ocurrido un error')
        })
}