import Label from "../componentes/Label";
import Input from "../componentes/Input";
import Boton from "../componentes/Boton";
import { Link } from "react-router-dom";
import "../Style/Formulario.css";

function Formulario() {
    return (
        <div className="contenedor-formulario">

            <div className="formulario">

                <h1>Registro de estudiante</h1>

                <p className="descripcion">
                    Completa tus datos para registrarte como estudiante.
                </p>

                <form>

                    <div className="campo">
                        <Label texto="Nombre completo" />

                        <Input
                            tipo="text"
                            placeholder="Escribe tu nombre completo"
                            nombre="nombre"
                        />
                    </div>

                    <div className="campo">
                        <Label texto="Correo electrónico" />

                        <Input
                            tipo="email"
                            placeholder="ejemplo@correo.com"
                            nombre="correo"
                        />
                    </div>

                    <div className="campo">
                        <Label texto="Edad" />

                        <Input
                            tipo="number"
                            placeholder="Escribe tu edad"
                            nombre="edad"
                        />
                    </div>

                    <div className="campo">
                        <Label texto="Carrera" />

                        <Input
                            tipo="text"
                            placeholder="Ej: Desarrollo de Software"
                            nombre="carrera"
                        />
                    </div>

                    <div className="campo">
                        <Label texto="Semestre" />

                        <Input
                            tipo="number"
                            placeholder="Ej: 3"
                            nombre="semestre"
                        />
                    </div>

                    <Boton
                        texto="Registrar estudiante"
                        tipo="submit"
                    />

                </form>

                <div className="volver">
                    <Link to="/">
                        ← Volver al inicio
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Formulario;