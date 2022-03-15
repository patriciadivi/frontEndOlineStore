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

  makeListId = (listId) => {
    this.setState({ shoppingListId: listId });
    listId.forEach(async (productId) => {
      const requestReturn = await getProductsFromId(productId);
      this.setState((prevState) => (
        { shoppingProductObjs: [...prevState.shoppingProductObjs, requestReturn] }));
    });
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
            render={ (props) => <CardDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
