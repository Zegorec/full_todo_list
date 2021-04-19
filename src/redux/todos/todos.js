const initStore = {
  todos: [],
  sort: 'All',
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
  if (action.type === actions.LOADED) {
    return {
      ...state,
      todos: action.payload,
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
  return state;
};

const actions = {
  ADD: 'ADD/TODO',
  DONE: 'DONE/TODO',
  DELETE: 'DELETE/TODO',
  LOADED: 'LOADED/TODOS',
  DELETEALL: 'DELETEALL',
  CHOSESORT: 'CHOSESORT',
};

export const addTodo = (todo) => {
  return {
    type: actions.ADD,
    payload: todo,
  };
};

export const doneTodo = (id) => {
  return {
    type: actions.DONE,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: actions.DELETE,
    payload: id,
  };
};

export const loadTodos = (todos) => {
  return {
    type: actions.LOADED,
    payload: todos,
  };
};

export const choseTodos = (category) => {
  return {
    type: actions.CHOSESORT,
    payload: category,
  };
};
