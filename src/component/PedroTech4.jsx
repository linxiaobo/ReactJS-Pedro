import { useState } from "react";

export default function PedroTech4() {
    const [inputValue, setInputValue] = useState();

    const typeInputValue = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="PedroTech4">
            <input type="text" onChange={typeInputValue} />
            {inputValue}
        </div>
    );
}