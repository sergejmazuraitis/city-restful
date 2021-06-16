import axios from "axios"
import store from "../store";

const HTTP = axios.create({
    baseURL: '/city/api'
})

HTTP.interceptors.request.use(config => {
    console.log('config', config)
    if (store.getState().user.jwt) {
        config.headers.authorization = "Bearer " + store.getState().user.jwt
    }
    return config
})

HTTP.interceptors.response.use(response => {
    console.log('response', response)
    return response
})
export default HTTP