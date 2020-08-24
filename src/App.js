import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./components/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Manager from "./components/manager/manager";
import DatosApi from './components/axios/datosApi'
import Products from './components/products/products'
import ShoppingCart from './components/shoppingCart/shoppingCart'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Manager} />
            <Route exact path='/api' component={DatosApi} />
            <Route exact path='/products' component={Products}/>
            <Route exact path='/shoppingCart' component={ShoppingCart} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
