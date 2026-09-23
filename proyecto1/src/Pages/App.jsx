import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tar from "./Tar";
import Inicio from "./Inicio";
import Formulario from "../Orquestadores/Formulario"  
import Notfound from "./NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<Inicio />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/Tar" element={<Tar/>}/>
        <Route path="*" element={<Notfound/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;