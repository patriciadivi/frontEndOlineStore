import React, { Component } from 'react';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import Search from './Search';

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
    return (
      <section>
        <div className="search-bar-container">
          <Search categoryId={ id } listSearch={ list } />
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
    );
  }
}

export default SearchCategories;
