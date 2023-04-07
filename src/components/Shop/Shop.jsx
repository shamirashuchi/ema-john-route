import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import cartProductLoader from '../../Loaders/CartProductLoaders';
import { addToDb } from '../../Utilities/fakedb';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { products, cart } = await cartProductLoader();
      setProducts(products);
      setCart(cart);
    };

    fetchData();
  }, []);
  const handleAddToCart = (product) =>{
    //if product doesnot exist in the cart , then set quantity = 1
    //if exist update quantity by 1
    let newCart = [];
    const exist =  cart.find(pd => pd.id === product.id);
    if(!exist){
        product.quantity = 1;
        newCart = [...cart,product];
    }
    else{
        exist.quantity = exist.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id)
        newCart =[...remaining, exist];
    }
         //const newCart = [...cart,product];
         setCart(newCart);
         addToDb(product.id)
}

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products.map((product) => (
          <Product key={product.id} product={product}handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className='cat-container'>
           <Cart cart={cart}></Cart>
    </div>
    </div>
  );
};

export default Shop;
