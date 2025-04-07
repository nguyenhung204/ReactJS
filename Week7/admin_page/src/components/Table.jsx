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

  // Expose the addUser function via useEffect
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

  return (
    <div className="card">
      <DataTable selectionMode='checkbox' selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)} rows={6} rowsPerPageOptions={[5, 10, 25, 50]} paginator value={customers} stripedRows>
        <Column className='checkbox' selectionMode="multiple" headerStyle={{ width: '3rem' }} />
        <Column field="name" header="Customer Name" />
        <Column field="company" header="Company" />
        <Column field="amount" header="Order Value" />
        <Column field="date" header="Order Date" />
        <Column field="status" header="Status" />
        <Column body={editButtonTemplate} style={{ width: '4rem' }} />
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