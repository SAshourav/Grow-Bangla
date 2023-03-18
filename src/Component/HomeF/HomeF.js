import React, { useState } from 'react';
import SingleAddProduct from '../Farmer/SingleAddProduct/SingleAddProduct';
import './HomeF.css';

const HomeF = () => {
  const [unit, setUnit] = useState('kg'); // default unit is 'kg'
  const [category, setCategory] = useState('veg');
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  console.log(category);
  return (
    <div>
      <h1 className='H1'>Add New Item For Sell !</h1>
      <div className='sell-container'>
        <form className='sell-form' action=''>
          <label>Name of the product</label>
          <input type='text' />
          <label>Category</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value='veg'>সবজি</option>
            <option value='meat'>মাংস</option>
            <option value='fish'>মাছ</option>
            <option value='oil'>তেল</option>
            <option value='fruit'>ফল</option>
          </select>
          <label>Quantity</label>
          <input type='number' />
          <label>Unit</label>
          <select value={unit} onChange={handleUnitChange}>
            <option value='kg'>কেজি</option>
            <option value='ltr'>লিটার</option>
            <option value='dozon'>ডজন</option>
            <option value='motha'>মোথা</option>
          </select>
          <label>Price</label>
          <input type='number' />
          <button type='submit'>Add Product</button>
        </form>
      </div>
      <h1 className='H1'> Your Listed Product </h1>
      <SingleAddProduct></SingleAddProduct>
    </div>
  );
};

export default HomeF;
