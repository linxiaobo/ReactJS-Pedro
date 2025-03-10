import { useState } from "react";

export default function PedroTech5() {
    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <div className="App">
            <button onClick={toggleText}> Show/Hide </button>
            {showText === true && <h1>HI, MY NAME IS BONNIE</h1>}
        </div>
    );
}