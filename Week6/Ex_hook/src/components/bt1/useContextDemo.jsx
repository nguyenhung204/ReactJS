import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export function DarkThemeProvider({ children }) {
    const darkTheme = {
        backgroundColor: '#222',
        color: '#fff',
        padding: '20px',
        borderRadius: '8px'
    };

    return (
        <ThemeContext.Provider value={{ darkTheme }}>
            <div style={darkTheme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export default function useTheme() {
    return useContext(ThemeContext);
}