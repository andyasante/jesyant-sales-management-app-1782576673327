import React, { useEffect, useState } from 'react';
import { fetchCustomers, deleteCustomer } from '../services/api';

const CustomerManagement: React.FC = () => {
  const [customers, setCustomers] = useState<{ id: number; name: string; email: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCustomers = async () => {
      const data = await fetchCustomers();
      setCustomers(data);
      setLoading(false);
    };

    loadCustomers();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteCustomer(id);
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Customer Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManagement;