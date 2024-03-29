import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardComponents } from '../styles/CardComponents';
import Header from '../components/Header';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finalProductList: [],
    };
  }

  validateIncrement = (i, list) => {
    list[i].trybeCount += 1;
    this.setState({ finalProductList: list });
  }

  validateDecrement = (i, list) => {
    if (list[i].trybeCount > 0) {
      list[i].trybeCount -= 1;
    }
    this.setState({ finalProductList: list });
  }

  renderCart = (listRender) => (
    listRender.map((element, i) => (
      <div key={ element.title }>
        <img src={ element.thumbnail } alt={ element.title } />
        <p
          data-testid="shopping-cart-product-name"
        >
          {element.title}
        </p>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          {element.trybeCount}
        </span>
        <button
          data-testid="product-decrease-quantity"
          value="-"
          type="button"
          onClick={ () => this.validateDecrement(i, listRender) }
        >
          {' '}
          -
          {' '}

        </button>
        <button
          data-testid="product-increase-quantity"
          value="+"
          type="button"
          onClick={ () => this.validateIncrement(i, listRender) }
        >
          {' '}
          +
          {' '}

        </button>
      </div>
    ))
  );

  setParams = (listId, listObj) => {
    const finalList = [];
    listId.forEach((element) => {
      // const count = listObj.filter((item) => item.id === element).length;
      const matchObj = listObj.find((obj) => obj.id === element);
      if (matchObj !== undefined) {
        matchObj.trybeCount = 1;
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
    /* const { result } = this.state; */
    if (finalList.length > 0) {
      return this.renderCart(finalList);
    } if (finalList.length === 0) {
      const listReturn = this.setParams(shoppingListId, shoppingProductObjs);
      console.log(listReturn);
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
      <CardComponents>
        <Header />
        <section>
          {shoppingListId.length === shoppingProductObjs.length
             && this.makeList(finalProductList)}
        </section>
      </CardComponents>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape,
  shoppingListId: PropTypes.arrayOf(PropTypes.string),
  shoppingProductObjs: PropTypes.arrayOf(PropTypes.shape),
}.isRequired;

export default ShoppingCart;
