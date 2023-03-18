import React, { useState } from 'react';
import './SIngleProduct.css';

const SingleProduct = ({product, handleAddToCart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
        if (quantity + change > 0) {
            setQuantity(quantity + change);
        }
    }
    product.quantity = quantity;

    return (
        <div className='single-product-container'>
            <img src={product.img} alt="" />
            <p>Tk {product.price}</p>
            <h2>{product.name}</h2>
            <div className='btn-container'>
                <div className='quantity-container'>
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span className='qun'>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <button onClick={() => handleAddToCart(product, quantity)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;
