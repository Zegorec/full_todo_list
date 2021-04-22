import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { todosSuccess, actions, todosRequest } from './todosAction';

function* fetchTodos() {
  const payload = yield axios
    .get('http://localhost:3001/todos')
    .then((resp) => resp.data);
  yield put(todosSuccess(payload));
}

function* postTodos(action) {
  yield axios.post('http://localhost:3001/todos', action.payload);
  yield put(todosRequest());
}

function* deleteTodos(action) {
  yield axios.delete(`http://localhost:3001/todos/${action.payload}`);
  yield put(todosRequest());
}

function* putTodos(action) {
  yield axios.put(
    `http://localhost:3001/todos/${action.payload.id}`,
    action.payload
  );
  yield put(todosRequest());
}

function* deleteAllTodos(action) {
  const todos = yield action.payload.todos.filter(
    (elem) => elem.category === action.payload.id
  );
  yield todos.map((elem) =>
    axios.delete(`http://localhost:3001/todos/${elem.id}`)
  );
  yield put(todosRequest());
}

export function* todosWatcher() {
  yield takeEvery(actions.TODOS_REQUEST, fetchTodos);
  yield takeEvery(actions.ADD, postTodos);
  yield takeEvery(actions.DELETE, deleteTodos);
  yield takeEvery(actions.DONE, putTodos);
  yield takeEvery(actions.DELETEALL, deleteAllTodos);
}
