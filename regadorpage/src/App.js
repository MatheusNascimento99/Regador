import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [listaDados, setListaDados] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/previsao")
      .then((response) => {
        setListaDados(response.data.results); 
        
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div className="App_full">
      {listaDados && ( //! técnica de react para renderizar apenas quando listaDados for diferente de null
        <div className="today">
          <h1>Cidade: {listaDados.city}</h1>
          <p>Data: {listaDados.date}</p>
          <p>Dia da semana: {listaDados.forecast[0].weekday}</p>
          <p>Máxima: {listaDados.forecast[0].max} Cº</p>
          <p>Mínima: {listaDados.forecast[0].min} Cº</p>
          <p>Temperatura Atual: {listaDados.temp} Cº</p>
          <p>Descrição: {listaDados.description}</p>
          <p>Humidade: {listaDados.humidity} %</p>
          <p>Probabilidade de chuva: {listaDados.forecast[0].rain_probability} %</p>
          <p>Volume de chuva na última hora: {listaDados.rain} mm</p>
          <p>Velocidade do vento: {listaDados.wind_speedy}</p>

          <div className="tomorrow">
          <br></br>
          <p>Data: {listaDados.forecast[1].date}</p>
          <p>Dia da semana: {listaDados.forecast[1].weekday}</p>
          <p>Máxima: {listaDados.forecast[1].max} Cº</p>
          <p>Mínima: {listaDados.forecast[1].min} Cº</p>
          <p>Previsão: {listaDados.forecast[1].description}</p>
          <p>Nebulosidade {listaDados.forecast[1].cloudiness} %</p>
          <p>Probabilidade de chuva: {listaDados.forecast[1].rain_probability} %</p>
          <p>Velocidade do vento: {listaDados.forecast[1].wind_speedy}</p>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
