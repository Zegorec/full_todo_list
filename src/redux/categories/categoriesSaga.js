import { put, takeEvery } from 'redux-saga/effects';
import {
  categoriesSuccess,
  actions,
  categoriesRequest,
} from './categoriesAction';
import { requestAxios } from '../../API/api';

function* fetchCategories() {
  const payload = yield requestAxios('get', 'categories').then(
    (resp) => resp.data
  );
  yield put(categoriesSuccess(payload));
}

function* postCategories(action) {
  yield requestAxios('post', 'categories', null, action.payload);
  yield put(categoriesRequest());
}

function* deleteCategories(action) {
  console.log(action.payload.id);
  yield requestAxios('delete', 'categories', action.payload.id);
  yield put(categoriesRequest());
}

export function* categoriesWatcher() {
  yield takeEvery(actions.CATEGORIES_REQUEST, fetchCategories);
  yield takeEvery(actions.ADD, postCategories);
  yield takeEvery(actions.DELETEALL, deleteCategories);
}
