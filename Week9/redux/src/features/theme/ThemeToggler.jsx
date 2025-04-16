import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

function ThemeToggler() {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className="feature-section">
      <h2>3. Toggle Theme</h2>
      <div className="theme-toggle">
        <p>Current Theme: {themeMode}</p>
        <button onClick={() => dispatch(toggleTheme())}>
          Switch to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default ThemeToggler;