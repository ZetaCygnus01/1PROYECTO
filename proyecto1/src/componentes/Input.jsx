function Input({ tipo, placeholder, nombre }) {
    return (
        <input
            type={tipo}
            placeholder={placeholder}
            name={nombre}
        />
    );
}

export default Input;