import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <PrimeReactProvider >
    <StrictMode>
      <App />
    </StrictMode>,
  </PrimeReactProvider>
)
