import { useState } from "react";
import Label from "./Label";
import Input from "./Input";

const RowInput = (props) => {
    const { type, id, text } = props;
    const [val, setVal] = useState("");
    const handleInput = (e) => setVal(e.target.value);

    const labelPositionClass = val ? "top-1 text-[11px]" : "top-3 text-xs";
    const inputPositionClass = val ? "pt-5 pb-1" : "pt-3 pb-3";

    return (
        <div
            className={`relative flex flex-col bg-g text-xs border px-3 mb-2 rounded-sm bg-gray-50 ${inputPositionClass}`}
        >
            <Label
                style={`absolute text-gray-600 transition-all duration-200 ease-in-out ${labelPositionClass} cursor-text`}
                label={id}
                text={text}
            />
            <Input
                type={type}
                id={id}
                style="outline-none focus:border-gray-700 border-gray-300 bg-none"
                value={val}
                name={id}
                handleInput={handleInput}
            />
        </div>
    );
};

export default RowInput;
