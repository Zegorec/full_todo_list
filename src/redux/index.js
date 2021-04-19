import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/categories';

import { todosReducer } from './todos/todos';

export const rootReducer = combineReducers({
  todos: todosReducer,
  categories: categoriesReducer,
});
