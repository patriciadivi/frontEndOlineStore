import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      listCompleteSearch: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  }

  handleClick = async () => {
    const { searchValue } = this.state;
    const { categoryId } = this.props;
    if (categoryId) {
      const response = await getProductsFromCategoryAndQuery(categoryId, searchValue);
      this.setState({ listCompleteSearch: response.results });
    } if (!categoryId) {
      const response = await getProductsFromCategoryAndQuery(undefined, searchValue);
      this.setState({ listCompleteSearch: response.results });
    }
  }

  makeCard = (list) => list.map(({ id, title, thumbnail, price }) => (
    <Link
      key={ id }
      to={ `/carddetails/${id}` }
    >
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    </Link>
  ))

  checkComplete = () => {
    const { listCompleteSearch } = this.state;
    const { listSearch } = this.props;
    console.log(listSearch);
    if (listCompleteSearch.length === 0 && listSearch.length > 0) {
      return (this.makeCard(listSearch));
    } if (listCompleteSearch.length > 0) {
      return (this.makeCard(listCompleteSearch));
    }
    return <p>Nenhum produto foi encontrado</p>;
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ searchValue }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {this.checkComplete()}
      </div>
    );
  }
}

Search.propTypes = {
  categoryId: PropTypes.string,
  listSearch: PropTypes.arrayOf(PropTypes.shape),
}.isRequired;

export default Search;
