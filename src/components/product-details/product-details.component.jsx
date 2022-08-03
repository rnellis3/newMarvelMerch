import React from 'react'
import {useLocation} from 'react-router-dom';
import './product-details.styles.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/user.context';
import { firebaseAddToCollection, getUserCartFromCollection, storeOrderedCart } from '../../utils/firebase/firebase.utils';

const ProductDetails = () => {
  const location = useLocation()
  const product = location.state.product
  const { currentUser } = useContext(UserContext);
  const { cartItems} = useContext(CartContext)

  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  const addToStoredCart = () => storeOrderedCart(currentUser, cartItems)
  // const addProductToCollection = () => firebaseAddToCollection(currentUser, cartItems);
  // const getCartFromCollection = () => getUserCartFromCollection(currentUser);

  console.log('this is from the product-details', product)
  return (
    <div className='product-details-container'>
      <div className='product-details-image-container'>
      <img id='product-details-image' src={product.imageUrl} alt={product.name} />
      </div>
      <div className='product-details-information'>
        <span id='hidden-line'></span>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button id='add-btn' onClick={addProductToCart}>Add Item To Cart</button>
      {/* <button onClick={addToStoredCart}>Add Items To Stored Cart</button> */}
      {/* <button onClick={addProductToCollection}>Add Item To Collection</button>
      <button onClick={getCartFromCollection}>Test Cart</button> */}
      </div>
      </div>
  )
}

export default ProductDetails