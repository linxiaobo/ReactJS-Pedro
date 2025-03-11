import { useState } from "react";

const Tasks = (props) => {
    const completedClassName = props.task.completed ? 'text-decoration-line-through' : '';
    return (
        <li className="list-group-item list-group-item-action">
            <label className={"fs-4 col-md-1 " + completedClassName}>{props.task.taskName} - {props.task.id}</label>
            <button type="button" className="btn fs-4 bi bi-check-circle" onClick={() => props.completeTask(props.task.id)}></button>
            <button type="button" className="btn fs-4 bi bi-trash" onClick={() => props.deleteTask(props.task.id)} />
        </li>
    );
}

export default function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        };
        setTodoList([...todoList, task]);
        setNewTask("");
    }

    const deleteTask = (taskId) => {
        setTodoList(todoList.filter((task) => {
            return task.id !== taskId;
        }));
    }

    const completeTask = (taskId) => {
        setTodoList(todoList.map((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed
            }
            return task;
        }));
    }

    return (
        <div className="App">
            <div className="container text-center addTaskContainer">
                <div className="row align-items-center">
                    <div className="col-4"></div>
                    <div className="col-4 addTask">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" value={newTask} onChange={handleChange} />
                            <button className="btn btn-primary" onClick={addTask}>Add Task</button>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            <div className="container tasks">
                <ul className="list-group">
                    {todoList.map((task) => {
                        return <Tasks task={task} deleteTask={() => deleteTask(task.id)} completeTask={() => completeTask(task.id)} />
                    })}
                </ul>
            </div>
        </div>
    )
}