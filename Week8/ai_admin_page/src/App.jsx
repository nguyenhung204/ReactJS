import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Component
import Layout from './components/Layout';

// Page Components
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Analytics from './components/Analytics';
import Messages from './components/Messages';
import Integrations from './components/Integrations';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
