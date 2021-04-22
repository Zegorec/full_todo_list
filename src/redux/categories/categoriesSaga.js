import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  categoriesSuccess,
  actions,
  categoriesRequest,
} from './categoriesAction';

function* fetchCategories() {
  const payload = yield axios
    .get('http://localhost:3001/categories')
    .then((resp) => resp.data);
  yield put(categoriesSuccess(payload));
}

function* postCategories(action) {
  yield axios.post('http://localhost:3001/categories', action.payload);
  yield put(categoriesRequest());
}

function* deleteCategories(action) {
  yield axios.delete(`http://localhost:3001/categories/${action.payload}`);
  yield put(categoriesRequest());
}

export function* categoriesWatcher() {
  yield takeEvery(actions.CATEGORIES_REQUEST, fetchCategories);
  yield takeEvery(actions.ADD, postCategories);
  yield takeEvery(actions.DELETEALL, deleteCategories);
}
