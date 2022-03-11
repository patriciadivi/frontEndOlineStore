import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Search from './Search';

class SearchCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      id: '',
    };
  }

  async componentDidMount() {
    const listOfCategories = await getCategories();
    this.setState({ categories: listOfCategories });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ id: value });
  }

  render() {
    const { categories, id } = this.state;
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
          <Search categoryId={ id } />
        </div>
      </section>
    );
  }
}

export default SearchCategories;
