import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import CardDetails from './pages/CardDetails';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      shoppingListId: [],
      shoppingProductObjs: [],
    };
  }

  async componentDidMount() {
    const listOfCategories = await api.getCategories();
    this.setState({ categories: listOfCategories });
  }

  addToCart = async (item) => {
    const requestReturn = await api.getProductsFromCategoryAndQuery(item[0], undefined);
    const obj = requestReturn.results.find((element) => element.id === item[1]);
    this.setState((prevState) => (
      {
        shoppingListId: [...prevState.shoppingListId, item[1]],
        shoppingProductObjs: [...prevState.shoppingProductObjs, obj] }));
  }

  btnAddToCart = (event) => {
    const { value } = event.target;
    const arrayValue = value.split(' ');
    this.addToCart(arrayValue);
  }

  render() {
    const { shoppingListId, shoppingProductObjs, categories } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home
              shoppingListId={ shoppingListId }
              makeListId={ this.makeListId }
              addToCart={ this.addToCart }
              btnAddToCart={ this.btnAddToCart }
              categories={ categories }
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
            path="/carddetails/:categoryid/:id"
            render={ (props) => (
              <CardDetails
                { ...props }
                btnAddToCart={ this.btnAddToCart }
                categories={ categories }
                shoppingListId={ shoppingListId }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
