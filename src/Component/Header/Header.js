import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
                <div className='logo'>
                    <h1>logo</h1>
                </div>
                <div className='links'>
                    <Link className='active' to='/home'>Home</Link>
                    <Link to='/account'>Account</Link>
                    <input type="text" placeholder='Search..'/>
                    <button className='src-btn'>Search</button>
                </div>
        </nav>
        
        
    );
};

export default Header;