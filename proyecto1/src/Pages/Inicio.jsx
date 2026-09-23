import { Link } from "react-router-dom";
import "../Style/Inicio.css";

function Inicio() {
    return (
        <div className="inicio">

            <div className="contenedor-inicio">

                <h1>Mi proyecto React</h1>

                <p className="subtitulo">
                    Bienvenido a mi proyecto. Selecciona una opción para continuar.
                </p>

                <div className="opciones">

                    <Link to="/Tar" className="tarjeta">
                        <div className="icono">📚</div>

                        <h2>Página de prueba</h2>

                        <p>
                            Explora las tarjetas organizadas de mi proyecto.
                        </p>

                        <span>Ir a la página →</span>
                    </Link>

                    <Link to="/formulario" className="tarjeta">
                        <div className="icono">📝</div>

                        <h2>Formulario</h2>

                        <p>
                            Completa el formulario con tus datos de estudiante.
                        </p>

                        <span>Ir al formulario →</span>
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Inicio;