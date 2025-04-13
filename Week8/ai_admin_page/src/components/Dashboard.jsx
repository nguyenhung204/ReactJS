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
import EditModal from './EditModal';
import AddUserModal from './AddUserModal';

const Dashboard = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableError, setTableError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  // Handle successful user addition
  const handleAddSuccess = (newUser) => {
    // Add the new user to the table data
    setTableData(prevData => [newUser, ...prevData]);
    console.log("Added new user:", newUser);
  };

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

  // Handle row selection
  const toggleRowSelection = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id) 
        : [...prev, id]
    );
  };

  // Handle select all
  const toggleSelectAll = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map(item => item.id));
    }
  };

  // Handle opening the edit modal
  const handleEditClick = (item) => {
    setCurrentEditItem(item);
    setIsModalOpen(true);
  };

  // Handle saving edited item
  const handleSaveEdit = (editedItem) => {
    // Update the item in the table data
    setTableData(prevData => 
      prevData.map(item => 
        item.id === editedItem.id ? editedItem : item
      )
    );
    
    // In a real application, you would also make an API call here
    // to update the item on the server
    console.log("Updated item:", editedItem);
    
    // Close the modal
    setIsModalOpen(false);
    setCurrentEditItem(null);
  };

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
              {/* Use actual API data for overview cards */}
              {overviewData.length > 0 ? (
                // Assuming the API returns an array with the right properties
                // Map through the API data to display the overview cards
                overviewData.map((item, index) => {
                  // Define icons based on the data type
                  let cardIcon, bgColor, textColor;
                  switch (item.type?.toLowerCase() || index % 3) {
                    case 'turnover':
                    case 0:
                      cardIcon = <ShoppingCart className="h-5 w-5 text-pink-500" />;
                      bgColor = 'bg-pink-100';
                      textColor = 'text-pink-500';
                      break;
                    case 'profit':
                    case 1:
                      cardIcon = <DollarSign className="h-5 w-5 text-blue-500" />;
                      bgColor = 'bg-blue-100';
                      textColor = 'text-blue-500';
                      break;
                    case 'customers':
                    case 2:
                      cardIcon = <UserPlus className="h-5 w-5 text-green-500" />;
                      bgColor = 'bg-green-100';
                      textColor = 'text-green-500';
                      break;
                    default:
                      cardIcon = <ShoppingCart className="h-5 w-5 text-pink-500" />;
                      bgColor = 'bg-pink-100';
                      textColor = 'text-pink-500';
                  }

                  return (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                          <h3 className="text-2xl font-bold">
                            {item.value}
                          </h3>
                          
                          <div className="flex items-center mt-2">
                            {item.change ? (
                              <>
                                <span className={`${parseFloat(item.change) >= 0 ? 'text-green-500' : 'text-red-500'} text-sm flex items-center`}>
                                  {parseFloat(item.change) >= 0 ? (
                                    <ArrowUp size={14} className="mr-1" />
                                  ) : (
                                    <ArrowDown size={14} className="mr-1" />
                                  )}
                                  {Math.abs(parseFloat(item.change)).toFixed(2)}%
                                </span>
                                <span className="text-xs text-gray-400 ml-2">{item.period || "period of change"}</span>
                              </>
                            ) : (
                              <span className="text-xs text-gray-400">No change data</span>
                            )}
                          </div>
                        </div>
                        <div className={`${bgColor} p-3 rounded-full`}>
                          {cardIcon}
                        </div>
                      </div>
                    </div>
                          );
                        })
                      ) : (
                        <div className="bg-gray-100 p-4 rounded-md text-gray-500">No overview data available</div>
                      )}
                    </div>
                  )}
                </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Detailed report</h2>
            <div className="flex space-x-2">
              <button 
                className="px-3 py-1.5 flex items-center text-pink-500 border border-pink-500 rounded-md hover:bg-pink-50"
                onClick={() => setIsAddUserModalOpen(true)}
              >
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
                      <input 
                        type="checkbox" 
                        className="rounded" 
                        checked={selectedRows.length === tableData.length && tableData.length > 0} 
                        onChange={toggleSelectAll} 
                      />
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
                          <input 
                            type="checkbox" 
                            className="rounded" 
                            checked={selectedRows.includes(item.id)} 
                            onChange={() => toggleRowSelection(item.id)} 
                          />
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
                        <td className="py-3">{item.amount}</td>
                        <td className="py-3">{item.date}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button 
                            onClick={() => handleEditClick(item)}
                            className="text-gray-400 hover:text-gray-600"
                          >
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

      {/* Edit Modal */}
      <EditModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentEditItem(null);
        }}
        item={currentEditItem}
        onSave={handleSaveEdit}
      />

      {/* Add User Modal */}
      <AddUserModal 
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onAddSuccess={handleAddSuccess}
      />
    </>
  );
};

export default Dashboard;