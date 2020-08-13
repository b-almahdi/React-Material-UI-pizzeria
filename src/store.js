import { createStore, applyMiddleware ,compose } from 'redux';
import rootReducer from './reducers';
import reduxSaga from 'redux-saga';
import rootSaga from './sagas';

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {

  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const getStore = () => {
  const initialState = { 
    users: [],
    produits:[],
    cart:[],
    produit:{}
  };
  const reduxSagaMiddleware = reduxSaga();
  const store = createStore(rootReducer, initialState,
  composeEnhancer(applyMiddleware(reduxSagaMiddleware)),
  reHydrateStore(),
  localStorageMiddleware,
  );
  reduxSagaMiddleware.run(rootSaga)
  return store;
}