import React, { Component } from 'react';
import SearchCategories from '../components/SearchCategories';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <section>
        <Header />
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
