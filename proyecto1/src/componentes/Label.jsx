function Label({ texto, identificador }) {
    return (
        <label htmlFor={identificador}>
            {texto}
        </label>
    );
}

export default Label;