import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Table from './components/Table'
import Tags from './components/Tags'


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
              <Tags/>
            </div>
            <div className="detail-report">
              <h1>Detail Report</h1>
              <Table />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
