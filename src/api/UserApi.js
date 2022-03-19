import axiosInstance from 'utils/axios'
import { toast } from "react-toastify";

export async function getUser(id){
  return axiosInstance.get('users/'+id)
    .then(r => r.data)
    .catch(e => {
      toast.error('Ha ocurrido un error')
    })
}