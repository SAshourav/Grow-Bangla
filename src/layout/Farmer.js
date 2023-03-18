import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderF from '../Component/HeaderF/HeaderF';

const Farmer = () => {
    return (
        <div>
            <HeaderF></HeaderF>
            <Outlet></Outlet>
        </div>
    );
};

export default Farmer;