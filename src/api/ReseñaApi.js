import { toast } from 'react-toastify'
import axiosInstance from 'utils/axios'

export const storeReseña = (data) => {
  return axiosInstance.post('reviews', data)
    .then(r => r.data)
    .catch(e => {
      toast.error('Ha ocurrido un error, vuelva a intentarlo otra vez')
    })
}