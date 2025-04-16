import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todosSlice';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo('');
    }
  };

  return (
    <div className={`rounded-lg shadow-md p-6 ${
      themeMode === 'light' 
        ? 'bg-white border border-gray-200' 
        : 'bg-gray-800 border border-gray-700'
    }`}>
      <h2 className="text-2xl font-semibold mb-4">2. Todo List</h2>
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className={`flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
            themeMode === 'light'
              ? 'bg-white border-gray-300 focus:ring-blue-500 text-gray-800'
              : 'bg-gray-700 border-gray-600 focus:ring-blue-400 text-gray-100'
          }`}
        />
        <button 
          type="submit"
          className={`px-4 py-2 rounded-md transition-all ${
            themeMode === 'light'
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-green-500 hover:bg-green-400 text-white'
          }`}
        >
          Add Todo
        </button>
      </form>
      
      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className={`py-3 px-4 rounded-md ${
            themeMode === 'light' ? 'bg-gray-100' : 'bg-gray-700'
          }`}>
            No tasks yet. Add one above!
          </li>
        ) : (
          todos.map((todo) => (
            <li 
              key={todo.id} 
              className={`flex items-center justify-between py-3 px-4 rounded-md transition-all ${
                themeMode === 'light'
                  ? 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  : 'bg-gray-700 hover:bg-gray-600 border border-gray-600'
              } ${todo.completed ? 'opacity-75' : ''}`}
            >
              <span 
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
              >
                {todo.text}
              </span>
              <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                className={`ml-2 px-3 py-1 rounded-md text-sm transition-all hover:scale-105 ${
                  themeMode === 'light'
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-red-500 hover:bg-red-400 text-white'
                }`}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;