import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Users, 
  BarChart2, 
  MessageSquare, 
  Settings,
  ChevronLeft, 
  ChevronRight,
  Menu,
  Search,
  Bell,
  HelpCircle
} from 'lucide-react';
import logo from '../assets/logo.png';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Navigation menu items with routes
  const navItems = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/projects', name: 'Projects', icon: FileText },
    { path: '/teams', name: 'Teams', icon: Users },
    { path: '/analytics', name: 'Analytics', icon: BarChart2 },
    { path: '/messages', name: 'Messages', icon: MessageSquare },
    { path: '/integrations', name: 'Integrations', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white h-full shadow-md transition-all duration-300 fixed z-10`}>
        {/* Logo section */}
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen ? (
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-pink-500">Logo</span>
            </div>
          ) : (
            <img src={logo} alt="Logo" className="h-8 w-8 mx-auto" />
          )}
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 hidden md:block">
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `
                mt-2 px-4 py-3 mx-3 rounded-md flex items-center cursor-pointer
                ${isActive 
                  ? `${isSidebarOpen ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-500'}`
                  : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}
              `}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="ml-3 font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        {isSidebarOpen && (
          <div className="absolute bottom-6 left-0 right-0 px-4">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center">
              <img src="/src/assets/image.png" alt="Upgrade" className="h-24 mb-2" />
              <p className="font-medium text-sm text-gray-700">V2.0 is available</p>
              <button className="mt-2 w-full py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                Try now
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-0" onClick={toggleSidebar}></div>
      )}

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            {isMobile && (
              <button onClick={toggleSidebar} className="mr-4 text-gray-500">
                <Menu size={24} />
              </button>
            )}
            <h1 className="text-xl font-semibold text-pink-500">
              {navItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <Bell size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-800 hidden sm:block">
              <HelpCircle size={20} />
            </button>
            <div className="h-9 w-9 rounded-full bg-pink-100 border-2 border-pink-500 flex items-center justify-center text-pink-500 font-medium">
              C
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;