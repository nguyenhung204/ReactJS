
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Sidenav from './components/Sidenav'

function RootLayout() {
  return (
    <div className="container-grid">
      <aside className="sidebar h-[100vh]">
        <Sidenav/>
      </aside>
      <div className="main-content">
        <header className="header">
          <Header/>
        </header>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout