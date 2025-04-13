import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  )
}

export default App
