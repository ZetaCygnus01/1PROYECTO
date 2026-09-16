import '../Style/Tarjeta.css'
import Nombre from '../componentes/Nombre'
import Descripcion from '../componentes/Descripcion'
import Imagen from '../componentes/Imagen'

export default function Tarjeta({title,img,descripcion,color}){
    return(
        <div className='Centrar' style={{background:color}}>
            <Imagen
                imga={img}
            />
            <div className='Orga' >
                <Nombre 
                    title={title}
                />
                <Descripcion
                    descripcion={descripcion}
                />
            </div>
        </div>
    )
}