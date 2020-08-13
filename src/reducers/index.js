import users from "./users";
import produits from "./produits";
import produit from "./produit";
import shopReducer from "./cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  produits: produits,
  users: users,
  shop: shopReducer,
  produit: produit,
});

export default rootReducer;
