// This renders the Shop on the E-commerce application.

import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductList from '../ProductList';
import { connect } from 'react-redux';
import { GET_PRODUITS } from '../actions';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class ShopComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          produits: [],
          cart:[]
    
        }
      }
    
        componentDidMount() {
          this.props.getProduits();
          console.log(this.props.produits);
        }
    
    render() {
      const {  addToCart } = this.props;

        return (
            <Grid container spacing={24}   justify="space-evenly"            >
              <Grid item xs={12}   justify="flex-end">
                <FormControl variant="outlined">
    <InputLabel htmlFor="outlined-age-native-simple">Trier par</InputLabel>
    <Select
      native
    //  value={state.age}
    //  onChange={handleChange}
      label="Age"
      inputProps={{
        name: 'age',
        id: 'outlined-age-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option ></option>
      <option value={10}>Prix croissant</option>
      <option value={20}>Prix décroissant</option>
    </Select>
  </FormControl>

        </Grid>
            <Grid item xs={12}>
            <div >
                <Grid container spacing={24}> 
                    {this.props.produits.map(item => (
                        <ProductList item={item} addToCart={addToCart} />
                    ))}
                </Grid>
            </div>
            </Grid>
            </Grid>
        )
    }
}


const mapStateTopProps = (state) => {
    return {
        produits: state.produits
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      getProduits: () => {
        dispatch({ type: GET_PRODUITS });
      }
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(ShopComponent);

//export default ShopComponent;
