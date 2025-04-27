import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PantallaInicio from './screens/PantallaInicio';
import PantallaCreditos from './screens/PantallaCreditos';
import PantallaJuegos from './screens/pantallaJuegos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PantallaInicio />} />
        <Route path="/juegos" element={<PantallaJuegos />} />
        <Route path="/creditos" element={<PantallaCreditos />} />
      </Routes>
    </Router>
  );
}

export default App;
