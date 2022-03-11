import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      listSearch: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  }

  handleClick = async () => {
    const { searchValue } = this.state;
    const { categoryId } = this.props;
    const response = await getProductsFromCategoryAndQuery(categoryId, searchValue);
    this.setState({ listSearch: response.results });
  }

  render() {
    const { searchValue, listSearch } = this.state;
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
        {listSearch.length > 0
          ? (listSearch.map(({ id, title, thumbnail, price }) => (
            <div data-testid="product" key={ id }>
              <p>{ title }</p>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </div>
          ))) : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

Search.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default Search;
