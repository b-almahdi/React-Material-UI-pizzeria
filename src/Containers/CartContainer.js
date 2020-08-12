// This is the container for the Cart Component.

import { connect } from 'react-redux'
import { updateQuantity, checkout, removeCartItem, PostOrder } from './../actions'
import CartComponent from '../Components/CartComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.shop.cart,
    totalPrice: state.shop.totalPrice
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateQuantity: (cartItem, index, quantity) => dispatch(updateQuantity(cartItem, index, quantity)),
    checkout: () => dispatch(checkout()),
    removeCartItem: (index) => dispatch(removeCartItem(index)),
    PostOrder : (cart) => dispatch(PostOrder(cart))

  }
}

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent)

export default CartContainer
