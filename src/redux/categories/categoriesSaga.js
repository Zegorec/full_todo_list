import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { categoriesSuccess, actions } from './categoriesAction';

function* fetchCategories() {
  const payload = yield axios
    .get('http://localhost:3001/categories')
    .then((resp) => resp.data);
  yield put(categoriesSuccess(payload));
}

export function* categoriesWatcher() {
  yield takeEvery(actions.CATEGORIES_REQUEST, fetchCategories);
}
