import React, { Component } from 'react';
import { getProductsFromId } from '../services/api';

class cardDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

    getProduct = async () => {
      const { match: { params: { id } } } = this.props;
      const response = await getProductsFromId(id);
      console.log(response);
      this.setState({ product: response });
    }

    getAttributes = () => {
      const { product } = this.state;
      console.log(product);
      product.attributes.map((elem) => (
        <li key={ elem.name }>
          {`${elem.name} - ${elem.value_name}`}
        </li>
      ));
    };

    render() {
      const { product } = this.state;
      console.log(product.attributes);
      return (
        <section datatestid="product-detail-link">
          <h1 data-testid="product-detail-name">
            {`${product.title} - R$${product.price}`}
          </h1>
          <img src={ product.thumbnail } alt={ product.title } />
          <ol>
            { this.getAttributes() }
          </ol>
        </section>
      );
    }
}

export default cardDetails;
