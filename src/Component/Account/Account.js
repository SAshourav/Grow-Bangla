import React from 'react';
import './Account.css';

const Account = () => {
  const user = {
    name: 'Sabbir Ahmed',
    email: 'sabbirahmed@gmail.com',
    address: 'Block A , Basundhara R/A',
    phone: '013646578'
  };

  const currentOrders = [    {      id: 1,      date: '2022-02-01',      status: 'Processing',      total: 50.99,      items: [        { id: 1, name: 'Tomato', quantity: 2 },        { id: 2, name: 'Tomato', quantity: 1 },      ]
    },
    {
      id: 2,
      date: '2022-01-15',
      status: 'Delivered',
      total: 30.50,
      items: [
        { id: 3, name: 'Honey', quantity: 1 },
      ]
    }
  ];

  const previousOrders = [    {      id: 3,      date: '2021-12-01',      status: 'Cancelled',      total: 10.00,      items: [        { id: 4, name: 'Mango', quantity: 1 },      ]
    }
  ];

  return (
    <div className="account-page">
      <div className="profile-section">
        <h2>Profile Information</h2>
        <div className="profile-info">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
      <div className="current-orders-section">
        <h2>Current Orders</h2>
        <div className="orders-list">
          {currentOrders.map(order => (
            <div className="order-card" key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Status: {order.status}</p>
              <p>Total: Tk {order.total.toFixed(2)}</p>
              <ul className="order-items">
                {order.items.map(item => (
                  <li key={item.id}>{item.name} ({item.quantity})</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="previous-orders-section">
        <h2>Previous Orders</h2>
        <div className="orders-list">
          {previousOrders.map(order => (
            <div className="order-card" key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Status: {order.status}</p>
              <p>Total: Tk {order.total.toFixed(2)}</p>
              <ul className="order-items">
                {order.items.map(item => (
                  <li key={item.id}>{item.name} ({item.quantity})</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
