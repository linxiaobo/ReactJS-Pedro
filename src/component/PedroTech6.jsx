import { useState } from "react";

export default function PedroTech6() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(() => {
            if ((count - 1) >= 0) {
                return count - 1;
            } else {
                return 0;
            }
        });
    };

    const setZero = () => {
        return setCount(0);
    }

    return (
        <div className="App">
            <button onClick={increaseCount}> increase Count </button>
            <button onClick={decreaseCount}> decrease Count </button>
            <button onClick={setZero}> set Zero </button>
            {count}
        </div>
    );
}