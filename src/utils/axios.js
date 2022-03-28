import axios from "axios";
import env from '../env.json'

const client = axios.create({
    baseURL:  env.API_URL
});


client.interceptors.request.use(function(config){
    const token = localStorage.getItem('token') || ''
    config.headers.Authorization = token
    return config
})

// client.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//     // if(err.response.status === 401){
//     //     console.log('ERROR asdds');
//     // }
// })

export default client;