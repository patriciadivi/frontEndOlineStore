import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finalProductList: [],
    };
  }

  renderCart = (listRender) => (
    listRender.map((element) => (
      <div key={ element.title }>
        <img src={ element.thumbnail } alt={ element.title } />
        <p
          data-testid="shopping-cart-product-name"
        >
          {element.title}
        </p>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {element.trybeCount}
        </p>
      </div>
    ))
  );

  setParams = (listId, listObj) => {
    const finalList = [];
    listId.forEach((element) => {
      const count = listObj.filter((item) => item.id === element).length;
      const matchObj = listObj.find((obj) => obj.id === element);
      if (matchObj !== undefined) {
        matchObj.trybeCount = count;
        finalList.push(matchObj);
      }
    });
    const uniqueFinalList = finalList.filter(
      (product, index) => finalList.indexOf(product) === index,
    );
    return uniqueFinalList;
  }

  makeList = (finalList) => {
    const { shoppingListId, shoppingProductObjs } = this.props;
    if (finalList.length > 0) {
      return this.renderCart(finalList);
    } if (finalList.length === 0) {
      const listReturn = this.setParams(shoppingListId, shoppingProductObjs);
      if (listReturn.length > 0) {
        return this.renderCart(listReturn);
      }
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
  }

  render() {
    const { shoppingListId, shoppingProductObjs } = this.props;
    const { finalProductList } = this.state;
    return (
      <div>
        <Header />
        <section>
          {shoppingListId.length === shoppingProductObjs.length
            && this.makeList(finalProductList)}
        </section>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape,
}.isRequired;

export default ShoppingCart;
