import '../Style/Tarjeta.css'
export default function Tarjeta({title,img,descripcion,color}){
    return(
        <div className='Centrar' style={{background:color}}>
            <img className="IMAGES" src={img} alt="" />
            <div className='Orga' >
                <h1 className='Titulo'>{title}</h1>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}