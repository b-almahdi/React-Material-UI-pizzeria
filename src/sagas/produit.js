import { takeEvery, call, put } from "redux-saga/effects";
import {
  SET_PRODUIT_BY_ID,
  GET_PRODUIT_BY_ID,
  GET_PRODUIT_BY_ID_FAILED,
} from "../actions";
import Axios from "axios";

export const watchGetProduitById = function* () {
  yield takeEvery(GET_PRODUIT_BY_ID, workerGetProduitsByID);
};

function* workerGetProduitsByID(action) {
  console.log("workerGetProduitsByID");
  let id = action.value;
  try {
    const uri = `http://localhost:8080/produits/${action.value}`;
    const result = yield call(Axios.get, uri);
    console.log(result.data);
    yield put({ type: SET_PRODUIT_BY_ID, value: result.data.message });
  } catch {
    console.log("failed");
    yield put({ type: GET_PRODUIT_BY_ID_FAILED });
  }
}
