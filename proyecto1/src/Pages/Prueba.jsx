import Tarjeta from "../Orquestadores/Tarjeta";
import cartoon from "../data.json";

function Prueba() {
  return (
    <div>
      <h1>Personajes</h1>

      {cartoon.map((personaje) => (
        <Tarjeta
          key={personaje.id}
          title={personaje.title}
          descripcion={personaje.descripcion}
          img={personaje.img}
          color={personaje.color}
        />
      ))}
    </div>
  );
}

export default Prueba;