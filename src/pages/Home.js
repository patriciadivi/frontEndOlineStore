import React, { Component } from 'react';
import SearchCategories from '../components/SearchCategories';

class Home extends Component {
  render() {
    return (
      <section>
        <SearchCategories />
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </section>
    );
  }
}

export default Home;
