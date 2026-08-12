const user={
    nombre: "David",
    apellido: "Garzon",
    Edad: 99,
    avatar: "https://i.pinimg.com/736x/14/76/8e/14768e1c091928b52de2bd02b13e384e.jpg"
} 

export default function Micomponente(){
    return(
        <div>
        <h1>Hola {user.nombre} {user.apellido}</h1>
        <img src={user.avatar} alt="" />
        </div>
    )
}