import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import { todosSuccess, actions } from './todosAction';

function* fetchTodos() {
  const payload = yield axios
    .get('http://localhost:3001/todos')
    .then((resp) => resp.data);
  yield put(todosSuccess(payload));
}

export function* todosWatcher() {
  yield takeEvery(actions.TODOS_REQUEST, fetchTodos);
}
