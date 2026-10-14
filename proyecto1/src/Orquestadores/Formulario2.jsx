import '../Style/Formulario.css';
import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Tarjeta from '../Orquestadores/Tarjeta'


const Etiquetas = [
  { etiqueta: "Nombre", tipo: "text", holder: "Ana" },
  { etiqueta: "Imagen", tipo: "text", holder: "URL" },
  { etiqueta: "Descripcion", tipo: "text", holder: "Descripcion" },
  { etiqueta: "Color", tipo: "text", holder: "Hexa o nombre" }
];

const Botones = [
  { tipo: "submit", nombre: "Enviar" },
  { tipo: "button", nombre: "Volver" },
  { tipo: "reset", nombre: "Reset" }
];
const inicial={Nombre:'', Imagen:'', Descripcion:'',Color:''}

export default function Formulario2(){
    const [datos,setDatos]=usestate(inicial)
    const cambiar=(e)=>{
        setDatos({...datos,[e.target.name]:e.target.value})
    }
    return (
    <div className="centrar">
      <form action="">
        <div>
          {Etiquetas.map((campo) => (
            <Campos
              key={campo.etiqueta}
              etiqueta={campo.etiqueta}
              tipo={campo.tipo}
              holder={campo.holder}
              valor={datos[campo.etiqueta]}
              onCambio={cambiar}
            />
          ))}
        </div>

        <div className="campos">
          {Botones.map((boton) => (
            <Boton
              key={boton.nombre}
              tipo={boton.tipo}
              nombre={boton.nombre}
            />
          ))
          }
        </div>
      </form>
      <Tarjeta
        title={datos.Nombre}
        img={datos.Imagen}
        descripcion={datos.Descripcion}
        Color={datos.Color}
      />
    </div>
  );
}