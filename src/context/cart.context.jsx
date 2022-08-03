import { createContext, useState, useEffect } from "react";
import { getUserCartFromCollection } from "../utils/firebase/firebase.utils";
import { UserContext } from "./user.context";
import { useContext } from 'react';


export const addCartItem = (cartItems, productToAdd) => {
    //sorts through the cartItems to see if an item already matches based on ID

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );
    //if it exists, create a quantity property and add 1
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    //return the new cartItems array with the product to add if it did not exist
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}



export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if(existingCartItem.quantity === 1){
    return clearCartItem(cartItems, productToRemove)
  }
  else {return cartItems.map(cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)}


//return the new cartItems array with the product to add if it did not exist

}

export const clearCartItem = (cartItems, productToClear) => {
  console.log('click')
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToClear.id

  );

  if(existingCartItem){
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
  }
  // cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}


export const CartContext = createContext({
    cartItems: [],
    setIsCartOpen: () => {},
    isCartOpen: false,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartPrice: 0,
    cartCount: 0,
    storedCartCollection: ''
})

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [cartPrice, setCartPrice] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    //test
    const [storedCartCollection, setStoredCartCollection] = useState([])


    useEffect(() => {
      //need to create a new variable so not directly effecting state
      const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
      setCartPrice(newCartTotal)
    }, [cartItems])

    useEffect(() => {
      const newCartCount = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );
      setCartCount(newCartCount);
    }, [cartItems]);

    //this was for the storing cart from userAccount
    // useEffect(() => {
    //   const collectedFunction = async() => {
    //     console.log("This is the testValue", testValue.currentUser)
    //   const collectedItemsTest = await getUserCartFromCollection(testValue.currentUser)
    //   console.log('This is the collected Items Test', collectedItemsTest.arrayValue.values[0].mapValue.fields)
    //   //setCartItems(collectedItemsTest.arrayValue.values[0].mapValue.fields.description)
    //   }
    //   collectedFunction()

    // })


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };
  //trying to add cart items from collection
  const setItemsToCart = (collectionItems) => {
    setCartItems(collectionItems)
  }
  //test
  const setStoredItemsToCart = (collectionItems) => {
    setStoredCartCollection(collectionItems)
  }

  const value = {cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartPrice, isCartOpen, setIsCartOpen, setItemsToCart,setStoredItemsToCart, storedCartCollection, cartCount}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
      );
}