import React, { useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import Cart from '../Cart/Cart';

const Home = () => {
    const products = useLoaderData();
    const freshProducts = products.filter(fresh => fresh.filter === 'freshPick');
    const fruits = products.filter(fruit =>  fruit.category === 'fruit');
    const [cart,setCart] = useState([])
    const handleAddToCart = pro_duct => {
      const exists = cart.find(ts => ts.id === pro_duct.id);
      if(exists){
        alert('product already exists');
      }else{
        const newCart = [...cart, pro_duct];
        setCart(newCart);
      }
    }
    return (
        <div className='home'>
            <div>
                <div className='fresh-pick-container'>
                    <h2>Fresh Pick</h2>
                    <p>সতেজ খান, সুস্থ থাকুন</p>
                    <div className='fresh-pick'>
                        {
                            freshProducts.map(product => <SingleProduct
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></SingleProduct>)
                        }
                    </div>
                </div>
                <div className='fruit-container'>
                    <h2>Fruit</h2>
                    <p>ভিটামিন এর খেয়াল না রাখলে হবে? </p>
                    <div className='fruit'>
                        {
                            fruits.map(fruit => <SingleProduct
                            key={fruit.id}
                            product={fruit}
                            handleAddToCart={handleAddToCart}
                            ></SingleProduct>)
                        }
                    </div>
                </div>
            </div>
            <div className='cart-container'>
                <Cart
                key={cart.id}
                cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;