import React from 'react';
import { Link } from 'react-router-dom';

const HeaderF = () => {
    return (
        <nav>
                <div className='logo'>
                    <h1>logo</h1>
                </div>
                <div className='links'>
                    <Link className='active' to='/homeF'>Home</Link>
                    <Link to='/orderF'>Order</Link>
                    <Link to='/accountF'>Account</Link>
                </div>
        </nav>
    );
};

export default HeaderF;