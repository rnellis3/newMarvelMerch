// import React from 'react'
// import { useContext } from 'react'
// import './products.styles.scss';
// import ProductCard from '../product-card/product-card.component'
// import { ProductsContext } from '../../context/categories.context'
// import TestProductCard from '../product-card/testProductCard.component';

// const Products = () => {
//     const {productsList} = useContext(ProductsContext)
//     let newList = []
//     Object.entries(productsList.map(prd => newList.push(prd.items.map(item => item)) ))


//     return (

//         <div>
//             {/* {Object.entries(newList.map(prd => <TestProductCard product={prd}/> ))} */}
//             {Object.keys(productsList).map((title) => {
//         const products = productsList;
//         return (
//           <TestProductCard key={title} title={title} products={products} />
//         );
//       })}
//         </div>
//     )
// }
// // const Products = () => {

// //   const {products} = useContext(ProductsContext)

// //   return (
// //     <div className='products-container'>
// //            {/* {products.map((product) => <ProductCard key={product.id} product={product} />)} */}
// //            {/* {Object.keys(products).map((title) => {
// //              const productList = products[title];
// //              return (
// //                <ProductCard key={title} title={title} products={productList}/>
// //              )
// //            } )} */}
// //            {Object.keys(products).map((title) => {
// //         const productsList = products[title];
// //         return (
// //           <CategoryPreview key={title} title={title} productsList={products} />
// //         );
// //       })}
// //       </div>

// //   )
// // }

//  export default Products