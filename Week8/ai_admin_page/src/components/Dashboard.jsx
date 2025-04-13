import React, { useState, useEffect } from 'react';
import { 
  Home,
  ShoppingCart,
  DollarSign,
  UserPlus,
  ArrowUp,
  ArrowDown, 
  Upload,
  Download,
  Edit
} from 'lucide-react';
import Breadcrumb from './Breadcrumb';

const Dashboard = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableError, setTableError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

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
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("API Error:", err);
      }
    };

    fetchOverviewData();
  }, []);

  // Fetch table data from API
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        setTableLoading(true);
        const response = await fetch('https://671891927fc4c5ff8f49fcac.mockapi.io/cuoiki');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setTableData(data);
        setTableLoading(false);
      } catch (err) {
        setTableError(err.message);
        setTableLoading(false);
        console.error("Table API Error:", err);
      }
    };

    fetchTableData();
  }, []);

  // Get status class for table
  const getStatusClass = (status) => {
    switch(status?.toLowerCase()) {
      case 'new':
        return 'bg-blue-100 text-blue-600';
      case 'in progress':
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-600';
      case 'completed':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Content */}
      <div className="p-6">
        <Breadcrumb />
        
        {/* Overview Section */}
        <div className="mb-6">
          <h2 className="flex items-center mb-4 text-lg font-semibold">
            <span className="mr-2 p-1.5 bg-pink-100 rounded-md text-pink-500">
              <Home size={16} />
            </span>
            Overview
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-3 rounded-md">
              Error loading overview data: {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Turnover Card */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Turnover</p>
                    <h3 className="text-2xl font-bold">$92,405</h3>
                    
                    <div className="flex items-center mt-2">
                      <span className="text-green-500 text-sm flex items-center">
                        <ArrowUp size={14} className="mr-1" />
                        3.55%
                      </span>
                      <span className="text-xs text-gray-400 ml-2">period of change</span>
                    </div>
                  </div>
                  <div className="bg-pink-100 p-3 rounded-full">
                    <ShoppingCart className="h-5 w-5 text-pink-500" />
                  </div>
                </div>
              </div>

              {/* Profit Card */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Profit</p>
                    <h3 className="text-2xl font-bold">$32,218</h3>
                    
                    <div className="flex items-center mt-2">
                      <span className="text-green-500 text-sm flex items-center">
                        <ArrowUp size={14} className="mr-1" />
                        5.35%
                      </span>
                      <span className="text-xs text-gray-400 ml-2">period of change</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              </div>

              {/* New Customer Card */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">New customer</p>
                    <h3 className="text-2xl font-bold">298</h3>
                    
                    <div className="flex items-center mt-2">
                      <span className="text-green-500 text-sm flex items-center">
                        <ArrowUp size={14} className="mr-1" />
                        6.42%
                      </span>
                      <span className="text-xs text-gray-400 ml-2">period of change</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <UserPlus className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Data Table Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Detailed report</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 flex items-center text-pink-500 border border-pink-500 rounded-md hover:bg-pink-50">
                <UserPlus size={16} className="mr-1.5" />
                <span>Add User</span>
              </button>
              <button className="px-3 py-1.5 flex items-center text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                <Upload size={16} className="mr-1.5" />
                <span>Import</span>
              </button>
              <button className="px-3 py-1.5 flex items-center text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                <Download size={16} className="mr-1.5" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Table */}
          {tableLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            </div>
          ) : tableError ? (
            <div className="bg-red-100 text-red-700 p-3 rounded-md">
              Error loading table data: {tableError}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 px-2 w-10">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Customer Name
                    </th>
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Company
                    </th>
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Order Value
                    </th>
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Order Date
                    </th>
                    <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="pb-3 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-3 px-2">
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="py-3">
                          <div className="flex items-center">
                            <img 
                              src={item.avatar || "/src/assets/person.png"} 
                              alt={item.name} 
                              className="w-8 h-8 rounded-full mr-3" 
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/src/assets/person.png";
                              }}
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-3">{item.company}</td>
                        <td className="py-3">${item.orderValue || item.value}</td>
                        <td className="py-3">{item.orderDate || item.date}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Edit size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="py-4 text-center text-gray-500">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!tableLoading && !tableError && tableData.length > 0 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t">
              <p className="text-sm text-gray-500">{tableData.length} results</p>
              <div className="flex space-x-1">
                <button
                  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  &lt;
                </button>
                
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === number
                          ? 'bg-pink-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {number}
                    </button>
                  )
                )}
                
                {totalPages > 5 && <span className="px-2 py-1">...</span>}
                
                {totalPages > 5 && (
                  <button
                    onClick={() => paginate(totalPages)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === totalPages
                        ? 'bg-pink-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {totalPages}
                  </button>
                )}
                
                <button
                  onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : currentPage)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;