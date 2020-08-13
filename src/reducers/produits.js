import { SET_PRODUITS, SET_PRODUIT,SET_EDIT_MODE } from "../actions";

const produits = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUITS:
      return [...action.value];
    case SET_PRODUIT:
      return {...state,
      produits:[...action.value]};
    case SET_EDIT_MODE: {
      console.log(action);
      const produits = (state || []).map((x) => {
        if (x.id === action.value.produitId) {
          x.editMode = action.value.editMode;
        }
        return { ...x };
      });
      console.log(produits);
      return [...produits];
    }

    default:
      return state;
  }
};

export default produits;
