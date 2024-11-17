const Label = ({ style, label, text }) => {
    return (
        <label className={style} htmlFor={label}>
            {text}
        </label>
    );
};

export default Label;
