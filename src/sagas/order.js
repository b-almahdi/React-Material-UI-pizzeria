import { takeEvery, call, put } from 'redux-saga/effects';
import { PostOrder } from '../actions';
import Axios from 'axios';


export const watchPostProduit = function* () {
  yield takeEvery(PostOrder, workerPostOrder);
}

function* workerPostOrder(action) {
  console.log('Adding a produit');
  console.log(action.value);
  try {
    const uri = 'http://localhost:8080/commandes/';
    const result = yield call(Axios.post, uri, action.value);
    yield put({ type: GET_PRODUITS});
    console.log('Added a order successfullt');
  } 
  catch {
    console.log('Failed');
  }
} 


