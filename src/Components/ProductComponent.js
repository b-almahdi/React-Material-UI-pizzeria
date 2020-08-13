import React from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { GET_PRODUIT_BY_ID, addToCart } from "./../actions";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
  },
  formControl: {
    marginBottom: 20,
    minWidth: 200,
  },
  loader: {
    display: "block",
    width: "100%",
    textAlign: "center",
    marginBottom: 30,
  },
}));

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produit: {},
    };
    // let { id } = useParams();
    //const { GetProduitById } = this.props;
  }
  componentDidMount() {
    this.props.GetProduitById(this.props.match.params.id);
    // console.log(this.props.produits);

    console.log(this.props);
    console.log(this.props.produit);
  }
  componentDidUpdate() {
    console.log(this.props.produit);
  }
  render() {
    const { isLoading, isLoaded, produit, addToCart } = this.props;
    console.log("isLoading", isLoading);
    if (isLoading) {
      return <CircularProgress />;
    }
    if (!isLoaded || !produit) return <h1>Failed Or Empty</h1>;
    // If it is not loading and its not loaded, then return nothing.
    else {
      return (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={3}>
              <img src={produit.imageUrl} width="100%" alt="" />
            </Grid>
            <Grid item xs={12} sm={7} md={9}>
              <h1> {produit.nom} </h1>
              <p>{produit.description}</p>
              <p>{produit.prix}</p>
              {/* <QuantityInput
              className={classes.formControl}
              //getQuantity={(quantity) => setValues({ ...values, quantity })}
            />
            <VariantSelector
              className={classes.formControl}
              //   options={data.options}
              //    variants={variants}
              //  getVariantId={(variantId) => setValues({ ...values, variantId })}
            /> */}
              <Button
                variant="contained"
                color="primary"
                onClick={
                  (produit) => addToCart(produit)
                  //  dispatch(
                  //    services.checkout.addLineItem(values.variantId, values.quantity)
                  //  )
                }
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.produit.isLoading,
    isLoaded: state.produit.isLoaded,
    produit: state.produit.produit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetProduitById: (produitId) => {
      dispatch({ type: GET_PRODUIT_BY_ID, value: produitId });
    },
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
