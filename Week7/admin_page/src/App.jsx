import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TotalTags from './components/TotalTag'
import DataTable from './components/DataTable'
import Pagination from './components/Pagination'

function App() {

  return (
    <>
      <div className="container-grid">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <div className="main-content">
          <header className="header">
            <Header />
          </header>
          <main className="dashboard">
            <div className="overview">
              <h1>Overview</h1>
              <TotalTags />
            </div>
            <div className="detail-report">
              <h1>Detail Report</h1>
              <DataTable />
            </div>
            <Pagination />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
