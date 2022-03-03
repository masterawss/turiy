import env from "react-dotenv";
import { toast } from "react-toastify";

import axiosInstance from 'utils/axios'
export const getNearbyPlaces = async ({lat, lng}) => {
    return axiosInstance.post('home/get-nearby-places')
        .then(r => r.data)
        .catch(e => {
            toast.error('Ha ocurrido un error')
        })
}