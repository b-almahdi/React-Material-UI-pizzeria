import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

export default class AppBar extends React.Component {
 
    render()  {
      return (
        <div>
        <Link to="/">Home </Link>
        <Link to="/users">Users </Link>
        <Link to="/Produits">Produit </Link>
        <Link to="/contact">contact </Link>
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/ProdcutList">ProdcutList</Link>
        <Link to="/Cart">Cart</Link>
      </div>
      );
    }
  }
