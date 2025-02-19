import { useState } from "react";
import './todo.css';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const handleAddTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    }
    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input 
                className="input"
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter a task" />
            <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="todo-list">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => handleRemoveTask(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )

}
export default Todo;