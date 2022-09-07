import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { HeaderComponents } from '../styles/HeaderComponents';

class Header extends Component {
  render() {
    return (
      <HeaderComponents>
        <Link to="/">
          {' '}
          <h1>Shopping Cart</h1>
          {' '}
        </Link>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          <span><BsFillCartCheckFill /></span>
        </Link>
      </HeaderComponents>
    );
  }
}

export default Header;
