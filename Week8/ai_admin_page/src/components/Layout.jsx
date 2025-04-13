import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Users, 
  BarChart2, 
  MessageSquare, 
  Code
} from 'lucide-react';
import logo from '../assets/logo.png';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation menu items with routes
  const navItems = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/projects', name: 'Projects', icon: FileText },
    { path: '/teams', name: 'Teams', icon: Users },
    { path: '/analytics', name: 'Analytics', icon: BarChart2 },
    { path: '/messages', name: 'Messages', icon: MessageSquare },
    { path: '/integrations', name: 'Integrations', icon: Code },
  ];

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setMobileMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="grid grid-cols-[220px_1fr] min-h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="bg-white border-r border-gray-100">
        {/* Logo */}
        <div className="p-4 mb-6 pl-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8" />
            <span className="ml-2 text-lg font-bold">Logo</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `
                flex items-center px-4 py-3 my-1 mx-2 rounded-md
                ${isActive 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'}
              `}
            >
              <item.icon size={18} className="mr-3" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Version Upgrade - Bottom Section */}
        <div className="mt-auto p-4 absolute bottom-0 w-[220px]">
          <div className="p-4 flex flex-col items-center">
            <img 
              src="/src/assets/image.png" 
              alt="Version upgrade" 
              className="w-28 h-28 mb-1" 
            />
            <p className="text-sm font-medium mb-1">V2.0 is available</p>
            <button className="w-full py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Try now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="overflow-auto">
        {/* Header - Removed as per the new design */}
        
        {/* Page Content */}
        <div className="p-5">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;