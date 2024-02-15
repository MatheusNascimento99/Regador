import express from 'express';
import cors from 'cors';
import { fetchDataHgApi } from './serverHgApi.js';
const AppMeuServidor = express()
const PORT = 3001;

//* CONFIG MEU SERVIDOR
AppMeuServidor.get('/previsao', async (req, res) => {
    try{
        const data = await fetchDataHgApi();
        res.json(data);
        console.log(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do Servidor.'});
    }
})


AppMeuServidor.listen(PORT, () => {
    console.log(`Servidor operacional na porta ${PORT}`);
})
