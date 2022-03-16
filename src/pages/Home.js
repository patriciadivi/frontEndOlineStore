import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchCategories from '../components/SearchCategories';
import Header from '../components/Header';

class Home extends Component {
  render() {
    const {
      shoppingListId,
      btnAddToCart,
      categories,
    } = this.props;
    return (
      <div>
        <Header />
        <section>
          <SearchCategories
            shoppingListId={ shoppingListId }
            btnAddToCart={ btnAddToCart }
            categories={ categories }
          />
          <div>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  shoppingListId: PropTypes.arrayOf(PropTypes.string),
  btnAddToCart: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.shape),
}.isRequired;

export default Home;
