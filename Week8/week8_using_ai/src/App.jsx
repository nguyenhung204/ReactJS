import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import RecipeVideos from "./components/RecipeVideos"
import SummerRecipes from "./components/SummerRecipes"


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SummerRecipes/>
        <RecipeVideos/>
      </main>
    </div>
  )
}

export default App
