import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';
import Header from '../components/Header';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { location: {
      state: { shoppingCartList },
    } } = this.props;
    this.state = ({
      shoppingCartList,
      cartList: [],
      productQuantity: [],
    });
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = () => {
    const { shoppingCartList } = this.state;
    shoppingCartList.forEach(async (productId) => {
      const requestReturn = await getProductsFromId(productId);
      this.setState((prevState) => (
        { cartList: [...prevState.cartList, requestReturn] }), this.countItens());
    });
  }

  countItens = () => {
    const { shoppingCartList, cartList } = this.state;
    console.log('1', shoppingCartList, '2', cartList);
    shoppingCartList.forEach((element) => {
      const matches = cartList.forEach((item) => {
        if (item.id === element && item.trybeCount !== undefined) {
          this.setState((prevState) => (
            { productQuantity: [...prevState.productQuantity, item.trybeCount += 1] }));
        } if (item.id === element && item.trybeCount === undefined) {
          this.setState((prevState) => (
            { productQuantity: [...prevState.productQuantity, trybeCount = 1] }));
        }
      });
      console.log(matches);
    });
  }

  // countItens = (list) => {
  // const array = [0, 1, 2, 0, 4, 2, 6];
  // const newArray = [{
  //   id,
  //   contador,
  // }
  // ]; 
  //   for (let index = 0; index < list.length; index += 1) {

  //     for (let index2 = 0; index2 < list.length; index += 1) {
  //       if( list[index] === list[index2])

  //     }
  //   }
  // }

  render() {
    const { cartList } = this.state;
    return (
      <div>
        <Header />
        <section>
          {cartList.length > 0
            ? cartList.map((element) => (
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
                  {element.available_quantity}
                </p>
              </div>
            ))
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        </section>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape,
}.isRequired;

export default ShoppingCart;
