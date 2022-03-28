import {toast} from 'react-toastify'
import axiosInstance from 'utils/axios'
export const login = async ({email, password}) => {
    return axiosInstance.post('auth/login', {email, password})
        .then(res => {
            localStorage.setItem('token', res.data.token)
            return 'ok'
        })
        .catch(e => {
            toast.error('Ha ocurrido un error')
        })
}

export const getAuthUser = async () => {
    return axiosInstance.get('auth/user')
    .then(res => res.data.user)
    .catch(e => {
        localStorage.removeItem('token')
        // toast.error('Ha ocurrido un error')
    })
}

export const sendFormRegisterGuide = async (form) => {
  return axiosInstance
    .post('auth/register-guide', {
        form
    })
    .then(res => res.data)
    .catch(e => {
      toast.error('Ha ocurrido un error')
    })
}