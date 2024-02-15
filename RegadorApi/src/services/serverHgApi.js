import axios from 'axios';

const Url = ('https://api.hgbrasil.com/weather?woeid=455912');

export async function fetchDataHgApi(){
    try{const response = await axios.get(Url);
        return response.data;

    }catch(error){
        console.log(error)
        return (error, 'Falha ao buscar dados da Api.')
    }

}


