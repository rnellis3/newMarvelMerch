import React from 'react'
import { Outlet, Link } from 'react-router-dom';

import './home.styles.css';

const Home = () => {
  return (
    <div className="hero-image">
    <div className="hero-text">
      <h1>Marvel(ous) Equipment Emporium</h1>
      <Link className='main-link' to='/shop'>
            SHOP
          </Link>
    </div>
  </div>
  )
}

export default Home