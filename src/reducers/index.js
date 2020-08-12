import users from './users';
import produits from './produits'
import shopReducer from './cart'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  produits: produits,
  users: users,
  shop: shopReducer
});

export default rootReducer;