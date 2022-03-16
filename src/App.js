import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getProductsFromId } from './services/api';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import CardDetails from './pages/CardDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shoppingListId: [],
      shoppingProductObjs: [],
    };
  }

  addToCart = async (item) => {
    const requestReturn = await getProductsFromId(item);
    this.setState((prevState) => (
      {
        shoppingListId: [...prevState.shoppingListId, item],
        shoppingProductObjs: [...prevState.shoppingProductObjs, requestReturn] }));
  }

  btnAddToCart = (event) => {
    const { value } = event.target;
    this.addToCart(value);
  }

  render() {
    const { shoppingListId, shoppingProductObjs } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home
              shoppingListId={ shoppingListId }
              makeListId={ this.makeListId }
              addToCart={ this.addToCart }
              btnAddToCart={ this.btnAddToCart }
            />
          </Route>
          <Route exact path="/ShoppingCart">
            <ShoppingCart
              shoppingListId={ shoppingListId }
              shoppingProductObjs={ shoppingProductObjs }
            />
          </Route>
          <Route
            exact
            path="/carddetails/:id"
            render={ (props) => (
              <CardDetails { ...props } btnAddToCart={ this.btnAddToCart } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
