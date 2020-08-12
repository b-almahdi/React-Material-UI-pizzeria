import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { GET_PRODUITS } from './actions';

const styles = theme => ({
  card: {
      maxWidth: 300,
  },
  media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
  },
  button: {
      marginTop: 0,
      marginBottom: 0,
      marginRight: 'auto',
      marginLeft: 'auto'
  },
  grid: {
      marginTop: 20,
      marginLeft: 30
  }
});

class ProdcutList  extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      produits: [],
      cart : []

    }
  }

  /*  componentDidMount() {
      this.props.getProduits();
      console.log(this.props.produits);
    }*/
  render(){
    const { classes, item, addToCart } = this.props;

    const styles = theme => ({
      card: {
          maxWidth: 300,
      },
      media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
      },
      button: {
          marginTop: 0,
          marginBottom: 0,
          marginRight: 'auto',
          marginLeft: 'auto'
      },
      grid: {
          marginTop: 20,
          marginLeft: 30
      }
    });
  return (
    <Grid item xs={3} className={styles.grid}>
                <Card className={styles.card}>
                    <CardMedia
                    className={styles.media}
                    component="img"

                     image={this.props.item.imageUrl}
                    title='description goes..'
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.item.nom}
                    </Typography>
                    <Typography component="p">
                        {this.props.item.prix} Dhs
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" className={styles.button}   onClick={() => addToCart(item)} >
                            Add to Cart
                        </Button>
                    </CardActions>
                </Card>
               
            </Grid>

  );
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
export default connect(mapStateTopProps, mapDispatchToProps)(ProdcutList);