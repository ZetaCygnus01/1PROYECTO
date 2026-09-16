import Tarjeta from "../Orquestadores/Tarjeta";
import cartoon from "../data.json";

function Prueba() {
  return (
    <div>
      <h1>Personajes</h1>

      {
        cartoon.map((cartoon) => (
          <Tarjeta
            key={cartoon.id}
            title={cartoon.title}
            descripcion={cartoon.descripcion}
            img={cartoon.img}
            color={cartoon.color}
          />
        ))
      }

    </div>
  );
}

export default Prueba;