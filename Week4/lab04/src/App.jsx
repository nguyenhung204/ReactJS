import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import RecipeBox from './components/RecipeBox/RecipeBox'

function App() {
 
  return (
    <>
      <NavBar 
        logoSrc="./src/assets/images/logo.png"
        searchPlaceholder="Search recipes..." 
        buttonText="Your Recipe Box"
        avatarSrc="./src/assets/images/avt.png"
      />
      <RecipeBox/>
       <Footer 
        logoSrc="./src/assets/images/logo-footer.png"
      />
    </>
  )
}

export default App
