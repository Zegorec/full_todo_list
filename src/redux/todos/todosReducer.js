import { actions } from './todosAction';

const initStore = {
  todos: [],
  sort: 'All',
  isLoadingTodos: false,
};

export const todosReducer = (state = initStore, action) => {
  if (action.type === actions.ADD) {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  if (action.type === actions.DONE) {
    return {
      ...state,
      todos: [
        ...state.todos.map((elem) => {
          return elem.id === action.payload
            ? {
                id: elem.id,
                content: elem.content,
                status: !elem.status,
                category: elem.category,
                colors: elem.colors,
              }
            : elem;
        }),
      ],
    };
  }
  if (action.type === actions.DELETE) {
    return {
      ...state,
      todos: [...state.todos.filter((elem) => elem.id !== action.payload)],
    };
  }
  if (action.type === actions.DELETEALL) {
    return {
      ...state,
      todos: [
        ...state.todos.filter((elem) => elem.category !== action.payload),
      ],
    };
  }
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
