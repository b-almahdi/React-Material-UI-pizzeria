import { takeEvery, call, put } from "redux-saga/effects";
import {
  SET_PRODUITS,
  GET_PRODUITS,
  GET_PRODUITS_STARTED,
  GET_PRODUITS_FAILED,
  PUT_PRODUIT,
  POST_PRODUIT,
  DELETE_PRODUIT,
  CANCEL_PRODUIT_UPDATE,
  EDIT_PRODUIT,
  SET_EDIT_MODE_PRODUIT,
} from "../actions";
import Axios from "axios";

export const watchGetProduits = function* () {
  yield takeEvery(GET_PRODUITS, workerGetProduits);
};

export const watchGetProduitsParPrix = function* () {
  yield takeEvery(GET_PRODUITS, workerGetProduitsParPrix);
};

export const watchPostProduit = function* () {
  yield takeEvery(POST_PRODUIT, workerPostProduit);
};

export const watchPutProduit = function* () {
  yield takeEvery(PUT_PRODUIT, workerPutProduit);
};

export const watchDeleteProduit = function* () {
  yield takeEvery(DELETE_PRODUIT, workerDeleteProduit);
};

export const watchEditProduit = function* () {
  yield takeEvery(EDIT_PRODUIT, workerEditProduit);
};

export const watchCancelProduitUpdate = function* () {
  yield takeEvery(CANCEL_PRODUIT_UPDATE, workerCancelProduitUpdate);
};

function* workerGetProduits() {
  console.log("get produits");
  try {
    const uri = "http://localhost:8080/produits/";

    const result = yield call(Axios.get, uri);
    console.log(result.data);
    yield put({ type: SET_PRODUITS, value: result.data.message });
  } catch {
    console.log("Failed");
  }
}
function* workerGetProduitsParPrix() {
  console.log("workerGetProduitsParPrix");
  try {
    const uri = "http://localhost:8080/produits?sort=DESC";
    const result = yield call(Axios.get, uri);
    console.log(result.data);
    yield put({ type: SET_PRODUITS, value: result.data.message });
  } catch {
    console.log("Failed");
  }
}

function* workerPostProduit(action) {
  console.log("Adding a produit");
  console.log(action.value);
  try {
    const uri = "http://localhost:8080/produits/";
    const result = yield call(Axios.post, uri, action.value);
    yield put({ type: GET_PRODUITS });
    console.log("Added a produit successfullt");
  } catch {
    console.log("Failed");
  }
}

function* workerPutProduit(action) {
  console.log("Updating a produit");
  try {
    const uri = `https://jsonplaceholder.typicode.com/produits/${action.value.id}`;
    const result = yield call(Axios.put, uri, action.value);
    yield put({ type: GET_PRODUITS });
    console.log("Updated a produit successfully");
  } catch {
    console.log("Failed");
  }
}

function* workerDeleteProduit(action) {
  console.log("Deleting a produit");
  console.log(action.value);
  try {
    const uri = `http://localhost:8080/produits/${action.value}`;
    const result = yield call(Axios.delete, uri);
    yield put({ type: GET_PRODUITS });
    console.log("Deleted a produit successfully");
  } catch {
    console.log("Failed");
  }
}

function* workerEditProduit(action) {
  console.log("Editing a produit", action);
  yield put({
    type: SET_EDIT_MODE_PRODUIT,
    value: { produitId: action.value, editMode: true },
  });
}

function* workerCancelProduitUpdate(action) {
  console.log("Cancelled a produit edit");
  yield put({
    type: SET_EDIT_MODE_PRODUIT,
    value: { produitId: action.value, editMode: false },
  });
}
