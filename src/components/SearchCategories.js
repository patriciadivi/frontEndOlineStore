import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchCategories extends Component {
  constructor() {
    super();

    this.state = {
      categoryId: '',
      query: '',
      listCompleteSearch: [],
    };
  }

  handleClick = async () => {
    const { query, categoryId } = this.state;
    if (categoryId === '') {
      const { results } = await getProductsFromCategoryAndQuery(undefined, query);
      this.setState({ query: '', listCompleteSearch: results });
    } if (categoryId !== '') {
      const { results } = await getProductsFromCategoryAndQuery(categoryId, query);
      this.setState({ query: '', listCompleteSearch: results });
    }
  };

  makeCard = (list, funcAdd) => list.map((element) => (
    <div key={ element.id }>
      <Link to={ `/carddetails/${element.category_id}/${element.id}` }>
        <div data-testid="product-detail-link">
          <div data-testid="product">
            <p>{element.title}</p>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>{element.price}</p>
          </div>
        </div>
      </Link>
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ funcAdd }
          value={ `${element.category_id} ${element.id}` }
        >
          add ao carrinho
        </button>
      </div>
    </div>
  ))

  checkComplete = () => {
    const { listCompleteSearch } = this.state;
    const { btnAddToCart } = this.props;
    if (listCompleteSearch.length > 0) {
      return this.makeCard(listCompleteSearch, btnAddToCart);
    }
  };

  handleQuery = ({ target: { value } }) => {
    this.setState({ query: value });
  }

  handleCategory = async ({ target: { value } }) => {
    const { query } = this.state;
    if (query === '') {
      const { results } = await getProductsFromCategoryAndQuery(value, undefined);
      this.setState({ categoryId: value, listCompleteSearch: results });
    } if (query !== '') {
      const { results } = await getProductsFromCategoryAndQuery(value, query);
      this.setState({ categoryId: value, listCompleteSearch: results });
    }
  };

  render() {
    const { query } = this.state;
    const { btnAddToCart, categories } = this.props;
    return (
      <div>
        <section>
          <div className="search-categories-container">
            <input
              className="text-input"
              type="text"
              data-testid="query-input"
              value={ query }
              onChange={ this.handleQuery }
            />
            <button
              className="button"
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </div>
          <div className="sidebar">
            { categories.length > 0
              && (
                categories.map((category) => (
                  <label
                    htmlFor={ category.id }
                    key={ category.name }
                    data-testid="category"
                  >
                    <input
                      id={ category.id }
                      value={ category.id }
                      type="radio"
                      name="category"
                      onChange={ this.handleCategory }
                    />
                    {category.name}
                  </label>
                ))
              )}
          </div>
          {this.checkComplete(btnAddToCart)}
        </section>
      </div>
    );
  }
}

SearchCategories.propTypes = {
  btnAddToCart: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.shape),
}.isRequired;

export default SearchCategories;
