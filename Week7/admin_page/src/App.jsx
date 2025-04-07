import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Table from './components/Table'
import Tags from './components/Tags'
import Project from './pages/Project'
import Teams from './pages/Teams'
import Analytics from './pages/Analytics'
import Messages from './pages/Messages'
import Integrations from './pages/Integrations'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container-grid">
          <aside className="sidebar  h-[100vh]">
            <Sidebar />
          </aside>
          <div className="main-content">
            <header className="header">
              <Header />
            </header>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/project" element={<Project />} />
              <Route path="/team" element={<Teams />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/integrations" element={<Integrations />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
