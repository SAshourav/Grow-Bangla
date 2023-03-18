import React from 'react';
import './SingleOrder.css';

const SingleOrder = () => {
    return (
        <div className='single-order-container'>
            <div className='accept-order-details'>
                <h3>Product Name : Tomato</h3>
                <p>Order date : 2-02-23</p>
                <p>Order Id : 1324</p>
            </div>
            <div className='btn-container'>
                <button>Update</button>
            </div>
        </div>
    );
};

export default SingleOrder;
