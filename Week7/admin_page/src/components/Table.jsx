import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';

function Table() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState(null);

  useEffect(() => {
    fetch("https://671891927fc4c5ff8f49fcac.mockapi.io/cuoiki")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div className="card">
      <DataTable selectionMode='checkbox' selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)} rows={6} rowsPerPageOptions={[5, 10, 25, 50]} paginator value={customers} stripedRows>
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
        <Column field="name" header="Customer Name" />
        <Column field="company" header="Company" />
        <Column field="amount" header="Order Value" />
        <Column field="date" header="Order Date" />
        <Column field="status" header="Status" />
      </DataTable>

    </div>

  )

}
export default Table;