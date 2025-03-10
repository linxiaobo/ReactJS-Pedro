const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
];

const Planet = (props) => {
    if (props.isGasPlanet) {
        return (
            <h1>{props.name}</h1>
        )
    }
}

export default function Planets() {
    return (
        <section>
            {planets.map((planet, key) => <Planet isGasPlanet={planet.isGasPlanet} name={planet.name} />)}
        </section>
    );
}