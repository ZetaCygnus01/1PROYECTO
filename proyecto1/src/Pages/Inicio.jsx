import { Link } from "react-router-dom";

function Inicio() {
    return (
        <div>
            <h1>Mi proyecto React</h1>

            <p>Selecciona una opción:</p>

            <Link to="/prueba">
                Página de prueba
            </Link>

            <br />

            <Link to="/formulario">
                Formulario
            </Link>
        </div>
    );
}

export default Inicio;
