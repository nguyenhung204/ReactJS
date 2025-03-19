import React, { useState, useRef, useEffect } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [editingId]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editingId !== null) {
        setTodos(
          todos.map(todo => 
            todo.id === editingId ? { ...todo, text: inputValue } : todo
          )
        );
        setEditingId(null);
      } else {
        const newTodo = {
          id: Date.now(),
          text: inputValue,
          completed: false
        };
        setTodos([...todos, newTodo]);
      }
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setInputValue('');
    }
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setInputValue(todo.text);
    inputRef.current.focus();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1>Todo App</h1>
      
      <form onSubmit={handleSubmit} className="flex mb-6">
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
        >
          {editingId !== null ? 'Update' : 'Add'}
        </button>
      </form>

      <ul className="space-y-3">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className={`flex items-center p-3 rounded-lg ${
              todo.completed 
                ? 'bg-green-50 border-l-4 border-green-500' 
                : 'bg-gray-50 border-l-4 border-gray-300'
            }`}
          >
            <span className={`flex-1 ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}>
              {todo.text}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => startEditing(todo)}
                disabled={todo.completed}
                className={`px-3 py-1 text-xs font-medium text-white rounded-md focus:outline-none 
                  ${todo.completed 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'
                  }`}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
}

export default Todo;