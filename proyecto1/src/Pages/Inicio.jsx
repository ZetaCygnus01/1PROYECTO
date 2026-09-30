import { useNavigate } from "react-router-dom"
import Desintegracion from "../Componentes/Home/Desintegracion"
import ABC from '../img/billy.jpg'
import "../Style/Inicio.css"

export default function Inicio() {
    const navigate=useNavigate()
    return (
        <div style={{display:"flex", FlexDirection:"Colum",alingItems:"Center"}}>
            <h1>Bienvenidos</h1>
            <Desintegracion
                src={ABC}
                onfin={()=> navigate('/Tarjetas')}
                />
        </div>
    )
}