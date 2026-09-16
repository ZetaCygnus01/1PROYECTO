import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <h1>Mi proyecto Santiago Garzon</h1>

      <p>Bienvenido a mi proyecto de React</p>

      <Link to="/prueba">
        Ver personajes
      </Link>
    </div>
  );
}

export default Inicio;