import express from "express";
import cors from "cors";
import { fetchDataHgApi } from "./serverHgApi.js";
const AppMeuServidor = express();
AppMeuServidor.use(cors())  //* aqui informo que meu servidor irá usar o cors
const PORT = 3001;

//* CONFIG MEU SERVIDOR
AppMeuServidor.get("/previsao", async (req, res) => {
  try {
    const data = await fetchDataHgApi();
    res.json(data)
    console.log(data.by);
    console.log('Cidade:',data.results.city);
    console.log('Data:',data.results.date);
    console.log('Temperatura:',data.results.temp, 'Cº');
    console.log('Condição:',data.results.description);
    console.log('Humidade:',data.results.humidity, '%');
    console.log('Ver na documentação',data.results.cloudiness);
    console.log('Previsão de chuva',data.results.rain, 'mm');
    console.log('Velocidade do vento',data.results.wind_speedy);
    
    console.log('Data',data.results.forecast[1].date);
    console.log('Dia da semana',data.results.forecast[1].weekday);
    console.log('Máxima',data.results.forecast[1].max, 'Cº');
    console.log('Mínima',data.results.forecast[1].min, 'Cº');
    console.log('Ver doc',data.results.forecast[1].cloudiness);
    console.log('Volume de chuva na última hora',data.results.forecast[1].rain, 'mm');
    console.log('Probabilidade de chuva',data.results.forecast[1].rain_probability, '%');
    console.log('Velocidade do vento',data.results.forecast[1].wind_speedy);
    console.log('Descrição',data.results.forecast[1].description);

    return data;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do Servidor." });
  }
});

AppMeuServidor.listen(PORT, () => {
  console.log(`Servidor operacional na porta ${PORT}`);
});
