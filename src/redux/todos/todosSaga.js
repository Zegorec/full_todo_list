import { takeEvery, put } from 'redux-saga/effects';

import { todosSuccess, actions, todosRequest } from './todosAction';
import { requestAxios } from '../../API/api';
function* fetchTodos() {
  const payload = yield requestAxios('get', 'todos').then((resp) => resp.data);
  yield put(todosSuccess(payload));
}

function* postTodos(action) {
  yield requestAxios('post', 'todos', null, action.payload);
  yield put(todosRequest());
}

function* deleteTodos(action) {
  yield requestAxios('delete', 'todos', action.payload);
  yield put(todosRequest());
}

function* putTodos(action) {
  yield requestAxios('put', 'todos', action.payload.id, action.payload);
  yield put(todosRequest());
}

function* deleteAllTodos(action) {
  const todos = yield action.payload.todos.filter(
    (elem) => elem.category === action.payload.id
  );
  yield todos.map((elem) => requestAxios('delete', 'todos', elem.id));
  yield put(todosRequest());
}

export function* todosWatcher() {
  yield takeEvery(actions.TODOS_REQUEST, fetchTodos);
  yield takeEvery(actions.ADD, postTodos);
  yield takeEvery(actions.DELETE, deleteTodos);
  yield takeEvery(actions.DONE, putTodos);
  yield takeEvery(actions.DELETEALL, deleteAllTodos);
}
