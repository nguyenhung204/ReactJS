import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Teams from './pages/Teams'
import Analytics from './pages/Analytics'
import Messages from './pages/Messages'
import Integrations from './pages/Integrations'
import RootLayout from './RootLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="team" element={<Teams />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App