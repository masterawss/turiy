import { toast } from 'react-toastify'
import axiosInstance from 'utils/axios'

export const storeReseña = (id_guide, data) => {
  return axiosInstance.post('reviews/create', {
    guide: id_guide,
    ...data
  })
    .then(r => r.data)
    .catch(e => {
      toast.error('Ha ocurrido un error')
    })
}