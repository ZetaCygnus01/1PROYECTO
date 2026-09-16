import Label from "../componentes/Label";
import Input from "../componentes/Input";
import Boton from "../componentes/Boton";

function Formulario() {
    return (
        <div>
            <h1>Formulario</h1>

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