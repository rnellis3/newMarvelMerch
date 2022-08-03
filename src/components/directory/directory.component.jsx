import React, { useContext } from 'react'
import Products from '../products/products.component';
import './directory.styles.css';
import { ProductsContext } from '../../context/categories.context'
import Slider from '../slider/slider.component';
import Hero from '../hero/hero.component';

const Directory = () => {

  const {productsListOne, productsListTwo, productsListThree, productsListFour, productsListFive} = useContext(ProductsContext)

  const randomTime = () => {
    return Math.floor(Math.random() * 10000) +5;
}

  return (
    <div>
       <Hero />

    <div className='directory-container'>
      <Slider products={productsListOne} catergory={'Weapons'} timer={randomTime()} color={'off'}/>
      <Slider products={productsListTwo} catergory={'Materials'} timer={randomTime()} color={'on'}/>
      <Slider products={productsListThree} catergory={'Equipment'} timer={randomTime()} color={'off'}/>
      <Slider products={productsListFour} catergory={'Costumes'} timer={randomTime()} color={'on'}/>
      <Slider products={productsListFive} catergory={'Misc'} timer={randomTime()} color={'off'}/>
       {/* <Products products={productsListOne}/> */}
       {/* <Products products={productsListTwo}/>
       <Products products={productsListThree}/>
       <Products products={productsListFour}/>
       <Products products={productsListFive}/> */}
    </div>
    </div>
  )
}

export default Directory