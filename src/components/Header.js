import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          Shopping Cart
        </Link>
      </header>
    );
  }
}

export default Header;
