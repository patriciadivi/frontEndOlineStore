import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <main>
          <Link
            data-testid="shopping-cart-button"
            to="/shoppingcart"
          >
            Cart
          </Link>
        </main>
      </header>
    );
  }
}

export default Header;
