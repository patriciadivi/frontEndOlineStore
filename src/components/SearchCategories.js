import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import SearchBar from './SearchBar';
import Header from './Header';

class SearchCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      id: '',
      list: [],
    };
  }

  async componentDidMount() {
    const listOfCategories = await getCategories();
    this.setState({ categories: listOfCategories });
  }

  handleChange = async ({ target: { value } }) => {
    const { results } = await getProductsFromCategoryAndQuery(value, undefined);
    this.setState({ id: value, list: results });
  };

  render() {
    const { categories, id, list } = this.state;
    const { btnAddToCart } = this.props;
    return (
      <div>
        <Header />
        <section>
          <div className="search-categories-container">
            <SearchBar
              btnAddToCart={ btnAddToCart }
              categoryId={ id }
              listSearch={ list }
            />
          </div>
          <div className="sidebar">
            {categories.map((category) => (
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
                  onChange={ this.handleChange }
                />
                {category.name}
              </label>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

SearchCategories.propTypes = {
  makeListId: PropTypes.func,
}.isRequired;

export default SearchCategories;
