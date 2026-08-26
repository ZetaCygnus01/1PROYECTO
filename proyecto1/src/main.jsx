import Tarjeta from "./Orquestadores/Tarjeta";
import { StrictMode } from "react";
import { createRoot} from "react-dom/client";
import cartoon from './data.json'
createRoot(document.getElementById("root")).render(
  <StrictMode>
      {
        cartoon.map((cartoon)=>(
          <Tarjeta
            key={cartoon.id}
            title={cartoon.title}
            descripcion={cartoon.descripcion}
            img={cartoon.img}
            color={cartoon.color}
          />
        ))
      }
  </StrictMode>
)