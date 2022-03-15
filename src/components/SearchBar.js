import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      listCompleteSearch: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  };

  handleClick = async () => {
    const { searchValue } = this.state;
    const { categoryId } = this.props;
    if (categoryId) {
      const { results } = await getProductsFromCategoryAndQuery(
        categoryId,
        searchValue,
      );
      this.setState({ listCompleteSearch: results });
    }
    if (!categoryId) {
      const { results } = await getProductsFromCategoryAndQuery(
        undefined,
        searchValue,
      );
      this.setState({ listCompleteSearch: results });
    }
  };

  makeCard = (list, funcAdd) => list.map(({ id, title, thumbnail, price }) => (
    <div key={ id }>
      <Link to={ `/carddetails/${id}` }>
        <div data-testid="product-detail-link">
          <div data-testid="product">
            <p>{title}</p>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
          </div>
        </div>
      </Link>
      <div>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ funcAdd }
          value={ id }
        >
          add ao carrinho
        </button>
      </div>
    </div>
  ))

  checkComplete = (func) => {
    const { listCompleteSearch } = this.state;
    const { listSearch } = this.props;
    if (listCompleteSearch.length === 0 && listSearch.length > 0) {
      return this.makeCard(listSearch, func);
    }
    if (listCompleteSearch.length > 0) {
      return this.makeCard(listCompleteSearch, func);
    }
    return <p>Nenhum produto foi encontrado</p>;
  };

  render() {
    const { searchValue } = this.state;
    const { btnAddToCart } = this.props;
    return (
      <div className="search-bar">
        <input
          className="text-input"
          type="text"
          data-testid="query-input"
          value={ searchValue }
          onChange={ this.handleChange }
        />
        <button
          className="button"
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {this.checkComplete(btnAddToCart)}
      </div>
    );
  }
}

SearchBar.propTypes = {
  categoryId: PropTypes.string,
  listSearch: PropTypes.arrayOf(PropTypes.shape),
}.isRequired;

export default SearchBar;
