import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
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
    const response = await getProductsFromCategoryAndQuery(value, undefined);
    this.setState({ id: value, list: response.results });
  }

  render() {
    const { categories, id, list } = this.state;
    return (
      <section>
        <div>
          {categories.map((element) => (
            <label
              htmlFor={ element.id }
              key={ element.name }
              data-testid="category"
            >
              <input
                id={ element.id }
                value={ element.id }
                type="radio"
                name="category"
                onChange={ this.handleChange }
              />
              { element.name }
            </label>
          ))}
        </div>
        <div>
          <Search categoryId={ id } listSearch={ list } />
        </div>
      </section>
    );
  }
}

export default SearchCategories;
