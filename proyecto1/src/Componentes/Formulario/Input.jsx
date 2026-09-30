function Input({ tipo, placeholder, nombre, identificador }) {
    return (
        <input
            id={identificador}
            type={tipo}
            placeholder={placeholder}
            name={nombre}
        />
    );
}

export default Input;