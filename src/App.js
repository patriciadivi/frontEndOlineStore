import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCard from './pages/shoppingCard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingCard" component={ ShoppingCard } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
