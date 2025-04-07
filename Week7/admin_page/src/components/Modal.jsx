import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal({ visible, customer, onHide, onSave }) {
  const [editingCustomer, setEditingCustomer] = useState({ ...customer });
  const modalRef = useRef(null);

  useEffect(() => {
    if (customer) {
      setEditingCustomer({ ...customer });
    }
  }, [customer]);
  
  const handleInputChange = (e, field) => {
    setEditingCustomer({
      ...editingCustomer,
      [field]: e.target.value
    });
  };

  const saveCustomer = () => {
    onSave(editingCustomer);
  };

  if (!visible) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-inherit z-10 shadow-lg opacity-50"
        onClick={onHide}
      ></div>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div 
          ref={modalRef}
          className="bg-white rounded-lg shadow-xl w-11/12 max-w-2xl mx-auto overflow-hidden focus:outline-none"
          tabIndex={-1}
        >
          <div className="flex justify-between items-center bg-[#F0F6FF] px-6 py-4 border-b">
            <h3 className="text-lg font-medium text-gray-900">
              Edit Customer
            </h3>
            <button
              onClick={onHide}
              className="text-gray-500 hover:text-[#F44B87FF] transition-colors"
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="p-6">
            {customer && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={editingCustomer.name || ''}
                    onChange={(e) => handleInputChange(e, 'name')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2B80FF] focus:border-[#2B80FF]"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={editingCustomer.company || ''}
                    onChange={(e) => handleInputChange(e, 'company')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2B80FF] focus:border-[#2B80FF]"
                  />
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Order Value
                  </label>
                  <input
                    type="text"
                    id="amount"
                    value={editingCustomer.amount || ''}
                    onChange={(e) => handleInputChange(e, 'amount')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2B80FF] focus:border-[#2B80FF]"
                  />
                </div>
                
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    value={editingCustomer.status || ''}
                    onChange={(e) => handleInputChange(e, 'status')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2B80FF] focus:border-[#2B80FF]"
                  />
                </div>
              </div>
            )}
          </div>
        
          <div className="bg-[#F0F6FF] px-6 py-4 flex justify-end space-x-3">
            <button
              onClick={onHide}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={saveCustomer}
              className="px-4 py-2 bg-[#F44B87FF] text-white rounded hover:bg-[#e03f77] transition-colors flex items-center gap-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;