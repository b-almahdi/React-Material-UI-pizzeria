// This renders the Shop on the E-commerce application.

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { GET_PRODUITS } from "../actions";
import SortComponent from "./SortComponent";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class ShopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produits: [],
      cart: [],
    };
  }

  componentDidMount() {
    this.props.getProduits();
    console.log(this.props.produits);
  }

  render() {
    const { addToCart } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid xs={12}>
        <SortComponent />
        </Grid>
        <Grid item xs={9}>
          <div>
            <Grid container spacing={16}>
              {this.props.produits.map((item) => (
                <ProductList item={item} addToCart={addToCart} />
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    produits: state.produits,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduits: () => {
      dispatch({ type: GET_PRODUITS });
    },
  };
};
export default connect(mapStateTopProps, mapDispatchToProps)(ShopComponent);
