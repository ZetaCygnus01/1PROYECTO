import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./Pages/Inicio";
import Prueba from "./Pages/Prueba";
import Formulario from "./Orquestadores/Formulario"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/formulario" element={<Formulario />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;