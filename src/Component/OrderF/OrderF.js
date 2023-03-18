import React from 'react';
import SingleOrder from '../Farmer/SingleOrder/SingleOrder';
import './OrderF.css';

const OrderF = () => {
  return (
    <div className='order-page'>
      <div className='order-accept'>
        <h2>Order waiting for confirmation</h2>
            <div className='accept-container'>
                <div className='product-row'>
                    <SingleOrder />
                    <SingleOrder />
                    <SingleOrder />
                </div>
            </div>
      </div>
      <div className='order-handled'>
        <h2>Order waiting for handling over</h2>
            <div className='product-row'>
                    <SingleOrder />
                    <SingleOrder />
                    <SingleOrder />
                </div>
      </div>
      <div className='previous-orders'>
        <h2>Previous Orders</h2>
      <div className='product-row'>
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
          </div>
      </div>
    </div>
  );
};

export default OrderF;
