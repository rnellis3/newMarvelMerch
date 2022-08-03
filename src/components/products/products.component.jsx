import React from 'react'
import ProductCard from '../product-card/product-card.component'
import SimpleSlider from '../slider/slider.component'

const Products = ({products}) => {
    return (
        <div>
            <SimpleSlider />
        </div>
    )
//     const items = [ <img src={products.imageUrl} onDragStart={handleDragStart} role="presentation" />]
//   return (
//     <div>
//         {products.map(product =>
//             <AliceCarousel mouseTracking item={items} />
//         )}
//     </div>
//  )
// for(let i=0; i< products.length; i++){
//     return (
//         <AliceCarousel products={products} item={products[i].imageUrl} />
//         )
// }

}

export default Products