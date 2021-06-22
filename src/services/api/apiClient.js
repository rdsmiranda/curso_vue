import httpClient from '../httpClient'

let http = httpClient({
    baseURL: process.env.VUE_APP_BASEURL
})

http.defaults.headers.common['x-rapidapi-key']  = process.env.VUE_APP_RAPIDAPI_SECRET; // Para desarrollo va en env.local
http.defaults.headers.common['x-rapidapi-host'] = process.env.VUE_APP_RAPIDAPI_HOST; // Para desarrollo va en env.local

export default http