import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


function Table({ onAddUser }) {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [displayEditModal, setDisplayEditModal] = useState(false);
  const [displayAddModal, setDisplayAddModal] = useState(false);

  const API_URL = "https://671891927fc4c5ff8f49fcac.mockapi.io/cuoiki";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  const openEditModal = (customer) => {
    setEditingCustomer(customer);
    setDisplayEditModal(true);
  };

  const hideEditModal = () => {
    setEditingCustomer(null);
    setDisplayEditModal(false);
  };

  const openAddModal = () => {
    setEditingCustomer({
      name: '',
      company: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    });
    setDisplayAddModal(true);
  };

  const hideAddModal = () => {
    setEditingCustomer(null);
    setDisplayAddModal(false);
  };

  const saveCustomer = async (updatedCustomer) => {
    try {
      const response = await fetch(`${API_URL}/${updatedCustomer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCustomer),
      });

      if (!response.ok) {
        throw new Error("Failed to update customer");
      }
      
      const updatedCustomers = customers.map(c => 
        c.id === updatedCustomer.id ? updatedCustomer : c
      );
      setCustomers(updatedCustomers);
      hideEditModal();
    } catch (err) {
      console.error("Error updating customer:", err);
    }
  }

  const addCustomer = async (newCustomer) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomer),
      });

      if (!response.ok) {
        throw new Error("Failed to add customer");
      }
      
      const addedCustomer = await response.json();
      setCustomers([...customers, addedCustomer]);
      hideAddModal();
    } catch (err) {
      console.error("Error adding customer:", err);
    }
  }

  useEffect(() => {
    if (onAddUser) {
      onAddUser(openAddModal);
    }
  }, [onAddUser]);

  const editButtonTemplate = (rowData) => {
    return (
      <div className="flex justify-content-center"
        onClick={() => openEditModal(rowData)}
        aria-label="Edit">
        <FontAwesomeIcon icon={faPen} />
      </div>
    );
  };
  const statusBodyTemplate = (rowData) => {
    const statusClasses = {
      "New": "bg-blue-100 text-blue-800",
      "Pending": "bg-yellow-100 text-yellow-800",
      "Completed": "bg-green-100 text-green-800",
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[rowData.status] || "bg-gray-100 text-gray-800"}`}>
        {rowData.status}
      </span>
    );
  };

  return (
    <div className="">
    <DataTable
      value={customers}
      selection={selectedCustomers}
      onSelectionChange={(e) => setSelectedCustomers(e.value)}
      selectionMode="checkbox"
      paginator
      rows={5}
      className="border border-gray-300 rounded-lg"
      emptyMessage="No customers found"
    >
      <Column
        selectionMode="multiple"
        headerStyle={{ width: '3rem' }}
        className="border-b border-gray-200"
      />
      <Column
        field="name"
        header="Customer Name"
        className="border-b border-gray-200 px-4 py-2"
        headerClassName="bg-gray-50 text-gray-700 font-medium px-4 py-2"
      />
      <Column
        field="company"
        header="Company"
        className="border-b border-gray-200 px-4 py-2"
        headerClassName="bg-gray-50 text-gray-700 font-medium px-4 py-2"
      />
      <Column
        field="amount"
        header="Order Value"
        className="border-b border-gray-200 px-4 py-2"
        headerClassName="bg-gray-50 text-gray-700 font-medium px-4 py-2"
      />
      <Column
        field="date"
        header="Order Date"
        className="border-b border-gray-200 px-4 py-2"
        headerClassName="bg-gray-50 text-gray-700 font-medium px-4 py-2"
      />
      <Column
        field="status"
        header="Status"
        body={statusBodyTemplate}
        className="border-b border-gray-200 px-4 py-2"
        headerClassName="bg-gray-50 text-gray-700 font-medium px-4 py-2"
      />
      <Column
        body={editButtonTemplate}
        style={{ width: '4rem' }}
        className="border-b border-gray-200"
        headerClassName="bg-gray-50"
      />
    </DataTable>
      
      {/* Edit Modal */}
      <Modal
        visible={displayEditModal}
        customer={editingCustomer}
        onHide={hideEditModal}
        onSave={saveCustomer}
        title="Edit Customer"
      />

      {/* Add User Modal */}
      <Modal
        visible={displayAddModal}
        customer={editingCustomer}
        onHide={hideAddModal}
        onSave={addCustomer}
        title="Add New Customer"
      />
    </div>
  );
}

export default Table;