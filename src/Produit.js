import * as React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { GET_PRODUITS, PUT_PRODUIT, POST_PRODUIT, DELETE_PRODUIT, CANCEL_PRODUIT_UPDATE, EDIT_PRODUIT } from './actions';

class Produits extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produits: [],
      nom:'',
      quantite:0,
      prix:0,
      type:''
    }
    this.handleNomChange = this.handleNomChange.bind(this);
    this.handlePrixChange = this.handlePrixChange.bind(this);
    this.handleQuantiteChange = this.handleQuantiteChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    this.addProduit();  
    event.preventDefault();
  }
  componentDidMount() {
    this.props.getProduits();
  }
  handleNomChange(event) {
    this.setState({
        nom : event.target.value
      });
  }

  handlePrixChange(event) {
    this.setState({
        prix : event.target.value
      });
  }
  handleQuantiteChange(event) {
    this.setState({
        quantite : event.target.value
      });
  }
  handleTypeChange(event) {
    this.setState({
        type : event.target.value
      });
  }
  render() {
    return (
      <div className="container" >
        <form onSubmit={this.handleSubmit}>
            <label>
               Name:
               <input type="text" value={this.state.nom} onChange={this.handleNomChange} />
            </label>
            <label>
               Prix:
               <input type="text" value={this.state.prix} onChange={this.handlePrixChange} />
            </label>
            <label>
               Quantité:
               <input type="text" value={this.state.quantite} onChange={this.handleQuantiteChange} />
            </label>
            <label>
               Type:
               <input type="text" value={this.state.type} onChange={this.handleTypeChange} />
            </label>
            <input type="submit" value="Submit" />
         </form>
        {(this.props.produits || []).map(produit => {
          return (
            <div className="row mb-2">
              <div className="col-2" >
                {produit.nom}
              </div>
              <div className="col-2">
                {produit.quantite}
              </div>
              <div className="col-2">
                {produit.prix}
              </div>
              <div className="col-2">
                {produit.type}
              </div>
              <div className="col-2">
                {produit.editMode ?
                  <>
                    <button className="float-left mr-2" onClick={() => { this.updateProduit(produit) }}>Update</button>
                    <button className="float-left" onClick={() => { this.cancelUpdate(produit) }}>Cancel</button>
                  </> :
                  <>
                    <button className="float-left mr-2" onClick={() => { this.editProduit(produit) }}>Edit</button>
                    <button className="float-left" onClick={() => { this.deleteProduit(produit) }}>Delete</button>
                  </>
                }
              </div>
            </div>
          )
        })}
      </div >
    )
  }

  inputChanged = (event, field) => {
    this.setState({ [field]: event.target.value });
  }

  addProduit = () => {
    this.props.addProduit({ nom: this.state.nom,
       quantite: this.state.quantite,
       prix: this.state.prix,
       type: this.state.type, });
  }

  deleteProduit = (produit) => {
    this.props.deleteProduit(produit.id);
  }

  editProduit = (produit) => {
    this.props.editProduit(produit.id);
  }

  updateProduit = (produit) => {
    this.props.updateProduit(produit);
  }

  cancelUpdate = (produit) => {
    this.props.cancelUpdate(produit.id);
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
    },
    addProduit: (produit) => {
      dispatch({ type: POST_PRODUIT, value: produit });
    },
    deleteProduit: (produitId) => {
      dispatch({ type: DELETE_PRODUIT, value: produitId });
    },
    editProduit: (produitId) => {
      dispatch({ type: EDIT_PRODUIT, value: produitId });
    },
    updateProduit: (produit) => {     
      console.log('dispatch update', produit) 
      dispatch({ type: PUT_PRODUIT, value: produit });
    },
    cancelUpdate: (produitId) => {
      dispatch({ type: CANCEL_PRODUIT_UPDATE, value: produitId });
    },
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Produits);
