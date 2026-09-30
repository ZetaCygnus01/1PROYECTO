function Boton({ texto, tipo }) {
    return (
        <button type={tipo}>
            {texto}
        </button>
    );
}

export default Boton;