const todos = [
    { title: 'Cabbage', completed: false, id: 1 },
    { title: 'Garlic', completed: false, id: 2 },
    { title: 'Apple', completed: true, id: 3 },
    { title: 'Orange', completed: true, id: 4 },
];

export default function TodoList() {
    const todo = todos.map(todo =>
        <li
            key={todo.id}
            style={{
                color: todo.completed ? 'magenta' : 'darkgreen'
            }}
        >
            {todo.title}
        </li>
    );

    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                {todo}
            </ul>
        </>
    );
}