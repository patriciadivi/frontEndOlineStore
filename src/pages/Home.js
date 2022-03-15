import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchCategories from '../components/SearchCategories';

class Home extends Component {
  render() {
    const { shoppingListId, makeListId } = this.props;
    return (
      <section>
        <SearchCategories
          shoppingListId={ shoppingListId }
          makeListId={ makeListId }
        />
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  shoppingListId: PropTypes.arrayOf(PropTypes.string),
  makeListId: PropTypes.func,
}.isRequired;

export default Home;
