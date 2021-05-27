import axios from "axios"

const HTTP = axios.create({
    baseURL: '/city/api'
})

export default HTTP