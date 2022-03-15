import React, { Component } from 'react';
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
      shoppingCartList: [],
    };
  }

  async componentDidMount() {
    const listOfCategories = await getCategories();
    this.setState({ categories: listOfCategories });
  }

  addToCart = (item) => {
    this.setState((prevState) => (
      { shoppingCartList: [...prevState.shoppingCartList, item] }));
  }

  handleChange = async ({ target: { value } }) => {
    const { results } = await getProductsFromCategoryAndQuery(value, undefined);
    this.setState({ id: value, list: results });
  };

  render() {
    const { categories, id, list, shoppingCartList } = this.state;
    return (
      <div>
        <Header shoppingCartList={ shoppingCartList } />
        <section>
          <div className="search-categories-container">
            <SearchBar
              addToCart={ this.addToCart }
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

export default SearchCategories;
