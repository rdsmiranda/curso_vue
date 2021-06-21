import httpClient from '../httpClient'

let http = httpClient({
    baseURL: process.env.VUE_APP_BASEURL
})

http.defaults.headers.common['x-rapidapi-key'] = '7ee831dbe1msh292378f49f00c1ap180074jsn8fced5f8a5c6';
http.defaults.headers.common['x-rapidapi-host'] = 'weatherapi-com.p.rapidapi.com';

export default http