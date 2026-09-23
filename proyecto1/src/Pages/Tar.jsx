import Tarjeta from "../Orquestadores/Tarjeta";
import cartoon from '../data.json'
import Bot from "../Componentes/Tarjeta/Boton";
import { Link } from "react-router-dom";

function Tar() {
  return (
    <div>
        <h1>Personajes</h1>
            <Link to="/">
            Volver al inicio
            </Link>
        {
            cartoon.map((personaje) => (
                <Tarjeta
                    key={personaje.id}
                    title={personaje.title}
                    descripcion={personaje.descripcion}
                    img={personaje.img}
                    color={personaje.color}
                />
            ))
        }
    <Bot/>
    </div>
  );
}

export default Tar;