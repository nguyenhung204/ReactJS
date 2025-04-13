import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import Logo from "./Logo"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />

            {/* Search Bar */}
            <div className="hidden md:flex ml-6 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="What would you like to cook?"
                  className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-pink-500 text-sm font-medium">
              What to cook
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 text-sm font-medium">
              Recipes
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 text-sm font-medium">
              Ingredients
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 text-sm font-medium">
              Occasions
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 text-sm font-medium">
              About Us
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-1 text-sm font-medium text-pink-500 hover:text-pink-600 focus:outline-none">
              Login
            </button>
            <button className="px-4 py-1 text-sm font-medium text-white bg-pink-500 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="What would you like to cook?"
                className="pl-10 pr-4 py-2 w-full bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
            </div>
            <a href="#" className="block text-gray-700 hover:text-pink-500 font-medium">
              What to cook
            </a>
            <a href="#" className="block text-gray-700 hover:text-pink-500 font-medium">
              Recipes
            </a>
            <a href="#" className="block text-gray-700 hover:text-pink-500 font-medium">
              Ingredients
            </a>
            <a href="#" className="block text-gray-700 hover:text-pink-500 font-medium">
              Occasions
            </a>
            <a href="#" className="block text-gray-700 hover:text-pink-500 font-medium">
              About Us
            </a>
            <div className="flex space-x-4 pt-2">
              <button className="px-4 py-1 text-sm font-medium text-pink-500 border border-pink-500 rounded-full hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 w-1/2">
                Login
              </button>
              <button className="px-4 py-1 text-sm font-medium text-white bg-pink-500 rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 w-1/2">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
