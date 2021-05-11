import { actions } from './todosAction';

const initStore = {
  todos: [],
  sort: 'All',
  isLoadingTodos: false,
};

export const todosReducer = (state = initStore, action) => {
  if (action.type === actions.CHOSESORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === actions.TODOS_REQUEST) {
    return {
      ...state,
      isLoadingTodos: true,
    };
  }
  if (action.type === actions.TODOS_SUCCESS) {
    return {
      ...state,
      isLoadingTodos: false,
      todos: action.payload,
    };
  }
  return state;
};
