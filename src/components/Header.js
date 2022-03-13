import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';

class Header extends Component {
  render() {
    return (
      <header>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <CgShoppingCart size={ 50 } color="black" className="cart-icon" />
        </Link>
      </header>
    );
  }
}

export default Header;
