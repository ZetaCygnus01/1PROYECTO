import Label from "../componentes/Label";
import Input from "../componentes/Input";
import Boton from "../componentes/Boton";
import { Link } from "react-router-dom";

function Formulario() {
    return (
        <div>
            <h1>Formulario</h1>
                <Link to="/">
                    Volver al inicio
                </Link>
            <br />
            <br />
            <Label texto="Nombre" />

            <Input
                tipo="text"
                placeholder="Escribe tu nombre"
                nombre="nombre"
            />

            <Boton
                texto="Enviar"
                tipo="submit"
            />
        </div>
    );
}

export default Formulario;