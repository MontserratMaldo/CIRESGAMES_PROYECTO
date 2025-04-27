import React from "react";
import "../screens/stylesGlobal.css";
import "../screens/PantallaCreditos.css";
import { useNavigate } from 'react-router-dom';

const PantallaCreditos = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const audio = new Audio('/assets/Botones/boton.mp3');
    audio.play();

    // Esperar a que el sonido termine antes de navegar
    audio.onended = () => {
      navigate('/');
    };
  };

  return (
    <div className="contenedor-creditos">
      <h1 style={{ color: "#fbc531", marginBottom: "20px" }}>Créditos</h1>

      <h2 style={{ fontSize: "16px" }}>Desarrolladores:</h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "12px" }}>
        <li>Director de Juego: Alan Smithee</li>
        <li>Programador Principal: Abraham Barrera</li>
        <li>Diseñador Gráfico: Monserrat Maldonado</li>
        <li>Sonido y Efectos: Erick Rodríguez</li>
        <li>Narrativa: Josue Rosaldo</li>
        <li>Tester Principal: Miguel Patraca</li>
      </ul>

      <h2 style={{ fontSize: "16px", marginTop: "30px" }}>Agradecimientos Especiales:</h2>
      <h2 style={{ fontSize: "12px", maxWidth: "600px" }}>
        A nuestras familias por su paciencia y apoyo. A la comunidad de desarrolladores indie por su inspiración constante. Y, por supuesto, a todos los jugadores que nos acompañan en este viaje. Gracias por jugar.
      </h2>

      <p style={{ marginTop: "20px", fontSize: "12px" }}>¡Nos vemos en la próxima aventura!</p>

      <button onClick={handleButtonClick}>
        Regresar
      </button>
    </div>
  );
};

export default PantallaCreditos;
