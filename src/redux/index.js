import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/categoriesReducer';
import { all } from 'redux-saga/effects';
import { todosReducer } from './todos/todosReducer';
import { todosWatcher } from './todos/todosSaga';
import { categoriesWatcher } from './categories/categoriesSaga';

export const rootReducer = combineReducers({
  todos: todosReducer,
  categories: categoriesReducer,
});

export function* rootSaga() {
  yield all([todosWatcher(), categoriesWatcher()]);
}
