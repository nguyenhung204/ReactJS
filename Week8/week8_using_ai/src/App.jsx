import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SummerRecipes from "./components/SummerRecipes"


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SummerRecipes/>
      </main>
    </div>
  )
}

export default App
