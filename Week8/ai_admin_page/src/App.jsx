import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.png'
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
  HelpCircle,
  TrendingUp,
  DollarSign,
  UserPlus,
  ArrowUp,
  ArrowDown,
  Upload,
  FileOutput,
  Edit
} from 'lucide-react'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [overviewData, setOverviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Fetch overview data from API
  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://671891927fc4c5ff8f49fcac.mockapi.io/test');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setOverviewData(data);
        setLoading(false);
        console.log("API Data:", data); // Log data for debugging
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("API Error:", err);
      }
    };

    fetchOverviewData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Helper function to get a specific card by title
  const getCardByTitle = (title) => {
    return overviewData.find(card => card.title === title) || {};
  };

  // Get icon by card title
  const getIconByTitle = (title) => {
    switch(title) {
      case 'Turnover':
        return { icon: TrendingUp, bgColor: 'bg-pink-100', textColor: 'text-pink-500' };
      case 'Profit':
        return { icon: DollarSign, bgColor: 'bg-green-100', textColor: 'text-green-500' };
      case 'New Customers':
        return { icon: UserPlus, bgColor: 'bg-blue-100', textColor: 'text-blue-500' };
      default:
        return { icon: TrendingUp, bgColor: 'bg-gray-100', textColor: 'text-gray-500' };
    }
  };

  // Parse the change value to number for comparison
  const parseChange = (changeStr) => {
    return changeStr ? parseFloat(changeStr) : 0;
  };

  // Sample data for the static table
  const tableData = [
    { id: 1, name: 'Elizabeth Lee', avatar: 'src/assets/person.png', company: 'AudioSystems', value: '$859', date: '10/07/2023', status: 'New' },
    { id: 2, name: 'Carlos Garcia', avatar: 'src/assets/person.png', company: 'SmartSoft', value: '$547', date: '24/11/2023', status: 'New' },
    { id: 3, name: 'Elizabeth Bailey', avatar: 'src/assets/person.png', company: 'Prime Time Telecom', value: '$864', date: '08/08/2023', status: 'In-progress' },
    { id: 4, name: 'Ryan Brown', avatar: 'src/assets/person.png', company: 'OmniTech Corporation', value: '$641', date: '31/08/2023', status: 'In-progress' },
    { id: 5, name: 'Ryan Young', avatar: 'src/assets/person.png', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
    { id: 6, name: 'Hailey Adams', avatar: 'src/assets/person.png', company: 'FlowTech', value: '$622', date: '15/06/2023', status: 'Completed' },
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'New':
        return 'bg-blue-100 text-blue-600';
      case 'In-progress':
        return 'bg-yellow-100 text-yellow-600';
      case 'Completed':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-md transition-all duration-300 ease-in-out z-30 h-screen fixed md:relative`}>
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen && (
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
              <span className="text-xl font-bold text-pink-500">Logo</span>
            </div>
          )}
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 md:block hidden">
            {isSidebarOpen ? (
              <ChevronLeft className="h-7 w-7" />
            ) : (
              <ChevronRight className="h-7 w-7" />
            )}
          </button>
        </div>
        
        {/* Sidebar Menu */}
        <nav className="mt-6 overflow-y-auto">
          <div className={`px-4 py-2 mx-2 ${isSidebarOpen ? 'bg-pink-500 text-white' : 'text-gray-600'} rounded-md flex items-center`}>
            <Home className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-3">Dashboard</span>}
          </div>

          <div className={`mt-2 px-4 py-2 mx-2 text-gray-600 hover:bg-pink-100 hover:text-pink-500 rounded-md flex items-center`}>
            <FileText className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-3">Projects</span>}
          </div>

          <div className={`mt-2 px-4 py-2 mx-2 text-gray-600 hover:bg-pink-100 hover:text-pink-500 rounded-md flex items-center`}>
            <Users className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-3">Teams</span>}
          </div>

          <div className={`mt-2 px-4 py-2 mx-2 text-gray-600 hover:bg-pink-100 hover:text-pink-500 rounded-md flex items-center`}>
            <BarChart2 className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-3">Analytics</span>}
          </div>

          <div className={`mt-2 px-4 py-2 mx-2 text-gray-600 hover:bg-pink-100 hover:text-pink-500 rounded-md flex items-center`}>
            <MessageSquare className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-3">Messages</span>}
          </div>

          <div className={`mt-2 px-4 py-2 mx-2 text-gray-600 hover:bg-pink-100 hover:text-pink-500 rounded-md flex items-center`}>
            <Settings className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-3">Integrations</span>}
          </div>
        </nav>

        {/* Version Info */}
        <div className="absolute bottom-0 w-full p-4">
          {isSidebarOpen && (
            <>
              <div className="flex justify-center mb-2">
                <img src="src/assets/image.png" alt="Illustration" className="h-28" />
              </div>
              <div className="text-center text-gray-600">
                <p className="font-semibold">V2.0 is available</p>
                <button className="mt-2 w-full py-1 border border-gray-200 rounded-md text-sm hover:bg-gray-100">
                  Try now
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'md:ml-64' : 'ml-0 md:ml-16'} transition-all duration-300 ease-in-out grid grid-rows-[auto_auto_1fr_auto] min-h-screen`}>
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
          {/* Mobile menu button */}
          <button onClick={toggleSidebar} className="md:hidden mr-4 text-gray-500">
            <Menu className="h-7 w-7" />
          </button>
          <h1 className="text-2xl font-semibold text-pink-500">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <Search className="h-6 w-6 text-gray-400 absolute left-3 top-2" />
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <Bell className="h-7 w-7" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 hidden sm:block">
              <HelpCircle className="h-7 w-7" />
            </button>
            <div className="h-10 w-10 rounded-full bg-pink-100 border border-pink-400 flex items-center justify-center text-pink-500 font-semibold">
              C
            </div>
          </div>
        </header>

        {/* Overview */}
        <section className="p-6 bg-white border-b">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview</h2>
          <p className="text-gray-500 mb-4">Total Tags</p>
          
          {loading ? (
            <div className="flex justify-center items-center h-24">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-3 rounded-md">
              Error loading overview data: {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {overviewData.map(card => {
                const { icon: Icon, bgColor, textColor } = getIconByTitle(card.title);
                const change = parseChange(card.change);
                
                return (
                  <div key={card.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                        <h3 className="text-2xl font-bold">{card.value}</h3>
                        
                        <div className="flex items-center mt-2">
                          {change >= 0 ? (
                            <span className="text-green-500 text-sm flex items-center">
                              <ArrowUp size={14} className="mr-1" />
                              {Math.abs(change).toFixed(2)}%
                            </span>
                          ) : (
                            <span className="text-red-500 text-sm flex items-center">
                              <ArrowDown size={14} className="mr-1" />
                              {Math.abs(change).toFixed(2)}%
                            </span>
                          )}
                          <span className="text-xs text-gray-400 ml-2">vs last month</span>
                        </div>
                      </div>
                      <div className={`${bgColor} p-3 rounded-full`}>
                        <Icon className={`h-5 w-5 ${textColor}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Detail Report / Data Table */}
        <section className="p-6 bg-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Detailed report</h2>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-1.5 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-50">
                <Upload className="w-4 h-4 mr-1" />
                <span>Import</span>
              </button>
              <button className="flex items-center px-3 py-1.5 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50">
                <FileOutput className="w-4 h-4 mr-1" />
                <span>Export</span>
              </button>
            </div>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="p-3 w-6">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="p-3 text-sm font-medium">CUSTOMER NAME</th>
                  <th className="p-3 text-sm font-medium">COMPANY</th>
                  <th className="p-3 text-sm font-medium">ORDER VALUE</th>
                  <th className="p-3 text-sm font-medium">ORDER DATE</th>
                  <th className="p-3 text-sm font-medium">STATUS</th>
                  <th className="p-3 w-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full mr-3" />
                        <span className="font-medium">{row.name}</span>
                      </div>
                    </td>
                    <td className="p-3 whitespace-nowrap">{row.company}</td>
                    <td className="p-3 whitespace-nowrap">{row.value}</td>
                    <td className="p-3 whitespace-nowrap">{row.date}</td>
                    <td className="p-3 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <p className="text-sm text-gray-500">68 results</p>
            <div className="flex space-x-1">
              <span className="px-3 py-1 bg-pink-500 text-white rounded-md">1</span>
              <span className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">2</span>
              <span className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">3</span>
              <span className="px-3 py-1 text-gray-600">...</span>
              <span className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">10</span>
              <span className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">⟩</span>
            </div>
          </div>
        </section>

        {/* Footer with pagination is now part of the table section */}
        <footer className="p-6 bg-white border-t mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 Your Company</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
