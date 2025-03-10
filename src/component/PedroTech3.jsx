import { useState, useEffect } from "react";

export default function PedroTech3() {
    const [age, setAge] = useState(0);

    const increaseAge = () => {
      setAge(age + 1);
    };

    return (
        <div className="PedroTech3">
            {age}
            <button onClick={() => increaseAge()}>+</button>
        </div>
    );
}