import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import RecipeVideos from "./components/RecipeVideos"
import SummerRecipes from "./components/SummerRecipes"
import EditorsPick from './components/EditorsPick';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SummerRecipes/>
        <RecipeVideos/>
        <EditorsPick/>
      </main>
      <Footer />
    </div>
  )
}

export default App
