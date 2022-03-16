import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import SearchCategories from '../components/SearchCategories';
import Header from '../components/Header';

class CardDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      attributes: [],
      email: '',
      grade: [],
      evaluation: '',
      isDisabled: true,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  componentDidUpdate() {
    const time = 2000;
    setTimeout(() => {
      this.getProduct();
    }, time);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (target.type === 'radio') {
      const list = [false, false, false, false, false];
      list[parseInt(value, 10) - 1] = true;
      this.setState({ [name]: list }, () => this.validateForm());
    } if (target.type !== 'radio') {
      this.setState({ [name]: value }, () => this.validateForm());
    }
  }

  validateForm = () => {
    const { email, grade } = this.state;
    if (
      email !== ''
      && grade.includes(true)
    ) {
      this.setState({ isDisabled: false });
    }
  }

  getProduct = async () => {
    const {
      match: {
        params: { categoryid, id },
      },
    } = this.props;
    const response = await api.getProductsFromCategoryAndQuery(categoryid, undefined);
    const obj = response.results.find((element) => element.id === id);
    const listOfAttributes = obj.attributes;
    this.setState({ product: obj, attributes: listOfAttributes });
  };

  render() {
    const { product, attributes, email, grade, evaluation, isDisabled } = this.state;
    const { title, thumbnail, price } = product;
    const {
      match: {
        params,
      },
      btnAddToCart,
      categories,
      shoppingListId,
    } = this.props;
    const arrayGrade = ['1', '2', '3', '4', '5'];
    return (
      <div>
        <Header />
        <div className="details-container">
          <SearchCategories
            shoppingListId={ shoppingListId }
            btnAddToCart={ btnAddToCart }
            categories={ categories }
          />
          {product.id === params.id
          && (
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
              <button
                data-testid="product-detail-add-to-cart"
                type="button"
                onClick={ btnAddToCart }
                value={ `${product.category_id} ${product.id}` }
              >
                add ao carrinho
              </button>
              <div>
                <label htmlFor="email">
                  Email:
                  <input
                    data-testid="product-detail-email"
                    type="text"
                    value={ email }
                    id="name"
                    name="email"
                    onChange={ this.handleChange }
                  />
                </label>
                <div>
                  <span>Avaliacao:  </span>
                  {arrayGrade.map((element, index) => (
                    <label htmlFor={ element } key={ element }>
                      {element}
                      <input
                        type="radio"
                        data-testid={ `${index + 1}-rating` }
                        id={ element }
                        value={ element }
                        checked={ grade[index] }
                        name="grade"
                        onChange={ this.handleChange }
                      />
                    </label>
                  ))}
                </div>
                <textarea
                  data-testid="product-detail-evaluation"
                  rows="5"
                  cols="40"
                  name="evaluation"
                  value={ evaluation }
                  onChange={ this.handleChange }
                />
                <button
                  type="button"
                  data-testid="submit-review-btn"
                  disabled={ isDisabled }
                  onClick={ this.submitEvaluation }
                >
                  Enviar
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape,
  categories: PropTypes.arrayOf(PropTypes.shape),
  shoppingListId: PropTypes.arrayOf(PropTypes.string),
  btnAddToCart: PropTypes.func,
}.isRequired;

export default CardDetails;
