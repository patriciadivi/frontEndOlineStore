import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const listOfCategories = await getCategories();
    this.setState({ categories: listOfCategories });
  }

  render() {
    const { categories } = this.state;
    return (
      categories.map((element) => (
        <label
          htmlFor={ element.name }
          key={ element.name }
          data-testid="category"
        >
          <input
            id={ element.name }
            type="radio"
          />
          { element.name }
        </label>
      ))
    );
  }
}

export default Categories;
