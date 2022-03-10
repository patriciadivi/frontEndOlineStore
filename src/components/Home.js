import React, { Component } from 'react';
import Categories from './Categories';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <section>
        <Header />
        <Categories />
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
