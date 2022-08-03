import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import logo from '../../assets/Marvel_Logo.svg.png';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.jsx';
import './cart-icon.styles.scss';


import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
}

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img className='logo' src={logo} />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
        </NavLinks>
        <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
