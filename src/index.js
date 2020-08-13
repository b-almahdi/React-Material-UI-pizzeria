import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Users from "./Users";
import { Provider } from "react-redux";
import { getStore } from "./store";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Produit from "./Produit";
import AppBar from "./AppBar";
import SignUp from "./Containers/SignUpForm";
import ShopContainer from "./Containers/ShopContainer";
import CartContainer from "./Containers/CartContainer";
import ProductComponent from "./Components/ProductComponent";
import NotFoundContainer from "./Containers/NotFoundContainer";

const store = getStore();
store.subscribe(() => {
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      produits: [],
      cart: [],
    };
  }
  //         <UserSignup/>

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavBar cart={this.state.cart} />
            <AppBar />
            <Switch>
              <Route path="/users" component={Users} users={this.state.users} />

              <Route
                path="/SignUp"
                component={SignUp}
                users={this.state.users}
              />
              <Route
                path="/Produits"
                component={Produit}
                produits={this.state.produits}
              />
              <Route
                path="/ProdcutList"
                component={ShopContainer}
                produits={this.state.produits}
              />
              <Route
                path="/cart"
                component={CartContainer}
                produits={this.state.cart}
              />
              <Route
                path="/produit/:id"
                component={ProductComponent}
                produits={this.state.cart}
              />
              <Route component={NotFoundContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));

/*
     <div>
          <Hello name={this.state.name} />
          <h1 >
          React, Redux and Redux saga all CRUD operations!!
        </h1>
        <Users users={this.state.users} />
        
        </div>

        */
