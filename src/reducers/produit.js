import {
  SET_PRODUIT_BY_ID,
  GET_PRODUIT_BY_ID,
  GET_PRODUIT_BY_ID_FAILED,
} from "../actions";

const initialState = {
  isLoaded: false,
  isLoading: false,
  produit: {},
};

const produit = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUIT_BY_ID:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PRODUIT_BY_ID:
      return {
        isLoading: false,
        isLoaded: true,
        produit: action.value,
      };
    case GET_PRODUIT_BY_ID_FAILED:
      return {
        isLoading: false,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default produit;
