import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 30;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = product.price*product.quantity + total;
    }
    const tax = (total*0.0).toFixed(2);
    const GrandTotal = total+shipping+JSON.parse(tax);
    return (
        <div className='cart'>
            {cart.length > 0 && (
              <div className='added-product-details' id='added-product-details'>
                  {
                      cart.map(product => (
                        <div className='info'>
                            <p key={product.id}>{product.name} - Quantity: {product.quantity}</p>
                            <h2>X</h2>
                        </div>
                      ))
                  }
              </div>
            )}
            <div className='order-summery'>
                <h1>Order Summery</h1>
                <p>Selected Item: {cart.length}</p>
                <p>Total Price: Tk{total}</p>
                {cart.length > 0 && <p>Shipping Price: Tk{shipping}</p>}
                <p>Tax: Tk{tax}</p>
                <h3>Grand Total: Tk{GrandTotal}</h3>
                {cart.length > 0 && <button>Check Out</button>}
            </div>
        </div>
    );
};

export default Cart;