import Micomponente from "./componentes/Micomponente";
import { StrictMode } from "react";
import { createRoot} from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Micomponente/>
  </StrictMode>
)