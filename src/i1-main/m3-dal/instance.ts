import axios from 'axios'

export const baseURL = 'http://localhost:7542/3.0/'
// export const baseURL = 'https://personal-area-it-incubator.herokuapp.com/1.0/'

export const instance = axios.create({
    baseURL,
    withCredentials: true,
})

export const loginInstance = axios.create({
    baseURL: 'https://labs-api.staging.it-kamasutra.com/api/',
    withCredentials: true,
})
