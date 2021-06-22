import http from './api/apiClient';

const getTemperatura = async(ciudad) =>{

    http.defaults.params = {q:ciudad}
    
    return await http.get().then((response) =>{
        return response.data.current.temp_c;
    }).catch((err)=>{
        return err;
    })
}

const exported = {
    getTemperatura
}

export default exported;