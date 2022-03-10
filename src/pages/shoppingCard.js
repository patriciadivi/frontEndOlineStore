import React, { Component } from 'react';

class ShoppingCard extends Component {
  render() {
    return (
      <section>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default ShoppingCard;
