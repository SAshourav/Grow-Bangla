import React from 'react';
import './AccountF.css';

const AccountF = () => {
    return (
        <div className='main-page'>
            <div className='farmer-info'>
                <div className='left-side'>
                    <img src="" alt="" />
                    <h2>Name: Julfikur Ali</h2>
                    <h2>Home Town: Kamarkhali</h2>
                </div>
                <div className='right-side'>
                    <div>
                        <h1><span>List Of Farming</span></h1>
                        <div className='options'>
                            <p className='btn-type'>Poltry</p>
                            <p className='btn-type'>Fish</p>
                            <p className='btn-type'>Rice</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='farmer-revenue'>
                <div className='left-side'>
                        <h3>Farmer Since : 10feb - 2020</h3>
                        <h3>Total Complete Order : 50</h3>
                        <h3>Daily Sale Scale : 5000Tk</h3>
                        <h3>Total Revenue : 20000Tk</h3>
                    </div>
                    <div className='right-side'>
                        <h2>Graph section</h2>
                    </div>
                </div>
        </div>
    );
};

export default AccountF;