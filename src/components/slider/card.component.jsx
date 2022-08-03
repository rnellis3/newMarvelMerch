import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const Card = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);


    return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
          <Link className='detail-link' to='details' state={{product: product}} >EXPLORE</Link>
          <button id='mobile-addtocart' onClick={addProductToCart}>
          ADD
        </button>
        </div>

        <button id='main-addtocart' onClick={addProductToCart}>
          Add to cart
        </button>
      </div>
    );
  };

export default Card