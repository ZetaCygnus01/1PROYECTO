import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./Pages/Inicio";
import Prueba from "./Pages/Prueba";

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