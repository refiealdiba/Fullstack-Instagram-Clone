const Button = ({ type, style, text }) => {
    return (
        <button type={type} className={style}>
            {text}
        </button>
    );
};

export default Button;
