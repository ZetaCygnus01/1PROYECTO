import { Link } from 'react-router-dom';
import botonImg from '../../img/boton.png';

export default function Boton() {
    return (
        <Link to="/formulario">
            <img src={botonImg} alt="Ir al formulario" />
        </Link>
    );
}