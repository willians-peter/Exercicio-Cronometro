import { useEffect, useState } from "react";
import "./App.css";
import imagemF1 from "./f1.jpg";

function App() {
  const [tempo, setTempo] = useState(0);
  const [rodando, setRodando] = useState(false);
  console.log("o que acontece: useState", useState);
  useEffect(() => {
    let intervalo;

    if (rodando) {
      intervalo = setInterval(() => {
        setTempo((tempoAnterior) => tempoAnterior + 10);
      }, 10);
    } else if (!rodando && tempo !== 0) {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [rodando, tempo]);

  const formatTempoMinutosSegundos = (tempo) => {
    const minutos = Math.floor(tempo / 60000);
    const segundos = Math.floor((tempo % 60000) / 1000);
    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    document.title = `Cronômetro: ${formatTempoMinutosSegundos(tempo)}`;
  }, [tempo]);

  const iniciar = () => {
    setRodando(true);
  };

  const pausar = () => {
    setRodando(false);
  };

  const reset = () => {
    setTempo(0);
    setRodando(false);
  };

  const formatTempo = (tempo) => {
    const minutos = Math.floor(tempo / 600000);
    const segundos = Math.floor((tempo % 60000) / 1000);
    const milisegundos = Math.floor(tempo % 1000);
    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}:${milisegundos.toString().padStart(3, "0")}`;
  };

  return (
    <div className="cronometro">
      <h1>Cronômetro</h1>
      <div className="tempo">Tempo: {formatTempo(tempo)}</div>
      <br />
      <div className="botao">
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={pausar}>Pausar</button>
        <button onClick={reset}>Zerar</button>
      </div>
      <div className="imagem_f1">
        <img src={imagemF1} alt="carro de corrida formula 1" />
      </div>
    </div>
  );
}

export default App;
