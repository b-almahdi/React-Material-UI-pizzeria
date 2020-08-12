// This component renders each item that is placed in the Cart Sidebar.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
const styles = theme => ({
    title: {
        width: 200,
        height: 200
    },
    textField: {
        width: 60,
        marginLeft: 20,
        marginRight: 15,
        marginBottom: 20
    },
    chip: {
        marginRight: 20
    },
    itemName: {
        marginRight: 15
    }
    
});

const useStyles2 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  const style = {
    img: {
        width: 128,
        height: 128,
    },
  };

class CartItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { quantity: this.props.cartItem.quantity }
    }
 
    // This is required for two-way data binding.
    componentWillReceiveProps() {
        this.state.quantity = Number(this.props.cartItem.quantity)
    }

    // Updates local state quantity.    
    onQuantityChanged = (e) => {
        this.setState({
            quantity: e.target.value
        });
    }
    

    render() {
        const { classes, cartItem, updateQuantity, removeCartItem, removeCartItemIndex } = this.props;
     

        return (<div>
            <div>
                <ListItem key={cartItem.id}>
                    <Chip color="primary" className={classes.chip} label={removeCartItemIndex + 1} />
                    <GridListTile key={cartItem.name}>
                        <img src={cartItem.imageUrl} alt={cartItem.name} />
                    </GridListTile>
                        <Typography variant="body2" className={classes.itemName}>{cartItem.name}</Typography>
                        <Typography variant="body2" className={classes.itemPrice}>{parseFloat(Math.round(cartItem.price * 100) / 100).toFixed(2)} Dhs</Typography>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => { e.preventDefault() }}>
                            <TextField
                                label="Quantity"
                                className={classes.textField}
                                value={this.state.quantity}
                                margin="normal"
                                onChange={this.onQuantityChanged}
                            />
                        </form>
                        <Tooltip title="Update Quantity" placement="top">
                            <IconButton color="primary" aria-label="Add to shopping cart" className={classes.icon} onClick={() => updateQuantity(cartItem, removeCartItemIndex, this.state.quantity)}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete" placement="top">
                            <IconButton color="secondary" className={classes.icon} onClick={() => removeCartItem(removeCartItemIndex)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                </ListItem>
                    <hr />
            </div>
        
            <div >
            <Paper >
              <Grid container spacing={2}>
              <GridListTile key={cartItem.name}>
                        <img src={cartItem.imageUrl} alt={cartItem.name} />
                    </GridListTile>
                      
                <Grid item>
                  <ButtonBase >
                    <img  alt="complex" src={cartItem.imageUrl} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography variant="body2" className={classes.itemName}>{cartItem.name}</Typography>
                        <Typography variant="body2" className={classes.itemPrice}>{parseFloat(Math.round(cartItem.price * 100) / 100).toFixed(2)} Dhs</Typography>
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => { e.preventDefault() }}>
                            <TextField
                                label="Quantity"
                                className={classes.textField}
                                value={this.state.quantity}
                                margin="normal"
                                onChange={this.onQuantityChanged}
                            />
                        </form>
                        <Tooltip title="Update Quantity" placement="top">
                            <IconButton color="primary" aria-label="Add to shopping cart" className={classes.icon} onClick={() => updateQuantity(cartItem, removeCartItemIndex, this.state.quantity)}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete" placement="top">
                            <IconButton color="secondary" className={classes.icon} onClick={() => removeCartItem(removeCartItemIndex)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
          </div>
        )
    }

}


CartItemComponent.propTypes = {
                    classes: PropTypes.object.isRequired,
    cartItem: PropTypes.object.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeCartItem: PropTypes.func.isRequired,
    removeCartItemIndex: PropTypes.number.isRequired
}

export default withStyles(styles)(CartItemComponent)
