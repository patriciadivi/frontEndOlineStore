import React, { Component } from 'react';
import Categories from './Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <Categories />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
