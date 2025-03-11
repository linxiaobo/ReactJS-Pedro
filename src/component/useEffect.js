import {useState, useEffect} from "react";

export const Text = () => {
    const [text, setText] = useState("");
    const [testDeps, setTestDeps] = useState(0);

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        }
    }, [testDeps])

    return (
        <div>
            <input
                onChange={(event) => {
                    setText(event.target.value)
                }}
            />
            <h1>{text}</h1>
            <button className={"btn btn-danger"} onClick={() => {
                setTestDeps(() => {
                    return testDeps + 1;
                });
            }}
            >
                Change Deps
            </button>
            <button className={"btn btn-dark"} onClick={() => {
                setTestDeps(() => {
                    return testDeps;
                });
            }}
            >
                Not Change Deps
            </button>
            <h1>{testDeps}</h1>
        </div>
    )
}

export default function UseEffect() {
    const [showText, setShowText] = useState(false);
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-4">
                    <button className={"btn btn-primary"} onClick={() => {
                        setShowText(!showText);
                    }}
                    >
                        Show Text
                    </button>
                </div>
            </div>
            {showText && <Text />}
        </div>
    );
}