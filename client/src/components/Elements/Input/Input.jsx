const Input = (props) => {
    const { type, id, style, value, handleInput } = props;
    return <input type={type} id={id} className={style} value={value} onChange={handleInput} />;
};

export default Input;
