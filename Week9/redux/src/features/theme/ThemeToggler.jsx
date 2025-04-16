import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

function ThemeToggler() {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className={`rounded-lg shadow-md p-6 ${
      themeMode === 'light' 
        ? 'bg-white border border-gray-200' 
        : 'bg-gray-800 border border-gray-700'
    }`}>
      <h2 className="text-2xl font-semibold mb-4">3. Toggle Theme</h2>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full ${
          themeMode === 'light' 
            ? 'bg-indigo-100 text-indigo-800' 
            : 'bg-indigo-900 text-indigo-200'
        }`}>
          <span className="font-medium">Current Theme: {themeMode}</span>
        </div>
        <button 
          onClick={() => dispatch(toggleTheme())}
          className={`px-4 py-2 rounded-md transition-all transform hover:scale-105 ${
            themeMode === 'light'
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
          }`}
        >
          Switch to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default ThemeToggler;