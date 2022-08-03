import React, { Component, Fragment } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './card.component';
import './slider.styles.css';

 const Slider = ({products, timer, catergory, color}) => {

    const breakPoints = [
        {width:1, itemsToShow: 1},
        {width:500, itemsToShow: 2},
        {width:768, itemsToShow: 3},
        {width:1200, itemsToShow: 4}
    ]


   return (
        <div className={`carousel-container ${color}`}>
            <span className='category-title'>{catergory}</span>
            <div className='carousel-margin'>
         <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={timer} >
             {products.map(product => <Card product={product}/>)}
             {/* <Card number='1'/>
             <Card number='2'/>
             <Card number='3'/>
             <Card number='4'/>
             <Card number='5'/>
             <Card number='6'/>
             <Card number='7'/>
             <Card number='8'/> */}
         </Carousel>
         </div>
         </div>
   )
 }

 export default Slider