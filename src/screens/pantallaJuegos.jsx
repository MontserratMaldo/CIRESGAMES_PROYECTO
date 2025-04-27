import React from 'react';
import './pantallaJuegos.css';
import "../screens/stylesGlobal.css";
import { useNavigate } from 'react-router-dom';

const PantallaJuegos = () => {
  const navigate = useNavigate();

  const playButtonSound = () => {
    const audio = new Audio('/assets/Botones/boton.mp3');
    audio.play().catch(error => {
      console.error("Error al reproducir el sonido:", error);
    });
  };

  const handleGoBack = () => {
    playButtonSound();
    navigate(-1);
  };

  return (
    <div className="pantalla-juegos">
      <header className="header">
        <h1 className="titulo">CIRESGAMES</h1>
        <h2 className="subtitulo">Dr. Dario</h2>
      </header>

      <div className="botones-actividades">
        <div className="actividades-container1">
          <button className="actividad-btn" onClick={playButtonSound}>
            Actividad 1
          </button>
          <button className="actividad-btn" onClick={playButtonSound}>
            Actividad 2
          </button>
          <button className="actividad-btn" onClick={playButtonSound}>
            Actividad 3
          </button>
        </div>
        <div className="actividades-container2">
          <button className="actividad-btn" onClick={playButtonSound}>
            Actividad 4
          </button>
          <button className="actividad-btn" onClick={playButtonSound}>
            Actividad 5
          </button>
        </div>
      </div>

      {/* Botón de regreso con clase específica */}
      <div className="boton-regreso-container">
        <button 
          className="boton-regresar" // Clase diferente para el botón de regresar
          onClick={handleGoBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default PantallaJuegos;