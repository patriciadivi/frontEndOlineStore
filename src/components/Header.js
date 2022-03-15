import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { shoppingCartList } = this.props;
    return (
      <header>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingcart',
            state: {
              shoppingCartList,
            },
          } }
        >
          Shopping Cart
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  shoppingCartList: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default Header;
