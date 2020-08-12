export const GET_USERS = 'getUsers';
export const SET_USERS = 'setUsers';
export const POST_USER = 'postUser';
export const PUT_USER = 'putUser';
export const DELETE_USER = 'deleteUser';
export const EDIT_USER = 'editUser';
export const CANCEL_USER_UPDATE = 'cancelUserUpdate';
export const SET_EDIT_MODE = 'setEditMode';


export const GET_PRODUITS = 'getProduits';
export const SET_PRODUITS = 'setProduits';
export const POST_PRODUIT = 'postProduit';
export const PUT_PRODUIT = 'putProduit';
export const DELETE_PRODUIT = 'deleteProduit';
export const EDIT_PRODUIT = 'editProduit';
export const CANCEL_PRODUIT_UPDATE = 'cancelProduitUpdate';
export const SET_EDIT_MODE_PRODUIT = 'setEditModeProduit';



export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const CHECKOUT = 'CHECKOUT'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM' 
export const RESET_SHOP = 'RESET_SHOP'
export const POST_ORDER = 'POST_ORDER'


export const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      item
    }
  }
  
  export const updateQuantity = (cartItem, index, quantity) => {
      return {
          type: UPDATE_QUANTITY,
          cartItem,
          index,
          quantity
      }
  }
  
  export const checkout = () => {
      return {
          type: CHECKOUT
      }
  }
  
  export const removeCartItem = (index) => {
      return {
          type: REMOVE_CART_ITEM,
          index
      }
  }
  
  export const resetShop = () => {
      return {
          type: RESET_SHOP
      }
  } 

  export const PostOrder = (cart) => {
    return {
      type: POST_ORDER,
      cart
    }
  }