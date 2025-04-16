import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <div className={`rounded-lg shadow-md p-6 ${
      themeMode === 'light' 
        ? 'bg-white border border-gray-200' 
        : 'bg-gray-800 border border-gray-700'
    }`}>
      <h2 className="text-2xl font-semibold mb-4">1. Counter App</h2>
      <div className="text-center">
        <h3 className={`text-3xl font-bold mb-4 ${
          themeMode === 'light' ? 'text-gray-800' : 'text-gray-200'
        }`}>
          Count: {count}
        </h3>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => dispatch(increment())}
            className={`px-4 py-2 rounded-md transition-all hover:scale-105 ${
              themeMode === 'light'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-400'
            }`}
          >
            Tăng
          </button>
          <button 
            onClick={() => dispatch(decrement())}
            className={`px-4 py-2 rounded-md transition-all hover:scale-105 ${
              themeMode === 'light'
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-red-500 text-white hover:bg-red-400'
            }`}
          >
            Giảm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;