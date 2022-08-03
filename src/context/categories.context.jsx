import { createContext, useState } from 'react';

import { SHOP_DATA_ONE } from '../shop-data/shop-data-one';
import { SHOP_DATA_TWO } from '../shop-data/shop-data-two';
import { SHOP_DATA_THREE } from '../shop-data/shop-data-three';
import { SHOP_DATA_FOUR } from '../shop-data/shop-data-four';
import { SHOP_DATA_FIVE } from '../shop-data/shop-data-five';


export const ProductsContext = createContext({
  productsListOne: [],
  productsListTwo: [],
  productsListThree: [],
  productsListFour: [],
  productsListFive: [],
});

export const ProductsProvider = ({ children }) => {
  const [productsListOne, setProductsListOne] = useState(SHOP_DATA_ONE);
  const [productsListTwo, setProductsListTwo] = useState(SHOP_DATA_TWO);
  const [productsListThree, setProductsListThree] = useState(SHOP_DATA_THREE);
  const [productsListFour, setProductsListFour] = useState(SHOP_DATA_FOUR);
  const [productsListFive, setProductsListFive] = useState(SHOP_DATA_FIVE);
  const value = { productsListOne, productsListTwo, productsListThree, productsListFour, productsListFive };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};