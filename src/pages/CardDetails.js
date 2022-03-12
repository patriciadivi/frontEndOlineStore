import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';

class CardDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      attributes: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getProductsFromId(id);
    const listOfAttributes = response.attributes;
    this.setState({ product: response, attributes: listOfAttributes });
  }

  render() {
    const { product, attributes } = this.state;
    return (
      <section datatestid="product-detail-link">
        <h1 data-testid="product-detail-name">
          {`${product.title} - R$${product.price}`}
        </h1>
        <img src={ product.thumbnail } alt={ product.title } />
        <ul>
          {attributes.map((element) => (
            <li key={ element.name }>
              <p
                datatestid="product-detail-name"
              >
                {`${element.name} - ${element.value_name}`}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape,
}.isRequired;

export default CardDetails;
