// This is the container for the Shop Component.

import { connect } from "react-redux";
import {  GET_PRODUIT_BY_ID } from "./../actions";
import ProductComponent from "../Components/ProductComponent";

const mapStateToProps = (state, ownProps) => {
  return {
    produit: state.produit,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    GetProduitById: (produitId) => {
        dispatch({ type: GET_PRODUIT_BY_ID, value: produitId });
      }  };
};

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductComponent);

export default ProductContainer;
