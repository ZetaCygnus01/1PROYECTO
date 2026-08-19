import Tarjeta from "./componentes/Tarjeta";
import { StrictMode } from "react";
import { createRoot} from "react-dom/client";
import Imagen1 from './img/IMAGES.png'
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Tarjeta
        title="Mario"
        descripcion="Este es un personaje muy divertido"
        img={Imagen1}
        color="red"
      />
  </StrictMode>
)