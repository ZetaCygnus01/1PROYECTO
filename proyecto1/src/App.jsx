import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Prueba from "./pages/Prueba";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/prueba" element={<Prueba />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;