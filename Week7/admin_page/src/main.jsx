import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import App from './App.jsx'
import "primereact/resources/themes/lara-light-cyan/theme.css";

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider >
    <StrictMode>
      <App />
    </StrictMode>,
  </PrimeReactProvider>
)
