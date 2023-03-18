import React from 'react';
import './SingleAddProduct.css';

const SingleAddProduct = () => {
    let name = "Tomato"
    let quantity = 20;
    let inStock = 10;
    const unitPrice = 20;
    let sell = quantity * unitPrice;
    let rating = 4.5;
    let req = 2;
    return (
        <div className='single-add-product'>
            <div className='image-section'>
                <img src={"../../../images/tomato.jpg"} alt="" />
            </div>
            <div className='details-section'>
                <h2>{name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Stock: {inStock}</p>
                <p>Sell Generated: {sell}</p>
                <p>Rating: {rating}</p>
                <p>Requested Item: {req}</p>
            </div>
        </div>
    );
};

export default SingleAddProduct;