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
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await getProductsFromId(id);
    const listOfAttributes = response.attributes;
    this.setState({ product: response, attributes: listOfAttributes });
  };

  render() {
    const { product, attributes } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <section datatestid="product-detail-link">
        <h1 data-testid="product-detail-name">{`${title} - R$${price}`}</h1>
        <img src={ thumbnail } alt={ title } />
        <ul>
          {attributes.map(({ name, value }) => (
            <li key={ name } datatestid="product-detail-name">
              {`${name} - ${value}`}
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
